import React, { useState, useEffect } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType]);

  return (
    <>
      <div>
        <button
          onClick={() =>setResourceType("posts")}>Posts</button>
        <button
          onClick={() => setResourceType("users")}>Users</button>
        <button
          onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h2>{resourceType}</h2>

      {/* Ovo je kad gore na liniji 10 napravimo seItems moramo te itemse preko map iterirat i onda json format
      s stringify pretvorit u string kako bi prikazali u pre elementu */}
      {items.map(item => {
        return <pre>{ JSON.stringify(item)}</pre>
      })}
    </>
  );
}

export default App;
