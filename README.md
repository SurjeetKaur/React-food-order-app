# React-food-order-app
React app


Getting Started

-------------------------
Prerequisites
Node.js installed on machine
A code editor (Visual Studio code)

Dependencies:
npm install react react-dom parcel

"react"
"react-dom"

 devDependencies:
 "parcel" 
 "process"
--------------------------------
Installation:

1. Clone the repository: git clone https://github.com/your-username/your-repo-name.git

2. Install dependencies: npm install 

3. Start the development server: npm start

4. Open your web browser and navigate to http://localhost:1234 to view the application (may be different localhost)

--------------------------------
### Project Structure

React-food-order-app/
components/
Header.js
Body.js
Footer.js
...
index.html
index.css
...
App.js (entry point of the application)
...
utils/
ImagesConstants.js
...
node_modules/
 react
 react-dom
 parcel
...
dist/
.parcel-cache/
...
package.json
package-lock.json
README.md
.gitignore

Here's a brief explanation of each folder/file:

components/: This folder contains reusable React components, such as Header, Body, and Footer. Each component has its own JavaScript file (e.g., Header.js) 
index.html: This is the main HTML file that serves as the entry point for the application.

index.css: This is the main CSS file that styles the application. 

App.js: This is the entry point of the application, where the React components are rendered. 

utils/: This folder contains constants  which are URLs of images can be used throughout the application. For example, ImagesConstants.js

App.js: This is the entry point of the application, where the React app is rendered to the DOM.

node_modules/: This folder contains the installed dependencies, including React, ReactDOM, and Parcel.

package.json: This file contains metadata about the project, including dependencies and scripts.

package-lock.json: This file is used to lock the dependencies to specific versions.

README.md: This file contains information about the project, such as installation instructions and usage guidelines.


-------------------------
Technologies Used

React: A JavaScript library for building user interfaces
ReactDOM: A companion library to React for rendering components to the DOM


===== 2 types of components export

1. default export: can export only one component
eg:
 const Title()=>{
    return <h1>Hello World</h1>;
    }

    export default Title; // default export

import Title from "./components/Title";

2. named export :can export multiple components

eg:
export const Title = () => {
    return <h1>title</h1>;
    };

import { Title } from "./components/Title";

----------------------
#props : properties

#Hooks: utility React functions
Hooks
React has utility functions -> normal js functions -> facebook developers
these functions has some superpowers

useState - 80%

useEffect - 15%

Other - 5%

let [restaurants, setRestaurants] = useState([])

state variable

special fun - through which i can modify / reassign my state variable

this is necessary because if you dont do this and assign your variable then it will be a normal one and it does not have any effect on the UI / DOM
setRestaurants(newVal) => your component rerendered with new value that is why UI is rendering again




======== PLAN for food-order-app project ========

Header
Logo
Nav items
Home
Contact us
About us
Sign In

------- 
Body

Search bar & Filters
Restaurant Cards

---------
Footer

Copyrights
Contact us
Links & Addresses
