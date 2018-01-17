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
/* I couldn't figure out how to create the relativeComplement in the way you intended us to.
I ended up doing it in a very confusing and horrible way. I can't wait to learn the correct way
to code this.
 */
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
