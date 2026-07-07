(function () {
  const CAT_COLOR_VAR = {
    grimdark: "--cat-grimdark",
    concept: "--cat-concept",
    pixel: "--cat-pixel",
    "3d": "--cat-3d",
    game: "--cat-game",
  };

  const gallery = document.getElementById("gallery");
  const emptyState = document.getElementById("emptyState");
  const filterButtons = document.getElementById("filterButtons");
  const searchInput = document.getElementById("search");
  const artistCount = document.getElementById("artistCount");

  const modalOverlay = document.getElementById("modalOverlay");
  const modalClose = document.getElementById("modalClose");
  const modalCategory = document.getElementById("modalCategory");
  const modalName = document.getElementById("modalName");
  const modalBio = document.getElementById("modalBio");
  const modalWorks = document.getElementById("modalWorks");
  const modalLinks = document.getElementById("modalLinks");

  let activeCategory = "all";
  let searchTerm = "";

  function categoryLabel(key) {
    const cat = CATEGORIES.find((c) => c.key === key);
    return cat ? cat.label : key;
  }

  function colorVar(key) {
    return `var(${CAT_COLOR_VAR[key] || "--gold"})`;
  }

  function renderFilters() {
    const all = document.createElement("button");
    all.className = "filter-btn active";
    all.textContent = "Tous";
    all.dataset.key = "all";
    filterButtons.appendChild(all);

    CATEGORIES.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = "filter-btn";
      btn.textContent = cat.label;
      btn.dataset.key = cat.key;
      filterButtons.appendChild(btn);
    });

    filterButtons.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      activeCategory = btn.dataset.key;
      [...filterButtons.children].forEach((b) =>
        b.classList.toggle("active", b === btn)
      );
      renderGallery();
    });
  }

  function matchesFilters(artist) {
    const inCategory =
      activeCategory === "all" || artist.category === activeCategory;
    const inSearch =
      !searchTerm || artist.name.toLowerCase().includes(searchTerm);
    return inCategory && inSearch;
  }

  function renderGallery() {
    gallery.innerHTML = "";
    const visible = ARTISTS.filter(matchesFilters);
    emptyState.hidden = visible.length !== 0;

    visible.forEach((artist) => {
      const card = document.createElement("article");
      card.className = "card";
      card.style.setProperty("--cat-color", colorVar(artist.category));
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Voir la fiche de ${artist.name}`);

      const catEl = document.createElement("span");
      catEl.className = "card-category";
      catEl.textContent = categoryLabel(artist.category);

      const nameEl = document.createElement("h2");
      nameEl.textContent = artist.name;

      const bioEl = document.createElement("p");
      bioEl.textContent = artist.bio;

      card.appendChild(catEl);
      card.appendChild(nameEl);
      card.appendChild(bioEl);

      card.addEventListener("click", () => openModal(artist));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(artist);
        }
      });

      gallery.appendChild(card);
    });
  }

  function openModal(artist) {
    modalOverlay.style.setProperty("--cat-color", colorVar(artist.category));
    modalCategory.textContent = categoryLabel(artist.category);
    modalName.textContent = artist.name;
    modalBio.textContent = artist.bio;

    modalWorks.innerHTML = "";
    if (artist.works && artist.works.length) {
      artist.works.forEach((w) => {
        const li = document.createElement("li");
        li.textContent = w.year ? `${w.title} ` : w.title;
        if (w.year) {
          const span = document.createElement("span");
          span.className = "work-year";
          span.textContent = `(${w.year})`;
          li.appendChild(span);
        }
        modalWorks.appendChild(li);
      });
    } else {
      modalWorks.innerHTML = '<li class="no-data">Aucune œuvre renseignée pour le moment.</li>';
    }

    modalLinks.innerHTML = "";
    if (artist.links && artist.links.length) {
      artist.links.forEach((l) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = l.url;
        a.textContent = l.label;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        li.appendChild(a);
        modalLinks.appendChild(li);
      });
    } else {
      modalLinks.innerHTML = '<li class="no-data">Aucun lien renseigné pour le moment.</li>';
    }

    modalOverlay.hidden = false;
    document.body.style.overflow = "hidden";
    modalClose.focus();
  }

  function closeModal() {
    modalOverlay.hidden = true;
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalOverlay.hidden) closeModal();
  });

  searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value.trim().toLowerCase();
    renderGallery();
  });

  renderFilters();
  renderGallery();
  artistCount.textContent = ARTISTS.length;
})();
