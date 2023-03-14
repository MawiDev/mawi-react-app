import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return(
        <React.Fragment>
            <h1>Error 404 not found!</h1>
            <Link to={'/'}>Back Home</Link>
        </React.Fragment>
    )
}