console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

console.log(_.isString(true));
console.log(_.isString('Clément'));

var filterArray = _.uniq(['Mike',1, 'Clement', 1, 2, 3, 4]);
console.log(filterArray);

/*var resultNotes = notes.addNote();
var resultAdd = notes.add(8, 10);

console.log(resultNotes);
console.log(resultAdd);*/



/*var user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function(err){
    if(err){
        console.log('Unable to write to file');
    }
});*/
