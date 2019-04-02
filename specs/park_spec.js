const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park("Dean's Garden", 20);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Pterodactyl', 'carnivore', 300);
    dinosaur3 = new Dinosaur('Pterodactyl', 'carnivore', 50)
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, "Dean's Garden")
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = Array.isArray(park.dinosaurs);
    assert.deepStrictEqual(actual, true)
  });

  it('should be able to add a dinosaur to its collection', function () {
    const actual = park.addDino("Stegosaurus");
    assert.strictEqual(actual, 2)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    const actual = park.moveDino();
    assert.strictEqual(actual, 0)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.prettiest();
    assert.strictEqual(actual, dinosaur)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    const bySpecies = function(){
      park.allOfSpecies('Pterodactyl');
    const actual = bySpecies;
    assert.strictEqual(actual, [dinosaur1, dinosaur2])
    }
  });

  it('should calculate the total number of visitors per day', function (){
    const dailyTotal = function(){
      park.dailyVisitors();
    const actual = dailyTotal;
    assert.strictEqual(actual, 400)
    }
  });

  it('should calculate the total number of visitors per year', function (){
    const annualTotal = function(){
      park.annualVisitors();
    const actual = annualTotal;
    assert.strictEqual(actual, 104400)
    }
  });

  it('should calculate the total revenue from ticket sales for one year', function (){
    const annualRev = function(){
      park.annualRevenue();
    const actual = annualRev;
    assert.strictEqual(actual, 2088000)
    }
  });

  it('should be able to remove all dinosaurs of a particular species', function (){
    const removeBySpecies = function(){
      park.removeSpecies("t-rex");
    const actual = removeBySpecies;
    assert.strictEqual(actual, [dinosaur2, dinosaur3])
    }
  });

});
