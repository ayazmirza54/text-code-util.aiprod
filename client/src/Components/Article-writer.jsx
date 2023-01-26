import React from "react";
import { useState } from "react";

function Articlewriter() {
  // add state for input and chat tog
  const [articleInput, setarticleinput] = useState("");
  const [result, setResult] = useState();

  async function handlesubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3080/article-gen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ article: articleInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setarticleinput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <>
      <div className="flex justify-center gap-8">
        <img
          className="svg-styles w-14 h-14 rounded-md"
          src="../../src/assets/article-writer.svg"
        ></img>
        <h2 className="text-xl">Any topic to an article</h2>
      </div>
      <br></br>
      <br></br>
      <form onSubmit={handlesubmit} >
      <center>  <input
          type="text"
          name="article"
          placeholder="Enter an topic you want to understand in simple articles"
          value={articleInput}
          onChange={(e) => setarticleinput(e.target.value)}
          className=" h-40 py-2 px-4 rounded-lg 
         shadow-xl text-2xl bg-base-100  text-white w-full"
        /></center>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex justify-center gap-">
          {" "}
          <img
            className="svg-styles w-14 h-14 rounded-md"
            src="../../src/assets/robot-svgrepo-com.svg"
          ></img>
          <input
            type="submit"
            value="Generate article"
            className="ml-4 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
          />
        </div>{" "}
      </form>
      <br></br>
      <br></br>
     <center> <div className="card w-1/2 text-2xl flex flex-auto justify-center bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Response from AI</h2>
    
    <div className="card-actions">
     <div>{result}</div>
    </div>
  </div>
</div>
</center>
   
    </>
  );
}

export default Articlewriter;
