//Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
//How many such routes are there through a 20×20 grid?

const routeMap = new Map();

function findRoutes(x, y, max){
	if(x > max || y > max){
		return 0;
	}else if(x == max && y == max){
		return 1;
	}else {
		if(typeof routeMap.get(x + "," + y) === "undefined"){
			routeMap.set(x + "," + y, findRoutes(x+1, y, max) + findRoutes(x, y+1, max))
		}
		return(routeMap.get(x + "," + y));
	
	}
}

console.log(findRoutes(0, 0, 20))