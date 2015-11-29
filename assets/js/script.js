



$(document).ready(function(){
	    $("#newSearchBut").hide(); 

});


function anagramCheck() {
	$("#newSearchBut").show();
	$("#duolingoImg").show();
	$("#questionBut").hide();

	var inputA = document.getElementById("anagramInput").value;
	var inputB = document.getElementById("textInput").value; 

	//turn both strings into lower case 
	inputA = inputA.toLowerCase(); 
	inputB = inputB.toLowerCase();

	//remove all the white space and punctuation marks from both strings
	inputA = inputA.replace(/[^a-z0-9]/gi, ''); 
	inputB = inputB.replace(/[^a-z0-9]/gi, ''); 

	//create an array for both strings 
	var inputA_arr = inputA.split(""); 
	var inputB_arr = inputB.split(""); 

	var isAnagram = "FALSE"; 

	//checks if both input are of the same length
	if (inputA_arr.length != inputB_arr.length) {
		isAnagram = "FALSE"; 
	}
	//checks if either string is null
	else if(inputA_arr.length == 0 || inputB_arr.length == 0) {
		isAnagram = "FALSE"; 
	}
	//if the inputs are of equal length
	//if n is length of inputA (and inputB), time complexity = n^2 
	else {
		// <Attempt 1>
		// for (i=0 ; i < inputA_arr.length ; i++) {
		// 	for (j=0; j < inputB_arr.length ; j++) {
		// 		if (inputA_arr[i] == inputB_arr[j]) {
		// 			//if the character in B is equal to the charcater in A, remove character in B 
		// 			inputB_arr.splice(j,1); 
		// 		}

		// 	}
		// }
		// //If all elements in B has been removed, A is an anagram of B
		// if (inputB_arr.length == 0) {
		// 		result = "TRUE"; 
		// }

		// <Attempt 2> 
		//Create an object with characters in inputA as key of hashMap  
		var hashMap = new Object();

		for (i=0; i < inputA_arr.length; i++) {
			//When each character is passed, increment the value of hashMap 
			hashMap[inputA_arr[i]] = (hashMap[inputA_arr[i]] || 0) + 1; 
			console.log(hashMap); 
		}

		for (j=0; j < inputB_arr.length ; j++) {
			//When each character in inputB is found in hashMap keys, decrement its value 
			if (inputB_arr[j] in hashMap){
				hashMap[inputB_arr[j]] -= 1; 
				console.log(hashMap); 
			}
			//If character in inputB is not found in hashMap keys, inputA is not an anagram of inputB
			else {
				isAnagram = 'FALSE'; 
				break; 
			}
		}

		for (j=0; j < inputB_arr.length ; j++) {
			//If all the values in hashMap equal 0, inputA is an anagram of inputB 
			//If not 0, not an anagram
		
			if (hashMap[inputB_arr[j]] != 0) {
				isAnagram = 'FALSE'; 
				break;
			} 
			else {
				isAnagram = 'TRUE'; 
			}
		}
	}
	console.log(isAnagram); 


	//Add Duolingo Image 
	var duolingoImage = document.createElement("IMG"); 
	duolingoImage.setAttribute("src", "assets/image/duolingo.png");


	document.getElementById("duolingoImg").appendChild(duolingoImage); 

	//Display the result of isAnagram on html using DOM objects 
	var resultHeader = document.createElement('h3'); 
	var resultText = document.createTextNode(isAnagram); 
	resultHeader.appendChild(resultText); 
	document.getElementById("results_div_header").appendChild(resultHeader); 

	

}

//Clear result from previous search before performing new search

function newSearch() {
	document.getElementById("results_div_header").innerHTML =""; 	
	document.getElementById("duolingoImg").innerHTML =""; 	

	$("#newSearchBut").hide();
	$("#duolingoImg").hide();
	$("#questionBut").show();


	document.getElementById("inputForm").reset(); 

}














