# City Explorer

**Author**: Rhett Chase

**Version**: 1.0.0 
<!-- (increment the patch/fix version number if you make more commits past your first submission) -->

## Overview

The City Explorer application uses a form to capture user input of `city` to return the city's latitude, longitude, and a map of the city. The app also shares information on any error if the application is unable to render a result. The user can use this message if something goes wrong so they know they need to make any changes or try again in a different manner.

![Data Flow](src/assets/data-flow.png)

## Getting Started

Run the following dependencies

- procure a `LocationIQ` Procure a LocationIQ API Access Tokens. View, then Update the existing API token
- Create an `.env` file: Your API key goes here for local development. Make sure this file is in your `.gitignore`.
- Add your deployed Netlify app url as an HTTP Referrer to your API token settings.
- Also add `localhost` while testing from your development environment.
- Ensure dependencies are installed by running them with npm commands: Axios and Bootstrap

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

### Technologies

- React.JS
- Bootstrap
- Javascript
- CSS
- HTML

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

12-04-2023 9:36pm - The application now features a fully operational React.js frontend, integrating with the LocationIQ API to retrieve location data. A specific functionality has been implemented to handle requests for the 'location' resource and renders latitude, longitude and map based on a city input

## Credit and Collaborations

- chatGPT
- React Dev Docs
- LocationIQ API

## Time Estimate

### Locations Latitude/Longitude Feature

Estimate of time needed to complete: 1 hr
Start time: 2 pm
Finish time: 3:30 pm
Actual time needed to complete: 1.5 hrs

### Map Feature

Estimate of time needed to complete: 1 hr
Start time: 4 pm
Finish time: 5 pm
Actual time needed to complete: 1 hr

### Error Feature

Estimate of time needed to complete: 45 min
Start time: 5:10 pm
Finish time: 6:10 pm
Actual time needed to complete: 1 hr