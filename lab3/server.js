var connect = require('connect');

var url = require('url');

var lab3 = connect();

var calculator = function(req, res, next) {
    var qs = url.parse(req.url, true).query;

    var method = qs.method;
    var x = qs.x;
    var y = qs.y;
    var mOperator;

    if (method === 'add') {
        mOperator = '+';
    } else if (method === 'subtract') {
        mOperator = '-';
    } else if (method === 'multiply') {
        mOperator = '*';
    } else if (method === 'divide') {
        mOperator = '/';
    } else {
        console.log('Method Error!');
    }

    var sum = x + mOperator + y;
    sum = eval(sum);
    var output = x + ' ' + mOperator +' ' + y + ' = ' + sum;

    res.writeHead(200, {
        'Content-Type' : 'text-plain'
    });

    res.write('Output: ' + output);

    res.end();
};

lab3.use('/lab3', calculator);
lab3.listen(3000);
console.log('Connect app running at http://localhost:3000');