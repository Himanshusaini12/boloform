import { useState } from "react";
import './PostNumber.css';
import './body.css'
function PostNumber() {
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://nod.himasaini6.repl.co/bob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ number })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  };

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div className="PostNumber">
      <form onSubmit={handleSubmit}>
        <label>
          Enter a number:
          <input type="number" value={number} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostNumber;
