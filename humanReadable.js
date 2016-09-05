function humanReadable(seconds){
	let secs = 0, mins = 0, hours = 0, final = '';
	
	while(seconds > 3600){
		seconds -= 3600;
		hours += 1;
	}
	
	while(seconds >= 60){
		seconds -= 60;
		mins += 1;
	}
	
	if(seconds < 60){
		secs += seconds
	}
	
	if(secs == 60){
		secs = 0;
		mins += 1
	} else if(mins == 60){
		mins = 0;
		hours += 1;
	}
	
	let sStr = secs.toString(), mStr = mins.toString(), hStr = hours.toString();
	
	while(sStr.length < 2){
		sStr = '0'.concat(sStr)
	}
	while(mStr.length < 2){
		mStr = '0'.concat(mStr)
	}
	while(hStr.length < 2){
		hStr = '0'.concat(hStr)
	}
	final += hStr + ':' + mStr + ':' + sStr;
	return final
}
