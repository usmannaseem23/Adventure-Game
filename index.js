#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecreas() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
;
class opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecreas() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player1 = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.bgBlue.italic("Enter your name"),
    }
]);
let opponent1 = await inquirer.prompt([
    {
        name: "Select",
        type: "list",
        message: chalk.blue.italic("Enter the opponent you want"),
        choices: ["Skeleton", "Zombie", "Alien", "Vampire", "Ghost"]
    }
]);
let p1 = new Player(player1.name);
let o1 = new opponent(opponent1.Select);
do {
    //skeleton
    if (opponent1.Select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "op",
                type: "list",
                message: chalk.blue.italic("What do you want to do?"),
                choices: ["Attack", "Drink", "Escape"]
            }
        ]);
        if (ask.op == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecreas();
                console.log(chalk.magenta.italic(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.magenta.italic(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.italic("You loose the game and opponent win"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecreas();
                console.log(chalk.magenta.italic(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.magenta.italic(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.italic("You win"));
                    process.exit();
                }
            }
        }
        if (ask.op == "Drink") {
            p1.fuelIncrease();
            console.log(chalk.magenta.italic(`You Drink protion so your fuel is ${p1.fuel}`));
        }
        if (ask.op == "Escape") {
            console.log(chalk.red.italic("You loose the game and opponent win"));
            process.exit();
        }
    }
    //zombie
    if (opponent1.Select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "op",
                type: "list",
                message: chalk.blue.italic("What do you want to do?"),
                choices: ["Attack", "Drink", "Escape"]
            }
        ]);
        if (ask.op == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecreas();
                console.log(chalk.magenta.italic(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.magenta.italic(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.italic("You loose the game and opponent win"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecreas();
                console.log(chalk.magenta.italic(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.magenta.italic(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.italic("You win"));
                    process.exit();
                }
            }
        }
        if (ask.op == "Drink") {
            p1.fuelIncrease();
            console.log(chalk.magenta.italic(`You Drink protion so your fuel is ${p1.fuel}`));
        }
        if (ask.op == "Escape") {
            console.log(chalk.red.italic("You loose the game and opponent win"));
            process.exit();
        }
    }
    //alien
    if (opponent1.Select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "op",
                type: "list",
                message: chalk.blue.italic("What do you want to do?"),
                choices: ["Attack", "Drink", "Escape"]
            }
        ]);
        if (ask.op == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecreas();
                console.log(chalk.magenta.italic(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.magenta.italic(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.italic("You loose the game and opponent win"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecreas();
                console.log(chalk.magenta.italic(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.magenta.italic(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.italic("You win"));
                    process.exit();
                }
            }
        }
        if (ask.op == "Drink") {
            p1.fuelIncrease();
            console.log(chalk.magenta.italic(`You Drink protion so your fuel is ${p1.fuel}`));
        }
        if (ask.op == "Escape") {
            console.log(chalk.red.italic("You loose the game and opponent win"));
            process.exit();
        }
    }
    //vampire
    if (opponent1.Select == "Vampire") {
        let ask = await inquirer.prompt([
            {
                name: "op",
                type: "list",
                message: chalk.blue.italic("What do you want to do?"),
                choices: ["Attack", "Drink", "Escape"]
            }
        ]);
        if (ask.op == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecreas();
                console.log(chalk.magenta.italic(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.magenta.italic(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.italic("You loose the game and opponent win"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecreas();
                console.log(chalk.magenta.italic(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.magenta.italic(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.italic("You win"));
                    process.exit();
                }
            }
        }
        if (ask.op == "Drink") {
            p1.fuelIncrease();
            console.log(chalk.magenta.italic(`You Drink protion so your fuel is ${p1.fuel}`));
        }
        if (ask.op == "Escape") {
            console.log(chalk.red.italic("You loose the game and opponent win"));
            process.exit();
        }
    }
    //ghost
    if (opponent1.Select == "Ghost") {
        let ask = await inquirer.prompt([
            {
                name: "op",
                type: "list",
                message: chalk.blue.italic("What do you want to do?"),
                choices: ["Attack", "Drink", "Escape"]
            }
        ]);
        if (ask.op == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecreas();
                console.log(chalk.magenta.italic(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.magenta.italic(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.italic("You loose the game and opponent win"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecreas();
                console.log(chalk.magenta.italic(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.magenta.italic(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.italic("You win"));
                    process.exit();
                }
            }
        }
        if (ask.op == "Drink") {
            p1.fuelIncrease();
            console.log(chalk.blue.italic(`You Drink protion so your fuel is ${p1.fuel}`));
        }
        if (ask.op == "Escape") {
            console.log(chalk.red.italic("You loose the game and opponent win"));
            process.exit();
        }
    }
} while (true);
