Math.quadratic = function quadratic(equ){
	equ = equ.replace(/ /gi, '').replace(/=0/gi, "");
	var a = equ.split("x^2")[0];
	if(a == '') a = "1";
	var b = equ.split('x^2')[1].split('x')[0];
	var c = equ.split(/x/)[2].split('=')[0];
	logger.log('Step 1} a = '+a)
	logger.log('Step 2} b = '+b)
	logger.log('Step 3} c = '+c)
	var base_equation_string = `(-${b} &plusmn; &radic;(${b}^2 - 4(${a})(${c}))) / (2*${a})`.replace(/--/gi, '+').replace(/(\+\-|\-\+)/gi, '-')//.replace(/);
	var base_equation_formula = [
		`(-${b} - Math.sqrt(Math.pow(${b}, 2) - 4*${a}*${c})) / (2*${a})`.replace(/--/gi, '+').replace(/(\+\-|\-\+)/gi, '-'),
		`(-${b} + Math.sqrt(Math.pow(${b}, 2) - 4*${a}*${c})) / (2*${a})`.replace(/--/gi, '+').replace(/(\+\-|\-\+)/gi, '-')
	];
	logger.log("Step 4} " + base_equation_string);
	logger.log("Step 5} " + (eval(base_equation_formula[0]) * (2*a)) + " / 2("+a+")");
	logger.log("Step 6} x = " + eval(base_equation_formula[0]));
	logger.log("Step 7} " + (eval(base_equation_formula[1]) * (2*a)) + " / 2("+a+")");
	logger.log("Step 8} x = " + eval(base_equation_formula[1]));
	logger.success(`x = ${eval(base_equation_formula[0])}`);
	logger.success(`x = ${eval(base_equation_formula[1])}`);
	logger.success("Done!")
};
