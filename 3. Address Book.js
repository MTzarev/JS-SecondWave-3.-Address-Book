function adressBook(arr) {
    let adressObject = {}
    for (let line of arr) {
        let [name, adress] = line.split(`:`)
        adressObject[name] = adress;
    }
    let sorted = [];
    for (let name in adressObject) {
        sorted.push(`${name} -> ${adressObject[name]}`);
    }
    console.log(sorted.sort().join(`\n`));
}
adressBook(['Bob:Huxley Rd',

    'John:Milwaukee Crossing',

    'Peter:Fordem Ave',

    'Bob:Redwing Ave',

    'George:Mesta Crossing',

    'Ted:Gateway Way',

    'Bill:Gateway Way',

    'John:Grover Rd',

    'Peter:Huxley Rd',

    'Jeff:Gateway Way',

    'Jeff:Huxley Rd']);