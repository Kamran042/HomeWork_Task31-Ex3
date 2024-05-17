import React, { useContext } from "react";
import "./Awesome.css";
import MainContext from "../../../context/context";
import { Link } from "react-router-dom";

const Awesome = () => {
  const { data,basket,setBasket } = useContext(MainContext);
  function AddToBasket(_id){
    const target = basket.find((item)=>item._id == _id)
    if(target){
      target.count++
      target.totalPrice+=target.price
    }else{
      const item = data.find((x)=> x._id == _id)
      basket.push(item)
    }
    setBasket([...basket])
    localStorage.setItem("basket",JSON.stringify(basket))
  }
  return (
    <div className="Awesome">
      <div className="Awesome__top">
        <h2>Awesome</h2>
        <h3>Shop</h3>
      </div>
      <div className="Awesome__grid">
        {data.map((item, index) => (
          <div className="Awesome__grid__card" key={index}>
            <div className="Awesome__grid__card__img">
              <img
                src={item.image}
                alt=""
              />
            </div>
            <div className="Awesome__grid__card__title">
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <div className="Awesome__grid__card__title__betwenn">
                <button onClick={()=> {
                  AddToBasket(item._id)
                }} className="add__basket">+ ADD TO CART</button>
                <button className="detail__card">
                  <Link to={`detail/${item._id}`}>
                    <i class="fa-solid fa-circle-info"></i>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awesome;
