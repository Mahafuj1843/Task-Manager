import {configureStore} from "@reduxjs/toolkit";
import settingReducer from '../state/settingSlice'
import taskReducer from '../state/taskSlice'
export default configureStore({
    reducer:{
        settings: settingReducer,
        task: taskReducer
    }
})