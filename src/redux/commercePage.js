import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./eCommerceStore";
import { useState } from "react";

const CartPage = () => {
  const dispatch = useDispatch();
const [tabledata,settabledata] =useState([])
const [count, setCount] = useState(0);
  const { totalItems, data } = useSelector(storeObj => {
    // settabledata(storeObj.cart)

    // storeObj.cart.forEach(arrLooping);

//     for (let i = 0; i < storeObj.cart.length; i++) {
  
//     var idcount = storeObj.cart.filter(a => a["id"] === i + 1).length;

//      if(i+1 === storeObj.cart[i].id ){

//       if(storeObj.cart[i].counter > 1)
//       {
//         var contrain = {
//           description: storeObj.cart[i].description,
//           id:storeObj.cart[i].id,
//           image:storeObj.cart[i].image,
//           price:storeObj.cart[i].price,
//           title:storeObj.cart[i].title,
//           count:idcount
//         }
  
//         var datas = tabledata;
//         // 
//         datas.push(contrain);
//         datas.splice(1, storeObj.cart[i].id)
//         datas.splice(1, storeObj.cart[i].id ,contrain)

//       }
//       else{

//        var contrain = {
//           description: storeObj.cart[i].description,
//           id:storeObj.cart[i].id,
//           image:storeObj.cart[i].image,
//           price:storeObj.cart[i].price,
//           title:storeObj.cart[i].title,
//           count:idcount
//         }
  
//         var datas = tabledata;
//         // 
//         datas.push(contrain);
//         datas.splice(1, storeObj.cart[i].id)
//         datas.splice(1, storeObj.cart[i].id ,contrain)

//       }
   
//     //  console.log(datas);

      
     

//      }

// // for(let j = 0; j < datas.length; j++)
// // {

// // if(datas[j].count <=1)
// // {
// //   for(let k = 0; k < datas.length; k++)
// //   {
// //     if(datas[k].count > 1)
// //     {
// //       console.log(datas,'before')
// //     datas.slice(1,datas[k].id)
// //     console.log(datas,'after')
// //     }

// //   }
// // }
// // }
//       // const output = array.splice(i+1, 1, d)

//       // arr[i] += 1;
//       // return(arr);
//     }

    return {

      totalItems: storeObj.cart?.length,
      data: storeObj.cart
    }
  })

  // function arrLooping(value, index, array) {

  //   // txt += value + "<br>";
  //   if( 1 === value.id){
  //   console.log("index :" ,value.id);

  //     //  console.log(index);
  //   }
  // if(){

  // }
  // }
 const deIncrement = (item) =>
{
  // console.log(item.item , );
  if(item.item.count === 1)
  {
      dispatch(cartActions.removeFromCart(item.item));
  }
  else{
    var dd = {
      count:  item.item.count - 1,
      description:  item.item.description,
      id:item.item.id,
      image: item.item.image,
      price:  item.item.price,
      title: item.item.title
    }

    dispatch(cartActions.updatdelteFromCart(dd));
  }
}
const Increment = (item) =>
{
  console.log(item);

  var dd = {
    count:  item.item.count + 1,
    description:  item.item.description,
    id:item.item.id,
    image: item.item.image,
    price:  item.item.price,
    title: item.item.title
  }

  dispatch(cartActions.updatdelteFromCart(dd));
}

  const handleRemove = (itemIndex) => {
    dispatch(cartActions.removeFromCart(itemIndex));
  }

  return (
    <div>
      <h1>Cart Page</h1>
      <h2>Total Items: {totalItems}</h2>
      <section style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', borderBottom: '1px solid #cdcdcd', textAlign: 'center', padding: 10 }}>
          <span>#</span>
          <span>Image</span>
          <span>Title</span>
          <span>Description</span>
          <span>Price</span>
          <span>Count</span>
          <span>Action</span>
        </div>
        {
          data?.map((item, index) => {
            return (
              
              <div key={`item-${index}-${item.id}`} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderBottom: '1px solid #cdcdcd', textAlign: 'center', padding: 10 }}>
                <span>{index + 1}</span>
                <img src={item.image} alt={item.title} height={40} width='auto' />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>₹ {item.price}</p>
                <span styles={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                  <button style={{ padding: 4, fontSize: 20 }} onClick={() => deIncrement({item}) }>-</button>
                  <span>
                    <input value={item.count} style={{ padding: 8, width: 50, textAlign: 'center' }} />
                  </span>
                  <button style={{ padding: 4, fontSize: 20 }} onClick={() => Increment({item}) }>+</button>
                </span>
                <button onClick={() => handleRemove(index)}>Remove</button>
              </div>
            )
          })
        }
      </section>
    </div>
  )
}

export default CartPage;