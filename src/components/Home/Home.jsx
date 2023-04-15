import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Home.css";
const URL = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="home-container">
      {data.length > 0 ? (
        data.map((element) => {
          return <Card key={element.id} {...element} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
