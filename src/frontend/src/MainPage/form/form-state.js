const formState = {
  default: 'your page will be here',
  loading: 'Loading...',
  errEmpty: (fieldName) => `Fill ${fieldName} input`,
  errNaN: (fieldName) => `${fieldName} input must be a number`
};

export default formState