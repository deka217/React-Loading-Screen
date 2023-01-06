import React, { useEffect, useState } from "react";
import "./PreLoader3.css";
import Home from "../pages/Home";
import LoadingImg from "../assets/img/loading-animated-png-original.gif";

function PreLoader3() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    // setTimeout(() => {
    //   fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((response) => response.json())
    //     .then((json) => {
    //       console.log(json);
    //       setData(json);
    //       setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 10000);
    //     });
    // }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <img src={LoadingImg} alt="Loading" />
          ) : (
            // <div className="completed">&#x2713;</div>
            <Home></Home>
          )}
        </>
      ) : (
        <>
          <Home></Home>
        </>
      )}
    </>
  );
}

export default PreLoader3;
