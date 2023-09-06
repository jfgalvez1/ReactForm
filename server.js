const express = require('express');
const { Client } = require('@notionhq/client');
const cors = require('cors');
require('dotenv').config();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const app = express();

app.use(cors());

const PORT = process.env.PORT;
const HOST = process.env.HOST;
const NOTION_SECRET = process.env.NOTION_SECRET;
const DATABASE_ID = process.env.DATABASE_ID;

const notion = new Client({ auth: NOTION_SECRET });

app.post('/submitFormToNotion', jsonParser, async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const comment = req.body.comment;

    try {
        const response = await notion.pages.create({
            parent: { database_id: DATABASE_ID },
            properties: {
                Name: {
                    title: [
                        {
                            text: {
                                content: name
                            }
                        }
                    ]
                },
                "Email": {
                    rich_text: [
                        {
                            text: {
                                content: email
                            }
                        }
                    ]
                },
                "Comments": { // Fixed the syntax here
                    rich_text: [
                        {
                            text: {
                                content: comment
                            }
                        }
                    ]
                }
            }
        });

        console.log(response);
        console.log("SUCCESS");
        res.sendStatus(200); // Send a success status back to the client
    } catch (error) {
        console.log(error);
        res.sendStatus(500); // Send an error status back to the client
    }
});

app.listen(PORT, HOST, () => {
    console.log("Starting proxy at " + HOST + ":" + PORT);
});
