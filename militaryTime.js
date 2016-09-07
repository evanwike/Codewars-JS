function solution(hour) {
  hour = hour.toString().split('');
  if(hour.length < 3 || hour.length > 4)
    throw 'Must be either 3 or 4 digits in length'
  hour.length == 4 ? hour.splice(2,0,':') : hour.splice(1,0,':');
  return hour.join('')
}



// - Test Cases -
solution(800); // should return '8:00'
solution(1000); // should return '10:00'
solution(1451); // should return '14:51'
solution(3351); // should return '33:51'
solution(10000); // should raise an exception
