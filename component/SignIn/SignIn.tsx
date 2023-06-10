"use client"
import Link from "next/link";
import style from "./SignIn.module.css";
import { useSelector } from "react-redux/es/exports";
import { useState ,useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";
import { Userlogin } from "@/redux/state";

const Login = () => {
 // const demo = useSelector((state: any) => state.arr.arr.signUpDetails);
 const demo = useAppSelector((state: any) => state.arr.arr.signUpDetails);
 const dispatch = useAppDispatch();
 // console.log(demo);
  
const router = useRouter();
 
  const detail = {
    email: "",
    password: "",
    loGin: false,
  };

  const [login, setLogin] = useState(detail);

  const OnChangeHandle = (e: any) => {
    let obj: any = { ...login };
    let objname = e.target.id;
    obj[objname] = e.target.value;
    setLogin({ ...obj });
  };

  const Oncheck = (e:any) =>{

    // console.log(demo);
    // console.log(login);
    if(demo.length == 0){
      alert("Plz Create Account")
         
    }else if(demo[0].emailid == login.email && demo[0].password==login.password){
      setLogin({ ...login,loGin:true });
      let finalStatus = {...demo};
       finalStatus.loginStatus=true;
      dispatch(Userlogin({...finalStatus}))

    //  console.log("right");
      router.push("/");
    }else{
      alert("Email id Password wrong")
    }
    
    
   
  }
  
  return (
    <>
      <div>
        <form className={style["signup-box"]}>
          <table className={style["formTable"]}>
            <tbody>
              <tr>
                <td className={style["formLabel"]}>
                  <label>Email Id</label>
                </td>
                <td>
                  <input
                    className={style["formInput"]}
                    type="text"
                    placeholder="Email Id"
                    onChange={OnChangeHandle}
                    value={login.email}
                    id="email"
                  />
                </td>
              </tr>
              <tr>
                <td className={style["formLabel"]}>
                  <label>Password</label>
                </td>
                <td>
                  <input
                    className={style["formInput"]}
                    type="text"
                    placeholder="Password"
                    onChange={OnChangeHandle}
                    value={login.password}
                    id="password"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={Oncheck} type="button"  className={style["formbuttonn"]}>SignIn</button>
          {/* <a href={login.loGin?"/": ""} onClick={Oncheck} className={style["formbuttonn"]}>SignIn</a> */}
          <div>
            <p className={style["NoAcount"]}>
              No account?
              <span>
                {" "}
                <Link href="/SignUp" className={style["Createone"]}>
                  Create one
                </Link>{" "}
              </span>
            </p>
          </div>
        </form>
      </div>
     {demo && <div className={style["signup-box"]}>
              <p  className={style["formLabel"]}> All Email and Password</p>
           {
            demo.map((items :any,index :any)=>{
                   return(
                    <>
                    <div key={index} style={{border:"3px solid blue"}}>
                      <p className={style["formLabel"]}>Email : {items.emailid}</p>
                      <p className={style["formLabel"]}>Password : {items.password}</p>
                    </div>
                    </>
                   )
            })
           }
      </div>}
    </>
  );
};

export default Login;
