import React, { useState } from 'react'

export const useFetch = (url) => {
    
    const [state, setState] = useState({
        data:null,
        isLoading: true,
        hasError: null
    })
    
    const getFetch = async () =>{
        const api = await fetch (url);
        const data =await api.json();
        setState({
            data,
            isLoading:false,
            hasError:null
        })

    }

    useFetch(()=>{
        getFetch()
    }, [url])

    return {
    ...state
    }
}