import React from "react";
import {List, ListItem, ListItemText} from "@material-ui/core";
import './Todo.css';

function Todo(props) {
    let hr = parseInt(props.time.slice(0, 2));
    hr = (hr % 12) + (((hr % 12) === 0) ? 12 : 0);
    hr = (hr < 10) ? '0'+hr : toString(hr);
    let mn = parseInt(props.time.slice(3));
    mn = (mn < 10) ? '0'+mn : mn;
    const ap = hr >= 12 ? ' PM' : ' AM';
    return (
        <List className='todo_list'>
            <ListItem>
                <ListItemText primary={hr+':'+mn+ap} secondary={props.text} />
            </ListItem>
        </List>
    )
}

export default Todo;
