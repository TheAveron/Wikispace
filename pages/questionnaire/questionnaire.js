var score;
score=0;




function Validation (number)
{
    
    console.log(number);
    const reponse = parseInt(document.getElementById("Id_rep".concat(number)).value);
    
    const button = document.getElementById("button".concat(number));
    button.style.width = 0;
    button.style.height = 0;
    button.style.padding = 0;


    if (number == 1 && reponse<= 6400 && reponse >= 6300)
    {score=score+1;}
    else if (number == 2 && reponse >= 220 && reponse <= 230)
    {score=score+1;}
    else if (number == 3 && reponse==80)
    {score=score+1;}
    else if (number == 4 && reponse== 243)
    {score=score+1;}

    console.log(reponse);
}

function selection(number)
{
   const selecteur = document.getElementById("choix".concat(number));
   const monChoix=selecteur[selecteur.selectedIndex];

   const button = document.getElementById("buttons".concat(number));
   button.style.width = 0;
   button.style.height = 0;
   button.style.padding = 0;

   if (number == 1 && parseInt(monChoix.value) == 3)
   {score=score+1;}
   else if (number ==2 && parseInt(monChoix.value) == 1)
   {score=score+1;}
   console.log(monChoix.value, monChoix.text);
}

function terminer()
 {
    document.getElementById('resultat').innerHTML = score;
    console.log("printed !");
    score=0;


    var index=1;
    while (index!=5)
    {
        const button = document.getElementById("button".concat(index));
        button.style.width = "auto";
        button.style.height = "auto";
        button.style.padding = "1%";
        index= index+1;
    }

    index=1;
    while (index!=3)
    {
        const button = document.getElementById("buttons".concat(index));
        button.style.width = "auto";
        button.style.height = "auto";
        button.style.padding = "1%";
        index= index+1;
    }

 }