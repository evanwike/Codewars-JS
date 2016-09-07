function findShort(s){
  const lens = [];
  s.split(' ').map( x => { lens.push(x.length) });
  return Math.min.apply(null,lens)
}


// - Test Cases -
findShort("bitcoin take over the world maybe who knows perhaps")//, 3);
findShort("turns out random test cases are easier than writing out basic ones")//, 3); 
