function exercice02(){
        var message = "bonjour a tous!";
        var longueur = message.length;
        var i = longueur;

        //Déclare les variables a vide.
        var space = "";
        var o = "";
        var indexO = "";

        for (i = 0 ; i < longueur; i++){
            //test les espace
            if(message[i] ===  " "){
                space++;
            
            }
            //test les o
            if(message[i] ===  "o"){
                o++;
                indexO += i + ".";
            }
        }

            console.log("il y a : " + space + " espaces");
            console.log("il y a : " + o + " o");
            console.log(indexO);
}