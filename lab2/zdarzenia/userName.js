//Stworzyć własny obiekt użytkownik i zaimplementować w nim zdarzenie przy  zmianie imienia, które wyświetla informacje o osobie (na 5).

class User {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.name} ${this.lastName}`;
    }
}

const handler = {
    get(obj, key) {
        return obj[key]
    },
    set(obj, key, value) {
        console.log(`Zmiana ${key} z ${obj[key]} na ${value}`);
        obj[key] = value;
    }
}

const user = new User('Jan', 'Kowalski');
const userWithProxy = new Proxy(user, handler);

userWithProxy.name = 'Adam';
userWithProxy.lastName = 'Nowak';