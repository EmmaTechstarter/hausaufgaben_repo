function Listing({ title, price, img }) {
    return (
      <div style={{ border: "1px solid gray", padding: "10px", width: "150px" }}>
        <img src={img} alt={title} style={{ width: "100%" }} />
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    );
  }
  
  export default Listing;
  