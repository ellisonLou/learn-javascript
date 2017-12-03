path = require('path');
fs = require('fs');

function sendFile() {
    var filePath = path.join(__dirname, "11.pdf");
    var readStream = fs.createReadStream(filePath);
    var data = {
      msg: ""
    }
    readStream.on('data', function (chunk) {
        data.msg = chunk;
        console.log('data.msg-->', data);
    });
}

sendFile();