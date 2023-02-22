import React from 'react'
import { useState } from 'react'
import { Card, Row, Col, Divider, Input, Button } from 'antd'
import { v4 as uuidv4 } from 'uuid'

function AddFoodForm({setFoodsState, addFoodForm, setAddFoodForm}) {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleSubmit = event => {
        event.preventDefault()
        setFoodsState(prevFoods => {
            return [...prevFoods, {name, image, calories, servings, id: uuidv4()}]
        })
        setName('')
        setImage('')
        setCalories(0)
        setServings(0)
    }

    const displayStyleNone = {display: `none`}
    const displayStyleBlock = {display: `block`}

  return (
    <div style={addFoodForm === true ? displayStyleNone : displayStyleBlock}>
         <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
            <label>Name: <Input value={name} type="text" onChange={event =>setName(event.target.value)} /></label>
            <label>Image: <Input value={image} type="text" onChange={event =>setImage(event.target.value)} /></label>
            <label>Calories: <Input value={calories} type="number" onChange={event =>setCalories(event.target.value)} /></label>
            <label>Servings: <Input value={servings} type="number" onChange={event =>setServings(event.target.value)} /></label>

            <button type="submit">Add New Food</button>
        </form>



    </div>
  )
}

export default AddFoodForm