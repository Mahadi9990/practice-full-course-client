import React from "react";
import { createBrowserRouter } from "react-router";
import User from "../components/User";
import UserDetails from "../components/UserDetails";
import UserUpdata from "../components/UserUpdata";
import Products from "../components/Products";
import Root from "../layout/Root";
import Main from "../components/Main";
import Auth from "../layout/Auth";
import Register from "../pages/Register";
import Login from "../pages/Login";

export const AllRoute = createBrowserRouter([
  {
    path: "/",
    loader:()=> fetch('http://localhost:3000/users'),
    Component: Root,
    children:[{
      index:true,
      Component:Main
    }]
  },
  {
    path: "/auth",
    loader:()=> fetch('http://localhost:3000/users'),
    Component: Root,
    children:[{
      index:true,
      Component:Login
    },{
      path:'register',
      Component:Register
    }
  ]
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
