Math.distance = function distance(point1, point2) {
	point1 = point1.replace(/(\(|\)| )/gi, "").split(',');
	point2 = point2.replace(/(\(|\)| )/gi, "").split(',');
	point1 = {x: point1[0], y: point1[1]};
	point2 = {x: point2[0], y: point2[1]};
	logger.log(`Step 1} Point A(${point1.x}, ${point1.y})`);
	logger.log(`Step 2} Point B(${point2.x}, ${point2.y})`);
	logger.log(`Step 3} (x2 - x1) = (${point2.x - point1.x})`);
	logger.log(`Step 4} (${point2.x - point1.x})^2 = ${Math.pow(point2.x - point1.x, 2)}`);
	logger.log(`Step 5} (y2 - y1) = (${point2.y - point1.y})`);
	logger.log(`Step 6} (${point2.y - point1.y})^2 = ${Math.pow(point2.y - point1.y, 2)}`);
	logger.log(`Step 7} (${Math.pow(point2.x - point1.x, 2)} + ${Math.pow(point2.y - point1.y, 2)}) = ${Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)}`);
	logger.log(`Step 8} &radic;(${Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)}) = ${Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2))}`);
	logger.success(`d = ${Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2))}`)
};