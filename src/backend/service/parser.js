import { JSDOM } from 'jsdom';
import axios from 'axios';

export default async (body) => {
  console.log(`Get ${body}`); 
  try {
    const response = await axios.get(body.formData.url);
    const dom = new JSDOM(response.data);
    const serializedDom = dom.serialize();
    return serializedDom;
  } catch (err) {
    throw new Error(err);
  }
}