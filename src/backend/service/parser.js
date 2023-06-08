import { JSDOM } from 'jsdom';
import axios from 'axios';
import fs from 'fs';

export default async (url) => {
  console.log(url); 

  const response = await axios.get(url);
  // console.log(response.data);
  fs.promises.writeFile('data.txt', response.data);
}