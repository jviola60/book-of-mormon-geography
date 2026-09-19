/**
 * Book of Mormon Geography - Interactive Cartography Engine & Scriptural Codex
 * Formatted and structured to match the New Testament Geography Interactive Atlas
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // DOM ELEMENT SELECTIONS
  // ==========================================================================
  
  // Header Elements
  const brandLogoBtn = document.getElementById('brandLogoBtn');
  const globalSearchInput = document.getElementById('globalSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const searchResultsDropdown = document.getElementById('searchResultsDropdown');
  const regionSelectBtn = document.getElementById('regionSelectBtn');
  const regionDropdown = document.getElementById('regionDropdown');
  const storyToursBtn = document.getElementById('storyToursBtn');
  const quickJumpSelect = document.getElementById('quickJumpSelect');
  const toggleInspectorBtn = document.getElementById('toggleInspectorBtn');
  const inspectorBtnText = document.getElementById('inspectorBtnText');
  const openOldWorldBtn = document.getElementById('openOldWorldBtn');
  const openDisclaimerBtn = document.getElementById('openDisclaimerBtn');
  const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');

  // Layer Filter Bar Elements
  const filterChips = document.querySelectorAll('#filterBar .filter-chip');
  const statSitesCount = document.getElementById('statSitesCount');
  const statToursCount = document.getElementById('statToursCount');
  const statErasCount = document.getElementById('statErasCount');

  // Main Map Viewport & Canvas
  const viewport = document.getElementById('mapViewport');
  const stage = document.getElementById('mapStage');
  const mapImage = document.getElementById('mapImage');
  const journeySvg = document.getElementById('journeySvg');
  const territoryGroup = document.getElementById('territoryGroup');
  const cataclysmTerrainGroup = document.getElementById('cataclysmTerrainGroup');
  const riverSidonGroup = document.getElementById('riverSidonGroup');
  const pathsGroup = document.getElementById('pathsGroup');
  const markersLayer = document.getElementById('markersLayer');

  // Floating Overlays & HUD Controls
  const floatingEraBadge = document.getElementById('floatingEraBadge');
  const floatingEraTag = document.getElementById('floatingEraTag');
  const floatingEraTitle = document.getElementById('floatingEraTitle');
  const floatingEraDesc = document.getElementById('floatingEraDesc');
  const recenterBtn = document.getElementById('recenterBtn');
  const quickSouthwardBtn = document.getElementById('quickSouthwardBtn');
  const quickZarahemlaBtn = document.getElementById('quickZarahemlaBtn');
  const quickNorthwardBtn = document.getElementById('quickNorthwardBtn');
  const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomOutBtn = document.getElementById('zoomOutBtn');
  const mapLegend = document.getElementById('mapLegend');
  const legendToggleHeader = document.getElementById('legendToggleHeader');
  const legendCollapseBtn = document.getElementById('legendCollapseBtn');
  const legendBody = document.getElementById('legendBody');
  const coordsInspectorBadge = document.getElementById('coordsInspectorBadge');
  const coordsBadgeText = document.getElementById('coordsBadgeText');
  const mapScaleContainer = document.getElementById('mapScaleContainer');

  // Active Tour Stepper Player Bar
  const tourStepperBar = document.getElementById('tourStepperBar');
  const stepperTourName = document.getElementById('stepperTourName');
  const stepperStepCount = document.getElementById('stepperStepCount');
  const stepperStepNote = document.getElementById('stepperStepNote');
  const tourPrevStepBtn = document.getElementById('tourPrevStepBtn');
  const tourNextStepBtn = document.getElementById('tourNextStepBtn');
  const tourExitBtn = document.getElementById('tourExitBtn');

  // Detail Sidebar / Ancient Codex
  const detailSidebar = document.getElementById('detailSidebar');
  const sidebarEyebrow = document.getElementById('sidebarEyebrow');
  const sidebarTitle = document.getElementById('sidebarTitle');
  const closeSidebarBtn = document.getElementById('closeSidebarBtn');
  const sidebarTabs = document.querySelectorAll('#sidebarTabs .tab-btn');
  const sidebarContent = document.getElementById('sidebarContent');

  // Timeline Footer Elements
  const timelineFooter = document.getElementById('timelineFooter');
  const stepBackBtn = document.getElementById('stepBackBtn');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  const stepForwardBtn = document.getElementById('stepForwardBtn');
  const speedButtons = document.querySelectorAll('#speedSelector .speed-btn');
  const cataclysmQuickToggle = document.getElementById('cataclysmQuickToggle');
  const displayYear = document.getElementById('displayYear');
  const displaySeason = document.getElementById('displaySeason');
  const eraTabs = document.querySelectorAll('#eraTabs .era-tab');
  const eraSlider = document.getElementById('eraSlider');

  // Modals
  const tourModal = document.getElementById('tourModal');
  const toursGrid = document.getElementById('toursGrid');
  const closeTourModalBtn = document.getElementById('closeTourModalBtn');

  const scriptureModal = document.getElementById('scriptureModal');
  const scriptureModalBackdrop = document.getElementById('scriptureModalBackdrop');
  const closeScriptureModalBtn = document.getElementById('closeScriptureModal');
  const scriptureModalTitle = document.getElementById('scriptureModalTitle');
  const scriptureExternalLink = document.getElementById('scriptureExternalLink');
  const scriptureFooterLink = document.getElementById('scriptureFooterLink');
  const scriptureIframe = document.getElementById('scriptureIframe');
  const scriptureLoading = document.getElementById('scriptureLoading');

  const oldWorldModal = document.getElementById('oldWorldModal');
  const closeOldWorldModal = document.getElementById('closeOldWorldModal');

  const disclaimerModal = document.getElementById('disclaimerModal');
  const closeDisclaimerModal = document.getElementById('closeDisclaimerModal');

  const distanceScaleModal = document.getElementById('distanceScaleModal');
  const closeDistanceModalBtn = document.getElementById('closeDistanceModalBtn');

  const copyToast = document.getElementById('copyToast');

  // ==========================================================================
  // CONFIGURATION CONSTANTS & STATE
  // ==========================================================================
  const MAP_BASE_WIDTH = 2120;
  const MAP_BASE_HEIGHT = 3160;

  // Viewport Transform State
  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let minScale = 0.05;
  let maxScale = 3.5;

  // Pan & Drag State
  let isDragging = false;
  let startPointerX = 0;
  let startPointerY = 0;
  let startTranslateX = 0;
  let startTranslateY = 0;
  let activeLocationId = null;
  let activeTab = 'overview';

  // Multi-Select Layer Overlays
  const ALL_LAYERS = ['capitals', 'cities', 'regions', 'fortresses', 'sacred', 'waters', 'wilderness', 'cataclysm'];
  const activeLayers = new Set(ALL_LAYERS);

  // Coordinate Inspector
  let isInspectorActive = false;
  let lastHoveredPct = { x: 50.0, y: 50.0 };

  // Scriptural Distance Scale Bar State (Hidden by default; toggled via menus)
  let isDistanceScaleVisible = false;

  function setDistanceScaleVisibility(visible) {
    isDistanceScaleVisible = !!visible;
    if (mapScaleContainer) {
      mapScaleContainer.classList.toggle('is-visible', isDistanceScaleVisible);
    }
    const label = `Distance Scale on Map: ${isDistanceScaleVisible ? 'ON' : 'OFF'}`;
    const menuScaleText = document.getElementById('menuScaleText');
    if (menuScaleText) menuScaleText.textContent = label;
    const mobScaleText = document.getElementById('mobScaleText');
    if (mobScaleText) mobScaleText.textContent = label;
    const mobSheetScaleText = document.getElementById('mobSheetScaleText');
    if (mobSheetScaleText) mobSheetScaleText.textContent = label;

    const menuToggleDistanceScaleBtn = document.getElementById('menuToggleDistanceScaleBtn');
    if (menuToggleDistanceScaleBtn) menuToggleDistanceScaleBtn.classList.toggle('active', isDistanceScaleVisible);
    const mobToggleDistanceScaleBtn = document.getElementById('mobToggleDistanceScaleBtn');
    if (mobToggleDistanceScaleBtn) mobToggleDistanceScaleBtn.classList.toggle('active', isDistanceScaleVisible);
    const mobSheetToggleDistanceScaleBtn = document.getElementById('mobSheetToggleDistanceScaleBtn');
    if (mobSheetToggleDistanceScaleBtn) mobSheetToggleDistanceScaleBtn.classList.toggle('active', isDistanceScaleVisible);
  }

  function toggleDistanceScale() {
    setDistanceScaleVisibility(!isDistanceScaleVisible);
  }

  // Chronology & Playback State
  let currentEraStep = 0;
  let isPlaying = false;
  let playbackTimer = null;
  let playbackSpeed = 1; // 1x, 2x, 5x

  // Active Journey / Tour State
  let currentJourney = null;
  let currentStageIndex = 0;

  // Touch gesture pinch state
  let touchStartDist = 0;
  let touchStartScale = 1;
  let touchStartTime = 0;

  // ==========================================================================
  // MODAL UTILITIES (Reliable Display & Fade)
  // ==========================================================================
  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.style.display = 'flex';
    requestAnimationFrame(() => {
      modalEl.classList.add('show');
    });
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('show');
    setTimeout(() => {
      modalEl.style.display = 'none';
    }, 250);
  }

  // ==========================================================================
  // AUDIO EFFECTS (Deactivated per user preference)
  // ==========================================================================
  function playGentleChime() {
    // Audio deactivated
  }

  function playCataclysmRumble() {
    // Audio deactivated
  }

  // ==========================================================================
  // MAP INITIALIZATION & PROJECTION ENGINE
  // ==========================================================================
  function initMap() {
    const totalCount = Object.keys(mapLocations).length;
    if (statSitesCount) statSitesCount.textContent = totalCount;
    if (statToursCount) statToursCount.textContent = mapJourneys.length;
    if (statErasCount) statErasCount.textContent = chronologicalMilestones.length;

    // Mobile phone layout initialization: start as thin bottom sheet peek so map is dominant
    if (window.innerWidth <= 768 && detailSidebar) {
      detailSidebar.classList.add('peek');
      detailSidebar.classList.remove('closed');
    }

    const runSetup = () => {
      fitMapToScreen();
      renderTerritoryPolygons();
      renderCataclysmTerrain();
      renderMarkers();
      setupQuickJumpSelect();
      setupToursGrid();
      applyChronologicalStep(0);
      renderWelcomeSidebar();
      setupMobileAndDesktopNavigation();
      setupMobilePickerSheet();
    };

    if (mapImage.complete) {
      runSetup();
    } else {
      mapImage.onload = runSetup;
    }
  }

  function fitMapToScreen() {
    const vWidth = viewport.clientWidth || window.innerWidth;
    const vHeight = viewport.clientHeight || window.innerHeight;
    const imgWidth = MAP_BASE_WIDTH;
    const imgHeight = MAP_BASE_HEIGHT;

    const isMobile = window.innerWidth <= 768;
    const isDesktop = window.innerWidth > 768;
    const isSidebarOpen = detailSidebar && !detailSidebar.classList.contains('closed') && !detailSidebar.classList.contains('peek');
    const sidebarOffset = (isDesktop && isSidebarOpen) ? (detailSidebar.offsetWidth || 270) : 0;
    const availWidth = Math.max(320, vWidth - sidebarOffset);

    if (isMobile) {
      // Mobile framing: fit width edge-to-edge, center on core Promised Land (Y ~49%)
      scale = (availWidth * 0.98) / imgWidth;
      minScale = scale * 0.65;
      maxScale = 1.35; // ~7.5x magnification: ultra-sharp 1:1 pixel rendering without GPU texture blowout
      translateX = (availWidth - (imgWidth * scale)) / 2;
      translateY = (vHeight / 2) - (imgHeight * 0.49 * scale);
    } else {
      // Desktop framing: fill available canvas width to eliminate dark side void,
      // and frame core L1/L2 lands (Zarahemla, Nephi, Bountiful, Cumorah)
      const scaleToFillWidth = availWidth / imgWidth;
      const scaleToFitHeight = (vHeight * 1.35) / imgHeight;
      scale = Math.max(scaleToFillWidth, scaleToFitHeight, 0.68);
      minScale = 0.20;
      maxScale = 3.5;

      // Center horizontally on inhabited landmass centroid (X ~52%) to eliminate right-side void
      translateX = (availWidth / 2) - (imgWidth * 0.52 * scale);
      translateY = (vHeight / 2) - (imgHeight * 0.48 * scale);
    }

    applyTransform();
  }

  function applyTransform() {
    const vWidth = viewport.clientWidth || window.innerWidth;
    const vHeight = viewport.clientHeight || window.innerHeight;
    const currentW = MAP_BASE_WIDTH * scale;
    const currentH = MAP_BASE_HEIGHT * scale;

    // Constrain translation within reasonable view boundaries so map cannot be lost off-screen
    const minX = vWidth - currentW - (vWidth * 0.4);
    const maxX = vWidth * 0.4;
    const minY = vHeight - currentH - (vHeight * 0.4);
    const maxY = vHeight * 0.4;

    translateX = Math.min(Math.max(translateX, minX), maxX);
    translateY = Math.min(Math.max(translateY, minY), maxY);

    stage.style.transform = `translate3d(${translateX.toFixed(1)}px, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(4)})`;
  }

  function focusLocation(targetPctX, targetPctY, customScale) {
    const vWidth = viewport.clientWidth || window.innerWidth;
    const vHeight = viewport.clientHeight || window.innerHeight;
    const imgWidth = MAP_BASE_WIDTH;
    const imgHeight = MAP_BASE_HEIGHT;

    const targetX = (targetPctX / 100) * imgWidth;
    const targetY = (targetPctY / 100) * imgHeight;

    const isMobile = window.innerWidth <= 768;
    const isDesktop = window.innerWidth > 768;
    const isSidebarOpen = detailSidebar && !detailSidebar.classList.contains('closed') && !detailSidebar.classList.contains('peek');
    const sidebarOffset = (isDesktop && isSidebarOpen) ? (detailSidebar.offsetWidth || 270) : 0;
    const availWidth = Math.max(320, vWidth - sidebarOffset);

    // On mobile, sheet covers bottom 48%; center in upper 52% of viewport
    const offsetX = availWidth * 0.5;
    const offsetY = isMobile ? vHeight * 0.26 : vHeight * 0.5;

    const minFocusScale = isMobile ? 1.05 : 1.35;
    if (customScale) {
      scale = customScale;
    } else if (scale < minFocusScale) {
      scale = minFocusScale;
    }

    translateX = offsetX - (targetX * scale);
    translateY = offsetY - (targetY * scale);

    applyTransform();
  }

  // ==========================================================================
  // TERRITORIES & SVG CARTOGRAPHY
  // ==========================================================================
  function renderTerritoryPolygons() {
    if (!territoryGroup) return;
    territoryGroup.innerHTML = '';
    const imgWidth = MAP_BASE_WIDTH;
    const imgHeight = MAP_BASE_HEIGHT;

    journeySvg.setAttribute('viewBox', `0 0 ${imgWidth} ${imgHeight}`);

    Object.values(mapLocations).forEach(loc => {
      if (!loc.territoryPolygon || loc.territoryPolygon.length < 3) return;

      const pointsStr = loc.territoryPolygon.map(p => {
        const px = (p.x / 100) * imgWidth;
        const py = (p.y / 100) * imgHeight;
        return `${px},${py}`;
      }).join(' ');

      const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      polygon.setAttribute('points', pointsStr);
      polygon.setAttribute('class', `territory-polygon territory-${loc.category}`);
      polygon.setAttribute('data-id', loc.id);
      polygon.setAttribute('data-category', loc.category);
      polygon.setAttribute('title', `${loc.name} Territory`);

      polygon.style.fill = loc.category === 'waters' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(197, 160, 89, 0.12)';
      polygon.style.stroke = loc.category === 'waters' ? '#38bdf8' : 'rgba(197, 160, 89, 0.5)';
      polygon.style.strokeWidth = '2';
      polygon.style.strokeDasharray = '6 4';
      polygon.style.cursor = 'pointer';

      polygon.addEventListener('click', (e) => {
        e.stopPropagation();
        selectLocation(loc.id);
      });

      territoryGroup.appendChild(polygon);
    });
  }

  // River Sidon click handler
  if (riverSidonGroup) {
    riverSidonGroup.style.cursor = 'pointer';
    riverSidonGroup.addEventListener('click', (e) => {
      e.stopPropagation();
      selectLocation('river_sidon');
    });
  }

  // ==========================================================================
  // 3 NEPHI CATACLYSM REAL-TIME TERRAIN TRANSFORMATIONS (AD 34)
  // ==========================================================================
  function renderCataclysmTerrain() {
    if (!cataclysmTerrainGroup) return;
    cataclysmTerrainGroup.innerHTML = '';

    const imgW = MAP_BASE_WIDTH;
    const imgH = MAP_BASE_HEIGHT;
    const px = pct => (pct / 100) * imgW;
    const py = pct => (pct / 100) * imgH;

    const getCoords = (id, defX, defY) => {
      if (mapLocations[id] && mapLocations[id].coords) {
        return { x: px(mapLocations[id].coords.x), y: py(mapLocations[id].coords.y) };
      }
      return { x: px(defX), y: py(defY) };
    };

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'cataclysm-elements-wrapper');

    // 1. Water Inundation: City of Jerusalem (3 Nephi 9:7)
    const jerusalemPos = getCoords('jerusalem_city', 42.0, 78.5);
    const jerusalemLake = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    jerusalemLake.setAttribute('cx', jerusalemPos.x);
    jerusalemLake.setAttribute('cy', jerusalemPos.y);
    jerusalemLake.setAttribute('rx', px(2.8));
    jerusalemLake.setAttribute('ry', py(2.3));
    jerusalemLake.setAttribute('fill', 'url(#inundatedWaterGrad)');
    jerusalemLake.setAttribute('stroke', '#38bdf8');
    jerusalemLake.setAttribute('stroke-width', '2.5');
    g.appendChild(jerusalemLake);

    // 2. Waters of Onihah (3 Nephi 9:7)
    const onihahPos = getCoords('onihah', 48.5, 83.2);
    const onihahLake = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    onihahLake.setAttribute('cx', onihahPos.x);
    onihahLake.setAttribute('cy', onihahPos.y);
    onihahLake.setAttribute('rx', px(2.4));
    onihahLake.setAttribute('ry', py(2.0));
    onihahLake.setAttribute('fill', 'url(#inundatedWaterGrad)');
    onihahLake.setAttribute('stroke', '#0a9396');
    onihahLake.setAttribute('stroke-width', '2');
    g.appendChild(onihahLake);

    // 3. Waters of Mocum (3 Nephi 9:7)
    const mocumPos = getCoords('mocum', 45.0, 87.0);
    const mocumLake = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    mocumLake.setAttribute('cx', mocumPos.x);
    mocumLake.setAttribute('cy', mocumPos.y);
    mocumLake.setAttribute('rx', px(2.5));
    mocumLake.setAttribute('ry', py(2.1));
    mocumLake.setAttribute('fill', 'url(#inundatedWaterGrad)');
    mocumLake.setAttribute('stroke', '#0a9396');
    mocumLake.setAttribute('stroke-width', '2');
    g.appendChild(mocumLake);

    // 4. Ocean Inundation: City of Moroni (3 Nephi 8:9; 9:4)
    const moroniPos = getCoords('city_of_moroni', 82.5, 78.5);
    const moroniOcean = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    moroniOcean.setAttribute('d', `
      M ${moroniPos.x - px(2.5)} ${moroniPos.y - py(2.2)}
      Q ${moroniPos.x + px(2.2)} ${moroniPos.y - py(3.0)} ${moroniPos.x + px(3.6)} ${moroniPos.y}
      Q ${moroniPos.x + px(2.5)} ${moroniPos.y + py(3.5)} ${moroniPos.x - px(1.8)} ${moroniPos.y + py(2.5)}
      Q ${moroniPos.x - px(3.6)} ${moroniPos.y} ${moroniPos.x - px(2.5)} ${moroniPos.y - py(2.2)} Z
    `);
    moroniOcean.setAttribute('fill', 'url(#oceanSubmergeGrad)');
    moroniOcean.setAttribute('stroke', '#0582ca');
    moroniOcean.setAttribute('stroke-width', '3');
    g.appendChild(moroniOcean);

    // 5. Mount Moronihah Uplift (3 Nephi 8:10)
    const moronihahPos = getCoords('moronihah', 58.2, 59.5);
    const mountainPoly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    mountainPoly.setAttribute('points', `
      ${moronihahPos.x},${moronihahPos.y - py(4.2)}
      ${moronihahPos.x + px(3.8)},${moronihahPos.y + py(2.6)}
      ${moronihahPos.x - px(3.8)},${moronihahPos.y + py(2.6)}
    `);
    mountainPoly.setAttribute('fill', 'url(#mountainRidgeGrad)');
    mountainPoly.setAttribute('stroke', '#dfb15b');
    mountainPoly.setAttribute('stroke-width', '2.5');
    g.appendChild(mountainPoly);

    // 6. Scorched Ruins: Zarahemla, Jacobugath, Laman, Josh, Gad, Kishkumen
    const burnedSites = [
      getCoords('zarahemla', 46.2, 52.8),
      getCoords('city_of_jacobugath', 55.4, 21.0),
      getCoords('city_of_laman', 49.5, 77.0),
      getCoords('city_of_josh', 52.0, 80.0),
      getCoords('city_of_gad', 47.0, 79.5),
      getCoords('city_of_kishkumen', 44.0, 76.5)
    ];

    burnedSites.forEach(pos => {
      const crater = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      crater.setAttribute('cx', pos.x);
      crater.setAttribute('cy', pos.y);
      crater.setAttribute('r', px(1.6));
      crater.setAttribute('fill', 'url(#scorchedEarthGrad)');
      crater.setAttribute('stroke', '#c1440e');
      crater.setAttribute('stroke-width', '1.5');
      crater.setAttribute('stroke-dasharray', '3 2');
      g.appendChild(crater);
    });

    cataclysmTerrainGroup.appendChild(g);
  }

  // ==========================================================================
  // CONFIDENCE LEVEL SYSTEM & HELPERS
  // ==========================================================================
  function getConfidenceTitle(level) {
    switch (Number(level)) {
      case 1: return 'Explicit';
      case 2: return 'Strongly Supported';
      case 3: return 'Inferred';
      case 4: return 'Indeterminate';
      default: return 'Attested';
    }
  }

  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Score & match a location against a search query across names, aliases, people, scriptures, events, summaries
  function scoreLocationMatch(loc, rawQuery) {
    if (!rawQuery) return { matched: true, score: 0, reason: '' };
    const query = rawQuery.trim().toLowerCase();
    if (!query) return { matched: true, score: 0, reason: '' };

    const name = (loc.name || '').toLowerCase();
    const title = (loc.title || '').toLowerCase();
    const region = (loc.region || '').toLowerCase();
    const category = (loc.category || '').toLowerCase();
    const summary = (loc.summary || '').toLowerCase();
    const aliases = loc.aliases || [];
    const people = loc.notablePeople || [];
    const events = loc.historicalEvents || [];
    const refs = loc.refs || [];

    // 1. Exact or prefix match on primary name
    if (name === query) return { matched: true, score: 100, reason: '' };
    if (name.startsWith(query)) return { matched: true, score: 95, reason: '' };
    if (name.includes(query)) return { matched: true, score: 90, reason: '' };

    // 2. Match in aliases (e.g. "Land of the Zoramites", "Zoramites", "People called Zoramites", "Zerahemnah", "Anti-Nephi-Lehies")
    const matchedAlias = aliases.find(a => a.toLowerCase().includes(query) || query.includes(a.toLowerCase()));
    if (matchedAlias) return { matched: true, score: 85, reason: `Alias: ${matchedAlias}` };

    // 3. Match in notablePeople (e.g. "Zoram", "Zerahemnah", "King Zarahemla", "Moroni")
    const matchedPerson = people.find(p => p.toLowerCase().includes(query) || query.includes(p.toLowerCase()));
    if (matchedPerson) return { matched: true, score: 80, reason: `Person: ${matchedPerson}` };

    // 4. Match in title / subtitle
    if (title.includes(query)) return { matched: true, score: 75, reason: title };

    // 5. Match in region
    if (region.includes(query)) return { matched: true, score: 70, reason: '' };

    // 6. Match in historicalEvents
    const matchedEvent = events.find(e => e.toLowerCase().includes(query));
    if (matchedEvent) return { matched: true, score: 65, reason: `Event: ${matchedEvent}` };

    // 7. Match in summary
    if (summary.includes(query)) return { matched: true, score: 60, reason: '' };

    // 8. Match in refs
    const matchedRef = refs.find(r => (r.ref && r.ref.toLowerCase().includes(query)) || (r.text && r.text.toLowerCase().includes(query)));
    if (matchedRef) return { matched: true, score: 55, reason: `Scripture: ${matchedRef.ref}` };

    // 9. Multi-word tokenized search (handles phrases like "people called zoramites", "land of the zoramites", "leader zoram", "zerahemnah antionum")
    const stopWords = new Set(['the', 'a', 'an', 'and', 'of', 'in', 'to', 'for', 'by', 'on', 'at', 'called', 'named', 'people', 'who', 'were']);
    const tokens = query.split(/\s+/).filter(t => t.length > 0);
    const keyTokens = tokens.filter(t => !stopWords.has(t));
    const tokensToCheck = keyTokens.length > 0 ? keyTokens : tokens;

    const corpus = [
      name,
      title,
      region,
      category,
      summary,
      ...aliases.map(a => a.toLowerCase()),
      ...people.map(p => p.toLowerCase()),
      ...events.map(e => e.toLowerCase()),
      ...refs.map(r => `${r.ref || ''} ${r.text || ''}`.toLowerCase())
    ].join(' ');

    const allTokensMatch = tokensToCheck.every(tok => corpus.includes(tok));
    if (allTokensMatch) {
      let reason = '';
      const foundAlias = aliases.find(a => tokensToCheck.some(t => a.toLowerCase().includes(t)));
      const foundPerson = people.find(p => tokensToCheck.some(t => p.toLowerCase().includes(t)));
      if (foundAlias) reason = `Alias: ${foundAlias}`;
      else if (foundPerson) reason = `Person: ${foundPerson}`;
      else if (title) reason = title;

      return { matched: true, score: 50, reason };
    }

    return { matched: false, score: 0, reason: '' };
  }

  // Active filter state
  let activeConfidenceFilter = 'all'; // 'all', 'highest', '1', '2', '3', '4'
  let activeDispensationFilter = 'all'; // 'all', 'jaredite', 'nephite_lamanite'
  let hideIndeterminate = false;

  // ==========================================================================
  // LANDMARK MARKERS RENDERING (Enhanced with 4 Confidence Levels)
  // ==========================================================================
  function renderMarkers() {
    markersLayer.innerHTML = '';
    const imgWidth = MAP_BASE_WIDTH;
    const imgHeight = MAP_BASE_HEIGHT;

    Object.values(mapLocations).forEach(loc => {
      const pin = document.createElement('div');
      const confLevel = loc.confidenceLevel || 2;
      const isIndet = !!loc.isIndeterminate;
      const disp = loc.dispensation || 'nephite_lamanite';

      pin.className = `map-pin pin-${loc.category} conf-${confLevel} ${isIndet ? 'is-indeterminate' : ''} disp-${disp}`;
      pin.setAttribute('data-id', loc.id);
      pin.setAttribute('data-category', loc.category);
      pin.setAttribute('data-confidence', confLevel);
      pin.setAttribute('data-dispensation', disp);
      pin.setAttribute('title', `${loc.name} [Level ${confLevel} – ${getConfidenceTitle(confLevel)}]`);

      const pxX = (loc.coords.x / 100) * imgWidth;
      const pxY = (loc.coords.y / 100) * imgHeight;
      pin.style.left = `${pxX}px`;
      pin.style.top = `${pxY}px`;

      const isCapital = loc.category === 'capitals' || loc.id === 'zarahemla' || loc.id === 'lehi_nephi';

      // Pin icon symbol
      let iconSymbol = '📍';
      if (isIndet) iconSymbol = '❓';
      else if (isCapital) iconSymbol = '👑';
      else if (loc.category === 'fortresses') iconSymbol = '🛡️';
      else if (loc.category === 'sacred') iconSymbol = '🏛️';
      else if (loc.category === 'waters') iconSymbol = '🌊';
      else if (loc.category === 'wilderness') iconSymbol = '⛰️';
      else if (loc.category === 'cities') iconSymbol = '🏘️';
      else if (loc.category === 'regions') iconSymbol = '🗺️';

      // Miniature badge label
      const confBadgeText = isIndet ? '?' : `L${confLevel}`;

      pin.innerHTML = `
        <div class="pin-icon-wrap ${loc.category} ${isCapital ? 'capital' : ''} conf-ring-${confLevel}">
          <span>${iconSymbol}</span>
          <span class="pin-conf-badge conf-badge-${confLevel}" title="Confidence Level ${confLevel}: ${getConfidenceTitle(confLevel)}">${confBadgeText}</span>
        </div>
        <span class="pin-label ${isCapital ? 'capital-label' : ''}">
          ${loc.name} ${isIndet ? '<span class="pin-uncertain-pill">Position Uncertain</span>' : ''}
        </span>
      `;

      pin.addEventListener('click', (e) => {
        e.stopPropagation();
        selectLocation(loc.id);
      });

      markersLayer.appendChild(pin);
    });

    updateLayerVisibility();
  }

  // ==========================================================================
  // MULTI-SELECT OVERLAY & CONFIDENCE FILTER ENGINE
  // ==========================================================================
  // ==========================================================================
  // MULTI-SELECT OVERLAY & CONFIDENCE FILTER ENGINE
  // ==========================================================================
  function toggleLayer(layerKey) {
    if (layerKey === 'all') {
      const allActive = activeLayers.size === ALL_LAYERS.length;
      if (allActive) {
        activeLayers.clear();
      } else {
        ALL_LAYERS.forEach(k => activeLayers.add(k));
      }
    } else {
      if (activeLayers.has(layerKey)) {
        activeLayers.delete(layerKey);
      } else {
        activeLayers.add(layerKey);
      }
    }
    syncFilterChipsUI();
    updateLayerVisibility();
  }

  function setConfidenceFilter(confKey) {
    activeConfidenceFilter = confKey;
    syncFilterChipsUI();
    updateLayerVisibility();
  }

  function setDispensationFilter(dispKey) {
    activeDispensationFilter = dispKey;
    syncFilterChipsUI();
    updateLayerVisibility();
  }

  function setIndeterminateVisibility(visible) {
    hideIndeterminate = !visible;
    const desktopChip = document.getElementById('toggleIndeterminateChip');
    const mobChip = document.getElementById('mobToggleIndetChip');
    const mobNavChip = document.getElementById('mobNavToggleIndetChip');
    const indetToggleIcon = document.getElementById('indetToggleIcon');
    const indetToggleText = document.getElementById('indetToggleText');
    const mobIndetIcon = document.getElementById('mobIndetIcon');
    const mobIndetText = document.getElementById('mobIndetText');
    const mobNavIndetIcon = document.getElementById('mobNavIndetIcon');
    const mobNavIndetText = document.getElementById('mobNavIndetText');

    [desktopChip, mobChip, mobNavChip].forEach(btn => {
      if (!btn) return;
      btn.classList.toggle('hidden-mode', hideIndeterminate);
      btn.classList.toggle('active', !hideIndeterminate);
    });

    const icon = hideIndeterminate ? '🙈' : '👁️';
    const text = hideIndeterminate ? 'L4: Hidden' : 'L4: Visible';
    if (indetToggleIcon) indetToggleIcon.textContent = icon;
    if (indetToggleText) indetToggleText.textContent = text;
    if (mobIndetIcon) mobIndetIcon.textContent = icon;
    if (mobIndetText) mobIndetText.textContent = text;
    if (mobNavIndetIcon) mobNavIndetIcon.textContent = icon;
    if (mobNavIndetText) mobNavIndetText.textContent = text;

    syncFilterChipsUI();
    updateLayerVisibility();
  }

  function syncFilterChipsUI() {
    // Sync layer chips across desktop bar, expandable panel, and mobile sheet
    document.querySelectorAll('.filter-chip[data-filter]').forEach(chip => {
      const k = chip.getAttribute('data-filter');
      if (k === 'all') {
        chip.classList.toggle('active', activeLayers.size === ALL_LAYERS.length);
      } else {
        chip.classList.toggle('active', activeLayers.has(k));
      }
    });

    // Sync confidence chips
    document.querySelectorAll('.filter-chip.conf-chip[data-conf]').forEach(chip => {
      const c = chip.getAttribute('data-conf');
      chip.classList.toggle('active', c === activeConfidenceFilter);
    });

    // Sync dispensation chips
    document.querySelectorAll('.filter-chip.disp-chip[data-disp]').forEach(chip => {
      const d = chip.getAttribute('data-disp');
      chip.classList.toggle('active', d === activeDispensationFilter);
    });

    // Sync active filters count badge
    const badge = document.getElementById('activeFiltersBadge');
    if (badge) {
      let diff = 0;
      if (activeLayers.size < ALL_LAYERS.length) diff++;
      if (activeConfidenceFilter !== 'all') diff++;
      if (activeDispensationFilter !== 'all') diff++;
      if (hideIndeterminate) diff++;
      if (diff > 0) {
        badge.textContent = diff;
        badge.style.display = 'inline-block';
      } else {
        badge.style.display = 'none';
      }
    }
  }

  function resetAllFilters() {
    activeLayers.clear();
    ALL_LAYERS.forEach(k => activeLayers.add(k));
    activeConfidenceFilter = 'all';
    activeDispensationFilter = 'all';
    setIndeterminateVisibility(true);
    syncFilterChipsUI();
    updateLayerVisibility();
  }

  function updateLayerVisibility() {
    let visibleCount = 0;

    document.querySelectorAll('.map-pin').forEach(pin => {
      const cat = pin.getAttribute('data-category');
      const conf = pin.getAttribute('data-confidence');
      const disp = pin.getAttribute('data-dispensation');

      const matchesCat = activeLayers.has(cat);

      let matchesConf = false;
      if (activeConfidenceFilter === 'all') {
        matchesConf = true;
      } else if (activeConfidenceFilter === 'highest') {
        matchesConf = (conf === '1' || conf === '2');
      } else {
        matchesConf = (conf === activeConfidenceFilter);
      }

      // Hide L4 indeterminate sites if toggle is hidden (unless explicitly filtering by L4)
      if (hideIndeterminate && conf === '4' && activeConfidenceFilter !== '4') {
        matchesConf = false;
      }

      const matchesDisp = activeDispensationFilter === 'all' || disp === activeDispensationFilter || disp === 'both';

      const isVisible = matchesCat && matchesConf && matchesDisp;
      pin.style.display = isVisible ? 'flex' : 'none';
      if (isVisible) visibleCount++;
    });

    if (statSitesCount) {
      statSitesCount.textContent = visibleCount;
    }
    const mobNavApplyFiltersBtn = document.getElementById('mobNavApplyFiltersBtn');
    if (mobNavApplyFiltersBtn) {
      mobNavApplyFiltersBtn.textContent = `Apply & View Map (${visibleCount})`;
    }

    // Synchronize Territory Polygons
    document.querySelectorAll('.territory-polygon').forEach(poly => {
      const cat = poly.getAttribute('data-category');
      poly.style.display = activeLayers.has(cat) ? 'block' : 'none';
    });

    // Synchronize River Sidon
    if (riverSidonGroup) {
      riverSidonGroup.style.display = activeLayers.has('waters') ? 'block' : 'none';
    }

    // Synchronize Cataclysm Terrain
    if (cataclysmTerrainGroup) {
      const isEraCataclysm = currentEraStep >= 20;
      cataclysmTerrainGroup.style.display = (isEraCataclysm && activeLayers.has('cataclysm')) ? 'block' : 'none';
    }
  }

  // Bind filter chips across all panels and sheets
  document.addEventListener('click', (e) => {
    const filterChip = e.target.closest('.filter-chip[data-filter]');
    if (filterChip && !filterChip.classList.contains('filter-chip-toggle')) {
      toggleLayer(filterChip.getAttribute('data-filter'));
      return;
    }

    const confChip = e.target.closest('.filter-chip.conf-chip[data-conf]');
    if (confChip) {
      setConfidenceFilter(confChip.getAttribute('data-conf'));
      return;
    }

    const dispChip = e.target.closest('.filter-chip.disp-chip[data-disp]');
    if (dispChip) {
      setDispensationFilter(dispChip.getAttribute('data-disp'));
      return;
    }

    if (e.target.closest('#toggleIndeterminateChip') || e.target.closest('#mobToggleIndetChip') || e.target.closest('#mobNavToggleIndetChip')) {
      setIndeterminateVisibility(hideIndeterminate);
      return;
    }
  });

  // ==========================================================================
  // DESKTOP & MOBILE NAVIGATION CONTROLLERS
  // ==========================================================================
  function setupMobileAndDesktopNavigation() {
    // 1. Desktop Tools Dropdown
    const toolsDropdownContainer = document.getElementById('toolsDropdownContainer');
    const toolsDropdownBtn = document.getElementById('toolsDropdownBtn');
    const toolsDropdownMenu = document.getElementById('toolsDropdownMenu');
    const menuToggleDistanceScaleBtn = document.getElementById('menuToggleDistanceScaleBtn');
    const menuDistanceScaleBtn = document.getElementById('menuDistanceScaleBtn');
    const menuOldWorldBtn = document.getElementById('menuOldWorldBtn');
    const menuInspectorBtn = document.getElementById('menuInspectorBtn');
    const menuInspectorText = document.getElementById('menuInspectorText');

    if (menuToggleDistanceScaleBtn) {
      menuToggleDistanceScaleBtn.addEventListener('click', () => {
        toolsDropdownMenu && toolsDropdownMenu.classList.remove('show');
        toggleDistanceScale();
      });
    }

    if (toolsDropdownBtn && toolsDropdownMenu) {
      toolsDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = toolsDropdownMenu.classList.contains('show');
        toolsDropdownMenu.classList.toggle('show', !isOpen);
        toolsDropdownBtn.setAttribute('aria-expanded', String(!isOpen));
      });

      document.addEventListener('click', (e) => {
        if (!toolsDropdownContainer || !toolsDropdownContainer.contains(e.target)) {
          toolsDropdownMenu.classList.remove('show');
          toolsDropdownBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    if (menuDistanceScaleBtn && distanceScaleModal) {
      menuDistanceScaleBtn.addEventListener('click', () => {
        toolsDropdownMenu && toolsDropdownMenu.classList.remove('show');
        openModal(distanceScaleModal);
      });
    }

    if (menuOldWorldBtn && oldWorldModal) {
      menuOldWorldBtn.addEventListener('click', () => {
        toolsDropdownMenu && toolsDropdownMenu.classList.remove('show');
        openModal(oldWorldModal);
      });
    }

    if (menuInspectorBtn) {
      menuInspectorBtn.addEventListener('click', () => {
        toolsDropdownMenu && toolsDropdownMenu.classList.remove('show');
        isInspectorActive = !isInspectorActive;
        if (coordsInspectorBadge) coordsInspectorBadge.classList.toggle('active', isInspectorActive);
        if (menuInspectorText) menuInspectorText.textContent = isInspectorActive ? 'Inspector: ON' : 'Inspector: OFF';
        if (inspectorBtnText) inspectorBtnText.textContent = isInspectorActive ? 'Inspector: ON' : 'Inspector: OFF';
        const mobInspectorText = document.getElementById('mobInspectorText');
        if (mobInspectorText) mobInspectorText.textContent = isInspectorActive ? 'Coordinate Inspector: ON' : 'Coordinate Inspector: OFF';
      });
    }

    // Tools Region items
    document.querySelectorAll('#toolsDropdownMenu .region-item').forEach(btn => {
      btn.addEventListener('click', () => {
        toolsDropdownMenu && toolsDropdownMenu.classList.remove('show');
        zoomToRegion(btn.getAttribute('data-region'));
      });
    });

    // 2. Desktop Expandable Filter Panel
    const toggleFiltersPanelBtn = document.getElementById('toggleFiltersPanelBtn');
    const desktopFiltersPanel = document.getElementById('desktopFiltersPanel');
    const closeFiltersPanelBtn = document.getElementById('closeFiltersPanelBtn');
    const resetFiltersBtn = document.getElementById('resetFiltersBtn');

    if (toggleFiltersPanelBtn && desktopFiltersPanel) {
      toggleFiltersPanelBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = desktopFiltersPanel.classList.contains('open');
        desktopFiltersPanel.classList.toggle('open', !isOpen);
        toggleFiltersPanelBtn.setAttribute('aria-expanded', String(!isOpen));
      });

      if (closeFiltersPanelBtn) {
        closeFiltersPanelBtn.addEventListener('click', () => {
          desktopFiltersPanel.classList.remove('open');
          toggleFiltersPanelBtn.setAttribute('aria-expanded', 'false');
        });
      }

      document.addEventListener('click', (e) => {
        if (desktopFiltersPanel && !desktopFiltersPanel.contains(e.target) && e.target !== toggleFiltersPanelBtn && !toggleFiltersPanelBtn.contains(e.target)) {
          desktopFiltersPanel.classList.remove('open');
          toggleFiltersPanelBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener('click', resetAllFilters);
    }

    // 3. Mobile Navigation Sheet
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavSheet = document.getElementById('mobileNavSheet');
    const closeMobileNavBtn = document.getElementById('closeMobileNavBtn');
    const mobileSheetBackdrop = document.getElementById('mobileSheetBackdrop');

    const openMobileSheet = (sheet) => {
      closeAllMobileSheets();
      if (sheet) sheet.classList.add('open');
      if (mobileSheetBackdrop) mobileSheetBackdrop.classList.add('active');
    };

    const closeAllMobileSheets = () => {
      document.querySelectorAll('.mobile-nav-sheet, .mobile-filter-sheet, .mobile-tools-sheet, .mobile-picker-sheet').forEach(s => s.classList.remove('open'));
      if (mobileSheetBackdrop) mobileSheetBackdrop.classList.remove('active');
    };

    if (mobileMenuBtn && mobileNavSheet) {
      mobileMenuBtn.addEventListener('click', () => openMobileSheet(mobileNavSheet));
    }

    if (closeMobileNavBtn) {
      closeMobileNavBtn.addEventListener('click', closeAllMobileSheets);
    }

    if (mobileSheetBackdrop) {
      mobileSheetBackdrop.addEventListener('click', closeAllMobileSheets);
    }

    const mobChurchStanceBtn = document.getElementById('mobChurchStanceBtn');
    if (mobChurchStanceBtn && disclaimerModal) {
      mobChurchStanceBtn.addEventListener('click', () => {
        closeAllMobileSheets();
        openModal(disclaimerModal);
      });
    }

    const mobToggleDistanceScaleBtn = document.getElementById('mobToggleDistanceScaleBtn');
    if (mobToggleDistanceScaleBtn) {
      mobToggleDistanceScaleBtn.addEventListener('click', () => {
        closeAllMobileSheets();
        toggleDistanceScale();
      });
    }

    const mobDistanceScaleBtn = document.getElementById('mobDistanceScaleBtn');
    if (mobDistanceScaleBtn && distanceScaleModal) {
      mobDistanceScaleBtn.addEventListener('click', () => {
        closeAllMobileSheets();
        openModal(distanceScaleModal);
      });
    }

    const mobOldWorldBtn = document.getElementById('mobOldWorldBtn');
    if (mobOldWorldBtn && oldWorldModal) {
      mobOldWorldBtn.addEventListener('click', () => {
        closeAllMobileSheets();
        openModal(oldWorldModal);
      });
    }

    const mobInspectorBtn = document.getElementById('mobInspectorBtn');
    if (mobInspectorBtn) {
      mobInspectorBtn.addEventListener('click', () => {
        closeAllMobileSheets();
        isInspectorActive = !isInspectorActive;
        if (coordsInspectorBadge) coordsInspectorBadge.classList.toggle('active', isInspectorActive);
        const mobInspectorText = document.getElementById('mobInspectorText');
        if (mobInspectorText) mobInspectorText.textContent = isInspectorActive ? 'Coordinate Inspector: ON' : 'Coordinate Inspector: OFF';
      });
    }

    document.querySelectorAll('.mobile-menu-item.region-item').forEach(btn => {
      btn.addEventListener('click', () => {
        closeAllMobileSheets();
        zoomToRegion(btn.getAttribute('data-region'));
      });
    });

    // 4. Mobile Bottom Navigation Bar & Drawer Quick Actions
    const mobBottomSearchBtn = document.getElementById('mobBottomSearchBtn');
    const mobBottomJumpBtn = document.getElementById('mobBottomJumpBtn');
    const mobBottomFiltersBtn = document.getElementById('mobBottomFiltersBtn');
    const mobBottomToolsBtn = document.getElementById('mobBottomToolsBtn');
    const mobBottomCodexBtn = document.getElementById('mobBottomCodexBtn');

    const mobNavSearchBtn = document.getElementById('mobNavSearchBtn');
    const mobNavJumpBtn = document.getElementById('mobNavJumpBtn');
    const mobNavCodexBtn = document.getElementById('mobNavCodexBtn');
    const mobNavToursBtn = document.getElementById('mobNavToursBtn');

    const mobileFiltersSheet = document.getElementById('mobileFiltersSheet');
    const mobileToolsSheet = document.getElementById('mobileToolsSheet');
    const mobilePickerSheet = document.getElementById('mobilePickerSheet');

    const handleSearchOpen = () => {
      closeAllMobileSheets();
      openMobileSheet(mobilePickerSheet);
      const input = document.getElementById('mobilePickerSearchInput');
      if (input) { setTimeout(() => input.focus(), 150); }
    };

    const handleJumpOpen = () => {
      closeAllMobileSheets();
      openMobileSheet(mobilePickerSheet);
    };

    const handleCodexToggle = () => {
      closeAllMobileSheets();
      if (!activeLocationId) {
        selectLocation('zarahemla');
      } else if (detailSidebar) {
        if (detailSidebar.classList.contains('closed') || detailSidebar.classList.contains('peek')) {
          detailSidebar.classList.remove('closed', 'peek');
        } else {
          detailSidebar.classList.add('peek');
        }
        updateSidebarStateUI();
      }
    };

    if (mobBottomSearchBtn) mobBottomSearchBtn.addEventListener('click', handleSearchOpen);
    if (mobNavSearchBtn) mobNavSearchBtn.addEventListener('click', handleSearchOpen);

    if (mobBottomJumpBtn) mobBottomJumpBtn.addEventListener('click', handleJumpOpen);
    if (mobNavJumpBtn) mobNavJumpBtn.addEventListener('click', handleJumpOpen);

    if (mobBottomFiltersBtn && mobileFiltersSheet) {
      mobBottomFiltersBtn.addEventListener('click', () => {
        closeAllMobileSheets();
        openMobileSheet(mobileFiltersSheet);
      });
    }

    if (mobBottomToolsBtn && mobileToolsSheet) {
      mobBottomToolsBtn.addEventListener('click', () => {
        closeAllMobileSheets();
        openMobileSheet(mobileToolsSheet);
      });
    }

    if (mobBottomCodexBtn) mobBottomCodexBtn.addEventListener('click', handleCodexToggle);
    if (mobNavCodexBtn) mobNavCodexBtn.addEventListener('click', handleCodexToggle);

    if (mobNavToursBtn && tourModal) {
      mobNavToursBtn.addEventListener('click', () => {
        closeAllMobileSheets();
        openModal(tourModal);
      });
    }

    // Close Mobile Filters Sheet
    const closeMobileFiltersBtn = document.getElementById('closeMobileFiltersBtn');
    const mobApplyFiltersBtn = document.getElementById('mobApplyFiltersBtn');
    const mobResetFiltersBtn = document.getElementById('mobResetFiltersBtn');
    const mobNavResetFiltersBtn = document.getElementById('mobNavResetFiltersBtn');

    if (closeMobileFiltersBtn) closeMobileFiltersBtn.addEventListener('click', closeAllMobileSheets);
    const mobNavApplyFiltersBtn = document.getElementById('mobNavApplyFiltersBtn');
    if (mobNavApplyFiltersBtn) mobNavApplyFiltersBtn.addEventListener('click', closeAllMobileSheets);
    if (mobResetFiltersBtn) mobResetFiltersBtn.addEventListener('click', resetAllFilters);
    if (mobNavResetFiltersBtn) mobNavResetFiltersBtn.addEventListener('click', resetAllFilters);

    // Mobile Tools Sheet Wiring
    const closeMobileToolsBtn = document.getElementById('closeMobileToolsBtn');
    if (closeMobileToolsBtn) closeMobileToolsBtn.addEventListener('click', closeAllMobileSheets);

    const mobSheetToggleDistanceScaleBtn = document.getElementById('mobSheetToggleDistanceScaleBtn');
    if (mobSheetToggleDistanceScaleBtn) {
      mobSheetToggleDistanceScaleBtn.addEventListener('click', () => {
        closeAllMobileSheets();
        toggleDistanceScale();
      });
    }

    const mobSheetDistanceScaleBtn = document.getElementById('mobSheetDistanceScaleBtn');
    if (mobSheetDistanceScaleBtn && distanceScaleModal) {
      mobSheetDistanceScaleBtn.addEventListener('click', () => {
        closeAllMobileSheets();
        openModal(distanceScaleModal);
      });
    }

    const mobSheetOldWorldBtn = document.getElementById('mobSheetOldWorldBtn');
    if (mobSheetOldWorldBtn && oldWorldModal) {
      mobSheetOldWorldBtn.addEventListener('click', () => {
        closeAllMobileSheets();
        openModal(oldWorldModal);
      });
    }

    const mobSheetInspectorBtn = document.getElementById('mobSheetInspectorBtn');
    if (mobSheetInspectorBtn) {
      mobSheetInspectorBtn.addEventListener('click', () => {
        closeAllMobileSheets();
        isInspectorActive = !isInspectorActive;
        if (coordsInspectorBadge) coordsInspectorBadge.classList.toggle('active', isInspectorActive);
        const mobSheetInspectorText = document.getElementById('mobSheetInspectorText');
        if (mobSheetInspectorText) mobSheetInspectorText.textContent = isInspectorActive ? 'Coordinate Inspector: ON' : 'Coordinate Inspector: OFF';
      });
    }

    const mobSheetToursBtn = document.getElementById('mobSheetToursBtn');
    if (mobSheetToursBtn && tourModal) {
      mobSheetToursBtn.addEventListener('click', () => {
        closeAllMobileSheets();
        openModal(tourModal);
      });
    }

    const mobSheetChurchStanceBtn = document.getElementById('mobSheetChurchStanceBtn');
    if (mobSheetChurchStanceBtn && disclaimerModal) {
      mobSheetChurchStanceBtn.addEventListener('click', () => {
        closeAllMobileSheets();
        openModal(disclaimerModal);
      });
    }

    // Sidebar Desktop Edge Toggle Tab & Header Button State UI
    const sidebarEdgeToggleBtn = document.getElementById('sidebarEdgeToggleBtn');
    const edgeToggleIcon = document.getElementById('edgeToggleIcon');
    const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    const sidebarToggleText = document.getElementById('sidebarToggleText');

    const updateSidebarStateUI = () => {
      if (!detailSidebar) return;
      const isClosed = detailSidebar.classList.contains('closed');
      if (edgeToggleIcon) edgeToggleIcon.textContent = isClosed ? '◀' : '▶';
      const edgeToggleText = sidebarEdgeToggleBtn?.querySelector('.edge-toggle-text');
      if (edgeToggleText) edgeToggleText.textContent = isClosed ? 'Open Codex' : 'Hide';
      if (sidebarToggleText) sidebarToggleText.textContent = isClosed ? 'Codex' : 'Close';
      if (sidebarToggleBtn) sidebarToggleBtn.classList.toggle('active', !isClosed);
      const appContainer = document.querySelector('.app-main-container');
      if (appContainer) appContainer.classList.toggle('sidebar-is-closed', isClosed);
    };

    if (sidebarEdgeToggleBtn && detailSidebar) {
      sidebarEdgeToggleBtn.addEventListener('click', () => {
        detailSidebar.classList.toggle('closed');
        updateSidebarStateUI();
        setTimeout(() => fitMapToScreen(), 150);
      });
    }

    // Mobile Header Quick Action Buttons
    const mobileSearchToggleBtn = document.getElementById('mobileSearchToggleBtn');
    const mobileCodexToggleBtn = document.getElementById('mobileCodexToggleBtn');
    if (mobileSearchToggleBtn && mobilePickerSheet) {
      mobileSearchToggleBtn.addEventListener('click', () => openMobileSheet(mobilePickerSheet));
    }
    if (mobileCodexToggleBtn && detailSidebar) {
      mobileCodexToggleBtn.addEventListener('click', () => {
        detailSidebar.classList.toggle('closed');
        detailSidebar.classList.remove('expanded');
        updateSidebarStateUI();
      });
    }

    // Mobile Detail Sidebar Drag Handle (Tap to toggle peek vs open)
    const mobileDragHandle = document.getElementById('mobileDragHandle');
    if (mobileDragHandle && detailSidebar) {
      mobileDragHandle.addEventListener('click', () => {
        if (detailSidebar.classList.contains('peek') || detailSidebar.classList.contains('closed')) {
          detailSidebar.classList.remove('peek', 'closed');
        } else {
          detailSidebar.classList.add('peek');
        }
      });
    }

    // Sheet Drag Handles tap to dismiss
    const mobileFiltersDragHandle = document.getElementById('mobileFiltersDragHandle');
    if (mobileFiltersDragHandle) {
      mobileFiltersDragHandle.addEventListener('click', () => closeAllMobileSheets());
    }

    const mobileToolsDragHandle = document.getElementById('mobileToolsDragHandle');
    if (mobileToolsDragHandle) {
      mobileToolsDragHandle.addEventListener('click', () => closeAllMobileSheets());
    }

    const mobilePickerDragHandle = document.getElementById('mobilePickerDragHandle');
    if (mobilePickerDragHandle) {
      mobilePickerDragHandle.addEventListener('click', () => closeAllMobileSheets());
    }

    const mobileTourDragHandle = document.getElementById('mobileTourDragHandle');
    if (mobileTourDragHandle && tourModal) {
      mobileTourDragHandle.addEventListener('click', () => closeModal(tourModal));
    }

    // Touch swipe down on headers or drag handles to collapse
    const setupSwipeDown = (element, onDismiss) => {
      if (!element) return;
      let startY = 0;
      let deltaY = 0;
      element.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          startY = e.touches[0].clientY;
          deltaY = 0;
        }
      }, { passive: true });
      element.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1) {
          deltaY = e.touches[0].clientY - startY;
        }
      }, { passive: true });
      element.addEventListener('touchend', () => {
        if (deltaY > 25) {
          onDismiss();
        }
      }, { passive: true });
    };

    if (mobileDragHandle) setupSwipeDown(mobileDragHandle, () => {
      if (detailSidebar) { detailSidebar.classList.add('peek'); }
    });
    const sidebarHeader = document.querySelector('#detailSidebar .sidebar-header');
    if (sidebarHeader) setupSwipeDown(sidebarHeader, () => {
      if (window.innerWidth <= 768 && detailSidebar) { detailSidebar.classList.add('peek'); }
    });

    if (mobileFiltersDragHandle) setupSwipeDown(mobileFiltersDragHandle, () => closeAllMobileSheets());
    const filtersHeader = document.querySelector('#mobileFiltersSheet .mobile-sheet-header');
    if (filtersHeader) setupSwipeDown(filtersHeader, () => closeAllMobileSheets());

    if (mobileToolsDragHandle) setupSwipeDown(mobileToolsDragHandle, () => closeAllMobileSheets());
    const toolsHeader = document.querySelector('#mobileToolsSheet .mobile-sheet-header');
    if (toolsHeader) setupSwipeDown(toolsHeader, () => closeAllMobileSheets());

    if (mobilePickerDragHandle) setupSwipeDown(mobilePickerDragHandle, () => closeAllMobileSheets());
    const pickerHeader = document.querySelector('#mobilePickerSheet .mobile-sheet-header');
    if (pickerHeader) setupSwipeDown(pickerHeader, () => closeAllMobileSheets());

    if (mobileTourDragHandle) setupSwipeDown(mobileTourDragHandle, () => closeModal(tourModal));
    const tourHeader = document.querySelector('#tourModal .modal-header');
    if (tourHeader) setupSwipeDown(tourHeader, () => closeModal(tourModal));
  }

  // 5. Mobile Landmark Picker Sheet Content Generator
  function setupMobilePickerSheet() {
    const list = document.getElementById('mobilePickerList');
    const searchInput = document.getElementById('mobilePickerSearchInput');
    const closeBtn = document.getElementById('closeMobilePickerBtn');
    const mobilePickerSheet = document.getElementById('mobilePickerSheet');
    const backdrop = document.getElementById('mobileSheetBackdrop');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        mobilePickerSheet && mobilePickerSheet.classList.remove('open');
        backdrop && backdrop.classList.remove('active');
      });
    }

    if (!list) return;

    const renderList = (filterText = '') => {
      const q = filterText.trim();
      const allLocs = Object.values(mapLocations);
      let results = [];

      if (!q) {
        results = allLocs.map(l => ({ loc: l, score: 0, reason: '' }))
                         .sort((a, b) => a.loc.name.localeCompare(b.loc.name));
      } else {
        results = allLocs.map(l => {
          const res = scoreLocationMatch(l, q);
          return { loc: l, ...res };
        }).filter(r => r.matched)
          .sort((a, b) => b.score - a.score || a.loc.name.localeCompare(b.loc.name));
      }

      list.innerHTML = '';
      if (results.length === 0) {
        list.innerHTML = `<div style="padding: 1rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No landmarks found matching "${escapeHTML(filterText)}"</div>`;
        return;
      }

      results.forEach(({ loc, reason }) => {
        const item = document.createElement('div');
        item.className = 'mobile-picker-item';
        const confLvl = loc.confidenceLevel || 2;
        const reasonHtml = reason ? ` • <span style="color: var(--gold); font-style: italic;">${escapeHTML(reason)}</span>` : '';
        item.innerHTML = `
          <div>
            <div class="mobile-picker-name">${loc.name}</div>
            <div class="mobile-picker-meta">${loc.region} • ${loc.category}${reasonHtml}</div>
          </div>
          <span class="conf-pill conf-pill-${confLvl}" style="font-size:0.65rem;">L${confLvl}</span>
        `;
        item.addEventListener('click', () => {
          mobilePickerSheet && mobilePickerSheet.classList.remove('open');
          backdrop && backdrop.classList.remove('active');
          selectLocation(loc.id);
        });
        list.appendChild(item);
      });
    };

    renderList();

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        renderList(e.target.value);
      });
    }
  }

  // ==========================================================================
  // LOCATION SELECTION & RICH FLYOUT CODEX (Matching New Testament Atlas)
  // ==========================================================================
  function selectLocation(locId) {
    const loc = mapLocations[locId];
    if (!loc) return;

    activeLocationId = locId;
    playGentleChime();

    // Highlight active pin
    document.querySelectorAll('.map-pin').forEach(p => {
      p.classList.toggle('active', p.getAttribute('data-id') === locId);
    });

    // Update Sidebar Header
    if (sidebarEyebrow) {
      const confTitle = getConfidenceTitle(loc.confidenceLevel || 2).toUpperCase();
      sidebarEyebrow.textContent = `${loc.category.toUpperCase()} • ${loc.region.toUpperCase()} • LEVEL ${loc.confidenceLevel || 2} (${confTitle})`;
    }
    if (sidebarTitle) {
      sidebarTitle.textContent = loc.name;
    }

    // Render Tab Content
    renderSidebarContent(loc);

    // Open Sidebar if closed (on mobile: start in readable mode)
    if (detailSidebar) {
      detailSidebar.classList.remove('closed');
      detailSidebar.classList.remove('peek');
      detailSidebar.classList.remove('expanded');
      const appContainer = document.querySelector('.app-main-container');
      if (appContainer) appContainer.classList.remove('sidebar-is-closed');
      const edgeToggleIcon = document.getElementById('edgeToggleIcon');
      if (edgeToggleIcon) edgeToggleIcon.textContent = '▶';
      const edgeToggleText = document.querySelector('#sidebarEdgeToggleBtn .edge-toggle-text');
      if (edgeToggleText) edgeToggleText.textContent = 'Hide';
      const sidebarToggleText = document.getElementById('sidebarToggleText');
      if (sidebarToggleText) sidebarToggleText.textContent = 'Close';
    }

    // Pan map to location
    focusLocation(loc.coords.x, loc.coords.y);
  }

  function renderExpeditionTheater(loc) {
    if (!sidebarContent || !currentJourney) return;

    const stage = currentJourney.stages[currentStageIndex];
    if (!stage) return;

    const isLast = (currentStageIndex === currentJourney.stages.length - 1);
    const isFirst = (currentStageIndex === 0);
    const stageNum = currentStageIndex + 1;
    const totalStages = currentJourney.stages.length;
    const factionKey = stage.faction || 'nephite';
    const factionInfo = (currentJourney.factions && currentJourney.factions[factionKey]) || {
      name: factionKey === 'lamanite' ? 'Lamanite & Zoramite Host' : (factionKey === 'courier' ? 'Prophetic Relay' : 'Nephite Forces'),
      color: factionKey === 'lamanite' ? '#DC2626' : (factionKey === 'courier' ? '#F59E0B' : '#2563EB'),
      icon: factionKey === 'lamanite' ? '🗡️' : (factionKey === 'courier' ? '📜' : '🛡️')
    };

    const title = stage.stageTitle || stage.title || `${currentJourney.name} • Waypoint ${stageNum}`;
    const narrative = stage.narrative || stage.note || (loc && loc.summary) || '';
    const ref = stage.ref || stage.scripture || '';
    const churchUrl = getChurchScriptureUrl(ref);
    const distance = stage.distanceNote || '';
    const commander = stage.commander || '';
    const armor = stage.armor || '';

    // Update sidebar header to reflect expedition context
    if (sidebarEyebrow) {
      sidebarEyebrow.textContent = `EXPEDITION • ${currentJourney.name.toUpperCase()} (STAGE ${stageNum}/${totalStages})`;
    }
    if (sidebarTitle) {
      sidebarTitle.textContent = title;
    }

    const breadcrumbsHtml = currentJourney.stages.map((s, idx) => {
      let stateClass = '';
      if (idx < currentStageIndex) stateClass = 'past';
      else if (idx === currentStageIndex) stateClass = 'current';
      return `<div class="crumb-step ${stateClass}" data-stage="${idx}" title="Waypoint ${idx + 1}: ${s.stageTitle || s.locId}"></div>`;
    }).join('');

    sidebarContent.innerHTML = `
      <div class="expedition-theater">
        <div class="expedition-breadcrumbs" id="expeditionBreadcrumbs">
          ${breadcrumbsHtml}
        </div>

        <div class="expedition-banner-card">
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:6px; margin-bottom:0.55rem;">
            <span class="active-tour-badge">WAYPOINT ${stageNum} OF ${totalStages}</span>
            ${ref ? `
              <a href="${churchUrl || '#'}" class="active-tour-ref church-scripture-btn" data-url="${churchUrl}" data-ref="${ref}" style="cursor:pointer; text-decoration:none; font-weight:700; color:var(--color-crimson);" title="Read chapter in official scriptures">
                📖 ${ref} ↗
              </a>
            ` : ''}
          </div>

          <div class="expedition-faction-pill faction-${factionKey}">
            <span>${factionInfo.icon}</span>
            <span>${factionInfo.name}</span>
          </div>

          <h3 class="active-tour-title" style="margin:0.4rem 0 0.65rem 0; font-family:var(--font-serif-title); font-size:1.05rem; color:var(--color-navy); line-height:1.35;">${title}</h3>

          ${(commander || armor) ? `
            <div class="expedition-commander-box">
              ${commander ? `
                <div class="commander-item">
                  <span class="commander-label">Field Commander</span>
                  <span class="commander-val">${commander}</span>
                </div>
              ` : ''}
              ${armor ? `
                <div class="commander-item">
                  <span class="commander-label">Tactical Armament & Defense</span>
                  <span class="commander-val">${armor}</span>
                </div>
              ` : ''}
            </div>
          ` : ''}

          <div class="active-tour-narrative" style="font-size:0.86rem; line-height:1.6; color:var(--text-primary); margin-top:0.6rem;">
            ${narrative}
          </div>

          ${distance ? `
            <div class="active-tour-metric-box" style="margin-top:0.85rem;">
              <span class="active-tour-metric-label">Strategic Geography & Topography:</span>
              <span class="active-tour-metric-val">${distance}</span>
            </div>
          ` : ''}

          <div class="active-tour-controls" style="margin-top:1.1rem; display:flex; gap:8px; flex-wrap:wrap;">
            <button type="button" class="btn btn-outline btn-sm tour-sidebar-btn" id="sidebarTourPrevBtn" ${isFirst ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : ''}>◀ Previous</button>
            <button type="button" class="btn btn-primary btn-sm glow-gold tour-sidebar-btn" id="sidebarTourNextBtn">${isLast ? 'Finish Expedition' : 'Next Waypoint ▶'}</button>
            <button type="button" class="btn btn-outline btn-sm tour-sidebar-btn" id="sidebarTourExitBtn" title="Exit Guided Expedition">Exit Tour</button>
          </div>
        </div>

        ${loc ? `
          <div class="feature-card" style="margin-top:0.25rem;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.35rem;">
              <h4 style="margin:0; font-family:var(--font-serif-title); font-size:0.88rem; color:var(--color-navy);">📍 Location Theater: ${loc.name}</h4>
              <span class="city-badge badge-region" style="font-size:0.68rem;">${loc.region}</span>
            </div>
            <p style="font-size:0.8rem; color:var(--text-secondary); margin:0 0 0.5rem 0; line-height:1.45;">${loc.summary}</p>
            <button type="button" class="btn btn-outline btn-xs" id="expeditionViewCityOverviewBtn" style="font-size:0.75rem; padding:4px 10px; font-weight:600;">
              View City History & Full Codex Dossier &rarr;
            </button>
          </div>
        ` : ''}
      </div>
    `;

    // Event listeners
    const sNext = sidebarContent.querySelector('#sidebarTourNextBtn');
    if (sNext) {
      sNext.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentJourney && currentStageIndex < currentJourney.stages.length - 1) {
          goToTourStage(currentStageIndex + 1);
        } else {
          exitTour();
        }
      });
    }

    const sPrev = sidebarContent.querySelector('#sidebarTourPrevBtn');
    if (sPrev) {
      sPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentStageIndex > 0) {
          goToTourStage(currentStageIndex - 1);
        }
      });
    }

    const sExit = sidebarContent.querySelector('#sidebarTourExitBtn');
    if (sExit) {
      sExit.addEventListener('click', (e) => {
        e.stopPropagation();
        exitTour();
      });
    }

    const viewCity = sidebarContent.querySelector('#expeditionViewCityOverviewBtn');
    if (viewCity) {
      viewCity.addEventListener('click', (e) => {
        e.stopPropagation();
        switchTab('overview');
      });
    }

    sidebarContent.querySelectorAll('.crumb-step').forEach(crumb => {
      crumb.addEventListener('click', (e) => {
        e.stopPropagation();
        const stg = parseInt(crumb.getAttribute('data-stage'), 10);
        if (!isNaN(stg)) {
          goToTourStage(stg);
        }
      });
    });

    sidebarContent.querySelectorAll('.church-scripture-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openScriptureModal(btn.getAttribute('data-ref'), btn.getAttribute('data-url'));
      });
    });
  }

  function renderSidebarContent(loc) {
    if (!sidebarContent) return;

    // Dedicated Expedition Theater Tab (No clutter on city dossiers!)
    if (activeTab === 'expedition' && currentJourney) {
      renderExpeditionTheater(loc);
      return;
    }

    sidebarContent.innerHTML = '';

    const firstRef = (loc.refs && loc.refs.length > 0) ? loc.refs[0] : null;

    // Helper to estimate jurisdiction & fortifications
    const isNephite = !loc.region.toLowerCase().includes('lamanite') && !loc.region.toLowerCase().includes('jaredite');
    const jurisdiction = loc.region.toLowerCase().includes('jaredite') || loc.region.toLowerCase().includes('northward') 
      ? 'Jaredite Dynasty / Land Northward'
      : (loc.region.toLowerCase().includes('lamanite') || loc.region.toLowerCase().includes('nephi') 
          ? 'Lamanite Dominion / Ancient First Inheritance' 
          : 'Nephite Republic / Reign of Judges');

    const fortification = loc.category === 'fortresses'
      ? "Captain Moroni's Earth Banks, Deep Ditches & Timbers (Alma 50:1-6)"
      : (loc.category === 'capitals' 
          ? "Massive Urban Defensive Walls & Fortified Gateways"
          : (loc.category === 'waters' 
              ? "Natural Hydrographic Barrier & River Crossing Defenses"
              : "Open Settlement & Outlying Agricultural Border"));

    // -------------------------------------------------------------------------
    // TAB 1: OVERVIEW (Enriched with 4 Confidence Levels & Related Places)
    // -------------------------------------------------------------------------
    if (activeTab === 'overview') {
      const confLevel = loc.confidenceLevel || 2;
      const confTitle = getConfidenceTitle(confLevel);
      const dispLabel = loc.dispensation === 'jaredite' 
        ? 'Jaredite Era (~2200–600 BC)' 
        : (loc.dispensation === 'both' ? 'Jaredite & Nephite' : (loc.dispensation === 'old_world' ? 'Old World Origin' : 'Nephite / Lamanite'));

      sidebarContent.innerHTML = `
        <div class="city-detail-badge-row">
          <span class="city-badge badge-region">${loc.region}</span>
          <span class="city-badge badge-category">${loc.category.toUpperCase()}</span>
          <span class="city-badge conf-pill conf-pill-${confLevel}">Level ${confLevel} – ${confTitle}</span>
          <span class="city-badge badge-period">${dispLabel}</span>
        </div>

        <div class="dossier-confidence-banner conf-level-${confLevel}">
          <div class="conf-banner-top">
            <span class="conf-banner-title">Textual Confidence: Level ${confLevel} – ${confTitle}</span>
            <span class="conf-pill conf-pill-${confLevel}">${loc.isIndeterminate ? 'Position Uncertain' : 'Direct Attestation'}</span>
          </div>
          <p class="conf-banner-desc">${loc.confidenceJustification || 'Derived from internal Book of Mormon textual statements.'}</p>
        </div>

        ${loc.relatedPlaces && loc.relatedPlaces.length > 0 ? `
          <div class="related-places-card">
            <div class="related-places-header">
              <span>🧭</span>
              <span>Related Places & Textual Basis (${loc.relatedPlaces.length})</span>
            </div>
            <div class="related-places-list">
              ${loc.relatedPlaces.map(r => `
                <div class="related-place-item" data-place="${r.placeId}" title="Click to inspect ${r.name} on the map">
                  <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:4px; margin-bottom:2px;">
                    <span class="related-place-name" style="line-height:1.3;">📍 ${r.name}</span>
                    <span class="related-place-rel" style="flex-shrink:0;">${r.relationship}</span>
                  </div>
                  <span class="related-place-basis" style="word-break:normal; line-height:1.35; display:block;">${r.textualBasis}</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${loc.refs && loc.refs.length > 0 ? `
          <div class="feature-card">
            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:6px; margin-bottom:0.35rem;">
              <h3 style="margin:0; line-height:1.3;">Chronological Scriptural Attestations</h3>
              <span class="conf-pill conf-pill-1" style="font-size:0.7rem; flex-shrink:0;">${loc.refs.length} Attestation${loc.refs.length === 1 ? '' : 's'}</span>
            </div>
            <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:0.6rem; line-height:1.4;">
              Exhaustive record of every Book of Mormon verse naming or describing <strong>${loc.name}</strong>, ordered in narrative sequence with verbatim excerpts:
            </p>
            <div style="display:flex; flex-direction:column; gap:0.55rem;">
              ${loc.refs.map(r => {
                const churchUrl = getChurchScriptureUrl(r.ref);
                return `
                  <div style="background:#FFFDF9; border:1px solid var(--border-parchment); border-radius:6px; padding:0.55rem 0.75rem;">
                    <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:6px; margin-bottom:0.25rem;">
                      <strong style="color:var(--color-crimson); font-size:0.82rem; line-height:1.3;">📖 ${r.ref}</strong>
                      <a href="${churchUrl || '#'}" class="church-scripture-btn" data-url="${churchUrl}" data-ref="${r.ref}" style="font-size:0.72rem; padding:0.2rem 0.5rem; flex-shrink:0;">
                        <span>Read Chapter</span> ↗
                      </a>
                    </div>
                    <p style="font-family:var(--font-scripture); font-style:italic; font-size:0.82rem; color:var(--text-primary); margin:0; line-height:1.4;">
                      "${r.text}"
                    </p>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        ` : ''}

        <div class="history-block">
          <h4>Historical & Scriptural Overview</h4>
          <p>${loc.summary || 'A primary landmark recorded in the internal textual architecture of the Book of Mormon.'}</p>
        </div>

        <div class="demographic-stats-grid">
          <div class="demographic-stat-box">
            <span class="demographic-label">Scriptural Jurisdiction</span>
            <span class="demographic-value">${jurisdiction}</span>
          </div>
          <div class="demographic-stat-box">
            <span class="demographic-label">Defensive Structure</span>
            <span class="demographic-value">${fortification}</span>
          </div>
          <div class="demographic-stat-box">
            <span class="demographic-label">Geographic Region</span>
            <span class="demographic-value">${loc.region}</span>
          </div>
          <div class="demographic-stat-box">
            <span class="demographic-label">Textual Confidence</span>
            <span class="demographic-value">Level ${confLevel} (${confTitle})</span>
          </div>
        </div>

        <div class="drawer-church-stance-card">
          <div class="church-stance-mini-header">
            <span style="font-size: 1.1rem;">📜</span>
            <span class="church-stance-mini-title">Pure Internal Geography Rule</span>
          </div>
          <p class="church-stance-mini-desc" style="font-family: var(--font-sans); font-size: 0.82rem; line-height: 1.45; font-style: normal; margin-bottom: 0.4rem;">
            <strong>This atlas is constructed solely from the internal geographic statements of the Book of Mormon text. No external geographic model has been applied.</strong>
          </p>
          <p style="font-family: var(--font-scripture); font-size: 0.92rem; font-style: italic; color: var(--text-secondary); margin: 0 0 0.5rem 0;">
            "The Church does not take a position on specific geographic locations in the Americas... the best guide is the text of the Book of Mormon itself."
          </p>
          <button class="church-stance-mini-btn" id="codexDisclaimerBtn">Read Full Gospel Topics Statement &rarr;</button>
        </div>
      `;

      // Connect related places links
      sidebarContent.querySelectorAll('.related-place-item').forEach(item => {
        item.addEventListener('click', () => {
          const placeId = item.getAttribute('data-place');
          if (placeId && mapLocations[placeId]) {
            selectLocation(placeId);
          }
        });
      });

      const codexDisclaimerBtn = document.getElementById('codexDisclaimerBtn');
      if (codexDisclaimerBtn) {
        codexDisclaimerBtn.addEventListener('click', () => openModal(disclaimerModal));
      }

      sidebarContent.querySelectorAll('.church-scripture-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          openScriptureModal(btn.getAttribute('data-ref'), btn.getAttribute('data-url'));
        });
      });

    // -------------------------------------------------------------------------
    // TAB 2: SCRIPTURES (MULTI-VERSION & 7TH-GRADE PLAIN ENGLISH)
    // -------------------------------------------------------------------------
    } else if (activeTab === 'scriptures') {
      renderScripturesTab(loc);

    // -------------------------------------------------------------------------
    // TAB 2.5: VIDEOS (OFFICIAL CHURCH OF JESUS CHRIST COLLECTION)
    // -------------------------------------------------------------------------
    } else if (activeTab === 'videos') {
      renderVideosTab(loc);

    // -------------------------------------------------------------------------
    // TAB 3: TEACHINGS & CONTEXT (DEEP SCRIPTURAL DOSSIERS)
    // -------------------------------------------------------------------------
    } else if (activeTab === 'teachings') {
      renderTeachingsTab(loc);

    // -------------------------------------------------------------------------
    // TAB 4: PEOPLE & LEADERS
    // -------------------------------------------------------------------------
    } else if (activeTab === 'people') {
      sidebarContent.innerHTML = `
        <div class="drawer-section">
          <div class="section-label">Scriptural Figures & Leaders</div>
          <div style="display:flex; flex-direction:column; gap:0.6rem; margin-top:0.4rem;" id="peopleCardsContainer"></div>
        </div>

        <div class="drawer-section" style="margin-top:0.75rem;">
          <div class="section-label">All Indexed Figures</div>
          <div class="people-tags" id="peopleTagsContainer"></div>
        </div>
      `;

      const cardsContainer = document.getElementById('peopleCardsContainer');
      const tagsContainer = document.getElementById('peopleTagsContainer');

      if (loc.notablePeople && loc.notablePeople.length > 0) {
        loc.notablePeople.forEach(person => {
          const roleDesc = (typeof PROPHET_ROLES !== 'undefined' && PROPHET_ROLES[person])
            ? PROPHET_ROLES[person]
            : `Prominent scriptural figure, prophet, or leader associated with ${loc.name} in the sacred record of the Book of Mormon.`;

          // Card
          const card = document.createElement('div');
          card.className = 'person-card';
          card.innerHTML = `
            <span class="person-card-name">👤 ${person}</span>
            <span class="person-card-role">${roleDesc}</span>
          `;
          cardsContainer.appendChild(card);

          // Tag
          const tag = document.createElement('span');
          tag.className = 'person-tag';
          tag.textContent = person;
          tagsContainer.appendChild(tag);
        });
      } else {
        cardsContainer.innerHTML = `<p style="font-size:0.8rem; color:var(--text-muted);">Inhabitants of ancient America recorded in sacred history.</p>`;
      }

    // -------------------------------------------------------------------------
    // TAB 5: MILITARY & STRATEGY
    // -------------------------------------------------------------------------
    } else if (activeTab === 'military') {
      sidebarContent.innerHTML = `
        <div class="military-strategy-card">
          <div class="insight-header">
            <span class="insight-icon">⚔️</span>
            <h3 style="margin:0; font-family:var(--font-serif-title); font-size:0.95rem; color:var(--color-crimson);">
              Strategic Geography & Defenses
            </h3>
          </div>
          <p style="font-size:0.84rem; line-height:1.55; color:var(--text-primary); margin-top:0.6rem;">
            <strong>Defensive Classification:</strong> ${fortification}
          </p>
          <p style="font-size:0.82rem; line-height:1.5; color:var(--text-secondary); margin-top:0.4rem;">
            In Nephite military science, cities along the borders were fortified with Captain Moroni's revolutionary architecture: deep exterior trenches, timber breastworks, towers, and parapets (Alma 49–53).
          </p>
        </div>

        <div class="history-block" style="margin-top:0.6rem;">
          <h4>Military Campaigns & Movements</h4>
          <p>
            ${loc.historicalEvents && loc.historicalEvents.length > 0 ? loc.historicalEvents.join(' • ') : 'Key fortress maintaining the defensive perimeter of the nation.'}
          </p>
        </div>

        <div class="demographic-stats-grid" style="margin-top:0.6rem;">
          <div class="demographic-stat-box">
            <span class="demographic-label">Tactical Terrain</span>
            <span class="demographic-value">${loc.category.toUpperCase()}</span>
          </div>
          <div class="demographic-stat-box">
            <span class="demographic-label">Border Line</span>
            <span class="demographic-value">${loc.region}</span>
          </div>
        </div>
      `;

    // -------------------------------------------------------------------------
    // TAB 6: AD 34 CATACLYSM
    // -------------------------------------------------------------------------
    } else if (activeTab === 'cataclysm') {
      sidebarContent.innerHTML = `
        <div class="drawer-fate-card">
          <div class="drawer-fate-header">
            <span>🔥</span>
            <span>3 Nephi Physical Transformation Record (AD 34)</span>
          </div>
          <p class="drawer-fate-body">
            ${loc.fate3Nephi ? loc.fate3Nephi : 'This territory underwent profound physical alterations during the great storms, earthquakes, and fires at the crucifixion of Jesus Christ (3 Nephi 8–10).'}
          </p>
        </div>

        <div class="history-block" style="margin-top:0.75rem;">
          <h4>Chronological Historical Timeline</h4>
          <div class="events-timeline" style="margin-top:0.5rem;" id="codexEventsTimeline"></div>
        </div>
      `;

      const eventsTimeline = document.getElementById('codexEventsTimeline');
      if (loc.historicalEvents && loc.historicalEvents.length > 0) {
        loc.historicalEvents.forEach(evt => {
          const item = document.createElement('div');
          item.className = 'event-item';
          item.innerHTML = `<div class="event-desc">${evt}</div>`;
          eventsTimeline.appendChild(item);
        });
      } else {
        eventsTimeline.innerHTML = `<div style="font-size:0.8rem; color:var(--text-muted);">Historical sequence documented in the Book of Mormon.</div>`;
      }

    // -------------------------------------------------------------------------
    // TAB 7: CHURCH STANCE
    // -------------------------------------------------------------------------
    } else if (activeTab === 'church') {
      sidebarContent.innerHTML = `
        <div class="drawer-church-stance-card">
          <div class="church-stance-mini-header">
            <span style="font-size: 1.3rem;">📜</span>
            <span class="church-stance-mini-title">Official First Presidency Declaration</span>
          </div>
          <p class="church-stance-mini-desc" style="font-family: var(--font-scripture); font-size: 1.02rem; font-style: italic; line-height:1.5;">
            "The Church does not take a position on the specific geographic locations of Book of Mormon events in the ancient Americas... The best guide to Book of Mormon geography is the text of the Book of Mormon itself."
          </p>
          <div class="core-rule-card" style="margin: 0.8rem 0; padding: 0.75rem 0.9rem; background: rgba(212,160,23,0.08); border-left: 3px solid var(--accent-gold); border-radius: 4px;">
            <strong style="color: var(--accent-gold); font-size: 0.82rem; display: block; margin-bottom: 0.3rem;">Internal Textual Geography Mandate</strong>
            <p style="font-size: 0.82rem; line-height: 1.45; color: var(--text-primary); margin: 0;">
              This atlas is constructed solely from the internal geographic statements of the Book of Mormon text. No external geographic model has been applied.
            </p>
          </div>
          <p style="font-size: 0.82rem; line-height: 1.5; color: var(--text-secondary); margin-top: 0.6rem;">
            This interactive atlas is designed as a study aid to understand the internal textual relationships, day-journeys, river flows, and directionalities described in the scriptures without referencing or applying external theories (e.g., Mesoamerican, Heartland, Baja, or New York models).
          </p>
          <button class="btn btn-primary glow-gold" id="openFullStanceBtn" style="margin-top: 0.75rem; justify-content: center; width: 100%;">
            Open Full Gospel Topics Statement & Distance Metrics
          </button>
        </div>
      `;

      const openFullStanceBtn = document.getElementById('openFullStanceBtn');
      if (openFullStanceBtn) {
        openFullStanceBtn.addEventListener('click', () => openModal(disclaimerModal));
      }
    }

    // If a guided expedition is running but user is exploring city tabs, display a sleek mini-banner at top
    if (currentJourney && currentJourney.stages && currentJourney.stages[currentStageIndex] && activeTab !== 'expedition') {
      const miniBannerHtml = `
        <div class="expedition-mini-banner" style="background:linear-gradient(135deg, #1E293B 0%, #0F172A 100%); color:#FFFDF9; border-radius:6px; padding:0.5rem 0.8rem; margin-bottom:0.8rem; display:flex; align-items:center; justify-content:space-between; font-size:0.78rem; border:1.5px solid var(--color-gold); box-shadow:0 2px 6px rgba(0,0,0,0.15);">
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="tour-tab-live-dot"></span>
            <span><strong>Active Campaign:</strong> ${currentJourney.name} (${currentStageIndex + 1}/${currentJourney.stages.length})</span>
          </div>
          <button type="button" class="btn btn-outline btn-xs" id="miniBannerReturnBtn" style="color:#C5A059; border-color:#C5A059; padding:2px 8px; font-size:0.72rem; font-weight:700;">
            Return to Campaign ⚔️
          </button>
        </div>
      `;
      sidebarContent.insertAdjacentHTML('afterbegin', miniBannerHtml);
      const miniReturn = sidebarContent.querySelector('#miniBannerReturnBtn');
      if (miniReturn) {
        miniReturn.addEventListener('click', (e) => {
          e.stopPropagation();
          switchTab('expedition');
        });
      }
    }
  }

  // ==========================================================================
  // MULTI-TRANSLATION SCRIPTURES TAB (Standard + 7th-Grade Plain English)
  // ==========================================================================
  function renderScripturesTab(loc) {
    if (!sidebarContent) return;

    const refs = (loc && loc.refs && loc.refs.length > 0) ? loc.refs : [
      { ref: "Title Page", text: "Written to show unto the remnant of the house of Israel what great things the Lord hath done for their fathers; and that they may know the covenants of the Lord, that they are not cast off forever—And also to the convincing of the Jew and Gentile that Jesus is the Christ, the Eternal God, manifesting himself unto all nations." },
      { ref: "1 Nephi 10:4–6", text: "Yea, even six hundred years from the time that my father left Jerusalem, a prophet would the Lord God raise up among the Jews—even a Messiah, or, in other words, a Savior of the world... and he should be baptized by John in Bethabara... and after he had baptized the Messiah with water, he should behold and bear record that he had baptized the Lamb of God, who should take away the sins of the world." },
      { ref: "2 Nephi 25:26", text: "And we talk of Christ, we rejoice in Christ, we preach of Christ, we prophesy of Christ, and we write according to our prophecies, that our children may know to what source they may look for a remission of their sins." },
      { ref: "2 Nephi 31:20", text: "Wherefore, ye must press forward with a steadfastness in Christ, having a perfect brightness of hope, and a love of God and of all men. Wherefore, if ye shall press forward, feasting upon the word of Christ, and endure to the end, behold, thus saith the Father: Ye shall have eternal life." },
      { ref: "Mosiah 3:5–8", text: "For behold, the time cometh, and is not far distant, that with power, the Lord Omnipotent who reigneth, who was, and is from all eternity to all eternity, shall come down from heaven among the children of men, and shall dwell in a tabernacle of clay, and shall go forth amongst men, working mighty miracles... and lo, he shall suffer temptations, and pain of body, hunger, thirst, and fatigue, even more than man can suffer, except it be unto death; for behold, blood cometh from every pore, so great shall be his anguish for the wickedness and the abominations of his people." },
      { ref: "Mosiah 18:8–10", text: "And now, as ye are desirous to come into the fold of God, and to be called his people, and are willing to bear one another's burdens, that they may be light; yea, and are willing to mourn with those that mourn; yea, and comfort those that stand in need of comfort, and to stand as witnesses of God at all times and in all things, and in all places that ye may be in, even until death... what have you against being baptized in the name of the Lord?" },
      { ref: "Alma 7:11–13", text: "And he shall go forth, suffering pains and afflictions and temptations of every kind; and this that the word might be fulfilled which saith he will take upon him the pains and the sicknesses of his people. And he will take upon him death, that he may loose the bands of death which bind his people; and he will take upon him their infirmities, that his bowels may be filled with mercy, according to the flesh, that he may know according to the flesh how to succor his people according to their infirmities." },
      { ref: "Helaman 5:12", text: "And now, my sons, remember, remember that it is upon the rock of our Redeemer, who is Christ, the Son of God, that ye must build your foundation; that when the devil shall send forth his mighty winds, yea, his shafts in the whirlwind, yea, when all his hail and his mighty storm shall beat upon you, it shall have no power over you to drag you down to the gulf of misery and endless wo, because of the rock upon which ye are built, which is a sure foundation, a foundation whereon if men build they cannot fall." },
      { ref: "3 Nephi 11:10–11", text: "Behold, I am Jesus Christ, whom the prophets testified shall come into the world. And behold, I am the light and the life of the world; and I have drunk out of that bitter cup which the Father hath given me, and have glorified the Father in taking upon me the sins of the world, in the which I have suffered the will of the Father in all things from the beginning." },
      { ref: "3 Nephi 17:7, 21–24", text: "Have ye any that are sick among you? Bring them hither. Have ye any that are lame, or blind, or halt, or maimed... bring them hither and I will heal them, for I have compassion upon you... And he took their little children, one by one, and blessed them, and prayed unto the Father for them... and they saw angels descending out of heaven as it were in the midst of fire; and they came down and encircled those little ones about." },
      { ref: "3 Nephi 18:7, 11", text: "And this shall ye do in remembrance of my body, which I have shown unto you. And it shall be a testimony unto the Father that ye do always remember me. And if ye do always remember me ye shall have my Spirit to be with you." },
      { ref: "3 Nephi 27:13–15, 21–22", text: "Behold I have given unto you my gospel, and this is the gospel which I have given unto you—that I came into the world to do the will of my Father, because my Father sent me. And my Father sent me that I might be lifted up upon the cross... Verily, verily, I say unto you, this is my gospel; and ye know the things that ye must do in my church; for the works which ye have seen me do that shall ye also do." },
      { ref: "3 Nephi 29:1–3", text: "And now behold, I say unto you that when the Lord shall see fit, in his wisdom, that these sayings shall come unto the Gentiles according to his word, then ye may know that the covenant which the Father hath made with the children of Israel, concerning their restoration to the lands of their inheritance, is already beginning to be fulfilled." },
      { ref: "Ether 12:27", text: "And if men come unto me I will show unto them their weakness. I give unto men weakness that they may be humble; and my grace is sufficient for all men that humble themselves before me; for if they humble themselves before me, and have faith in me, then will I make weak things become strong unto them." },
      { ref: "Moroni 7:47", text: "But charity is the pure love of Christ, and it endureth forever; and whoso is found possessed of it at the last day, it shall be well with him." },
      { ref: "Moroni 10:4–5", text: "And when ye shall receive these things, I would exhort you that ye would ask God, the Eternal Father, in the name of Christ, if these things are not true; and if ye shall ask with a sincere heart, with real intent, having faith in Christ, he will manifest the truth of it unto you, by the power of the Holy Ghost. And by the power of the Holy Ghost ye may know the truth of all things." }
    ];

    const sectionTitle = loc ? `Book of Mormon Scriptural Citations (${refs.length})` : `Core Book of Mormon Passages Across All Dispensations (${refs.length})`;

    sidebarContent.innerHTML = `
      <div class="kjv-translation-notice">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 6px;">
          <div>
            <span class="kjv-badge">Dual-Translation Active</span>
            <span style="font-size:0.75rem; color:var(--text-secondary); margin-left:6px;">Standard text + <strong>Plain English (7th Grade Level)</strong>.</span>
          </div>
        </div>
      </div>

      <div class="drawer-section">
        <div class="section-label">${sectionTitle}</div>
        <div style="display:flex; flex-direction:column; gap:0.85rem; margin-top:0.4rem;" id="scriptureCardsContainer">
          ${refs.map((r, idx) => {
            const trans = (typeof SCRIPTURE_TRANSLATIONS !== 'undefined')
              ? SCRIPTURE_TRANSLATIONS.get(r.ref, r.text)
              : { standard: r.text, plainEnglish: r.text, insight: '' };

            const churchUrl = getChurchScriptureUrl(r.ref);
            const enc = (val) => encodeURIComponent(val || '');

            return `
              <div class="scripture-verse-card"
                   id="verseCard_${idx}"
                   data-ref="${r.ref}"
                   data-bom="${enc(trans.standard)}"
                   data-plain="${enc(trans.plainEnglish)}"
                   data-insight="${enc(trans.insight)}">
                <div class="scripture-card-top">
                  <span class="scripture-citation">📖 ${r.ref}</span>
                  <div class="scripture-card-top-right">
                    <span class="version-badge">Standard Text</span>
                    <button class="scripture-card-menu-btn" title="Choose Version" aria-label="Version options">⋮</button>
                    <div class="scripture-version-dropdown">
                      <button class="scripture-version-item selected" data-version="bom">
                        <span>Standard Text</span>
                        <span style="font-size:0.65rem; color:var(--color-crimson); font-weight:700;">DEFAULT</span>
                      </button>
                      <button class="scripture-version-item" data-version="plain">
                        <span>Plain English (7th Grade Level)</span>
                        <span style="font-size:0.65rem; color:#0284C7; font-weight:700;">EASY READING</span>
                      </button>
                      <button class="scripture-version-item" data-version="insight">
                        <span>Study Note & Meaning</span>
                        <span style="font-size:0.65rem; color:#854D0E; font-weight:700;">CONTEXT</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="version-toggle-pills">
                  <button class="version-pill active" data-version="bom">Standard Text</button>
                  <button class="version-pill" data-version="plain">Plain English (7th Grade)</button>
                  <button class="version-pill" data-version="insight">Study Note</button>
                </div>

                <p class="scripture-body">"${trans.standard}"</p>

                <div class="scripture-action-row">
                  ${churchUrl ? `
                    <a href="${churchUrl}" target="_blank" rel="noopener noreferrer" class="church-scripture-btn ref-church-btn" data-url="${churchUrl}" data-ref="${r.ref}" style="font-size:0.76rem; padding:0.4rem 0.65rem;" title="Read Chapter on ChurchofJesusChrist.org">
                      <span>📖 Read Chapter on ChurchofJesusChrist.org</span>
                      <span class="btn-arrow">↗</span>
                    </a>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Connect pill & dropdown version switchers
    const cards = sidebarContent.querySelectorAll('.scripture-verse-card');
    cards.forEach(card => {
      const body = card.querySelector('.scripture-body');
      const badge = card.querySelector('.version-badge');
      const pills = card.querySelectorAll('.version-pill');
      const menuBtn = card.querySelector('.scripture-card-menu-btn');
      const dropdown = card.querySelector('.scripture-version-dropdown');
      const menuItems = card.querySelectorAll('.scripture-version-item');

      const dec = (attr) => decodeURIComponent(card.getAttribute(attr) || '');
      const bomText = dec('data-bom');
      const plainText = dec('data-plain');
      const insightText = dec('data-insight');

      function switchVersion(ver) {
        pills.forEach(p => p.classList.toggle('active', p.getAttribute('data-version') === ver));
        menuItems.forEach(m => m.classList.toggle('selected', m.getAttribute('data-version') === ver));
        if (dropdown) dropdown.classList.remove('open');

        body.classList.remove('plain-english', 'study-insight');

        if (ver === 'plain') {
          body.textContent = `"${plainText}"`;
          body.classList.add('plain-english');
          if (badge) badge.textContent = 'Plain English (7th Grade)';
        } else if (ver === 'insight') {
          body.textContent = insightText ? `Insight: ${insightText}` : `Doctrinal context recorded for this passage.`;
          body.classList.add('study-insight');
          if (badge) badge.textContent = 'Study Note';
        } else {
          body.textContent = `"${bomText}"`;
          if (badge) badge.textContent = 'Standard Text';
        }
      }

      pills.forEach(pill => {
        pill.addEventListener('click', () => {
          switchVersion(pill.getAttribute('data-version'));
        });
      });

      menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          switchVersion(item.getAttribute('data-version'));
        });
      });

      if (menuBtn && dropdown) {
        menuBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          dropdown.classList.toggle('open');
        });
      }
    });

    // Close dropdowns on outside click
    document.addEventListener('click', () => {
      sidebarContent.querySelectorAll('.scripture-version-dropdown.open').forEach(d => d.classList.remove('open'));
    });

    // Connect reader modal buttons
    sidebarContent.querySelectorAll('.ref-church-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const ref = btn.getAttribute('data-ref');
        const url = btn.getAttribute('data-url');
        if (url) openScriptureModal(ref, url);
      });
    });
  }

  // ==========================================================================
  // RICH TEACHINGS & CONTEXT TAB (Modeled after New Testament Geography)
  // ==========================================================================
  function renderTeachingsTab(loc) {
    if (!sidebarContent) return;

    const locId = loc ? loc.id : 'global_bom';
    const dossier = (typeof getPlaceDossier === 'function')
      ? getPlaceDossier(locId, loc)
      : {
          teacher: (loc && loc.notablePeople) ? loc.notablePeople.join(', ') : 'The Resurrected Lord Jesus Christ, Lehi, Nephi, Jacob, Enos, Jarom, Omni, King Mosiah I, King Benjamin, Abinadi, Alma the Elder, King Mosiah II, Alma the Younger, Amulek, Zeezrom, Sons of Mosiah, Captain Moroni, Helaman, Shiblon, Corianton, Nephi & Lehi, Samuel the Lamanite, Mormon, Moroni, The Brother of Jared, & Ether',
          audience: 'Nephite, Lamanite, Mulekite, Jaredite & Zoramite Nations; Kings, Judges, Soldiers, Covenant Families, Little Children, and All Future Readers in the Latter Days',
          whatWasTaught: (loc && loc.summary) || 'The Fulness of the Everlasting Gospel of Jesus Christ: the reality of His Resurrection and Atonement; faith, repentance, baptism, and the Holy Ghost; moral agency and the Fall of Adam; and enduring in holiness to the end.',
          whyTaught: 'To show unto the remnant of the house of Israel what great things the Lord hath done for their fathers; and to the convincing of the Jew and Gentile that Jesus is the Christ, the Eternal God.',
          context: (loc && loc.region) || 'Over 2,600 years of sacred history across ancient America (~2200 BC to AD 421).',
          howAccepted: 'Produced golden eras of peace in 4 Nephi, alongside solemn warnings of apostasy when covenants were broken.',
          passages: []
        };

    const placeTitle = loc ? (loc.name || loc.title) : 'All Lands of the Book of Mormon';

    sidebarContent.innerHTML = `
      <div class="teachings-role-grid">
        <div class="teachings-stat-box" style="border-left: 3px solid var(--color-crimson);">
          <span class="teachings-stat-label">Who Was Teaching</span>
          <span class="teachings-stat-value">${dossier.teacher}</span>
        </div>
        <div class="teachings-stat-box" style="border-left: 3px solid var(--color-gold);">
          <span class="teachings-stat-label">Who Was Being Taught</span>
          <span class="teachings-stat-value">${dossier.audience}</span>
        </div>
      </div>

      <div class="teachings-card teachings-card-gold">
        <div class="teachings-card-title">
          <span>📜</span>
          <span>What Was Taught at ${placeTitle}</span>
        </div>
        <div class="teachings-card-body">
          ${dossier.whatWasTaught}
        </div>
      </div>

      <div class="teachings-card teachings-card-crimson">
        <div class="teachings-card-title">
          <span>🎯</span>
          <span>Why It Was Taught</span>
        </div>
        <div class="teachings-card-body">
          ${dossier.whyTaught}
        </div>
      </div>

      <div class="teachings-card teachings-card-bronze">
        <div class="teachings-card-title">
          <span>🏛️</span>
          <span>Historical, Geographic & Cultural Context</span>
        </div>
        <div class="teachings-card-body">
          ${dossier.context}
        </div>
      </div>

      <div class="teachings-card teachings-card-sage">
        <div class="teachings-card-title">
          <span>🤝</span>
          <span>How the Teachings Were Accepted & Community Response</span>
        </div>
        <div class="teachings-card-body">
          ${dossier.howAccepted}
        </div>
      </div>

      ${dossier.passages && dossier.passages.length > 0 ? `
        <div class="feature-card" style="margin-top: 0.5rem;">
          <h4 style="font-family: var(--font-serif-title); font-size: 0.88rem; margin: 0 0 0.5rem 0; color: var(--color-crimson);">
            Key Scriptural Passages & Discourses
          </h4>
          <div style="display: flex; flex-direction: column; gap: 0.4rem;">
            ${dossier.passages.map(ref => {
              const url = getChurchScriptureUrl(ref);
              return `
                <a href="${url || '#'}" class="church-scripture-btn teachings-scripture-link" data-ref="${ref}" data-url="${url || ''}">
                  <span>📖 Read ${ref} (Official Scripture)</span>
                  <span class="btn-arrow">↗</span>
                </a>
              `;
            }).join('')}
          </div>
        </div>
      ` : ''}
    `;

    // Connect chapter reading buttons to scripture reader modal
    sidebarContent.querySelectorAll('.teachings-scripture-link').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const ref = btn.getAttribute('data-ref');
        const url = btn.getAttribute('data-url');
        if (url) openScriptureModal(ref, url);
      });
    });
  }

  // ==========================================================================
  // OFFICIAL BOOK OF MORMON VIDEOS TAB (ChurchofJesusChrist.org)
  // ==========================================================================
  function renderVideosTab(loc) {
    if (!sidebarContent) return;

    const placeName = loc ? (loc.name || loc.title) : "the Book of Mormon";
    const locId = loc ? loc.id : null;
    const region = loc ? loc.region : null;

    let videoList = [];
    if (typeof findChurchVideosForLocation === 'function') {
      videoList = findChurchVideosForLocation(locId, region);
    } else if (typeof BOOK_OF_MORMON_VIDEOS !== 'undefined' && BOOK_OF_MORMON_VIDEOS) {
      videoList = BOOK_OF_MORMON_VIDEOS.slice(0, 6);
    }

    const isWelcome = !loc;

    sidebarContent.innerHTML = `
      <div class="video-tab-header">
        <div class="video-tab-title">
          <span>🎬</span>
          <span>${isWelcome ? "Official Book of Mormon Videos Collection" : `Book of Mormon Videos for ${placeName}`}</span>
        </div>
        <div class="video-tab-subtitle">
          Produced by The Church of Jesus Christ of Latter-day Saints. These videos faithfully portray the prophetic narratives, sacred events, revelations, and ministry of Jesus Christ in the ancient Americas.
        </div>
        <div style="margin-top:0.75rem;">
          <a href="https://www.churchofjesuschrist.org/media/collection/book-of-mormon-videos?lang=eng" target="_blank" rel="noopener noreferrer" class="video-directory-btn" title="Browse Full Collection on ChurchofJesusChrist.org">
            <span>🎬 Browse Full Book of Mormon Videos Index (ChurchofJesusChrist.org)</span>
            <span class="btn-arrow">↗</span>
          </a>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.9rem;">
        ${videoList.map(v => {
          const scriptureUrl = getChurchScriptureUrl(v.scriptureRef);
          return `
            <div class="video-card">
              <a href="${v.churchUrl}" target="_blank" rel="noopener noreferrer" class="video-preview-banner" title="Watch '${v.title}' on ChurchofJesusChrist.org">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="video-category-pill">${v.category || "BOOK OF MORMON VIDEO"}</span>
                  <span style="font-size:0.72rem; color:#FDE68A; opacity:0.85;">ChurchofJesusChrist.org</span>
                </div>
                <div class="video-play-overlay" title="Watch on ChurchofJesusChrist.org">
                  ▶
                </div>
                <div style="display:flex; justify-content:space-between; align-items:flex-end;">
                  <span style="font-size:0.74rem; color:rgba(255,255,255,0.8); font-style:italic;">${v.thumbnailText || placeName}</span>
                  <span class="video-duration-pill">⏱️ ${v.duration || "Video"}</span>
                </div>
              </a>

              <div class="video-card-body">
                <h4 class="video-title">${v.title}</h4>
                <div class="video-scripture-ref">
                  <span>📖</span>
                  <span>${v.scriptureRef}</span>
                </div>
                <p class="video-description">${v.description}</p>

                <div class="video-action-row">
                  <a href="${v.churchUrl}" target="_blank" rel="noopener noreferrer" class="video-watch-btn" title="Watch Video on ChurchofJesusChrist.org">
                    <span>▶ Watch Video on ChurchofJesusChrist.org</span>
                    <span class="btn-arrow">↗</span>
                  </a>
                  ${scriptureUrl ? `
                    <a href="${scriptureUrl}" class="church-scripture-btn video-read-scripture-btn" data-ref="${v.scriptureRef}" data-url="${scriptureUrl}" style="font-size:0.76rem; padding:0.4rem 0.65rem;" title="Read Scripture Context in Study Modal">
                      <span>📖 Read Chapter Context (${v.scriptureRef})</span>
                      <span class="btn-arrow">↗</span>
                    </a>
                  ` : ''}
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    // Connect scripture modal click handlers
    sidebarContent.querySelectorAll('.video-read-scripture-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const ref = btn.getAttribute('data-ref');
        const url = btn.getAttribute('data-url');
        if (url) openScriptureModal(ref, url);
      });
    });
  }

  function renderWelcomeSidebar() {
    activeLocationId = null;

    if (activeTab === 'expedition' && currentJourney) {
      const stage = currentJourney.stages[currentStageIndex];
      const loc = stage ? mapLocations[stage.locId] : null;
      if (loc) {
        renderSidebarContent(loc);
        return;
      }
    }

    if (activeTab === 'videos') {
      if (sidebarEyebrow) sidebarEyebrow.textContent = 'OFFICIAL CHURCH MEDIA';
      if (sidebarTitle) sidebarTitle.textContent = 'Book of Mormon Videos';
      renderVideosTab(null);
      return;
    }

    if (activeTab === 'teachings') {
      renderGlobalTeachingsTab();
      return;
    }

    if (activeTab === 'scriptures') {
      renderGlobalScripturesTab();
      return;
    }

    if (activeTab === 'people') {
      renderGlobalPeopleTab();
      return;
    }

    if (activeTab === 'military') {
      renderGlobalMilitaryTab();
      return;
    }

    if (activeTab === 'cataclysm') {
      renderGlobalCataclysmTab();
      return;
    }

    if (activeTab === 'church') {
      renderGlobalChurchStanceTab();
      return;
    }

    // Default Overview Tab
    if (sidebarEyebrow) sidebarEyebrow.textContent = 'PURE INTERNAL SCRIPTURAL ATLAS';
    if (sidebarTitle) sidebarTitle.textContent = 'Book of Mormon Geography';

    sidebarContent.innerHTML = `
      <div class="pure-textual-clarification-banner">
        <div class="pure-textual-badge">CORE RULE (NON-NEGOTIABLE)</div>
        <p class="pure-textual-text">
          <strong>This atlas is constructed solely from the internal geographic statements of the Book of Mormon text. No external geographic model has been applied.</strong>
        </p>
      </div>

      <div class="hero-quote" style="margin-top:0.4rem;">
        <p class="quote-text">"And they did look forth upon the land of promise; and behold, it was a land choice above all other lands."</p>
        <span class="quote-ref">— 1 Nephi 18:25</span>
      </div>

      <div class="feature-card" style="border: 1.5px solid var(--border-gold); background: linear-gradient(135deg, #FFFDF9 0%, #FBF6EB 100%);">
        <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.35rem;">
          <span style="font-size:1.15rem;">🧭</span>
          <h3 style="margin:0; font-family:var(--font-serif-title); font-size:0.92rem; color:var(--color-crimson);">Scriptural Atlases Trilogy</h3>
        </div>
        <p style="font-size:0.78rem; color:var(--text-secondary); margin-bottom:0.55rem;">
          Seamlessly navigate between companion interactive scriptural atlases:
        </p>
        <div style="display:flex; flex-direction:column; gap:0.45rem;">
          <a href="https://jviola60.github.io/old-testament-geography/" target="_blank" rel="noopener noreferrer" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; background:#FFFDF9; border:1px solid var(--border-gold); border-radius:6px; padding:0.45rem 0.7rem; text-decoration:none; color:var(--text-primary); font-size:0.8rem; font-weight:600; transition:all 0.15s ease;">
            <span style="word-break:normal; line-height:1.35;">📜 Old Testament Atlas (~4000 BC – 400 BC)</span>
            <span style="color:var(--color-crimson); font-size:0.75rem; flex-shrink:0;">Explore ↗</span>
          </a>
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; background:rgba(197,160,89,0.2); border:1px solid var(--color-gold); border-radius:6px; padding:0.45rem 0.7rem; font-size:0.8rem; font-weight:700; color:var(--color-gold-dark);">
            <span style="word-break:normal; line-height:1.35;">📖 Book of Mormon Atlas (~2200 BC – AD 421)</span>
            <span class="conf-pill conf-pill-1" style="font-size:0.68rem; padding:1px 6px; flex-shrink:0;">Current Atlas</span>
          </div>
          <a href="https://jviola60.github.io/new-testament-geography/" target="_blank" rel="noopener noreferrer" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; background:#FFFDF9; border:1px solid var(--border-gold); border-radius:6px; padding:0.45rem 0.7rem; text-decoration:none; color:var(--text-primary); font-size:0.8rem; font-weight:600; transition:all 0.15s ease;">
            <span style="word-break:normal; line-height:1.35;">✝️ New Testament Atlas (~6 BC – 100 AD)</span>
            <span style="color:var(--color-crimson); font-size:0.75rem; flex-shrink:0;">Explore ↗</span>
          </a>
        </div>
      </div>

      <div class="feature-card">
        <h3>Four-Level Textual Confidence System</h3>
        <p style="font-size:0.79rem; color:var(--text-secondary); margin-bottom:0.6rem;">
          Every landmark, distance, and boundary in this atlas is categorized according to textual certainty:
        </p>
        <div style="display:flex; flex-direction:column; gap:0.45rem;">
          <div style="background:#ECFDF5; border:1px solid #A7F3D0; border-radius:6px; padding:0.5rem 0.7rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; margin-bottom:3px;">
              <strong style="color:#065F46; font-size:0.82rem; line-height:1.3;">Level 1 – Explicit (38 Sites)</strong>
              <span class="conf-pill conf-pill-1" style="flex-shrink:0;">Direct Statements</span>
            </div>
            <p style="font-size:0.75rem; color:#065F46; margin:2px 0 0 0; line-height:1.35; word-break:normal;">
              Clear directional statements (e.g. River Sidon flows north past Zarahemla, narrow neck is a day and a half’s journey).
            </p>
          </div>
          <div style="background:#F0F9FF; border:1px solid #BAE6FD; border-radius:6px; padding:0.5rem 0.7rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; margin-bottom:3px;">
              <strong style="color:#0369A1; font-size:0.82rem; line-height:1.3;">Level 2 – Strongly Supported (24 Sites)</strong>
              <span class="conf-pill conf-pill-2" style="flex-shrink:0;">High Probability</span>
            </div>
            <p style="font-size:0.75rem; color:#0369A1; margin:2px 0 0 0; line-height:1.35; word-break:normal;">
              Ample contextual statements across multiple passages establish relative placement with high probability.
            </p>
          </div>
          <div style="background:#FFFBEB; border:1px solid #FDE68A; border-radius:6px; padding:0.5rem 0.7rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; margin-bottom:3px;">
              <strong style="color:#92400E; font-size:0.82rem; line-height:1.3;">Level 3 – Inferred (17 Sites)</strong>
              <span class="conf-pill conf-pill-3" style="flex-shrink:0;">Deductive</span>
            </div>
            <p style="font-size:0.75rem; color:#92400E; margin:2px 0 0 0; line-height:1.35; word-break:normal;">
              Reasonable inference from campaign narratives without single definitive verse coordinates.
            </p>
          </div>
          <div style="background:#FEF2F2; border:1px dashed #FCA5A5; border-radius:6px; padding:0.5rem 0.7rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; margin-bottom:3px;">
              <strong style="color:#991B1B; font-size:0.82rem; line-height:1.3;">Level 4 – Indeterminate (15 Sites)</strong>
              <span class="conf-pill conf-pill-4" style="flex-shrink:0;">Position Uncertain</span>
            </div>
            <p style="font-size:0.75rem; color:#991B1B; margin:2px 0 0 0; line-height:1.35; word-break:normal;">
              Named in text (such as 3 Nephi 9 destruction catalogue), but text provides insufficient information for relative placement. Shown with explicit uncertainty markers.
            </p>
          </div>
        </div>
      </div>

      <button class="btn btn-outline" id="welcomeDistanceScaleBtn" style="width:100%; justify-content:center; padding:0.65rem 0.85rem; font-size:0.82rem; font-weight:600; white-space:normal; word-break:normal; line-height:1.35; height:auto; min-height:40px; text-align:center;">
        📏 View Scriptural Travel Distances & Days' Journey Table
      </button>

      <div class="feature-card" style="margin-top:0.4rem;">
        <h3>How to Explore the Atlas</h3>
        <ul class="feature-steps">
          <li><strong>Confidence & Tradition Filters:</strong> Use the top bar chips to filter by Level 1–4 or toggle Jaredite vs Nephite eras.</li>
          <li><strong>Scrub the Chronology:</strong> Drag the timeline slider from <strong>2200 BC to AD 421</strong> to trace dispensations.</li>
          <li><strong>Click Any Landmark:</strong> Open full dossiers with verbatim scripture citations in chronological sequence.</li>
          <li><strong>Launch Guided Tours:</strong> Pan dynamically through verified scriptural expeditions step-by-step.</li>
        </ul>
      </div>

      <div class="curated-shortcut-grid">
        <h4 style="font-family: var(--font-serif-title); font-size: 0.85rem; color: var(--color-crimson); margin-bottom: 0.4rem;">
          Featured Scriptural Expeditions
        </h4>
        <div class="tour-mini-cards" id="welcomeTourShortcuts"></div>
      </div>
    `;

    const welcomeDistBtn = document.getElementById('welcomeDistanceScaleBtn');
    const distModal = document.getElementById('distanceScaleModal');
    if (welcomeDistBtn && distModal) {
      welcomeDistBtn.addEventListener('click', () => openModal(distModal));
    }

    const shortcutsWrap = document.getElementById('welcomeTourShortcuts');
    if (shortcutsWrap && mapJourneys) {
      mapJourneys.slice(0, 4).forEach(tour => {
        const card = document.createElement('div');
        card.className = 'tour-mini-card';
        card.innerHTML = `
          <div class="tour-icon">🧭</div>
          <div class="tour-meta">
            <span class="tour-name">${tour.name}</span>
            <span class="tour-era">${tour.subtitle || `${tour.stages.length} Waypoints`}</span>
          </div>
        `;
        card.addEventListener('click', () => {
          startTour(tour.id);
        });
        shortcutsWrap.appendChild(card);
      });
    }
  }

  function switchTab(tabName) {
    const target = Array.from(sidebarTabs).find(t => t.getAttribute('data-tab') === tabName);
    if (target) {
      target.click();
    }
  }

  // ==========================================================================
  // GLOBAL WELCOME TAB RENDERERS (Ensuring all 8 tabs have unique rich content)
  // ==========================================================================
  function renderGlobalTeachingsTab() {
    if (sidebarEyebrow) sidebarEyebrow.textContent = 'DOCTRINAL OVERVIEW';
    if (sidebarTitle) sidebarTitle.textContent = 'Teachings & Context of the Book of Mormon';

    const globalDossier = (typeof getPlaceDossier === 'function')
      ? getPlaceDossier('global_bom')
      : null;

    const teacherList = (globalDossier && globalDossier.teacher)
      ? globalDossier.teacher
      : 'The Resurrected Lord Jesus Christ, The Brother of Jared, Lehi, Nephi, Jacob, Enos, Jarom, Omni, King Mosiah I, King Benjamin, Abinadi, Alma the Elder, King Mosiah II, Alma the Younger, Amulek, Zeezrom, Sons of Mosiah (Ammon, Aaron, Omner, Himni), Captain Moroni, Helaman, Shiblon, Corianton, Nephi & Lehi (sons of Helaman), Samuel the Lamanite, Lachoneus, The Twelve Nephite Disciples, Mormon, Moroni, & Ether';

    const audienceList = (globalDossier && globalDossier.audience)
      ? globalDossier.audience
      : 'Nephite, Lamanite, Mulekite, Jaredite & Zoramite Nations; Kings, Judges, Soldiers, Covenant Families, Little Children, and All Future Readers in the Latter Days';

    const keyDiscourses = [
      {
        icon: "🕊️",
        prophet: "The Resurrected Lord Jesus Christ",
        ref: "3 Nephi 11–27",
        title: "Ministry at the Temple in Bountiful",
        summary: "The Beatitudes, the Higher Law, baptismal authority, healing the sick, blessing children in circles of fire, and instituting the holy Sacrament.",
        locId: "bountiful",
        locName: "City of Bountiful"
      },
      {
        icon: "👑",
        prophet: "Patriarch Lehi & Nephi",
        ref: "2 Nephi 2; 2 Nephi 31",
        title: "Agency, the Fall & the Doctrine of Christ",
        summary: "Adam fell that men might be; moral freedom to choose eternal life; the straight and narrow path of faith, repentance, baptism, and enduring to the end.",
        locId: "land_first_inheritance",
        locName: "Land of First Inheritance"
      },
      {
        icon: "📖",
        prophet: "Jacob & Enos",
        ref: "2 Nephi 9; Jacob 2; Enos 1",
        title: "The Infinite Atonement, Pride & Mighty Prayer",
        summary: "Deliverance from the monster of death and hell; condemning pride and unauthorized polygamy; wrestling before God in the forest for remission of sins.",
        locId: "lehi_nephi",
        locName: "City of Nephi"
      },
      {
        icon: "🏰",
        prophet: "King Benjamin",
        ref: "Mosiah 2–5",
        title: "The Coronation Address from the Tower",
        summary: "Serving God by serving fellow beings; yielding to the enticings of the Holy Spirit; retaining a remission of sins from day to day through Christ.",
        locId: "zarahemla",
        locName: "City of Zarahemla"
      },
      {
        icon: "🔥",
        prophet: "Abinadi & Alma the Elder",
        ref: "Mosiah 12–16; Mosiah 18",
        title: "The Suffering Servant & Waters of Mormon",
        summary: "Standing fearlessly before King Noah; Isaiah 53 expounded; the baptismal covenant of bearing burdens, mourning with those that mourn, and comforting the afflicted.",
        locId: "waters_of_mormon",
        locName: "Waters of Mormon"
      },
      {
        icon: "⚖️",
        prophet: "Alma the Younger & Amulek",
        ref: "Alma 5; Alma 32; Alma 34",
        title: "The Mighty Change of Heart & Faith as a Seed",
        summary: "Have ye received His image in your countenances; planting and nourishing the word like an expanding seed; the Infinite and Eternal Atonement.",
        locId: "zarahemla",
        locName: "City of Zarahemla"
      },
      {
        icon: "🛡️",
        prophet: "Captain Moroni & Sons of Mosiah",
        ref: "Alma 17–22; Alma 46",
        title: "Lamanite Conversion & The Title of Liberty",
        summary: "Ammon at the Waters of Sebus; Aaron converting the Great King; Moroni raising the Title of Liberty in defense of faith, family, and freedom.",
        locId: "waters_of_sebus",
        locName: "Waters of Sebus"
      },
      {
        icon: "🧱",
        prophet: "Samuel the Lamanite",
        ref: "Helaman 13–16",
        title: "Prophecies upon the Walls of Zarahemla",
        summary: "Boldly proclaiming the five-year sign of the Savior's birth (light without darkness) and the three days of vapor of darkness at His crucifixion.",
        locId: "zarahemla",
        locName: "City of Zarahemla"
      },
      {
        icon: "⛵",
        prophet: "The Brother of Jared & Ether",
        ref: "Ether 3; Ether 12",
        title: "Piercing the Veil & Faith in Weakness",
        summary: "Beholding the premortal spirit body of Christ; molten stones; divine grace turning weakness into strength; prophecies of the New Jerusalem.",
        locId: "moriancumer_shore",
        locName: "Moriancumer Shore"
      },
      {
        icon: "📜",
        prophet: "Mormon & Moroni",
        ref: "Mormon 8–9; Moroni 7; Moroni 10",
        title: "Faith, Hope, Charity & The Final Promise",
        summary: "Charity as the pure love of Christ that never fails; abridging a thousand years of history; sealing the gold plates; knowing truth by the Holy Ghost.",
        locId: "cumorah",
        locName: "Hill Cumorah"
      }
    ];

    sidebarContent.innerHTML = `
      <div class="kjv-translation-notice">
        <span class="kjv-badge">Title Page Mandate & Christ's Ministry</span>
        <span style="font-size:0.75rem; color:var(--text-secondary); margin-left:6px;">The divine purposes of the Book of Mormon and the personal ministry of Jesus Christ.</span>
      </div>

      <!-- THE THREE DIVINE PURPOSES OF THE BOOK OF MORMON (TITLE PAGE MANDATE) -->
      <div class="feature-card" style="border: 1.5px solid var(--color-gold); background: #FFFDF9;">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:0.4rem;">
          <span style="font-size:1.2rem;">📜</span>
          <div>
            <h3 style="margin:0; font-family:var(--font-serif-title); font-size:0.96rem; color:var(--color-crimson);">
              The Three Divine Purposes of the Book of Mormon
            </h3>
            <span style="font-size:0.72rem; color:var(--text-secondary); font-style:italic;">As recorded by Moroni upon the ancient Title Page</span>
          </div>
        </div>
        <p style="font-size:0.78rem; color:var(--text-secondary); margin-bottom:0.7rem; line-height:1.4;">
          The ancient prophets inscribed and abridged this sacred record with three specific divine mandates for all future readers:
        </p>

        <div style="display:flex; flex-direction:column; gap:0.6rem;">
          <!-- Purpose 1: Mercy to Forefathers -->
          <div style="background:#FFFDF7; border:1px solid #E5D5BA; border-left:4px solid var(--color-gold); border-radius:6px; padding:0.6rem 0.75rem;">
            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:4px; margin-bottom:0.25rem;">
              <strong style="color:var(--color-gold-dark); font-size:0.83rem; font-family:var(--font-serif-title);">
                1. Mercy to Their Forefathers Across Generations
              </strong>
              <span class="conf-pill conf-pill-1" style="font-size:0.65rem;">Divine Mercy</span>
            </div>
            <p style="font-family:var(--font-scripture); font-style:italic; font-size:0.78rem; color:var(--text-primary); margin:0 0 0.35rem 0; line-height:1.35;">
              "Which is to show unto the remnant of the house of Israel what great things the Lord hath done for their fathers..."
            </p>
            <p style="font-size:0.76rem; color:var(--text-secondary); margin:0; line-height:1.4;">
              Demonstrating God’s continuous delivering power across 2,600 years: preserving the Jaredite barges across raging oceans, guiding Lehi's family to the Promised Land with the Liahona, leading Mosiah I to Zarahemla, rescuing Alma the Elder's church out of bondage, delivering Limhi's people, and sparing the righteous during the devastating 3 Nephi cataclysm.
            </p>
          </div>

          <!-- Purpose 2: Covenants of the Lord -->
          <div style="background:#F0F9FF; border:1px solid #BAE6FD; border-left:4px solid #0284C7; border-radius:6px; padding:0.6rem 0.75rem;">
            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:4px; margin-bottom:0.25rem;">
              <strong style="color:#0369A1; font-size:0.83rem; font-family:var(--font-serif-title);">
                2. Knowing the Covenants of the Lord with Israel
              </strong>
              <span class="conf-pill conf-pill-2" style="font-size:0.65rem;">House of Israel</span>
            </div>
            <p style="font-family:var(--font-scripture); font-style:italic; font-size:0.78rem; color:var(--text-primary); margin:0 0 0.35rem 0; line-height:1.35;">
              "...And that they may know the covenants of the Lord, that they are not cast off forever..."
            </p>
            <p style="font-size:0.76rem; color:var(--text-secondary); margin:0; line-height:1.4;">
              Confirming that the Abrahamic covenant is alive and active: Israel is not forgotten. Chronicling the baptismal covenant at the Waters of Mormon, temple ordinances in Nephi and Zarahemla, and Christ's supreme promise in 3 Nephi 20–22 that in the latter days the Father will gather all scattered branches of Israel and establish the New Jerusalem.
            </p>
          </div>

          <!-- Purpose 3: Convincing that Jesus is the Christ -->
          <div style="background:#FEF2F2; border:1px solid #FCA5A5; border-left:4px solid var(--color-crimson); border-radius:6px; padding:0.6rem 0.75rem;">
            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:4px; margin-bottom:0.25rem;">
              <strong style="color:var(--color-crimson); font-size:0.83rem; font-family:var(--font-serif-title);">
                3. Convincing That JESUS is the CHRIST, the Eternal God
              </strong>
              <span class="conf-pill conf-pill-4" style="font-size:0.65rem;">Central Witness</span>
            </div>
            <p style="font-family:var(--font-scripture); font-style:italic; font-size:0.78rem; color:var(--text-primary); margin:0 0 0.35rem 0; line-height:1.35;">
              "...And also to the convincing of the Jew and Gentile that JESUS is the CHRIST, the ETERNAL GOD, manifesting himself unto all nations."
            </p>
            <p style="font-size:0.76rem; color:var(--text-secondary); margin:0; line-height:1.4;">
              The paramount objective of every Book of Mormon author. Every prophet testified that salvation comes only through the merits, mercy, and grace of the Holy Messiah, who suffered in Gethsemane, died upon the cross, rose bodily the third day, and personally manifested Himself in resurrected glory at the Temple in Bountiful.
            </p>
          </div>
        </div>
      </div>

      <!-- ALL PROPHETS BEFORE HIS VISIT TESTIFIED OF CHRIST -->
      <div class="teachings-card teachings-card-gold" style="margin-top:0.4rem;">
        <div class="teachings-card-title">
          <span>🕊️</span>
          <span>All Prophets Before His Visit Testified of Jesus Christ</span>
        </div>
        <div class="teachings-card-body">
          <p style="margin-bottom:0.6rem; font-size:0.8rem; line-height:1.4;">
            Every Book of Mormon prophet across 600 years of history prior to His appearance preached the coming of Jesus Christ, His atonement, and His supreme importance for all humanity:
          </p>

          <div style="display:flex; flex-direction:column; gap:0.5rem;">
            <div style="background:#FFFDF9; border:1px solid var(--border-parchment); border-radius:6px; padding:0.5rem 0.65rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:4px;">
                <strong style="color:var(--text-primary); font-size:0.82rem;">👑 Lehi & Sariah (~600 BC)</strong>
                <span style="font-size:0.7rem; color:var(--color-crimson); font-weight:700;">1 Nephi 10:4–6</span>
              </div>
              <p style="font-size:0.76rem; color:var(--text-secondary); margin:2px 0 0 0; line-height:1.35;">
                Prophesied of the Messiah coming 600 years after leaving Jerusalem, His baptism by John in Bethabara, His death, and His redemption of all fallen humanity.
              </p>
            </div>

            <div style="background:#FFFDF9; border:1px solid var(--border-parchment); border-radius:6px; padding:0.5rem 0.65rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:4px;">
                <strong style="color:var(--text-primary); font-size:0.82rem;">📜 Nephi (~559 BC)</strong>
                <span style="font-size:0.7rem; color:var(--color-crimson); font-weight:700;">2 Nephi 25:26; 31:20</span>
              </div>
              <p style="font-size:0.76rem; color:var(--text-secondary); margin:2px 0 0 0; line-height:1.35;">
                "We talk of Christ, we rejoice in Christ, we preach of Christ, we prophesy of Christ... that our children may know to what source they may look for a remission of their sins." Defined the Doctrine of Christ: faith, repentance, baptism, and enduring in hope.
              </p>
            </div>

            <div style="background:#FFFDF9; border:1px solid var(--border-parchment); border-radius:6px; padding:0.5rem 0.65rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:4px;">
                <strong style="color:var(--text-primary); font-size:0.82rem;">📖 Jacob (~544 BC)</strong>
                <span style="font-size:0.7rem; color:var(--color-crimson); font-weight:700;">2 Nephi 9:5–12; Jacob 4:4–5</span>
              </div>
              <p style="font-size:0.76rem; color:var(--text-secondary); margin:2px 0 0 0; line-height:1.35;">
                Testified of Christ's Infinite Atonement delivering mankind from physical and spiritual death; declared that all holy prophets before him had a hope of Christ's glory.
              </p>
            </div>

            <div style="background:#FFFDF9; border:1px solid var(--border-parchment); border-radius:6px; padding:0.5rem 0.65rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:4px;">
                <strong style="color:var(--text-primary); font-size:0.82rem;">🏰 King Benjamin (~124 BC)</strong>
                <span style="font-size:0.7rem; color:var(--color-crimson); font-weight:700;">Mosiah 3:5–10; 4:1–8</span>
              </div>
              <p style="font-size:0.76rem; color:var(--text-secondary); margin:2px 0 0 0; line-height:1.35;">
                Received angelic revelation: the Lord Omnipotent will come down from heaven, dwell in a tabernacle of clay, heal the sick, bleed from every pore through divine anguish, and rise the third day.
              </p>
            </div>

            <div style="background:#FFFDF9; border:1px solid var(--border-parchment); border-radius:6px; padding:0.5rem 0.65rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:4px;">
                <strong style="color:var(--text-primary); font-size:0.82rem;">🔥 Abinadi (~150 BC)</strong>
                <span style="font-size:0.7rem; color:var(--color-crimson); font-weight:700;">Mosiah 13:33–35; 15:1–9</span>
              </div>
              <p style="font-size:0.76rem; color:var(--text-secondary); margin:2px 0 0 0; line-height:1.35;">
                Proclaimed before King Noah that Moses and all prophets testified of Christ; expounded Isaiah 53's Suffering Servant, the resurrection of the dead, and God Himself redeeming His people.
              </p>
            </div>

            <div style="background:#FFFDF9; border:1px solid var(--border-parchment); border-radius:6px; padding:0.5rem 0.65rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:4px;">
                <strong style="color:var(--text-primary); font-size:0.82rem;">💧 Alma the Elder (~147 BC)</strong>
                <span style="font-size:0.7rem; color:var(--color-crimson); font-weight:700;">Mosiah 18:8–10</span>
              </div>
              <p style="font-size:0.76rem; color:var(--text-secondary); margin:2px 0 0 0; line-height:1.35;">
                Instituted the covenant of baptism at the Waters of Mormon to stand as witnesses of God and Christ at all times, in all things, and in all places, bearing one another's burdens.
              </p>
            </div>

            <div style="background:#FFFDF9; border:1px solid var(--border-parchment); border-radius:6px; padding:0.5rem 0.65rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:4px;">
                <strong style="color:var(--text-primary); font-size:0.82rem;">⚖️ Alma the Younger & Amulek (~82 BC)</strong>
                <span style="font-size:0.7rem; color:var(--color-crimson); font-weight:700;">Alma 7:11–13; 34:8–15</span>
              </div>
              <p style="font-size:0.76rem; color:var(--text-secondary); margin:2px 0 0 0; line-height:1.35;">
                Testified of Christ born of Mary, taking upon Him our pains, sicknesses, and grief that His bowels may be filled with mercy; expounded the Infinite and Eternal sacrifice to satisfy divine justice.
              </p>
            </div>

            <div style="background:#FFFDF9; border:1px solid var(--border-parchment); border-radius:6px; padding:0.5rem 0.65rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:4px;">
                <strong style="color:var(--text-primary); font-size:0.82rem;">🧱 Samuel the Lamanite (~6 BC)</strong>
                <span style="font-size:0.7rem; color:var(--color-crimson); font-weight:700;">Helaman 14:2–28</span>
              </div>
              <p style="font-size:0.76rem; color:var(--text-secondary); margin:2px 0 0 0; line-height:1.35;">
                From the walls of Zarahemla, prophesied the exact five-year sign of Christ's birth (a day, night, and day of light with no darkness) and the three days of vapor of darkness at His crucifixion.
              </p>
            </div>

            <div style="background:#FFFDF9; border:1px solid var(--border-parchment); border-radius:6px; padding:0.5rem 0.65rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:4px;">
                <strong style="color:var(--text-primary); font-size:0.82rem;">⛰️ Nephi Son of Nephi (AD 1 & AD 34)</strong>
                <span style="font-size:0.7rem; color:var(--color-crimson); font-weight:700;">3 Nephi 1:13; 11:1–18</span>
              </div>
              <p style="font-size:0.76rem; color:var(--text-secondary); margin:2px 0 0 0; line-height:1.35;">
                Heard the voice of the Lord: "On the morrow come I into the world." Later, led the multitude at Bountiful when the resurrected Lord descended from heaven and was called first as disciple.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CHRIST'S VISIT, MINISTRY & TEACHINGS IN 3 NEPHI (CHAPTERS 11 TO 30) -->
      <div class="feature-card" style="margin-top:0.4rem; border: 1.5px solid var(--color-crimson);">
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:6px; margin-bottom:0.4rem;">
          <div style="display:flex; align-items:center; gap:6px;">
            <span style="font-size:1.15rem;">✝️</span>
            <h4 style="font-family:var(--font-serif-title); font-size:0.92rem; margin:0; color:var(--color-crimson);">
              Christ's Visit, Ministry & Teachings (3 Nephi 11–30)
            </h4>
          </div>
          <button class="fly-to-person-btn global-disc-fly-btn" data-loc="bountiful" style="font-size:0.7rem; padding:0.25rem 0.6rem;">
            📍 Temple at Bountiful
          </button>
        </div>
        <p style="font-size:0.78rem; color:var(--text-secondary); margin-bottom:0.65rem; line-height:1.4;">
          The sacred climax of the Book of Mormon: the Resurrected Lord Jesus Christ personally ministering to the surviving multitude at the Temple in Bountiful across 20 chapters:
        </p>

        <div style="display:flex; flex-direction:column; gap:0.55rem;">
          <div style="background:#FFFDF9; border:1px solid #E5D5BA; border-radius:6px; padding:0.55rem 0.7rem;">
            <strong style="color:var(--color-crimson); font-size:0.8rem; display:block; margin-bottom:2px;">
              1. The Descent & Personal Witness of Wounds (3 Nephi 11)
            </strong>
            <span style="font-size:0.76rem; color:var(--text-secondary); line-height:1.35; display:block;">
              The Father’s voice proclaims His Beloved Son ("Hear ye him"). Christ descends in a white robe, announcing: <em>"Behold, I am Jesus Christ, whom the prophets testified shall come into the world."</em> 2,500 people feel the prints in His hands, feet, and side one by one. Gives baptismal authority and proclaims the pure Doctrine of Christ.
            </span>
          </div>

          <div style="background:#FFFDF9; border:1px solid #E5D5BA; border-radius:6px; padding:0.55rem 0.7rem;">
            <strong style="color:var(--color-crimson); font-size:0.8rem; display:block; margin-bottom:2px;">
              2. The Sermon at the Temple (3 Nephi 12–14)
            </strong>
            <span style="font-size:0.76rem; color:var(--text-secondary); line-height:1.35; display:block;">
              Delivers the Beatitudes, calls believers to be the salt of the earth and light of the world, teaches the higher law of celestial chastity, charity, and love for enemies, delivers the Lord's Prayer, commands secret prayer and fasting, and illustrates the wise man building upon the rock.
            </span>
          </div>

          <div style="background:#FFFDF9; border:1px solid #E5D5BA; border-radius:6px; padding:0.55rem 0.7rem;">
            <strong style="color:var(--color-crimson); font-size:0.8rem; display:block; margin-bottom:2px;">
              3. The Law Fulfilled & The Other Sheep (3 Nephi 15–16)
            </strong>
            <span style="font-size:0.76rem; color:var(--text-secondary); line-height:1.35; display:block;">
              Announces the Law of Moses is fulfilled in Him: <em>"I am the law, and the light."</em> Explains that the Nephites are the "other sheep" He spoke of in Jerusalem (John 10:16), and reveals He has yet other lost tribes of Israel to visit and shepherd.
            </span>
          </div>

          <div style="background:#FFFDF9; border:1px solid #E5D5BA; border-radius:6px; padding:0.55rem 0.7rem;">
            <strong style="color:var(--color-crimson); font-size:0.8rem; display:block; margin-bottom:2px;">
              4. Infinite Compassion, Healing & Angels in Fire (3 Nephi 17)
            </strong>
            <span style="font-size:0.76rem; color:var(--text-secondary); line-height:1.35; display:block;">
              Seeing their tears, His bowels are filled with compassion. He heals all who are sick, blind, lame, or afflicted. Weeps for joy, kneels in prayer, and blesses their little children one by one as angels descend encircled in fire.
            </span>
          </div>

          <div style="background:#FFFDF9; border:1px solid #E5D5BA; border-radius:6px; padding:0.55rem 0.7rem;">
            <strong style="color:var(--color-crimson); font-size:0.8rem; display:block; margin-bottom:2px;">
              5. The Memorial Sacrament & Family Prayer (3 Nephi 18)
            </strong>
            <span style="font-size:0.76rem; color:var(--text-secondary); line-height:1.35; display:block;">
              Institutes the Sacrament of bread and wine in remembrance of His body and blood, promising that those who always remember Him will have His Spirit. Commands them to watch and pray always and pray in families in His name.
            </span>
          </div>

          <div style="background:#FFFDF9; border:1px solid #E5D5BA; border-radius:6px; padding:0.55rem 0.7rem;">
            <strong style="color:var(--color-crimson); font-size:0.8rem; display:block; margin-bottom:2px;">
              6. Calling & Baptism of the Twelve Disciples (3 Nephi 19)
            </strong>
            <span style="font-size:0.76rem; color:var(--text-secondary); line-height:1.35; display:block;">
              The Twelve Disciples are baptized by Nephi in water and receive the baptism of the Holy Ghost and fire. Jesus appears again in their midst, smiling upon them and thanking the Father for their profound faith.
            </span>
          </div>

          <div style="background:#FFFDF9; border:1px solid #E5D5BA; border-radius:6px; padding:0.55rem 0.7rem;">
            <strong style="color:var(--color-crimson); font-size:0.8rem; display:block; margin-bottom:2px;">
              7. Covenants of the Father & Gathering of Israel (3 Nephi 20–22)
            </strong>
            <span style="font-size:0.76rem; color:var(--text-secondary); line-height:1.35; display:block;">
              Reaffirms the Father's covenant to gather the House of Israel; quotes Isaiah 52 & 54: <em>"The mountains shall depart and the hills be removed, but my kindness shall not depart from thee, neither shall the covenant of my peace be removed."</em> Promises the establishment of the New Jerusalem in America.
            </span>
          </div>

          <div style="background:#FFFDF9; border:1px solid #E5D5BA; border-radius:6px; padding:0.55rem 0.7rem;">
            <strong style="color:var(--color-crimson); font-size:0.8rem; display:block; margin-bottom:2px;">
              8. Searching Isaiah, Samuel's Prophecy & Malachi (3 Nephi 23–25)
            </strong>
            <span style="font-size:0.76rem; color:var(--text-secondary); line-height:1.35; display:block;">
              Commands: <em>"Great are the words of Isaiah."</em> Orders the insertion of Samuel the Lamanite's resurrection prophecies into the record. Delivers Malachi's sacred prophecies regarding the refiner's fire, tithing, and Elijah turning the hearts of fathers to children.
            </span>
          </div>

          <div style="background:#FFFDF9; border:1px solid #E5D5BA; border-radius:6px; padding:0.55rem 0.7rem;">
            <strong style="color:var(--color-crimson); font-size:0.8rem; display:block; margin-bottom:2px;">
              9. Expounding All Things from Creation to Second Coming (3 Nephi 26)
            </strong>
            <span style="font-size:0.76rem; color:var(--text-secondary); line-height:1.35; display:block;">
              Unfolds the entire history of the world and eternity. Looses the tongues of babes and little children, who utter marvelous things greater than what had been taught to the multitude.
            </span>
          </div>

          <div style="background:#FFFDF9; border:1px solid #E5D5BA; border-radius:6px; padding:0.55rem 0.7rem;">
            <strong style="color:var(--color-crimson); font-size:0.8rem; display:block; margin-bottom:2px;">
              10. Name of the Church, The Gospel & The Three Nephites (3 Nephi 27–30)
            </strong>
            <span style="font-size:0.76rem; color:var(--text-secondary); line-height:1.35; display:block;">
              Proclaims: <em>"How be it my church save it be called in my name?"</em> Defines the Gospel: doing the Father's will and being lifted up on the cross. Grants the Three Nephites their holy request to tarry on earth until the Second Coming. Mormon bears solemn witness that the Father's covenants are rolling forward to all nations.
            </span>
          </div>
        </div>
      </div>

      <!-- THE CITIES HE APPEARED IN & THE SPARED LANDS -->
      <div class="teachings-card teachings-card-bronze" style="margin-top:0.4rem;">
        <div class="teachings-card-title">
          <span>🏛️</span>
          <span>The Cities He Appeared In & The Spared Lands</span>
        </div>
        <div class="teachings-card-body">
          <p style="margin-bottom:0.5rem; font-size:0.79rem; line-height:1.4;">
            The textual geography of Christ's visitation reveals a sacred progression:
          </p>
          <ul style="margin:0; padding-left:1.15rem; font-size:0.76rem; color:var(--text-secondary); line-height:1.45; display:flex; flex-direction:column; gap:0.35rem;">
            <li>
              <strong style="color:var(--text-primary);">The Temple Sanctuary at Bountiful (3 Nephi 11:1):</strong>
              The physical location of His personal descent out of heaven explicitly named in the text. Here 2,500 surviving souls gathered round about the temple and witnessed His physical wounds.
            </li>
            <li>
              <strong style="color:var(--text-primary);">The Spared Believers from Surrounding Lands (3 Nephi 10:12):</strong>
              While 16 wicked cities were destroyed by fire, water, or earth (Zarahemla, Moroni, Moronihah, Jerusalem, etc.), the more righteous part of the people who received the prophets and stoned them not were spared.
            </li>
            <li>
              <strong style="color:var(--text-primary);">Overnight Gathering Across the Land (3 Nephi 19:1–3):</strong>
              Following the first day of His ministry, news spread immediately before dark across the entire region. An immense multitude labored through the night to arrive at Bountiful for the second day of His ministry.
            </li>
            <li>
              <strong style="color:var(--text-primary);">Disciples Ministering Across All Cities (4 Nephi 1:1–13):</strong>
              The Twelve Disciples were sent forth across all the cities of the land, baptizing, performing miracles, and rebuilding destroyed settlements—including the City of Zarahemla (4 Nephi 1:8)—establishing two centuries of unbroken Zion peace.
            </li>
          </ul>
        </div>
      </div>

      <!-- MAJOR PROPHETIC DISCOURSES ACROSS ERAS -->
      <div class="feature-card" style="margin-top: 0.8rem;">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.6rem;">
          <h4 style="font-family: var(--font-serif-title); font-size: 0.9rem; margin: 0; color: var(--color-crimson);">
            Major Prophetic Discourses Across Eras
          </h4>
          <span style="font-size:0.72rem; color:var(--text-secondary);">10 Key Sermons</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.65rem;">
          ${keyDiscourses.map(d => {
            const churchUrl = getChurchScriptureUrl(d.ref);
            return `
              <div style="background:#FFFDF9; border:1px solid var(--border-parchment); border-radius:6px; padding:0.65rem 0.75rem;">
                <div style="display:flex; align-items:center; justify-content:space-between; gap:6px;">
                  <span style="font-family:var(--font-serif-title); font-weight:700; font-size:0.86rem; color:var(--text-primary);">
                    ${d.icon} ${d.prophet}
                  </span>
                  <span style="font-size:0.7rem; font-weight:700; color:var(--color-crimson); background:rgba(163,40,34,0.08); padding:1px 6px; border-radius:4px;">
                    ${d.ref}
                  </span>
                </div>
                <div style="font-size:0.78rem; font-weight:600; color:var(--color-gold-dark); margin:0.2rem 0;">
                  ${d.title}
                </div>
                <p style="font-size:0.77rem; color:var(--text-secondary); line-height:1.35; margin:0 0 0.45rem 0;">
                  ${d.summary}
                </p>
                <div style="display:flex; gap:0.4rem;">
                  <a href="${churchUrl || '#'}" class="church-scripture-btn teachings-scripture-link" data-ref="${d.ref}" data-url="${churchUrl || ''}" style="flex:1; font-size:0.73rem; padding:0.35rem 0.5rem; justify-content:center;">
                    <span>📖 Read ${d.ref}</span>
                    <span class="btn-arrow">↗</span>
                  </a>
                  ${d.locId ? `
                    <button class="fly-to-person-btn global-disc-fly-btn" data-loc="${d.locId}" style="flex:1; font-size:0.73rem; padding:0.35rem 0.5rem; justify-content:center;">
                      <span>📍 ${d.locName}</span>
                    </button>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.45rem; margin-top:0.85rem;">
        <button id="btnSwitchToPeopleTab" class="church-scripture-btn" style="background:var(--color-parchment-light); border:1px solid var(--color-crimson); font-weight:700; color:var(--color-crimson); justify-content:center; padding:0.55rem;">
          <span>👤 View All 96 Prophets & Leaders in Chronological Roll ➔</span>
        </button>
        <button id="btnSwitchToScripturesTab" class="church-scripture-btn" style="background:var(--color-parchment-light); border:1px solid var(--color-gold); font-weight:700; color:var(--color-gold-dark); justify-content:center; padding:0.55rem;">
          <span>📖 Read Core Scriptures in Dual Translation ➔</span>
        </button>
      </div>
    `;

    // Connect chapter reading buttons to scripture reader modal
    sidebarContent.querySelectorAll('.teachings-scripture-link').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const ref = btn.getAttribute('data-ref');
        const url = btn.getAttribute('data-url');
        if (url) openScriptureModal(ref, url);
      });
    });

    // Connect fly-to buttons
    sidebarContent.querySelectorAll('.global-disc-fly-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const locId = btn.getAttribute('data-loc');
        if (locId && mapLocations[locId]) selectLocation(locId);
      });
    });

    // Connect bottom tab switcher buttons
    const btnPeople = document.getElementById('btnSwitchToPeopleTab');
    if (btnPeople) {
      btnPeople.addEventListener('click', () => switchTab('people'));
    }

    const btnScriptures = document.getElementById('btnSwitchToScripturesTab');
    if (btnScriptures) {
      btnScriptures.addEventListener('click', () => switchTab('scriptures'));
    }
  }

  function renderGlobalScripturesTab() {
    if (sidebarEyebrow) sidebarEyebrow.textContent = 'KEY PASSAGES (DUAL TRANSLATION)';
    if (sidebarTitle) sidebarTitle.textContent = 'Book of Mormon Scriptures';
    renderScripturesTab(null);
  }

  function renderGlobalPeopleTab() {
    if (sidebarEyebrow) sidebarEyebrow.textContent = 'CHRONOLOGICAL ROLL OF PROPHETS';
    if (sidebarTitle) sidebarTitle.textContent = 'Prophets & Leaders of the Book of Mormon';

    sidebarContent.innerHTML = `
      <div class="kjv-translation-notice">
        <span class="kjv-badge">Prophetic Succession</span>
        <span style="font-size:0.75rem; color:var(--text-secondary); margin-left:6px;">From the Tower of Babel to the sealing of the plates (~2200 BC – AD 421).</span>
      </div>

      <div class="people-dispensations-list" style="display:flex; flex-direction:column; gap:0.9rem; margin-top:0.4rem;">
        
        <!-- 1. Jaredite Patriarchs -->
        <div class="teachings-card teachings-card-gold">
          <div class="teachings-card-title">
            <span>⛵</span>
            <span>Jaredite Dispensational Witnesses (~2200 BC – ~600 BC)</span>
          </div>
          <div class="teachings-card-body">
            <p style="margin-bottom:0.5rem; font-size:0.83rem;">Preserved their pure language at the Great Tower, crossed the ocean in eight tight barges, and left a solemn witness of Christ's premortal glory.</p>
            <div style="display:flex; flex-direction:column; gap:0.45rem;">
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 The Brother of Jared (Moriancumer)</span>
                <span class="person-card-role">Mighty prophet who saw the premortal body of Christ; molten sixteen stones to light the eight barges (Ether 1–3).</span>
                <button class="fly-to-person-btn" data-loc="moriancumer_shore">📍 View Moriancumer Shore</button>
              </div>
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 Ether</span>
                <span class="person-card-role">Final prophet of the Jaredites; dwelt in the cavity of a rock, cried repentance to Coriantumr, and hid twenty-four gold plates (Ether 12–15).</span>
                <button class="fly-to-person-btn" data-loc="cumorah">📍 View Hill Ramah / Cumorah</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. Early Nephite Patriarchs -->
        <div class="teachings-card teachings-card-bronze">
          <div class="teachings-card-title">
            <span>📜</span>
            <span>Early Nephite Patriarchs & Record Keepers (~600 BC – ~200 BC)</span>
          </div>
          <div class="teachings-card-body">
            <p style="margin-bottom:0.5rem; font-size:0.83rem;">Departed Jerusalem before the Babylonian captivity, established the Land of First Inheritance and City of Nephi, and inscribed the Small Plates.</p>
            <div style="display:flex; flex-direction:column; gap:0.45rem;">
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 Lehi & Sariah</span>
                <span class="person-card-role">Patriarch and matriarch; received the Tree of Life vision and blessed all posterity upon the choice land (1 & 2 Nephi).</span>
                <button class="fly-to-person-btn" data-loc="land_first_inheritance">📍 View Land of First Inheritance</button>
              </div>
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 Nephi</span>
                <span class="person-card-role">Prophet-builder; fabricated the tools, built the ship, constructed the temple after Solomon's manner, and recorded the doctrine of Christ (1 & 2 Nephi).</span>
                <button class="fly-to-person-btn" data-loc="lehi_nephi">📍 View City of Nephi</button>
              </div>
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 Jacob</span>
                <span class="person-card-role">Nephi's brother; consecrated priest who preached against pride and unchastity at the temple; expounded Zenos's Olive Tree allegory (2 Nephi 9; Jacob 1–7).</span>
                <button class="fly-to-person-btn" data-loc="lehi_nephi">📍 View Temple of Nephi</button>
              </div>
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 Enos, Jarom, & Omni</span>
                <span class="person-card-role">Enos wrestled in mighty prayer in the forests; Jarom and Omni kept the genealogy and small plates over centuries of warfare (Enos, Jarom, Omni).</span>
              </div>
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 King Mosiah I</span>
                <span class="person-card-role">Warned of God to flee the Land of Nephi; led the righteous down to discover the Mulekites at Zarahemla (Omni 1:12–19).</span>
                <button class="fly-to-person-btn" data-loc="zarahemla">📍 View Zarahemla</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. Era of Kings & Abinadi's Witness -->
        <div class="teachings-card teachings-card-crimson">
          <div class="teachings-card-title">
            <span>🔥</span>
            <span>Kings, Martyrs & Covenant Restorers (~160 BC – 91 BC)</span>
          </div>
          <div class="teachings-card-body">
            <p style="margin-bottom:0.5rem; font-size:0.83rem;">Confronted royal corruption, gave life-changing temple sermons, and restored baptismal covenants in the wilderness.</p>
            <div style="display:flex; flex-direction:column; gap:0.45rem;">
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 King Benjamin</span>
                <span class="person-card-role">Beloved prophet-king who labored with his own hands; addressed his nation from a wooden tower on service, charity, and taking Christ's name (Mosiah 1–6).</span>
                <button class="fly-to-person-btn" data-loc="zarahemla">📍 View Tower Site at Zarahemla</button>
              </div>
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 Abinadi</span>
                <span class="person-card-role">Prophet martyr whose face shone like Moses; testified of Christ's suffering servant role (Isaiah 53) before King Noah and sealed his words with fire (Mosiah 11–17).</span>
                <button class="fly-to-person-btn" data-loc="lehi_nephi">📍 View Noah's Palace (Nephi)</button>
              </div>
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 Alma the Elder</span>
                <span class="person-card-role">Priest of Noah converted by Abinadi; established baptismal covenants at the Waters of Mormon; led believers through bondage to Zarahemla (Mosiah 18; 23–24).</span>
                <button class="fly-to-person-btn" data-loc="waters_of_mormon">📍 View Waters of Mormon</button>
              </div>
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 King Mosiah II</span>
                <span class="person-card-role">Abolished monarchy to establish constitutional Judges; translated 24 Jaredite gold plates with Urim and Thummim (Mosiah 28–29).</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 4. Republic of Judges & Great Missionaries -->
        <div class="teachings-card teachings-card-sage">
          <div class="teachings-card-title">
            <span>⚔️</span>
            <span>The Republic of Judges & Missionary Surge (91 BC – AD 1)</span>
          </div>
          <div class="teachings-card-body">
            <p style="margin-bottom:0.5rem; font-size:0.83rem;">Renounced political power for missionary labor, defended liberties with the Title of Liberty, and prophesied the coming Messiah.</p>
            <div style="display:flex; flex-direction:column; gap:0.45rem;">
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 Alma the Younger</span>
                <span class="person-card-role">First Chief Judge turned High Priest; preached across Zarahemla, Gideon, Melek, Ammonihah, Sidom, and Antionum; taught the word as a seed (Alma 1–44).</span>
                <button class="fly-to-person-btn" data-loc="ammonihah">📍 View Ammonihah</button>
              </div>
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 Amulek & Zeezrom</span>
                <span class="person-card-role">Amulek hosted Alma and testified of Christ's infinite Atonement; Zeezrom repented from bribery to become a valiant missionary companion (Alma 8–15; 34).</span>
                <button class="fly-to-person-btn" data-loc="sidom">📍 View Sidom</button>
              </div>
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 The Sons of Mosiah (Ammon, Aaron, Omner, Himni)</span>
                <span class="person-card-role">14-year mission among the Lamanites; defended flocks at Sebus, converted King Lamoni, Queen, and King's father; established the Anti-Nephi-Lehies (Alma 17–25).</span>
                <button class="fly-to-person-btn" data-loc="waters_of_sebus">📍 View Waters of Sebus</button>
              </div>
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 Captain Moroni & Pahoran</span>
                <span class="person-card-role">Moroni raised the Title of Liberty, designed earthen fortifications, and corresponded with Pahoran to defend constitutional government (Alma 46; 48–62).</span>
                <button class="fly-to-person-btn" data-loc="city_of_moroni">📍 View City of Moroni</button>
              </div>
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 Helaman & the 2,060 Stripling Warriors</span>
                <span class="person-card-role">Led the sons of the Anti-Nephi-Lehies on the southwest front; all preserved alive through miraculous faith taught by their mothers (Alma 53; 56–58).</span>
                <button class="fly-to-person-btn" data-loc="judea">📍 View Fortress Judea</button>
              </div>
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 Nephi & Lehi (Sons of Helaman)</span>
                <span class="person-card-role">Surrounded by heavenly pillar of fire in prison; converted 8,000 Lamanites; Nephi prophesied on his garden tower of Seezoram's murder (Helaman 5–9).</span>
              </div>
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 Samuel the Lamanite</span>
                <span class="person-card-role">Preached from the stone walls of Zarahemla; prophesied exact signs of Christ's birth (light without dark) and death (3 days of vapor of dark) (Helaman 13–16).</span>
                <button class="fly-to-person-btn" data-loc="zarahemla">📍 View Walls of Zarahemla</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 5. Christ's Visit, Disciples & Final Witnesses -->
        <div class="teachings-card teachings-card-gold">
          <div class="teachings-card-title">
            <span>✨</span>
            <span>The Resurrected Lord & Final Solitary Prophets (AD 34 – AD 421)</span>
          </div>
          <div class="teachings-card-body">
            <p style="margin-bottom:0.5rem; font-size:0.83rem;">The mortal culmination and eternal purpose of the Book of Mormon: the personal ministry of Jesus Christ and the preservation of sacred records for the latter days.</p>
            <div style="display:flex; flex-direction:column; gap:0.45rem;">
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 The Resurrected Jesus Christ</span>
                <span class="person-card-role">Descended out of heaven at the Temple in Bountiful; invited 2,500 souls to feel His wounds; healed the sick; instituted sacrament; blessed little children (3 Nephi 11–28).</span>
                <button class="fly-to-person-btn" data-loc="bountiful">📍 View Temple at Bountiful</button>
              </div>
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 The Twelve Nephite Disciples</span>
                <span class="person-card-role">Nephi, Timothy, Jonas, Mathoni, Mathonihah, Kumen, Kumenonhi, Jeremiah, Shemnon, Jonas, Zedekiah, Isaiah. Established 200 years of peace (3 Nephi 19; 4 Nephi 1).</span>
              </div>
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 Mormon</span>
                <span class="person-card-role">Prophet-general and chief abridger; led armies from age 16; compiled the golden plates; delivered final lamentation at Cumorah (Mormon 1–7; Moroni 7–9).</span>
                <button class="fly-to-person-btn" data-loc="cumorah">📍 View Hill Cumorah</button>
              </div>
              <div class="person-card" style="margin:0;">
                <span class="person-card-name">👤 Moroni</span>
                <span class="person-card-role">Final prophet who wandered solitary for decades; abridged the book of Ether; sealed the sacred records into the hill; gave the Moroni 10:4 promise (Mormon 8–9; Moroni 1–10).</span>
                <button class="fly-to-person-btn" data-loc="cumorah">📍 View Gold Plates Depository</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    `;

    // Connect fly-to buttons
    sidebarContent.querySelectorAll('.fly-to-person-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const locId = btn.getAttribute('data-loc');
        if (locId && mapLocations[locId]) {
          selectLocation(locId);
        }
      });
    });
  }

  function renderGlobalMilitaryTab() {
    if (sidebarEyebrow) sidebarEyebrow.textContent = 'NEPHITE & JAREDITE TACTICS';
    if (sidebarTitle) sidebarTitle.textContent = 'Military Geography & Ancient Defense Systems';

    sidebarContent.innerHTML = `
      <div class="military-strategy-card">
        <div class="insight-header">
          <span class="insight-icon">🛡️</span>
          <h3 style="margin:0; font-family:var(--font-serif-title); font-size:0.95rem; color:var(--color-crimson);">
            Captain Moroni's Defensive Revolution (74–60 BC)
          </h3>
        </div>
        <p style="font-size:0.84rem; line-height:1.55; color:var(--text-primary); margin-top:0.6rem;">
          Prior to Captain Moroni, Nephite warfare consisted of open-field clashes with skin girdles, bows, and scimitars. Moroni engineered a continental defensive system combining individual armor (breastplates, shields, head-plates) with civil fortifications that completely neutralized Lamanite superiority in numbers (Alma 48–53).
        </p>
      </div>

      <div class="teachings-card teachings-card-crimson">
        <div class="teachings-card-title">
          <span>🏰</span>
          <span>Fortification Architecture</span>
        </div>
        <div class="teachings-card-body">
          <ul style="padding-left:1.1rem; margin:0; font-size:0.83rem; line-height:1.5;">
            <li><strong>Deep Exterior Moats & Trenches:</strong> Dug around every border city, preventing enemy charges and trapping attackers under missile fire.</li>
            <li><strong>High Earthen Banks:</strong> Earth from the trenches heaped up into immense ramparts that elevated the defenders.</li>
            <li><strong>Timber Breastworks & Parapets:</strong> Wooden palisades anchored atop the earth banks with framed towers overlooking the fields.</li>
            <li><strong>Security Entrances:</strong> Only one narrow, guarded gateway per city, turning any attempted assault into a deadly choke point (Alma 49:18–25).</li>
          </ul>
        </div>
      </div>

      <div class="teachings-card teachings-card-bronze">
        <div class="teachings-card-title">
          <span>📍</span>
          <span>Strategic Continental Choke Points</span>
        </div>
        <div class="teachings-card-body">
          <p style="font-size:0.83rem; line-height:1.5; margin-bottom:0.5rem;">The Book of Mormon military narrative centers on three critical geographical axes:</p>
          <div style="display:flex; flex-direction:column; gap:0.4rem;">
            <div style="background:#FFFDF9; padding:0.5rem; border:1px solid var(--border-parchment); border-radius:4px;">
              <strong style="color:var(--color-crimson); font-size:0.82rem;">1. The Narrow Pass & Narrow Neck:</strong>
              <p style="margin:0.2rem 0 0.3rem 0; font-size:0.79rem; color:var(--text-secondary);">The 1.5-day corridor connecting Northward and Southward lands. He who controlled Bountiful and the Narrow Pass controlled the entire continent.</p>
              <button class="fly-to-person-btn" data-loc="narrow_pass" style="font-size:0.7rem; padding:0.2rem 0.4rem;">📍 Inspect Narrow Pass</button>
            </div>
            <div style="background:#FFFDF9; padding:0.5rem; border:1px solid var(--border-parchment); border-radius:4px;">
              <strong style="color:var(--color-crimson); font-size:0.82rem;">2. East Sea Seashore Line:</strong>
              <p style="margin:0.2rem 0 0.3rem 0; font-size:0.79rem; color:var(--text-secondary);">The line of fortresses: Moroni, Lehi, Morianton, Omner, Gid, Mulek, anchored by Bountiful in the north (Alma 51–53).</p>
              <button class="fly-to-person-btn" data-loc="city_of_moroni" style="font-size:0.7rem; padding:0.2rem 0.4rem;">📍 Inspect City of Moroni</button>
            </div>
            <div style="background:#FFFDF9; padding:0.5rem; border:1px solid var(--border-parchment); border-radius:4px;">
              <strong style="color:var(--color-crimson); font-size:0.82rem;">3. Southwest Frontier Line:</strong>
              <p style="margin:0.2rem 0 0.3rem 0; font-size:0.79rem; color:var(--text-secondary);">The western garrison chain: Manti, Cumeni, Zeezrom, Antiparah, Judea, guarded by Antipus and Helaman's 2,060 Stripling Warriors.</p>
              <button class="fly-to-person-btn" data-loc="judea" style="font-size:0.7rem; padding:0.2rem 0.4rem;">📍 Inspect Fortress Judea</button>
            </div>
          </div>
        </div>
      </div>

      <div class="teachings-card teachings-card-gold">
        <div class="teachings-card-title">
          <span>📜</span>
          <span>The Title of Liberty (Alma 46:12–13)</span>
        </div>
        <div class="teachings-card-body">
          <p style="font-family:var(--font-scripture); font-size:0.95rem; font-style:italic; line-height:1.45; color:var(--text-primary); margin:0;">
            "In memory of our God, our religion, and freedom, and our peace, our wives, and our children..."
          </p>
          <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:0.4rem;">Captain Moroni tore his coat to raise this standard upon every tower in all the land, rallying the citizens to defend their constitutional republic.</p>
        </div>
      </div>
    `;

    sidebarContent.querySelectorAll('.fly-to-person-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const locId = btn.getAttribute('data-loc');
        if (locId && mapLocations[locId]) selectLocation(locId);
      });
    });
  }

  function renderGlobalCataclysmTab() {
    if (sidebarEyebrow) sidebarEyebrow.textContent = '3 NEPHI TOPOGRAPHICAL ALTERATIONS';
    if (sidebarTitle) sidebarTitle.textContent = 'The AD 34 Cataclysm & Physical Destructions';

    sidebarContent.innerHTML = `
      <div class="drawer-fate-card">
        <div class="drawer-fate-header">
          <span>🔥</span>
          <span>Continent-Wide Upheavals at the Crucifixion (AD 34)</span>
        </div>
        <p class="drawer-fate-body" style="line-height:1.55;">
          At the death of Jesus Christ on the cross in Jerusalem, the ancient Americas experienced three hours of colossal earthquakes, volcanic tempests, and fires, followed by three days of dense, impenetrable vapor of darkness where no fire or candle could be lit (3 Nephi 8–10).
        </p>
        <button class="btn btn-cataclysm-trigger glow-crimson" id="triggerCataclysmViewBtn" style="margin-top:0.75rem; width:100%; justify-content:center;">
          🔥 Activate AD 34 Cataclysm Map Layer
        </button>
      </div>

      <div class="teachings-card teachings-card-crimson">
        <div class="teachings-card-title">
          <span>🔥</span>
          <span>Cities Burned with Fire (3 Nephi 9:3, 9–10)</span>
        </div>
        <div class="teachings-card-body">
          <p style="font-size:0.83rem; margin-bottom:0.4rem;">Destroyed by fire from heaven to eliminate wickedness and secret combinations:</p>
          <div style="display:flex; flex-wrap:wrap; gap:4px;">
            <button class="fly-to-person-btn" data-loc="zarahemla">📍 Zarahemla (Burned)</button>
            <button class="fly-to-person-btn" data-loc="city_of_jacobugath">📍 Jacobugath</button>
            <button class="fly-to-person-btn" data-loc="city_of_josh">📍 Josh</button>
            <button class="fly-to-person-btn" data-loc="city_of_gad">📍 Gad</button>
            <button class="fly-to-person-btn" data-loc="city_of_kishkumen">📍 Kishkumen</button>
          </div>
        </div>
      </div>

      <div class="teachings-card teachings-card-bronze">
        <div class="teachings-card-title">
          <span>🌊</span>
          <span>Cities Sunk in the Depths of the Sea (3 Nephi 9:4, 6–7)</span>
        </div>
        <div class="teachings-card-body">
          <p style="font-size:0.83rem; margin-bottom:0.4rem;">Covered by oceanic and inland waters so that waters took the place thereof:</p>
          <div style="display:flex; flex-wrap:wrap; gap:4px;">
            <button class="fly-to-person-btn" data-loc="city_of_moroni">📍 City of Moroni (East Sea)</button>
            <button class="fly-to-person-btn" data-loc="city_of_onihah">📍 Onihah</button>
            <button class="fly-to-person-btn" data-loc="city_of_mocum">📍 Mocum</button>
            <button class="fly-to-person-btn" data-loc="city_of_jerusalem">📍 Jerusalem (Waters)</button>
          </div>
        </div>
      </div>

      <div class="teachings-card teachings-card-sage">
        <div class="teachings-card-title">
          <span>⛰️</span>
          <span>Cities Buried in Earth & Mountains Raised (3 Nephi 9:5, 8)</span>
        </div>
        <div class="teachings-card-body">
          <p style="font-size:0.83rem; margin-bottom:0.4rem;">Earth upheavals where valleys became mountains and cities were covered:</p>
          <div style="display:flex; flex-wrap:wrap; gap:4px;">
            <button class="fly-to-person-btn" data-loc="city_of_moronihah">📍 Moronihah (Mountain Raised)</button>
            <button class="fly-to-person-btn" data-loc="city_of_gadiandi">📍 Gadiandi</button>
            <button class="fly-to-person-btn" data-loc="city_of_gadiomnah">📍 Gadiomnah</button>
            <button class="fly-to-person-btn" data-loc="city_of_gimgimno">📍 Gimgimno</button>
          </div>
        </div>
      </div>

      <div class="teachings-card teachings-card-gold">
        <div class="teachings-card-title">
          <span>✨</span>
          <span>The Surviving Remnant</span>
        </div>
        <div class="teachings-card-body">
          <p style="font-size:0.83rem; line-height:1.5; margin:0;">
            The more righteous part of the people were spared, who received the prophets and did not stone them. These were they who assembled around the Temple in Bountiful when the Resurrected Lord Jesus Christ descended from heaven (3 Nephi 10:12–19; 11:1–17).
          </p>
        </div>
      </div>
    `;

    const catBtn = document.getElementById('triggerCataclysmViewBtn');
    if (catBtn && cataclysmQuickToggle) {
      catBtn.addEventListener('click', () => {
        cataclysmQuickToggle.click();
      });
    }

    sidebarContent.querySelectorAll('.fly-to-person-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const locId = btn.getAttribute('data-loc');
        if (locId && mapLocations[locId]) selectLocation(locId);
      });
    });
  }

  function renderGlobalChurchStanceTab() {
    if (sidebarEyebrow) sidebarEyebrow.textContent = 'OFFICIAL GOSPEL TOPICS STATEMENT';
    if (sidebarTitle) sidebarTitle.textContent = 'Church Stance on Book of Mormon Geography';

    sidebarContent.innerHTML = `
      <div class="drawer-church-stance-card">
        <div class="church-stance-mini-header">
          <span style="font-size: 1.4rem;">📜</span>
          <span class="church-stance-mini-title">First Presidency & Quorum of the Twelve</span>
        </div>
        <p class="church-stance-mini-desc" style="font-family: var(--font-scripture); font-size: 1.05rem; font-style: italic; line-height:1.55; margin-top:0.4rem;">
          "The Church does not take a position on the specific geographic locations of Book of Mormon events in the ancient Americas... The best guide to Book of Mormon geography is the text of the Book of Mormon itself."
        </p>
        <strong style="display: block; text-align: right; font-size: 0.78rem; color: var(--color-crimson); margin-top:0.25rem;">
          — Official Gospel Topics Essay
        </strong>
      </div>

      <div class="teachings-card teachings-card-gold">
        <div class="teachings-card-title">
          <span>🔍</span>
          <span>Pure Internal Textual Geography Mandate</span>
        </div>
        <div class="teachings-card-body" style="font-size:0.83rem; line-height:1.55;">
          <p style="margin-bottom:0.5rem; font-weight:700; color:var(--text-primary); background:rgba(212,160,23,0.08); padding:0.6rem 0.75rem; border-left:3px solid var(--accent-gold); border-radius:4px;">
            This atlas is constructed solely from the internal geographic statements of the Book of Mormon text. No external geographic model has been applied.
          </p>
          <p style="margin-bottom:0.4rem;">
            This interactive atlas is designed strictly around the <strong>internal textual relationships</strong>, distance metrics (e.g. 'one day and a half's journey' across the narrow neck of land), directional flows (River Sidon flowing north to the sea), and topographical alterations described by the ancient prophet-historians.
          </p>
          <p style="margin:0;">
            The Church emphasizes that while historical and geographic study is interesting, theories identifying external locations (such as Mesoamerica, the Heartland, Baja, or South America) are fascinating hypotheses but not official Church doctrine. Where the text is silent or ambiguous, this atlas marks locations and relationships as indeterminate rather than forcing external coordinates.
          </p>
        </div>
      </div>

      <div class="teachings-card teachings-card-crimson">
        <div class="teachings-card-title">
          <span>✝️</span>
          <span>The True Purpose of the Sacred Record</span>
        </div>
        <div class="teachings-card-body" style="font-size:0.83rem; line-height:1.55;">
          <p style="margin-bottom:0.4rem;">
            As stated on the Title Page by the ancient prophet Moroni: the primary purpose of the Book of Mormon is to convince the Jew and Gentile that <strong>JESUS is the CHRIST, the ETERNAL GOD</strong>, manifesting Himself unto all nations.
          </p>
          <p style="margin:0;">
            President Russell M. Nelson taught: <em>"The Book of Mormon is not a textbook of topography. While interesting, geographic details are secondary to the eternal message of salvation."</em>
          </p>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.5rem; margin-top:0.4rem;">
        <button class="btn btn-primary glow-gold" id="openFullStanceWelcomeBtn" style="justify-content:center; width:100%;">
          📜 Read Full First Presidency Declaration
        </button>
        <a href="https://www.churchofjesuschrist.org/study/manual/gospel-topics/book-of-mormon-geography?lang=eng" target="_blank" rel="noopener noreferrer" class="church-scripture-btn" style="justify-content:center; text-decoration:none;">
          <span>Open on ChurchofJesusChrist.org</span>
          <span class="btn-arrow">↗</span>
        </a>
      </div>
    `;

    const openBtn = document.getElementById('openFullStanceWelcomeBtn');
    if (openBtn && disclaimerModal) {
      openBtn.addEventListener('click', () => openModal(disclaimerModal));
    }
  }

  // Sidebar Tab Switching
  sidebarTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      sidebarTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeTab = tab.getAttribute('data-tab');

      if (activeLocationId && mapLocations[activeLocationId]) {
        renderSidebarContent(mapLocations[activeLocationId]);
      } else {
        renderWelcomeSidebar();
      }
    });
  });

  // Sidebar Open/Close Toggle
  if (sidebarToggleBtn) {
    sidebarToggleBtn.addEventListener('click', () => {
      detailSidebar.classList.toggle('closed');
      const isClosed = detailSidebar.classList.contains('closed');
      const edgeToggleIcon = document.getElementById('edgeToggleIcon');
      if (edgeToggleIcon) edgeToggleIcon.textContent = isClosed ? '◀' : '▶';
      const edgeToggleText = document.querySelector('#sidebarEdgeToggleBtn .edge-toggle-text');
      if (edgeToggleText) edgeToggleText.textContent = isClosed ? 'Open Codex' : 'Hide';
      const sidebarToggleText = document.getElementById('sidebarToggleText');
      if (sidebarToggleText) sidebarToggleText.textContent = isClosed ? 'Codex' : 'Close';
      sidebarToggleBtn.classList.toggle('active', !isClosed);
      const appContainer = document.querySelector('.app-main-container');
      if (appContainer) appContainer.classList.toggle('sidebar-is-closed', isClosed);
      setTimeout(() => fitMapToScreen(), 150);
    });
  }

  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        detailSidebar.classList.add('peek');
        detailSidebar.classList.remove('expanded');
      } else {
        detailSidebar.classList.add('closed');
        detailSidebar.classList.remove('expanded');
      }
      const edgeToggleIcon = document.getElementById('edgeToggleIcon');
      if (edgeToggleIcon) edgeToggleIcon.textContent = '◀';
      const edgeToggleText = document.querySelector('#sidebarEdgeToggleBtn .edge-toggle-text');
      if (edgeToggleText) edgeToggleText.textContent = 'Open Codex';
      const sidebarToggleText = document.getElementById('sidebarToggleText');
      if (sidebarToggleText) sidebarToggleText.textContent = 'Codex';
      if (sidebarToggleBtn) sidebarToggleBtn.classList.remove('active');
      const appContainer = document.querySelector('.app-main-container');
      if (appContainer) appContainer.classList.add('sidebar-is-closed');
      setTimeout(() => fitMapToScreen(), 150);
    });
  }

  if (brandLogoBtn) {
    brandLogoBtn.addEventListener('click', () => {
      renderWelcomeSidebar();
      detailSidebar.classList.remove('closed');
      const edgeToggleIcon = document.getElementById('edgeToggleIcon');
      if (edgeToggleIcon) edgeToggleIcon.textContent = '▶';
      const edgeToggleText = document.querySelector('#sidebarEdgeToggleBtn .edge-toggle-text');
      if (edgeToggleText) edgeToggleText.textContent = 'Hide';
      const sidebarToggleText = document.getElementById('sidebarToggleText');
      if (sidebarToggleText) sidebarToggleText.textContent = 'Close';
      if (sidebarToggleBtn) sidebarToggleBtn.classList.add('active');
      const appContainer = document.querySelector('.app-main-container');
      if (appContainer) appContainer.classList.remove('sidebar-is-closed');
      fitMapToScreen();
    });
  }

  // ==========================================================================
  // GLOBAL SEARCH & LIVE AUTOCOMPLETE
  // ==========================================================================
  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', (e) => {
      const rawQuery = e.target.value.trim();
      if (!rawQuery) {
        clearSearchBtn.style.display = 'none';
        searchResultsDropdown.style.display = 'none';
        return;
      }

      clearSearchBtn.style.display = 'block';

      const scored = Object.values(mapLocations).map(loc => {
        const res = scoreLocationMatch(loc, rawQuery);
        return { loc, ...res };
      }).filter(r => r.matched)
        .sort((a, b) => b.score - a.score || a.loc.name.localeCompare(b.loc.name))
        .slice(0, 10);

      if (scored.length === 0) {
        searchResultsDropdown.innerHTML = `<div style="padding: 0.75rem 1rem; font-size: 0.8rem; color: var(--text-muted);">No locations found matching "${escapeHTML(rawQuery)}"</div>`;
      } else {
        searchResultsDropdown.innerHTML = '';
        scored.forEach(({ loc, reason }) => {
          const item = document.createElement('div');
          item.className = 'search-result-item';
          const confLvl = loc.confidenceLevel || 2;
          const confTitle = getConfidenceTitle(confLvl);
          const reasonHtml = reason ? ` &bull; <span style="color:var(--gold); font-size:0.7rem; font-style:italic;">${escapeHTML(reason)}</span>` : '';
          item.innerHTML = `
            <div class="search-result-left">
              <div style="display:flex; align-items:center; gap:6px;">
                <span class="search-result-title">${loc.name}</span>
                <span class="conf-pill conf-pill-${confLvl}" style="font-size:0.65rem; padding:1px 5px;" title="Confidence: Level ${confLvl} (${confTitle})">L${confLvl}</span>
              </div>
              <span class="search-result-meta">${loc.region}${reasonHtml}</span>
            </div>
            <span class="search-result-badge">${loc.category}</span>
          `;
          item.addEventListener('click', () => {
            selectLocation(loc.id);
            searchResultsDropdown.style.display = 'none';
            globalSearchInput.value = loc.name;
          });
          searchResultsDropdown.appendChild(item);
        });
      }

      searchResultsDropdown.style.display = 'flex';
    });

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        globalSearchInput.value = '';
        clearSearchBtn.style.display = 'none';
        searchResultsDropdown.style.display = 'none';
      });
    }

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header-center')) {
        searchResultsDropdown.style.display = 'none';
      }
    });
  }

  // ==========================================================================
  // REGIONS FOCUS DROPDOWN
  // ==========================================================================
  if (regionSelectBtn && regionDropdown) {
    regionSelectBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      regionDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      regionDropdown.classList.remove('show');
    });

    regionDropdown.querySelectorAll('.dropdown-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const reg = btn.getAttribute('data-region');
        zoomToRegion(reg);
        regionDropdown.classList.remove('show');
      });
    });
  }

  function zoomToRegion(regionKey) {
    switch (regionKey) {
      case 'whole-land':
        fitMapToScreen();
        break;
      case 'land-southward':
        focusLocation(46.0, 68.0, 1.35);
        break;
      case 'zarahemla':
        focusLocation(46.2, 52.8, 2.2);
        selectLocation('zarahemla');
        break;
      case 'land-nephi':
        focusLocation(38.0, 80.0, 2.0);
        selectLocation('lehi_nephi');
        break;
      case 'narrow-neck':
        focusLocation(56.0, 32.0, 2.0);
        selectLocation('narrow_neck');
        break;
      case 'land-northward':
        focusLocation(55.0, 14.0, 1.6);
        selectLocation('waters_of_ripliancum');
        break;
      case 'east-wilderness':
        focusLocation(68.0, 55.0, 1.8);
        selectLocation('city_of_moroni');
        break;
      case 'west-coast':
        focusLocation(26.0, 62.0, 1.8);
        selectLocation('ammonihah');
        break;
      default:
        fitMapToScreen();
    }
  }

  // Quick navigation buttons on map
  if (recenterBtn) recenterBtn.addEventListener('click', fitMapToScreen);
  if (quickSouthwardBtn) quickSouthwardBtn.addEventListener('click', () => zoomToRegion('land-southward'));
  if (quickZarahemlaBtn) quickZarahemlaBtn.addEventListener('click', () => zoomToRegion('zarahemla'));
  if (quickNorthwardBtn) quickNorthwardBtn.addEventListener('click', () => zoomToRegion('land-northward'));

  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => {
      scale = Math.min(scale * 1.3, maxScale);
      applyTransform();
    });
  }

  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => {
      scale = Math.max(scale / 1.3, minScale);
      applyTransform();
    });
  }

  // Quick Jump Select dropdown in header
  function setupQuickJumpSelect() {
    if (!quickJumpSelect) return;
    const sorted = Object.values(mapLocations).sort((a, b) => a.name.localeCompare(b.name));
    quickJumpSelect.innerHTML = `<option value="" disabled selected>Jump to Landmark (${sorted.length})...</option>`;
    sorted.forEach(loc => {
      const opt = document.createElement('option');
      opt.value = loc.id;
      const confLvl = loc.confidenceLevel || 2;
      opt.textContent = `[L${confLvl}] ${loc.name} (${loc.category})`;
      quickJumpSelect.appendChild(opt);
    });

    quickJumpSelect.addEventListener('change', (e) => {
      if (e.target.value) {
        selectLocation(e.target.value);
        quickJumpSelect.value = '';
      }
    });
  }

  // Collapsible Map Legend
  if (legendToggleHeader && mapLegend) {
    legendToggleHeader.addEventListener('click', () => {
      const isHidden = legendBody.style.display === 'none';
      legendBody.style.display = isHidden ? 'flex' : 'none';
      legendCollapseBtn.textContent = isHidden ? '−' : '+';
    });
  }

  // ==========================================================================
  // GUIDED SCRIPTURAL TOURS / EXPEDITION SYSTEM
  // ==========================================================================
  function setupToursGrid() {
    if (!toursGrid || !mapJourneys) return;
    toursGrid.innerHTML = '';

    mapJourneys.forEach(tour => {
      const card = document.createElement('div');
      card.className = 'tour-card';
      card.innerHTML = `
        <div class="tour-card-header">
          <div class="tour-card-icon">🧭</div>
          <div>
            <div class="tour-card-title">${tour.name}</div>
            <div class="tour-card-meta">${tour.subtitle || ''}</div>
          </div>
        </div>
        <p class="tour-card-desc">${tour.description || ''}</p>
        <div class="tour-card-footer">
          <span>${tour.stages.length} Waypoints</span>
          <span style="color: var(--color-crimson);">Start Expedition &rarr;</span>
        </div>
      `;
      card.addEventListener('click', () => {
        closeModal(tourModal);
        startTour(tour.id);
      });
      toursGrid.appendChild(card);
    });
  }

  if (storyToursBtn && tourModal) {
    storyToursBtn.addEventListener('click', () => {
      openModal(tourModal);
    });
  }

  if (closeTourModalBtn && tourModal) {
    closeTourModalBtn.addEventListener('click', () => {
      closeModal(tourModal);
    });
  }

  function ensureTourSvgDefs() {
    let defs = journeySvg ? journeySvg.querySelector('defs') : null;
    if (!defs && journeySvg) {
      defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      journeySvg.insertBefore(defs, journeySvg.firstChild);
    }
    if (defs && !document.getElementById('markerArrowNephite')) {
      defs.insertAdjacentHTML('beforeend', `
        <marker id="markerArrowNephite" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#2563EB"/>
        </marker>
        <marker id="markerArrowLamanite" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#DC2626"/>
        </marker>
        <marker id="markerArrowCourier" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#F59E0B"/>
        </marker>
        <marker id="markerArrowPincer" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
          <path d="M 0 0.5 L 10 5 L 0 9.5 z" fill="#991B1B"/>
        </marker>
      `);
    }
  }

  function renderMantiAmbushAnimated(tour, stageIdx, imgWidth, imgHeight) {
    ensureTourSvgDefs();
    const toPx = (pt) => ({
      x: (pt.x / 100) * imgWidth,
      y: (pt.y / 100) * imgHeight
    });

    function createSvgElem(tag, attrs, text = '') {
      const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
      for (const [k, v] of Object.entries(attrs)) {
        el.setAttribute(k, v);
      }
      if (text) el.textContent = text;
      return el;
    }

    function renderTroopToken(x, y, icon, label, faction) {
      const g = createSvgElem('g', {
        class: `troop-marker-group troop-${faction}`,
        transform: `translate(${x}, ${y})`
      });

      const color = faction === 'nephite' ? '#2563EB' : (faction === 'courier' ? '#F59E0B' : '#DC2626');
      const aura = createSvgElem('circle', {
        cx: 0,
        cy: 0,
        r: 22,
        fill: faction === 'nephite' ? 'rgba(37, 99, 235, 0.22)' : (faction === 'courier' ? 'rgba(245, 158, 11, 0.22)' : 'rgba(220, 38, 38, 0.22)'),
        stroke: color,
        'stroke-width': 1.5
      });
      g.appendChild(aura);

      const core = createSvgElem('circle', {
        cx: 0,
        cy: 0,
        r: 15,
        fill: '#FFFDF9',
        stroke: color,
        'stroke-width': 3
      });
      g.appendChild(core);

      const iconTxt = createSvgElem('text', {
        x: 0,
        y: 5,
        'text-anchor': 'middle',
        'font-size': '15px'
      }, icon);
      g.appendChild(iconTxt);

      if (label) {
        const boxWidth = Math.max(76, label.length * 6.5 + 16);
        const rect = createSvgElem('rect', {
          x: -boxWidth / 2,
          y: 20,
          width: boxWidth,
          height: 18,
          rx: 4,
          fill: 'rgba(26, 20, 16, 0.92)',
          stroke: color,
          'stroke-width': 1
        });
        g.appendChild(rect);

        const lbl = createSvgElem('text', {
          x: 0,
          y: 32,
          'text-anchor': 'middle',
          fill: '#FFFDF9',
          'font-size': '10px',
          'font-weight': 'bold',
          'font-family': 'system-ui, -apple-system, sans-serif'
        }, label);
        g.appendChild(lbl);
      }

      pathsGroup.appendChild(g);
      return g;
    }

    function drawPath(points, opts = {}) {
      if (!points || points.length < 2) return null;
      const px = points.map(toPx);
      let d = `M ${px[0].x} ${px[0].y}`;
      for (let i = 1; i < px.length; i++) {
        d += ` L ${px[i].x} ${px[i].y}`;
      }
      const path = createSvgElem('path', {
        d: d,
        fill: 'none',
        class: opts.class || 'march-path-active',
        stroke: opts.stroke || '#DC2626',
        'stroke-width': opts.strokeWidth || '5',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      });
      if (opts.dasharray) path.setAttribute('stroke-dasharray', opts.dasharray);
      if (opts.markerEnd) path.setAttribute('marker-end', opts.markerEnd);
      if (opts.opacity) path.setAttribute('opacity', opts.opacity);
      pathsGroup.appendChild(path);
      return path;
    }

    // Key coordinates from map data
    const antionum = { x: 85.0, y: 56.5 };
    const jershon = { x: 74.5, y: 44.5 };
    const zarahemla = { x: 45.5, y: 51.3 };
    const manti = { x: 25.4, y: 87.7 };
    const hillRiplah = { x: 37.5, y: 83.0 };
    const riverCrossing = { x: 31.5, y: 85.0 };

    // True Mountain Wilderness Corridor along the Narrow Strip of Wilderness
    // (Stays along the mountain divide; completely avoids populated cities of Nephi, Mormon, and Sebus)
    const fullWildernessRoute = (tour.stages[2] && tour.stages[2].fullWildernessRoute) || [
      antionum,
      { x: 80.0, y: 64.0 },
      { x: 74.0, y: 68.0 },
      { x: 63.0, y: 70.5 },
      { x: 53.0, y: 71.0 },
      { x: 44.0, y: 74.0 },
      { x: 36.0, y: 78.5 },
      { x: 30.0, y: 82.5 },
      riverCrossing
    ];

    const courierRoute = (tour.stages[3] && tour.stages[3].pathPoints) || [
      jershon,
      { x: 60.0, y: 48.0 },
      zarahemla
    ];

    const interiorRoute = (tour.stages[4] && tour.stages[4].pathPoints) || [
      jershon,
      zarahemla,
      { x: 37.0, y: 70.0 },
      manti
    ];

    // Stage 0: Gathering in Antionum (Alma 43:5–15)
    if (stageIdx === 0) {
      // Clear muster points in Antionum and Jershon (no lines to Omner or across other cities)
      const pA = toPx(antionum);
      const pJ = toPx(jershon);
      renderTroopToken(pA.x, pA.y, '🗡️', "Zerahemnah's Host (Antionum)", 'lamanite');
      renderTroopToken(pJ.x, pJ.y, '🛡️', "Nephite Defense Army (Jershon)", 'nephite');
    }

    // Stage 1: Armor Innovation & Standoff in Jershon (Alma 43:16–23)
    else if (stageIdx === 1) {
      const pJ = toPx(jershon);
      const pA = toPx(antionum);
      renderTroopToken(pJ.x, pJ.y, '🛡️', "Moroni's Armored Legions", 'nephite');
      renderTroopToken(pA.x, pA.y, '🗡️', "Zerahemnah (Declines Battle)", 'lamanite');

      // Protective armor aura around Jershon (clean, no lines into the sea or across Omner)
      const defenseAura = createSvgElem('circle', {
        cx: pJ.x,
        cy: pJ.y,
        r: 32,
        fill: 'rgba(37, 99, 235, 0.15)',
        stroke: '#2563EB',
        'stroke-width': 2.5,
        'stroke-dasharray': '6 4',
        class: 'march-path-active'
      });
      pathsGroup.appendChild(defenseAura);
    }

    // Stage 2: Secret Wilderness Detour & Moroni's Spies (Alma 43:23–24)
    else if (stageIdx === 2) {
      // Both armies in active motion in this waypoint!
      // 1. Lamanites secretly entering the Narrow Strip of Wilderness
      const wildernessStart = [antionum, { x: 80.0, y: 64.0 }, { x: 74.0, y: 68.0 }];
      drawPath(wildernessStart, {
        stroke: '#DC2626',
        class: 'march-path-lamanite march-path-active',
        strokeWidth: '6',
        markerEnd: 'url(#markerArrowLamanite)'
      });
      const pCol = toPx({ x: 74.0, y: 68.0 });
      renderTroopToken(pCol.x, pCol.y, '🗡️', "Lamanites Enter Wilderness", 'lamanite');

      // 2. Moroni simultaneously sends spies into the wilderness to shadow their trail
      const spyPath = [jershon, { x: 70.0, y: 55.0 }, { x: 71.0, y: 65.0 }];
      drawPath(spyPath, {
        stroke: '#2563EB',
        class: 'march-path-nephite march-path-active',
        strokeWidth: '4',
        markerEnd: 'url(#markerArrowNephite)'
      });
      const pSpy = toPx({ x: 71.0, y: 65.0 });
      renderTroopToken(pSpy.x, pSpy.y, '👁️', "Moroni's Spies (Alma 43:23)", 'nephite');

      const pJ = toPx(jershon);
      renderTroopToken(pJ.x, pJ.y, '🛡️', "Moroni (Jershon Garrison)", 'nephite');
    }

    // Stage 3: Prophetic Intelligence Relay to Alma in Zarahemla (Alma 43:23–25)
    else if (stageIdx === 3) {
      // Slower Lamanite column now reaching the middle of the Narrow Strip of Wilderness
      const wildernessMid = [antionum, { x: 80.0, y: 64.0 }, { x: 74.0, y: 68.0 }, { x: 63.0, y: 70.5 }, { x: 53.0, y: 71.0 }];
      drawPath(wildernessMid, {
        stroke: '#DC2626',
        class: 'march-path-lamanite',
        strokeWidth: '5',
        opacity: 0.55
      });
      const pLamMid = toPx({ x: 53.0, y: 71.0 });
      renderTroopToken(pLamMid.x, pLamMid.y, '🗡️', "Lamanites in Narrow Strip", 'lamanite');

      const pJ = toPx(jershon);
      renderTroopToken(pJ.x, pJ.y, '🛡️', "Moroni Awaits Word in Jershon", 'nephite');

      // Golden courier path from Jershon to Zarahemla
      drawPath(courierRoute, {
        stroke: '#F59E0B',
        class: 'march-path-courier march-path-active',
        strokeWidth: '5',
        markerEnd: 'url(#markerArrowCourier)'
      });

      const pZ = toPx(zarahemla);
      renderTroopToken(pZ.x, pZ.y, '📜', "Alma Receives Revelation: 'Manti!'", 'courier');
    }

    // Stage 4: Moroni's Rapid Interior Forced March Beats Lamanites to Manti (Alma 43:25–26)
    else if (stageIdx === 4) {
      // Slower Lamanites still traversing south mountains, far behind
      const wildernessApproaching = [antionum, { x: 80.0, y: 64.0 }, { x: 74.0, y: 68.0 }, { x: 63.0, y: 70.5 }, { x: 53.0, y: 71.0 }, { x: 44.0, y: 74.0 }, { x: 36.0, y: 78.5 }];
      drawPath(wildernessApproaching, {
        stroke: '#DC2626',
        class: 'march-path-lamanite',
        strokeWidth: '4',
        opacity: 0.5
      });
      const pLamApp = toPx({ x: 36.0, y: 78.5 });
      renderTroopToken(pLamApp.x, pLamApp.y, '🗡️', "Lamanites in South Mountains", 'lamanite');

      // Moroni's rapid interior sprint arrives at Manti days ahead!
      drawPath(interiorRoute, {
        stroke: '#2563EB',
        class: 'march-path-nephite march-path-active',
        strokeWidth: '6',
        markerEnd: 'url(#markerArrowNephite)'
      });

      const pM = toPx(manti);
      renderTroopToken(pM.x, pM.y, '🛡️', "Moroni Arrives First at Manti!", 'nephite');
    }

    // Stage 5: Dividing the Armies & Concealing Wings (Alma 43:27–33)
    else if (stageIdx === 5) {
      const pR = toPx(hillRiplah);
      const pM = toPx(manti);

      // Armies splitting and occupying two concealed positions (no attack yet!)
      // Lehi's wing moves across river to Hill Riplah
      drawPath([manti, hillRiplah], {
        stroke: '#2563EB',
        class: 'march-path-nephite march-path-active',
        strokeWidth: '5',
        markerEnd: 'url(#markerArrowNephite)'
      });
      renderTroopToken(pR.x, pR.y, '🛡️', "Captain Lehi (Concealed East Wing)", 'nephite');
      renderTroopToken(pM.x, pM.y, '🛡️', "Moroni (Concealed West Wing)", 'nephite');

      // Spies on high ground watching for approaching enemy
      const pLookout = toPx({ x: 33.0, y: 81.0 });
      renderTroopToken(pLookout.x, pLookout.y, '👁️', "Nephite Spies on Lookout", 'nephite');

      // Unsuspecting Lamanites approaching from the north wilderness
      const pLamApp = toPx({ x: 35.0, y: 79.5 });
      renderTroopToken(pLamApp.x, pLamApp.y, '🗡️', "Lamanites Approach (Unaware)", 'lamanite');
    }

    // Stage 6: Decisive River Sidon Ambush, Double Pincer & Covenant of Peace (Alma 43:34–54; 44)
    else if (stageIdx === 6) {
      const pC = toPx(riverCrossing);
      const pM = toPx(manti);
      const pR = toPx(hillRiplah);

      // Trapped Lamanite center in river
      renderTroopToken(pC.x, pC.y, '🗡️', "Zerahemnah Encircled in Sidon", 'lamanite');

      // Encirclement aura ring around crossing
      const aura = createSvgElem('circle', {
        cx: pC.x,
        cy: pC.y,
        r: 38,
        fill: 'rgba(153, 27, 27, 0.18)',
        stroke: '#991B1B',
        'stroke-width': 3,
        'stroke-dasharray': '5 5',
        class: 'march-path-active'
      });
      pathsGroup.appendChild(aura);

      // 1. Lehi charges rear guard from Hill Riplah
      drawPath([hillRiplah, { x: 32.2, y: 85.0 }], {
        stroke: '#991B1B',
        class: 'march-path-pincer',
        strokeWidth: '7',
        markerEnd: 'url(#markerArrowPincer)'
      });
      renderTroopToken(pR.x, pR.y, '🛡️', "Lehi Strikes Rear Guard", 'nephite');

      // 2. Moroni blocks west bank
      drawPath([manti, { x: 30.5, y: 85.2 }], {
        stroke: '#2563EB',
        class: 'march-path-nephite march-path-active',
        strokeWidth: '6',
        markerEnd: 'url(#markerArrowNephite)'
      });
      renderTroopToken(pM.x, pM.y, '🛡️', "Moroni Blocks West Bank", 'nephite');

      // 3. Covenant of Peace Medallion above center
      renderTroopToken(pC.x, pC.y - 36, '🕊️', "Covenant of Peace (Alma 44)", 'courier');
    }
  }

  function startTour(tourId) {
    currentJourney = mapJourneys.find(j => j.id === tourId);
    if (!currentJourney) return;

    currentStageIndex = 0;

    // Show the Dedicated Tour Tab in the sidebar and activate it
    const tourTabWrap = document.getElementById('sidebarTourTabWrap');
    if (tourTabWrap) {
      tourTabWrap.style.display = 'block';
    }
    const expBtn = document.getElementById('expeditionTabBtn');
    sidebarTabs.forEach(t => t.classList.remove('active'));
    if (expBtn) {
      expBtn.classList.add('active');
    }
    activeTab = 'expedition';

    if (tourStepperBar) {
      tourStepperBar.style.display = 'flex';
    }

    goToTourStage(0);
  }

  function renderTourPaths(tour) {
    if (!pathsGroup) return;
    pathsGroup.innerHTML = '';
    const imgWidth = MAP_BASE_WIDTH;
    const imgHeight = MAP_BASE_HEIGHT;

    // If it's Moroni's Ambush at Manti, run the specialized multi-faction animated engine
    if (tour.id === 'battle_of_manti') {
      renderMantiAmbushAnimated(tour, currentStageIndex, imgWidth, imgHeight);
      return;
    }

    ensureTourSvgDefs();
    const coordsList = tour.stages.map(stage => {
      const loc = mapLocations[stage.locId];
      if (loc && loc.coords) {
        return {
          x: (loc.coords.x / 100) * imgWidth,
          y: (loc.coords.y / 100) * imgHeight
        };
      }
      return null;
    }).filter(c => c !== null);

    if (coordsList.length < 2) return;

    // Draw connecting path line
    let d = `M ${coordsList[0].x} ${coordsList[0].y}`;
    for (let i = 1; i < coordsList.length; i++) {
      d += ` L ${coordsList[i].x} ${coordsList[i].y}`;
    }

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', tour.color || '#8B5CF6');
    path.setAttribute('stroke-width', '4');
    path.setAttribute('stroke-dasharray', '8 6');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('class', 'active-journey-path march-path-active');
    pathsGroup.appendChild(path);

    // Waypoint dots
    coordsList.forEach((c, idx) => {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', c.x);
      circle.setAttribute('cy', c.y);
      circle.setAttribute('r', idx === currentStageIndex ? '10' : '7');
      circle.setAttribute('fill', idx === currentStageIndex ? (tour.color || '#8B5CF6') : '#FFFDF9');
      circle.setAttribute('stroke', tour.color || '#8B5CF6');
      circle.setAttribute('stroke-width', '3');
      pathsGroup.appendChild(circle);
    });
  }

  function goToTourStage(index) {
    if (!currentJourney || index < 0 || index >= currentJourney.stages.length) return;
    currentStageIndex = index;

    const stage = currentJourney.stages[index];
    const loc = mapLocations[stage.locId];

    if (stepperTourName) stepperTourName.textContent = currentJourney.name;
    if (stepperStepCount) stepperStepCount.textContent = `Waypoint ${index + 1} of ${currentJourney.stages.length}`;
    if (stepperStepNote) stepperStepNote.textContent = stage.note || stage.stageTitle || (loc && loc.summary);

    if (tourPrevStepBtn) tourPrevStepBtn.disabled = (index === 0);
    if (tourNextStepBtn) {
      tourNextStepBtn.textContent = (index === currentJourney.stages.length - 1) ? 'Finish Tour' : 'Next ▶';
    }

    // Re-render animated paths and faction positions
    renderTourPaths(currentJourney);

    if (loc) {
      selectLocation(loc.id);
    }
    if (sidebarContent) {
      sidebarContent.scrollTop = 0;
    }
  }

  if (tourStepperBar) {
    tourStepperBar.addEventListener('pointerdown', (e) => e.stopPropagation());
    tourStepperBar.addEventListener('mousedown', (e) => e.stopPropagation());
    tourStepperBar.addEventListener('touchstart', (e) => e.stopPropagation());
  }

  if (tourPrevStepBtn) {
    tourPrevStepBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentStageIndex > 0) goToTourStage(currentStageIndex - 1);
    });
  }

  if (tourNextStepBtn) {
    tourNextStepBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentJourney && currentStageIndex < currentJourney.stages.length - 1) {
        goToTourStage(currentStageIndex + 1);
      } else {
        exitTour();
      }
    });
  }

  if (tourExitBtn) {
    tourExitBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      exitTour();
    });
  }

  function exitTour() {
    currentJourney = null;
    currentStageIndex = 0;
    if (pathsGroup) pathsGroup.innerHTML = '';
    if (tourStepperBar) tourStepperBar.style.display = 'none';

    // Hide the Dedicated Tour Tab in the sidebar
    const tourTabWrap = document.getElementById('sidebarTourTabWrap');
    if (tourTabWrap) {
      tourTabWrap.style.display = 'none';
    }

    // If currently on expedition tab, switch back to overview
    if (activeTab === 'expedition') {
      activeTab = 'overview';
      const overviewBtn = Array.from(sidebarTabs).find(t => t.getAttribute('data-tab') === 'overview');
      sidebarTabs.forEach(t => t.classList.remove('active'));
      if (overviewBtn) {
        overviewBtn.classList.add('active');
      }
    }

    if (activeLocationId && mapLocations[activeLocationId]) {
      renderSidebarContent(mapLocations[activeLocationId]);
    } else {
      renderWelcomeSidebar();
    }
  }

  // ==========================================================================
  // TIMELINE SCRUBBER & CHRONOLOGICAL ENGINE (2200 BC - AD 421)
  // ==========================================================================
  function applyChronologicalStep(step) {
    currentEraStep = step;
    const milestone = chronologicalMilestones[step] || chronologicalMilestones[0];

    // Sync range slider
    if (eraSlider && parseInt(eraSlider.value, 10) !== step) {
      eraSlider.value = step;
    }

    // Update Date badge
    if (displayYear) displayYear.textContent = milestone.yearLabel;
    if (displaySeason) displaySeason.textContent = milestone.title;

    // Update Floating Watermark
    if (floatingEraTag) floatingEraTag.textContent = `ERA • ${milestone.yearLabel}`;
    if (floatingEraTitle) floatingEraTitle.textContent = milestone.title;
    if (floatingEraDesc) floatingEraDesc.textContent = milestone.subtitle;

    // Update active Era Tab (highlighting only the current era bracket)
    const sortedTabs = Array.from(eraTabs).map(tab => ({
      element: tab,
      step: parseInt(tab.getAttribute('data-step'), 10)
    })).sort((a, b) => a.step - b.step);

    let activeTabElement = sortedTabs[0] ? sortedTabs[0].element : null;
    for (let i = 0; i < sortedTabs.length; i++) {
      if (step >= sortedTabs[i].step) {
        activeTabElement = sortedTabs[i].element;
      } else {
        break;
      }
    }

    eraTabs.forEach(tab => {
      tab.classList.toggle('active', tab === activeTabElement);
    });

    // Cataclysm Morphing Logic at AD 34 (Step 20)
    const isCataclysmActive = step >= 20;
    if (cataclysmTerrainGroup) {
      cataclysmTerrainGroup.style.display = (isCataclysmActive && activeLayers.has('cataclysm')) ? 'block' : 'none';
    }

    // Mark destroyed sites
    document.querySelectorAll('.map-pin').forEach(pin => {
      const pinId = pin.getAttribute('data-id');
      const isDestroyedSite = isCataclysmActive && (
        pinId === 'zarahemla' || pinId === 'city_of_moroni' || pinId === 'moronihah' ||
        pinId === 'jerusalem_city' || pinId === 'onihah' || pinId === 'mocum' ||
        pinId === 'city_of_jacobugath' || pinId === 'city_of_laman' || pinId === 'city_of_josh' ||
        pinId === 'city_of_gad' || pinId === 'city_of_kishkumen'
      );
      pin.classList.toggle('destroyed-marker', isDestroyedSite);
    });

    if (milestone.isCataclysm) {
      playCataclysmRumble();
    }
  }

  if (eraSlider) {
    eraSlider.addEventListener('input', (e) => {
      applyChronologicalStep(parseInt(e.target.value, 10));
    });
  }

  eraTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const step = parseInt(tab.getAttribute('data-step'), 10);
      applyChronologicalStep(step);
    });
  });

  // Playback Controls
  function playTimeline() {
    isPlaying = true;
    if (playIcon) playIcon.style.display = 'none';
    if (pauseIcon) pauseIcon.style.display = 'block';

    const intervals = { 1: 1800, 2: 900, 5: 360 };
    const delay = intervals[playbackSpeed] || 1800;

    clearInterval(playbackTimer);
    playbackTimer = setInterval(() => {
      if (currentEraStep < chronologicalMilestones.length - 1) {
        applyChronologicalStep(currentEraStep + 1);
      } else {
        pauseTimeline();
      }
    }, delay);
  }

  function pauseTimeline() {
    isPlaying = false;
    clearInterval(playbackTimer);
    if (playIcon) playIcon.style.display = 'block';
    if (pauseIcon) pauseIcon.style.display = 'none';
  }

  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
      if (isPlaying) pauseTimeline();
      else playTimeline();
    });
  }

  if (stepBackBtn) {
    stepBackBtn.addEventListener('click', () => {
      pauseTimeline();
      if (currentEraStep > 0) applyChronologicalStep(currentEraStep - 1);
    });
  }

  if (stepForwardBtn) {
    stepForwardBtn.addEventListener('click', () => {
      pauseTimeline();
      if (currentEraStep < chronologicalMilestones.length - 1) {
        applyChronologicalStep(currentEraStep + 1);
      }
    });
  }

  // Speed selection
  speedButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      speedButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      playbackSpeed = parseInt(btn.getAttribute('data-speed'), 10);
      if (isPlaying) {
        pauseTimeline();
        playTimeline();
      }
    });
  });

  // Direct Cataclysm Jump Button
  if (cataclysmQuickToggle) {
    cataclysmQuickToggle.addEventListener('click', () => {
      pauseTimeline();
      applyChronologicalStep(20);
      focusLocation(58.2, 59.5, 1.8);
    });
  }

  // ==========================================================================
  // SCRIPTURE READER MODAL (Church of Jesus Christ Official Integration)
  // ==========================================================================
  function getChurchScriptureUrl(refStr) {
    if (!refStr) return null;
    const cleanRef = refStr.trim();
    const match = cleanRef.match(/^(\d\s+[A-Za-z]+|[A-Za-z\s]+?)\s+(\d+)(?::(\d+)(?:-(\d+))?)?/);
    if (!match) return null;

    const rawBook = match[1].trim().toLowerCase();
    const chapter = match[2];
    const startVerse = match[3];
    const endVerse = match[4];

    const bookMap = {
      '1 nephi': '1-ne', 'first nephi': '1-ne',
      '2 nephi': '2-ne', 'second nephi': '2-ne',
      'jacob': 'jacob', 'enos': 'enos', 'jarom': 'jarom', 'omni': 'omni',
      'words of mormon': 'w-of-m', 'mosiah': 'mosiah', 'alma': 'alma',
      'helaman': 'hel', '3 nephi': '3-ne', 'third nephi': '3-ne',
      '4 nephi': '4-ne', 'fourth nephi': '4-ne', 'mormon': 'morm',
      'ether': 'ether', 'moroni': 'moro'
    };

    const slug = bookMap[rawBook];
    if (!slug) return null;

    let url = `https://www.churchofjesuschrist.org/study/scriptures/bofm/${slug}/${chapter}?lang=eng`;
    if (startVerse) {
      if (endVerse) url += `&id=p${startVerse}-p${endVerse}#p${startVerse}`;
      else url += `&id=p${startVerse}#p${startVerse}`;
    }
    return url;
  }

  function openScriptureModal(refStr, url) {
    if (!url) url = getChurchScriptureUrl(refStr);
    if (!url) return;

    if (scriptureModalTitle) scriptureModalTitle.textContent = `${refStr} — Book of Mormon`;
    if (scriptureExternalLink) scriptureExternalLink.href = url;
    if (scriptureFooterLink) {
      scriptureFooterLink.href = url;
      scriptureFooterLink.textContent = url;
    }

    if (scriptureLoading) {
      scriptureLoading.style.display = 'flex';
      scriptureLoading.style.opacity = '1';
    }

    if (scriptureIframe) {
      scriptureIframe.src = url;
      scriptureIframe.onload = () => {
        if (scriptureLoading) {
          scriptureLoading.style.opacity = '0';
          setTimeout(() => { scriptureLoading.style.display = 'none'; }, 250);
        }
      };
    }

    if (scriptureModal) {
      scriptureModal.classList.add('open');
      scriptureModal.setAttribute('aria-hidden', 'false');
    }

    setTimeout(() => {
      if (scriptureLoading && scriptureLoading.style.display !== 'none') {
        scriptureLoading.style.opacity = '0';
        setTimeout(() => { scriptureLoading.style.display = 'none'; }, 250);
      }
    }, 4000);
  }

  function closeScriptureModal() {
    if (!scriptureModal) return;
    scriptureModal.classList.remove('open');
    scriptureModal.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
      if (scriptureIframe) scriptureIframe.src = 'about:blank';
    }, 250);
  }

  if (closeScriptureModalBtn) closeScriptureModalBtn.addEventListener('click', closeScriptureModal);
  if (scriptureModalBackdrop) scriptureModalBackdrop.addEventListener('click', closeScriptureModal);

  // ==========================================================================
  // OLD WORLD ORIGINS & CHURCH DISCLAIMER MODALS (Fixing Church Stance)
  // ==========================================================================
  if (openOldWorldBtn) {
    openOldWorldBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(oldWorldModal);
    });
  }
  if (closeOldWorldModal) {
    closeOldWorldModal.addEventListener('click', (e) => {
      e.stopPropagation();
      closeModal(oldWorldModal);
    });
  }

  if (openDisclaimerBtn) {
    openDisclaimerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(disclaimerModal);
    });
  }
  if (closeDisclaimerModal) {
    closeDisclaimerModal.addEventListener('click', (e) => {
      e.stopPropagation();
      closeModal(disclaimerModal);
    });
  }

  if (mapScaleContainer && distanceScaleModal) {
    mapScaleContainer.addEventListener('click', (e) => {
      if (e.target.closest('#closeScaleBarBtn')) return;
      e.stopPropagation();
      openModal(distanceScaleModal);
    });
  }
  const closeScaleBarBtn = document.getElementById('closeScaleBarBtn');
  if (closeScaleBarBtn) {
    closeScaleBarBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setDistanceScaleVisibility(false);
    });
  }
  if (closeDistanceModalBtn && distanceScaleModal) {
    closeDistanceModalBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeModal(distanceScaleModal);
    });
  }

  // Close modals on backdrop click
  [tourModal, oldWorldModal, disclaimerModal, distanceScaleModal].forEach(m => {
    if (!m) return;
    m.addEventListener('click', (e) => {
      if (e.target === m) closeModal(m);
    });
  });

  // ==========================================================================
  // COORDINATE INSPECTOR & SCALE BAR
  // ==========================================================================
  if (toggleInspectorBtn) {
    toggleInspectorBtn.addEventListener('click', () => {
      isInspectorActive = !isInspectorActive;
      toggleInspectorBtn.classList.toggle('active', isInspectorActive);
      coordsInspectorBadge.classList.toggle('active', isInspectorActive);
      inspectorBtnText.textContent = isInspectorActive ? 'Inspector: ON' : 'Inspector: OFF';
    });
  }

  const updateCoordAtPoint = (clientX, clientY) => {
    const rect = viewport.getBoundingClientRect();
    const vX = clientX - rect.left;
    const vY = clientY - rect.top;

    const imgX = (vX - translateX) / scale;
    const imgY = (vY - translateY) / scale;

    const pctX = ((imgX / MAP_BASE_WIDTH) * 100).toFixed(1);
    const pctY = ((imgY / MAP_BASE_HEIGHT) * 100).toFixed(1);

    if (pctX >= 0 && pctX <= 100 && pctY >= 0 && pctY <= 100) {
      lastHoveredPct = { x: pctX, y: pctY };
      coordsBadgeText.innerHTML = `Map Pos: X: ${pctX}% | Y: ${pctY}%`;
      return { x: pctX, y: pctY };
    }
    return null;
  };

  viewport.addEventListener('mousemove', (e) => {
    if (!isInspectorActive) return;
    updateCoordAtPoint(e.clientX, e.clientY);
  });

  viewport.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      if (!e.target.closest('.map-pin') && !e.target.closest('.floating-btn') && !e.target.closest('.map-legend-box') && !e.target.closest('.tour-stepper-bar') && !e.target.closest('.mobile-bottom-bar')) {
        closeAllMobileSheets();
        if (detailSidebar && !detailSidebar.classList.contains('closed') && !detailSidebar.classList.contains('peek')) {
          detailSidebar.classList.add('peek');
          detailSidebar.classList.remove('expanded');
        }
      }
    }
    if (!isInspectorActive) return;
    if (e.target.closest('.map-pin') || e.target.closest('.floating-btn') || e.target.closest('.map-legend-box')) return;
    const coords = updateCoordAtPoint(e.clientX, e.clientY);
    if (coords) {
      const coordStr = `{ x: ${coords.x}, y: ${coords.y} }`;
      navigator.clipboard?.writeText?.(coordStr).then(() => {
        playGentleChime();
        if (copyToast) {
          copyToast.textContent = `Copied ${coordStr} to clipboard!`;
          copyToast.classList.add('show');
          setTimeout(() => copyToast.classList.remove('show'), 2000);
        }
      }).catch(() => {});
    }
  });

  if (coordsInspectorBadge) {
    coordsInspectorBadge.addEventListener('click', () => {
      const coordStr = `{ x: ${lastHoveredPct.x}, y: ${lastHoveredPct.y} }`;
      navigator.clipboard.writeText(coordStr).then(() => {
        playGentleChime();
        copyToast.textContent = `Copied ${coordStr} to clipboard!`;
        copyToast.classList.add('show');
        setTimeout(() => copyToast.classList.remove('show'), 2000);
      });
    });
  }

  // ==========================================================================
  // PAN, ZOOM, DRAG & TOUCH INTERACTIONS
  // ==========================================================================
  // 1. Mouse Dragging (Desktop)
  viewport.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'touch') return; // Handled by dedicated touch system below
    if (
      e.target.closest('.map-pin') ||
      e.target.closest('.floating-btn') ||
      e.target.closest('.map-legend-box') ||
      e.target.closest('.tour-stepper-bar') ||
      e.target.closest('.map-scale-bar-container') ||
      e.target.closest('.coords-inspector-badge') ||
      e.target.closest('.floating-era-badge')
    ) {
      return;
    }
    isDragging = true;
    startPointerX = e.clientX;
    startPointerY = e.clientY;
    startTranslateX = translateX;
    startTranslateY = translateY;
    viewport.setPointerCapture(e.pointerId);
  });

  viewport.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    if (!isDragging) return;
    const dx = e.clientX - startPointerX;
    const dy = e.clientY - startPointerY;
    translateX = startTranslateX + dx;
    translateY = startTranslateY + dy;
    applyTransform();
  });

  viewport.addEventListener('pointerup', (e) => {
    if (e.pointerType === 'touch') return;
    if (isDragging) {
      isDragging = false;
      try { viewport.releasePointerCapture(e.pointerId); } catch (_) {}
    }
  });

  viewport.addEventListener('pointercancel', (e) => {
    if (e.pointerType === 'touch') return;
    isDragging = false;
    try { viewport.releasePointerCapture(e.pointerId); } catch (_) {}
  });

  // Mouse Wheel Zoom
  viewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.15 : 0.85;
    const newScale = Math.min(Math.max(scale * zoomFactor, minScale), maxScale);

    const rect = viewport.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    translateX = mouseX - (mouseX - translateX) * (newScale / scale);
    translateY = mouseY - (mouseY - translateY) * (newScale / scale);
    scale = newScale;

    applyTransform();
  }, { passive: false });

  // 2. Dedicated Multi-Touch Drag & Centered Pinch-to-Zoom (Mobile & Tablet)
  let touchPinchActive = false;
  let touchPinchStartDist = 0;
  let touchPinchStartScale = 1;
  let touchPinchStartTranslateX = 0;
  let touchPinchStartTranslateY = 0;
  let touchPinchMapStageX = 0;
  let touchPinchMapStageY = 0;
  let touchDragStartX = 0;
  let touchDragStartY = 0;

  viewport.addEventListener('touchstart', (e) => {
    if (e.touches.length >= 2) {
      // 2 Fingers: Always initiate Centered Pinch-to-Zoom (even if near a pin)
      isDragging = false;
      touchPinchActive = true;
      touchPinchStartDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchPinchStartScale = scale;
      touchPinchStartTranslateX = translateX;
      touchPinchStartTranslateY = translateY;

      const rect = viewport.getBoundingClientRect();
      const midViewportX = ((e.touches[0].clientX + e.touches[1].clientX) / 2) - rect.left;
      const midViewportY = ((e.touches[0].clientY + e.touches[1].clientY) / 2) - rect.top;

      touchPinchMapStageX = (midViewportX - touchPinchStartTranslateX) / touchPinchStartScale;
      touchPinchMapStageY = (midViewportY - touchPinchStartTranslateY) / touchPinchStartScale;
      return;
    }

    if (
      e.target.closest('.map-pin') ||
      e.target.closest('.floating-btn') ||
      e.target.closest('.map-legend-box') ||
      e.target.closest('.tour-stepper-bar') ||
      e.target.closest('.map-scale-bar-container') ||
      e.target.closest('.coords-inspector-badge')
    ) {
      return;
    }

    if (e.touches.length === 1) {
      // 1 Finger: Smooth Pan
      touchPinchActive = false;
      isDragging = true;
      touchDragStartX = e.touches[0].clientX;
      touchDragStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
      startTranslateX = translateX;
      startTranslateY = translateY;
    }
  }, { passive: false });

  viewport.addEventListener('touchmove', (e) => {
    if (e.touches.length >= 2) {
      e.preventDefault();
      // Self-heal if 2nd finger landed mid-motion
      if (!touchPinchActive || touchPinchStartDist <= 0) {
        touchPinchActive = true;
        isDragging = false;
        touchPinchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        touchPinchStartScale = scale;
        touchPinchStartTranslateX = translateX;
        touchPinchStartTranslateY = translateY;
        const rect = viewport.getBoundingClientRect();
        const midX = ((e.touches[0].clientX + e.touches[1].clientX) / 2) - rect.left;
        const midY = ((e.touches[0].clientY + e.touches[1].clientY) / 2) - rect.top;
        touchPinchMapStageX = (midX - touchPinchStartTranslateX) / touchPinchStartScale;
        touchPinchMapStageY = (midY - touchPinchStartTranslateY) / touchPinchStartScale;
        return;
      }

      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      if (touchPinchStartDist > 0) {
        const factor = dist / touchPinchStartDist;
        const newScale = Math.min(Math.max(touchPinchStartScale * factor, minScale), maxScale);

        const rect = viewport.getBoundingClientRect();
        const currentMidX = ((e.touches[0].clientX + e.touches[1].clientX) / 2) - rect.left;
        const currentMidY = ((e.touches[0].clientY + e.touches[1].clientY) / 2) - rect.top;

        scale = newScale;
        translateX = currentMidX - touchPinchMapStageX * newScale;
        translateY = currentMidY - touchPinchMapStageY * newScale;
        applyTransform();
      }
    } else if (e.touches.length === 1 && isDragging && !touchPinchActive) {
      e.preventDefault();
      const dx = e.touches[0].clientX - touchDragStartX;
      const dy = e.touches[0].clientY - touchDragStartY;
      translateX = startTranslateX + dx;
      translateY = startTranslateY + dy;
      applyTransform();
    }
  }, { passive: false });

  viewport.addEventListener('touchend', (e) => {
    if (e.touches.length === 1) {
      // Transition from pinch back to 1-finger drag cleanly without jump
      touchPinchActive = false;
      isDragging = true;
      touchDragStartX = e.touches[0].clientX;
      touchDragStartY = e.touches[0].clientY;
      startTranslateX = translateX;
      startTranslateY = translateY;
    } else if (e.touches.length === 0) {
      if (window.innerWidth <= 768 && isDragging && !touchPinchActive && e.changedTouches && e.changedTouches.length > 0) {
        const movedDist = Math.hypot(e.changedTouches[0].clientX - touchDragStartX, e.changedTouches[0].clientY - touchDragStartY);
        if (movedDist < 12 && (Date.now() - touchStartTime < 350)) {
          if (!e.target.closest('.map-pin') && !e.target.closest('.floating-btn') && !e.target.closest('.tour-stepper-bar') && !e.target.closest('.mobile-bottom-bar')) {
            closeAllMobileSheets();
            if (detailSidebar && !detailSidebar.classList.contains('closed') && !detailSidebar.classList.contains('peek')) {
              detailSidebar.classList.add('peek');
              detailSidebar.classList.remove('expanded');
            }
          }
        }
      }
      isDragging = false;
      touchPinchActive = false;
      touchPinchStartDist = 0;
    }
  }, { passive: false });

  viewport.addEventListener('touchcancel', () => {
    isDragging = false;
    touchPinchActive = false;
    touchPinchStartDist = 0;
  }, { passive: false });

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (document.activeElement === globalSearchInput) return;

    if (e.key === 'Escape') {
      if (detailSidebar && !detailSidebar.classList.contains('closed')) {
        detailSidebar.classList.add('closed');
      }
      [tourModal, oldWorldModal, disclaimerModal, distanceScaleModal].forEach(m => m && closeModal(m));
      closeScriptureModal();
      exitTour();
    } else if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      if (isPlaying) pauseTimeline();
      else playTimeline();
    } else if (e.key === 'ArrowRight') {
      stepForwardBtn.click();
    } else if (e.key === 'ArrowLeft') {
      stepBackBtn.click();
    } else if (e.key === '+' || e.key === '=') {
      zoomInBtn.click();
    } else if (e.key === '-' || e.key === '_') {
      zoomOutBtn.click();
    } else if (e.key === '0') {
      recenterBtn.click();
    }
  });

  // Resize window handler
  window.addEventListener('resize', () => {
    if (scale < minScale) {
      fitMapToScreen();
    }
  });

  // Launch initial map setup
  initMap();
});
