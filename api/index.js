import wrap from './wrap';

const testing = new wrap("https://jsonplaceholder.typicode.com");
const room = new wrap("http://34.101.95.115/v1/room");

export const testingUse = async () => {
  return await testing.get('/photos');  
}

export const testingDetailUse = async (param = 1) => {
  return await testing.get('/posts/'+param);
}

export const findRoom = async (param = new String()) => {
  const obj = {
    find : {
      codeRoom : param  
    }
  }
  return await room.get('/find', obj);
}