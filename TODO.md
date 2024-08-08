# TODO

## Overview

This project is a news aggregator that collects and displays articles from various sources in a clean and easy-to-read user interface. Users will be able to search and filter articles, as well as customize their news feed.

## Project Structure

1. **Initial Setup**

   - [x] Set up the React project
   - [x] Set up Docker for containerization

2. **Integration with News APIs**

   - [x] Select at least 3 data sources
     - [ ] NewsAPI
     - [ ] OpenNews
     - [ ] NewsCred
     - [x] The Guardian
     - [x] New York Times
     - [ ] BBC News
     - [x] NewsAPI.org
   - [x] Set up API calls for selected sources

3. **Core Features**

   - [x] Implement keyword search
   - [x] Implement article filtering by date, category, and source
   - [x] Implement personalized news feed
     - [x] Preferred sources selection
     - [ ] Preferred categories selection
     - [ ] Preferred authors selection

4. **Documentation**

   - [ ] Document the code
   - [ ] Document how to run the project in Docker
   - [ ] Document design and architectural decisions

5. **Improvements**
   - [ ] Persist the preferred data in the localstorage

## References

- [NewsAPI Documentation](https://newsapi.org/docs)
- [The Guardian API Documentation](https://open-platform.theguardian.com/documentation/)
- [New York Times API Documentation](https://developer.nytimes.com/apis)

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
