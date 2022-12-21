const fs = require('fs');



// ************************* demo ****************** //
// const Book = {
//     title: 'Xyz Title',
//     author: 'Xyz author',
// }
//
// console.log('Book : ', Book);
//
// const bookJson = JSON.stringify(Book);
// console.log('Book json : ', bookJson);
//
// const bookObject = JSON.parse(bookJson);
// console.log('Book object : ', bookObject.title);
//
// // ***** store data in file ***** //
// fs.writeFileSync('notes.json',bookJson);
//
// // ****** read data from file ****** //
// const readData = fs.readFileSync('notes.json');
// const readDataJson = JSON.parse(readData);
// console.log('Read data from file : ',readDataJson.title);



// ********************** practice *******************//

const user = fs.readFileSync('notes.json');
const convertObject = JSON.parse(user);
convertObject.person = "Bansi"
convertObject.age = "19"

fs.writeFileSync('notes.json',JSON.stringify(convertObject));

console.log(convertObject);






