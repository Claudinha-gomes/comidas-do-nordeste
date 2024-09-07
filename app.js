function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Imprime no console a seção obtida para fins de depuração (pode ser removido)
    //console.log(section);

    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    //se o campoPesquisa for uma string semnada
    if (!campoPesquisa ==""){
        section.innerHTML = "Nada foi encontrado. Você não digitou um ingrediemte."
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase() || tags.includes(campoPesquisa)
        // se titulo includes campoPesquisa
        //então, faça...
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>`;
        }
        
    }

    if (!resultados) {
        resultados = "<p></p>Nada foi encontrado</p>"

    }
            
    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
    }


