import wrap from './wrap';

const testing = new wrap("https://jsonplaceholder.typicode.com");

const room = new wrap("https://pemilo.id/v1/room");
const anggota = new wrap("https://pemilo.id/v1/anggota");
const candidate = new wrap("https://pemilo.id/v1/candidate");

export const testingUse = async () => {
  return await testing.get('/photos');  
}

export const testingDetailUse = async (param = 1) => {
  return await testing.get('/posts/'+param);
}

export const changeStatusAnggota = async (obj1 = new Object(), obj2 = new Object()) => {
  const param = {
    find : obj1,
    update : obj2
  }
  const res = await anggota.put('/update', param);  
  return res;
}

export const checkRoomPass = async (param = new Object()) => {
  const obj = {find : param}    
  const res = await room.post('/find', obj);  
  return(res.res === null) ? false : true;  
}

export const findRoom = async (param = new String) => {
  const obj = {find : {codeRoom : param}}    
  const res = await room.post('/find', obj);  
  return res.res;
}

export const findAnggota = async (Room = new String(), Email = new String()) => {
  const obj = {
    find : {
      codeRoom : Room,
      codeTicket : Email,
      status : false
    }
  }
  const tmp =  await anggota.post('/find', obj);  
  return tmp;
}

export const findPositionCandidate = async (Room = new String()) => {
  const obj = {room__id:Room};  
  const tmp = await candidate.post('/getRoom', obj);  
  return tmp;
}

export const getCandidateWithPositionAndRoom = async (room = new String(), position = new String()) => {  
  const obj = {room__id : room,position : position}
  const tmp = await candidate.post("/getCandidate", obj);  
  return tmp;
}