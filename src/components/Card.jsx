import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

const Card = (props) => {
return(
    <>
    <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar url={props.img}   />
        </div>
        <div className="bottom">
            <Details info={props.contact}/>
            <Details info={props.email}/>
        </div>
      </div>
    </>
)
}
export default Card;