import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";
import arr from "./utils/dummy"
import { useState } from "react";


function App() {
  let[A,setA]=useState(arr)
  function sortedarray(){
    A.sort((a,b)=>a.price-b.price);
    setA([...A]);
  }
  
  function lessthan500(){
   const B=arr.filter((value)=>value.price<499);
   setA(B)
  }
  return (
    <> 
    <Header/>
    <button className="sortedarray" onClick={sortedarray}>sort by price</button>
    <button className="lessthan500" onClick={lessthan500}>lessthan500</button>
      <div className="middle" style={{ display: "flex", gap: "20px", flexWrap: "wrap",justifyContent:"center",rowGap:"40px"}}>
        {
        A.map((value, index) => (
          <Card key={index} cloth={value.cloth} offer={value.offer} price={value.price}/>
        ))}
      </div>
      <Footer/>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
