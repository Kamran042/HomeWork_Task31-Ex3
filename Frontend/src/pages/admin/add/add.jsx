import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import { useFormik } from "formik";
import axios from "axios";
import "./add.css";

const Add = () => {
  const { data, setdata } = useContext(MainContext);

  const formik = useFormik({
    initialValues: {
      title: "",
      img: "",
      price: "",
      desc: ""
    },
    onSubmit: (values) => {
      axios
        .post("http://localhost:8080/api/blogs", {
          title: values.title,
          image: values.img,
          price: values.price,
          desc: values.desc,
          count: 1,
          totalPrice: values.price,
        })
        .then((resp) => {
          console.log(resp);
          setdata([...data, resp.data]);
        });
    },
  });
  return (
    <>
      <Helmet>
        <title>Add Products</title>
      </Helmet>
      <div className="Add__from">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">Title:</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />

          <label htmlFor="lastName">Image URL:</label>
          <input
            id="img"
            name="img"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.img}
          />

          <label htmlFor="price">Price: </label>
          <input
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.price}
          />

          <label htmlFor="desc">Description: </label>
          <input
            id="desc"
            name="desc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.desc}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Add;
