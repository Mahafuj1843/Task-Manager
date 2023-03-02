import { createSlice } from "@reduxjs/toolkit";


export const taskSlice = createSlice({
    name: 'task',
    initialState:{
        New: [],
        Completed: [],
        Progress: [],
        Canceled: [],
        Summary: []
    },

    reducers:{
        setNewTask:(state, action)=>{
            state.New = action.payload
        },
        setCompleteTask:(state, action)=>{
            state.Completed = action.payload
        },
        setProgressTask:(state, action)=>{
            state.Progress = action.payload
        },
        setCancelTask:(state, action)=>{
            state.Canceled = action.payload
        },
        setTaskSummary:(state, action)=>{
            state.Summary = action.payload
        }
    }
})

export const {setNewTask, setCompleteTask, setProgressTask, setCancelTask, setTaskSummary} = taskSlice.actions
export default taskSlice.reducer