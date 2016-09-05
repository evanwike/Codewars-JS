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


// - Test Cases -
humanReadable(0)//, '00:00:00', 'humanReadable(0)');
humanReadable(5)//, '00:00:05', 'humanReadable(5)');
humanReadable(60)//, '00:01:00', 'humanReadable(60)');
humanReadable(86399)//, '23:59:59', 'humanReadable(86399)');
humanReadable(359999)//, '99:59:59', 'humanReadable(359999)');
