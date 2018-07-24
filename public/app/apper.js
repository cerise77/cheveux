//var rect = document.getElementsByClassName("product1");

//document.getElementById("product1").onclick = handler;

/*rect.addEventListener("click", function () {
    console.log("fbgfhgfhfh");
});*/

/*$(document).ready(function(){
  $('#product1').on('click', function() {
    console.log("fgfhgfhzszeg");
  }
});*/

/*var MathMax = (a, b) => {
  return Math.max(a,b);
}
export default MathMax;*/

/*var MathMax = (a, b) => {
  return Math.max(a,b);
}*/
//export default rect;


var str ='abcde abcde abcde';
var newArr = [];

var arr = str.split(' ');
for (var i = 0; i < arr.length; i++) {
	newArr.push(ucfirst(arr[i]));
}

var newStr = newArr.join(' ');
console.log(newStr);

function ucfirst(str) {
	return str[0].toUpperCase() + str.substr(1);
}
