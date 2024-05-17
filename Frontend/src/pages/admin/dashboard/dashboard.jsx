import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import axios from "axios";

const Dashboard = () => {
  const { data, setdata } = useContext(MainContext);

  function DeleteItem(_id) {
    axios.delete(`http://localhost:8080/api/blogs/${_id}`);
    const target = data.find((item) => item._id == _id);
    const targetOfIndex = data.indexOf(target);
    data.splice(targetOfIndex, 1);
    setdata([...data]);
  }
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img src={item.image} width={"60px"} height={"60px"} alt="" />
              </td>
              <td>{item.title}</td>
              <td>{item.desc}</td>
              <td>{item.price}</td>
              <td>
                <button
                  onClick={() => {
                    DeleteItem(item._id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;
