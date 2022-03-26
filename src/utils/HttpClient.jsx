const API = process.env.REACT_APP_API;

const apiKey = process.env.REACT_APP_API_TOKEN;

export const get=(path)=>{
    return fetch(API+path,{
            headers:{
                Authorization:apiKey,
                "Content-type":"application/json;Charset=utf-8",
            }
        })
        .then(result =>result.json())
}