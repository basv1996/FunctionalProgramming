function convertToLowerCase(string){
        if(typeof string === 'string') {
    		return string.toLowerCase();
    	} else {
    		return string;
    	}
    }

    export default convertToLowerCase