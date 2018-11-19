// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  let arr = drivers;
  arr.push(name);
  return arr;
}

function destructivelyPrependDriver(name) {
  let arr = drivers;
  arr.unshift(name);
  return arr;
}

function destructivelyRemoveLastDriver() {
  let arr = drivers;
  arr.pop();
  return arr;
}

function destructivelyRemoveFirstDriver() {
  let arr = drivers;
  arr.shift();
  return arr;
}

function appendDriver(name) {
  return [...drivers, name]
}

function prependDriver(name) {
  return [name, ...drivers]
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1)
}

function removeFirstDriver() {
  return drivers.slice(1)
}
