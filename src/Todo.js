import React from "react";
import {Button, List, ListItem, ListItemText} from "@material-ui/core";
import './Todo.css';
import db from "./firebase";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Todo(props) {
    let hr = parseInt(props.time.slice(0, 2));
    let mn = parseInt(props.time.slice(3));
    const ap = (hr >= 12 ? ' PM' : ' AM');
    hr = (hr % 12) + (((hr % 12) === 0) ? 12 : 0);
    hr = (hr < 10) ? '0'+hr : hr;
    mn = (mn < 10) ? '0'+mn : mn;

    return (
        <List className='todo_list'>
            <ListItem>
                <ListItemText primary={hr+':'+mn+ap} secondary={props.text} />
                {/*<EditIcon onClick={} />*/}
                <DeleteIcon onClick={e => db.collection('todos').doc(props.id).delete()}/>

            </ListItem>
        </List>
    )
}

export default Todo;
