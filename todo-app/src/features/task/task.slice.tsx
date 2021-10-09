// DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
    id: number;
    title: string;
    completed: boolean;
};

const initialState: TaskState[] = [
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
            const newTask: TaskState = {
                id: Date.now(),
                title: action.payload,
                completed: false
            };
            state.push(newTask);
        },

        //update task -- receives a task
        updated( state, action: PayloadAction<TaskState>) {
            state[action.payload.id].title = action.payload.title;
        },

        //delete task -- receives id of task
        deleted( state, action: PayloadAction<TaskState>) {
            let indexOfTask: number = state.indexOf(action.payload)
            state.splice(indexOfTask, 1);
        },

        //complete task -- receives id of task
        completed( state, action: PayloadAction<number>) {
            state[action.payload].completed = !state[action.payload].completed;
        },
    }
});

export const {created, updated, deleted, completed } = taskSlice.actions;
export default taskSlice.reducer;