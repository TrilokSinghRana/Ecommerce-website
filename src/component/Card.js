function Card(props) {
  return (
    <div style={{ border: "2px solid black",padding: "10px",height: "450px",width: "250px"}}>
       <img src="https://shop.inkholic.in/wp-content/uploads/2018/10/Black-plain-Tshirt-e1540046582269.jpg" style={{ height: "250px",
          width: "200px",
          display: "block",
          margin: "0 auto"
        }}
        alt={props.cloth}
      />

      <div className="card" style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h1>{props.offer}</h1>
        <h2>Price:{props.price}</h2>
        <h2>Shop Now</h2>
      </div>
    </div>
  );
}
export default Card;