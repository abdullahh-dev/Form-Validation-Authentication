import { handleApiCall } from '../utils/helper';
import axios from 'axios';
const BASE_URL = 'http://localhost:8080';
export const createUser = async (data) => {
  const res = await handleApiCall(() => {
    console.log(data);
    axios.post(`${BASE_URL}/api/users/createUser`, data);
  });
  console.log(res);
  return res;
};

// abdullahaha101@gmail.com
