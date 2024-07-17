import React from "react";
import { useState } from "react";
import Markdown from "react-markdown";
function Tldr() {
  // add state for input and chat tog
  const [tldrInput, settldrinput] = useState("");
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  async function handlesubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://text-code-util-aiprod.onrender.com/tldr-gen",
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
    } finally {
      setLoading(false); // Set loading to false when the request completes
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
        md:w-3/4 sm:w-full shadow-xl text-white bg-black  "
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
            className="ml-4 py-2 px-4 bg-green-500  rounded-lg hover:bg-green-600 cursor-pointer"
          />
        </div>{" "}
      </form>
      <br></br>
      <br></br>
      <center>
        {" "}
        <div className="card flex flex-auto justify-center shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Response from AI</h2>

            <div className="card-actions">
              <div>
                {loading ? (
                  <div className="loader"></div>
                ) : (
                  <div>
                    <Markdown>{result}</Markdown>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default Tldr;
