navigator.connection.addEventListener('change', logNetworkInfo);

function logNetworkInfo() {
  // Network type that browser uses
  console.log('         type: ' + navigator.connection.type);

  // Effective bandwidth estimate
  console.log('     downlink: ' + navigator.connection.downlink + ' Mb/s');

  // Effective round-trip time estimate
  console.log('          rtt: ' + navigator.connection.rtt + ' ms');

  // Upper bound on the downlink speed of the first network hop
  console.log('  downlinkMax: ' + navigator.connection.downlinkMax + ' Mb/s');

  // Effective connection type determined using a combination of recently
  // observed rtt and downlink values: ' +
  console.log('effectiveType: ' + navigator.connection.effectiveType);
  
  // True if the user has requested a reduced data usage mode from the user
  // agent.
  console.log('     saveData: ' + navigator.connection.saveData);
  
  // Add whitespace for readability
  console.log('');
}
logNetworkInfo();



let slowConnection = ['slow-2g', '2g'];
let speedConnection = ['3g', '4g'];
navigator.connection.addEventListener("change", (e) =>{
    let connection = navigator.connection,
    effectiveType = connection.effectiveType,
    isSlowConnection = slowConnection.indexOf(effectiveType) !== -1;
    if(!navigator.onLine){
        console.info("%cNo internet connection", 'color: white; background-color: red');
    }else{
        if(isSlowConnection) {
            console.info("%creduce video quality", 'color: white; background-color: red');
        } else {
            console.info("%cmaintain or increase the video quality", 'color: white; background-color: green');
        }
    }
    chkInternetStatus();
})



function chkInternetStatus() {
  if(navigator.onLine) {
      console.warn("You're online!!!");
  } else {
      console.error("Oops! You're offline. Please check your network connection...");
  }
}