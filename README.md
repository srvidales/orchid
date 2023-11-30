# UC Berkeley Fullstack Coding Bootcamp
## Group Three Project: Interactive MERN Stack Single-Page Application
The Wicked Whippersnappers Daycare Website is a collaborative MERN-stack single-page application built with React, designed to provide an intuitive and visually appealing interface tailored for parents and guardians at The Wicked Whippersnappers Daycare. Seamlessly integrating technologies like GraphQL and Apollo Client ensures efficient data management, while a responsive design powered by React Bootstrap enhances the overall user experience. With React Router facilitating enhanced routing, the Wicked Whippersnappers website simplifies navigation. The inclusion of JWT Decode adds an extra layer of security to user authentication, offering a modern, efficient, and feature-rich experience for members of the Wicked Whippersnappers community.

This project represents the culmination of knowledge and skills gained throughout the course, providing a user-focused platform that effectively addresses real-world challenges with data-driven solutions.

## Table of Contents 
- [User Story (Parent)](#user-story-parent)
- [Acceptance Criteria (Parent)](#acceptance-criteria-parent)
- [User Story (Employee)](#user-story-employee)
- [Acceptance Criteria (Employee)](#acceptance-criteria-employee)
- [Features](#features)
- [Usage](#usage)
- [Installation](#installation)
- [Authors](#authors)
- [Link to Deployed Application](#link-to-deployed-application)

## User Story (Parent)
AS A parent or guardian of a child at Wicked Whippersnappers Daycare,
I WANT the ability to easily navigate to the school's website,
SO THAT I can view information about the school, contact them with ease, and view my child's daily breakfast, snack, and lunch menu.

## Acceptance Criteria (Parent)
GIVEN I am a parent or guardian of a child at Wicked Whippersnappers Daycare,
WHEN I load the Wicked Whippersnappers website,
THEN I should see a user-friendly interface with a navigation menu that includes sections for Home, About, Menu, Contact Us, and Login.
WHEN I visit the Home page,
THEN I should see general information about the Daycare, including cost/tuition, healthy lessons, and upcoming events.
WHEN I visit the About page,
THEN I should see information relating to the Daycare, Values, Vision, and Mission.
WHEN I visit the Menu page,
THEN I should be able to view the daily menu and see what my children will be eating.
WHEN I visit the Contact page,
THEN I should be presented with an editable form that will email the daycare.
WHEN I visit the Login page,
THEN I should only be able to log in if I have valid credentials.

## User Story (Employee)
AS AN employee of Wicked Whippersnappers Daycare,
I WANT to be able to gain access to the website using valid user credentials,
SO THAT I can access the Menu Builder, allowing me to modify the students' daily food menu to educate parents and guardians.

## Acceptance Criteria (Employee)
GIVEN I am an employee of Wicked Whippersnappers Daycare,
WHEN I load the Wicked Whippersnappers website,
THEN I should see a user-friendly interface with a navigation menu that includes sections for Home, About, Menu, Contact Us, and Login.
WHEN I visit the Login page,
THEN I should only be able to log in if I have valid credentials or sign up if I don't.
WHEN I am logged in and navigate to the Menu page,
THEN I should be directed to the menu builder, where I can update the students' daily menu based on the days in the calendar.
WHEN I update the daily menu,
THEN the parent's Menu page would rerender with the changes I just made.
WHEN I am done modifying the Menu and I click the "Logout" button in the navbar,
THEN I should be securely logged out and directed to the Home page.

## Features
MERN-Stack Architecture:
- Utilizes MongoDB and Mongoose ODM for scalable and efficient data storage.
- Implements a GraphQL API with a Node.js and Express.js server for seamless data retrieval and manipulation.

React-Powered Front End:
- Employs React for a dynamic and responsive user interface.
- Ensures a polished UI with React Bootstrap, adhering to high-quality design standards.

Real-World Data Handling:
- Utilizes GraphQL queries and mutations for retrieving, adding, updating, and deleting data.
- Integrates real-world data to solve practical challenges faced by parents and guardians.

JWT Authentication:
- Implements JWT authentication to secure user interactions and protect sensitive information.

Responsive and Interactive Design:
- Ensures responsiveness across devices for a consistent user experience.
- Enhances interactivity by accepting and responding to user input effectively.

Secure Deployment:
- Deploys on Render, incorporating best practices for protecting sensitive API key information on the server.
- Adheres to quality coding standards, maintaining a clean repository with proper file structure and naming conventions.

## Usage
This project is intended for education purposes only.

## Installation
To run the project in your local machine:

1. Open Visual Studio Code on your computer or laptop.
2. Clone the git project: `git clone https://github.com/srvidales/orchid`
3. Navigate to the project directory: `cd orchid`
4. Open a new terminal in Visual Studio Code and install the necessary dependencies: `npm install`
5. Seed the database using: `npm run seed`
6. Start the application with the following command: `npm run develop`
7. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Authors
- Clarice Kwong: https://github.com/Clkwong3
- Kim Nguyen: https://github.com/charmingdarling
- Patrick McClelland: https://github.com/pmcclelland11
- Sergio Vidales Perez: https://github.com/srvidales

## Link to Deployed Application
https://best-app-ever-for-real-f31386fb5351.herokuapp.com/ 
