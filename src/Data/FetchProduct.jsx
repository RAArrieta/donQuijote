const FetchProduct = (productCode, products) => {

  const foundProduct = products.find(product => product.id === productCode)

  return foundProduct
};

export default FetchProduct;
