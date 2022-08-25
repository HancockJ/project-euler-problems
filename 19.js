const weekdayMap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const monthMap = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let year = 1900 
let weekday = 1 // 0-6 (sunday = 0)
let calendarDay = 1; // 1-monthCount
let monthCount = [31,28,31,30,31,30,31,31,30,31,30,31]
let month = 0 // 0-11
let firstSundays = 0;


while(year < 2001){
	weekday += 1;
	if(weekday > 6){
		weekday = 0;
	}
	calendarDay += 1;
	if(calendarDay == 29 && month == 1 && isLeapYear(year)){
		// LEAP DAY
	}
	else if(calendarDay > monthCount[month]){
		calendarDay = 1;
		if(month < 11){
			month += 1;
		} else{
			month = 0;
			year += 1;
		}
	}
	if(year > 1900 & calendarDay == 1 && weekday == 0){
			//console.log( weekdayMap[weekday] + ", " + monthMap[month] + " " + calendarDay + ", " + year)
			firstSundays++;
	}

}
console.log(firstSundays)



function isLeapYear(year){
	if(year % 400 == 0){
		return true;
	}
	if(year % 100 == 0){
		return false;
	}
	if(year % 4 == 0){
		return true;
	}
	return false;
}