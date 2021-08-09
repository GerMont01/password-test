var str = 'ABC%a,BC/2'
var pattern = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*.;,/()]{6,20}$/;

var res = str.match( pattern );
if(res){
	console.log("Valid password");
}else{
	console.log("Not a valid password");
}
