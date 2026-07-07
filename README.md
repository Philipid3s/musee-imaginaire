# Mon Musée Imaginaire

Une galerie personnelle dédiée aux artistes qui façonnent mon imaginaire — du grimdark de Warhammer aux mondes de science-fiction, du pixel art aux décors de jeux vidéo.

**🖼️ Visiter le musée : [philipid3s.github.io/musee-imaginaire](https://philipid3s.github.io/musee-imaginaire/)**

## Les salles

| Salle | Collection | Artistes |
|---|---|---|
| I | Grimdark / Dark Fantasy | John Blanche, Frank Frazetta, Zdzisław Beksiński… |
| II | Concept Art / Film | Syd Mead, Moebius, H.R. Giger, Simon Stålenhag… |
| III | Pixel / Voxel Art | Mark Ferrari, Waneella, Cyangmou… |
| IV | 3D / Animation | Clément Morin, Wit Olszewski |
| V | Game Art / Illustration | Kazuo Oga, Tohad, Liam Wong… |

Chaque fiche d'artiste comprend une note personnelle, une courte biographie, quelques œuvres représentatives et des liens de référence (site officiel, ArtStation, Wikipédia…).

## Technique

Site 100 % statique — HTML, CSS et JavaScript vanilla, sans build ni dépendance. Hébergé sur GitHub Pages.

- `index.html` — structure de la page
- `css/style.css` — thème « musée gothique » (Cinzel + EB Garamond, grain, vignettage)
- `js/data.js` — les données des artistes (c'est ici qu'on ajoute ou modifie un artiste)
- `js/app.js` — rendu des salles, filtres, recherche, fiches modales, liens profonds

### Ajouter un artiste

Ajouter une entrée dans le tableau `ARTISTS` de `js/data.js` :

```js
{
  name: "Nom de l'artiste",
  category: "grimdark", // grimdark | concept | pixel | 3d | game
  note: "Pourquoi cet artiste compte pour moi.", // optionnel
  bio: "Courte biographie factuelle.",
  works: [{ title: "Œuvre", year: "2020" }],
  links: [{ label: "Site officiel", url: "https://…" }],
}
```

### Partager une fiche

Chaque artiste a un lien profond : `…/musee-imaginaire/#frank-frazetta` ouvre directement sa fiche.
