function changeParagraphContent() {
    if (clicked === undefined) {
        document.getElementById("my-paragraph-id").innerHTML = "test is changeed";
        clicked = true
    } else if (clicked === true) {
        document.getElementById("my-paragraph-id").outerHTML = "<b> </b>"
        document.getElementById("my-paragraph-id").innerHTML = "test is changeed true";
        clicked = false;
        document.getElementById("my-button").className = "btn-danger";
    } else {
        document.getElementById("my-paragraph-id").innerHTML = "test is  not changeed false";
        clicked = true;
        document.getElementById("my-button").className = "btn-primary";
    }
}

// import { User, dynamicData } from 'static-data.js';

// var dynamicData = [
//     new User("1", "Abhishek", "Shrivastava", "22", "male"),
//     new User("2", "Sunny", "Shrivastava", "22", "male"),
//     new User("3", "Rashmi", "Shrivastava", "24", "female"),
//     new User("4", "Shalini", "Shrivastava", "46", "female"),
//     new User("5", "Ashwin", "Shrivastava", "54", "male"),
// ]

function User(id, firstName, lastName, gender, age) {
    let i;
    let _id = id;
    let _firstName = firstName;
    let _lastName = lastName;
    let _age = age;
    let _gender = gender;
    var user = {}
    user.__proto__.getId = function() {
        if (i == undefined) {
            i = 0;
        }
        console.log(i++);
        return _id;
    }
    user.__proto__.getName = function() {
        return _firstName;
    }
    return user;
}

var user = new User(1, "Abhishek", "Shrivastava", "male", 22);

// console.log(dynamicData[0]);
// var user = new User(1, "Abhishek", "Shrivastava", "male", 22);



// console.log(user);

// var vm = this;
// vm.User = function() {
//     this.console.log('123')

// }
// vm.User.getId

// dynamicData.forEach(x => console.log(X));

// dynamicData.forEach(element => {
//     console.log(x);
// });

// dynamicData.forEach(function(element) {
//     console.log(element.getId());
// });