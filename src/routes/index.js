const fs = require('fs');

const filename = 'data/orders';

module.exports = function(app) {
  app.get('/list', function (req, res) {
    fs.readFile( filename, 'utf8', function (err,data) {
      if (err) {
        console.log('something went wrong ' + err);
      } else {
        res.send(data);
      }
    });
  });

  app.post('/order', function (req, res) {
    console.log(req.body);

    var data = req.body.firstname + ',' +
    req.body.email + ',' +
    req.body.size + ',' +
    req.body.style + ',' +
    req.body.type + ',' +
    req.body.toppings + '\n';

    fs.appendFile(filename, data, function (err) {
      if (err) {
        console.log('something went wrong ' + err);
      }
    });

    res.status(204);
    res.send('written');
  });
}
