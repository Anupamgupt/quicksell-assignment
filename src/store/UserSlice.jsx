import { createSlice } from "@reduxjs/toolkit"
const initialState={};

const userSlice= createSlice({
    name:'userBased',
    initialState,
    reducers:{
        setUserBased(state,action){
            return state=action.payload;
        }
    }
})

export const {setUserBased} = userSlice.actions;
export default userSlice.reducer;