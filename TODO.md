# TODO

## Overview

This project is a news aggregator that collects and displays articles from various sources in a clean and easy-to-read user interface. Users will be able to search and filter articles, as well as customize their news feed.

## Project Structure

1. **Initial Setup**

   - [x] Set up the React project
   - [ ] Set up Docker for containerization

2. **Integration with News APIs**

   - [x] Select at least 3 data sources
     - [ ] NewsAPI
     - [ ] OpenNews
     - [ ] NewsCred
     - [x] The Guardian
     - [x] New York Times
     - [ ] BBC News
     - [x] NewsAPI.org
   - [ ] Set up API calls for selected sources

3. **Core Features**

   - [ ] Implement keyword search
   - [ ] Implement article filtering by date, category, and source
   - [ ] Implement personalized news feed
     - [ ] Preferred sources selection
     - [ ] Preferred categories selection
     - [ ] Preferred authors selection

4. **User Interface**

   - [x] Mobile-responsive design
   - [ ] Clean and easy-to-read interface
   - [x] React components
     - [x] Header
     - [ ] Search and filter bar
     - [x] Article list
     - [x] Individual article components
     - [ ] Personalized feed settings

5. **Best Development Practices**

   - [ ] Follow DRY (Don't Repeat Yourself) principles
   - [ ] Follow KISS (Keep It Simple, Stupid) principles
   - [ ] Follow SOLID principles
     - [ ] Single responsibility
     - [ ] Open-closed
     - [ ] Liskov substitution
     - [ ] Interface segregation
     - [ ] Dependency inversion

6. **Documentation**
   - [ ] Document the code
   - [ ] Document how to run the project in Docker
   - [ ] Document design and architectural decisions

## Task Breakdown

### Initial Setup

- **Set up the React project**
  - [x] Initialize the project with Vite
  - [x] Set up folder structure
- **Set up Docker for containerization**
  - [ ] Create a Dockerfile
  - [ ] Set up docker-compose

### Integration with News APIs

- **Select data sources**
  - [x] Decide which 3 APIs to use
- **Set up API calls for selected sources**
  - [ ] Implement HTTP calls to the APIs
  - [ ] Manage API keys securely

### Core Features

- **Implement keyword search**
  - [ ] Develop the search functionality
- **Implement article filtering**
  - [ ] Develop filtering by date, category, and source
- **Implement personalized news feed**
  - [ ] Develop feed personalization

### User Interface

- **Responsive design**
  - [ ] Test and adjust for mobile devices
- **React components**
  - [ ] Develop each necessary component

### Best Development Practices

- **Follow development principles**
  - [ ] Review code to ensure compliance

### Documentation

- **Code documentation**
  - [ ] Add comments and explanations
- **Docker documentation**
  - [ ] Clear instructions for running the project

## Timeline

- **Week 1**
  - Initial project setup
  - Selection and configuration of APIs
- **Week 2**
  - Implementation of search and filtering
  - Initial development of user interface
- **Week 3**
  - Completion of user interface
  - Implementation of personalized feed
- **Week 4**
  - Testing, review, and documentation
  - Preparation for delivery

## References

- [NewsAPI Documentation](https://newsapi.org/docs)
- [OpenNews Documentation](https://opennews.com)
- [NewsCred Documentation](https://newscred.com)
- [The Guardian API Documentation](https://open-platform.theguardian.com/documentation/)
- [New York Times API Documentation](https://developer.nytimes.com/apis)
- [BBC News API Documentation](https://www.bbc.co.uk/developer/portal)
- [Docker Documentation](https://docs.docker.com)

## Extra

incluir uma estrela que seria similar a um favoritos, tentar implementar igual ao portfolio da vivo
nessa implementação, jogar em um estado do redux, porém o redux pegar tambem do localstorage/session para que mesmo que dê ctrl + f5 fique salvo, fazer uma página de favoritos
fazer o search com o botão, ao clicar ele manda pra rota de search e mostra a palavra pesquisada com os artigos, similar ao wordpress

https://newsapi.org/register/success
API Key: f01b596f50554730946205bf49502ae6

https://developer.nytimes.com/my-apps
API Key: F7paSKHxiKstJxVoGIuS57qQR0Lz6An6
Secret: IMy2GQLiBM53Rdx0

https://open-platform.theguardian.com/documentation/
API Key: b3c337a5-ad72-4dc5-97e8-51c0814aa782
