// Todo app Js

import "./App.css";
import React, { useState, useEffect } from "react";
import logo from "./notes.png";

function App() {

  const getLocalItems = () => {
    const data = localStorage.getItem("list");

    if(data){
      return JSON.parse(localStorage.getItem("list"));
    }else{
      return [];
    }
  }

  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItems());

  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    const updateItems = items.filter((elem, idx) => {
      return id !== idx;
    });
    setItems(updateItems);
  };

  const removeAll = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="container">
        <img className="logo" src={logo}></img>
        <div className="heading">
          <h3>Add Your List Here</h3>
          <span>😎</span>
        </div>
        <div className="addItem">
          <input
            type="text"
            maxlength="30"
            spellcheck="false"
            value={inputData}
            className="input"
            placeholder="Add Item..."
            onChange={(e) => setInputData(e.target.value)}
          ></input>
          <i
            className="fa fa-plus add-btn"
            title="Add Item"
            onClick={addItem}
          ></i>
        </div>
        <div className="showItem">
          {items.map((elem, idx) => {
            return (
              <div className="eachItem" key={idx}>
                <h3>{elem}</h3>
                <i
                  className="fa fa-trash add-btn"
                  title="Delete Item"
                  onClick={() => deleteItem(idx)}
                ></i>
              </div>
            );
          })}
        </div>
        <div className="clearItems">
          <button className="btn " onClick={removeAll}>
            Remove All
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
