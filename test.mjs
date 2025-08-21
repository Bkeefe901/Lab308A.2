class Character {
    static MAX_HEALTH = 100;
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}



class Adventurer extends Character {
    static ROLES = ['Fighter', 'Healer', 'Wizard']
    constructor(name, role) {

        if(!Adventurer.ROLES.includes(role)){
            console.log('This role does not exist!');
        } else{
            this.role = role;
        }
        
        super(name);

        
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }

}

class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;

    }
}

let a = new Adventurer("Alan", "Joker");
// let b = new Companion("Ralph", "Wolf");
let b = new Companion("Larry", "Cat");
console.log(a);
console.log(b);