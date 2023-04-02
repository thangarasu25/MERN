import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import apiCall from "../../src/tasks/services/apiCall";
import { cartActions } from "./eCommerceStore";

import FavoriteIcon from '@mui/icons-material/Favorite';

const Products = () => {
  const [list, setList] = useState([]);
  //no-unused-vars
  const dispatch = useDispatch()
  const [count, setCount] = useState(0);

  useEffect(() => {
    apiCall.get('/products')
      .then((res) => {
        setList(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  
  

  const handleClickse = (productItem) => {
  
  

}
 



const fecoritechange = (item)=>
{
console.log(item)
}

  const handleClick = (productItem) => {
   
 console.log(productItem,'prod');

setCount(count + 1)
var dd = {
  count: 1 + count,
  description:  productItem.description,
  id:productItem.id,
  image:  productItem.image,
  price:  productItem.price,
  title: productItem.title
}
  dispatch(cartActions.updatdelteFromCart(dd));

  }

  return (
    <div>
      <h1>Products</h1>
      <section style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
      {
        list.map((item, index) => {
          return (
              <div key={item.id} style={{ border: '1px solid #cdcdcd', margin: 2, textAlign: 'center', padding: 10 }}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <img src={item.image} alt={item.title} />
                <p>₹ {item.price}</p>
                <button onClick={() => handleClick(item)}>Add to Cart</button>

                {item.visit ?<FavoriteIcon style={{ fill: 'red' }} onClick={() => fecoritechange(item)}/>:<FavoriteIcon style={{ fill: 'gray' }}/>}
                {/* <button onClick={() => handleClickse(item)}>Add to Wishlist</button> */}
              </div>
            )
        })
      }
      </section>
    </div>
  )
}

export default Products;