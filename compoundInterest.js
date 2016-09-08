function calculateYears(p, i, t, d) {       // (principal, interest, tax, desired)
  let years = 0;
  
  function compound(p, i, t, d) {
    if (p >= d)
      return years

    p = (p + (p * i)) - ((p * i) * t);
    years++;
    return compound(p, i, t, d)
  }
  return compound(p, i, t, d)
}



// - Test Cases -
calculateYears(1000, 0.05, 0.18, 1100)//, 3)
calculateYears(1000, 0.01625, 0.18, 1200) //, 14)
calculateYears(1000,0.05,0.18,1000)//, 0)
