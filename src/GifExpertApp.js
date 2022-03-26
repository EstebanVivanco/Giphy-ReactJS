import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch Man','Samurai X','Kimetsu No Yaiba','Jujutsu Kaisen'])

//   const handleAdd = () => {

//     setCategories([...categories, 'Hunter X Hunter']);

//     }

  return (
    <div>

        <h2>Gif Expert App</h2>
        <AddCategory setCategories={setCategories} ></AddCategory>
        <hr/>

        <ol>
            { 
                categories.map( (category) => {
                    return <li key={category}> {category} </li>
                })
            }
        </ol>
        

    </div>
  )
}
