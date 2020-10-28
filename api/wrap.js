import axios from 'redaxios';

const wrapReturn = (sta = true, param = {}) => {
  return {status : sta, data : param.data};
}

export default function wrapAPI(param = null){
  this.baseURL = param;
  this.checkBaseURL = function(){
    return (this.baseURL === null) ? false : true;
  }
}

wrapAPI.prototype.get = async function(url = new String(), params = {}){
  try {
    if(this.checkBaseURL() === true){
      const joinURL = this.baseURL + url;
      const res = await axios.get(joinURL, { params });
      return wrapReturn(true, res);
    }
    else{    
      const res = await axios.get(url, { params });
      return wrapReturn(true, res);
    }  
  } catch (error) {
    return wrapReturn(false);
  }
}

wrapAPI.prototype.post = async function(url = new String(), body = {}){
  try {
    if(this.checkBaseURL() === true){
      const joinURL = this.baseURL + url;
      const res = await axios.post(joinURL, body);
      return wrapReturn(true, res);
    }
    else{    
      const res = await axios.post(url, body);
      return wrapReturn(true, res);
    }  
  } catch (error) {
    return wrapReturn(false);
  }
}

wrapAPI.prototype.put = async function(url = new String(), body = {}){
  try {
    if(this.checkBaseURL() === true){
      const joinURL = this.baseURL + url;
      const res = await axios.put(joinURL, body);
      return wrapReturn(true, res);
    }
    else{    
      const res = await axios.put(url, body);
      return wrapReturn(true, res);
    }  
  } catch (error) {
    return wrapReturn(false);
  }
}

wrapAPI.prototype.delete = async function(url = new String(), body = {}){
  try {
    if(this.checkBaseURL() === true){
      const joinURL = this.baseURL + url;
      const res = await axios.delete(joinURL, body);
      return wrapReturn(true, res);
    }
    else{    
      const res = await axios.delete(url, body);
      return wrapReturn(true, res);
    }  
  } catch (error) {
    return wrapReturn(false);
  }
}