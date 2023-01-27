import React from "react";
import { useState } from "react";

function Ideasgen() {
  // add state for input and chat tog
  const [ideaInput, setideainput] = useState("");
  const [result, setResult] = useState();

  async function handlesubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://http-nodejs-production-2379.up.railway.app/idea-gen",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ idea: ideaInput }),
        }
      );

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setideainput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <>
      <br></br>
      <div className="flex justify-center gap-8">
        <img
          className="svg-styles w-14 h-14 rounded-md"
          src="../../assets/ideas.svg"
        ></img>
        <h2 className="text-xl">Ideas generator</h2>
      </div>
      <br></br>
      <br></br>
      <form onSubmit={handlesubmit}>
        <center>
          {" "}
          <input
            type="text"
            name="idea"
            placeholder="Enter a prompt to get ideas around it"
            value={ideaInput}
            onChange={(e) => setideainput(e.target.value)}
            className=" h-40 py-2 px-4 rounded-lg 
        md:w-3/4 sm:w-full shadow-xl text-2xl text-white bg-black  "
          />
        </center>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex justify-center gap-">
          {" "}
          <img
            className="svg-styles w-14 h-14 rounded-md"
            src="../../assets/robot-svgrepo-com.svg"
          ></img>
          <input
            type="submit"
            value="Generate idea"
            className="ml-4 py-2 px-4 bg-green-500  rounded-lg hover:bg-green-600"
          />
        </div>{" "}
      </form>
      <br></br>
      <br></br>
      <center>
        {" "}
        <div className="card w-full text-2xl flex justify-start bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Response from AI</h2>

            <div className="card-actions">
              <div className="">
                <code>{result}</code>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default Ideasgen;
