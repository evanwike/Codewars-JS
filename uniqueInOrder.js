function uniqueInOrder(iterable){
	const unique = []
	if(typeof iterable == 'string')
		iterable = iterable.split('');
	let curr = [];
	iterable.map(function(x){
		if(x != curr)
			unique.push(x)
		curr[0] = x
	})
	return unique
}




// - Test Case - 
uniqueInOrder('AAAABBBCCDAABBB')//, ['A','B','C','D','A','B'])
