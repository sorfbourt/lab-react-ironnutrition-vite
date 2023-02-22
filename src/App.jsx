import { useState } from 'react'
import { Card, Row, Col, Divider, Input, Button } from 'antd'
import foods from './foods.json'

import './App.css'
import FoodBox from './components/FoodBox'

function App() {
  const [foodsState, setFoodsState] = useState(foods)
  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foodsState.map((food)=>{
          return <FoodBox food={food}/>
        })}
      </Row>
    </div>
  );
}
export default App