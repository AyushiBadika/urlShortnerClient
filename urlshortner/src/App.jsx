import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState("");

  async function handleClick() {
    await fetch("https://urlshortnerserver-fnto.onrender.com/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        setShortenUrl(res.url);
      })
      .catch((err) => {
        window.alert("Error creating short url");
      });
  }

  return (
    <div>
      <h1>URL Shortner</h1>
      <div className="input-div">
        <div>Enter a long URL:</div>
        <input value={url} onChange={(e) => setUrl(e.target.value)} type="text" />
        <button onClick={() => handleClick()}>Shorten URL</button>
      </div>
      <br />
      {shortenUrl && (
        <div>
          Short url is <a href={shortenUrl}>{shortenUrl}</a>
        </div>
      )}
    </div>
  );
}

export default App;
