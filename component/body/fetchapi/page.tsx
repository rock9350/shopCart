"use client";
import { useEffect, useState } from "react";
import style from "./page.module.css";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { addToCart, productDetails } from "@/redux/state";

const FetchCategory = () => {
  const demo = useAppSelector((state: any) => {
    return state.arr.arr;
  });
  // console.log("redux state");
 // console.log(demo);

  const dispatch = useAppDispatch();

  const [product, setproduct] = useState([]);
  const get = async () => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/electronics`
      );
      const data = await res.json();
      setproduct(data);
      // console.log(data);
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

  const GetProduct = async (category: any) => {
    //   console.log(category);
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await res.json();
      setproduct(data);
      //    console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [cartProduct, setcartProduct] = useState<any[]>([]);

  const AddtoCart = (e: any) => {
    let arr = [e.target.id];
    // let productName: string = e.target.id;
    // arr.push(productName);
  //  console.log(demo.productCart);
    
    setcartProduct(arr);
  };

  useEffect(() => {
    get();
  }, []);

  const filterItemsforCart = () => {
    let items = demo.productDetail;
  //  console.log("items");
    let find = items.filter((item: any) => {
      return item.title == cartProduct[0];
    });
    return find;
  };

  useEffect(() => {
    let filterCart = filterItemsforCart();
    dispatch(addToCart(filterCart));
  }, [cartProduct]);

  useEffect(() => {
    dispatch(productDetails(product));
  }, [product]);

  return (
    <>
      <div className={style["category-product"]}>
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
        <div className={style["product"]}>
          {product.map((items: any, index) => {
            return (
              <div key={index} className={style["productBox"]}>
                <div className={style["productDetails"]}>
                  <img src={items.image} className={style["productImg"]}></img>
                  <Image
                    onClick={AddtoCart}
                    id={items.title}
                    src="/image/add.png"
                    width="50"
                    height="50"
                    alt="addcart"
                    className={style["addcart"]}
                  ></Image>
                </div>
                <div className={style["productDetails"]}>
                  <p className={style["productTitle"]}>{items.title}</p>
                </div>
                <div className={style["productDetails"]}>
                  <p className={style["productPrice"]}>
                    Price : ${items.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchCategory;
