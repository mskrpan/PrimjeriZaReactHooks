import React, { useState, useEffect } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("predplati");

    //return služi kao clean-up zato što se prvi izvede tj prije prve console u effectu
    //večinom se koristi kad imamo eventlistener ili neki api na koji se predplačujemo tako da nam prvo makne pretplatu staru i napravi novu
    return ()=>{
      console.log('----------------------');
      console.log("makni predplatu");
    }
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() =>setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h2>{resourceType}</h2>
    </>
  );
}

export default App;
