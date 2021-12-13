import React, {useState, useEffect} from "react";
import axios from "axios";
// api
import {jsonApi} from "../../api/baseUrl";

const Home = () => {
  const [data, setData] = useState([]);

  interface dataProps {
    title: string,
    body: string, 
    id: number,
    userId: number
  }

  useEffect(() => {
    axios
      .get(`${jsonApi}/posts`)
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <section>
        {data.map((post:dataProps) => (
        <div>
          {post.title}
        </div>
      ))}
      </section>
    </div>
  );
};

export default Home;
