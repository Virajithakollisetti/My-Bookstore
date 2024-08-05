import React from 'react'

function Card({item}) {
  return (
    <>
    <div className="mt-4 my-3 p-2">
    <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 dark:bg-slate-900 dark:text-white dark:border duration-200">
  <figure>
    <img src={item.image} alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
        {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{item.price}</div> 
      <div className="badge badge-outline cursor-pointer hover:text-white hover:bg-pink-500 duration-300 p-5">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Card