import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export interface IWorld {
    world:string
    translate:string
    id:string
}
interface IAxios {
    world:IWorld
    id:string
}
interface IDelete{
    idUser:string
    idWorld:string
}
export const getWorlds = createAsyncThunk(
    "world/getWorlds",
    async (id:string,thunkApi) => {
        try {
            const response = await axios.get<any>(`https://6294c7f7a7203b3ed070ec66.mockapi.io//users/${id}/post`)
            return response.data
        } catch (e:any) {
           return thunkApi.rejectWithValue(e.response.data)
        }
    }
)

export const setWorld = createAsyncThunk(
    "world/setWorld",
    async (arg:IAxios,thunkApi) => {
        try {
            const response = await axios.post<any>(`https://6294c7f7a7203b3ed070ec66.mockapi.io//users/${arg.id}/post`,{world:arg.world.world,translate:arg.world.translate})
            return response.data
        } catch (e:any) {
          return  thunkApi.rejectWithValue(e.response.data)
        }
    }
)

export const deleteWorld = createAsyncThunk(
    "world/deleteWorld",
    async (arg:IDelete,thunkApi) => {
        try {
            const response = await axios.delete<any>(`https://6294c7f7a7203b3ed070ec66.mockapi.io//users/${arg.idUser}/post/${arg.idWorld}`,)
            return {
                id:response.data.id
            }
        } catch (e:any) {
          return  thunkApi.rejectWithValue(e.response.data)
        }
    }
)