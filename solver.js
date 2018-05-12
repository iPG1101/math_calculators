document.body.style.fontSize = '200%'
Date.prototype._getMilliseconds = Date.prototype.getMilliseconds;
Date.prototype.getMilliseconds = (function getMilliseconds(){
	var a = this._getMilliseconds();
	if(a < 10) return "00"+a;
	if(a < 100) return "0"+a;
	if(a < 1000) return a;
});
Date.prototype._getSeconds = Date.prototype.getSeconds;
Date.prototype.getSeconds = (function getSeconds(){
	var a = this._getSeconds();
	if(a < 10) return "0"+a;
	return a;
});
Date.prototype._getMinutes = Date.prototype.getMinutes;
Date.prototype.getMinutes = (function getMinutes(){
	var a = this._getMinutes();
	if(a < 10) return "0"+a;
	return a;
});
Date.prototype._getHours = Date.prototype.getHours;
Date.prototype.getHours = (function getHours(){
	var a = this._getHours();
	if(a < 10) return "0"+a;
	return a;
});
var log = {
	log: (txt)=>{
		log.elem.innerHTML += `<span style='color: #777'>[${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}.${new Date().getMilliseconds()}]</span> <span style='color: #333'>${txt}</span><br/>`
	},
	success: (txt)=>{
		log.elem.innerHTML += `<span style='color: #777'>[${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}.${new Date().getMilliseconds()}]</span> <span style='color: #1B2'>${txt}</span><br/>`
	},
	warn: (txt)=>{
		log.elem.innerHTML += `<span style='color: #777'>[${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}.${new Date().getMilliseconds()}]</span> <span style='color: #BB2'>${txt}</span><br/>`
	},
	err: (txt)=>{
		log.elem.innerHTML += `<span style='color: #777'>[${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}.${new Date().getMilliseconds()}]</span> <span style='color: #B11'>${txt}</span><br/>`
	},
	clear: (txt)=>{
		log.elem.innerHTML = '';
	},
	elem: document.body.appendChild(document.createElement('div')),
};
function equate(equ){
	equ = equ.replace(/ /gi, '')
	var a = equ.split("x^2")[0];
	if(a == '') a = "1";
	var b = equ.split('x^2')[1].split('x')[0];
	var c = equ.split(/x/)[2].split('=')[0];
	log.log('Step 1} a = '+a)
	log.log('Step 2} b = '+b)
	log.log('Step 3} c = '+c)
	var base_equation_string = `(-${b} &plusmn; &radic;(${b}^2 - 4(${a})(${c}))) / (2*${a})`.replace(/--/gi, '+').replace(/(\+\-|\-\+)/gi, '-')//.replace(/);
	var base_equation_formula = [
		`(-${b} - Math.sqrt(Math.pow(${b}, 2) - 4*${a}*${c})) / (2*${a})`.replace(/--/gi, '+').replace(/(\+\-|\-\+)/gi, '-'),
		`(-${b} + Math.sqrt(Math.pow(${b}, 2) - 4*${a}*${c})) / (2*${a})`.replace(/--/gi, '+').replace(/(\+\-|\-\+)/gi, '-')
	];
	log.log("Step 4} " + base_equation_string);
	log.log("Step 5} " + (eval(base_equation_formula[0]) * (2*a)) + " / 2("+a+")");
	log.log("Step 6} x = " + eval(base_equation_formula[0]));
	log.log("Step 7} " + (eval(base_equation_formula[1]) * (2*a)) + " / 2("+a+")");
	log.log("Step 8} x = " + eval(base_equation_formula[1]));
	log.success(`x = ${eval(base_equation_formula[0])}`);
	log.success(`x = ${eval(base_equation_formula[1])}`);
	log.success(" &zwj; Done!")
};
var clicky_button = document.createElement('button');
clicky_button.innerText = "If it bleeds, we can kill it."
clicky_button.onclick = ()=>{
	equate(prompt("ax^2+bx+c", "x^2 + 5x - 104"));
};
setInterval(()=>{
	if(Math.random()<0.05) clicky_button.innerText = "If it bleeds, we can kill it."
		else {
			clicky_button.innerText = "Evaluate Equation"
		}
},500);
document.body.appendChild(clicky_button);
clicky_button.style.position = 'absolute';
clicky_button.style.right = '64px';
clicky_button.style.top = '64px';