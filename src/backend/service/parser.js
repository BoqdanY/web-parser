import { JSDOM } from 'jsdom';
import axios from 'axios';

export default async (url) => {
  console.log(`Get ${url}`); 
  try {
    const response = await axios.get(url);
    const dom = new JSDOM(response.data);
    const serializedDom = dom.serialize();
    return serializedDom;
  } catch (err) {
    throw new Error(err);
  }
}