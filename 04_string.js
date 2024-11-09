const name = "aman"
const repoCount = 70

//console.log(name + repoCount +"Value");
// use of bectics

console.log(' hello my name is ${name} amd my repo count is ${repoCount}');

const gameName = new String('Aman-singh-com')

//console.log(gameName[0]);
//console.log(gameName.__proto__);// find object

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); // findex charAt index
console.log(gameName.indexOf('n'));// index postion char

/// 

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-2,3)
console.log(anotherString)

//const newStringone = "  Aman  "
//console.log(newStringone);
//console.log(newStringone.trim()); // space ko rmove ker deta hai

const url = "https://aman.com/aman%20singh"// url mein kuch bhe add kerna ho ya replace

console .log (url.replace('%20','-'));

console.log(url.includes('gurjar')); // check kerta hai string ya hai ya nhi

console.log(gameName.split('-'));

