import React, { useState } from 'react'
import {AddCategory} from "./components/AddCategory"
import {GifGrid} from './components/GifGrid'
const categories = ['Perro', 'PIZZA']

 

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['']) 

    const onAddCategory= (category) => { 
    setCategories(list=> [...list, category])
    }
    
    return(
        <>
         <h1>GitExpert</h1> 
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



export default GifExpertApp