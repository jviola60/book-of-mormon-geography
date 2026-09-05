# The Comprehensive Textual Architecture of the Book of Mormon - Interactive Atlas

An interactive, high-resolution cartographic atlas and scriptural codex rigorously calibrated to the internal text, travel times, day journeys, and geographical relationships of the Book of Mormon.

![Book of Mormon Geography Atlas Preview](Book%20of%20Mormon%20Geography%20Clean.jpg)

---

## Key Features

- **94 Scripturally Attested Landmarks**: Every city, fortress, mountain, valley, and body of water is documented with verbatim verses, historical summaries, and key figures.
- **Strict Solid Land Geography**: 100% verified solid-land cartography—zero orphaned cities in water bodies (Waters of Sebus, Waters of Ripliancum, East Sea, and West Sea).
- **Interactive 4-Era Cataclysm Visualizer**:
  1. *Early Republic (92 BC – 1 BC)*
  2. *Zionic Hope & Gathering (AD 1 – AD 33)*
  3. *Crucifixion & Great Destruction (AD 34)* — Real-time physical transformations: Mount Moronihah, Waters of Jerusalem/Onihah/Mocum, earth chasms, and scorched ruins.
  4. *Era of Peace & 4 Nephi Golden Age (AD 35 – AD 200)*
- **Scriptural Expeditions & Military March Routes**: Interactive waypoints and paths for historic journeys (Alma's missions, Helaman's stripling warrior defense chain, Ammon's travels, Limhi's escape, Mormon's retreat).
- **Scriptural Codex Drawer**: Rich slide-out panels with direct scripture references, notable historical events, and characters.
- **Semantic Level of Detail (LOD) & Quick Jump**: Smooth zoom/pan navigation with landmark filtering by category (Capitals, Cities, Fortresses, Waters, Sacred Sites, Wilderness, Regions).

---

## Technologies Used

- **Frontend**: HTML5, Vanilla JavaScript (ES6+), Modern CSS3
- **Graphics & Overlays**: Scalable Vector Graphics (SVG), High-Resolution 2120×3160 Parchment Artwork
- **Data Architecture**: Fully modular structured JavaScript dataset (`map-data.js`)

---

## Getting Started

### Local Setup
No build tools or heavy package managers required! Simply serve the directory with any local HTTP server:

```bash
# Python 3
python -m http.server 8088

# Node.js
npx serve -p 8088
```

Open your browser and navigate to:
```
http://localhost:8088
```

---

## Scriptural References & Standards
All text citations, distances, and historical notes adhere strictly to the text of the Book of Mormon as published by The Church of Jesus Christ of Latter-day Saints.
