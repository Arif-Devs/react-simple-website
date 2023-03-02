import { useState } from "react";
import Layout from "../components/layout/Layout";
import Button from "../btn/button";









function Home(){
  
    const [count, setCount] = useState(0)
    
    
    function increment (){
        setCount(count +1)
    }

    function decrement (){
        setCount(count -1)
    }



    return(
        <Layout>
            <h1>Hello i am Home page</h1>
                <h1>Count: {count}</h1>
                <Button increment={increment} decrement={decrement} />
        </Layout>
    )
}






export default Home