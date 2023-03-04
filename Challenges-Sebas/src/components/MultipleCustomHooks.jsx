import React from 'react'
import { useCounter } from '../hooks/useCounter'
import {useFetch} from '../hooks/useFetch'

export const MultipleCustomHooks = () => {
    
    const{counter, increment} = useCounter(1)
    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
  
  
    return (
    <>
        <h1>MultipleCustomHooks</h1>
        <hr />
            {
                isLoading ? (
                    <div>
                        Loaging...
                    </div>
                ) : (
                    <blockquote>
                        <p>{data[0]?.quote}</p>
                        <footer>{data[0]?.author}</footer>
                    </blockquote>
                )
                 
            }
        
        <button onClick={()=> increment()}>next Quote</button>
       
    </>
  )
}
