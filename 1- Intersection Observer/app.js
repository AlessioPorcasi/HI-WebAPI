/* global IntersectionObserver */
var scroller = document.querySelector('#scroller');
var sentinel = document.querySelector('#sentinel');
var counter = 1;

function loadItems(n) {
  for (var i = 0; i < n; i++) {
    var newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.textContent = 'Item ' + counter++;
    scroller.appendChild(newItem);
  }
}

var intersectionObserver = new IntersectionObserver(entries => {
  // If the browser is busy while scrolling happens, multiple entries can
  // accumulate between invocations of this callback. As long as any one
  // of the notifications reports the sentinel within the scrolling viewport,
  // we add more content.
  if (entries.some(entry => entry.intersectionRatio > 0)) {
    loadItems(10);
    // appendChild will move the existing element, so there is no need to
    // remove it first.
    scroller.appendChild(sentinel);
    loadItems(5);
    ChromeSamples.setStatus('Loaded up to item ' + counter);
  }
});

intersectionObserver.observe(sentinel);

/*var options = {
    root: document.querySelector("#parent"), // è il contenitore che il browser utilizza per verificare la visibilità di un altro elemento. Se non specificato, il browser utilizza il viewport. Se specificato, esso deve essere obbligatoriamente padre dell'elemento su cui andiamo ad agganciare l'observer;
    rootMargin: "100px", //sono i margini dell'elemento root. Permettono di modificare le dimensioni del box per alterare il calcolo della visibilità dell'elemento;
    threshold: 1.0 //indica la percentuale di visibilità superata la quale viene scatenata la funzione di callback. È possibile specificare un singolo valore o un array di valori.
}
intersectionObserver.observe(sentinel, options);
*/
