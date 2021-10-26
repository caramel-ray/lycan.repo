class Animals {
    constructor(name, limbs) {
        this.name = name;
        this.limbs = limbs;
    }
    turn() {
        return `A ${this.name} turns on a full moon.`;
    }
    heal() {
        return `A ${this.name} has the ability to self heal.`;
    }
    immortality() {
        return ` A ${this.name} is immortal.`;
    }
    speed() {
        return `A ${this.name} can Superspeed.`;
    }
    specie() {
        return `A ${this.name} is part human, part wolf.`
    }
    existence() {
        return `A ${this.name} is Extinct.`
    }

} 
class lycanthrope extends Animals {
    constructor(name, age, furColor) {
        super(name, age);
        this.furColor = furColor;
    }
    furColor() {
        return `I have a ${this.furColor} fur`;
    }
}
let werewolf = new lycanthrope("Werewolf", 4, "White");

console.log(werewolf);
console.log(werewolf.turn());
console.log(werewolf.heal());
console.log(werewolf.immortality());
console.log(werewolf.speed());
console.log(werewolf.specie());
console.log(werewolf.existence());