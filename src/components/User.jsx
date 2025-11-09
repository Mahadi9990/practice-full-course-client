import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

export default function User() {
  const initialUser = useLoaderData();
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
  const handleDelete =(id)=>{
    console.log('delete')
    fetch(`http://localhost:3000/user/${id}`,{
      method:"DELETE"
    }).then((res)=> res.json()).then(data => {
      console.log(data.deletedCount)
      if(data.deletedCount){
        const remainUser =user.filter((item)=>  item._id !== id)
        setuser(remainUser)
      }
    })
  }
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
      <div className="">{user.map((item) => <div className=" flex justify-center" key={item._id}>
        <p className="">{item.email} </p>
        <Link to={`/user/${item._id}`}><button className="btn">Details</button></Link>
        <button onClick={()=>handleDelete(item._id)} className="btn">X</button>
      </div>)}</div>
    </>
  );
}
