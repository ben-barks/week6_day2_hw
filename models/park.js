const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = ['Pterodactyl']
};

Park.prototype.addDino = function(dinosaur){
  this.dinosaurs.push(dinosaur);
  return this.dinosaurs.length;
};

Park.prototype.moveDino = function(dinosaur){
  this.dinosaurs.pop();
  return this.dinosaurs.length;
};

Park.prototype.prettiest = function(){
  this.dinosaur.pretty();
  return this.dinosaur
};

const allOfSpecies = function(species){
  if (this.dinosaur.species === species){
    return this.dinosaur
  }
};

const dailyVisitors = function(){
  let total = 0;
  return total += this.dinosaur.guestsAttractedPerDay
};

const annualVisitors = function(){
  return 261 * this.park.dailyVisitors()
};

const annualRevenue = function(){
  return this.park.annualVisitors * this.ticketPrice
};

const removeSpecies = function(species){
  if (this.dinosaur.species === species) {
    return this.dinosaur.splice(this.dinosaur.indexOf(0), 1)
  }
};

module.exports = Park;
