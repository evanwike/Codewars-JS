function declareWinner(f1,f2,first) {
  if(first == f1.name){
    while(f1.health > 0 && f2.health > 0){
      if(f2.health - f1.damagePerAttack <= 0) return f1.name;
      if(f1.health - f2.damagePerAttack <= 0) return f2.name;
      f2.health -= f1.damagePerAttack;
      f1.health -= f2.damagePerAttack;
    }
  }
  if(first == f2.name){
    while(f1.health > 0 && f2.health > 0){
      if(f1.health - f2.damagePerAttack <= 0) return f2.name;
      if(f2.health - f1.damagePerAttack <= 0) return f1.name;
      f1.health -= f2.damagePerAttack;
      f2.health -= f1.damagePerAttack;
    }
  }
}




// - Test Cases -
declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")//, "Lew");
declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")//, "Harry");
declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry")//, "Harald")
declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald")//, "Harald")
declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry")//, "Harald")
declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald")//, "Harald")
