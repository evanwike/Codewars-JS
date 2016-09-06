function XO(str) {
  str = str.toLowerCase().split('');
  const x = str.filter( x => { return x == 'x' })
  const o = str.filter( x => { return x == 'o' })
  
  return x.length == o.length
}



// - Test Cases -
XO('xo')//true);
XO("xxOo")//true);
XO("xxxm")//false);
XO("Oo")//false);
XO("ooom")//false);
