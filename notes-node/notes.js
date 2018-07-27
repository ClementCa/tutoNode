console.log('Strating notes.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
    return 'New note';
};

var getAll = () => {
 console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
    console.log('Removing note', title);
};

module.exports = {addNote, getAll, getNote, removeNote};