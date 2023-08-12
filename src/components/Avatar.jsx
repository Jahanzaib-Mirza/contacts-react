import React from "react";

const Avatar = (props) =>{
    return(
        <>
        <img className="circle-img"
            src={props.url}
            alt="avatar"
          />
        </>
    )
};
export default Avatar