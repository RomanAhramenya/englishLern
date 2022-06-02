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