import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hook'
import { getWorlds } from '../../store/slice/WorldAction'

function World() {
    const world = useAppSelector(state => state.worlds)
    const dispatch = useAppDispatch()
    const id = localStorage.getItem('id')
    useEffect(()=>{
        if(id)
        dispatch(getWorlds(id))
    },[])
  return (
    <div>
      <h1>Список слов</h1>
      {world.worlds.map(el => {
          return <div key={el.id}>{el.world} {el.translate}</div>
      })}
    </div>
  )
}

export default World
