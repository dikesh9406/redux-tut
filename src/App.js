import React from 'react';
import './App.css';
import User from './User';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
function App()
{
  let users=[
    {id:1, name:"dikesh"},
    {id:2, name:"shubham"}
  ]
  return(
    <>
    <h1>Hello App</h1>
    <BrowserRouter>
    {
      users.map((item)=>
      <div> <Link to={"/user/"+item.id+"/"+item.name}><h1>{item.name}</h1></Link></div>)
    }


    <Routes>
      <Route path='/user/:id/:name' element={<User />}></Route>


    </Routes>
   

    </BrowserRouter>
    </>
  )
}
export default App;