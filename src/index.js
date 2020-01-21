module.exports = function reverse (n) {
  return parseInt([...n.toString()].reverse().join(""), 10);
}
