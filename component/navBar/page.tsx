import Image from "next/image";
import style from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hook";
import { cartAction } from "@/redux/state";

const NavBar = (props: any) => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const OpenCart = () => {
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(cartAction(open));
  }, [open]);

  return (
    <>
      <div className={style["nav"]}>
        <a href="/" className={style["nav-logo"]}>
          <Image
            className="logo"
            width="80"
            height="40"
            alt="logo"
            src="/image/shopnow.png"
          ></Image>
        </a>
        <div>
          <input
            type="text"
            className={style["nav-Search"]}
            placeholder="Search"
          />
        </div>

        <ul className={style["nav-list"]}>
          <li>
            <Link href="/SignIn">Sign In</Link>
          </li>
          <li>
            {props.UserStatus ? (
              <p onClick={OpenCart}>Cart</p>
            ) : (
              <Link href="/SignIn">Cart</Link>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
