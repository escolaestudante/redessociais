const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function visualizarInformaçõesGlobais(){
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.adda('graficos-container_texto')
    paragrafo.innerHTML = 'você sabia que o mundo tem ${dados.tota._pessoas_mundo} ${de pessoaas e que aproximadamente ${dados.total_pessoas_conectadas} e estao conectados em alguma rede social e passam em media ${dados.tempo_medio} horas conectadas.'

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)


}
visualizarInformaçõesGlobais()