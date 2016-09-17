function mix(s1, s2){
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split(''), arr1 = [], arr2 = [];
  alpha.map(function(x){
    let letter = x, reg = new RegExp(letter,'g');
    arr1.push(s1.match(reg) || []);
    arr2.push(s2.match(reg) || []);
  });
  const max1 = [], max2 = [], eql = [];
  arr1.forEach(function(x,ind){
    if(x.length > arr2[ind].length && x.length > 1) max1.push('1:'+x.join(''));
    if(x.length < arr2[ind].length && arr2[ind].length > 1) max2.push('2:'+arr2[ind].join(''));
    if(x.length == arr2[ind].length && x.length > 1) eql.push('=:'+x.join(''))
  });
  let str = max1.concat(max2).concat(eql).sort(function(a,b){
    if(b.length == a.length){
      if(a.charCodeAt(0) == b.charCodeAt(0)) return a.charCodeAt(2) - b.charCodeAt(2);
      else return a.charCodeAt(0) - b.charCodeAt(0)
    }
    else return b.length - a.length
  })
  return str.join('/')
}



// - Test Cases -
mix("Are they here", "yes, they are here")//, "2:eeeee/2:yy/=:hh/=:rr")
mix("looping is fun but dangerous", "less dangerous than coding")//, "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
mix(" In many languages", " there's a pair of functions")//, "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
mix("Lords of the Fallen", "gamekult")//, "1:ee/1:ll/1:oo")
mix("codewars", "codewars")//, "")
mix("A generation must confront the looming ", "codewarrs")//, "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")
