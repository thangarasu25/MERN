import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import apiCall from "../../src/tasks/services/apiCall";
import { cartActions } from "./eCommerceStore";

const Products = () => {
  const [list, setList] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    apiCall.get('/products')
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const handleClick = (productItem) => {
    dispatch(cartActions.addToCart(productItem));
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
                <button>Add to Wishlist</button>
              </div>
            )
        })
      }
      </section>
    </div>
  )
}

export default Products;