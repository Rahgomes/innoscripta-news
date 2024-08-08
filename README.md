# Innoscripta News

Innoscripta News is a modern, responsive news aggregator application built with React, Redux, and TypeScript. The application allows users to search for news articles from multiple sources and filter them by keywords, categories, dates, and sources. The project is also containerized using Docker for easy deployment.

## Features

- Real-time News Fetching: Fetches news articles from multiple sources including The New York Times, NewsAPI, and The Guardian.

- Advanced Filtering: Users can filter articles by keywords, categories, date ranges, and news sources.

- Favorites Management: Users can add or remove articles from their favorites list.

- Responsive Design: Fully responsive and mobile-friendly interface built with Tailwind CSS.

- TypeScript Support: Ensures type safety and code quality.

## Prerequisites

- Node.js and npm installed.
- Docker installed (Docker desktop).

## Installation

1. **Clone the repository**

git clone https://github.com/Rahgomes/innoscripta-news.git
cd innoscripta-news

2. **Install dependencies**

npm install

3. **Create a .env file in the root directory and add your API keys**

VITE_REACT_NEWS_API_ORG=your_newsapi_key
VITE_REACT_NEWS_API_ORG_SECRET=your_newsapi_secret
VITE_REACT_NEW_YORK_TIMES=your_nyt_api_key
VITE_REACT_NEW_YORK_TIMES_SECRET=your_nyt_secret
VITE_REACT_THE_GUARDIAN=your_guardian_api_key
VITE_REACT_THE_GUARDIAN_SECRET=your_guardian_secret

Obs: For now, the URL and KEY parameters are in the code to an easy executing

4. **Start the development server**

npm run dev

5. **Build the project for production**

npm run build

## Docker Setup

To containerize and deploy the application using Docker, follow these steps:

1. **Build the Docker image**

docker build -t dockerinnoscriptanews .

2. **un the Docker container**

docker run -p 80:80 dockerinnoscriptanews

Then: The application will be accessible at http://localhost on your browser.

## Available Scripts

In the project directory, you can run:

- npm run dev: Runs the app in development mode.
- npm run build: Builds the app for production.
- npm run lint: Lints the code using ESLint.
- npm run preview: Previews the production build locally.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Redux: State management library for React.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Vite: A fast front-end build tool.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- Docker: A platform for developing, shipping, and running applications in containers.
