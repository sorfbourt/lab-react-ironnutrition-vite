import React from 'react'
import { useState } from 'react'
import { Card, Row, Col, Divider, Input, Button } from 'antd'

function SearchBar({setSearchString, searchString, setFoodsState, foodsState}) {
  /*   const [searchString, setSearchString] = useState("") */

/*     const handleSearch = (event)=>{
        event.preventDefault()
        const foodFilters = [...foodsState]
        setFoodsState(foodFilters.filter(food =>{
            return food.name === searchString
        }))

    } */

  return (
    <div>
        <form style={{ display: 'flex', flexDirection: 'column' }} /* onSubmit={handleSearch} */>

        <label>Search: <Input value={searchString} type="text" onChange={event =>setSearchString(event.target.value)} /></label>

        </form>


    </div>
  )
}

export default SearchBar