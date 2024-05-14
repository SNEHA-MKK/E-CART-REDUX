//custom hooks - here used to fetch data

import { useEffect, useState } from "react"

const useFetch = (url)=>{
   const[data,setData]=useState(null)

    useEffect(()=>{
           //api
           fetch(url).then((result)=>{
            result.json().then((response)=>{
                setData(response);
            })
           })
    },[])
    return data
}

export default useFetch