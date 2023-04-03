import { useEffect, useState,useMemo } from "react";
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

  
  

 const getdata=()=>{

    apiCall.get('/products')
    .then((res) => {
      setList(res.data);
      
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  
 


const fecoritechange = (item)=>
{

  

var data = {
  "description":  item.description,
  "id":item.id,
  "image":  item.image,
  "price":  item.price,
  "title": item.title,
  "visit": !item.visit
}
apiCall.put(`/products/${item.id}`, data)
.then((res) => {
  getdata();
  // setList(res.data);
})
.catch((err) => {
  console.log(err);
})

}
 const handleClick = (productItem) => {
  // getdata();
//  console.log(productItem);

setCount(count + 1)
// var dd = {
//   count: 1 + count,
//   description:  productItem.description,
//   id:productItem.id,
//   image:  productItem.image,
//   price:  productItem.price,
//   title: productItem.title

// }

apiCall.get('/Categry')
    .then((res) => {
      // setList(res.data);
      // let data =res.data;   
    })
    .catch((err) => {
      console.log(err);
    })

if(productItem.key === 0)
{
  // debugger;
  var dd = {
    count:1 ,
    description:  productItem.description,
    id:productItem.id,
    image:  productItem.image,
    price:  productItem.price,
    title: productItem.title,
    key:1
  }

  apiCall.post(`/Categry`, dd)
  .then((res) => {
  console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
 
  
  

}

if(productItem.key === 1){
  var dds = {
    count:productItem.count + count ,
    description:  productItem.description,
    id:productItem.id,
    image:  productItem.image,
    price:  productItem.price,
    title: productItem.title,
    key:1
  }

  apiCall.put(`/Categry/${productItem.id}`, dds)
  .then((res) => {
  
  })
  .catch((err) => {
    console.log(err);
  })
 


}
  // dispatch(cartActions.updatdelteFromCart(dd));

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

                {item.visit ?<FavoriteIcon style={{ fill: 'red' }} onClick={() => fecoritechange(item)}/>:<FavoriteIcon style={{ fill: 'gray' }} onClick={() => fecoritechange(item)}/>}
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