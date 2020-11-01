import wrap from './wrap';

const testing = new wrap("https://jsonplaceholder.typicode.com");

export const testingUse = async () => {
  return await testing.get('/photos');  
}

export const testingDetailUse = async (param = 1) => {
  return await testing.get('/posts/'+param);
}