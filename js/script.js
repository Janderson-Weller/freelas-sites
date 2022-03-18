// Função para esconder o menu superior
function escondeMenu () {
    
    let p1 = document.documentElement;
    let serv = document.getElementById('servicos-id').style.top;
    console.log("Scrool top - " + serv);

    window.addEventListener('scroll', () => {
        
        // console.log("Top - " + p1.scrollTop);  testando se a função está pegando os dados corretos
        // console.log("Altura - " + h.scrollHeight);
        // console.log("Largura - " + w.scrollWidth);
        // if(p1.scrollTop > 100) {

        if(parseInt(p1.scrollTop) >  130) { // Oculta o menu central ao rola a barra
            // document.getElementById('header-ocultar').style.display = 'none'; // Muda o display para none. 
            document.getElementById('header-mostrar').style.position = 'fixed'; // Muda o display para none. 
            // document.getElementById('header-mostrar').style.top = 0; // Muda a posição para fixa.
            document.getElementById('header-mostrar').style.display = 'flex';
            document.getElementById('header-mostrar').style.width = '100%';

        }else if (parseInt(p1.scrollTop) < 37) {
            document.getElementById('header-mostrar').style.display = 'none';
            document.getElementById('header-mostrar').style.width = '100%';
        }
    })
   
}


// // Função passa slide direto no html 

// let numeroSlide = 1;
// window.load = slide(numeroSlide);

// function slide (n) {
//     document.getElementById('slide-conteudo').style.backgroundImage = "url('./img/"+ n + ".jpg')";
//     document.getElementById('slide-conteudo').style.backgroundSize = 'cover';
// }

// function ant() {
//     if(numeroSlide > 1) {
//         numeroSlide--;
//         slide(numeroSlide);
//         console.log(numeroSlide);
//     }
//     else {
//         numeroSlide = 3;
//         slide(numeroSlide);
//         console.log(numeroSlide);
//     }
// }

// function pos() {
//     if(numeroSlide < 3) {
//         numeroSlide++;
//         slide(numeroSlide);
//     }
//     else {
//         numeroSlide = 1;
//         slide(numeroSlide);
//     }
// }

escondeMenu();
