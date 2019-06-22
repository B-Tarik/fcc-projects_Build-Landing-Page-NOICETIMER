export function revealOnScroll(arr, offset) {
  // hide items
  arr.map(elm => elm.classList.add('hide-item'))
  
  // create waypoint
  arr.map(elm => {
    new Waypoint({
      element: elm,
      handler: () => {
        elm.classList.add('reveal-item')
      },
      offset
    });
  });
}