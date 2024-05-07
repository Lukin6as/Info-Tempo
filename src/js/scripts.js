let chave = "e03d5b5937c8b1cfd9ab4c7257e84d99"

function colocarNaTela(dados) {
    console.log(dados)
    document.querySelector("#cidade").innerHTML = "Tempo em: " + dados.name
    document.querySelector("#temp").innerHTML = "Temperatura: " + Math.floor(dados.main.temp) + "°C"
    document.querySelector("#temp-max").innerHTML = "Temperatura max: " + Math.floor(dados.main.temp_max) + "°C"
    document.querySelector("#temp-min").innerHTML = "Temperatura min: " + Math.floor(dados.main.temp_min) + "°C"
    document.querySelector("#clima").innerHTML = "Clima: " + dados.weather[0].description
    document.querySelector("#clima-img").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon +".png"
    document.querySelector("#umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector("#velVento").innerHTML = "Velocidade vento: " + dados.wind.speed + "m/s"
}

async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=e03d5b5937c8b1cfd9ab4c7257e84d99&units=metric").then(resposta => resposta.json())

    colocarNaTela(dados)


}

function cliqueNoBotao() {
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}
