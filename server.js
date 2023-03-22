require("dotenv").config()
//bring in express library
const express = require('express');
const chats = require("./models/chats")

// create the express app object
// all middleware and routes must be registered with app
// app tracks all the things the app does when a request is received

const app = express();



//redirects to chat index
app.get ('/', (request, response) => response.redirect("/chats")
);
// index route get to  /chats-returns all chats
app.get('/chats/', (request, response) => {
   response.render(
    'index.ejs',
    {
        allChats:chats
    }
    );
    });
    //show route get to / chats - returns a single chat
    app.get('/chats/index', (request, response) => {
        response.render('show.ejs',{
            chat: chats[req.params.index]
        });
    });
app.listen(3000, () =>{
    console.log('Express is listening for a request from the browser')
});