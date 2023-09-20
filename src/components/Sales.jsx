import React from 'react'
import Title from './utils/Title'
import Item from './utils/Item'
const Sales = ({endpoint, ifExists}) => {
    const {items, title} = endpoint;
  return (
    <div className="nike-container border border-solid z-20">
      <Title title={title} />
      <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
        {items.map((item, id) => (
              
              <Item item ={item} key={id} ifExists={ifExists} />
              
        ))}   
      </div>
    </div>
  )
}

export default Sales

/*
    id: "0p0x1",
    title: "Nike Addapt BB 2.0",
    text: "MEN Running Shoes",
    rating: "4.9",
    btn: "Buy Now",
    img: psale2,
    price: "200",
    color: "from-blue-600 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
*/

/*
import React from 'react'
import Item from './utils/Item'
import Title from './utils/Title' 

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  // console.log(endpoint)
  return (
   <>
      <div className='nike-container'>
        <Title title={title} />
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
          {items?.map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists} />
          ))}
        </div>
      </div>
   </>
  )
}

export default Sales
*/