(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.querySelector(".site-nav");
  var navLinks = document.querySelectorAll(".site-nav a");
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navToggle.setAttribute("aria-label", expanded ? "Open menu" : "Close menu");
      siteNav.classList.toggle("is-open", !expanded);
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
        siteNav.classList.remove("is-open");
      });
    });
  }

  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  var galleryImages = window.GALLERY_IMAGES;
  var galleryHosts = document.querySelectorAll("[data-gallery-marquee]");

  if (galleryImages && galleryImages.length && galleryHosts.length) {
    var midpoint = Math.ceil(galleryImages.length / 2);

    function sliceForTrack(index) {
      if (index === "1") {
        return galleryImages.slice(midpoint);
      }
      return galleryImages.slice(0, midpoint);
    }

    function createCard(item) {
      var figure = document.createElement("figure");
      figure.className = "gallery-card";
      var img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt;
      img.width = item.width;
      img.height = item.height;
      img.loading = "lazy";
      img.decoding = "async";
      figure.appendChild(img);
      return figure;
    }

    function buildGroup(items) {
      var group = document.createElement("div");
      group.className = "gallery-group";
      items.forEach(function (item) {
        group.appendChild(createCard(item));
      });
      return group;
    }

    galleryHosts.forEach(function (host) {
      var trackIndex = host.getAttribute("data-gallery-marquee");
      var items = sliceForTrack(trackIndex);
      if (!items.length) {
        return;
      }

      var track = document.createElement("div");
      track.className = "gallery-track";

      var primary = buildGroup(items);
      var duplicate = primary.cloneNode(true);
      duplicate.setAttribute("aria-hidden", "true");
      duplicate.querySelectorAll("img").forEach(function (img) {
        img.alt = "";
      });

      track.appendChild(primary);
      track.appendChild(duplicate);
      host.appendChild(track);
    });
  }
})();
