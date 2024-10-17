const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function visualizarInformaçõesGlobais(){
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_concetadas/1e9)
    const pessoasNoMundo= (dados.total_pessoas_mundo/1e9)
    const horas=parseInt(dados.tempo_medio)
    const porcentagemConectada=((pessoasConectadas/pessoasNoMundo)*100).toFixed(2);
    const paragrafo = document.createElement('p')
    paragrafo.classList.adda('graficos-container_texto')
    paragrafo.innerHTML = 'você sabia que o mundo tem ${dados.tota._pessoas_mundo} ${de pessoaas e que aproximadamente ${dados.total_pessoas_conectadas} e estao conectados em alguma rede social e passam em media ${dados.tempo_medio} horas conectadas.'
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)


}
visualizarInformaçõesGlobais()