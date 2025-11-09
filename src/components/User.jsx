import React, { use, useState } from "react";

export default function User({ userInfo }) {
  const initialUser = use(userInfo);
  const [user, setuser] = useState(initialUser);
  console.log(user)
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };
    fetch("http://localhost:3000/usersPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          newUser._id = data.insertedId
          const newUsers = [...user,newUser]
          setuser(newUsers)
        }
        e.target.reset()
      });
  };
  return (
    <>
      <div className="">
        <h3>User form</h3>
        <form onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="user name " />
          <input name="email" type="email" placeholder="email" />
          <button>Submit</button>
        </form>
      </div>
      <div>{user.map((item) => <div key={item._id}>{item.email}</div>)}</div>
    </>
  );
}
