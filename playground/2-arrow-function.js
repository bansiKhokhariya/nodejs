

const Square = (x) => {
    return x * x;
}
console.log(Square(7));


const item = {
    name: 'Bansi',
    guestName: ['neha', 'manthan', 'harsh', 'komal'],
    invite() {
        console.log(this.name);
        this.guestName.forEach((guest) => {
            console.log(this.name + ' called this ' + guest + ' in the party')
        });

    }
}

item.invite();



