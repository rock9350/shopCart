"use client";
import Image from "next/image";
import { useState } from "react";
import style from "./page.module.css";

const OfFerBnr = () => {
  const [banner, setbanner] = useState([1]);
  const [count, setcount] = useState(1);

  const sliderShow = (index: any) => {
    let newCount = count;

    // console.log("newCount  :"+newCount);
    // console.log("count  :"+count);
    if (index === "1" && count<=3) {
      newCount = count + 1;
  //    console.log("count + 1 ");
    } else if (index === "-1" && newCount > 0) {
      newCount = count - 1;
   //   console.log("count - 1 ");
    }
    // console.log("newCount  :"+newCount);
    // console.log("count  :"+count);

    if (newCount <= 0) {
      newCount = 1;
    }
    if(newCount<=4){
        setbanner([newCount]);
        setcount(newCount);
    }

   
  };

  return (
    <>
      <div>
        {banner.map((items, index) => {
          return (
            <div key={index}>
              <Image
                src={`/image/offerBanner/${items}.jpg`}
                quality={100}
                width="1485"
                height="450"
                alt={`banner${items}`}
              ></Image>
            </div>
          );
        })}
        <div className={style["btn-arrow"]}>
          <button
            onClick={() => {
              sliderShow("-1");
            }}
            className={style["arrow"]}
          >
            {"<"}
          </button>
          <button
            className={style["arrow"]}
            onClick={() => {
              sliderShow("1");
            }}
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};

export default OfFerBnr;
