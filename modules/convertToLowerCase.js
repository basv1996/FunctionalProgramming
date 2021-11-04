/* Utility functie om hoofdletters te verwijderen */
function convertToLowerCase(string){
	/* Ik wil hem alleen op strings uitvoeren, dus kijk ik of de parameter ook echt een string is */
        if(typeof string === 'string') {
    		return string.toLowerCase();
    	} else {
    		return string;
    	}
    }

    export default convertToLowerCase