import { Configuration, OpenAIApi } from "openai";
import express, { response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const port = 3080;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get("/", (req, res) => {
  res.send("AI server has been started");
});

async function getdata() {
  app.post("/simple-file-gen", async (req, res) => {
    const word = req.body.word || "";
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatesimplewords(word),
      temperature: 0.7,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    console.log(generatesimplewords(word));
    console.log(completion.data.choices[0].text);
    res.status(200).json({ result: completion.data.choices[0].text });
    
  });
}
getdata();

async function getcmd() {
  app.post("/shell-command-gen", async (req, res) => {
    const cmd = req.body.cmd || "";
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatecmd(cmd),
      temperature: 0.7,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.2,
      presence_penalty: 0.0,
    });
    console.log(generatecmd(cmd));
    console.log(completion.data.choices[0].text);
    res.status(200).json({ result: completion.data.choices[0].text });
    
  });
}
getcmd();

async function getsql() {
  app.post("/sql-gen", async (req, res) => {
    const sql = req.body.sql || "";
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatesql(sql),
      temperature: 0.3,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    console.log(generatesql(sql))
    console.log(completion.data.choices[0].text);
    res.status(200).json({ result: completion.data.choices[0].text });
    
  });
}
getsql();

async function getidea() {
  app.post("/idea-gen", async (req, res) => {
    const idea = req.body.idea || "";
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generateidea(idea),
      temperature: 0.7,
      max_tokens: 300,
      top_p: 1.0,
      frequency_penalty: 0.2,
      presence_penalty: 0.0,
    });
    console.log(generateidea(idea));
    console.log(completion.data.choices[0].text);
    res.status(200).json({ result: completion.data.choices[0].text });
    
  });
}
getidea();

async function gettldr() {
  app.post("/tldr-gen", async (req, res) => {
    const tldr = req.body.tldr || "";
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatetldr(tldr),
      temperature: 0.7,
      max_tokens: 300,
      top_p: 1.0,
      frequency_penalty: 0.2,
      presence_penalty: 0.0,
    });
    console.log(generatetldr(tldr));
    console.log(completion.data.choices[0].text);
    res.status(200).json({ result: completion.data.choices[0].text });
    
  });
}

gettldr();

async function getbug() {
  app.post("/bug-gen", async (req, res) => {
    const bug = req.body.bug || "";
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatebug(bug),
      temperature: 0,
      max_tokens: 182,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    console.log(generatebug(bug));
    console.log(completion.data.choices[0].text);
    res.status(200).json({ result: completion.data.choices[0].text });
    
  });
}
getbug();

async function getcode() {
  app.post("/code-gen", async (req, res) => {
    const code = req.body.code || "";
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatecode(code),
      temperature: 0,
      max_tokens: 182,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    console.log(generatecode(code));
    console.log(completion.data.choices[0].text);
    res.status(200).json({ result: completion.data.choices[0].text });
    
  });
}
getcode();

async function getarticle() {
  app.post("/article-gen", async (req, res) => {
    const article = req.body.article || "";
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatearticle(article),
      temperature: 0.7,
      max_tokens: 500,
      top_p: 1.0,
      frequency_penalty: 0.2,
      presence_penalty: 0.0,
    });
    console.log(generatearticle(article))
    console.log(completion.data.choices[0].text);
    res.status(200).json({ result: completion.data.choices[0].text });
    
  });
}
getarticle();

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

//create a simple express api
app.listen(port, () => {
  console.log(`AI server running on http://localhost:${port}`);
});
