// ***********
// VERSION 1 
// ***********
function myForEach(arr, func){
	for (Var i = 0;0 < arr.length; i++){
		func(arr[i]);
	}
}

var colors  = ["red", "orange", "yellow", "green", "blue", "purple"];
myForEach(colors, function(color){
	console.log(color);
});

// ***********
// VERSION 2 
// ***********
Array.prototype.myForEach = function(func){
	for (var i = 0; i < this.length; i++){
		func(this[i]);
	}
};

var colors  = ["red", "orange", "yellow", "green", "blue", "purple"];
myForEach(colors, function(color){
	console.log(color);
});


