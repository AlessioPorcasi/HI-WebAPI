let screenLock;
(async () => {
  screenLock = await getScreenLock();
})();



function isScreenLockSupported() {
  return ('wakeLock' in navigator);
}


async function getScreenLock() {
  if(isScreenLockSupported()){
    try {
        console.log("screen locked");
        screenLock = await navigator.wakeLock.request('screen');
        //Oppure
        // navigator.wakeLock.request('screen')
        //    .then(lock => { 
        //      screenLock = lock; 
        // });
    } catch(err) {
        console.log(err.name, err.message);
    }
    return screenLock;
  }
}

function release() { 
  if(typeof screenLock !== "undefined" && screenLock != null) {
    screenLock.release()
    .then(() => {
      console.log("Lock released 🎈");
      screenLock = null;
    });
  }
}


//Disattivazione automatica del blocco schermo al cambio tab
const cambiaVisibilita = document.addEventListener('visibilitychange', async () => {
  if (screenLock == null && document.visibilityState === 'visible') {
    getScreenLock();
  }else{
    release();
  }
});