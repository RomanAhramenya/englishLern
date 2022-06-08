import React, { useEffect, useState } from 'react'
import AddWorldForm from '../../components/addWorldForm/AddWorldForm'
import Pagination from '../../components/pagination/Pagination'
import WorldList from '../../components/worldList/WorldList'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hook'
import { getWorlds, deleteWorld, setWorld } from '../../store/slice/WorldAction'
import s from './World.module.scss'
function World() {
    const world = useAppSelector(state => state.worlds)
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useAppDispatch()
    const auth = localStorage.getItem('id')
    useEffect(() => {
        if (auth)
            dispatch(getWorlds(auth))
    }, [])
    const handlerAction = (world: string, translate: string, id: string) => {
        if (auth) dispatch(setWorld({ id: auth, world: { world, translate, id } }))
        }
    const deleteWorldHandler = (idWorld:string) => {
        dispatch(deleteWorld({ idUser: String(auth), idWorld }))
    }
    return (
        <div className={s.container}>
            <h1>Список слов</h1>
           <div className={s.block_status}>
               {world.error  ? <>{world.error}</> : world.isLoading && <>Loading...</>}
            </div> 
             <WorldList action={deleteWorldHandler} currentPage={currentPage} dataWorld={world.worlds}/>
            <Pagination pageSwitching={setCurrentPage} totalCount={Number(world.worlds.length)} amountItem={10} />
             <AddWorldForm action={handlerAction}  />
        </div>
    )
}

export default World
