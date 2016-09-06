function findOdd(A) {
	const nums = [], occ = [], odd = [];
	for(let i = 0; i < A.length; i++){
		let curr = A[i];
		const num = A.filter( x => { return x == curr })
		if(nums.includes(curr) == false)
			occ.push(curr.toString(),num.length)
		nums.push(curr)
	}
	for(let i = 1; i < occ.length; i+=2){
		if(occ[i] % 2 != 0)
			odd.push(parseInt(occ[i - 1]))
	}
	return odd[0]
}



// - Test Cases - 
findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])//, 5);
findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])//, -1);
findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])//, 5);
findOdd([10])//, 10);
findOdd([1,1,1,1,1,1,10,1,1,1,1])//, 10);
findOdd([5,4,3,2,1,5,4,3,2,10,10])//, 1);


// Clever -> const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
