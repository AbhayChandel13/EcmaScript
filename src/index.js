/* var x=10;
  if(x)
  {
  x=4 
  }
  console.log(x);

*/
/*  
  var x=10;
  if(x)
  {
   let x=4 
  }
  console.log(x);
  */

/*
for (let i = 0; i < 60; i++)
 {
  var div = document.createElement('div');
  div.onclick = function() {
    alert("you clicked on a box #" + i);
  };
  document.getElementsByTagName('section')[0].appendChild(div);
}
 */
/*
const birthyear=2000;
var age=2021-birthyear;
console.log(age);
*/
/*
const birthyear=2000;
var birthyear=2005;
var age=2021-birthyear;
console.log(age);
*/

//Example of const Keyword;

/*
function coldEnough(deg){
  const freezingTemp=32;
  if(freezingTemp<=deg)
  {
    return deg+  "is above Freezing Temperature";
  }
  else
  {
    return deg + " is below freezing Temprature";
  }
  
}
console.log(coldEnough(40));
console.log(coldEnough(12));
console.log(coldEnough(-10));

*/
//Template String example:

/*

function createEmail(firstName,PurchasePrice)
{
  var shipping=5.95;
  console.log(`Hi ${firstName},Thanks for buying from us !!
                                Total:         Rs.${PurchasePrice}
                                Shipping Price:Rs.${shipping}
                                Grand Total:   Rs.${PurchasePrice+shipping};`);

}
createEmail("Abhay",100);

*/

//SPREAD OPERATOR ::-->
/*
var cats=["billi","cat2","cat3"];
var dogs=["dog1","dog2","dog3"];

var animals=["Whale","Buffalo","cow","Ox"];
var animals=["Whale","Buffalo",...cats,"cow","Ox",...dogs];

console.log(animals);

*/

//Map in ES6 :--

/*
var course=new Map();
course.set('react',{description:'ui'});
course.set('test',{description:'testing'});

console.log(course);
//console.log(course.react);// it will show an error "undifined".
console.log(course.get('react'));

*/

/*
var details=new Map([[new Date(),'today'],['items',[1,2]]]);
console.log(details.size);

details.forEach(function(items){
  console.log(items);
})

console.log(details);

*/

//SETS in Es6 :-->
/*
var books=new Set();
books.add('Pride & Prejudice');
books.add('war & Peace');
books.add('Oliver Twist');
   
console.log(books);   
//console.log("How Many Books",books.size);
//console.log("Has Oliver Twist ",books.has('Oliver Twist'));
books.delete('war & Peace');
console.log("How Many Books",books.size);
console.log("Has war & Peace ",books.has('war & Peace'));

*/
/*
 var data=[1,2,1,4,5,6,2,8,4,10];
 var set=new Set(data);
 console.log("Data Length",data.length);
 console.log("Set Size",set.size);

 */

//For of loop:--->
/*
 for (let letter of 'Javascript'){
   console.log(letter);
 }

 var topics=['Javascript','Node','React'];
 for(let topic of topics){
   console.log(topic);
 }

 */

//Function and Objects :--->

/*
function add(x=5,y=5){
  console.log(x+y);
}
add();
add(10,5);  //It will overwrite the values of X and Y and give sum accordingly;


*/

/*
function haveFun(activityName="Running",time=3)
{
  
console.log(`Today I will go on ${activityName} for ${time} hours`);
}
haveFun();
haveFun("hiking",4);

*/
/*
const spacePeople = () => {
  return new Promise((resolves, rejects) => {
      const api = 'http://api.open-notify.org/astros.json';
      const request = new XMLHttpRequest();
      request.open('GET', api);
      request.onload = () => {
          if(request.status === 200) {
              resolves(JSON.parse(request.response));
          } else {
              rejects(Error(request.statusText));
          }
      };
      request.onerror = err => rejects(err);
      request.send();
  });
};

spacePeople().then(
  spaceData => console.log(spaceData),
  err => console.error(
      new Error('Cannot load space people')
  )
);
*/
//console.log(cannot oad space people)
//console.log(cannot oad space people)
const getPeopleInSpace = () =>
  fetch("http://api.open-notify.org/astros.json").then((res) => res.json());

const spaceNames = () =>
  getPeopleInSpace()
    .then((json) => json.people)
    .then((people) => people.map((p) => p.name))
    .then((names) => names.join(", "));

spaceNames().then(console.log);
