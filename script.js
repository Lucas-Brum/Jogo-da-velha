function carregar ()
{   
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // GETS COM OS ID DO HTML
    var img = [window.document.getElementById('img00branco'),
               window.document.getElementById('img01branco'),
               window.document.getElementById('img02branco'),
               window.document.getElementById('img10branco'),
               window.document.getElementById('img11branco'),
               window.document.getElementById('img12branco'), 
               window.document.getElementById('img20branco'),
               window.document.getElementById('img21branco'),
               window.document.getElementById('img22branco')]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //get do reset
    var reset = window.document.getElementById('reset')
    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // A matriz marca aonde ainda não foi clicado com o valor da posição para guiar o JS

    var Matriz =[
                    ["00","01","02"],
                    ["10","11","12"],
                    ["20","21","22"]
                ]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var p1  = prompt('Nome do player 1:') //Armazena o Nome do player 1
    var p2  = prompt('Nome do player 2:') //Armazena o nome do player 2  
    var player1 = 0 //Armazena a pontuação do player 1
    var player2 = 0 //Armazena a pontuação do player 2
    var win = 0//Armazena dado da vitoria
    var vez = 0//Armazena o dado da vez de quem joga


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // escutam os elementos do html e chama a função dele
    img[0].addEventListener('click', clicar00)
    img[1].addEventListener('click', clicar01)
    img[2].addEventListener('click', clicar02)
    img[3].addEventListener('click', clicar10)
    img[4].addEventListener('click', clicar11)
    img[5].addEventListener('click', clicar12)
    img[6].addEventListener('click', clicar20)
    img[7].addEventListener('click', clicar21)
    img[8].addEventListener('click', clicar22)
    reset.addEventListener('click', reinicia)
   // Coloda nome do player iniciante na tela
   player.innerHTML = "Vez de "+p1 
    
    
   

    // Funções que descrevem a ação ao clicar em cada uma das posições do jogo
    function clicar00()
    {   if(Matriz[0][0]==="00"&& win ==0)
        {
            if (vez % 2 == 0) // se for a vez do player 1
            {
                vez = vez+1
                img[0].classList.add('d-none')
                window.document.getElementById('img00xis').classList.remove('d-none')
                window.document.getElementById('img00branco').classList.remove('d-block')
                window.document.getElementById('img00xis').classList.add('d-block')
                player.innerHTML = "Vez de "+p2 
                Matriz[0][0]="player1"
            }
            else // se for a vez do player 2
            {
                vez = vez+1
                img[0].classList.add('d-none')
                window.document.getElementById('img00circulo').classList.remove('d-none')
                window.document.getElementById('img00branco').classList.remove('d-block')
                window.document.getElementById('img00circulo').classList.add('d-block')
                player.innerHTML = "Vez de "+p1 
                Matriz[0][0]="player2"
            }
        }
        vitoria()
    }
    function clicar01()
    {
        if(Matriz[0][1]=="01"&& win ==0)
        {
            if (vez % 2 == 0) 
            {
                vez = vez+1
                img[1].classList.add('d-none')
                window.document.getElementById('img01xis').classList.remove('d-none')
                window.document.getElementById('img01branco').classList.remove('d-block')
                window.document.getElementById('img01xis').classList.add('d-block')
                player.innerHTML = "Vez de "+p2 
                Matriz[0][1]="player1"
            }
            else   
            {
                vez = vez+1
                img[1].classList.add('d-none')
                window.document.getElementById('img01circulo').classList.remove('d-none')
                window.document.getElementById('img01branco').classList.remove('d-block')
                window.document.getElementById('img01circulo').classList.add('d-block')
                player.innerHTML = "Vez de "+p1 
                Matriz[0][1]="player2"
            }
        }
        vitoria()
            
    }
    function clicar02()
    {   
        if(Matriz[0][2]=="02"&& win ==0)
        {
            if (vez % 2 == 0) 
            {
                vez = vez+1 
                img[2].classList.add('d-none')
                window.document.getElementById('img02xis').classList.remove('d-none')
                window.document.getElementById('img02branco').classList.remove('d-block')
                window.document.getElementById('img02xis').classList.add('d-block')
                player.innerHTML =  "Vez de "+p2 
                Matriz[0][2]="player1"
            }
            else  
            {
                vez = vez+1
                img[2].classList.add('d-none')
                window.document.getElementById('img02circulo').classList.remove('d-none')
                window.document.getElementById('img02branco').classList.remove('d-block')
                window.document.getElementById('img02circulo').classList.add('d-block')
                player.innerHTML =  "Vez de "+p1 
                Matriz[0][2]="player2"
            }
        }
        vitoria()
    }
    function clicar10()
    {
        if(Matriz[1][0]=="10" && win ==0)
        {
            if (vez % 2 == 0)
            {
                vez = vez+1
                img[3].classList.add('d-none')
                window.document.getElementById('img10xis').classList.remove('d-none')
                window.document.getElementById('img10branco').classList.remove('d-block')
                window.document.getElementById('img10xis').classList.add('d-block')
                player.innerHTML =  "Vez de "+p2 
                Matriz[1][0]="player1"
            }
            else
            {
                vez = vez+1
                img[3].classList.add('d-none')
                window.document.getElementById('img10circulo').classList.remove('d-none')
                window.document.getElementById('img10branco').classList.remove('d-block')
                window.document.getElementById('img10circulo').classList.add('d-block')
                player.innerHTML =  "Vez de "+p1 
                Matriz[1][0]="player2"
            }
        }
        vitoria()
    }
    function clicar11()
    {
        if(Matriz[1][1]=="11"&& win ==0)
        {
            if (vez % 2 == 0)
            {
                vez = vez+1
                img[4].classList.add('d-none')
                window.document.getElementById('img11xis').classList.remove('d-none')
                window.document.getElementById('img11branco').classList.remove('d-block')
                window.document.getElementById('img11xis').classList.add('d-block')
                player.innerHTML =  "Vez de "+p2 
                Matriz[1][1]="player1"
            }
            else
            {
                vez = vez+1
                img[4].classList.add('d-none')
                window.document.getElementById('img11circulo').classList.remove('d-none')
                window.document.getElementById('img11branco').classList.remove('d-block')
                window.document.getElementById('img11circulo').classList.add('d-block')
                player.innerHTML =  "Vez de "+p1 
                Matriz[1][1]="player2"
            }
        }
        vitoria() 
    }
    function clicar12()
    {
        if(Matriz[1][2]=="12"&& win ==0)
        {
            if (vez % 2 == 0)
            {
                vez = vez+1
                img[5].classList.add('d-none')
                window.document.getElementById('img12xis').classList.remove('d-none')
                window.document.getElementById('img12branco').classList.remove('d-block')
                window.document.getElementById('img12xis').classList.add('d-block')
                player.innerHTML =  "Vez de "+p2 
                Matriz[1][2]="player1"
            }
            else
            {
                vez = vez+1
                img[5].classList.add('d-none')
                window.document.getElementById('img12circulo').classList.remove('d-none')
                window.document.getElementById('img12branco').classList.remove('d-block')
                window.document.getElementById('img12circulo').classList.add('d-block')
                player.innerHTML =  "Vez de "+p1 
                Matriz[1][2]="player2"
            }
        }
        vitoria()
    }
    function clicar20()
    {
        if(Matriz[2][0]=="20"&& win ==0)
        {
            if (vez % 2 == 0)
            {
                vez = vez+1
                img[6].classList.add('d-none')
                window.document.getElementById('img20xis').classList.remove('d-none')
                window.document.getElementById('img20branco').classList.remove('d-block')
                window.document.getElementById('img20xis').classList.add('d-block')
                player.innerHTML =  "Vez de "+p2 
                Matriz[2][0]="player1"
            }
            else
            {
                vez = vez+1
                img[6].classList.add('d-none')
                window.document.getElementById('img20circulo').classList.remove('d-none')
                window.document.getElementById('img20branco').classList.remove('d-block')
                window.document.getElementById('img20circulo').classList.add('d-block')
                player.innerHTML =  "Vez de "+p1 
                Matriz[2][0]="player2"
            }
        }
        vitoria()
    }
    function clicar21()
    {
        if(Matriz[2][1]=="21"&& win ==0)
        {
            if (vez % 2 == 0)
            {
                vez = vez+1
                img[7].classList.add('d-none')
                window.document.getElementById('img21xis').classList.remove('d-none')
                window.document.getElementById('img21branco').classList.remove('d-block')
                window.document.getElementById('img21xis').classList.add('d-block')
                player.innerHTML = "Vez de "+p2 
                Matriz[2][1]="player1"
            }
            else
            {
                vez = vez+1
                img[7].classList.add('d-none')
                window.document.getElementById('img21circulo').classList.remove('d-none')
                window.document.getElementById('img21branco').classList.remove('d-block')
                window.document.getElementById('img21circulo').classList.add('d-block')
                player.innerHTML = "Vez de "+p1 
                Matriz[2][1]="player2"
            }
        }
        vitoria()
}
    function clicar22() 
    {
        if(Matriz[2][2]=="22"&& win ==0)
        {
            if (vez % 2 == 0)
            {
                vez = vez+1
                img[8].classList.add('d-none')
                window.document.getElementById('img22xis').classList.remove('d-none')
                window.document.getElementById('img22branco').classList.remove('d-block')
                window.document.getElementById('img22xis').classList.add('d-block')
                player.innerHTML = "Vez de "+p2 
                Matriz[2][2]="player1"
            }
            else
            {
                vez = vez+1
                img[8].classList.add('d-none')
                window.document.getElementById('img22circulo').classList.remove('d-none')
                window.document.getElementById('img22branco').classList.remove('d-block')
                window.document.getElementById('img22circulo').classList.add('d-block')
                player.innerHTML = "Vez de "+p1 
                Matriz[2][2]= "player2"
            }
        }
        vitoria()
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function vitoria() // determina vitoria ou empate
    {              
        //Determina se é empate
        if(vez >= 9 && (player1 < 3 || player2 < 3)) 
                  {
                    win=1
                    player.innerHTML = " Empate"
                  } 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            // verifica pontuação das linhas
        for(let i = 0; i <= 2; i++){
            for(let j = 0; j <= 2; j++){
                if (Matriz[i][j] == 'player1'){
                    player1++
                }
                if (Matriz[i][j] == 'player2'){
                   player2++
                }
            }
            if(player1 == 3){
                player.innerHTML = p1 +" win!"
                win = 1                    
            }
            else{
                player1 = 0
            }
            if(player2 == 3){
                player.innerHTML = p2 +" win!"
                win = 1
            }
            else{
               player2 = 0    
            }
        }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            // verifica pontuação das colunas
        for(let j = 0; j <= 2; j++){
            for(let i = 0; i <= 2; i++){
                if (Matriz[i][j] == 'player1' && player1 < 3){
                    player1++
                }
                if (Matriz[i][j] == 'player2' && player2 < 3){
                    player2++                        
                } 
            }
            if(player1 == 3){
                player.innerHTML = p1 +" win!"
                win = 1
            }
            else{
               player1 = 0
            }
            if(player2 == 3){
                player.innerHTML = p2 +" win!"
                win = 1
            }
            else{
                player2 = 0
            }
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Verifica pontuação nas diagonais 
            //diagonal 00,11,22
        for(let j = 0; j <= 2; j++){
            for(let i = 0; i <= 2; i++){
                if(i==j){

                    if (Matriz[i][j] == 'player1' && player1 < 3){
                    player1++
                    }
                    
                    if (Matriz[i][j] == 'player2' && player2 < 3){
                    player2++                        
                    }   
                }
            }
        }
        if(player1 == 3){
            player.innerHTML = p1 +" win!"
            win = 1
        }
        else{
            player1 = 0
        }
        if(player2 == 3){
            player.innerHTML = p2 +" win!"
            win = 1
        }
        else{
            player2 = 0
        }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //digonal 02,11,20
        for(let j = 0; j <= 2; j++){
            for(let i = 0; i <= 2; i++){
                if((i + j) == 2){
                    if (Matriz[i][j] == 'player1' && player1 < 3){
                        player1++
                    }
                    if (Matriz[i][j] == 'player2' && player2 < 3){
                        player2++                        
                } 
                    
                }
            }
        }
        if(player1 == 3){
                player.innerHTML = p1 +" win!"
                win = 1
            }
            else{
               player1 = 0
            }
            if(player2 == 3){
                player.innerHTML = p2 +" win!"
                win = 1
            }
            else{
                player2 = 0
            }

            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    }
    // funções extragame
    function reinicia()
    {
        //reseta as pontuações da partida

        Matriz =  
                    [
                        ["00","01","02"],
                        ["10","11","12"],
                        ["20","21","22"]
                    ]
        player1 = 0
        player2 = 0
        win = 0
        vez = 0 

        // reinicia o layout do jogo
        
            // reinicia nome do player
        player.innerHTML = "Vez de "+p1 

            // Mostrando e alinhando os brancos           
        for(let i = 0; i<=8; i++){
            img[i].classList.remove('d-none')
            img[i].classList.add('d-block')
        }
        

        // apagando e desalinhando os Xis

        window.document.getElementById('img00xis').classList.add('d-none')
        window.document.getElementById('img01xis').classList.add('d-none')
        window.document.getElementById('img02xis').classList.add('d-none')
        window.document.getElementById('img10xis').classList.add('d-none')
        window.document.getElementById('img11xis').classList.add('d-none')
        window.document.getElementById('img12xis').classList.add('d-none')
        window.document.getElementById('img20xis').classList.add('d-none')
        window.document.getElementById('img21xis').classList.add('d-none')
        window.document.getElementById('img22xis').classList.add('d-none')

        window.document.getElementById('img00xis').classList.remove('d-block')
        window.document.getElementById('img01xis').classList.remove('d-block')
        window.document.getElementById('img02xis').classList.remove('d-block')
        window.document.getElementById('img10xis').classList.remove('d-block')
        window.document.getElementById('img11xis').classList.remove('d-block')
        window.document.getElementById('img12xis').classList.remove('d-block')
        window.document.getElementById('img20xis').classList.remove('d-block')
        window.document.getElementById('img21xis').classList.remove('d-block')
        window.document.getElementById('img22xis').classList.remove('d-block')

        //apagando e desalinhando os Circulos

        window.document.getElementById('img00circulo').classList.add('d-none')
        window.document.getElementById('img01circulo').classList.add('d-none')
        window.document.getElementById('img02circulo').classList.add('d-none')
        window.document.getElementById('img10circulo').classList.add('d-none')
        window.document.getElementById('img11circulo').classList.add('d-none')
        window.document.getElementById('img12circulo').classList.add('d-none')
        window.document.getElementById('img20circulo').classList.add('d-none')
        window.document.getElementById('img21circulo').classList.add('d-none')
        window.document.getElementById('img22circulo').classList.add('d-none')
        window.document.getElementById('img00circulo').classList.remove('d-block')
        window.document.getElementById('img01circulo').classList.remove('d-block')
        window.document.getElementById('img02circulo').classList.remove('d-block')
        window.document.getElementById('img10circulo').classList.remove('d-block')
        window.document.getElementById('img11circulo').classList.remove('d-block')
        window.document.getElementById('img12circulo').classList.remove('d-block')
        window.document.getElementById('img20circulo').classList.remove('d-block')
        window.document.getElementById('img21circulo').classList.remove('d-block')
        window.document.getElementById('img22circulo').classList.remove('d-block')
    }
}

