function carregar ()
{   // linka elementos html ao JS
    var img = [window.document.getElementById('img00branco'),
               window.document.getElementById('img01branco'),
               window.document.getElementById('img02branco'),
               window.document.getElementById('img10branco'),
               window.document.getElementById('img11branco'),
               window.document.getElementById('img12branco'), 
               window.document.getElementById('img20branco'),
               window.document.getElementById('img21branco'),
               window.document.getElementById('img22branco')]
    //link botão de reset
    var reset = window.document.getElementById('reset')
    // variaveis de referencia
    var placar =  
                [
                    ["00","01","02"],
                    ["10","11","12"],
                    ["20","21","22"]
                ]
    var valores= ''
    var p1 = prompt('Nome do player 1:')
    var p2 = prompt('Nome do player 2:')
    var player1 = 0
    var player2 = 0
    var win = 0
    var vez = 0 
    // escutam os elementos do html
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
    
   

    // Funções de seleção de player
    function clicar00()
    {   if(placar[0][0]==="00"&& win ==0)
        {
            if (vez % 2 == 0) // se for a vez do player 1
            {
                vez = vez+1
                img[0].classList.add('d-none')
                window.document.getElementById('img00xis').classList.remove('d-none')
                window.document.getElementById('img00branco').classList.remove('d-block')
                window.document.getElementById('img00xis').classList.add('d-block')
                player.innerHTML = "Vez de "+p2
                placar[0][0]="player1"
            }
            else // se for a vez do player 2
            {
                vez = vez+1
                img[0].classList.add('d-none')
                window.document.getElementById('img00circulo').classList.remove('d-none')
                window.document.getElementById('img00branco').classList.remove('d-block')
                window.document.getElementById('img00circulo').classList.add('d-block')
                player.innerHTML = "Vez de "+p1
                placar[0][0]="player2"
            }
        }
        vitoria()
    }
    function clicar01()
    {
        if(placar[0][1]=="01"&& win ==0)
        {
            if (vez % 2 == 0) 
            {
                vez = vez+1
                img[1].classList.add('d-none')
                window.document.getElementById('img01xis').classList.remove('d-none')
                window.document.getElementById('img01branco').classList.remove('d-block')
                window.document.getElementById('img01xis').classList.add('d-block')
                player.innerHTML = "Vez de "+p2
                placar[0][1]="player1"
            }
            else   
            {
                vez = vez+1
                img[1].classList.add('d-none')
                window.document.getElementById('img01circulo').classList.remove('d-none')
                window.document.getElementById('img01branco').classList.remove('d-block')
                window.document.getElementById('img01circulo').classList.add('d-block')
                player.innerHTML = "Vez de "+p1
                placar[0][1]="player2"
            }
        }
        vitoria()
            
    }
    function clicar02()
    {   
        if(placar[0][2]=="02"&& win ==0)
        {
            if (vez % 2 == 0) 
            {
                vez = vez+1 
                img[2].classList.add('d-none')
                window.document.getElementById('img02xis').classList.remove('d-none')
                window.document.getElementById('img02branco').classList.remove('d-block')
                window.document.getElementById('img02xis').classList.add('d-block')
                player.innerHTML =  "Vez de "+p2
                placar[0][2]="player1"
            }
            else  
            {
                vez = vez+1
                img[2].classList.add('d-none')
                window.document.getElementById('img02circulo').classList.remove('d-none')
                window.document.getElementById('img02branco').classList.remove('d-block')
                window.document.getElementById('img02circulo').classList.add('d-block')
                player.innerHTML =  "Vez de "+p1
                placar[0][2]="player2"
            }
        }
        vitoria()
    }
    function clicar10()
    {
        if(placar[1][0]=="10" && win ==0)
        {
            if (vez % 2 == 0)
            {
                vez = vez+1
                img[3].classList.add('d-none')
                window.document.getElementById('img10xis').classList.remove('d-none')
                window.document.getElementById('img10branco').classList.remove('d-block')
                window.document.getElementById('img10xis').classList.add('d-block')
                player.innerHTML =  "Vez de "+p2
                placar[1][0]="player1"
            }
            else
            {
                vez = vez+1
                img[3].classList.add('d-none')
                window.document.getElementById('img10circulo').classList.remove('d-none')
                window.document.getElementById('img10branco').classList.remove('d-block')
                window.document.getElementById('img10circulo').classList.add('d-block')
                player.innerHTML =  "Vez de "+p1
                placar[1][0]="player2"
            }
        }
        vitoria()
    }
    function clicar11()
    {
        if(placar[1][1]=="11"&& win ==0)
        {
            if (vez % 2 == 0)
            {
                vez = vez+1
                img[4].classList.add('d-none')
                window.document.getElementById('img11xis').classList.remove('d-none')
                window.document.getElementById('img11branco').classList.remove('d-block')
                window.document.getElementById('img11xis').classList.add('d-block')
                player.innerHTML =  "Vez de "+p2
                placar[1][1]="player1"
            }
            else
            {
                vez = vez+1
                img[4].classList.add('d-none')
                window.document.getElementById('img11circulo').classList.remove('d-none')
                window.document.getElementById('img11branco').classList.remove('d-block')
                window.document.getElementById('img11circulo').classList.add('d-block')
                player.innerHTML =  "Vez de "+p1
                placar[1][1]="player2"
            }
        }
        vitoria() 
    }
    function clicar12()
    {
        if(placar[1][2]=="12"&& win ==0)
        {
            if (vez % 2 == 0)
            {
                vez = vez+1
                img[5].classList.add('d-none')
                window.document.getElementById('img12xis').classList.remove('d-none')
                window.document.getElementById('img12branco').classList.remove('d-block')
                window.document.getElementById('img12xis').classList.add('d-block')
                player.innerHTML =  "Vez de "+p2
                placar[1][2]="player1"
            }
            else
            {
                vez = vez+1
                img[5].classList.add('d-none')
                window.document.getElementById('img12circulo').classList.remove('d-none')
                window.document.getElementById('img12branco').classList.remove('d-block')
                window.document.getElementById('img12circulo').classList.add('d-block')
                player.innerHTML =  "Vez de "+p1
                placar[1][2]="player2"
            }
        }
        vitoria()
    }
    function clicar20()
    {
        if(placar[2][0]=="20"&& win ==0)
        {
            if (vez % 2 == 0)
            {
                vez = vez+1
                img[6].classList.add('d-none')
                window.document.getElementById('img20xis').classList.remove('d-none')
                window.document.getElementById('img20branco').classList.remove('d-block')
                window.document.getElementById('img20xis').classList.add('d-block')
                player.innerHTML =  "Vez de "+p2
                placar[2][0]="player1"
            }
            else
            {
                vez = vez+1
                img[6].classList.add('d-none')
                window.document.getElementById('img20circulo').classList.remove('d-none')
                window.document.getElementById('img20branco').classList.remove('d-block')
                window.document.getElementById('img20circulo').classList.add('d-block')
                player.innerHTML =  "Vez de "+p1
                placar[2][0]="player2"
            }
        }
        vitoria()
    }
    function clicar21()
    {
        if(placar[2][1]=="21"&& win ==0)
        {
            if (vez % 2 == 0)
            {
                vez = vez+1
                img[7].classList.add('d-none')
                window.document.getElementById('img21xis').classList.remove('d-none')
                window.document.getElementById('img21branco').classList.remove('d-block')
                window.document.getElementById('img21xis').classList.add('d-block')
                player.innerHTML = "Vez de "+p2
                placar[2][1]="player1"
            }
            else
            {
                vez = vez+1
                img[7].classList.add('d-none')
                window.document.getElementById('img21circulo').classList.remove('d-none')
                window.document.getElementById('img21branco').classList.remove('d-block')
                window.document.getElementById('img21circulo').classList.add('d-block')
                player.innerHTML = "Vez de "+p1
                placar[2][1]="player2"
            }
        }
        vitoria()
}
    function clicar22() 
    {
        if(placar[2][2]=="22"&& win ==0)
        {
            if (vez % 2 == 0)
            {
                vez = vez+1
                img[8].classList.add('d-none')
                window.document.getElementById('img22xis').classList.remove('d-none')
                window.document.getElementById('img22branco').classList.remove('d-block')
                window.document.getElementById('img22xis').classList.add('d-block')
                player.innerHTML = "Vez de "+p2
                placar[2][2]="player1"
            }
            else
            {
                vez = vez+1
                img[8].classList.add('d-none')
                window.document.getElementById('img22circulo').classList.remove('d-none')
                window.document.getElementById('img22branco').classList.remove('d-block')
                window.document.getElementById('img22circulo').classList.add('d-block')
                player.innerHTML = "Vez de "+p1
                placar[2][2]= "player2"
            }
        }
        vitoria()
    }
    function vitoria() // determina vitoria ou empate
    {              
        if(vez>=9 && (player1<3 || player2<3)) //Determina se é empate
                  {
                    win=1
                    player.innerHTML = " Empate"
                  } 

        if(placar[0][0] == placar[1][1] && placar[0][0] ==placar[2][2])
        {
            if(placar[1][1]=="player1")
            {
                player.innerHTML = p1+"  win!"
                win =1
            }
            else
            {
                player.innerHTML = p2+"  win!"
                win =1
            }
        }
        if(placar[0][2]==placar[1][1] && placar[0][2] == placar[2][0])
        {
            if(placar[1][1]=="player1")
            {
                player.innerHTML = p1+"  win!"
                win =1
            }
            else
            {
                player.innerHTML = p2+" win!"
                win =1
            }
        }
        
        for(var i = 0; i<=2; i++)
        {
            for(var j = 0; j<=2; j++)
            {
   
               if( placar[i][j] == "player2")
                {
                    player2 ++
                }
                if( placar[i][j] == "player1" )
                {
                    player1 ++
                }             
            }
            if (player2 == 3)
                {
                    player.innerHTML = p2+" win!"
                    win =1
                }
                else if (player1 == 3)
                {
                        player.innerHTML = p1+" win!"
                        win =1
                }
                else
                {
                    player1 = 0
                    player2 = 0
                }   
        }
        for(var j = 0; j<=2; j++)
        {
            for(var i = 0; i<=2; i++)
            {
               if( placar[i][j] == "player2")
                {
                    player2 ++
                }
                if( placar[i][j] == "player1" )
                {
                    player1 ++
                }             
            }
            if (player2 == 3)
                {
                    player.innerHTML = p2+" win!"
                    win =1
                }
                else if (player1 == 3)
                {
                        player.innerHTML = p1+" win!"
                        win =1
                }
                else
                {
                    player1 = 0
                    player2 = 0
                }   
            }

    }
    // funções extragame
    function reinicia()
    {
        //reseta as statisticas da partida

        placar =  
                    [
                        ["00","01","02"],
                        ["10","11","12"],
                        ["20","21","22"]
                    ]
        valores= ''
        player1 = 0
        player2 = 0
        win = 0
        vez = 0 


        // reinicia o layout do jogo

        // Mostrando e alinhando os brancos           
        img[0].classList.remove('d-none')
        img[1].classList.remove('d-none')
        img[2].classList.remove('d-none')
        img[3].classList.remove('d-none')
        img[4].classList.remove('d-none')
        img[5].classList.remove('d-none')
        img[6].classList.remove('d-none')
        img[7].classList.remove('d-none')
        img[8].classList.remove('d-none')

        img[0].classList.add('d-block')
        img[1].classList.add('d-block')
        img[2].classList.add('d-block')
        img[3].classList.add('d-block')
        img[4].classList.add('d-block')
        img[5].classList.add('d-block')
        img[6].classList.add('d-block')
        img[7].classList.add('d-block')
        img[8].classList.add('d-block')

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

