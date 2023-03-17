# Note Taker

This is a simple note-taking application that allows users to write and save notes. The application uses an Express.js back end and stores and retrieves note data from a JSON file.

**User Story**

As a small business owner, I want to be able to write and save notes so that I can organize my thoughts and keep track of tasks I need to complete.

**Acceptance Criteria**

Given a note-taking application:

* When I open the Note Taker, I am presented with a landing page with a link to a notes page.
* When I click on the link to the notes page, I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column.
* When I enter a new note title and the note’s text, a Save icon appears in the navigation at the top of the page.
* When I click on the Save icon, the new note I have entered is saved and appears in the left-hand column with the other existing notes.
* When I click on an existing note in the list in the left-hand column, that note appears in the right-hand column.
* When I click on the Write icon in the navigation at the top of the page, I am presented with empty fields to enter a new note title and the note’s text in the right-hand column.

**Mock-Up**

**Getting Started**

**Installation**

To install the required dependencies, run: npm install

** Usage**

To start the application, run: npm start

Then, open a web browser and go to  **http://localhost:3001** .

**Functionality**

**HTML Routes**

* GET **/notes** - returns the notes.html file.
* GET * - returns the index.html file.

**API Routes**

* GET **/api/notes** - reads the db.json file and returns all saved notes as JSON.
* POST **/api/notes** - receives a new note to save on the request body, adds it to the db.json file, and then returns the new note to the client.

**Bonus**

As a bonus, the application allows users to delete notes. To delete a note, click on the red trash can icon next to the note in the list.

**Technologies Used**

* Node.js
* Express.js

**Links**

* [Deployed Application](https://monicapong-notetaker.herokuapp.com/)
* [GitHub Repository](https://github.com/monicapong/noteTaker)

**Credits**

This application was created as a homework assignment for the University of Miami Coding Bootcamp.

**License**

[MIT](https://opensource.org/licenses/MIT)
