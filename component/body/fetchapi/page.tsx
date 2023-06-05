"use client"
import { useEffect } from "react";

const FetchCategory = () => {
  const get = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/category/jewelery");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    get()
  },[])
  return <></>;
};

export default FetchCategory;
