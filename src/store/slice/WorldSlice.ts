import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { deleteWorld, getWorlds, IWorld, setWorld } from "./WorldAction"


interface IArrayWorld{
  worlds: IWorld[]
  isLoading:boolean
    error:string
}
const initialState:IArrayWorld = {
    worlds:[],
    isLoading:false,
    error:''
}

const WorldSlice = createSlice({
    name:'world',
    initialState,
    reducers:{},
    extraReducers:{
        [setWorld.fulfilled.type] : (state,action: PayloadAction<IWorld>) => {
            state.isLoading = false;
            state.error = '';
            state.worlds.unshift(action.payload)
        },
        [setWorld.pending.type] : (state) => {
            state.isLoading = true
        },
        [setWorld.rejected.type] : (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [getWorlds.fulfilled.type] : (state,action: PayloadAction<IWorld[]>) => {
            state.isLoading = false;
            state.error = '';
            state.worlds = action.payload.reverse()
            
        },
        [getWorlds.pending.type] : (state) => {
            state.isLoading = true
        },
        [getWorlds.rejected.type] : (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [deleteWorld.fulfilled.type] : (state,action: PayloadAction<any>) => {
            state.worlds =  state.worlds.filter(item => item.id !== action.payload.id)
            state.isLoading = false;
            state.error = '';
            
        },
        [deleteWorld.pending.type] : (state) => {
            state.isLoading = true
        },
        [deleteWorld.rejected.type] : (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default WorldSlice.reducer