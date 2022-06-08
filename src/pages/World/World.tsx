import React, { useEffect, useState } from 'react'
import AddWorldForm from '../../components/addWorldForm/AddWorldForm'
import Pagination from '../../components/pagination/Pagination'
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
        
        if (auth){
             dispatch(setWorld({ id: auth, world: { world, translate, id } }))
        }
           
    }
    return (
        <div className={s.container}>
            <h1>Список слов</h1>
           <div className={s.block_status}>
               {world.error  ? <>{world.error}</> : world.isLoading && <>Loading...</>}
            </div> 
            {world.worlds.map((el, index) => {
                if (index + 1 <= currentPage * 10 && index + 1 > (currentPage * 10 - 10))
                    return <div className={`${s.world}`} key={index}>
                        <div>
                            <span>{index + 1}. {el.world}</span>
                            <span>----</span>
                            <span>{el.translate}</span>
                        </div>
                        <button onClick={() => dispatch(deleteWorld({ idUser: String(auth), idWorld: el.id }))}>Удалить</button>
                    </div>
            })}
            <Pagination pageSwitching={setCurrentPage} totalCount={Number(world.worlds.length)} amountItem={10} />
            {auth &&
                <AddWorldForm action={handlerAction}  />
            }

        </div>
    )
}

export default World
