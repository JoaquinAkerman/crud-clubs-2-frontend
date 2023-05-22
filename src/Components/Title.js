import React from "react";

import { serverBaseUrl } from "../modules/serverUrl";


const Title = () => {
  
  const serverImagesBaseUrl = `${serverBaseUrl}/public/static/images/`;
  
  return (
    <div
      className="title-container"
      style={{
        backgroundImage: `url("${serverImagesBaseUrl}backgroundSoccer.jpg")`,
      }}
    >
      <h1 id="title">Club List</h1>
      <img src={`${serverImagesBaseUrl}soccer-ball.png`} alt={"Soccer ball"} className={"soccer-ball-img"} />
    </div>
  );
};

export default Title;
