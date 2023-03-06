import { useState } from "react";
import Layout from "../components/layout/Layout";
import Button from "../components/CountButton/Button"
import DisplayCount from "../Display/displayCount";
import UpdateIncDec from "../components/Update-Inc/UpdateIncDec";












function Home(){
  
    const [count, setCount] = useState(100)
    const [incrementValue, setIncrementValue] = useState(10)
    const [decrementValue, setDecrementValue] = useState(5)
    
    
    function increment (){
        setCount(count + incrementValue)
    }

    function decrement (){
        setCount(count - decrementValue)
    }

    function handleIncrementChange(e){
        setIncrementValue(parseInt(e.target.value))
    }

    function handleDecrementChange(e){
        setDecrementValue(parseInt(e.target.value))
    }








    return(
        <Layout>
            <h1>Hello i am Home page</h1>
                <UpdateIncDec 
                incrementValue={incrementValue} 
                decrementValue={decrementValue}
                handleIncrementChange={handleIncrementChange}
                handleDecrementChange={handleDecrementChange}

                />

                <DisplayCount count={count} />
                <Button increment={increment} decrement={decrement} />
        </Layout>
    )
}






export default Home