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
      <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <img
          className="w-14 h-14 rounded-md"
          src="../../assets/article-writer.svg"
          alt="Ideas"
        />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">Summarize anything</h2>
      </div>

      <form onSubmit={handlesubmit} className="mb-8">
        <div className="mb-6">
          <textarea
            name="tldr"
            placeholder="Enter a topic to summarize it"
            value={tldrInput}
            onChange={(e) => settldrinput(e.target.value)}
            className="w-full h-40 py-2 px-4 rounded-lg shadow-xl text-white bg-black resize-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <img
            className="w-14 h-14 rounded-md"
            src="../../assets/robot-svgrepo-com.svg"
            alt="Robot"
          />
          <button
            type="submit"
            className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 w-full sm:w-auto"
          >
            Generate simple tldr
          </button>
        </div>
      </form>

      <div className="card w-full shadow-xl bg-gray-800">
    <div className="card-body p-6">
      <h2 className="card-title text-xl sm:text-2xl md:text-3xl mb-4">Response from AI</h2>
      <div className="card-actions">
        <div className="w-full p-4 overflow-x-auto">
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

export default Tldr;
