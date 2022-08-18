const URL = 'https://api.thecatapi.com/v1/images/search';
const button = document.getElementById("click");

function clic(){ 

    fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img');
        img.src = data[0].url;
    })
}

button.onclick = clic;
clic();


