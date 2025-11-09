import React, { useState } from "react";
import { useLoaderData } from "react-router";
import UserUpdata from "./UserUpdata";

export default function UserDetails() {
  const user = useLoaderData();
  const [userData, setuserData] = useState(user);
  console.log(userData);

  return (
    <>
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "10px", marginTop: "20px" }}>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>ID:</strong> {userData._id}</p>
    </div>
    <UserUpdata setuserData={setuserData} userData={userData}/>
    </>
  );
}