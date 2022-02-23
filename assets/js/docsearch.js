import docsearch from '@docsearch/js';

var searchPlaceholder = document.getElementById('search-placeholder');

if (searchPlaceholder !== null) {
  searchPlaceholder.className = 'd-none';
}

docsearch({
  container: '#docsearch',
  appId: 'ERLE2DLLLG',
  indexName: 'caefis.netlify.app',
  apiKey: '89f91b80c77205fbd14f6c09e03bc816',
  debug: false,
});