function express(num,oper){
  if(!oper)
    return num
  return oper(num);
}

function zero(oper) { return express(0,oper) }
function one(oper) { return express(1,oper) }
function two(oper) { return express(2,oper) }
function three(oper) { return express(3,oper) }
function four(oper) { return express(4,oper) }
function five(oper) { return express(5,oper) }
function six(oper) { return express(6,oper) }
function seven(oper) { return express(7,oper) }
function eight(oper) { return express(8,oper) }
function nine(oper) { return express(9,oper) }

function plus(a) { return function(b) { return b + a } }
function minus(a) { return function(b) { return b - a } }
function times(a) { return function(b) { return b * a } }
function dividedBy(a) { return function(b) { return b / a } }


// - Test Cases -
seven(times(five()))//, 35);
four(plus(nine()))//, 13);
eight(minus(three()))//, 5);
six(dividedBy(two()))//, 3);
