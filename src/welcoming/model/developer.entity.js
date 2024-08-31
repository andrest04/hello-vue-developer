export class Developer { // va a ser una clase
    firstName;
    lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // getters

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}