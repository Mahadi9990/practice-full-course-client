import React from "react";
import { createBrowserRouter } from "react-router";
import User from "../components/User";
import UserDetails from "../components/UserDetails";
import UserUpdata from "../components/UserUpdata";
import Products from "../components/Products";

export const AllRoute = createBrowserRouter([
  {
    path: "/",
    loader:()=> fetch('http://localhost:3000/users'),
    Component: User,
  },
  {
    path:'/user/:id',
    loader:({params})=>fetch(`http://localhost:3000/user/${params.id}`),
    Component:UserDetails
  },
  {
    path:'/userUpdata/:id',
    loader:({params})=>fetch(`http://localhost:3000/user/${params.id}`),
    Component:UserUpdata
  },
  {
    path:'/products',
    loader:()=>fetch(`http://localhost:3000/products`),
    Component: Products
  }
]);
