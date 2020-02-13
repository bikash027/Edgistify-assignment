import axios from 'axios';

function postData(url = '', data = {}) {
    // Default options are marked with *
    return fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        // 'Accept': '*/*',
        // 'Content-Type': 'multipart/form-data'
        'Content-Type': undefined
        // 'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    .then(response=>{
      return response.json();
    })
    // return await response.json(); // parses JSON response into native JavaScript objects
}

function getData(url=''){
    return fetch(url)
    .then((response) => {
        // console.log(response);
        return response.json();
    })
    // .then((data)=>{
    //   if(data.error)
    //     throw new Error(data.error)
    //   else
    //     return data;
    // })
    // .then((myJson) => {
    //     console.log(myJson);
    // });
}

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


export {postData,getData,postDataAxios,getDataAxios};