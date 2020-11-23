// write code for Welcome component here
  
import React from "react";
export default function (props) {
  const { name } = props;
  return (
    <>
      <h1>Hey {name}!</h1>
      <h2>Welcome to Newton School.</h2>
    </>
  );
}
