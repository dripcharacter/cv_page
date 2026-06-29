// ============================================================
//  Single-page CV behaviour:
//   1. Scroll-spy — highlight the nav link for the section in view
//   2. Project search (free text) + tag-chip filtering, in place
// ============================================================
(function () {
  // ---------- 1. Scroll-spy ----------
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link[data-nav]"));
  var sections = navLinks
    .map(function (l) { return document.getElementById(l.getAttribute("data-nav")); })
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach(function (l) {
      l.classList.toggle("active", l.getAttribute("data-nav") === id);
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var visible = {};
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting ? e.intersectionRatio : 0; });
      // pick the section with the largest visible area
      var best = null, bestRatio = 0;
      sections.forEach(function (s) {
        var r = visible[s.id] || 0;
        if (r > bestRatio) { bestRatio = r; best = s.id; }
      });
      if (best) setActive(best);
    }, { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] });
    sections.forEach(function (s) { observer.observe(s); });
  }

  // Clicking a nav link sets it active immediately
  navLinks.forEach(function (l) {
    l.addEventListener("click", function () { setActive(l.getAttribute("data-nav")); });
  });

  // ---------- "Last updated" elapsed days (relative to the viewer) ----------
  var luTime = document.querySelector(".last-updated time[data-updated]");
  if (luTime) {
    var ago = luTime.parentNode.querySelector(".lu-ago");
    var updated = new Date(luTime.getAttribute("data-updated") + "T00:00:00");
    var days = Math.max(0, Math.floor((new Date() - updated) / 86400000));
    if (ago) ago.textContent = " (D+" + days + ")";
  }

  // ---------- 2. Publication search + tag filter ----------
  var list = document.getElementById("pub-list");
  if (!list) return;
  var cards = Array.prototype.slice.call(list.querySelectorAll(".pub"));
  var input = document.getElementById("pub-search");
  var tagBar = document.getElementById("pub-tags");
  var empty = document.getElementById("pub-empty");
  var activeTag = "*";

  function apply() {
    var q = (input && input.value ? input.value : "").trim().toLowerCase();
    var terms = q.split(/\s+/).filter(Boolean);
    var shown = 0;

    cards.forEach(function (card) {
      var hay = card.getAttribute("data-search") || "";
      var tags = (card.getAttribute("data-tags") || "").split(",").filter(Boolean);

      var tagOk = activeTag === "*" || tags.indexOf(activeTag) !== -1;
      var textOk = terms.every(function (t) { return hay.indexOf(t) !== -1; });

      var show = tagOk && textOk;
      card.style.display = show ? "" : "none";
      if (show) shown++;
    });

    if (empty) empty.hidden = shown !== 0;
  }

  if (input) input.addEventListener("input", apply);

  if (tagBar) {
    tagBar.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip) return;
      activeTag = chip.getAttribute("data-tag");
      tagBar.querySelectorAll(".chip").forEach(function (c) {
        c.classList.toggle("active", c === chip);
      });
      apply();
    });
  }
})();
