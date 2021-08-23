
const API_PATHS = {
  product: `https://${process.env["REACT_APP_BASE_AWS"]}.execute-api.eu-west-1.amazonaws.com/dev/products`,
  order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  import: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  bff: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  cart: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
};

export default API_PATHS;
