import React from "react";
import { useState } from "react";

function Tldr() {
  // add state for input and chat tog
  const [tldrInput, settldrinput] = useState("");
  const [result, setResult] = useState();

  async function handlesubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://http-nodejs-production-be9b.up.railway.app/tldr-gen",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tldr: tldrInput }),
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
      settldrinput("");
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
        <h2 className="text-xl">Summarize anything</h2>
      </div>
      <br></br>
      <br></br>
      <form onSubmit={handlesubmit}>
        <center>
          {" "}
          <input
            type="text"
            name="tldr"
            placeholder="Enter an topic to summarize it"
            value={tldrInput}
            onChange={(e) => settldrinput(e.target.value)}
            className=" h-40 py-2 px-4 rounded-lg 
        md:w-3/4 sm:w-full shadow-xl text-2xl bg-base-100  text-white "
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
            value="Generate simple tldr"
            className="ml-4 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
          />
        </div>{" "}
      </form>
      <br></br>
      <br></br>
      <center>
        {" "}
        <div className="card text-2xl flex flex-auto justify-center bg-base-100 shadow-xl">
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

export default Tldr;
