// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({food, setFoodsState, foodsState}) {
  const handleDelete = (foodName) =>{
    //console.log("target id", foodName)

    const foodsList = [...foodsState]
    //console.log("foodsList", foodsList)
    const listAfterDeletedFood = foodsList.filter((food) =>{
      return food.name !== foodName
    })
    //console.log("listAfterDeletedFood", listAfterDeletedFood)
    setFoodsState(listAfterDeletedFood)
  }
  return (
    <Col>
    <Card
      title={food.name}
      style={{ width: 230, height: 300, margin: 10 }}
    >
      <img src={food.image} height={60} alt="food" />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total Calories:</b>  {food.calories * food.servings}  kcal
      </p>
      <Button type="primary" onClick={()=>{handleDelete(food.name)}}> Delete </Button>
    </Card>
  </Col>
  );
}

export default FoodBox;
