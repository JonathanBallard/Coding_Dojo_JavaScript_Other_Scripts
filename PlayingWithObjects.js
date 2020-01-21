


var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];


console.log(users[2].age);
console.log(users[0].name)

users.forEach(element =>{console.log(element.name + " " + element.age)});

for(let i in users) {
    users[i].name = "Peter";
}


console.log(users);
var string = "Hello World";
for (let character in string){
    if(string[character] != "l"){
        console.log("not L");
    }
    else {
        console.log("L");
    }
}

console.log(string);



