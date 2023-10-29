// function abrirNav(){
//     document.getElementById("menuOculto").style.width = "250px";
//     document.querySelector('.overlay').classList.add('active');
// }

// function fecharNav(){
//     document.getElementById("menuOculto").style.width = "0";
//     //document.getElementById("principal").style.marginLeft = "0";
// }

function abrirNav() {
    document.getElementById("menuOculto").style.width = "250px"; // Abre o menu
    document.querySelector(".logo-imagem").style.marginLeft = "250px"; // Desloca a imagem para a direita
    document.querySelector(".card-de-musica").style.marginLeft = "250px";
    document.querySelector(".botao").style.marginLeft = "250px";
}

function fecharNav() {
    document.getElementById("menuOculto").style.width = "0"; // Fecha o menu
    document.querySelector(".logo-imagem").style.marginLeft = "0"; // Retorna a imagem à posição original
    document.querySelector(".card-de-musica").style.marginLeft = "0"; 
    document.querySelector(".botao").style.marginLeft = "0"; 
}

document.getElementById("botaoMusica").onclick = function(){descobrirMusica()};

function descobrirMusica(){
    let select = document.getElementById("generos");
    let opcao = select.options[select.selectedIndex].value;

    const url = `https://spotify23.p.rapidapi.com/recommendations/?limit=1&seed_genres=${opcao}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cb1d92a533msh76584b65bc646a5p1f0b2bjsn992ffcfa2f58',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            let img = data['tracks']['0']['album']['images']['1']['url'];
            document.getElementById("img-album").setAttribute('src', img);
            document.getElementById("nomeArtista").innerHTML = data['tracks']['0']['artists']['0']['name'];
            document.getElementById("nomeMusica").innerHTML = data['tracks']['0']['name'];


        })
        .catch((erro) => {
            console.log("Erro: " + erro);
        })
}






