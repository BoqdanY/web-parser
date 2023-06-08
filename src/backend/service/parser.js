import { JSDOM } from 'jsdom';
import axios from 'axios';
import fs from 'fs';

export default async (url) => {
  console.log(`Get ${url}`); 
  try {
    const response = await axios.get(url);
    const dom = new JSDOM(response.data);
    const serializedDom = dom.serialize();
    await fs.promises.writeFile('data.txt', serializedDom);
    return serializedDom;
  } catch (err) {
    throw new Error(err);
  }
}