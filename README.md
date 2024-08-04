# Text and Code Utilities powered by Google Gemini AI

AI has become an integral part of modern technology, and developers are utilizing it to create powerful applications. In this blog post, I'll be discussing my experience with creating a web app that incorporates the Google Gemini API for various text and code utilities. I'll be outlining my process, from the initial design to the deployment of the application, and share some insights on how I incorporated the Gemini API into my project.

## Developing the Web App

I decided to use ReactJS to create the web app, as it is a versatile and powerful framework that allows for quick development. I also used Vite as my build tool, as it is a lightweight build system that can quickly run applications in development mode.

For the AI functionality, I utilized the Google Gemini API, which provides powerful natural language processing capabilities. I used the API to create various text and code utilities, generating content based on user inputs.

Tech Stack >>

```
React JS for front end
Vite as the build tool
Tailwind CSS for designing the UI
Express JS for server side rendering
React Router for routes management
Google Gemini API for AI-powered functionalities
```

## Deployment

Once I finished developing the application, I needed to deploy it. I decided to use Vercel and Render for deployment, as they offer easy and secure hosting. Using Vercel and Render, I was able to quickly deploy the application and make it available to the public.

Github Link : [Github Link](https://github.com/ayazmirza54/text-code-util.aiprod)

Live URL : [AI-utilities](https://ai-utilities.in/)

## Explaining the functionality and code logic:

## Here's a quick flowchart for the logic of the app >

![image](https://github.com/user-attachments/assets/fd3c6fdd-d0d3-4cf7-b756-214e1fb6374d)

I have created 8 separate tools built into this app. Each tool has components made for its functionality, and I am using eight different functions to give custom prompts for different specific features of the App. I am passing different parameters to the Gemini API for different types of tools to get the expected results. For each tool, there is a different route made in the app, and on the basis of the route, I am passing different requests to the server side of the app.

## Here is the server side code:

```javascript
import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const port = 3080;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get("/", (req, res) => {
  res.send("AI server has been started");
});

async function getdata() {
  app.post("/simple-file-gen", async (req, res) => {
    const word = req.body.word || "";
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = generatesimplewords(word);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.status(200).json({ result: text });
  });
}
getdata();

// Similar functions for other tools (getcmd, getsql, getidea, etc.)

function generatesimplewords(word) {
  return `Explain the below topic to a second grader ${word}`;
}

// Other prompt generation functions

app.listen(port, () => {
  console.log(`AI server running on http://localhost:${port}`);
});
```

## Features of the App >

- **AI text summarizer**: Summarize any long text
- **AI article generator**: Generate articles about any topic
- **Shell command generator**: Generate shell commands based on the prompt
- **Code Explainer**: Explain code functionality
- **Bug Finder**: Find bugs in a given code
- **Ideas generator**: Generate ideas around a specific topic
- **Any text to simple Words**: Enter any topic to get an explanation in simple words
- **Text to SQL Query**: Generate SQL queries for a given prompt

## Conclusion

By utilizing the Google Gemini API, I was able to create a powerful web app that offers various text and code utilities. The Gemini API provided robust natural language processing capabilities, allowing me to implement features like text summarization, code explanation, and idea generation.

Overall, I am pleased with the results of the web app, and I am excited to explore more of Gemini's API capabilities. The power and flexibility of the Gemini API have opened up numerous possibilities for enhancing and expanding the app's functionality.

I look forward to further optimizing the app and potentially adding new features that leverage the full potential of the Gemini API. This project has been an excellent opportunity to work with cutting-edge AI technology, and I'm eager to see how it can be applied to solve more complex problems in the future.




