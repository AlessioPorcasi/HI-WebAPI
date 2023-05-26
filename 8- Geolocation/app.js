// Get the current position
navigator.geolocation.getCurrentPosition(
    function (position) {
        var coordinates = position.coords;
        console.log("Your current position is:");
        console.log(`Latitude : ${coordinates.latitude}`);
        console.log(`Longitude: ${coordinates.longitude}`);
        console.log(`More or less ${coordinates.accuracy} meters.`);
    },
    function (err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
);

// Will call the first function each time the position of the device changes
const  watchId  = navigator.geolocation.watchPosition(
function (position) {
    var coordinates = position.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${coordinates.latitude}`);
    console.log(`Longitude: ${coordinates.longitude}`);
    console.log(`More or less ${coordinates.accuracy} meters.`);
},
function (err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
);
  
// Used to unregister location/error monitoring handlers previously installed using Geolocation.watchPosition().
navigator.geolocation.clearWatch(watchId);