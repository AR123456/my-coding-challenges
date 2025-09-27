// Minimal JS: measure, set CSS variables, clone first node for seamless loop
document.addEventListener("DOMContentLoaded", () => {
  const rolling = document.querySelector(".rolling");
  const list = rolling.querySelector(".word-list");

  // collect original items (not including any clones we might add)
  const originalItems = Array.from(list.children);
  const itemCount = originalItems.length;

  // clone the first element to the end so the stepped animation shows content on the final step
  if (itemCount > 0) {
    list.appendChild(originalItems[0].cloneNode(true));
  }

  // function to set CSS variables based on measured height
  function applyMeasurements() {
    const firstChild = list.children[0];
    // fallback height used if measurement fails
    const itemHeightPx =
      (firstChild && firstChild.getBoundingClientRect().height) || 30;
    rolling.style.setProperty("--item-height", itemHeightPx + "px");
    rolling.style.setProperty("--items", itemCount); // the animation steps use original count
    // you can also change per-item duration here if you want:
    // rolling.style.setProperty('--duration-per-item', '2s');
  }

  // measure on next frame (wait for layout) and on resize
  requestAnimationFrame(applyMeasurements);
  window.addEventListener("resize", () =>
    requestAnimationFrame(applyMeasurements)
  );
});
