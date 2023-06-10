# Summarizer App
A summarizer web-app that created a summary based on a article's link.

## about the summarizer app
This web-app was built using javascript, react.js, redux and also tailwindcss. The summaries are created by calling an AI named Article Extractor and Summarizer (an API built using OpenAI - chatgpt).

## How to use
For use this app you must have a rapid ai key for use the Article Extractor and Summarizer.

Steps:

1. Sign in in [RapidAPI](https://rapidapi.com/auth?referral=/hub) if already has a account just sign up;
2. Once you have signed up, search for "Article Extractor and Summarizer" API;
3. Get the rapid key and create a file in the project root named: ``.env``;
4. In the file ``.env`` created created a variable named: ``VITE_RAPID_API_ARTICLE_KEY``;
5. Set the value of this variable with the rapid api key;

### [DEMO](https://6483be42760c1e00da67a570--steady-chaja-c8cf1e.netlify.app/)