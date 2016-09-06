function descendingOrder(n){
	const arr = n.toString().split('').sort( (a,b) => { return b - a });
	return parseInt(arr.join(''))
}


// - Test Cases -
descendingOrder(0)//, 0)
descendingOrder(1)//, 1)
descendingOrder(123456789)//, 987654321)
