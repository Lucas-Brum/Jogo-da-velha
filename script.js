function carregar ()
{   // linka elementos html ao JS
    var img = [window.document.getElementById('img00'),
               window.document.getElementById('img01'),
               window.document.getElementById('img02'),
               window.document.getElementById('img10'),
               window.document.getElementById('img11'),
               window.document.getElementById('img12'), 
               window.document.getElementById('img20'),
               window.document.getElementById('img21'),
               window.document.getElementById('img22')]
    var placar =  // variaveis de referencia
                [
                    ["00","01","02"],
                    ["10","11","12"],
                    ["20","21","22"]
                ]
    var valores= ''
    var p1 = prompt('nome do player 1')
    var p2 = prompt('nome do player 2')
    var player1 = 0
    var player2 = 0
    var win = 0
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
    
    vez = 0 

    // Funções de seleção de player
    function clicar00()
    {   if(placar[0][0]==="00"&& win ==0)
        {
            if (vez % 2 == 0) // se for a vez do player 2
            {
                vez = vez+1
                img[0].src = 'Img/Xis.png'
                player.innerHTML = "Vez de "+p2
                placar[0][0]="player1"
            }
            else // se for a vez do player 1
            {
                vez = vez+1
                img[0].src = 'Img/Circulo.png'
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
                img[1].src = 'Img/Xis.png'
                player.innerHTML = "Vez de "+p2
                placar[0][1]="player1"
            }
            else   
            {
                vez = vez+1
                img[1].src = 'Img/Circulo.png'
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
                img[2].src = 'Img/Xis.png'
                player.innerHTML =  "Vez de "+p2
                placar[0][2]="player1"
            }
            else  
            {
                vez = vez+1
                img[2].src = 'Img/Circulo.png'
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
                img[3].src = 'Img/Xis.png'
                player.innerHTML =  "Vez de "+p2
                placar[1][0]="player1"
            }
            else
            {
                vez = vez+1
                img[3].src = 'Img/Circulo.png'
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
                img[4].src = 'Img/Xis.png'
                player.innerHTML =  "Vez de "+p2
                placar[1][1]="player1"
            }
            else
            {
                vez = vez+1
                img[4].src = 'Img/Circulo.png'
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
                img[5].src = 'Img/Xis.png'
                player.innerHTML =  "Vez de "+p2
                placar[1][2]="player1"
            }
            else
            {
                vez = vez+1
                img[5].src = 'Img/Circulo.png'
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
                img[6].src = 'Img/Xis.png'
                player.innerHTML =  "Vez de "+p2
                placar[2][0]="player1"
            }
            else
            {
                vez = vez+1
                img[6].src = 'Img/Circulo.png'
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
                img[7].src = 'Img/Xis.png'
                player.innerHTML = "Vez de "+p2
                placar[2][1]="player1"
            }
            else
            {
                vez = vez+1
                img[7].src = 'Img/Circulo.png'
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
                img[8].src = 'Img/Xis.png'
                player.innerHTML = "Vez de "+p2
                placar[2][2]="player1"
            }
            else
            {
                vez = vez+1
                img[8].src = 'Img/Circulo.png'
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
}

