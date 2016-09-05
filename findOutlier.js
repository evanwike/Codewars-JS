function findOutlier(integers){
  
  var odd = []
  var even = []
  for(var i = 0; i <= integers.length; i++){
    if(integers[i] % 2 === 0){
      even[i] = integers[i];
    } else if(integers[i] === 0){
      even[i] = integers[i];
    } else if(integers[i] === 1){
        odd[i] = integers[i];
    } else {
      odd[i] = integers[i];
    }
  }
  Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};
even.clean(undefined);
odd.clean(undefined);

  if(even.length < odd.length){
  for(var i = 0; i <= even.length; i++){
     if(typeof even[i] === 'number'){
       return even[i];
  }
       
  }
  }
  if(odd.length < even.length){
    for(var i = 0; i <= odd.length; i++){
       if(typeof odd[i] === 'number'){
         return odd[i]
  }
    }
  }

// - Test Cases -
findOutlier([0, 1, 2])//, 1)
findOutlier([1, 2, 3])//, 2)
findOutlier([2,6,8,10,3])//, 3)
findOutlier([0,0,3,0,0])//, 3)
findOutlier([1,1,0,1,1])//, 0)
