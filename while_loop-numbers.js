// Counts up by 1 from -29 to 19
var numbers = -29; 

console.log('Print all numbers between -29 and 19');
while(numbers <= 19){
	console.log(numbers);
	numbers++;
}

// Checks if the number is even, if true it prints
var numbers = 6; 

console.log('Print all even numbers between 6 and 60');
while(numbers <= 60) {
	if(numbers % 2 === 0)
		console.log(numbers);
		numbers++;
	}


// Checks if the numer id odd, if true it prints
var numbers = 300;

console.log('Print all odd numbers between 300 and 399');
while(numbers <= 333){
	if(numbers % 2 === 0)
		console.log(numbers);
		numbers+=1;
}

// Checks all numbers divisible by 5 and 3 between 5 and 50 and print 
var numbers = 5;

console.log('Print all numbers divisible by 5 and 3 between 5 and 50');
while(numbers <= 50){
	if(numbers % 2 === 0 && numbers % 3 === 0)
		console.log(numbers);
		numbers+=1;
}

console.log("PRINTING ALL NUMBERS BETWEEN -10 and 19");

for(var i = -10; i < 20; i++){
	console.log(i);
}



console.log("PRINTING ALL EVEN BETWEEN 10 AND 40");

/*for(var i - 11; i <= 40; i += 2){
	console.log(i);
}*/

for(var i = 10; i <= 40; i+= 1){
	if(i % 2 === 0){
		console.log(i);
	}
}




console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333");

for(var i = 300; i <= 333; i++){
	if(1 % 2 !== 0) {
		console.log(i);
	}
}


// Checks if the numer id odd, if true it prints
var numbers = 27;

document.write('Print all odd numbers between 300 and 399' + "\n" + "<Br>");
while(numbers <= 333){
	if(numbers % 2 === 0)
      document.write(numbers + "\n");
		numbers+=1;
  
    }


console.log("PRINTING ALL NUMERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");

for(var i =5; i <= 50; i++){
	if(i % 5 === 0 && i % 3 === 0){
		console.log(i);
	}
}

console.log("CONECTED");

function printReverse(arr){
	for (var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

printReverse([3,6,2,5]);

//*** isUniform ***

function isUniform(arr){
	var first = arr[0];
	arr.forEach)function(element){
		if(element !== first){
			return false;
		}
});
	return false;
}

function inUniform(arr){
	var first = arr[0];
	arr.forEach(function(element){
		if(element !== first){
			return false;
		}
	});
		return true;
}

// *** sumArray() ***

function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
}