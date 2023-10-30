import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "./StatusSlice"
import dataReducer from "./Data"
import userReducer from "./UserSlice"


const store = configureStore({
    reducer:{
        status:statusReducer,
        data:dataReducer,
        userBased:userReducer,
    }
})


export default store