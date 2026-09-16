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
  const maxScale = 4.0;

  // Pan & Drag State
  let isDragging = false;
  let startPointerX = 0;
  let startPointerY = 0;
  let startTranslateX = 0;
  let startTranslateY = 0;
  let activeLocationId = null;
  let activeTab = 'overview';

  // Multi-Select Layer Overlays
  const ALL_LAYERS = ['capitals', 'cities', 'fortresses', 'sacred', 'waters', 'wilderness', 'cataclysm'];
  const activeLayers = new Set(ALL_LAYERS);

  // Coordinate Inspector
  let isInspectorActive = false;
  let lastHoveredPct = { x: 50.0, y: 50.0 };

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
  // AUDIO EFFECTS
  // ==========================================================================
  function playGentleChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880.0, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch (_) {}
  }

  function playCataclysmRumble() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(65, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(28, ctx.currentTime + 1.2);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch (_) {}
  }

  // ==========================================================================
  // MAP INITIALIZATION & PROJECTION ENGINE
  // ==========================================================================
  function initMap() {
    const totalCount = Object.keys(mapLocations).length;
    if (statSitesCount) statSitesCount.textContent = totalCount;
    if (statToursCount) statToursCount.textContent = mapJourneys.length;
    if (statErasCount) statErasCount.textContent = chronologicalMilestones.length;

    if (mapImage.complete) {
      fitMapToScreen();
      renderTerritoryPolygons();
      renderCataclysmTerrain();
      renderMarkers();
      setupQuickJumpSelect();
      setupToursGrid();
      applyChronologicalStep(0);
      renderWelcomeSidebar();
    } else {
      mapImage.onload = () => {
        fitMapToScreen();
        renderTerritoryPolygons();
        renderCataclysmTerrain();
        renderMarkers();
        setupQuickJumpSelect();
        setupToursGrid();
        applyChronologicalStep(0);
        renderWelcomeSidebar();
      };
    }
  }

  function fitMapToScreen() {
    const vWidth = viewport.clientWidth || window.innerWidth;
    const vHeight = viewport.clientHeight || window.innerHeight;
    const imgWidth = MAP_BASE_WIDTH;
    const imgHeight = MAP_BASE_HEIGHT;

    const isMobile = window.innerWidth <= 768;
    const paddingX = isMobile ? 0.98 : 0.92;
    const paddingY = isMobile ? 0.96 : 0.90;

    const scaleX = (vWidth * paddingX) / imgWidth;
    const scaleY = (vHeight * paddingY) / imgHeight;
    scale = Math.min(scaleX, scaleY);

    minScale = Math.min(0.04, scale * 0.6);

    translateX = (vWidth - (imgWidth * scale)) / 2;
    translateY = (vHeight - (imgHeight * scale)) / 2;

    applyTransform();
  }

  function applyTransform() {
    stage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  }

  function focusLocation(targetPctX, targetPctY, customScale) {
    const vWidth = viewport.clientWidth;
    const vHeight = viewport.clientHeight;
    const imgWidth = MAP_BASE_WIDTH;
    const imgHeight = MAP_BASE_HEIGHT;

    const targetX = (targetPctX / 100) * imgWidth;
    const targetY = (targetPctY / 100) * imgHeight;

    const isDesktop = window.innerWidth > 900;
    const offsetX = isDesktop ? vWidth * 0.38 : vWidth * 0.5;
    const offsetY = vHeight * 0.5;

    if (customScale) {
      scale = customScale;
    } else if (scale < 1.4) {
      scale = 1.4;
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
  // LANDMARK MARKERS RENDERING
  // ==========================================================================
  function renderMarkers() {
    markersLayer.innerHTML = '';
    const imgWidth = MAP_BASE_WIDTH;
    const imgHeight = MAP_BASE_HEIGHT;

    Object.values(mapLocations).forEach(loc => {
      const pin = document.createElement('div');
      pin.className = `map-pin pin-${loc.category}`;
      pin.setAttribute('data-id', loc.id);
      pin.setAttribute('data-category', loc.category);

      const pxX = (loc.coords.x / 100) * imgWidth;
      const pxY = (loc.coords.y / 100) * imgHeight;
      pin.style.left = `${pxX}px`;
      pin.style.top = `${pxY}px`;

      const isCapital = loc.category === 'capitals' || loc.id === 'zarahemla' || loc.id === 'lehi_nephi';

      // Pin icon symbol
      let iconSymbol = '📍';
      if (isCapital) iconSymbol = '👑';
      else if (loc.category === 'fortresses') iconSymbol = '🛡️';
      else if (loc.category === 'sacred') iconSymbol = '🏛️';
      else if (loc.category === 'waters') iconSymbol = '🌊';
      else if (loc.category === 'wilderness') iconSymbol = '⛰️';
      else if (loc.category === 'cities') iconSymbol = '🏘️';

      pin.innerHTML = `
        <div class="pin-icon-wrap ${loc.category} ${isCapital ? 'capital' : ''}">
          <span>${iconSymbol}</span>
        </div>
        <span class="pin-label ${isCapital ? 'capital-label' : ''}">${loc.name}</span>
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
  // MULTI-SELECT OVERLAY FILTER ENGINE
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

    // Sync chip classes
    filterChips.forEach(chip => {
      const k = chip.getAttribute('data-filter');
      if (k === 'all') {
        chip.classList.toggle('active', activeLayers.size === ALL_LAYERS.length);
      } else {
        chip.classList.toggle('active', activeLayers.has(k));
      }
    });

    updateLayerVisibility();
  }

  function updateLayerVisibility() {
    let visibleCount = 0;

    document.querySelectorAll('.map-pin').forEach(pin => {
      const cat = pin.getAttribute('data-category');
      const isVisible = activeLayers.has(cat);
      pin.style.display = isVisible ? 'flex' : 'none';
      if (isVisible) visibleCount++;
    });

    if (statSitesCount) {
      statSitesCount.textContent = visibleCount;
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

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      toggleLayer(chip.getAttribute('data-filter'));
    });
  });

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
      sidebarEyebrow.textContent = `${loc.category.toUpperCase()} • ${loc.region.toUpperCase()}`;
    }
    if (sidebarTitle) {
      sidebarTitle.textContent = loc.name;
    }

    // Render Tab Content
    renderSidebarContent(loc);

    // Open Sidebar if closed
    if (detailSidebar) {
      detailSidebar.classList.remove('closed');
    }

    // Pan map to location
    focusLocation(loc.coords.x, loc.coords.y);
  }

  function renderSidebarContent(loc) {
    if (!sidebarContent) return;
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
    // TAB 1: OVERVIEW
    // -------------------------------------------------------------------------
    if (activeTab === 'overview') {
      sidebarContent.innerHTML = `
        <div class="city-detail-badge-row">
          <span class="city-badge badge-region">${loc.region}</span>
          <span class="city-badge badge-category">${loc.category.toUpperCase()}</span>
          <span class="city-badge badge-period">Scripturally Verified</span>
        </div>

        ${firstRef ? `
          <div class="hero-quote">
            <div class="quote-text">"${firstRef.text}"</div>
            <span class="quote-ref">${firstRef.ref}</span>
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
            <span class="demographic-label">Internal Coordinates</span>
            <span class="demographic-value">X: ${loc.coords.x}% | Y: ${loc.coords.y}%</span>
          </div>
        </div>

        ${loc.refs && loc.refs.length > 0 ? `
          <div class="feature-card">
            <h3>Scriptures Recorded at this Site</h3>
            <p style="font-size:0.82rem; color:var(--text-secondary); margin-bottom:0.6rem;">
              Documented across ${loc.refs.length} verified Book of Mormon passages:
            </p>
            <div style="display:flex; flex-direction:column; gap:0.45rem;">
              ${loc.refs.slice(0, 4).map(r => {
                const churchUrl = getChurchScriptureUrl(r.ref);
                return `
                  <a href="${churchUrl || '#'}" class="church-scripture-btn" data-url="${churchUrl}" data-ref="${r.ref}">
                    <span>📖 Read ${r.ref} (Official Scripture)</span>
                    <span class="btn-arrow">↗</span>
                  </a>
                `;
              }).join('')}
            </div>
          </div>
        ` : ''}

        <div class="drawer-church-stance-card">
          <div class="church-stance-mini-header">
            <span style="font-size: 1.1rem;">📜</span>
            <span class="church-stance-mini-title">Official Church Stance on Geography</span>
          </div>
          <p class="church-stance-mini-desc">
            "The Church does not take a position on specific geographic locations in the Americas... the best guide is the text of the Book of Mormon itself."
          </p>
          <button class="church-stance-mini-btn" id="codexDisclaimerBtn">Read Full Gospel Topics Statement &rarr;</button>
        </div>
      `;

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
          <p style="font-size: 0.82rem; line-height: 1.5; color: var(--text-secondary); margin-top: 0.6rem;">
            This interactive atlas is designed as a study aid to understand the internal textual relationships, day-journeys, river flows, and directionalities described in the scriptures.
          </p>
          <button class="btn btn-primary glow-gold" id="openFullStanceBtn" style="margin-top: 0.75rem; justify-content: center; width: 100%;">
            Open Full Gospel Topics Statement
          </button>
        </div>
      `;

      const openFullStanceBtn = document.getElementById('openFullStanceBtn');
      if (openFullStanceBtn) {
        openFullStanceBtn.addEventListener('click', () => openModal(disclaimerModal));
      }
    }
  }

  // ==========================================================================
  // MULTI-TRANSLATION SCRIPTURES TAB (Standard + 7th-Grade Plain English)
  // ==========================================================================
  function renderScripturesTab(loc) {
    if (!sidebarContent) return;

    const refs = (loc && loc.refs && loc.refs.length > 0) ? loc.refs : [
      { ref: "1 Nephi 3:7", text: "And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded, for I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them." },
      { ref: "2 Nephi 2:25", text: "Adam fell that men might be; and men are, that they might have joy." },
      { ref: "2 Nephi 31:20", text: "Wherefore, ye must press forward with a steadfastness in Christ, having a perfect brightness of hope, and a love of God and of all men. Wherefore, if ye shall press forward, feasting upon the word of Christ, and endure to the end, behold, thus saith the Father: Ye shall have eternal life." },
      { ref: "Mosiah 2:17", text: "And behold, I tell you these things that ye may learn wisdom; that ye may learn that when ye are in the service of your fellow beings ye are only in the service of your God." },
      { ref: "Mosiah 18:8–10", text: "And now, as ye are desirous to come into the fold of God, and to be called his people, and are willing to bear one another's burdens, that they may be light; yea, and are willing to mourn with those that mourn; yea, and comfort those that stand in need of comfort, and to stand as witnesses of God at all times and in all things, and in all places that ye may be in, even until death... what have you against being baptized in the name of the Lord?" },
      { ref: "Alma 32:21", text: "And now as I said concerning faith—faith is not to have a perfect knowledge of things; therefore if ye have faith ye hope for things which are not seen, which are true." },
      { ref: "Alma 46:12", text: "And it came to pass that he rent his coat; and he took a piece thereof, and wrote upon it—In memory of our God, our religion, and freedom, and our peace, our wives, and our children—and he fastened it upon the end of a pole." },
      { ref: "Helaman 5:12", text: "And now, my sons, remember, remember that it is upon the rock of our Redeemer, who is Christ, the Son of God, that ye must build your foundation; that when the devil shall send forth his mighty winds, yea, his shafts in the whirlwind, yea, when all his hail and his mighty storm shall beat upon you, it shall have no power over you to drag you down to the gulf of misery and endless wo, because of the rock upon which ye are built, which is a sure foundation, a foundation whereon if men build they cannot fall." },
      { ref: "3 Nephi 11:10–11", text: "Behold, I am Jesus Christ, whom the prophets testified shall come into the world. And behold, I am the light and the life of the world; and I have drunk out of that bitter cup which the Father hath given me, and have glorified the Father in taking upon me the sins of the world, in the which I have suffered the will of the Father in all things from the beginning." },
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
    if (sidebarEyebrow) sidebarEyebrow.textContent = 'WELCOME TO THE SCRIPTURAL ATLAS';
    if (sidebarTitle) sidebarTitle.textContent = 'Book of Mormon Geography';

    sidebarContent.innerHTML = `
      <div class="hero-quote">
        <p class="quote-text">"And they did look forth upon the land of promise; and behold, it was a land choice above all other lands."</p>
        <span class="quote-ref">— 1 Nephi 18:25</span>
      </div>

      <div class="feature-card">
        <h3>How to Explore the Atlas</h3>
        <ul class="feature-steps">
          <li><strong>Toggle Multiple Overlays:</strong> Click any layer chip above the map (Capitals, Cities, Fortresses, Waters) to combine multiple views.</li>
          <li><strong>Scrub the Timeline:</strong> Drag the slider from <strong>2200 BC to AD 421</strong> to witness the rise, dispersion, cataclysm, and final battles.</li>
          <li><strong>Click Any Landmark:</strong> Open deep scriptural dossiers with verbatim verses, military fortifications, and leaders.</li>
          <li><strong>Launch Guided Tours:</strong> Follow Lehi's landing, Alma's flight to Mormon, and Captain Moroni's campaigns step-by-step.</li>
        </ul>
      </div>

      <div class="curated-shortcut-grid">
        <h4 style="font-family: var(--font-serif-title); font-size: 0.85rem; color: var(--color-crimson); margin-bottom: 0.4rem;">
          Featured Scriptural Expeditions
        </h4>
        <div class="tour-mini-cards" id="welcomeTourShortcuts"></div>
      </div>
    `;

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
        <span class="kjv-badge">Full Prophetic Ministry</span>
        <span style="font-size:0.75rem; color:var(--text-secondary); margin-left:6px;">Covering all major dispensations and witnesses (~2200 BC – AD 421).</span>
      </div>

      <div class="teachings-role-grid">
        <div class="teachings-stat-box" style="border-left: 3px solid var(--color-crimson);">
          <span class="teachings-stat-label">Who Was Teaching</span>
          <span class="teachings-stat-value" style="font-size: 0.8rem; line-height: 1.45;">${teacherList}</span>
        </div>
        <div class="teachings-stat-box" style="border-left: 3px solid var(--color-gold);">
          <span class="teachings-stat-label">Who Was Being Taught</span>
          <span class="teachings-stat-value" style="font-size: 0.8rem; line-height: 1.45;">${audienceList}</span>
        </div>
      </div>

      <div class="teachings-card teachings-card-gold">
        <div class="teachings-card-title">
          <span>📜</span>
          <span>What Was Taught Across the Book of Mormon</span>
        </div>
        <div class="teachings-card-body">
          ${globalDossier ? globalDossier.whatWasTaught : 'The Fulness of the Everlasting Gospel of Jesus Christ: the reality of His Resurrection and Atonement; faith, repentance, baptism, and the Holy Ghost; moral agency and the Fall of Adam; and enduring in holiness to the end.'}
        </div>
      </div>

      <div class="teachings-card teachings-card-crimson">
        <div class="teachings-card-title">
          <span>🎯</span>
          <span>Why It Was Taught (Title Page Covenant Mandate)</span>
        </div>
        <div class="teachings-card-body">
          ${globalDossier ? globalDossier.whyTaught : 'To show unto the remnant of the house of Israel what great things the Lord hath done for their fathers; and to the convincing of the Jew and Gentile that Jesus is the Christ, the Eternal God.'}
        </div>
      </div>

      <div class="teachings-card teachings-card-bronze">
        <div class="teachings-card-title">
          <span>🏛️</span>
          <span>Historical, Geographic & Cultural Context</span>
        </div>
        <div class="teachings-card-body">
          ${globalDossier ? globalDossier.context : 'Over 2,600 years of sacred history (~2200 BC to AD 421) across the ancient Americas—spanning ocean crossings, temple-building, river valleys, the Narrow Neck, and the Hill Cumorah.'}
        </div>
      </div>

      <div class="teachings-card teachings-card-sage">
        <div class="teachings-card-title">
          <span>🤝</span>
          <span>How the Teachings Were Accepted & Societal Impact</span>
        </div>
        <div class="teachings-card-body">
          ${globalDossier ? globalDossier.howAccepted : 'Produced the golden era of 4 Nephi (200 years of unbroken peace and unity) and the covenant pacifism of the Anti-Nephi-Lehies, while warning against the destruction caused by pride and secret combinations.'}
        </div>
      </div>

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
          <span>Internal Geography vs. External Theories</span>
        </div>
        <div class="teachings-card-body" style="font-size:0.83rem; line-height:1.55;">
          <p style="margin-bottom:0.4rem;">
            This interactive atlas is designed strictly around the <strong>internal textual relationships</strong>, distance metrics (e.g. 'one day and a half's journey'), directional flows (River Sidon flowing north to the sea), and topographical alterations described by the ancient prophet-historians.
          </p>
          <p style="margin:0;">
            The Church emphasizes that while historical and geographic study is interesting, theories identifying external locations (such as Mesoamerica, the Heartland, or South America) are fascinating hypotheses but not official Church doctrine.
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
    });
  }

  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', () => {
      detailSidebar.classList.add('closed');
    });
  }

  if (brandLogoBtn) {
    brandLogoBtn.addEventListener('click', () => {
      fitMapToScreen();
      renderWelcomeSidebar();
      detailSidebar.classList.remove('closed');
    });
  }

  // ==========================================================================
  // GLOBAL SEARCH & LIVE AUTOCOMPLETE
  // ==========================================================================
  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (!query) {
        clearSearchBtn.style.display = 'none';
        searchResultsDropdown.style.display = 'none';
        return;
      }

      clearSearchBtn.style.display = 'block';

      const matches = Object.values(mapLocations).filter(loc => {
        if (loc.name.toLowerCase().includes(query)) return true;
        if (loc.summary && loc.summary.toLowerCase().includes(query)) return true;
        if (loc.region && loc.region.toLowerCase().includes(query)) return true;
        if (loc.notablePeople && loc.notablePeople.some(p => p.toLowerCase().includes(query))) return true;
        if (loc.refs && loc.refs.some(r => r.ref.toLowerCase().includes(query) || r.text.toLowerCase().includes(query))) return true;
        return false;
      }).slice(0, 10);

      if (matches.length === 0) {
        searchResultsDropdown.innerHTML = `<div style="padding: 0.75rem 1rem; font-size: 0.8rem; color: var(--text-muted);">No locations found matching "${query}"</div>`;
      } else {
        searchResultsDropdown.innerHTML = '';
        matches.forEach(loc => {
          const item = document.createElement('div');
          item.className = 'search-result-item';
          item.innerHTML = `
            <div class="search-result-left">
              <span class="search-result-title">${loc.name}</span>
              <span class="search-result-meta">${loc.region}</span>
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
      opt.textContent = `${loc.name} (${loc.category})`;
      quickJumpSelect.appendChild(opt);
    });

    quickJumpSelect.addEventListener('change', (e) => {
      if (e.target.value) {
        selectLocation(e.target.value);
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

  function startTour(tourId) {
    currentJourney = mapJourneys.find(j => j.id === tourId);
    if (!currentJourney) return;

    currentStageIndex = 0;
    renderTourPaths(currentJourney);

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
    path.setAttribute('class', 'active-journey-path');
    pathsGroup.appendChild(path);

    // Waypoint dots
    coordsList.forEach((c, idx) => {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', c.x);
      circle.setAttribute('cy', c.y);
      circle.setAttribute('r', '8');
      circle.setAttribute('fill', '#FFFDF9');
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
    if (stepperStepNote) stepperStepNote.textContent = stage.note || loc.summary;

    if (tourPrevStepBtn) tourPrevStepBtn.disabled = (index === 0);
    if (tourNextStepBtn) {
      tourNextStepBtn.textContent = (index === currentJourney.stages.length - 1) ? 'Finish Tour' : 'Next ▶';
    }

    if (loc) {
      selectLocation(loc.id);
    }
  }

  if (tourPrevStepBtn) {
    tourPrevStepBtn.addEventListener('click', () => {
      if (currentStageIndex > 0) goToTourStage(currentStageIndex - 1);
    });
  }

  if (tourNextStepBtn) {
    tourNextStepBtn.addEventListener('click', () => {
      if (currentJourney && currentStageIndex < currentJourney.stages.length - 1) {
        goToTourStage(currentStageIndex + 1);
      } else {
        exitTour();
      }
    });
  }

  if (tourExitBtn) {
    tourExitBtn.addEventListener('click', exitTour);
  }

  function exitTour() {
    currentJourney = null;
    currentStageIndex = 0;
    if (pathsGroup) pathsGroup.innerHTML = '';
    if (tourStepperBar) tourStepperBar.style.display = 'none';
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

    // Update active Era Tab
    eraTabs.forEach(tab => {
      const tabStep = parseInt(tab.getAttribute('data-step'), 10);
      tab.classList.toggle('active', tabStep === step || (step >= tabStep && step < tabStep + 4));
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

  // Close modals on backdrop click
  [tourModal, oldWorldModal, disclaimerModal].forEach(m => {
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

  viewport.addEventListener('mousemove', (e) => {
    if (!isInspectorActive) return;
    const rect = viewport.getBoundingClientRect();
    const vX = e.clientX - rect.left;
    const vY = e.clientY - rect.top;

    const imgX = (vX - translateX) / scale;
    const imgY = (vY - translateY) / scale;

    const pctX = ((imgX / MAP_BASE_WIDTH) * 100).toFixed(1);
    const pctY = ((imgY / MAP_BASE_HEIGHT) * 100).toFixed(1);

    if (pctX >= 0 && pctX <= 100 && pctY >= 0 && pctY <= 100) {
      lastHoveredPct = { x: pctX, y: pctY };
      coordsBadgeText.innerHTML = `Map Pos: X: ${pctX}% | Y: ${pctY}%`;
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
  viewport.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.map-pin') || e.target.closest('.floating-btn') || e.target.closest('.map-legend-box')) {
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
    if (!isDragging) return;
    const dx = e.clientX - startPointerX;
    const dy = e.clientY - startPointerY;
    translateX = startTranslateX + dx;
    translateY = startTranslateY + dy;
    applyTransform();
  });

  viewport.addEventListener('pointerup', (e) => {
    if (isDragging) {
      isDragging = false;
      try { viewport.releasePointerCapture(e.pointerId); } catch (_) {}
    }
  });

  viewport.addEventListener('pointercancel', (e) => {
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

  // Touch Gesture Pinch
  viewport.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
      touchStartDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchStartScale = scale;
    }
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      if (touchStartDist > 0) {
        const factor = dist / touchStartDist;
        scale = Math.min(Math.max(touchStartScale * factor, minScale), maxScale);
        applyTransform();
      }
    }
  }, { passive: true });

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (document.activeElement === globalSearchInput) return;

    if (e.key === 'Escape') {
      if (detailSidebar && !detailSidebar.classList.contains('closed')) {
        detailSidebar.classList.add('closed');
      }
      [tourModal, oldWorldModal, disclaimerModal].forEach(m => m && closeModal(m));
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
