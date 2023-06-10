"use client"
import Link from "next/link";
import style from "./SignUp.module.css";
import { Signup } from "@/redux/state";
import { useDispatch} from "react-redux/es/exports";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hook";
 

const SignUp = () => {
  
  // const Dispatch = useDispatch();
  const Dispatch = useAppDispatch();

  const presonal = {
    name:"",
    username:"",
    phoneno:"",
    emailid:"",
    password:"", 
  }

  const [ details , setDetails ] = useState(presonal);

  const DetailSubmit = ()=>{
    Dispatch(Signup(details));
  }

  const onChangeHandele = (e:any)=>{
    e.preventDefault();
    let obj:any = {...details}
    let objName = e.target.id;
    obj[objName] = e.target.value;
  
    setDetails({...obj})
     console.log(details);
     
  }

  
  const isFormValid = Object.values(details).every((value) => value !== "");


  return (
    <>
      <div>
        <form className={style["signup-box"]}>
          <table className={style["formTable"]}>
            <tbody>
              <tr>
                <td className={style["formLabel"]}>
                  <label>Name</label>
                </td>
                <td>
                  <input className={style["formInput"]} type="text" required onChange={onChangeHandele} id="name" value={details.name} placeholder="Name"/>
                </td>
              </tr>
              <tr>
                <td className={style["formLabel"]}>
                  <label>UserName</label>
                </td>
                <td>
                  <input className={style["formInput"]} type="text" required onChange={onChangeHandele} id="username" value={details.username} placeholder="UserName"/>
                </td>
              </tr>
              <tr>
                <td className={style["formLabel"]}>
                  <label>Phone No</label>
                </td>
                <td>
                  <input className={style["formInput"]} type="number" required onChange={onChangeHandele} id="phoneno" value={details.phoneno} placeholder="Phone No"/>
                </td>
              </tr>
              <tr>
                <td className={style["formLabel"]}>
                  <label>Email Id</label>
                </td>
                <td>
                  <input className={style["formInput"]} type="text" required onChange={onChangeHandele} id="emailid" value={details.emailid} placeholder="Email Id"/>
                </td>
              </tr>
              <tr>
                <td className={style["formLabel"]}>
                  <label>Password</label>
                </td>
                <td>
                  <input className={style["formInput"]} type="text" required onChange={onChangeHandele} id="password" value={details.password} placeholder="Password"/>
                </td>
              </tr>
            </tbody>
          </table>
 
        {/* <button type="button"  onClick={DetailSubmit} className={style["formbuttonn"]}>SignUp</button> */}

        {isFormValid ? (
            <Link href="/SignIn" onClick={DetailSubmit} className={style["formbuttonn"]}>
              SignUp
            </Link>
          ) : (
            <button className={style["formbuttonn"]} disabled>SignUp</button>
          )}
        </form>
      </div>
    </>
  );
};

export default SignUp;
