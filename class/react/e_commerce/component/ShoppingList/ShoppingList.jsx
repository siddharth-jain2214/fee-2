import React from 'react'
import Products from '../Products/Products'

const ShoppingList = () => {
    const products=[
        {
            name: "Burger",
            imgUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8fDB8fHww",
            price:'150'
        },
        {
            name: "Pizza",
            imgUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D",
            price:'320'
        },
        {
            name: "Garlic Bread",
            imgUrl: "https://media.istockphoto.com/id/1136429305/photo/stuffed-garlic-bread.webp?a=1&b=1&s=612x612&w=0&k=20&c=sdNd2n7m7MdESgc7ywWRuVS9StTXInlgaxSqLjnG6rg=",
            price:'100'
        }
    ]
  return (
    <>
        {products.map((product)=>{
            return (
                <Products name={product.name} imgUrl={product.imgUrl} price={product.price} />
            )

        })}
    </>
  )
}

export default ShoppingList
