function isValidWalk(walk) {
  if(walk.length != 10)
    return false
  const dirs = ['n','s','e','w'];
  const filt = dirs.map( x => walk.filter( y => y == x )).filter( x => x.length > 0 );
  if(filt.length == 2)
    return filt[0].length == filt[1].length
  if(filt.length == 4)
    return filt[0].length == filt[1].length && filt[2].length == filt[3].length
}



// - Test Cases -
isValidWalk(['n','s','n','s','n','s','n','s','n','s','n'])//, 'should return true');
isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])//, 'should return false');
isValidWalk(['w'])//, 'should return false');
isValidWalk(['n','n','n','s','n','s','n','s','n','s'])//, 'should return false');
