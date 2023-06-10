import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Shopping",
  initialState: {
    arr: {
      demo: "redux check",
      productDetail: [],
      signUpDetails: [],
      logInDetails: [],
      cartOpen: {
        open: false,
      },
      productCart: [],
    },
  },
  reducers: {
    Signup: (state, action) => {
      //  console.log(state.arr.signUpDetails);
      state.arr.signUpDetails.push(action.payload);
    },
    Userlogin: (state, action) => {
      state.arr.logInDetails.push(action.payload);
    },
    cartAction: (state, action) => {
      //   console.log(action.payload);
      state.arr.cartOpen.open = action.payload;
    },
    productDetails: (state, action) => {
      //  console.log("in");
      const newArr = action.payload
        .filter((item) => {
          return !state.arr.productDetail.some(
            (detail) => detail.id === item.id
          );
        })
        .map((item) => {
          return { ...item, Count: 1 }; // Create a new object with "Count" property set to 0
        });
      state.arr.productDetail.push(...newArr);
    },
    addToCart: (state, action) => {
      //  console.log("AAdd to cart");
      let arr = action.payload[0];
      //  console.log(arr);

      const newArr = action.payload.filter((item) => {
        return !state.arr.productCart.some((detail) => detail.id === item.id);
      });
      //  console.log(newArr);
      state.arr.productCart.push(...newArr);
    },
    increaseQuantity: (state, action) => {
    //  console.log(action.payload);

      state.arr.productCart = action.payload;
    },
    decreaseQuantity: (state, action) => {
    //  console.log(action.payload);
    //  console.log("in redux");
      state.arr.productCart = action.payload;
    },
  },
});

export const {
  Signup,
  Userlogin,
  cartAction,
  productDetails,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} = authSlice.actions;

export default authSlice.reducer;
