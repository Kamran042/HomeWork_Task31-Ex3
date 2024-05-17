import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import MainContext from "../../../context/context";
import "./Detail.css"

const Detail = () => {
  const { id } = useParams();
  const { data } = useContext(MainContext);

  const target = data.find((item) => item._id == id);
  console.log(target);
  return (
    <div className="detail">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={target.image} alt="" />
          </div>
          <div className="col-6">
            <h1>{target.title}</h1>
            <h2>{target.price}</h2>
            <p>{target.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
