const urlParams = new URLSearchParams(window.location.search);
const objectID = urlParams.get('objectID');

const indexName = 'ecommerce_with_settings';
const client = algoliasearch('JE37E4YOU3', '0b06babcb9d1b0aaadaa9e9af5be7bfe');
const index = client.initIndex(indexName);

index.search(objectID).then(({ hits }) => {
  document.getElementById('product-details').innerHTML = `
    <img src="${hits[0].image}" />
    <div class="product-name">${hits[0].name}</div>
    <div class="hit-price">Price $${hits[0].price}</div>
    <div class="hit-description">${hits[0].description}</div>
  `;
});

document.getElementById('add-to-cart').addEventListener('click', () => {
  aa('convertedObjectIDsAfterSearch', {
    index: indexName,
    eventName: 'Por fin funciona',
    userToken: 'user-1',
    objectIDs: [objectID],
    queryID: urlParams.get('queryID'),
  });
});