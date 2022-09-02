//Selecting Needed Data with Filter

var products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' },
]; // This is array of object

// Show only fruit
var filteredProducts = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]); //.push is the samme like .add, legger under når den går gjennom lista
  }
}
filteredProducts;

// Show only vegetable
products.filter(function (product) {
  return product.type === 'vegetable'; // er det samme som å skrive i de to linjer
  //   //if(product.type === 'vegetable){
  //       return true;
  //   }
});
