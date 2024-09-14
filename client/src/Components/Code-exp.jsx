import { useState } from "react";
import Markdown from "react-markdown";
function Codeexp() {
  // add state for input and chat tog
  const [codeInput, setcodeinput] = useState("");
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  async function handlesubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://text-code-util-aiprod.onrender.com/code-gen",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code: codeInput }),
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
      setcodeinput("");
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
      src="../../assets/code-green.svg"
      alt="Code Explainer Icon"
    />
    <h2 className="text-xl sm:text-2xl md:text-3xl">Code Explainer</h2>
  </div>

  <form onSubmit={handlesubmit} className="mb-8">
    <div className="mb-6">
      <textarea
        name="code"
        placeholder="Enter a code to get its explanation"
        value={codeInput}
        onChange={(e) => setcodeinput(e.target.value)}
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
        Generate code explanation
      </button>
    </div>
  </form>

  <div className="card w-full shadow-xl bg-gray-800">
    <div className="card-body p-6">
      <h2 className="card-title text-xl sm:text-2xl md:text-3xl mb-4">Response from AI</h2>
      <div className="card-actions">
        <div className="w-full p-4 mockup-code font-mono overflow-x-auto">
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

export default Codeexp;
