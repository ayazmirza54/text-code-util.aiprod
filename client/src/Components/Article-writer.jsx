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
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
  <div className="my-8">
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
      <img
        className="w-14 h-14 rounded-md"
        src="../../assets/article.svg"
        alt="Article Writer Icon"
      />
      <h2 className="text-xl sm:text-2xl md:text-3xl text-center sm:text-left">Any topic to an article</h2>
    </div>
  </div>

  <form onSubmit={handlesubmit} className="mb-8">
    <div className="mb-6">
      <textarea
        name="article"
        placeholder="Enter a topic you want to generate an article for the same."
        value={articleInput}
        onChange={(e) => setarticleinput(e.target.value)}
        className="w-full h-40 py-2 px-4 rounded-lg shadow-xl text-white bg-black resize-none"
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
        Generate article
      </button>
    </div>
  </form>

  <div className="card w-full shadow-xl bg-white dark:bg-gray-800">
    <div className="card-body p-6">
      <h2 className="card-title text-xl sm:text-2xl md:text-3xl mb-4">Response from AI</h2>
      <div className="card-actions">
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
    </>
  );
}

export default Articlewriter;
