Math.symmetry = function symmetry(sides) {
	logger.log(`** A regular polygon with <i>n</i> sides always has <i>n</i> lines of symmetry.`);
	var t = sides + 'gon';
	if(sides == 3) {
		t = 'triangle';
	} else if(sides == 4) {
		t = 'quadrilateral (square)';
	} else if(sides == 5) {
		t = 'pentagon';
	} else if(sides == 6) {
		t = 'hexagon';
	} else if(sides == 7) {
		t = 'heptagon (septagon)';
	} else if(sides == 8) {
		t = 'octagon';
	} else if(sides == 9) {
		t = 'nonagon';
	} else if(sides == 10) {
		t = 'decagon';
	} else if(sides == 12) {
		t = 'dodecagon';
	};
	logger.log("A regular " + t + " has " + sides + " sides, so it would have " + sides + " lines of symmetry.");
	logger.success(`sides (${sides}) = ${sides} lines of symmetry for a ${t}`);
};
