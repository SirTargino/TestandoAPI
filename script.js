fetch("https://pokeapi.co/api/v2/pokemon-form/359/")
.then((res) => res.json())
.then(data => {
    console.log(data.sprites.back_default)
    inserirImagem(data.sprites.back_default)
})
.catch(error => console.log(error))

var btn = document.getElementById("btn")

btn.addEventListener("click", () =>{
    console.log()
})

function inserirImagem(url){
    let divsao = document.getElementById("divsao")
    let novaImagem = document.createElement("img")
    novaImagem.src = url
    divsao.appendChild(novaImagem)
}