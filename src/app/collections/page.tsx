import React from 'react'
import Image from 'next/image'

const Collections = () => {

  const glassesData = [
    {id: 1, name: "Rayban", price: 2200 , description: 'Rayban-Sunglass  Aviator 1st Copy' , image:'/item5.jpg'},
    {id: 2, name: "Rayba", price: 3200 , description: 'Rayban-Sunglass  Wafarer 1st Copy' , image:'/item6.jpg'},
    {id: 3, name: "Metal-sunglass", price: 2100 , description: 'Metal Sunglass Sleek Design' , image:'/m1.jpg'},
    {id: 4, name: "Rayban", price: 1900 , description: 'Rayban-Sunglass  Hexagon 1st Copy' , image:'/item7.jpg'},
    {id: 5, name: "Oakley-Frame", price: 3200 , description: 'Oakley-Frame 1st Copy' , image:'/m2.jpg'},
    {id: 6, name: "Transparent-Frame", price: 1500 , description: 'Tr-material frame Uni-sex model' , image:'/item4.jpg'},
    {id: 7, name: "Sqare-frame", price: 2000 , description: 'Square-sheet Frame for gents' , image:'/item1.jpg'},
    {id: 8, name: "Fashion-frame", price: 1400 , description: 'Metal-square frame for ladies' , image:'/item2.jpg'}
  ]

  return (
    <div>
      <div className="collection-glasses">
        {glassesData.map((glasses) => (
          <div key={glasses.id} className="collection-card">
            <Image 
              src={glasses.image} 
              alt={glasses.name} 
              width={400} 
              height={500} // Set appropriate width and height
            />
            <h3>{glasses.name}</h3>
            <p>{glasses.description}</p>
            <div className="price">RS={glasses.price}/-</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Collections
