import fs from 'fs';
import chalk from "chalk";

const add = function (x, y) {
    return x + y;
}

const subtract = 'substract';

const addNote = function (title, body) {
    const notes = loadNote();
    const dublicateNote = notes.filter(function (note) {
        return note.title === title;
    });
    // console.log(dublicateNote);
    notes.push({
        title: title,
        body: body,
    });

    console.log(chalk.green.bold('Note Add!'))
    saveNote(notes);

}

const saveNote = function (notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}


const removeNote = function (title) {

    const notes = loadNote();
    const getFilterData = notes.filter(function (note) {
        return note.title !== title;
    });

    if(notes.length > getFilterData.length){
        console.log(chalk.green.bold('Note remove!'))
        saveNote(getFilterData);
    }else{
        console.log(chalk.red.bold('Note not found!'))
    }




}

const loadNote = function () {
    try {
        const getData = fs.readFileSync('notes.json');
        const convertObject = JSON.parse(getData);
        return convertObject;
    } catch (error) {
        return [];
    }
}

export {add, subtract, addNote, removeNote}


    
