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
var logger = {
	timestamp: true,
	getTime: ()=>{
		return logger.timestamp ? 
			`<span style='color: #777'>[${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}.${new Date().getMilliseconds()}]</span>` : 
			``
	},
	log: (txt, data = {type: 'Text'})=>{
		if(data.type == 'Image') logger.elem.innerHTML += `${logger.getTime()} <span style='color: #333'>${data.label}</span><br/><span style='color: #333'>${txt}</span><br/>`;
		else logger.elem.innerHTML += `${logger.getTime()} <span style='color: #333'>${txt}</span><br/>`
	},
	success: (txt)=>{
		logger.elem.innerHTML += `${logger.getTime()} <span style='color: #1B2'>${txt}</span><br/>`
	},
	warn: (txt)=>{
		logger.elem.innerHTML += `${logger.getTime()} <span style='color: #BB2'>${txt}</span><br/>`
	},
	err: (txt)=>{
		logger.elem.innerHTML += `${logger.getTime()} <span style='color: #B11'>${txt}</span><br/>`
	},
	clear: (txt)=>{
		logger.elem.innerHTML = '';
	},
	elem: document.body.appendChild(document.createElement('div')),
};
logger.elem.id = 'logger';	