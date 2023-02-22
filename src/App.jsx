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
  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}
      <AddFoodForm setFoodsState={setFoodsState} />
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
          return <FoodBox key={index} food={food} setFoodsState={setFoodsState} foodsState={foodsState}/>
        })}
      </Row>
    </div>
  );
}
export default App