import { JSDOM } from 'jsdom';
import axios from 'axios';

const parseByType = {
  gHTML: async (body) => {
    const response = await doQuery(body.formData.url);
    const dom = convertToDom(response.data);
    return dom.serialize(); 
  },
  static: async (body) => {
    const response = await doQuery(body.formData.url);
    const dom = convertToDom(response.data);
    const elements = dom.window.document.querySelectorAll(body.formData.element);
    if (elements.length === 0) throw new Error('There is not such class, id or element');
    let res = '';
    elements.forEach(elem => res += `${body.formData.tagName === '-' ? elem.textContent : elem[body.formData.tagName]}\n`);
    return res;
  },
  dynamicPages: async (body) => {
    console.log(body.formData.range);
    const urlsArray = body.formData.range.split(body.formData.range.includes('\n') ? '\n' : ' ');
    let res = '';
    for (const url of urlsArray) {
      console.log(`${body.formData.url}${url}`);
      const response = await doQuery(`${body.formData.url}${url}`);
      const dom = convertToDom(response.data);
      const elements = dom.window.document.querySelectorAll(body.formData.element);
      if (elements.length === 0) throw new Error('There is not such class, id or element');
      elements.forEach(elem => res += `${body.formData.tagName === '-' ? elem.textContent : elem[body.formData.tagName]}\n`);
    }
    return res;
  }
};

const doQuery = async (url) => {
  try {
    return await axios.get(url);
  } catch (err) {
    throw new Error('Invalid Url');
  }
};
const convertToDom = (data) => new JSDOM(data);

export default async (body) => {
  console.log(body);
  try {
    const res = await parseByType[body.parsingType](body);
    return res;
  } catch (err) {
    throw new Error(err.message);
  }
}

