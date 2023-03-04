import {configureStore} from "@reduxjs/toolkit";
import settingReducer from '../state/settingSlice'
import taskReducer from '../state/taskSlice'
import profileReducer from '../state/profileSlice'
export default configureStore({
    reducer:{
        settings: settingReducer,
        task: taskReducer,
        profile: profileReducer
    }
})