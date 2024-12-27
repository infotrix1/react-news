# News Application

The News Application is a web app that provides users with the latest news from various sources. It utilizes React for the front end and Docker to package the application for easy deployment. The app fetches news data from a API and displays articles, headlines, It features include news fetch, filtering by categories, source and authors.

## Features
- Display the latest news headlines
- Mobile-responsive layout
- filtering of news.
- search of latest news
- Easy to deploy using Docker

## Technologies Used
- **React** - A JavaScript library for building user interfaces.
- **Axios** - Promise-based HTTP client for making requests to the news API.
- **Tailwind** - Styling for the front-end.
- **Docker** - Containerization platform for easy deployment.

## Getting Started

### Prerequisites
To run this application locally or in Docker, ensure that you have the following installed:
- **Node.js**: Version 16 or higher
- **npm** (Node Package Manager) or **yarn**: For managing dependencies
- **Docker**: For containerizing the app

You can install **Node.js** and **npm** from [nodejs.org](https://nodejs.org/). For **Docker**, you can follow the installation guide on [docker.com](https://www.docker.com/get-started).

### Running Locally
To run the application on your local machine, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/infotrix1/react-news.git
   cd react-news
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

   or if you're using yarn:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   This will run the application on `http://localhost:3000`.

### Running with Docker
To run the application using Docker, follow these steps:

1. Build the Docker image:

   ```bash
   docker compose up --build  .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 8080:8080 react-news
   ```

   This will start the application and map it to `http://localhost:8080` on your machine.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
