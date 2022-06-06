import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getUser, ISetUser, setUser } from "./AuthAction"

interface IUser{
    email:string 
    id:string
}
interface IResponseUser{
    email:string 
    id:string
    password:string
}
interface IAuth{
    user:IUser 
    isLoading:boolean
    error:string
}
const initialState:IAuth = {
    user:{email:'',id:''},
    isLoading:false,
    error:''
}

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:{
        [setUser.fulfilled.type] : (state,action: PayloadAction<IResponseUser>) => {
            state.isLoading = false;
            state.error = '';
            state.user.email = action.payload.email
            state.user.id = action.payload.id
            localStorage.setItem('id',action.payload.id)
            
        },
        [setUser.pending.type] : (state) => {
            state.isLoading = true
        },
        [setUser.rejected.type] : (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [getUser.fulfilled.type] : (state,action: PayloadAction<IResponseUser>) => {
            state.isLoading = false;
            state.error = '';
            state.user.email = action.payload.email
            state.user.id = action.payload.id
            localStorage.setItem('id',action.payload.id)
            
        },
        [getUser.pending.type] : (state) => {
            state.isLoading = true
        },
        [getUser.rejected.type] : (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})
export default AuthSlice.reducer