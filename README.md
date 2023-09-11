# ReactJS Form Connected to Notion Database

This is a simple web application built with ReactJS that connects to a Notion Database using the Notion API. It allows you to submit data to a Notion database from a user-friendly form interface.

## Getting Started
### Prerequisites
Before you begin, ensure you have met the following requirements:
Node.js installed (version specified in package.json)

### Installation
To run this application locally, follow these steps:

1. Clone this repository to your local machine.

```bash
git clone <repository-url>
```

2. Install server dependencies:

```bash
npm install
```

3. Navigate to the client directory and install client dependencies:

```bash
cd client
npm install
```

4. Create a .env file and add the following environment variables:
```bash
NOTION_SECRET=YOUR_NOTION_API_KEY
DATABASE_ID=YOUR_NOTION_DATABASE_ID
PORT=4000
HOST=localhost
ReCAPTCHA = YOUR_GOOGLE_RECAPTCHA_API_KEY
```

### Tutorial
For a detailed tutorial on how to get your Notion API KEY and Database ID please watch the following video on YouTube:
```bash
https://www.youtube.com/watch?v=WbekTHVISh0
```

### Usage

1. Start the server:
```bash
npm start
```
This will start the Express server that connects to your Notion database and serves the React app.

2. Start the client:
```bash
cd client
npm start
```

Once both the client and server are running, you can access the application in your web browser. Fill out the form fields and submit the data to your Notion database.

###Client
###Dependencies
- axios (^1.5.0) - A promise-based HTTP client for making requests.
- axios-rate-limit (^1.3.0) - A rate-limiting library for Axios requests.
- dotenv (^16.3.1) - Loads environment variables from a .env file.
- react (^18.2.0) - A JavaScript library for building user interfaces.
- react-dom (^18.2.0) - Entry point for React rendering.
- react-google-recaptcha (^3.1.0) - React component for Google reCAPTCHA.
- react-scripts (5.0.1) - Configuration and scripts for React development.
- react-toastify (^9.1.3) - Notification library for React applications.
- web-vitals (^2.1.4) - Library for measuring web vital metrics.

###Server
###Dependencies
- @notionhq/client (^2.2.13) - Official Notion API client library.
- axios-rate-limit (^1.3.0) - A rate-limiting library for Axios requests.
- body-parser (^1.20.2) - Middleware for parsing request bodies.
- cors (^2.8.5) - Middleware for enabling Cross-Origin Resource Sharing.
- dotenv (^16.3.1) - Loads environment variables from a .env file.
- express (^4.18.2) - A web application framework for Node.js.
- express-rate-limit (^6.11.0) - Middleware for rate limiting requests.
- nodemon (^3.0.1) - Utility that monitors for changes and restarts the server.



### Contributors
Jose Franco Galvez



