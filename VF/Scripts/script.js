/* envoyer un message par email */
function sendEmail(name,message)
{
  var handle ;
  var emailDest = "email@serveur.com";
  if(name == "" || message == "")
  {
    window.alert("Merci de renseigner votre nom et/ou votre message !");
  }
  else
  {
    //Puisque je n'ai pas de serveur j'utilise l'envoi de mail avec le gestionnaire de message de l'utilisateur
    //et je prérempli les infos
    handle = window.open('mailto:'+emailDest+'?subject=Contact de '+ name+'&body='+message);
    if(!handle)
    {// Si la popup n'a pas pu s'ouvrir, elle doit être bloquer par un bloqueur de popup 
      window.alert("Impossible d'ouvrir la fenêtre pour envoyer votre message !\nMerci de vérifier votre bloqueur de popup !");
    }
  }
  return true;
}

/* Modification du texte pour le nombre de caractères dans le message */
function textLabelMessage(iMsgLength,iMaxLength)
{
  var iCar = iMaxLength - iMsgLength;
  var strMsg = "";
  if (iCar == 0){
    strMsg="Votre message (" + (iMaxLength - iMsgLength) + " caractère restant.)"
  }
  else{
    strMsg="Votre message (" + (iMaxLength - iMsgLength) + " caractères restants.)"
  }
  document.getElementById("lblMessage").innerText = strMsg;
}

/* Pour compter le nombre de lettres*/
function countWordMessage(objMessage)
{
  var textMsg = objMessage.value;
  var iMsgLength = textMsg.length;
  var iMaxLength = objMessage.maxLength;
  var cursor = document.getElementById('cursor');
  cursor.style.height = 200- 2* iMsgLength*100 /iMaxLength +'px';
  textLabelMessage(iMsgLength,iMaxLength);
  return true;
}

/* Charge les différentes fonctions (si nécessaire) */
function loadFunction()
{
  var objMessage = document.getElementById('Message');
  var textMsg = objMessage.value;
  var iMsgLength = textMsg.length;
  var iMaxLength = objMessage.maxLength;
  textLabelMessage(iMsgLength,iMaxLength);
}



