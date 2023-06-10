"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import style from "./page.module.css";
import { useEffect, useState } from "react";
import { decreaseQuantity, increaseQuantity } from "@/redux/state";

const Cart = () => {
  const cartAction = useAppSelector((state) => state.arr.arr.cartOpen.open);
  const product = useAppSelector((state) => state.arr.arr.productCart);
  // console.log("cart");
  // console.log(product);
  // console.log("redux");

  const dispatch = useAppDispatch();

  const [state, setstate] = useState<{ Count: number }[] | []>([]);

  const onAddAction = (e: any) => {
    let updatedState: any = state.map((item:any) => {
      if (item.id == e.target.id) {
        let count = item.Count;
        count++;
        return { ...item, Count: count };
      }
      return item;
    });

    setstate(updatedState);
  };

  const onSubAction = (e: any) => {
    let updatedState: any = state
      .map((item :any) => {
        if (item.id == e.target.id && item.Count > 0) {
          let count = item.Count;
          count--;
          return { ...item, Count: count };
        }
        return item;
      })
      .filter((items) => {
        return items.Count != 0;
      });

    setstate(updatedState);
    dispatch(decreaseQuantity(state));
  };

  useEffect(() => {
    setstate(product);
  }, [product]);

  useEffect(() => {
    dispatch(increaseQuantity(state));
  }, [state]);
  let total = 0;

  return (
    <>
      <div
        className={style["cartbox"]}
        style={cartAction ? { display: "inline-block" } : { display: "none" }}
      >
        <div className={style["itemsCount"]}>
          <p>SHOPPING CART</p>
          <p>{product.length} items</p>
        </div>
        {state.map((items: any, index: any) => {
          total = total + parseInt(items.price) * parseInt(items.Count);
          return (
            <div key={index} className={style["productbox"]}>
              <img className={style["productImg"]} src={items.image}></img>
              <div style={{ width: "55%" }}>
                <p style={{ fontSize: "14px" }}>{items.title}</p>
              </div>
              <div>
                <span>
                  <button
                    onClick={onAddAction}
                    id={items.id}
                    className={style["btn"]}
                  >
                    +
                  </button>
                </span>
                <span>{items.Count}</span>
                <span>
                  <button
                    onClick={onSubAction}
                    id={items.id}
                    className={style["btn"]}
                  >
                    -
                  </button>
                </span>
              </div>
              <p>&euro; {parseInt(items.price) * parseInt(items.Count)}</p>
            </div>
          );
        })}
        <div>
          {total > 0 && (
            <p style={{ textAlign: "center" }}>Total Amount : {total}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
