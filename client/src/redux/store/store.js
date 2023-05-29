import {configureStore} from "@reduxjs/toolkit";
import settingReducer from '../state/settingSlice'
import taskReducer from '../state/taskSlice'
import profileReducer from '../state/profileSlice'
import productReducer from '../state/productSlice'
export default configureStore({
    reducer:{
        settings: settingReducer,
        task: taskReducer,
        profile: profileReducer,
        product: productReducer
    }
})