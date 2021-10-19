export const getData = () => {
  return JSON.parse(localStorage.getItem('object'));
};

export const setData = (data) => {
  return localStorage.setItem('object', JSON.stringify(data));
};
