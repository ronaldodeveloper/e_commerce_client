
import React, { useState } from "react"
import { RiSearch2Line } from 'react-icons/ri';

export const Search= ()=>{

    const [pesquisa, setPesquisa]= useState() 
    const handlePesquisar=(e)=>{
          e.preventDefault()
          console.log(pesquisa)
    }
 
    return (
        <form onSubmit={handlePesquisar}>
          <input 
          type="search" 
          name={pesquisa} 
          placeholder="Buscar Produdos, marcas e mais..."
          onChange={(e)=> { setPesquisa(e.target.value) }}/>
         <button type="submit"><RiSearch2Line/></button>
        </form>
        
    )
  }