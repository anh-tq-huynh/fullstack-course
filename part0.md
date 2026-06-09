```mermaid
sequenceDiagram
  participant browser
  participant server

  browser ->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
  activate server
  server -->> browser: New note found, save the new note and redirect to /exampleapp/notes
  deactivate server

  browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/notes
  activate server
  server -->> browser: fetch the HTML file
  deactivate server

  browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  activate server
  server -->> browser: fetch the CSS file (main.css)
  deactivate server

  browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
  activate server
  server -->> browser: fetch the JavaScript file (main.js)
  deactivate server

  browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate server
  server -->> browser: fetch the data file to display on the website
  deactivate server
