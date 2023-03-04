import React from 'react'
import { useState } from 'react'

const categories = ['Perro', 'Pizza']

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]) 
  const [category, setCategory] = useState('')

  const onAddCategory= () => { 
  setCategories(list=> [...list, category])
  setCategory('')

  }
  const onSetCategory = (evt) =>{
      setCategory(evt.target.value)
  }
  return(
      <>
       <h1>GifExpert</h1> 
       <input  placeholder ="Pon una categoria" type="text" value={category}
       onChange={(event) => onSetCategory(event)}/>
       <button onClick = {()=> onAddCategory()}>Añadir</button> 
       <ol>
                  {
                      categories.map(
                          (category, key) => 
                          {
                              return <li key={ key }>{category}</li>
                          }
                      )
                  }
              </ol> 
      </>
  )
}

export default GifExpertApp