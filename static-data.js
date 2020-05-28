var dynamicData = [
    new User("1", "Abhishek", "Shrivastava", "22", "male"),
    new User("2", "Sunny", "Shrivastava", "22", "male"),
    new User("3", "Rashmi", "Shrivastava", "24", "female"),
    new User("4", "Shalini", "Shrivastava", "46", "female"),
    new User("5", "Ashwin", "Shrivastava", "54", "male"),
]

function User(id, firstName, lastName, gender, age) {
    let _id = id;
    let _firstName = firstName;
    let _lastName = lastName;
    let _age = age;
    let _gender = gender;

    getId = function() {
        return _id;
    };

    getFirstName = function() {
        return _firstName;
    };

    getLastName = function() {
        return _lastName;
    };

    getAge = function() {
        return _age;
    };

    getGender = function() {
        return _gender;
    };
}

// dynamicData.forEach(x => console.log(X));

// dynamicData.forEach(element => {
//     console.log(x);
// });