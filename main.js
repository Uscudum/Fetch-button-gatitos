const URL = 'https://api.thecatapi.com/v1/images/search';
const button = document.getElementById("click");

async function clic(){ 

 const res = await fetch(URL)
 const respuesta = await res.json()
 const img = document.querySelector('img');
 img.src = respuesta[0].url;

}

button.onclick = clic;
clic();


