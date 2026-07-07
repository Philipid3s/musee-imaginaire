const CATEGORIES = [
  { key: "grimdark", label: "Grimdark / Dark Fantasy" },
  { key: "concept", label: "Concept Art / Film" },
  { key: "pixel", label: "Pixel / Voxel Art" },
  { key: "3d", label: "3D / Animation" },
  { key: "game", label: "Game Art / Illustration" },
];

const ARTISTS = [
  // === GRIMDARK / DARK FANTASY ===
  {
    name: "John Blanche",
    category: "grimdark",
    bio: "Illustrateur et sculpteur britannique (1948–2026), John Blanche a rejoint Games Workshop en 1977 et en est devenu le directeur artistique historique, façonnant l'identité visuelle de Warhammer Fantasy Battle, Warhammer 40 000 et Age of Sigmar sur plus de quatre décennies. Son style gothique, sombre et punk a donné naissance au mouvement « Blanchitsu », une approche de peinture de figurines à la palette limitée et à l'esthétique délabrée qui influence toujours la communauté aujourd'hui.",
    works: [
      { title: "Realm of Chaos (illustrations et couvertures)", year: "1988" },
      { title: "Ratspike (avec Ian Miller)", year: "1989" },
      { title: "Illustrations White Dwarf et boîtes Citadel Miniatures", year: "1980s-2000s" },
    ],
    links: [
      { label: "Wikipédia (FR)", url: "https://fr.wikipedia.org/wiki/John_Blanche" },
      { label: "Lexicanum", url: "https://wh40k.lexicanum.com/wiki/John_Blanche" },
      { label: "Galerie d'œuvres (40K Gallery)", url: "https://40k.gallery/artist/john-blanche/" },
      { label: "Warhammer Art", url: "https://www.warhammerart.com/collections/john-blanche-artwork" },
    ],
  },
  {
    name: "Karl Kopinski",
    category: "grimdark",
    bio: "Illustrateur britannique né en 1971 à Nottingham, largement autodidacte. Reconnu pour sa peinture traditionnelle (huile, aquarelle) et ses portraits expressifs, il a produit des couvertures et illustrations pour Games Workshop (Warhammer/40K), ainsi que de nombreuses cartes pour Magic: The Gathering et des travaux pour Ubisoft, Hasbro et Wizards of the Coast.",
    works: [
      { title: "Illustrations et couvertures Warhammer 40 000", year: "2000s" },
      { title: "Cartes Magic: The Gathering", year: "2008-présent" },
      { title: "Sketchbooks (série de carnets d'illustration)", year: "2010s-2020s" },
    ],
    links: [
      { label: "Site officiel", url: "https://karlkopinski.com/" },
      { label: "À propos de Karl", url: "https://karlkopinski.com/about-karl/" },
      { label: "Magic: The Gathering — fiche artiste", url: "https://gatherer.wizards.com/search?artistName=eq~Karl_Kopinski" },
      { label: "Lexicanum (FR)", url: "https://wh40k-fr.lexicanum.com/wiki/Karl_Kopinski" },
    ],
  },
  {
    name: "Adrian Smith",
    category: "grimdark",
    bio: "Illustrateur britannique, l'un des artistes emblématiques de Games Workshop dès la fin des années 1980, connu avec Ian Miller pour avoir façonné l'atmosphère sombre des débuts de Warhammer et 40K. Son style en ligne dure et son noir et blanc puissant ont marqué des publications comme Realm of Chaos: The Lost and the Damned (1990) et le magazine Inferno!. Il a aussi illustré pour Magic: The Gathering et travaillé comme concept artist pour EA Mythic et Ubisoft.",
    works: [
      { title: "Realm of Chaos: The Lost and the Damned", year: "1990" },
      { title: "Illustrations pour Inferno! (Games Workshop)", year: "1990s" },
      { title: "Warriors of Chaos / Armies of Chaos (couvertures)", year: "2000s" },
    ],
    links: [
      { label: "Wikipédia (EN)", url: "https://en.wikipedia.org/wiki/Adrian_Smith_(illustrator)" },
      { label: "ArtStation", url: "https://adrian-smith.artstation.com/" },
      { label: "Lexicanum", url: "https://wh40k.lexicanum.com/wiki/Adrian_Smith" },
    ],
  },
  {
    name: "Dave Gallagher",
    category: "grimdark",
    bio: "Illustrateur écossais formé au Dundee College of Art, actif comme illustrateur commercial depuis plus de quarante ans. Collaborateur prolifique de Games Workshop et de la Black Library, il a peint de nombreuses couvertures de codex et scènes de bataille épiques pour l'univers Warhammer 40 000, un travail compilé dans « The Face of Battle: The Colour Art of David Gallagher » (2001).",
    works: [
      { title: "The Face of Battle: The Colour Art of David Gallagher", year: "2001" },
      { title: "Chaplains and Commissars (illustrations)", year: "1990s-2000s" },
      { title: "Couvertures de codex Warhammer 40 000", year: "1990s-2010s" },
    ],
    links: [
      { label: "Site officiel", url: "https://www.davidgallagherart.co.uk/" },
      { label: "Lexicanum", url: "https://wh40k.lexicanum.com/wiki/Dave_Gallagher" },
      { label: "Warhammer Art", url: "https://www.warhammerart.com/collections/dave-gallagher-artwork" },
    ],
  },
  {
    name: "Frank Frazetta",
    category: "grimdark",
    bio: "Artiste américain (1928–2010), surnommé le « parrain de la fantasy art », pionnier de l'illustration fantastique moderne à l'huile. Ses couvertures pour Conan le Barbare et son tableau iconique « Death Dealer » (1973) ont redéfini le genre sword and sorcery et influencé des générations d'artistes, avec un usage caractéristique du clair-obscur et du dynamisme.",
    works: [
      { title: "Death Dealer I", year: "1973" },
      { title: "Conan the Barbarian / Conan the Conqueror (couvertures)", year: "1960s-1970s" },
      { title: "Egyptian Queen", year: "1969" },
    ],
    links: [
      { label: "Wikipédia (FR)", url: "https://fr.wikipedia.org/wiki/Frank_Frazetta" },
      { label: "Frazetta Art Museum", url: "https://www.frazettamuseum.com/" },
      { label: "Frazetta Girls (boutique officielle)", url: "https://www.frazettagirls.com/" },
    ],
  },
  {
    name: "Ian Miller",
    category: "grimdark",
    bio: "Illustrateur et écrivain britannique né en 1946, connu pour son style gothique à l'encre nerveuse et sa sensibilité macabre. Il a illustré des couvertures pour H. P. Lovecraft, les livres-jeux Fighting Fantasy, et de nombreuses publications de jeux de rôle et de figurines pour Games Workshop dans les années 1980. Il a coécrit avec John Blanche l'anthologie « Ratspike » (1989) et a contribué aux films de Ralph Bakshi « Wizards » et « Cool World ».",
    works: [
      { title: "Ratspike (avec John Blanche)", year: "1989" },
      { title: "The Secret Art of Ian Miller", year: "1979" },
      { title: "Illustrations pour Realm of Chaos et le 1er Warhammer 40 000", year: "1980s" },
    ],
    links: [
      { label: "Wikipédia (EN)", url: "https://en.wikipedia.org/wiki/Ian_Miller_(illustrator)" },
      { label: "Site officiel / portfolio", url: "https://www.ianmiller.studio" },
      { label: "Alison Eldred — œuvres originales GW", url: "https://www.alisoneldred.com/ian-miller/originals-for-sale-1/games-workshop-1/" },
    ],
  },
  {
    name: "Zdzisław Beksiński",
    category: "grimdark",
    bio: "Peintre, photographe et sculpteur polonais (1929–2005), autodidacte en peinture après des études d'architecture à Cracovie. Ses œuvres à l'huile de la « période fantastique » dépeignent des paysages post-apocalyptiques et des architectures organiques en décomposition, dans un surréalisme dystopique. Il refusait de titrer ses œuvres, laissant les spectateurs libres d'interprétation.",
    works: [
      { title: "Sans titre (peintures de la période fantastique)", year: "1970s-1980s" },
      { title: "Sans titre (architectures et figures en décomposition)", year: "1980s" },
    ],
    links: [
      { label: "Wikipédia (FR)", url: "https://fr.wikipedia.org/wiki/Zdzis%C5%82aw_Beksi%C5%84ski" },
      { label: "Culture.pl — Biographie", url: "https://culture.pl/en/artist/zdzislaw-beksinski" },
      { label: "WikiArt — Galerie d'œuvres", url: "https://www.wikiart.org/en/zdzislaw-beksinski" },
    ],
  },

  // === CONCEPT ART / FILM ===
  {
    name: "Syd Mead",
    category: "concept",
    bio: "Sydney Jay Mead (1933–2019) est un designer industriel et concept artist américain, surnommé le « visual futurist ». Diplômé de l'Art Center College of Design, il a d'abord travaillé pour Ford avant de révolutionner le cinéma de science-fiction avec ses gouaches lumineuses sur Blade Runner, Tron, Aliens et 2010.",
    works: [
      { title: "Blade Runner — Concept Art", year: "1982" },
      { title: "Tron — Concept Art", year: "1982" },
      { title: "2010: The Year We Make Contact — Concept Art", year: "1984" },
    ],
    links: [
      { label: "Site officiel", url: "https://www.sydmead.com/" },
      { label: "Wikipédia (FR)", url: "https://fr.wikipedia.org/wiki/Syd_Mead" },
      { label: "Boutique officielle", url: "https://shop.sydmead.com/" },
    ],
  },
  {
    name: "Ralph McQuarrie",
    category: "concept",
    bio: "Ralph McQuarrie (1929–2012) est un illustrateur et concept artist américain qui a défini l'identité visuelle de la trilogie originale Star Wars (Dark Vador, Chewbacca, Mos Eisley, l'Étoile Noire). Ses gouaches à la lumière douce ont aussi contribué à E.T., Battlestar Galactica et Cocoon (Oscar des meilleurs effets visuels en 1986).",
    works: [
      { title: "Star Wars — Concept Art (trilogie originale)", year: "1975-1977" },
      { title: "Cantina de Mos Eisley — Concept Art", year: "1977" },
      { title: "E.T. the Extra-Terrestrial — Concept Art", year: "1982" },
    ],
    links: [
      { label: "Wikipédia (EN)", url: "https://en.wikipedia.org/wiki/Ralph_McQuarrie" },
      { label: "Wikipédia (FR)", url: "https://fr.wikipedia.org/wiki/Ralph_McQuarrie" },
      { label: "StarWars.com — hommage", url: "https://www.starwars.com/news/celebrating-a-master-inside-star-wars-art-ralph-mcquarrie" },
    ],
  },
  {
    name: "Moebius / Jean Giraud",
    category: "concept",
    bio: "Jean Giraud (1938–2012), dit Mœbius, est un dessinateur et scénariste français, figure majeure de la bande dessinée franco-belge et cofondateur du magazine Métal Hurlant (1975). Sous le pseudonyme Mœbius, il développe une ligne claire et des mondes oniriques qui influenceront le cinéma via Alien, Tron et Le Cinquième Élément.",
    works: [
      { title: "Arzach", year: "1975" },
      { title: "L'Incal", year: "1980" },
      { title: "Alien — Concept Art", year: "1979" },
    ],
    links: [
      { label: "Site officiel (Moebius Production)", url: "https://www.moebius.fr/page-Biographie" },
      { label: "Wikipédia (FR)", url: "https://fr.wikipedia.org/wiki/Jean_Giraud" },
    ],
  },
  {
    name: "H.R. Giger",
    category: "concept",
    bio: "Hans Ruedi Giger (1940–2014) est un artiste suisse, créateur du style « biomécanique » mêlant corps organiques et machines. Il obtient l'Oscar des meilleurs effets visuels en 1980 pour sa conception du Xénomorphe dans Alien, inspirée de sa peinture Necronom IV, faisant le pont entre concept art SF et esthétique grimdark.",
    works: [
      { title: "Necronom IV", year: "1976" },
      { title: "Alien — Design du Xénomorphe", year: "1979" },
      { title: "Species — Design de Sil", year: "1995" },
    ],
    links: [
      { label: "Musée H.R. Giger (officiel)", url: "https://www.hrgigermuseum.com/" },
      { label: "Wikipédia (FR)", url: "https://fr.wikipedia.org/wiki/H._R._Giger" },
    ],
  },
  {
    name: "Sparth / Nicolas Bouvier",
    category: "concept",
    bio: "Nicolas Bouvier, dit Sparth, est un concept artist français installé à Seattle. Directeur artistique senior chez 343 Industries pendant 14 ans, il a façonné l'identité visuelle de la saga Halo après avoir travaillé sur Prince of Persia: Warrior Within et Assassin's Creed, dans la continuité d'un futurisme minimaliste hérité de Syd Mead.",
    works: [
      { title: "Halo 4 — Concept Art", year: "2012" },
      { title: "Halo 5: Guardians — Concept Art", year: "2015" },
      { title: "Assassin's Creed — Concept Art", year: "2007" },
    ],
    links: [
      { label: "Portfolio officiel", url: "http://www.sparth.com/" },
      { label: "ArtStation", url: "https://www.artstation.com/sparth" },
      { label: "Concept Art World — profil", url: "https://conceptartworld.com/artists/nicolas-bouvier/" },
    ],
  },
  {
    name: "Simon Stålenhag",
    category: "concept",
    bio: "Simon Stålenhag (né en 1984 à Stockholm) est un artiste, musicien et designer suédois spécialisé dans la science-fiction rétro-futuriste, réalisée au Wacom avec un rendu proche de la peinture à l'huile. Ses paysages nostalgiques de la campagne suédoise mêlés à des machines rétro-SF ont inspiré la série Tales from the Loop (Amazon, 2020) et le film The Electric State (Netflix, 2025).",
    works: [
      { title: "Tales from the Loop", year: "2014" },
      { title: "The Electric State", year: "2018" },
      { title: "Things from the Flood", year: "2016" },
    ],
    links: [
      { label: "Site officiel", url: "https://www.simonstalenhag.se/" },
      { label: "Wikipédia (FR)", url: "https://fr.wikipedia.org/wiki/Simon_St%C3%A5lenhag" },
      { label: "Agence Salomonsson", url: "https://www.salomonssonagency.se/simon-stalenhag/" },
    ],
  },
  {
    name: "Jakub Różalski",
    category: "concept",
    bio: "Peintre et illustrateur polonais né en 1981 à Koszalin, connu sous le pseudonyme « Mr. Werewolf ». Il est le créateur de l'univers 1920+, une uchronie mêlant paysages pastoraux slaves et machines de guerre (mechs), qui a servi de base au jeu de plateau Scythe (2016) puis au jeu vidéo Iron Harvest (2020).",
    works: [
      { title: "1920+ (univers)", year: "2013-présent" },
      { title: "Scythe (illustrations du jeu de plateau)", year: "2016" },
      { title: "Iron Harvest (direction artistique)", year: "2020" },
    ],
    links: [
      { label: "Site officiel", url: "https://jrozalski.com/" },
      { label: "Wikipédia (EN)", url: "https://en.wikipedia.org/wiki/Jakub_R%C3%B3%C5%BCalski" },
      { label: "ArtStation", url: "https://www.artstation.com/jakubrozalski" },
    ],
  },
  {
    name: "Jon McCoy",
    category: "concept",
    bio: "Concept artist britannique basé à Londres, spécialisé dans les environnements et keyframes pour le cinéma. Il a collaboré avec le chef décorateur Dennis Gassner sur Blade Runner 2049 (2017) et a également contribué à Star Wars: Rogue One (2016), ainsi qu'à Doctor Strange.",
    works: [
      { title: "Blade Runner 2049", year: "2017" },
      { title: "Rogue One: A Star Wars Story", year: "2016" },
      { title: "Doctor Strange", year: "2016" },
    ],
    links: [
      { label: "Site officiel", url: "https://jonmccoyart.com/" },
      { label: "ArtStation", url: "https://jonmccoy.artstation.com/" },
      { label: "Instagram", url: "https://www.instagram.com/jonmccoyart/" },
    ],
  },
  {
    name: "Wayne Haag",
    category: "concept",
    bio: "Artiste et illustrateur australien (basé à Sydney), matte painter et concept artist depuis la fin des années 1990. Il a débuté sur Le Cinquième Élément (1997) chez Digital Domain, puis a travaillé chez Weta Digital sur Le Seigneur des Anneaux, avant de devenir concept artist sur Alien: Covenant (2017) et la série Foundation. Il est aussi peintre à l'huile de scènes de science-fiction.",
    works: [
      { title: "Le Cinquième Élément", year: "1997" },
      { title: "Alien: Covenant", year: "2017" },
      { title: "Foundation (série TV)", year: "2021" },
    ],
    links: [
      { label: "Wikipédia (EN)", url: "https://en.wikipedia.org/wiki/Wayne_Haag" },
      { label: "ArtStation", url: "https://ankaris.artstation.com/" },
      { label: "Site personnel (Ankaris)", url: "https://www.ankaris.com/" },
    ],
  },
  {
    name: "Paul Reid",
    category: "concept",
    bio: "Peintre figuratif écossais né en 1975 à Scone, Perth. Diplômé avec mention du Duncan of Jordanstone College of Art de Dundee, il réinterprète en peinture à l'huile les mythologies grecque, celtique et nordique — dieux, héros et monstres — dans un style influencé par les maîtres anciens comme Rembrandt et Caravage.",
    works: [
      { title: "Theseus and the Minotaur", year: "2021" },
      { title: "Circe" },
      { title: "The Minotaur (série)" },
    ],
    links: [
      { label: "Site officiel", url: "https://www.paulreidart.co.uk/about" },
      { label: "Scottish Gallery", url: "https://scottish-gallery.co.uk/artists/paul-reid/" },
      { label: "Instagram", url: "https://www.instagram.com/paulreidartist/" },
    ],
  },
  {
    name: "Philipp Urlich",
    category: "concept",
    bio: "Artiste visuel suisse (basé à Schaffhouse), spécialisé dans les paysages fantastiques et l'art d'environnement. Après des études d'art et de graphisme à Zurich, il a repris la peinture professionnelle en 2019 et travaille depuis en freelance pour des studios de jeux et des éditeurs, notamment Games Workshop / Black Library et Wizards of the Coast / Random House pour les couvertures de la trilogie Dragonlance.",
    works: [
      { title: "Dragonlance: Dragons of Deceit (couverture)", year: "2023" },
      { title: "Dragonlance: Dragons of Fate (couverture)", year: "2024" },
      { title: "Illustrations Warhammer 40,000 / Black Library" },
    ],
    links: [
      { label: "Site officiel", url: "https://urlich.art/" },
      { label: "ArtStation", url: "https://www.artstation.com/somartist" },
      { label: "Resume", url: "https://urlich.art/resume" },
    ],
  },

  // === PIXEL / VOXEL ART ===
  {
    name: "Mark Ferrari",
    category: "pixel",
    bio: "Mark J. Ferrari est une figure légendaire du pixel art, connu pour son travail chez Lucasfilm/LucasArts sur des jeux d'aventure cultes comme Loom et The Secret of Monkey Island. Il est surtout célèbre pour avoir inventé des approches uniques de « color cycling » (cyclage de palette), permettant d'animer pluie, vagues et lumière dans une image fixe sans changer un seul pixel. Il est revenu créer les décors de Thimbleweed Park et propose l'application Living Worlds.",
    works: [
      { title: "Loom", year: "1990" },
      { title: "The Secret of Monkey Island", year: "1990" },
      { title: "Thimbleweed Park", year: "2017" },
    ],
    links: [
      { label: "Site officiel", url: "https://www.markferrari.com/" },
      { label: "Tutoriel color cycling", url: "https://www.effectgames.com/effect/article-Old_School_Color_Cycling_with_HTML5.html" },
      { label: "Living Worlds (app)", url: "https://pixfabrik.com/livingworlds/" },
    ],
  },
  {
    name: "Waneella",
    category: "pixel",
    bio: "Waneella (Valeriya Sanchilo) est une artiste pixel art connue pour ses scènes urbaines nocturnes néon, souvent inspirées du Japon et de l'esthétique cyberpunk façon Blade Runner. Elle publie régulièrement des GIFs animés et a sorti plusieurs artbooks (Pixelscapes, Decade) ainsi qu'un jeu vidéo, Hull Rupture.",
    works: [
      { title: "Pixelscapes", year: "2021" },
      { title: "Decade" },
      { title: "Hull Rupture" },
    ],
    links: [
      { label: "Site officiel", url: "https://waneella.com/" },
      { label: "X (Twitter)", url: "https://x.com/waneella_" },
      { label: "Instagram", url: "https://www.instagram.com/waneella/" },
    ],
  },
  {
    name: "Gustavo Viselner",
    category: "pixel",
    bio: "Illustrateur et game artist né à Buenos Aires et basé à Tel Aviv, formé à la Bezalel Academy of Arts and Design et à la School of Visual Arts de New York. Sa spécialité est le pixel art pop culture : il crée des scènes pixelisées hommages à des séries télé cultes comme Seinfeld ou Stranger Things. Il est aussi Art Director et co-fondateur des studios Animetas et The Yearbook Club.",
    works: [
      { title: "Pixel Art hommage à Seinfeld", year: "2018" },
      { title: "Pixel Art hommage à Stranger Things" },
    ],
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/pixelgustavo" },
      { label: "Instagram", url: "https://www.instagram.com/pixelgustavo/" },
      { label: "Behance", url: "https://www.behance.net/gustavo_v" },
    ],
  },
  {
    name: "Valenberg",
    category: "pixel",
    bio: "Valenberg est un pixel artist allemand connu pour son travail sur VirtuaVerse, un jeu d'aventure point-and-click cyberpunk sorti en 2020, développé avec le studio Theta Division. Son style se distingue par des ambiances néon animées très détaillées, mêlant esthétique cyberpunk et influences japonaises.",
    works: [{ title: "VirtuaVerse", year: "2020" }],
    links: [
      { label: "X (Twitter)", url: "https://x.com/mrvalenberg" },
      { label: "DeviantArt", url: "https://www.deviantart.com/valenberg" },
      { label: "Instagram", url: "https://www.instagram.com/mr.valenberg/" },
    ],
  },
  {
    name: 'Thomas Feichtmeir "Cyangmou"',
    category: "pixel",
    bio: "Thomas Feichtmeir, alias Cyangmou, est un artiste de jeu vidéo autrichien spécialisé en pixel art, avec plus d'une décennie d'expérience et une contribution à plus de 25 jeux publiés (dont Vampire Survivors, Blasphemous, Dome Keeper, Symphony of War). Il est une référence technique reconnue de la communauté pixel art grâce à ses tutoriels approfondis et ses streams pédagogiques hebdomadaires sur Twitch.",
    works: [
      { title: "Vampire Survivors (contribution artistique)" },
      { title: "Blasphemous (contribution artistique)" },
      { title: "Isometric games don't exist! (tutoriel)", year: "2024" },
    ],
    links: [
      { label: "Itch.io", url: "https://cyangmou.itch.io/" },
      { label: "X (Twitter)", url: "https://x.com/cyangmou" },
      { label: "Ko-fi (tutoriels)", url: "https://ko-fi.com/cyangmou" },
    ],
  },
  {
    name: "Kenze Wee",
    category: "pixel",
    bio: "Artiste pixel art basé à Singapour, connu en ligne sous le pseudonyme Seppuku_Doge. Il crée des scènes atmosphériques néo-rétro à thème cyberpunk et science-fiction (véhicules, distributeurs futuristes, mechs), et a collaboré avec le studio ION LANDS sur des illustrations pour le jeu Cloudpunk.",
    works: [{ title: "Cloudpunk (illustrations, avec ION LANDS)", year: "2020" }],
    links: [
      { label: "Portfolio", url: "https://kenzewee.carrd.co/" },
      { label: "X (Twitter)", url: "https://x.com/Seppuku_Doge" },
      { label: "Behance", url: "https://www.behance.net/Seppuku_Doge" },
    ],
  },
  {
    name: "Gordon Zuchhold",
    category: "pixel",
    bio: "Artiste pixel/voxel basé au Chili, connu pour ses scènes urbaines nocturnes baignées de néons, mêlant pixel art et voxel art dans des animations de villes futuristes et cyberpunk. Il travaille également sur MAX GREENE, un jeu d'aventure point-and-click de science-fiction.",
    works: [
      { title: "The Slabs (pixel art cityscape)" },
      { title: "Luminal Currents" },
      { title: "MAX GREENE" },
    ],
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/gordonzuchhold" },
      { label: "Instagram", url: "https://www.instagram.com/gordonzuchhold/" },
      { label: "YouTube", url: "https://www.youtube.com/channel/UCjxwmcdX8FJyZiiVdpZZIOQ" },
    ],
  },

  // === 3D / ANIMATION ===
  {
    name: "Clément Morin",
    category: "3d",
    bio: "Artiste 3D originaire de Normandie et diplômé des Gobelins à Paris, Clément Morin explore avec nostalgie l'imaginaire de l'enfance à travers des figures solitaires plongeant dans des mondes colorés et oniriques, influencé notamment par l'univers du Studio Ghibli. Il a réalisé la série documentaire « Insignificant » (co-produite avec le CNRS, diffusée sur Arte) et collabore avec des marques comme Chanel, Ubisoft et Guerlain.",
    works: [
      { title: "Insignificant (série documentaire, CNRS/Arte)", year: "2015-2019" },
      { title: "Installation pour La Samaritaine (Paris)", year: "2023" },
      { title: "Vente aux enchères numérique Sotheby's Paris", year: "2023" },
    ],
    links: [
      { label: "Site officiel", url: "https://www.clement-morin.com" },
      { label: "Instagram", url: "https://www.instagram.com/clementmor1/" },
      { label: "Vimeo", url: "https://vimeo.com/clementmorin" },
    ],
  },
  {
    name: "Wit Olszewski",
    category: "3d",
    bio: "Wit Olszewski est un artiste 3D généraliste et motion designer, spécialisé dans la création de dioramas numériques en boucle infinie (« looping 3D mini-worlds ») réalisés avec Cinema4D et Redshift. Inspiré par les jeux vidéo, les parcs à miniatures et les boules à neige de son enfance, il conçoit des scènes très détaillées observées depuis une perspective quasi divine ; son diorama inspiré du jeu Among Us a été vu par plus de 14 millions de personnes sur TikTok.",
    works: [
      { title: "Among Us' Main Lounge (diorama 3D)", year: "2020" },
      { title: "At the Water Mill" },
      { title: "Brave New Mini-Worlds (série de dioramas animés)" },
    ],
    links: [
      { label: "Site officiel", url: "https://witolszewski.pl/" },
      { label: "Behance", url: "https://www.behance.net/witolszewski" },
      { label: "Instagram", url: "https://www.instagram.com/witolszewski/" },
    ],
  },

  // === GAME ART / ILLUSTRATION ===
  {
    name: "Sylvain Sarrailh / Tohad",
    category: "game",
    bio: "Sylvain Sarrailh, connu sous le pseudonyme Tohad, est un illustrateur, directeur artistique et concept artist français basé à Toulouse. Il a collaboré avec des studios comme Guerrilla Games, Rocksteady, Ubisoft ou Illumination, et dirige aujourd'hui le studio Umeshu Lovers, reconnu pour ses environnements peints à l'atmosphère lumineuse et fantastique.",
    works: [{ title: "Forest of Liars" }, { title: "Ener's Wrath" }],
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/tohad" },
      { label: "Instagram", url: "https://www.instagram.com/sylvainsarrailh/" },
      { label: "DeviantArt", url: "https://www.deviantart.com/tohad" },
    ],
  },
  {
    name: "Kazuo Oga",
    category: "game",
    bio: "Kazuo Oga est un directeur artistique et peintre de décors japonais, né en 1952 dans la préfecture d'Akita. Entré au Studio Ghibli en 1988, il devient directeur des décors sur Mon voisin Totoro, s'inspirant des paysages de son enfance à Akita, puis poursuit sur Princesse Mononoke, Pompoko ou Porco Rosso, imposant un style de gouache traditionnelle célébrant la nature japonaise.",
    works: [
      { title: "Mon voisin Totoro", year: "1988" },
      { title: "Princesse Mononoke", year: "1997" },
      { title: "Pompoko", year: "1994" },
    ],
    links: [
      { label: "Wikipédia (EN)", url: "https://en.wikipedia.org/wiki/Kazuo_Oga" },
      { label: "Ghibli Wiki", url: "https://ghibli.fandom.com/wiki/Kazuo_Oga" },
    ],
  },
  {
    name: "Joanne Tran",
    category: "game",
    bio: "Joanne Tran est une artiste d'environnement 2D qui a rejoint Supergiant Games en 2018 après des passages chez EA Visceral et Sledgehammer Games. Elle a contribué aux décors peints à la main du jeu Hades, travaillant aux côtés de la directrice artistique Jen Zee, avant de participer à d'autres projets du studio.",
    works: [{ title: "Hades", year: "2020" }],
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/joannetran" },
      { label: "Instagram", url: "https://www.instagram.com/joannetran/" },
      { label: "Portfolio", url: "https://joannetranart.weebly.com/about.html" },
    ],
  },
  {
    name: "Liam Wong",
    category: "game",
    bio: "Liam Wong est un photographe et game designer écossais, ancien directeur artistique chez Ubisoft Montréal, où il fut nommé parmi les Forbes 30 Under 30. Il s'est fait connaître avec sa série photo nocturne de Tokyo TO:KY:OO, devenue le livre le plus financé par crowdfunding au Royaume-Uni, suivie du livre After Dark élargissant son travail à d'autres villes.",
    works: [
      { title: "TO:KY:OO", year: "2018" },
      { title: "After Dark", year: "2022" },
    ],
    links: [
      { label: "Wikipédia (EN)", url: "https://en.wikipedia.org/wiki/Liam_Wong" },
      { label: "Site officiel", url: "https://www.liamwong.com/" },
    ],
  },
  {
    name: "Little Thunder",
    category: "game",
    bio: "Little Thunder (Cheng Sum-ling, née en 1984) est une illustratrice et bédéiste hongkongaise autodidacte, influencée par son père peintre à l'encre. Son style mêle manga japonais, pin-up américaine et culture hongkongaise, à travers des bandes dessinées comme Kylooe et des livres d'illustration mettant en scène des figures féminines.",
    works: [
      { title: "Kylooe" },
      { title: "Sisterhood: Little Thunder Art Book" },
      { title: "Scent of Hong Kong" },
    ],
    links: [
      { label: "Wikipédia (EN)", url: "https://en.wikipedia.org/wiki/Little_Thunder_(cartoonist)" },
      { label: "Instagram", url: "https://www.instagram.com/littlethunder/" },
      { label: "Behance", url: "https://www.behance.net/thunderlittle" },
    ],
  },
  {
    name: "Stefan Große Halbuer",
    category: "game",
    bio: "Stefan Große Halbuer est un designer et illustrateur digital allemand basé à Münster, spécialisé dans les compositions isométriques transformant des scènes du quotidien en petits mondes miniatures. Il a notamment illustré des couvertures pour le magazine MINT et publié un guide dédié à l'art isométrique.",
    works: [
      { title: "The record shop of the future (MINT Magazine No. 43)" },
      { title: "Isometric Houses" },
    ],
    links: [
      { label: "Site officiel", url: "https://grossehalbuer.com/" },
      { label: "ArtStation", url: "https://grossehalbuer.artstation.com/" },
      { label: "Instagram", url: "https://www.instagram.com/plastic.pen/" },
    ],
  },
];
