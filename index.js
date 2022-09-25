// Code your solution in this file
const returnFirstTwoDrivers = function(array){
    return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array){
    return array.slice(array.length - 2, array.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function(fare){
        return fare * int;
    };
};

const fareDoubler = fare => createFareMultiplier(2)(fare);
const fareTripler = fare => createFareMultiplier(3)(fare);

function selectDifferentDrivers(drivers, fn){
    return fn(drivers);
}