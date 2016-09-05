const add = n => { let current = n || 0, fn = function(num){ current += num; return fn }; fn.toString = function(){ return current }; return fn }


// -Test Cases-
add(1)// == 1);
add(1)(2)// == 3);
add(1)(2)(3)// == 6);
