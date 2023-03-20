function distanceFromHqInBlocks(location) {

    return Math.abs(location - 42);
  }

function distanceFromHqInFeet(location) {
    const distanceBlocks = distanceFromHqInBlocks(location);
    return distanceBlocks * 264;
   }

function distanceTravelledInFeet(start, destination) {

    const distanceTravelled = Math.abs(destination - start);
    return distanceTravelled * 264;
  }

function calculatesFarePrice(start, destination) {
    
    const disInfeet = distanceTravelledInFeet(start, destination);
    if (disInfeet <= 400) {
        return 0;
    }
    else if (disInfeet <= 2000) {
        return (disInfeet - 400) * 0.02;
    }
    else if (disInfeet <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
  }
