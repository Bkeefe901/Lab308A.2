// Lab 308A.2.1 An Object-Oriented Adventure

// Instructions
// Initialize a new git repository in a local project folder and create a JavaScript file to contain your code. Within your code editor of choice, follow along with the steps below to create the adventure game. Feel free to take creative liberty with your own game!
// Commit frequently! Every time something works, you should commit it. Remember, you can always go back to a previous commit if something breaks.

// Part 1


const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    // Let’s give Robin a companion to travel with – a furry friend they call “Leo.”
    companion: {
        name: "Leo",
        type: "Cat",
        // Add a “companion” sub-object to “Leo” with the following properties:
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["hat", "sunglasses"]
        }
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        return result;
        console.log(`${this.name} rolled a ${result}.`)
    }
}


// As an additional practice exercise, create a loop that logs each item in Robin’s inventory.
for (let item of adventurer.inventory) {
    console.log(item);
}

adventurer.roll();


// Part 2

class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
        this.companion = {};
    }
    static MAX_HEALTH = 100;
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        return result;
    }
}

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Part 3

class Adventurer extends Character {
    static ROLES = ['Fighter', 'Healer', 'Wizard']
    constructor(name, role) {
        super(name);
        //Adventurers have specialized roles.
        if (!Adventurer.ROLES.includes(role)) {
            console.log('This role does not exist!');
        } else {
            this.role = role;
        }

        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }

    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    duel(Opp) {
        while (this.health >= 50 && Opp.health >= 50) {
            let roll1 = super.roll();
            let roll2 = super.roll();
            if (roll1 > roll2) {
                Opp.health = Opp.health - 1;
                console.log(`The winner of this round is ${this.name}. ${Opp.name}'s health is now ${Opp.health} and ${this.name}'s health is ${this.health}`);

            } else if (roll2 > roll1) {
                this.health = this.health - 1;
                console.log(`The winner of this round is ${Opp.name}. ${Opp.name}'s health is now ${Opp.health} and ${this.name}'s health is ${this.health}`);
            }
        }



        //let roll2 = super.roll();

    }
}

// Next, create a Companion class with properties and methods specific to the companions.

class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;

    }
}

// Finally, change the declaration of Robin and the companions to use the new Adventurer and Companion classes.

const robin = new Adventurer("Robin", "Healer");
const harry = new Adventurer("Harry", "Healer");
const leo = new Companion("Leo", "Cat");
const frank = new Companion("Frank", "Flea");



console.log(robin);

// Part 4


// Add a static MAX_HEALTH property to the Character class, equal to 100.

// (added to character class above)


// Add a static ROLES array to the Adventurer class, with the values “Fighter,” “Healer,” and “Wizard.” Feel free to add other roles, if you desire!
// Add a check to the constructor of the Adventurer class that ensures the given role matches one of these values.

//(added these to the classes above)


// Part 5

class AdventurerFactory {
    constructor(role) {
        this.role = role;
        this.adventurers = [];
    }
    generate(name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
    }
    findByIndex(index) {
        return this.adventurers[index];
    }
    findByName(name) {
        return this.adventurers.find((a) => a.name === name);
    }
}

//const healers = new AdventurerFactory("Healer");
//const robin = healers.generate("Robin");

// Part 6

// Create an additional method, duel(), for the Adventurer class with the following functionality:
// Accept an Adventurer as a parameter.
// Use the roll() functionality to create opposing rolls for each adventurer.
// Subtract 1 from the adventurer with the lower roll.
// Log the results of this “round” of the duel, including the rolls and current health values.
// Repeat this process until one of the two adventurers reaches 50 health.
// Log the winner of the duel: the adventurer still above 50 health.

robin.duel(harry);