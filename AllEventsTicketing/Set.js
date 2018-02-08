function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/
	   if (listA === null || listB === null) {
	   	return null;
	   }

	   for (var i = 0; i < listA.length; i++) {
	   	var nextValue = listA[i];

	   	for (var j = 0; j < listB.length; j++) {
	   		if (listB[j] === nextValue) {
	   			resultList.push(listB[j]);
	   			break;
			}
		}
	   }
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

        var resultList = [];

        if (listA === null || listB === null) {
            return null;
        }

        /*-------------------------------Insert your code here -------------------------------------*/
		var abResult = this.symmetricDifference(listA, listB);
		var abIntersect = this.intersection(listA, listB);
		console.log(abResult);
		console.log(abIntersect);

		for (var i = 0; i < abResult.length; i++) {
			resultList.push(abResult[i]);

		}
		for (var j = 0; j < abIntersect.length; j++) {
			resultList.push(abIntersect[j]);
		}




        /*-------------------------------Insert your code here -------------------------------------*/

        return resultList;
    }




    this.relativeComplement = function(listA, listB) {

        if (listA === null || listB === null) {
            return null;
        }

	   var resultList = [];

        if (listA === null || listB === null) {
            return null;
        }

        for(var i = 0; i < listA.length; i++) {

        	if(listB.indexOf(listA[i]) === -1) {
        		resultList.push(listA[i]);
			}
		}


        return resultList;
    }



	this.symmetricDifference = function(listA, listB) {

	   var resultList = [];

	   /*-------------------------------Insert your code here -------------------------------------*/
        if (listA === null || listB === null) {
            return null;
        }

	   	var abResult = this.relativeComplement(listA, listB);
		var baResult = this.relativeComplement(listB, listA);

		for (var i = 0; i < abResult.length; i++) {
			resultList.push(abResult[i]);
		}
		for (var j = 0; j < baResult.length; j++) {
			resultList.push(baResult[j]);
        }

	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}	
	

}
