const catsList = require('./catsList')

module.exports = function random(){
  return catsList[Math.floor(Math.random() * catsList.length)];
}