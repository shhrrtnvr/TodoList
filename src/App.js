import React, {useEffect, useState} from "react";
import './App.css';
import {Button, FormControl, Input, InputLabel, TextField} from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';


function App() {
  const d = new Date();
  const [todos, setTodos] = useState([]);
  const [work, setWork] = useState('');
  const [time, setTime] = useState(d.toTimeString().slice(0, 5));
  useEffect(() => {
      db.collection('todos').orderBy('todo.time').onSnapshot(snapshot => {
          setTodos(snapshot.docs.map(doc => doc.data().todo))
      })
  }, []);
  const saveTodo = (event) => {
    event.preventDefault();
    setWork('');
    const d = new Date();
    setTime(d.toTimeString().slice(0, 5));
    db.collection('todos').add({
        todo : {
            'time' : time,
            'text' : work
        }
    })
  }
  return (
    <div className="App">
        <h1>Welcome to Todo Assistant</h1>
        <form>
            <FormControl>
                <InputLabel htmlFor="workInput">Whats' next?</InputLabel>
                <Input
                    id="workInput"
                    value={work}
                    onChange={event => setWork(event.target.value)}
                />
                <TextField
                    label="Time"
                    type="time"
                    value= {time}
                    onChange={e => setTime(e.target.value)}
                />
                <Button
                    disabled={!work}
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={saveTodo}>
                    Add Event
                </Button>
            </FormControl>
        </form>

        <ul>
            {todos.map(todo => (
                <Todo time={todo.time} text={todo.text}/>
            ))}
        </ul>
    </div>
  );
}

export default App;
