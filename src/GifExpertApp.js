import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

  //'One Punch Man','Samurai X','Kimetsu No Yaiba',
  const [categories, setCategories] = useState(['Jujutsu Kaisen'])

  return (
    <div>
        <h2>React GIPHY APP</h2>
        <AddCategory setCategories={setCategories} ></AddCategory> 
        <hr/>
        <ol>
            { 
                categories.map( category => (
                  
                    < GifGrid 
                      key={category}
                      category={category} />

                ))
            }
        </ol>

    </div>
  )
}
