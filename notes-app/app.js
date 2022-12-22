import {add, subtract, addNote, removeNote, listNote, readNote} from './note.js'
import chalk from 'chalk';
import validator from 'validator';
import _yargs from 'yargs';
import {hideBin} from 'yargs/helpers';


// console.log(add(4, 4));
// console.log(subtract);
// console.log(validator.isEmail('google@gmail.com'));
// console.log(chalk.blue('Hello world!'));
// console.log(chalk.blue.bgRed.bold('Hello world!'));
// console.log(chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold('with a blue substring') +
// 	' that becomes green again!'
// ));
// console.log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);


const command = process.argv[2];
// console.log(process.argv)
const yargs = _yargs(hideBin(process.argv))
// console.log(yargs.argv);


// ******* command line argument *********** //
// if(command == 'add'){
//     console.log(process.argv);
//     console.log('your notes is add');
// }else if(command == 'remove'){
//     console.log('your notes is remove');
// }


//******* customize  yargs version ********* //
yargs.version('1.1.0');


// ********* create add command *********//
yargs.command({
    command: "add",
    describe: "Add a new Note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: "string",
        }
    },
    handler: function (argv) {
        addNote(argv.title, argv.body);
    }
});

// *********  remove command *********//
yargs.command({
    command: "remove",
    describe: "Remove Note",
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (argv) {
        removeNote(argv.title);
    }
});


// ********* list command *********//
yargs.command({
    command: "list",
    describe: "List Note",
    handler: function () {
        listNote();
    }
});


// ********* read command *********//
yargs.command({
    command: "read",
    describe: "read Note",
    bulider: {
        title: {
            demandOption: true,
            type: 'string',
            describe: 'Note Title',
        }
    },
    handler: function (argv) {
        readNote(argv.title);
    }
});

yargs.parse();





