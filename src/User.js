import { useParams } from "react-router-dom";

import React from "react";
function User()
{
    const {id}=useParams();
    const {name}=useParams();
    return(
        <>
        <h1>hello {id} {name}</h1>
        </>
    )
}
export default User;