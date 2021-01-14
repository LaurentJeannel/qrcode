exports.action = function(data){

var path	= require	('path')
//var request = require('request');
var spawn = require('child_process').spawn;

var ahk = spawn(path.resolve('%CD%', './plugins/qrcode/zbar/bin/zbarcam.exe').replace('\\%CD%', ''));

ahk.stdout.on('data', (dataQRCode) => {
	dataQRCode=dataQRCode.toString() ; dataQRCode=dataQRCode.replace('QR-Code:','')
	
	console.log(dataQRCode)
TraitementQRCode(dataQRCode)

})


var TraitementQRCode=function(dataQRCode){

	if(dataQRCode.search('http')>-1){console.log('url')
//go to http....
}
		
}








}