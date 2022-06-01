    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    

    function desenhaBase(x,y,xa,ya){
        pincel.fillStyle ='black';
        pincel.fillRect(x,y,xa,ya)

    }

    function desenhaCabeca(x,y,raio,cor){
    pincel.fillStyle = cor
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2*3.14);
        pincel.fill();
    }

    function desenhaBracosPernas(x,y,xa,ya){
    pincel.fillStyle ="black";
    pincel.moveTo(x,y);
    pincel.lineTo(xa,ya);
    pincel.lineWidth = 3; 
    pincel.stroke();
    }

    function cabeca(){
        desenhaCabeca(265,99,24,"black");
        desenhaCabeca(265,99,21,"#8ef5d0");
    }

    function corpo () {
        desenhaBase(263,122,3,70); //corpo
    }

    function braco1(){
        desenhaBracosPernas(263,133,294,157);
    }

    function braco2(){
        desenhaBracosPernas(263,135,234,157);
    }

    function perna1 (){
        desenhaBracosPernas(264,190,300,230);
    }

    function perna2(){
    desenhaBracosPernas(264,190,227,230);
    }

    function forca(){
        desenhaBase(180,30,6,250);//corpo da base
        desenhaBase(130,280,170,6);//pe da base
        desenhaBase(180,30,85,6);//base de cima
        desenhaBase(263,30,6,45);//base do corpo
    }