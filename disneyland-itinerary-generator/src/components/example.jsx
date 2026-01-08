export default function RideSurvey() {

const input = require('readline-sync');

//Class constructor
class Ride {
    static allRides = [];
    static nextId = 0;

    constructor(name, popularity, waitTime = 30) {
        this.id = Ride.nextId++;
        this.name = name;
        this.popularity = popularity;
        this.waitTime = waitTime;
        Ride.allRides.push(this);
    }

    rideDescription() {
        console.log(`${this.name} has a popularity score of ${this.popularity}. Its wait time is ${this.waitTime} minutes.`);
    }
}

//Ride instantiations
const piratesOfTheCaribbean = new Ride('Pirates of the Caribbean', 10, 60);
const hauntedMansion = new Ride('Haunted Mansion', 10, 50);
const jungleCruise = new Ride('Jungle Cruise', 9);
const spaceMountain = new Ride('Space Mountain', 10, 65);
const itsASmallWorld = new Ride(`It's a Small World`, 5, 15);

//User input
visitTime = input.question('How many hours will you visit? ');
let visitTimeInMinutes = (Number(visitTime) * 60);

console.log("***************")

Ride.allRides.forEach(ride => {
    console.log(`${ride.name} - ${ride.id}`);
});
favoriteRide = input.question('What is your favorite ride (select number above)? ');
let favoriteRideID = (Number(favoriteRide));
let favoriteRideName = Ride.allRides[favoriteRideID].name
let favoriteRideWaitTime = Ride.allRides[favoriteRideID].waitTime

console.log("***************")

//Output
console.log(`You can ride ${favoriteRideName} this many times: ${visitTimeInMinutes/favoriteRideWaitTime}`)

return (
    <div>
        <h1>Ride Survey Component</h1>
    </div>
)
}