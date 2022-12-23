
const  fs = require('fs');
const  chalk = require('chalk');

const add = function (x, y) {
    return x + y;
}

const subtract = 'substract';

const addNote = (title, body) => {
    const notes = loadNote();

    const dublicateNote = notes.filter((note) => note.title === title);

    if (!dublicateNote) {
        notes.push({
            title: title,
            body: body,
        });
        console.log(chalk.green.bold('Note Add!'))
        saveNote(notes);
    } else {
        console.log(chalk.red.bold('Note already taken!!'))
    }

}

const saveNote = (notes) => {

    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);

}


const removeNote = (title) => {

    const notes = loadNote();
    const getFilterData = notes.filter((note) => note.title !== title);

    if (notes.length > getFilterData.length) {
        console.log(chalk.green.bold('Note remove!'))
        saveNote(getFilterData);
    } else {
        console.log(chalk.red.bold('Note not found!'))
    }

}

const loadNote = () => {
    try {
        const getData = fs.readFileSync('notes.json');
        const convertObject = JSON.parse(getData);
        return convertObject;
    } catch (error) {
        return [];
    }
}

const listNote = () => {
    const listNote = loadNote();

    console.log(chalk.bold.inverse('Your Note'));

    listNote.forEach((note) => {
        console.log('Title =>', note.title, ', Body =>', note.body);
    })
    return listNote;
}

const readNote = (title) => {
    const notes = loadNote();
    const getNote = notes.find((note) => note.title === title);
    if (getNote) {
        console.log(chalk.bold.green('Title :', getNote.title));
        console.log('Body : ', getNote.body);
    } else {
        console.log(chalk.red.bold('note not found'));
    }
}


module.exports = {
    add, subtract, addNote, removeNote, listNote, readNote
}




    
