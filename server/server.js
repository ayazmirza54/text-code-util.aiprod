import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import express, { response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
const port = 3080;
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

app.get("/", (req, res) => {
  res.send("AI server has been started");
});
async function gettldr() {
  app.post("/tldr-gen", async (req, res) => {
    const tldr = req.body.tldr || "";
    const completion = await model.generateContent(generatesimplewords(tldr));
    console.log(generatesimplewords(tldr));
    console.log(completion.response.text());
    res.status(200).json({ result: completion.response.text() });
  });
}

gettldr();


async function getarticle() {
    app.post("/article-gen", async (req, res) => {
      const article = req.body.article || "";
      const completion = await model.generateContent(generatearticle(article));
      console.log(generatearticle(article));
      console.log(completion.response.text());
      res.status(200).json({ result: completion.response.text() });
    });
  }
  
getarticle();

  async function getcmd() {
    app.post("/shell-command-gen", async (req, res) => {
      const cmd = req.body.cmd || "";
      const completion = await model.generateContent(generatecmd(cmd));
      console.log(generatecmd(cmd));
      console.log(completion.response.text());
      res.status(200).json({ result: completion.response.text() });
    });
  }
  
  getcmd();

  async function getcode() {
    app.post("/code-gen", async (req, res) => {
      const code = req.body.code || "";
      const completion = await model.generateContent(generatecode(code));
      console.log(generatecode(code));
      console.log(completion.response.text());
      res.status(200).json({ result: completion.response.text() });
    });
  }
  
  getcode();

  async function getbug() {
    app.post("/bug-gen", async (req, res) => {
      const bug = req.body.bug || "";
      const completion = await model.generateContent(generatebug(bug));
      console.log(generatebug(bug));
      console.log(completion.response.text());
      res.status(200).json({ result: completion.response.text() });
    });
  }
  
  getbug();

  async function getidea() {
    app.post("/idea-gen", async (req, res) => {
      const idea = req.body.idea || "";
      const completion = await model.generateContent(generateidea(idea));
      console.log(generateidea(idea));
      console.log(completion.response.text());
      res.status(200).json({ result: completion.response.text() });
    });
  }
  
  getidea();

  async function getdata() {
    app.post("/simple-file-gen", async (req, res) => {
      const word = req.body.word || "";
      const completion = await model.generateContent(generatesimplewords(word));
      console.log(generatesimplewords(word));
      console.log(completion.response.text());
      res.status(200).json({ result: completion.response.text() });
    });
  }
  
  getdata();

  async function getsql() {
    app.post("/sql-gen", async (req, res) => {
      const sql = req.body.sql || "";
      const completion = await model.generateContent(generatesql(sql));
      console.log(generatesql(sql));
      console.log(completion.response.text());
      res.status(200).json({ result: completion.response.text() });
    });
  }
  
  getsql();


function generatesimplewords(word) {
    return `Explain the below topic to a second grader ${word}`;
    }
  function generatecmd(cmd) {
    return `Convert this text to a shell command:  ${cmd}`;
  }
  function generatesql(sql) {
    return `Generate SQL query for this prompt: ${sql}`;
  }
  function generateidea(idea) {
    return `Gereate some ideas around this prompt: ${idea}`;
   
  }
  function generatetldr(tldr) {
    return `Sumarize this:  ${tldr}`;
    }
  function generatebug(bug) {
    return `Find bug in this code:  ${bug}`;
  }
  function generatecode(code) {
    return `Explain this code:  ${code}`;
    }
  function generatearticle(article) {
    return `Generate an article for this topic:  ${article}`;
    
  }

app.listen(port, () => {
    console.log(`AI server running on http://localhost:${port}`);
  });