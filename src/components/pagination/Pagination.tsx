import React, { FC, useState } from 'react'
import s from './Pagination.module.scss'

interface IPagination {
    totalCount:number
    amountItem:number
    pageSwitching:(id:number)=>void
}
const Pagination:FC<IPagination> = ({totalCount,amountItem,pageSwitching}) => {
   const [currentPage,setCurrentPage] = useState(1)
    const totalPage = Math.ceil(totalCount / amountItem) 
    const arrayPage = []
    for (let i = 1; i <= totalPage; i++){
        arrayPage.push(i)
    }

    const handlerClick = (id:number) => {
            pageSwitching(id)
            setCurrentPage(id)
    }
  return (
    <div className={s.container}>
        
      {arrayPage.map(el => {
          if(el >= currentPage - 1 && el <= currentPage + 1)
          return <span onClick={()=>handlerClick(el)} className={`${s.pages} ${currentPage == el && s.active}`} key={el}>{el}</span>
      })}
      
    </div>
  )
}

export default Pagination
