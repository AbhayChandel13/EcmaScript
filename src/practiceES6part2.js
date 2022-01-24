/*
var say={
    one:function (times){
        console.log(Array(times+1).join("Abhay,"));
    },
    two:function(times){
        console.log(Array(times+1).join("John,"));
    },
    three:function(times){
        console.log(Array(times+1).join("Simmon,"));
    }
};
say.one(3);
say.two(4);
say.three(5);


//another way of above code Without using Array:--

var call={
    first:function (times){
        console.log("First,".repeat(times));
    },
   first:function(times){
        console.log("Second,".repeat(times));
    },
    third:function(times){
        console.log("Third,".repeat(times));
    }
};
call.first(3);
call.first(4);
call.third(5);

*/

//Arrow Function:--->

/*
var studentlist=(student)=>console.log(student);
studentlist(["Abhay","Chandel","Subham"]);


//We can remove() argument as well, It'll do the same as above :
var studentlist=student=>console.log(student);
studentlist(["Abhay","Chandel","Subham"]);

*/
/*
var person={
    first:"Abhay",
    actions:["Bike",'hike',"ski",'surfing'],
    printActions:function(){
        var _this=this;
        this.actions.forEach(function(action)
        {
            var str = _this.first+" likes to "+action;
            console.log(str);
        });
           
        }
    };
person.printActions();

*/

 // we can also do it as following , i.e.use ".bind(this)" :-->
  /*   
       var person={
        first:"Abhay",
        actions:["Bike",'hike',"ski",'surfing'],
        printActions:function(){
           
            this.actions.forEach(function(action)
            {
                var str =this.first+" likes to "+action;
                console.log(str);
            }.bind(this));
               
            }
        };
    
        person.printActions();
*/

    //By Using Arrow Function :-->

/*
        var person={
            first:"Abhay",
            actions:["Bike",'hike',"ski",'surfing'],
            printActions(){
               
                this.actions.forEach(action=>
                {
                    var str =this.first+" likes to "+action;
                    console.log(str);
                });
                   
                }
            };
        
            person.printActions();
*/

/*
//Destructing with Arrays :-->

var cities=["Panchkula","Chandigarh","Shimla","Ghumarwin"];

var [first,,,fourth]=["Panchkula","Chandigarh","Shimla","Ghumarwin"];         

console.log(first);
console.log(fourth);

*/

//Another Example of Destructring of Arrays :-->
/*
var vacation ={
    destination:"Bhager",
    travelers:2,
    activity:"Cricket",
    cost:100
};
function vacationPeJao({destination,activity})
{
    return `Come to ${destination} and Play Some ${activity}`;
}
console.log(vacationPeJao(vacation));

*/

//Gentertor functions Example :-->

/*
function  * director(){
    yield "Three";
    yield "Two";
    yield "One";
    yield "Action";

}

var action=director();

console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);

*/
//Another Example using For loop --->

/*
function * eachItem(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        yield arr[i];
    }
}
var letters=eachItem(['a','b','c','d','e','f','g']);
var abc= setInterval(function()
{
    var letter=letters.next();
    if(letter.done)
    {
        clearInterval(abc);
        console.log("Now I Know My ABC's")

    }
    else
    {
        console.log(letter.value);

    }
}, 1000);
*/


  //Javascript Primitives:
  /*
const id=Symbol();

const courseInfo={
    title:"ES6",
    topic:["babel","Syntax","function","classes"],
    id:"Js-Course" //this does not change the above id(symbol) 
};
courseInfo[id]=123;

console.log(courseInfo[id]);
console.log(courseInfo);


*/
//Iterator and Iterable :

 /*
var title='ES6';
console.log(typeof title);
console.log(typeof title[Symbol.iterator]);

var iterateIt=title[Symbol.iterator]();
console.log(iterateIt.next());
console.log(iterateIt.next());
console.log(iterateIt.next());
console.log(iterateIt.next());

*/


/*
function tableReady(arr){
    var nextIndex=0;
    return{
        next()
        {
            if (nextIndex<arr.length)
            {
                return{value:arr.shift(),done:false}
            }
            else
            {
                return{done:true}
            }
        }
    }
}

var waitingList=["Sachin",'haider','Anna','Madam'];
var iterateList=tableReady(waitingList);

console.log(`${iterateList.next().value}, Your table is ready !`);
console.log(`${iterateList.next().value}, Your table is ready !`);
console.log(`${iterateList.next().value}, Your table is ready !`);
console.log(`${iterateList.next().value}, Your table is ready !`);
console.log(` It is finished , ${iterateList.next().done}!`);

*/


//Asynchronous  Features:
//Promises :-->

/*
const delay=seconds=>
{
    return new Promise(resolve=>
    {
        setTimeout(resolve,seconds*1000)
    });
};
console.log("Zero Second");
delay(1).then(()=>console.log("I am first Second"));
delay(5).then(()=>console.log("I am Fifth and last Second"));

*/
/*
const delay=seconds=>
{
    return new Promise(resolve=>
    {
        setTimeout(()=>resolve(`${seconds} Second delay is up`),seconds*1000)
    });
};
//console.log("Zero Second");
//delay(2).then(msg=>console.log(msg));
//delay(5).then(msg=>console.log(msg));



console.log("Zero Second");
delay(2).then=>(msg.touppercase())
        .then=>(`${msg}!!!`)
        .then(msg=>console.log(msg));
*/

        const delay=seconds=>
        {
            return new Promise((resolve,reject)=>
            {
                if(typeof seconds!='number')
                {
                    reject(new Error('Argument must be a number'));
                }
                
                setTimeout(
                    ()=>resolve(`${seconds} second delay is up`), 
                    seconds*1000
                    );
            });
        };
        console.log("Zero Second");
        delay(2).then(()=>console.log("I am first Second"));
        delay(5).then(()=>console.log("I am Fifth and last Second"));
        