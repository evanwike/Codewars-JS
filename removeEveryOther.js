function removeEveryOther(arr){
  for(let i = 1; i < arr.length; i += 2){
		arr[i] = ''
	}
	return arr.filter( x => { return x != '' })
}



// - Test Cases -
removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])//,['Hello', 'Hello Again']);
removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])//,[1, 3, 5, 7, 9]);
removeEveryOther([[1, 2]])//, [[1, 2]]);
removeEveryOther([['Goodbye'], {'Great': 'Job'}])//,[['Goodbye']]);
removeEveryOther([])//, []);
