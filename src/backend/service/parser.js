import { JSDOM } from 'jsdom';
import axios from 'axios';

const cachedUrl = {};

const parseByType = {
  gHTML: async (body) => {
    const dom = await getDom(body.formData.url);
    return dom.serialize(); 
  },
  static: async (body) => {
    const dom = await getDom(body.formData.url);
    const elements = dom.window.document.querySelectorAll(body.formData.element);
    if (elements.length === 0) throw new Error('There is not such class, id or element');
    let res = '';
    elements.forEach(elem => res += `${body.formData.tagName === '-' ? elem.textContent : elem[body.formData.tagName]}\n`);
    return res;
  },
  dynamicPages: async (body) => {
    const urlsArray = body.formData.range.split(body.formData.range.includes('\n') ? '\n' : ' ');
    let res = '';
    for (const url of urlsArray) {
      console.log(`${body.formData.url}${url}`);
      const dom = await getDom(`${body.formData.url}${url}`);
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

const getDom = async (url) => {
  if (cachedUrl[url]) {
    console.log('From cache');
    const obj = cachedUrl[url];
    obj.used++;
    return obj.data;
  } else {
    const response = await doQuery(url);
    const dom = convertToDom(response.data);
    cache(url, dom);
    return dom;
  }
}

const cache = (url, data) => {
  if (!cachedUrl.hasOwnProperty(url)) {
    cachedUrl[url] = {
      data,
      used: 1
    };
    clearCache();
  }
};

const clearCache = () => {
  if (Object.keys(cachedUrl).length > 10) {
    let curUrl;
    for (const key in cachedUrl) {
      if (!curUrl || cachedUrl[key].used < cachedUrl[curUrl].used) {
        curUrl = key;
      }
    }
    delete cachedUrl[curUrl];
  }
};

export default async (body) => {
  console.log(body);
  try {
    const res = await parseByType[body.parsingType](body);
    return res;
  } catch (err) {
    throw new Error(err.message);
  }
}

