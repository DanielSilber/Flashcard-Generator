
var ClozeCard = require("./ClozeCard.js")
var BasicCard = require("./BasicCard.js")
var inquirer = require("inquirer")

var indiAlbum = new BasicCard("What is the #1 selling independent record of all time?", "Smash, by the Offspring");
console.log(indiAlbum.front);
console.log(indiAlbum.back);
var grammy = new BasicCard("How many Grammy's has Quincy Jones won?", "27");
console.log(grammy.front);
console.log(grammy.back);
var grammy = new BasicCard("How many Grammy's has Quincy Jones won?", "27");
console.log(grammy.front);
console.log(grammy.back);var grammy = new BasicCard("How many Grammy's has Quincy Jones won?", "27");
console.log(grammy.front);
console.log(grammy.back);var grammy = new BasicCard("How many Grammy's has Quincy Jones won?", "27");
console.log(grammy.front);
console.log(grammy.back);var grammy = new BasicCard("How many Grammy's has Quincy Jones won?", "27");
console.log(grammy.front);
console.log(grammy.back);
var indiAlbum = new ClozeCard("How many Grammy's has Quincy Jones won?", "27");
console.log(grammy.fullText);
console.log(grammy.cloze);


