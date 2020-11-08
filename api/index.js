import wrap from './wrap';

const testing = new wrap("https://jsonplaceholder.typicode.com");

const room = new wrap("http://34.101.95.115/v1/room");
const anggota = new wrap("http://34.101.95.115/v1/anggota");
const candidate = new wrap("http://34.101.95.115/v1/candidate");

export const testingUse = async () => {
  return await testing.get('/photos');  
}

export const testingDetailUse = async (param = 1) => {
  return await testing.get('/posts/'+param);
}

export const findRoom = async (param = new Object) => {
  const obj = {find : {param}}
  return await room.post('/find', obj);
}

export const findAnggota = async (Room = new String(), Email = new String()) => {
  const obj = {
    find : {
      codeRoom : Room,
      email : Email,
      status : true
    }
  }
  return await room.post('/find', obj);
}

export const findPositionCandidate = async (Room = new String()) => {
  const obj = {room__id:Room};
  return await room.post('/getRoom', obj);
}