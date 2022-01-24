//To see Output on the Terminal Use Command = node .\src\practicemainfeatures.js

const people=
[
    {id:1,name:'Abhay'},
    {id:2,name:'Aman'},
    {id:3,name:'Swati'}

];
const people2=people.filter(person=>person.id!==3);
console.log(people2);

const arr=[1,2,3];
const arr2=[...arr,4,5];  //This is spread operator which add 4&5 to the array='arr'.
console .log(arr2);

const people3=[...people2,{id:3,name:'Swati_Chandel'}];
console.log(people3);

const arr3=[arr,4]; //This will create array inside array 
console.log(arr3);

//DESTRUCTURING :--->

const profile=
{
    name:'Sidhu',
    Address:{street:'#31',city:'CHD'},    
    Hobbies:['movies','running'] 
}



//const{name}=profile;
//console.log(name);

const{name,Address,Hobbies}=profile;
console.log(name,Address,Hobbies[0]);
console.log(name,Address.city);
const{city}=Address.city;

