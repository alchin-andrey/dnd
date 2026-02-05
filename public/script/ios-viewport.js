(function iosViewportLock() {
  const isIOS =
    /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    (navigator.maxTouchPoints > 1 && /Macintosh/i.test(navigator.userAgent));

  if (!isIOS) return;

  const content = "width=device-width, initial-scale=1, maximum-scale=1";

  let meta = document.querySelector('meta[name="viewport"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "viewport";
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
})();