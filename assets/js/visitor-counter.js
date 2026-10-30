(function () {
  "use strict";

  var counter = document.querySelector("#visitor-counter .visitor-counter__status");
  var value = document.getElementById("busuanzi_value_site_pv");
  if (!counter || !value || document.getElementById("visitor-counter-request")) return;

  function show(text, description) {
    value.textContent = text;
    counter.title = description;
    counter.setAttribute("aria-label", description);
    // The navigation needs to remeasure after the count changes its width.
    window.dispatchEvent(new Event("resize"));
  }

  function unavailable() {
    show("—", "Total page views temporarily unavailable");
  }

  show("…", "Loading total page views");

  var request = document.createElement("script");
  var callback = "BusuanziCallback_" + Math.floor(Math.random() * 1099511627776);
  var finished = false;
  var timeout = window.setTimeout(unavailable, 12000);

  function finish() {
    finished = true;
    window.clearTimeout(timeout);
    request.remove();
    delete window[callback];
  }

  window[callback] = function (data) {
    var count = data && data.site_pv;
    if ((typeof count === "number" || typeof count === "string") &&
        /^\d+$/.test(String(count)) && Number.isSafeInteger(Number(count))) {
      show(String(count), "Total page views: " + count);
    } else {
      unavailable();
    }
    finish();
  };

  request.id = "visitor-counter-request";
  request.async = true;
  // Keep Busuanzi's original endpoint and referrer policy so historical counts
  // remain attached to the same site. Local hosting removes the remote JS hop.
  request.src = "https://busuanzi.ibruce.info/busuanzi?jsonpCallback=" + callback;
  request.referrerPolicy = "no-referrer-when-downgrade";
  request.onerror = function () {
    unavailable();
    finish();
  };
  request.onload = function () {
    if (!finished) {
      unavailable();
      finish();
    }
  };
  // A slow response may still restore the real count after the UI timeout.
  // Do not retry counting requests: the first request may already have counted.
  document.head.appendChild(request);
}());
