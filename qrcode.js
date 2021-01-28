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

	if(dataQRCode.search('http')>-1){console.log('url ')
	
		//go to http jarvis
		if(dataQRCode.search('4300')>-1){
		var request = require('request');
			request({ uri : dataQRCode },  (err, response, body)=> {console.log(err)})
		}
		//go to http internet
		else{
			var exec = require('child_process').exec;
				var proc = 'start chrome.exe '+dataQRCode
				var child = exec(proc, function (error, stdout, stderr) {	
				if (error !== null) console.log('exec error: ' + error);
			});		
		}

	}
return		
}
}