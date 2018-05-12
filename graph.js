Math.graphLine = function graphLine(equation, w, h) {
	logger.log("Graphing line " + equation);
	var ys = [];
	for(var x = 0; x < w; x++) {
		var y = 0;
		eval(equation);
		ys.push(y);
	};
	var tr1 = `<tr>`;
	var tr2 = `<tr>`;
	for(var i in ys) {
		tr1 += `<td>${i}</td>`;
		tr2 += `<td>${Math.floor(ys[i]*10)/10}</td>`
	};
	tr1 += `</tr>`;
	tr2 += `</tr>`;
	var table = `<table>${tr1}${tr2}</table>`
	logger.success(table);
	var canvas = document.createElement('canvas');
	canvas.width = 161;
	canvas.height = 161;
	var cs = (canvas.width-1)/(w*2);
	var rs = (canvas.height-1)/(h*2);
	for(var x = 1; x < h+h+cs+1; x+=cs) {
		canvas.getContext('2d').fillRect(0, x - 1, canvas.width, 1);
	};
	for(var x = 1; x < w+w+rs+1; x+=rs) {
		canvas.getContext('2d').fillRect(x - 1, 0, 1, canvas.height);
	};
	canvas.getContext('2d').fillRect(w*rs-1, 0, 2, canvas.height);
	canvas.getContext('2d').fillRect(0, h*cs-1, canvas.width, 2);
	var x = -10;
	var y = 0;
	eval(equation);
	canvas.getContext('2d').moveTo(x, y);
	for(var x = -w; x < 2*w+1; x+=0.25) {
		var y = 0;
		eval(equation);
		canvas.getContext('2d').lineTo(canvas.width/2+x*rs, canvas.height/2-y*cs);
	};
	for(var x = 2*w+1-0.125; x > -w-0.125; x-=0.25) {
		var y = 0;
		eval(equation);
		canvas.getContext('2d').lineTo(canvas.width/2+x*rs, canvas.height/2-y*cs);
	};
	canvas.getContext('2d').lineWidth = 3;
	canvas.getContext('2d').stroke();
	logger.log(`<img src="${canvas.toDataURL()}"></img>`, {'type': 'Image', 'label': "Graph:"});
};
