const fs = require("fs");

function validar() {
  var sonho = document.getElementById("sonho");
  var adress = document.getElementById("adress");

  if (sonho.value == "") {
    alert("preencha o campo");
    sonho.focus();
    return false;
  } else { 
    alert("tudo certo colega")
  }
  
}

var http = require('http');
http.createServer(function (req, res) {
  fs.readFile('form.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

fs.appendFile('json', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Salvo');
});

