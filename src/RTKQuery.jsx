import React, { useState } from 'react'
import { useGetAllProductsQuery, useGetSingleProductQuery } from './store/productsApi'

export default function RTKQuery() {
  // const {data, isLoading, error, isError} = useGetAllProductsQuery();
  
  const [input, setInput] = useState();
  const {data: singleProduct, error, isError, isLoading} = useGetSingleProductQuery(input);
  console.log('data:', singleProduct)

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>{error}</h1>
  return (
    <div>
      <h2>Search Product: </h2>
      <input type="text" onChange={(e) => setInput(e.target.value)}/>
      {singleProduct && singleProduct.products.map(item => <div key={item.id}>
        <h3>{item.title}: R${item.price}</h3>
        <p>{item.description}</p>
        <img src={item.thumbnail} alt={item.description} />
        <hr/>
        </div>
       )}
    </div>
  )
}
