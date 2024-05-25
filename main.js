#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncreases() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: 'name',
        type: 'input',
        message: 'Dear Player Kindly Enter Your Name:'
    }
]);
console.log(player.name);
let opponent = await inquirer.prompt([
    {
        type: 'list',
        name: "select",
        message: "Select Your Enemy or Opponent",
        choices: ['Zombie', 'Skeleton', 'Cobra']
    }
]);
console.log(player.name);
//Gathering data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == 'Zombie')
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.green(o1.name)}`);
    if (opponent.select == 'Skeleton')
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.green(o1.name)}`);
    if (opponent.select == 'Cobra')
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.green(o1.name)}`);
    let ask = await inquirer.prompt([
        {
            type: 'list',
            name: 'opt',
            message: 'Select an Option ',
            choices: ['Attack', 'Power Tonic', 'Run to save life']
        }
    ]);
    if (ask.opt == 'Attack') {
        let num = Math.floor(Math.random() * 2);
        if (num >= 0) {
            p1.fuelDecrease();
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            if (p1.fuel <= 0) {
                console.log(chalk.red.bold.italic(`Unfortunately! You have Lost the Game.`));
                process.exit();
            }
        }
        else if (num <= 0) {
            o1.fuelDecrease();
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            if (o1.fuel <= 0) {
                console.log(chalk.green.bold.italic(`Congratulations! You have Won.`));
                process.exit();
            }
        }
    }
    console.log(`Attack`);
    if (ask.opt == 'Power Tonic') {
        p1.fuelIncreases();
        console.log(chalk.red.bold.green(`You Have Drunk Power Tonic Now Your fuel is ${p1.fuel}`));
    }
    if (ask.opt == 'Run to save life') {
        console.log(chalk.red.bold.italic(`Unfortunately! You have Lost the Game.`));
    }
} while (true);
