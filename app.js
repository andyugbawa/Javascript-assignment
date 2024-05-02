
// function extractNames(fullName) {
//     // Split the string based on capital letters
//     let parts = fullName.match(/[A-Z][a-z]*/g);

//     // If there are less than two parts, return null
//     if (parts.length < 2) {
//         return null;
//     }

//     // Extract first and last names
//     let firstName = parts[0];
//     let lastName = parts[parts.length - 1];

//     // Capitalize the first letter of first name
//     firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

//     return [firstName, lastName];
// }

// console.log(extractNames(myNameString)); // Output: ['Manos', 'Akpujiha']




let myNameString = 'manosAkpujiha';

function name(){
  
const pole = myNameString.slice(0,5)

const pile= myNameString.slice(5,16)
  return `${pole},${pile}`

}
console.log(name())




// 2. Write the reverse of the function above that takes several strings and returns a single string with all the names seperated by dashes ('-').

let firstName =  'Andy';
let middleName = 'Aweriarwe';
let lastName = 'Ugbawa';

function names (firstName,middleName,lastName){
  return `${firstName}-${middleName}-${lastName}`
}

console.log(names(firstName,middleName,lastName))
// e.g.
// console.log(names(firstName, middleName, lastName)) = 'andy-aweriarwe-ugbawa'


// 3. write a function that takes an array, reverses it and returns a string which has all the items in the reversed array as a string with '&' seperating all the fruitnames.

let fruits = ['orange', 'apple', 'banana', 'pawpaw', 'pear'];
 
function reverseArray (andy){
  
  return andy.reverse().join("&")
}

console.log(reverseArray(fruits))
// e.g.
// console.log(reverseArray(fruits)) = 'pear&pawpaw&banana&apple&orange'

    let personOne = {
      firstName: 'andy',
      lastName: 'ugbawa',
      age: 40,
      stateOfOrigin: 'Delta'
  };

   const p =document.querySelector("p")

   p.setAttribute("firstname","andy")
   p.setAttribute("lastname","ugbawa")
   p.setAttribute("age",40)
   p.setAttribute("stateoforigin","Delta")
   document.body.appendChild(p)

   function createAtr(firstname,lastname,age,stateoforigin){
    return `${firstname} ${lastname}${age}${stateoforigin}`

   }

   createAtr(personOne)
  // Using javascript, append a paragph element to your Html Page then use the key and value pairs in the above personOne object to create attributes and their values in the paragraph element.
  
  // e.g.
  // <p frist-name: 'andy' last-name: 'ugbawa' age: 40 state-of-origin: 'delta'>
  function profile(){
  
  let P = document.querySelector("p")
  let firstNameT =P.getAttribute('firstname')
  let lastNameT =P.getAttribute('lastname')
  let stateOfOrigin=P.getAttribute('stateoforigin')
  let newArray = [firstNameT,lastNameT,stateOfOrigin];
  return newArray

}

console.log(profile())

