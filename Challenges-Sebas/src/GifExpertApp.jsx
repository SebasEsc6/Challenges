import React, { useState } from 'react'
import {AddCategory} from "./components/AddCategory"
import {GifGrid} from './components/GifGrid'
import { useCounter } from './hooks/useCounter'


 

export const GiftExpertApp = () =>{

    const {counter, increment, decrement, reset} = useCounter(0);

    const [categories, setCategories] = useState(['Comida']) 

    const onAddCategory= (category) => { 
    setCategories(list=> [...list, category])
    }
    
    return(
        <>
        <h1>Contador</h1>
        <span>Llevo: {counter}</span><br></br>
        <button onClick={() => increment() }> +1 </button>
        <button onClick = {()=> decrement()}>-1</button>
        <button onClick = {()=> reset()}>Reiniciar</button>
         <h1>GiftExpert</h1> 
        <AddCategory onAddCategory ={onAddCategory}/>
        {
            categories.map(
                (category, key) => 
                {
                    return <GifGrid category = {category} key={key}/>
                }
                )
        }
                
        </>
    )
}

export default GiftExpertApp