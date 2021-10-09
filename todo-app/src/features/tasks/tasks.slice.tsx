// DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Task from '../../shared/interfaces/task';

const initialState: Task[] = [
    {id: 1, title: 'Shopping', completed: false},
    {id: 2, title: 'Laundry', completed: false},
    {id: 3, title: 'Homework', completed: false}
];

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        //add new task -- receives title of task as string
        created( state, action: PayloadAction<string>) {
            const newTask: Task = {
                id: Date.now(),
                title: action.payload,
                completed: false
            };
            state.push(newTask);
        },

        //update task -- receives a task
        updated( state, action: PayloadAction<Task>) {
            let indexOfTask: number = state.findIndex(
                task => task.id === action.payload.id
            );
            state[indexOfTask].title = action.payload.title;
        },

        //delete task -- receives id of task
        deleted( state, action: PayloadAction<number>) {
            let indexOfTask: number = state.findIndex(task => task.id === action.payload)
            state.splice(indexOfTask, 1);
        },

        //complete task -- receives id of task
        completed( state, action: PayloadAction<number>) {
            let indexOfTask: number = state.findIndex(task => task.id === action.payload)
            state[indexOfTask].completed = !state[indexOfTask].completed;
        },
    }
});

export const {created, updated, deleted, completed } = taskSlice.actions;
export default taskSlice.reducer;