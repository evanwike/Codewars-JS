function toLeetSpeak(str) {
  const leet = ["@", "8", "(", "D", "3", "F", "6", "#", "!", "J", "K", "1", "M", "N", "0", "P", "Q", "R", "$", "7", "U", "V", "W", "X", "Y", "2"];
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  str = str.split('');
  const code = str.map(function(x){
    const index = alpha.indexOf(x)
    const val = leet[index]
    const filt = val == undefined ? ' ' : val
    return x = filt
  })
  return code.join('')
}



// - Test Cases -
toLeetSpeak("LEET")// "1337");
toLeetSpeak("CODEWARS")// "(0D3W@R$");
toLeetSpeak("HELLO WORLD")// "#3110 W0R1D");
toLeetSpeak("LOREM IPSUM DOLOR SIT AMET")// "10R3M !P$UM D010R $!7 @M37");
toLeetSpeak("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG")// "7#3 QU!(K 8R0WN F0X JUMP$ 0V3R 7#3 1@2Y D06");
