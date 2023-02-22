
/*tratando a resposta do json*/

function fetchJson(url){
  return fetch(url).then((resp)=>{
    return resp.json()
   
  })
  
}

/*passando a dados*/

function respSobre(){
   return fetchJson("http://127.0.0.1:5500/json/sobre.json")
}

