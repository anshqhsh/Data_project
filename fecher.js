import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const fetcher = async (method, url) => {
  const res = await axios[method](url);
  return res.data;
};

export default fetcher;
