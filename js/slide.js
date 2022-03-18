// Seleciona a quantidade de divs que contém a classe 'botão slide'

const pegaBotao = document.querySelectorAll('.botaoSlide');

// Percorre a lista
pegaBotao.forEach(botaoSlide => {

    // Espera o usuário clicar
    botaoSlide.addEventListener('click', () => {

        // Seleciona todo a div que tem a classe 'divMostrar', ela que deverá ser mostrada após o clique do botão
        const slideVisivel = document.querySelector('.divMostrar');
        
        // Faz o mesmo processo anterior para a div que contém a classe 'mostra', div que contém o botão onde o usuário clicou 
        const mostrar = document.querySelector('.mostra');

        // Remove as classe de ambas as divs selecionadas
        slideVisivel.classList.remove('divMostrar');
        mostrar.classList.remove('mostra');

        // Pega o valor do atributo id do botão selecionado
        const visivel = botaoSlide.attributes.id.value;

        /* Forma-se a string 'mostrarSlide' que é o atributo de um id, pertence à div que contém a divMostrar
         que foi removida. Esse id identifica qual a div que queremos esconder  */
        const idMostrar = document.getElementById('mostrar' + visivel);

        // Pega a string formada, no caso 'mostrarSlide' e insere o atributo id
        const mostrarBotao = document.getElementById(visivel);
        
        // Insere as novas classes formadas no botão elemento, após a escolha do botão
        idMostrar.classList.add('divMostrar');
        
        // Insere a nova id no elemento que contém a divMostrar
        mostrarBotao.classList.add('mostra');

    }) 

}) 
