import axios from 'redaxios';

const wrapReturn = (sta = true, param = {}) => {
  return {status : sta, data : param.data};
}

export const testingUse = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/post");
    return wrapReturn(true, res);
  } catch (error) {
    return wrapReturn(false);
  }
}