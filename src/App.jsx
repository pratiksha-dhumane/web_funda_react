import Card from './components/Card'

function App() {

 const handleClick=()=>{
  alert("hiiii");
 }

 const description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium cum, culpa ex facere aliquam dignissimos qui eaque perferendis iusto tempore similique. Quae eum delectus neque dolorum velit ipsa recusandae!"

  return (
    <>
      <div>
        <h1 style={{color:"red", backgroundColor:"yellow"}}>Hello react </h1>
         <Card title={5}/>
        <button onClick={handleClick}>Click </button>
      </div>
      
    </>
  )
}

export default App
