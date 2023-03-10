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

/*
  const getPeopleInSpace = () => 
			fetch('http://api.open-notify.org/astros.json')	
				.then(res => res.json());

		const spaceNames = () => 
			getPeopleInSpace()
				.then(json => json.people)
				.then(people => people.map(p => p.name))
				.then(names => names.join(', '));

		spaceNames()
			.then(console.log);

  */

/*  
const delay=seconds=>{
    return  new Promise(resolve=>setTimeout(resolve,seconds*1000));
};

const counttofive=async()=>{
    console.log('zero seconds');
    await delay(1);
    console.log('one seconds');
    await delay(1);
    console.log('two seconds');
    await delay(3);
    console.log('five seconds');
    
};
counttofive();


counttofive();
  */

/*  
class vehicle {
    constructor(description,wheels)
    {
        this.description=description;
        this.wheels=wheels;
    }
    describeYourself()
    {
        console.log(`I am a ${this.description} with ${this.wheels} Wheels`);
    }
}

var car=new vehicle("Cool blue color car",4);
car.describeYourself();

class semitruck extends vehicle
{
    constructor(){
    super("semi-truck",18)
}
}
var grocerystoresemi=new semitruck();
grocerystoresemi.describeYourself();

 */

/*  
var attendence={
    _list:[],
    set addname(name){
        this._list.push(name);

    },
    get list(){
        return this._list.join(',');
    }
};
attendence.addname="Abhay";
console.log(attendence.list);
console.log(attendence._list);
attendence.addname="Anna Singla";
console.log("List getter :" ,attendence.list);
console.log("Underscore list(prop.):",attendence._list);

 */

/*
class hike{
    constructor(distance,pace){
        this.distance=distance;
        this.pace=pace;
    }
    get lengthInHours(){
        return `${this.calclength()} hours`;
    }
    calclength(){
        return this.distance/this.pace;
     }
} 
const mtIallac=new hike(10,2);
console.log(mtIallac.lengthInHours);

 */
