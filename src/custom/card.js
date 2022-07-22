import React from 'react'

function Card({data,sortType,setSortType,sort,setSort}) {
  return (
    <div className={`row justify-content-center display-card `}>
        <span 
        onClick={() => {
            setSort(val => ({name:'name',type:!val.type}))
        }}
        className={`row-details col-2 ${sortType?'display-board-card-title':''}`}>
            {data.name} {sortType?sort.name=='name'?sort.type&1?'^':'v':'':''}
        </span>
        <span 
        onClick={() => {
            setSort(val => ({name:'department',type:!val.type}))
        }}
        className={`row-details col-2 ${sortType?'display-board-card-title':''}`}>
            {data.department} {sortType?sort.name=='department'?sort.type&1?'^':'v':'':''}
        </span><span 
        onClick={() => {
            setSort(val => ({name:'position',type:!val.type}))
        }}
        className={`row-details col-2 ${sortType?'display-board-card-title':''}`}>
            {data.position} {sortType?sort.name=='position'?sort.type&1?'^':'v':'':''}
        </span><span 
        onClick={() => {
            setSort(val => ({name:'role',type:!val.type}))
        }}
        className={`row-details col-2 ${sortType?'display-board-card-title':''}`}>
            {data.role} {sortType?sort.name=='role'?sort.type&1?'^':'v':'':''}
        </span><span 
        onClick={() => {
            setSort(val => ({name:'currentProject',type:!val.type}))
        }}
        className={`row-details col-2 ${sortType?'display-board-card-title':''}`}>
            {data.currentProject} {sortType?sort.name=='currentProject'?sort.type&1?'^':'v':'':''}
        </span>
        
    </div>
  )
}

export default Card