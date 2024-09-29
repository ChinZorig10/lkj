// massive -> [] olon utga zereg hadaglana
var toonuud = [37,98,83,987,34,13,954,]
console.log(toonuud)
// index -> elementiin bairshil. 0-eesehelne
console.log(toonuud[0]);
console.log(toonuud[toonuud.length-1])
// for
for(var i=0; i<=toonuud.length-1;i++){
	console.log(toonuud[i])
}
var bodlogo = [1,2,3,4,5];
console.log(bodlogo)
console.log(bodlogo[0]*bodlogo[bodlogo.length-1]);
for(var i=0; i<=bodlogo.length-1;i++){
	console.log(bodlogo[i])
}
for(var i=1; i<=5;i++){
	if(i%2==0){
	console.log("tegsh"+i);
	}else if(i%2==1){
	console.log("sondgoi"+i);
	}
}
var num = [1,2,3,4,5,6,7,8,9,10]
var niilber = 0;
var urjver = 1;
for(var i=0; i<=9; i++){
	niilber = niilber+num[i];
	urjver = urjver*num[i];
}
console.log(niilber);
console.log(urjver);

var body = document.getElementsByTagName("body")[0];
var colors = ['blue','green','red','aqua','orange','white','black']
var i=-1;
function change(){
	i++;
	if(i>6){
		i=0;
	}
	body.style.backgroundColor=colors[i];
}
function butsah(){
	i--;
	if(i<0){
		i=colors.length-1;
	}
	body.style.backgroundColor=colors[i];
}
var s;
var autoBtn = document.querySelector('.auto')
var stopBtn = document.querySelector('.stop')
function auto(){
	i++;
	if(i>4){
		i=0;
	}
	body.style.backgroundColor=colors[i];
	s=setTimeout(auto,500)
	autoBtn.disabled = true;
	stopBtn.disabled = false;	
}
function stop(){
	clearTimeout(s);
	autoBtn.disabled = false;
	stopBtn.disabled = true;	
}