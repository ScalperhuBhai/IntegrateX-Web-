// src/scripts/search.js

import SearchWidget from 'search-widget';

const initSearchWidget = () => {
  // Initialize and configure the search widget
  const searchWidget = new SearchWidget({
    // Add configuration options for the widget
    // For example:
    // placeholder: 'Search...',
  });

  // Add event listeners or any other customization
  // For example:
  // searchWidget.on('searchPerformed', (query) => {
  //   console.log('Search performed with query:', query);
  // });

  // Append the widget to the document
  document.body.appendChild(searchWidget.render());
};

// Call the function to initialize the search widget when the DOM is ready
document.addEventListener('DOMContentLoaded', initSearchWidget);
