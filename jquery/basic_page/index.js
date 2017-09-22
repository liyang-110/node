var jade=require('jade');
var fn=jade.compileFile('test.jade');

var html=fn();
console.log(html);
