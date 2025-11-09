import React from "react";
import { useLoaderData } from "react-router";

export default function UserUpdata({userData,setuserData}) {
  const updataUser = useLoaderData();
  console.log(updataUser);
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const setUser = { email, name };
    setuserData({ ...userData, name, email });
    fetch(`http://localhost:3000/userUpdata/${updataUser._id}`,
         { method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(setUser)
          })
      .then((res) => res.json())
      .then((data) => data);
  };
  return (
    <>
      <div className="">
        <h3>User form</h3>
        <form onSubmit={handleUpdate}>
          <input
            name="name"
            type="text"
            placeholder="user name "
            defaultValue={updataUser.name}
          />
          <input
            name="email"
            type="email"
            placeholder="email"
            defaultValue={updataUser.email}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
