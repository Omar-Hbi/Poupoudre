/*Code JS utilisé pour créer un compte à rebours*/

setInterval(() => {
	const toDay = new Date().getTime() /*Date d'aujourd'hui*/
	const event = new Date("2023-12-25 00:00:00").getTime() /*Correspond à l'événement du compte à rebours. La date de l'événement se trouve entre parenthèses.*/
	const difference = event - toDay /*Calcul de la différence de temps entre aujourd'hui et l'événement.*/

	const days = Math.floor(difference / (1000 * 60 * 60 * 24)) /*Calcul des jours entre l'événement et aujourd'hui*/
	const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) /*Calcul des heures entre l'événement et aujourd'hui*/
	const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)) /*Calcul des minutes entre l'événement et aujourd'hui*/
	const seconds = Math.floor((difference % (1000 * 60)) / 1000) /*Calcul des secondes entre l'événement et aujourd'hui*/

	document.getElementById("days").innerText = days + " j" /*Affiche le valeur de la constante days côté HTML*/
	document.getElementById("hours").innerText = hours + " h" /*Affiche le valeur de la constante hours côté HTML*/
	document.getElementById("minutes").innerText = minutes + " min" /*Affiche le valeur de la constante minutes côté HTML*/
	document.getElementById("seconds").innerText = seconds + " s" /*Affiche le valeur de la constante seconds côté HTML*/
}, 1000)