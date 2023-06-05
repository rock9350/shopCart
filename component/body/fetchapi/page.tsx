"use client";
import { useEffect, useState } from "react";
import style from "./page.module.css";

const FetchCategory = () => {
  const [product , setproduct] = useState([]);
  const get = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/category/electronics`);
      const data = await res.json();
      setproduct(data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const category = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const GetProduct = async(category: any) => {
    console.log(category);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const data = await res.json();
      setproduct(data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get();
  }, []);
  return (
    <>
      <div>
        <div className={style["category"]}>
          {category.map((items, index) => {
            return (
              <div key={index}>
                <button
                  className={style["categorybtn"]}
                  onClick={() => GetProduct(items)}
                >
                  {items}
                </button>
              </div>
            );
          })}
        </div>
        <div>
          {
              product.map((items:any,index)=>{
                 return(
                  <>
                  <div key={index}>
                    <img src={items.image} width="100px"></img>
                    <p>{items.title}</p>
                    <p>{items.price}</p>
                  </div>
                  </>
                 )
              })
          }
        </div>
      </div>
    </>
  );
};

export default FetchCategory;
