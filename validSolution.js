function validSolution(board){
	const horiz = [], vertarr = [], vert = [], boxarr = [], box = [];
	//Get Vertical Values
	for(let i = 0; i < board.length; i++){
		let arr = [];
		for(let j = 0; j < board[i].length; j++){
			let getvert = board[j][i];
			arr.push(getvert);
		}
		vertarr.push(arr);
	}
	//Get Box Values
	function getBox(xst,xend,yst,yend){
		let totalBox = []
		for(let x = xst; x < xend; x++){
			let arr = [];
			for(let y = yst; y < yend; y++){
				let getbox = board[y][x];
				arr.push(getbox);
			}
			totalBox.push(arr);
		}
		const toReturn = totalBox[0].concat(totalBox[1]).concat(totalBox[2]);
		boxarr.push(toReturn);
	}
	
	getBox(0,3,0,3), getBox(3,6,0,3), getBox(6,9,0,3);
	getBox(0,3,3,6), getBox(3,6,3,6), getBox(6,9,3,6);
	getBox(0,3,6,9), getBox(3,6,6,9), getBox(6,9,6,9);
	
	//Check if Horizontal, Vertical and Box contain 1-9, convert and push to boolean arrays
	for(let i = 0; i < board.length; i++){
		let arrH = [], arrV = [], arrB = [];
		for(let j = 0; j < board[i].length; j++){
			let num = j + 1;
			let matchH = board[i].includes(num), matchV = vertarr[i].includes(num), matchB = boxarr[i].includes(num);
			arrH.push(matchH), arrV.push(matchV), arrB.push(matchB);
		}
		horiz.push(arrH), vert.push(arrV), box.push(arrB);
	}
	//Check if boolean arrays, vert and horiz, contain only true
	let horizValid = horiz.every( (x,y) => { return x[y] === true } );
	let vertValid = vert.every( (x,y) => { return x[y] === true } );
	let boxValid = box.every( (x,y) => { return x[y] === true } );
	
	//Check to make sure all are true, then return
	if(horizValid && vertValid && boxValid === true){
		return true
	} else
		return false	
}




-Test Cases-

validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
              [6, 7, 2, 1, 9, 5, 3, 4, 8],
              [1, 9, 8, 3, 4, 2, 5, 6, 7],
              [8, 5, 9, 7, 6, 1, 4, 2, 3],
              [4, 2, 6, 8, 5, 3, 7, 9, 1],
              [7, 1, 3, 9, 2, 4, 8, 5, 6],
              [9, 6, 1, 5, 3, 7, 2, 8, 4],
              [2, 8, 7, 4, 1, 9, 6, 3, 5],
              [3, 4, 5, 2, 8, 6, 1, 7, 9]])//, true);
