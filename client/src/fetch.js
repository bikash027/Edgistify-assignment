import axios from 'axios';

function postDataAxios(url,data){
  return axios.post(url,data,{
    withCredentials: true
    // headers:{
    //   'Content-Type': 'multipart/form-data'
    // }
  })
  .then((response)=>{
    return response.data;
  })
}

function getDataAxios(url){
  return axios.get(url,{
    withCredentials: true
  })
  .then((response)=>{
    return response.data;
  })
}


export {postDataAxios,getDataAxios};