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

### Contributors
Jose Franco Galvez



