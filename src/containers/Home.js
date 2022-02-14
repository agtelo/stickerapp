import React, { useContext, useEffect } from "react";
import Context from "../context/Context";
import Item from "../components/Item";
import "../assets/css/Home.css";

export default function Home() {
  const { listProducts, products } = useContext(Context);
  useEffect(() => {
    listProducts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="wraper">
          <div className="home">
            {products.map((item) => (
              <Item {...item} key={item.id}></Item>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
