import React, { useState, useEffect } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");

  //van effecta
  console.log("1. van effecta");

  //unutar effecta s  [resourceType]
  useEffect(() => {
    console.log("2. unutar effecta");
  }, [resourceType]);

  //unutar effecta s  [] i ovo se desi samo prvi put kad se učita stranica
  useEffect(() => {
    console.log("3. ovo je kao u klasi, kao da imamo onMount");
  }, []);

  //unutar effecta ali prazan drugi parametar
  useEffect(() => {
    console.log("4. ovo je kad nema drugog parametra");
  });

  return (
    <>
      <div>
        <button
          onClick={() => {
            setResourceType("posts");
            console.log("----------------------------");
          }}
        >Posts</button>
        <button
          onClick={() => {
            setResourceType("users");
            console.log("----------------------------");
          }}
        >Users</button>
        <button
          onClick={() => {
            setResourceType("comments");
            console.log("----------------------------");
          }}
        >Comments</button>
      </div>
      <h2>{resourceType}</h2>
    </>
  );
}

export default App;
