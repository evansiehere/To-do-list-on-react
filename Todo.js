import { Checkbox, IconButton, ListItem } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

function Todo({ todo,toggleComplete, removeTodo }) {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }
    
    return (
    <ListItem style={{ display: "flex"}}>
        <Checkbox
            checked={todo.completed}
          
            onClick={handleCheckboxClick}
        />
       <p>{todo.task}</p>
        <IconButton onClick={handleRemoveClick}>
            <CloseIcon />
        </IconButton>
    </ListItem>
    );
}

export default Todo;