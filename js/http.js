/*tratando a resposta do json*/

function fetchJson(url) {
  return fetch(url).then((resp) => {
    return resp.json();
  });
}

/*passando os dados*/

function respSobre() {
  return fetchJson("json/sobre.json");
}

function respAnimais() {
  return fetchJson("json/animais.json");
}
