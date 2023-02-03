import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Tools from "./Components/Tools";
import { Routes, Route } from "react-router-dom";
import Articlewriter from "./Components/Article-writer";
import Bugfinder from "./Components/Bug-finder";
import Codeexp from "./Components/Code-exp";
import Ideasgen from "./Components/Ideas-gen";
import Simplegen from "./Components/Simplegen";
import Shellcommandgen from "./Components/Shell-command-gen";
import Tldr from "./Components/Tldr";
import Sqlgen from "./Components/Sql-gen";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/tools"
          element={
            <>
              <Header />
              <Tools />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/article-writer"
          element={
            <>
              <Header />
              <Articlewriter />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/bug-finder"
          element={
            <>
              <Header />
              <Bugfinder />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/code-exp"
          element={
            <>
              <Header />
              <Codeexp />
              <Footer></Footer>
            </>
          }
        />
        <Route
          exact
          path="/ideas-gen"
          element={
            <>
              <Header />
              <Ideasgen />
              <Footer></Footer>
            </>
          }
        />
     
        <Route
          exact
          path="/shell-command-gen"
          element={
            <>
              <Header />
              <Shellcommandgen />
              <Footer></Footer>
            </>
          }
        />
        <Route
          exact
          path="/tldr"
          element={
            <>
              <Header />
              <Tldr />
              <Footer></Footer>
            </>
          }
        />
        <Route
          exact
          path="/sql-gen"
          element={
            <>
              <Header />
              <Sqlgen />
              <Footer></Footer>
            </>
          }
        />
        <Route
          exact
          path="/simple-gen"
          element={
            <>
              <Header />
              <Simplegen />
              <Footer></Footer>
            </>
          }
        />
        
      </Routes>
     
    </div>
  );
}

export default App;
