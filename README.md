# Verse app
- testing

# Phase 2 Project: Bible Verse Keeper

The purpose of this application is to help users keep tack of Bible verses that are meaningful to them. This app is designed for 1 user. Users can utilize the form on the "home page" to add a new verse their list. Verses are separated between those located in the Old Testament of the Bible and those located in the New Testament of the Bible. A user can view their saved verses in either the "Old Testament" page, or the "New Testament" page.

This project stores verses in a local db.json file, and makes GET and POST requests to this file.

# How To Get This Project Running
Before you do anything with this project (including view it), you will need to start the JSON server on your computer. Here are the steps:
1. Open your terminal.
2. Type: json-server --watch db.json
3. When the server is running you can open the project. To view this project in your browser, open a new terminal and type: open index.html

# Features
This project meets several requirements for my Phase-2 Project at Flatiron's School. Some of those requirements included having only 1 index.html file, 5 REACT Components, 3 client-side routes, a Navbar to navigate between the routes, a JSON-server with a RESTful API, and a CSS file.

A POST request was used to add new a new Bible verse to the array of "saved" Bible verses.

Components include:
//INCLUDE

Routes include:
//INCLUDE

//Edit  Below

At the top of this page a user can toggle between light and dark mode. This will also change the page's text so it is white (dark mode) or black (light mode).

![Toggle Demo](ReadMeGifs/ToggleGif.gif)




The race event buttons have mouseover and mouseout event listeners that change the color of the button, and the button's text color, while the mouse is over the card.

![Mouseover Demo](ReadMeGifs/MouseOverGif.gif)




When a race event button is clicked, the athletes associated with that event will appear on the screen.

![Race Event Buttons Demo](ReadMeGifs/ButtonListenerGif.gif)




If a user is does not want to see one of the athletes, there is a "close" button on the div with the athlete's information. Clicking this button will remove the athlete's information from the page.

![Close Button Demo](ReadMeGifs/CloseButton.gif)

# Credits


CSS & HTML TOGGLE SWITCH STYLING
I learned how to create a toggle switch using w3schools.com. My finished toggle closely resembles their example and CSS/HTML code:
https://www.w3schools.com/howto/howto_css_switch.asp