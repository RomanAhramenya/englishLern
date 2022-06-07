import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface ISetUser{
    email:string
    password:string
}
export const setUser = createAsyncThunk(
    'auth/setUser',
    async (user:ISetUser,thunkApi) => {
        try {
            const response = await axios.post<any>(`https://6294c7f7a7203b3ed070ec66.mockapi.io/users`,{email:user.email,password:user.password})
                return {
                    id:response.data.id,
                    email:response.data.email
                }
        } catch (e) {
            return thunkApi.rejectWithValue('что то пошло не так')
        }
    }
)
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (user:ISetUser,thunkApi) => {
        try {
            const response = await axios.get<any>(`https://6294c7f7a7203b3ed070ec66.mockapi.io/users?search=${user.email}`)
                if(user.password === response.data[0].password){
                   return {
                    id:response.data[0].id,
                    email:response.data[0].email
                } 
                } else {
                    return {
                        error : 'Не верный логин или пароль'
                    }
                }
                
        } catch (e) {
            return thunkApi.rejectWithValue('что то пошло не так')
        }
    }
)
export const getUser = createAsyncThunk(
    'auth/getUser',
    async (id:string,thunkApi) => {
        try {
            const response = await axios.get<any>(`https://6294c7f7a7203b3ed070ec66.mockapi.io/users/${id}`)
                return response.data
        } catch (e) {
            return thunkApi.rejectWithValue('что то пошло не так')
        }
    }
)