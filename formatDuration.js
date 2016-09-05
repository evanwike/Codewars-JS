function formatDuration(seconds) {
	if (seconds == 0) {
		return 'now'
	}
	let counter = 0;
	let string = '';
	let secs = 0,
		mins = 0,
		hours = 0,
		days = 0,
		years = 0;
	let s = 0;

	while (seconds > 86400) {
		seconds -= 86400;
		days += 1
	}

	while (days > 365) {
		years += 1;
		days -= 365
	}

	while (s < seconds) {
		if (secs == 60) {
			mins += 1;
			secs = 0
		}

		if (mins == 60) {
			hours += 1;
			mins = 0
		}

		if (hours == 24) {
			days += 1;
			hours = 0
		}

		if (days == 365) {
			years += 1;
			days = 0
		}
		secs += 1;
		s += 1;
	}

	if (secs == 60) {
		mins += 1;
		secs = 0;
	}

	if (mins == 60) {
		hours += 1;
		mins = 0;
	}

	if (hours == 24) {
		days += 1;
		hours = 0
	}

	if (days == 365) {
		years += 1;
		days = 0
	}

	if (years == 1 && days > 0) {
		string += years + ' year, '
	} else if (years > 1 && days > 0) {
		string += years + ' years, '
	}

	if (years == 1 && days == 0) {
		string += years + ' year, '
	} else if (years > 1 && days == 0) {
		string += days + ' years, '
	}

	if (days == 1 && hours > 0) {
		string += days + ' day '
	} else if (days > 1 && hours > 0) {
		string += days + ' days, '
	}

	if (days == 1 && hours == 0) {
		string += days + ' day'
	} else if (days > 1 && hours == 0) {
		string += days + ' days, '
	}

	if (hours == 1 && mins == 0) {
		string += hours + ' hour'
	} else if (hours > 1 && mins == 0) {
		string += hours + ' hours'
	}
	if (hours == 1 && mins > 0) {
		string += hours + ' hour,'
	} else if (hours > 1 && mins > 0 && secs == 0) {
		string += hours + ' hours,'
	} else if (hours > 1 && mins > 0 && secs == 0) {
		string += hours + ' hours and'
	}
	if (hours > 0) {
		if (mins == 1) {
			string += ' ' + mins + ' minute and'
		} else if (secs == 0 && mins == 1) {
			string += ' ' + mins + ' minute'
		} else if (secs == 0 && mins > 1) {
			string += ' ' + mins + ' minutes'
		} else if (mins > 1) {
			string += ' ' + mins + ' minutes and'
		}
	} else {
		if (mins == 1) {
			string += mins + ' minute and'
		} else if (secs == 0 && mins == 1) {
			string += mins + ' minute'
		} else if (secs == 0 && mins > 1) {
			string += mins + ' minutes'
		} else if (mins > 1) {
			string += mins + ' minutes and'
		}
	}
	if (mins > 0) {
		if (secs == 1) {
			string += ' ' + secs + ' second'
		} else if (secs > 1) {
			string += ' ' + secs + ' seconds'
		}
	} else {
		if (secs == 1) {
			string += secs + ' second'
		} else if (secs > 1) {
			string += secs + ' seconds'
		}
	}
	return string
}


// - Test Cases -

formatDuration(1)//, "1 second");
formatDuration(62)//, "1 minute and 2 seconds");
formatDuration(120)//, "2 minutes");
formatDuration(3600)//, "1 hour");
formatDuration(3662)//, "1 hour, 1 minute and 2 seconds");
formatDuration(132030240)//, "182 days, 1 hour, 44 minutes and 40 seconds");
