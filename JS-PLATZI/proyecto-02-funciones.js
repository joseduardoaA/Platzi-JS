// dcCharacters
function dcCharacters  (name, color, power) {
    this.name = name
    this.color = color
    this.power = power
    this.isLeader = false

    this.displayInfo = function () {
        console.log(` Dc Character Information:
        Name ${this.name}
        Color ${this.color}
        Power ${this.color}
        ${this.isLeader ? "Leader: Yes" : "Leader: No"}     
        `);
    }
    this.becomeLeader = function () {
        this.isLeader = true
        console.log(`${this.name} has become the leader of DC Character`);
    }
}

const superman = new dcCharacters("Superman", "Blue and red", "God")
const ghostRider = new dcCharacters("Ghost Rider", "Red and black", "Hell")
const swampThing = new dcCharacters("Swamp Thing", "Green", "The soul of Green")

superman.displayInfo()
ghostRider.displayInfo()
swampThing.displayInfo()

superman.becomeLeader()

superman.displayInfo()
ghostRider.displayInfo()
swampThing.displayInfo()

