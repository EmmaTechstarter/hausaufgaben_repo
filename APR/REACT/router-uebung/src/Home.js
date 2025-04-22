import Listing from "./Listing";

function Home() {
  const houses = [
    { id: 1, title: "Modernes Haus", price: "350.000€", img: "https://i.ebayimg.com/images/g/dsYAAOSwpB9lpltQ/s-l1200.jpg" },
    { id: 2, title: "Villa am See", price: "1.200.000€", img: "https://www.muenchenarchitektur.com/images/21903/1692DSC1707klein.jpg" },
    { id: 3, title: "Stadtwohnung", price: "450.000€", img: "https://www.vermietet.de/wp-content/uploads/2018/10/stadtwohnung-kaufen.jpg" }
  ];

  return (
    <div>
      <h1>Unsere Listings</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {houses.map((house) => (
          <Listing key={house.id} {...house} />
        ))}
      </div>
    </div>
  );
}

export default Home;
