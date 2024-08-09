import React from "react";
import { useState } from "react";
import Markdown from "react-markdown";
function Ideasgen() {
  // add state for input and chat tog
  const [ideaInput, setideainput] = useState("");
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  async function handlesubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://text-code-util-aiprod.onrender.com/idea-gen",
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
    } finally {
      setLoading(false); // Set loading to false when the request completes
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8">
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
    <img
      className="w-14 h-14 rounded-md"
      src="../../assets/ideas.svg"
      alt="Ideas Generator Icon"
    />
    <h2 className="text-xl sm:text-2xl md:text-3xl">Ideas generator</h2>
  </div>

  <form onSubmit={handlesubmit} className="mb-8">
    <div className="mb-6">
      <textarea
        name="idea"
        placeholder="Enter a prompt to get ideas around it"
        value={ideaInput}
        onChange={(e) => setideainput(e.target.value)}
        className="w-full sm:w-full md:w-3/4 h-40 py-2 px-4 rounded-lg shadow-xl text-white bg-black resize-none mx-auto block"
      />
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
      <img
        className="w-14 h-14 rounded-md"
        src="../../assets/robot-svgrepo-com.svg"
        alt="Robot Icon"
      />
      <button
        type="submit"
        className="w-full sm:w-auto py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 cursor-pointer"
      >
        Generate idea
      </button>
    </div>
  </form>

  <div className="card w-full shadow-xl bg-white dark:bg-gray-800">
    <div className="card-body p-6">
      <h2 className="card-title text-xl sm:text-2xl md:text-3xl mb-4">Response from AI</h2>
      <div className="card-actions">
        <div className="w-full">
          {loading ? (
            <div className="loader mx-auto"></div>  
          ) : (
            <div className="prose dark:prose-invert max-w-none">
              <Markdown>{result}</Markdown>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default Ideasgen;
