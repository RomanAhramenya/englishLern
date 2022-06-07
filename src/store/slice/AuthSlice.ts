import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getUser, ISetUser, loginUser, setUser } from "./AuthAction"

interface IUser{
    email:string 
    id:string
}
interface IResponseUser{
    email:string 
    id:string
    password:string
}
interface ILoginUser{
    email:string 
    id:string
    error:string
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
    reducers:{
        removeUser:(state)=>{
            state.user = {email:'',id:''}
            localStorage.clear()
        }
    },
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
        [loginUser.fulfilled.type] : (state,action: PayloadAction<ILoginUser>) => {
            state.isLoading = false;
            state.error = action.payload.error;
            state.user.email = action.payload.email
            state.user.id = action.payload.id
            if(state.user.id) {
                localStorage.setItem('id',action.payload.id)
            }
            
            
        },
        [loginUser.pending.type] : (state) => {
            state.isLoading = true
        },
        [loginUser.rejected.type] : (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [getUser.fulfilled.type] : (state,action: PayloadAction<IResponseUser>) => {
            state.isLoading = false;
            state.error = '';
            state.user.email = action.payload.email
            state.user.id = action.payload.id
            
            
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
export const {removeUser} = AuthSlice.actions
export default AuthSlice.reducer