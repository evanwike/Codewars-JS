String.prototype.toJadenCase = function () {
  const str = this.split(' ').map( x => { return x.split('') }).map( x => { x[0] = x[0].toUpperCase(); return x });
  return str.map( x => { return x.join('') }).join(' ');
};



// - Test Cases -
let str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase()//, "How Can Mirrors Be Real If Our Eyes Aren't Real");
