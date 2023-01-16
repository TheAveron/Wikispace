var score;
score=0;

function Validation1 ()
{
    var reponse = parseint(document.getElementById("Id_rep1").value);

    if (reponse<= 6400 && reponse >= 6300)
    {score=score+1;}
}

function Validation2 ()
{
    var reponse = parseint(document.getElementById("Id_rep2").value);

    if (reponse == -63)
    {score=score+1;}
}

function Validation3 ()
{
    var reponse = document.getElementById("Id_rep3").value;

    if (reponse=="Voyager 1")
    {score=score+1;}
}

function Validation4 ()
{
    var reponse = parseint(document.getElementById("Id_rep4").value);

    if (reponse== 243)
    {score=score+1;}
    document.getElementById('resultat').innerHTML = score;
}


