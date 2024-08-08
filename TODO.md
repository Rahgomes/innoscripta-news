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

   - [x] Document the code
   - [x] Document how to run the project in Docker
   - [ ] Document design and architectural decisions

5. **Improvements**
   - [ ] Persist the preferred data in the localstorage
   - [ ] Separate part of the logic from the presentation UI
   - [ ] Apply more the DRY at the code
   - [ ] Adjust part of the filtering logic

## References

- [NewsAPI Documentation](https://newsapi.org/docs)
- [The Guardian API Documentation](https://open-platform.theguardian.com/documentation/)
- [New York Times API Documentation](https://developer.nytimes.com/apis)
