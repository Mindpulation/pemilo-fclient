export default function bulkFunction(){
  this.listFunc = [];
}

bulkFunction.prototype.add = function(func = new Function(), param = {}){
  const tmp = {func, param};
  this.listFunc.push(tmp);
}

bulkFunction.prototype.run = async function(){  
  const res = await Promise.all(
    this.listFunc.map((e)=>{
      e.func(e.param);
    })
  );
  return res;
}