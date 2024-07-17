import React, { useState } from "react";
import Markdown from "react-markdown";


function Articlewriter() {
  // Add state for input, result, and loading
  const [articleInput, setarticleinput] = useState("");
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false); // New loading state

  async function handlesubmit(event) {
    event.preventDefault();
    setLoading(true); // Set loading to true when the request starts
    try {
      const response = await fetch(
        "https://text-code-util-aiprod.onrender.com/article-gen",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ article: articleInput }),
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
      setarticleinput("");
    } catch (error) {
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
          src="../../assets/article-writer.svg"
          alt="Article Writer Icon"
        ></img>
        <h2 className="text-xl">Any topic to an article</h2>
      </div>
      <br></br>
      <br></br>
      <form onSubmit={handlesubmit}>
        <center>
          <input
            type="text"
            name="article"
            placeholder="Enter a topic you want to understand in simple articles"
            value={articleInput}
            onChange={(e) => setarticleinput(e.target.value)}
            className="h-40 py-2 px-4 rounded-lg shadow-xl text-white bg-black w-full"
          />
        </center>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex justify-center gap-8">
          <img
            className="svg-styles w-14 h-14 rounded-md"
            src="../../assets/robot-svgrepo-com.svg"
            alt="Robot Icon"
          ></img>
          <input
            type="submit"
            value="Generate article"
            className="ml-4 py-2 px-4 bg-green-500  rounded-lg hover:bg-green-600 cursor-pointer"
          />
        </div>
      </form>
      <br></br>
      <br></br>
      <center>
        <div className="card w-full text-2xl flex flex-auto justify-center shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Response from AI</h2>
            <center>  <div className="card-actions">
              {loading ? (
              <div className="loader"></div>  
              ) : (
                <div>
                  <Markdown>{result}</Markdown>
                </div>
              )}
            </div></center>
          </div>
        </div>
      </center>
    </>
  );
}

export default Articlewriter;
