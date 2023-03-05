
let nbCours;
var numero_Cours = 0;
var nombre_Etudiant_Par_Cours;
var numero_Prof;
var nombre_Etudiant_Par_Cours;
var numero_Etudiant;
var evaluation_Number;
var somme_Note_Etudiant;
let note1_Etudiant;
let note2_Etudiant;
let note_Moyenne_Etudiant1;
let note_Moyenne_Etudiant2;
let note_Moyenne_prof1
let note_Moyenne_prof2
let note_Moyenne_directeur


function etape1(){
document.getElementById("image1").style.display = "none";
nbCours = 2;
document.getElementById("question").style.display= "block";
document.getElementById("instruction").innerHTML = "Questions pour le directeur de l'école";
document.getElementById("question").innerHTML= "Le nombre de cours pour cette session (le nombre minimal est un cours.) :"
document.getElementById("reponseChoisie").innerHTML = "Nous avons choisi 2 cours pour cette session. Passez à l'étape suivante.";
document.getElementById("reponseChoisie").style.display = "block";
document.getElementById("bouton1").innerHTML = "Suivant";
const element = document.getElementById("bouton1");
element.addEventListener("click", etape2);

}


function etape2(){
    numero_Cours = 1;
    document.getElementById("instruction").innerHTML = "Questions pour le directeur de l'école";
    document.getElementById("question").innerHTML= "Le nombre d'ètudant pour le cours "+ numero_Cours+ ":";
    document.getElementById("reponseChoisie").innerHTML = "Nous avons choisi 2 étudiants pour ce cours. Passez à l'étape suivante.";
    const element = document.getElementById("bouton1");
    element.addEventListener("click", etape3);
    }

    function etape3(){
        document.getElementById("instruction").innerHTML = "Questions pour le professeur de cours " + numero_Cours;
        document.getElementById("question").innerHTML= "Le nombre d'èvaluation pour le cours " + numero_Cours+ ":";
        document.getElementById("reponseChoisie").innerHTML = "Nous avons choisi 2 évaluations pour ce cours. Passez à l'étape suivante.";
        const element = document.getElementById("bouton1");
        element.addEventListener("click", etape4);
        }




    function etape4(){
            numero_Etudiant = 1;
            document.getElementById("instruction").innerHTML = "Questions pour l'étudiant 1 pour le cours 1";
            document.getElementById("question").innerHTML= "Saissez votre note sur 100 pour l'évaluation 1:";
            document.getElementById("question1").innerHTML= "Saissez votre note sur 100 pour l'évaluation 2:";
            document.getElementById("reponseChoisie").style.display = "none";
            document.getElementById("question1").style.display = "block";
            document.getElementById("reponse1").style.display = "block";
            document.getElementById("reponse2").style.display = "block";
            note1_Etudiant = parseFloat(document.getElementById("reponse1").value);
            note2_Etudiant = parseFloat(document.getElementById("reponse2").value);
            somme_Note_Etudiant = note1_Etudiant + note2_Etudiant;
            note_Moyenne_Etudiant1 = somme_Note_Etudiant / 2;
            const element = document.getElementById("bouton1");
            element.addEventListener("click", etape5);
            somme_Note_Etudiant = 0;
            }

function etape5(){
    document.getElementById("instruction").innerHTML = "La note moyenne pour l'étudiant 1 au cours 1";
            document.getElementById("question").style.display = "none";
            document.getElementById("question1").style.display= "none";
    document.getElementById("question1").style.display = "none";
    document.getElementById("reponse1").style.display = "none";
    document.getElementById("reponse2").style.display = "none";
    document.getElementById("note").style.display = "block";
    document.getElementById("note").innerHTML = note_Moyenne_Etudiant1+"/100";
    document.getElementById("bouton1").innerHTML = "Passer l'étudiant suivant";
    const element = document.getElementById("bouton1");
    element.addEventListener("click", etape6)
}
                

function etape6(){
    note1_Etudiant = 0;
    note2_Etudiant = 0;
    numero_Etudiant = 2;
    somme_Note_Etudiant = 0;
    document.getElementById("bouton1").innerHTML = "Suivant";
    document.getElementById("instruction").innerHTML = "Questions pour l'étudiant 2 pour le cours 1";
    document.getElementById("question").style.display = "block";
    document.getElementById("question1").style.display= "block";
    document.getElementById("question").innerHTML= "Saissez votre note sur 100 pour l'évaluation 1:";
    document.getElementById("question1").innerHTML= "Saissez votre note sur 100 pour l'évaluation 2:";
    document.getElementById("note").style.display = "none";
    document.getElementById("reponse1").style.display = "block";
    document.getElementById("reponse2").style.display = "block";
    note1_Etudiant = parseFloat(document.getElementById("reponse1").value);
    note2_Etudiant = parseFloat(document.getElementById("reponse2").value);
    somme_Note_Etudiant = note1_Etudiant + note2_Etudiant;
    note_Moyenne_Etudiant2 = somme_Note_Etudiant / 2;
    const element = document.getElementById("bouton1");
    element.addEventListener("click", etape7);
    }



function etape7(){
document.getElementById("instruction").innerHTML = "La note moyenne pour l'étudiant 2 au cours 1";
    document.getElementById("question").style.display = "none";
    document.getElementById("question1").style.display= "none";
document.getElementById("question1").style.display = "none";
document.getElementById("reponse1").style.display = "none";
document.getElementById("reponse2").style.display = "none";
document.getElementById("note").style.display = "block";
document.getElementById("note").innerHTML = note_Moyenne_Etudiant2+"/100";
document.getElementById("bouton1").innerHTML = "Cliquez ici pour voir la note du professeur";
const element = document.getElementById("bouton1");
    element.addEventListener("click", etape8);
}



function etape8(){
    note_Moyenne_prof1 = (note_Moyenne_Etudiant1 + note_Moyenne_Etudiant2) / 2;
    document.getElementById("instruction").innerHTML = "La note moyenne du professeur pour le cours 1";
    document.getElementById("note").innerHTML = note_Moyenne_Etudiant1+"/100";
    document.getElementById("bouton1").innerHTML = "Passer au cours suivant";
    const element = document.getElementById("bouton1");
    element.addEventListener("click", etape9);
    }


    function etape9(){
        document.getElementById("bouton1").innerHTML = "Suivant";

        document.getElementById("note").style.display = "none";
        numero_Cours = 2;
        document.getElementById("instruction").style.display = "block";
        document.getElementById("instruction").innerHTML = "Questions pour le directeur de l'école";
        document.getElementById("question").style.display= "block";
        document.getElementById("question").innerHTML= "Le nombre d'ètudant pour le cours "+ numero_Cours+ ":";
        document.getElementById("reponseChoisie").style.display = "block";
        document.getElementById("reponseChoisie").innerHTML = "Nous avons choisi 2 étudiants pour ce cours. Passez à l'étape suivante.";
        const element = document.getElementById("bouton1");
        element.addEventListener("click", etape10);
        }
    
        function etape10(){
            document.getElementById("instruction").innerHTML = "Questions pour le professeur de cours " + numero_Cours;
            document.getElementById("question").innerHTML= "Le nombre d'èvaluation pour le cours " + numero_Cours+ ":";
            document.getElementById("reponseChoisie").innerHTML = "Nous avons choisi 2 évaluations pour ce cours. Passez à l'étape suivante.";
            const element = document.getElementById("bouton1");
            element.addEventListener("click", etape11);
            }

            function etape11(){
                numero_Etudiant = 1;
                document.getElementById("instruction").innerHTML = "Questions pour l'étudiant 1 pour le cours 2";
                document.getElementById("question").innerHTML= "Saissez votre note sur 100 pour l'évaluation 1:";
                document.getElementById("question1").innerHTML= "Saissez votre note sur 100 pour l'évaluation 2:";
                document.getElementById("reponseChoisie").style.display = "none";
                document.getElementById("question1").style.display = "block";
                document.getElementById("reponse1").style.display = "block";
                document.getElementById("reponse2").style.display = "block";
                note1_Etudiant = parseFloat(document.getElementById("reponse1").value);
                note2_Etudiant = parseFloat(document.getElementById("reponse2").value);
                somme_Note_Etudiant = note1_Etudiant + note2_Etudiant;
                note_Moyenne_Etudiant1 = somme_Note_Etudiant / 2;
                const element = document.getElementById("bouton1");
                element.addEventListener("click", etape12);
                somme_Note_Etudiant = 0;
                }

                function etape12(){
                    document.getElementById("instruction").innerHTML = "La note moyenne pour l'étudiant 1 au cours 2";
                            document.getElementById("question").style.display = "none";
                            document.getElementById("question1").style.display= "none";
                    document.getElementById("question1").style.display = "none";
                    document.getElementById("reponse1").style.display = "none";
                    document.getElementById("reponse2").style.display = "none";
                    document.getElementById("note").style.display = "block";
                    document.getElementById("note").innerHTML = note_Moyenne_Etudiant1+"/100";
                    document.getElementById("bouton1").innerHTML = "Passer l'étudiant suivant";
                    const element = document.getElementById("bouton1");
                    element.addEventListener("click", etape13)
                }


                function etape13(){
                    note1_Etudiant = 0;
                    note2_Etudiant = 0;
                    numero_Etudiant = 2;
                    somme_Note_Etudiant = 0;
                    document.getElementById("bouton1").innerHTML = "Suivant";
                    document.getElementById("instruction").innerHTML = "Questions pour l'étudiant 2 pour le cours 2";
                    document.getElementById("question").style.display = "block";
                    document.getElementById("question1").style.display= "block";
                    document.getElementById("question").innerHTML= "Saissez votre note sur 100 pour l'évaluation 1:";
                    document.getElementById("question1").innerHTML= "Saissez votre note sur 100 pour l'évaluation 2:";
                    document.getElementById("note").style.display = "none";
                    document.getElementById("reponse1").style.display = "block";
                    document.getElementById("reponse2").style.display = "block";
                    note1_Etudiant = parseFloat(document.getElementById("reponse1").value);
                    note2_Etudiant = parseFloat(document.getElementById("reponse2").value);
                    somme_Note_Etudiant = note1_Etudiant + note2_Etudiant;
                    note_Moyenne_Etudiant2 = somme_Note_Etudiant / 2;
                    const element = document.getElementById("bouton1");
                    element.addEventListener("click", etape14);
                    }

                    function etape14(){
                        document.getElementById("instruction").innerHTML = "La note moyenne pour l'étudiant 2 au cours 2";
                            document.getElementById("question").style.display = "none";
                            document.getElementById("question1").style.display= "none";
                        document.getElementById("question1").style.display = "none";
                        document.getElementById("reponse1").style.display = "none";
                        document.getElementById("reponse2").style.display = "none";
                        document.getElementById("note").style.display = "block";
                        document.getElementById("note").innerHTML = note_Moyenne_Etudiant2+"/100";
                        document.getElementById("bouton1").innerHTML = "Cliquez ici pour voir la note du professeur";
                        const element = document.getElementById("bouton1");
                            element.addEventListener("click", etape15);
                        }

                        function etape15(){
                            note_Moyenne_prof1 = (note_Moyenne_Etudiant1 + note_Moyenne_Etudiant2) / 2;
                            document.getElementById("instruction").innerHTML = "La note moyenne du professeur pour le cours 2";
                            document.getElementById("note").innerHTML = note_Moyenne_Etudiant1+"/100";
                            document.getElementById("bouton1").innerHTML = "Passer au cours suivant";
                            const element = document.getElementById("bouton1");
                            element.addEventListener("click", etape16);
                            }

                            function etape16(){
                                document.getElementById("image").style.display = "block";
                                note_Moyenne_prof1 = (note_Moyenne_Etudiant1 + note_Moyenne_Etudiant2) / 2;
                                document.getElementById("instruction").innerHTML = "La note pour le directeur du programme";
                                document.getElementById("note").innerHTML = note_Moyenne_prof1+"/100";
                                document.getElementById("bouton1").style.display = "none";
                                
                                }