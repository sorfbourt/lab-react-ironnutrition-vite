import { useState } from 'react'
import { Card, Row, Col, Divider, Input, Button } from 'antd'
import foods from './foods.json'

import './App.css'
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'
import SearchBar from './components/SearchBar'

function App() {
  const [foodsState, setFoodsState] = useState(foods)
  const [searchString, setSearchString] = useState('')
  const [addFoodForm, setAddFoodForm] = useState(false)
  const [emptyFood, setEmptyFood] = useState(false)

  const toggleForm = () =>{
    setAddFoodForm(!addFoodForm)
  }

  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button onClick={toggleForm}> {addFoodForm === true ? "Add New Food" : "Hide Form"} </Button>
      <AddFoodForm setFoodsState={setFoodsState} addFoodForm={addFoodForm} setAddFoodForm={setAddFoodForm}/>

      {/* Display Search component here */}
      <SearchBar setSearchString={setSearchString} searchString={searchString} setFoodsState={setFoodsState} foodsState={foodsState}/>
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foodsState.filter((food)=>{
          if(searchString ===""){
            return food
          }
          if(food.name.toLowerCase().includes(searchString.toLowerCase())){
            return food
          }
        }).map((food, index)=>{
          return <FoodBox key={index} food={food} setFoodsState={setFoodsState} foodsState={foodsState} emptyFood={emptyFood} setEmptyFood={setEmptyFood}/>
        })}
      </Row>

      {emptyFood === true ? "Opps! There is no more content to show" : ""}
    </div>
  );
}
export default App