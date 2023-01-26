import React from "react";
import { Link } from "react-router-dom";
function Tools() {
  return (
    <>
      {" "}
      <br></br>
      <div>
        <h2 className="text-center text-4xl font-mono">AI-Powered Tools</h2>{" "}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br />
      <div className="grid md:grid-cols-2 sm:grid-cols-1 sm:w-full gap-20 sm:m-0 sm:p-0 toolsgrid">
        <Link to="/tldr">
          <div className="flex gap-8">
            {" "}
            <img
              className="svg-styles w-14 h-14 rounded-md"
              src="../../assets/article-writer.svg"
            ></img>
            <h2 className="text-xl">AI text summarizer</h2>
          </div>
        </Link>
        <Link to="/article-writer">
          <div className="flex gap-8">
            {" "}
            <img
              className="svg-styles w-14 h-14 rounded-md"
              src="../../assets/article.svg"
            ></img>
            <h2 className="text-xl">AI article generator</h2>
          </div>
        </Link>
        <Link to="/shell-command-gen">
          <div className="flex gap-8">
            {" "}
            <img
              className="svg-styles w-14 h-14 rounded-md"
              src="../../assets/shell.svg"
            ></img>
            <h2 className="text-xl">Shell command generator</h2>
          </div>
        </Link>
        <Link to="/code-exp">
          <div className="flex gap-8">
            {" "}
            <img
              className="svg-styles w-14 h-14 rounded-md"
              src="../../assets/code-green.svg"
            ></img>
            <h2 className="text-xl">Code Explainer</h2>
          </div>
        </Link>
        <Link to="/bug-finder">
          <div className="flex gap-8">
            {" "}
            <img
              className="svg-styles w-14 h-14 rounded-md"
              src="../../assets/bug-fix.svg"
            ></img>
            <h2 className="text-xl">Bug Finder</h2>
          </div>
        </Link>
        <Link to="/ideas-gen">
          <div className="flex gap-8">
            {" "}
            <img
              className="svg-styles w-14 h-14 rounded-md"
              src="../../assets/article-writer.svg"
            ></img>
            <h2 className="text-xl">Ideas generator</h2>
          </div>
        </Link>
        <Link to="/simple-gen">
          <div className="flex gap-8">
            {" "}
            <img
              className="svg-styles w-14 h-14 rounded-md"
              src="../../assets/ideas.svg"
            ></img>
            <h2 className="text-xl">Any text to simple Words</h2>
          </div>
        </Link>
        <Link to="/sql-gen">
          <div className="flex gap-8">
            {" "}
            <img
              className="svg-styles w-14 h-14 rounded-md"
              src="../../assets/code.svg"
            ></img>
            <h2 className="text-xl">Text to SQL Query</h2>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Tools;
