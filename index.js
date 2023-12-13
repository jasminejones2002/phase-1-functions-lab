function distanceFromHqInBlocks(distance) {
    let blocks = Math.abs(distance - 42);
    return blocks;
}
distanceFromHqInBlocks();
function distanceFromHqInFeet(distance) {
    const blocks = distanceFromHqInBlocks(distance);
    const feet = Math.abs(blocks * 264);
    return feet;
}
distanceFromHqInFeet();
function distanceTravelledInFeet(start, destination) {
    let distanceInFeet = Math.abs((destination - start) * 264)
    return distanceInFeet;
}
distanceTravelledInFeet();
function calculatesFarePrice(start, destination) {
    let farePriceDistance;
    if (destination > start) {
        farePriceDistance = (destination - start) * 264;
    }
    else if (start > destination) {
        farePriceDistance = (start - destination) * 264;
    }
    if (farePriceDistance <= 400) {
        return 0;
    } 
    else if (farePriceDistance > 2500) {
        return 'cannot travel that far';
    } 
    else if (farePriceDistance > 2000) {
        return 25;
    } 
    else {
        const remainingDistance = farePriceDistance - 400;
        return remainingDistance * 0.02;
    }
}
calculatesFarePrice();