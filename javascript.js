var playing=false;
var score;
var action;
var timeRemaining;
var correctValue;
   document.getElementById("startreset").onclick=
   
       function(){
    
    if(playing==true)
        {
            location.reload();//reload page
           
        }

    else{
        score=0;
        document.getElementById("scoreValue").innerHTML=score;
        
        hide("gameover");
        
        document.getElementById("startreset").innerHTML="Reset Game";
        
        playing=true;
        
        show("timeremaining");
        timeRemaining=60;
        document.getElementById("timeremvalue").innerHTML=timeRemaining;
        startCounter();
        generate();
        
    
        
}
   }
   
       for(i=1;i<5;i++)
            {
                document.getElementById("box"+i).onclick=function(){
                    
                    if(playing==true)
                        {
                            if(this.innerHTML==correctValue)
                                {
                                    score++;
                                    document.getElementById("scoreValue").innerHTML=score;
                                    show("correct");
                                    hide("wrong");
                                    setTimeout(function(){
                                        hide("correct");
                                    },1000);
                                    
                                    generate();

                                }
                            else{
                                hide("correct");
                                show("wrong");
                                 setTimeout(function(){
                                        hide("wrong");
                                    },1000);
                            }

                        }
                    
                }
            }

function hide(Id)
{
    document.getElementById(Id).style.display="none";

}
function show(Id)
{
    document.getElementById(Id).style.display="block";

}
function startCounter()
{
    action=setInterval(function(){
        timeRemaining-=1;
        document.getElementById("timeremvalue").innerHTML=timeRemaining;
         if(timeRemaining==0)
                {
                    var gameOver=document.getElementById("gameover");
                    show("gameover");
                    gameOver.innerHTML="<p>Game Over! <br /> Your score is: " + score + "</p>"; 
                    hide("correct");
                    hide("wrong");
                    playing=false;
                    document.getElementById("startreset").innerHTML="Start Game";
                    stopcounter();
                }

        
    },1000);
}
function stopcounter()
{
    clearInterval(action);
}
function generate()
{
    var a=1 + Math.round(Math.random() * 99);
    var b=1 + Math.round(Math.random() * 99);
    document.getElementById("question").innerHTML= a + "X" + b;
    correctValue=a*b;
    var choice=1 + Math.round(Math.random()*3);
    document.getElementById("box"+choice).innerHTML=correctValue;
    
    for(i=1;i<5;i++)
        {
            if(i!=choice)
                {
                    var wrongAnswer=(1 +Math.floor(Math.random()*99))*(1 + Math.floor(Math.random()*99));
                    document.getElementById("box"+i).innerHTML=wrongAnswer;

                }

        }
    
}


       
