import docsearch from '@docsearch/js';

var searchPlaceholder = document.getElementById('search-placeholder');

if (searchPlaceholder !== null) {
  searchPlaceholder.className = 'd-none';
}

docsearch({
  container: '#docsearch',
  appId: 'JE37E4YOU3',
  indexName: 'netlify_abc167f5-8dee-48db-a7da-3c97c18849be_master_all',
  apiKey: '0b06babcb9d1b0aaadaa9e9af5be7bfe',
  debug: false,
});