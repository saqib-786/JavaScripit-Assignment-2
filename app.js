// Task one code goes here

// function closure(num1){
//     return function(num2){
//         console.log(num1 + num2);

//     };
// };

// let innerFunction = closure(5);
// innerFunction(5);

// task two code goes here

// let mobileList = ['iphon','Nokia','Samsung','Oppo','Vivo','Realme','Infinix','LG'];



// function recursive(arry,value){
//    if(arry.length === 0){
//     return false
//    };

//    if(arry[0] === value){
//     return true
//    }
//    return recursive(arry.slice(1),value)

// }


// console.log(
// recursive(mobileList,'Nokia')

// );


// task three code goes here

// function addPara(para){
//     let element = document.getElementById('para');
//     element.innerHTML = para

// }

// addPara('HTML is Markup Language for creating Web pages or websites HTML for Hyper Text Markup Language');

// Task four code goes here

// function addListItem(item){
//     let list = document.getElementById('list');
//     let li = document.createElement('li');
//     let text = document.createTextNode(item);
//     li.append(text);
//     list.append(li)

    


// }

// addListItem('Hello');
// addListItem('How are you');
// addListItem('I am fine');

//task five code goes here

// let heading = document.getElementById('heading');
// let para = document.getElementById('para');

// function changeColor(element,color){
//     element.style.backgroundColor = color


// }

// changeColor(heading,'red')


// task six code goes here

// let obj = {
//     name:'John Wick',
//     age: 30,
//     Profession: 'assassinator'
// }

// function localStore(key,item){
//     item = JSON.stringify(item)
// localStorage.setItem(key,item)
// }
// localStore(1,obj);

// task 7 code goes here

// function retriveData(key){
// let data =localStorage.getItem(key);
// let obj = JSON.parse(data);
// return obj;

// }

// let result = retriveData(1);

// console.log(result)

// task 8 code goes here

// let student = {
//     name: 'Adil',
//     gender: 'Male',
//     course: 'JavaScript',
//     contact: 031234574,
//     city: 'Hyderabad',
// }

// function saveObject(obj){
//     localStorage.setItem('name',obj.name);
//     localStorage.setItem('gender',obj.gender);
//     localStorage.setItem('course',obj.course);
//     localStorage.setItem('contact',obj.contact);
//     localStorage.setItem('city',obj.city);
//     let name = localStorage.getItem('name');
//     let gender = localStorage.getItem('gender');
//     let course = localStorage.getItem('course');
//     let contact= localStorage.getItem('contact');
//     let city = localStorage.getItem('city');

//     let newStudent = {
//         name: name,
//         gender: gender,
//         course:course,
//         contact: contact,
//         city: city
//     }
//     return newStudent;
// }

// let result = saveObject(student);

// console.log(result)

// console.log(localStorage)