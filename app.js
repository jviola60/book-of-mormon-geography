/**
 * Book of Mormon Interactive Cartography Engine
 * Handles smooth pan & zoom, 50+ scriptural locations, territory polygons, and 12-tour expedition player
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const viewport = document.getElementById('mapViewport');
  const stage = document.getElementById('mapStage');
  const mapImage = document.getElementById('mapImage');
  const markersLayer = document.getElementById('markersLayer');
  const journeySvg = document.getElementById('journeySvg');
  const territoryGroup = document.getElementById('territoryGroup');
  const pathsGroup = document.getElementById('pathsGroup');
  const cataclysmTerrainGroup = document.getElementById('cataclysmTerrainGroup');
  const codexDrawer = document.getElementById('codexDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const coordsInspectorBadge = document.getElementById('coordsInspectorBadge');
  const coordsBadgeText = document.getElementById('coordsBadgeText');
  const toggleInspectorBtn = document.getElementById('toggleInspectorBtn');
  const inspectorBtnText = document.getElementById('inspectorBtnText');
  const copyToast = document.getElementById('copyToast');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const journeySelect = document.getElementById('journeySelect');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const introToast = document.getElementById('introToast');
  const dismissIntroBtn = document.getElementById('dismissIntroBtn');
  const siteCountBadge = document.getElementById('siteCountBadge');

  // Expedition Player Elements
  const expeditionPlayerBar = document.getElementById('expeditionPlayerBar');
  const expeditionTitle = document.getElementById('expeditionTitle');
  const expeditionSubtitle = document.getElementById('expeditionSubtitle');
  const expeditionStepNote = document.getElementById('expeditionStepNote');
  const expStepIndicator = document.getElementById('expStepIndicator');
  const expPrevBtn = document.getElementById('expPrevBtn');
  const expNextBtn = document.getElementById('expNextBtn');
  const expExitBtn = document.getElementById('expExitBtn');

  // Scripture Reader Modal Elements (Church of Jesus Christ Official Scriptures)
  const scriptureModal = document.getElementById('scriptureModal');
  const scriptureModalBackdrop = document.getElementById('scriptureModalBackdrop');
  const closeScriptureModalBtn = document.getElementById('closeScriptureModal');
  const scriptureModalTitle = document.getElementById('scriptureModalTitle');
  const scriptureExternalLink = document.getElementById('scriptureExternalLink');
  const scriptureFooterLink = document.getElementById('scriptureFooterLink');
  const scriptureIframe = document.getElementById('scriptureIframe');
  const scriptureLoading = document.getElementById('scriptureLoading');

  // Cataclysm HUD & Era Slider Elements
  const cataclysmHud = document.getElementById('cataclysmHud');
  const cataclysmIcon = document.getElementById('cataclysmIcon');
  const cataclysmTitle = document.getElementById('cataclysmTitle');
  const cataclysmSubtitle = document.getElementById('cataclysmSubtitle');
  const cataclysmQuickToggle = document.getElementById('cataclysmQuickToggle');
  const eraSlider = document.getElementById('eraSlider');
  const eraSteps = document.querySelectorAll('.era-step');
  const drawerFateSection = document.getElementById('drawerFateSection');
  const drawerFateCard = document.getElementById('drawerFateCard');

  // Zoom control buttons
  const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomOutBtn = document.getElementById('zoomOutBtn');
  const resetZoomBtn = document.getElementById('resetZoomBtn');

  // Transform State
  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  const minScale = 0.45;
  const maxScale = 3.5;

  // Dragging State
  let isDragging = false;
  let startPointerX = 0;
  let startPointerY = 0;
  let startTranslateX = 0;
  let startTranslateY = 0;
  let activeLocationId = null;
  let isInspectorActive = false;
  let lastHoveredPct = { x: 50.0, y: 50.0 };

  // Active Journey State
  let currentJourney = null;
  let currentStageIndex = 0;

  // Touch gesture pinch state
  let touchStartDist = 0;
  let touchStartScale = 1;

  // Gentle Audio Feedback
  function playGentleChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880.0, ctx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch (_) {}
  }

  // Robust Clipboard Copy Function
  function copyCoordinatesToClipboard(x, y) {
    const coordString = `{ x: ${x}, y: ${y} }`;

    const triggerToast = () => {
      playGentleChime();
      copyToast.textContent = `Copied ${coordString} to clipboard!`;
      copyToast.classList.add('show');
      if (coordsBadgeText) {
        coordsBadgeText.innerHTML = `<strong>Copied!</strong> ${coordString}`;
      }
      setTimeout(() => {
        copyToast.classList.remove('show');
        if (coordsBadgeText && isInspectorActive) {
          coordsBadgeText.innerHTML = `<strong>Map Pos:</strong> X: ${lastHoveredPct.x}% | Y: ${lastHoveredPct.y}%`;
        }
      }, 2200);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(coordString)
        .then(triggerToast)
        .catch(() => {
          fallbackCopyText(coordString, triggerToast);
        });
    } else {
      fallbackCopyText(coordString, triggerToast);
    }
  }

  function fallbackCopyText(text, callback) {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      if (successful && callback) callback();
    } catch (_) {}
  }

  // Icons SVG map
  const icons = {
    temple: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 9h3v11h4v-6h6v6h4V9h3L12 2zm0 3.5l4.5 3.15H7.5L12 5.5z"/></svg>`,
    records: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 2H6c-1.2 0-2 .8-2 2v16c0 1.2.8 2 2 2h13c1.1 0 2-.9 2-2V4c0-1.2-.9-2-2-2zm0 18H6V4h2v8l2.5-1.5L13 12V4h6v16z"/></svg>`,
    christ: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V18h-2v-1.07c-1.32-.25-2.45-.98-3-2.14l1.66-1.11c.36.77 1.05 1.25 1.84 1.31v-3.03l-2-.52C8.36 11.15 7.5 10.15 7.5 9c0-1.74 1.3-3.17 3-3.43V4h2v1.57c1.3.25 2.37.95 2.92 2.05l-1.66 1.11c-.34-.67-.93-1.12-1.68-1.2v2.85l2 .53c1.23.33 2.12 1.38 2.12 2.59 0 1.76-1.35 3.2-3.2 3.43z"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 2.18l6 2.25v4.66c0 4.1-2.67 7.9-6 8.91-3.33-1.01-6-4.81-6-8.91V6.43l6-2.25z"/></svg>`,
    fort: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 4h-3V2h-2v2h-2V2h-2v2h-2V2H8v2H6V2H4v2H3c-1.1 0-2 .9-2 2v15h22V6c0-1.1-.9-2-2-2zm0 15H3V6h18v13z"/></svg>`,
    fountain: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C10.5 5.5 8 9.5 8 13c0 2.21 1.79 4 4 4s4-1.79 4-4c0-3.5-2.5-7.5-4-10zm0 18c-4.41 0-8-1.79-8-4 0-.96.67-1.84 1.8-2.5l1.07 1.68C6.31 16.5 6 16.74 6 17c0 .93 2.51 2 6 2s6-1.07 6-2c0-.26-.31-.5-.87-.82l1.07-1.68c1.13.66 1.8 1.54 1.8 2.5 0 2.21-3.59 4-8 4z"/></svg>`,
    crown: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-1h14v1z"/></svg>`,
    ruins: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-4L12 2 9 4H5c-1.1 0-2 .9-2 2v14h18V6c0-1.1-.9-2-2-2zm-1 14H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V8h12v2z"/></svg>`,
    mountain: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2L9 12.67 4 19h16L14 6z"/></svg>`,
    chokepoint: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 3L5 7h3v6H5l4 4 4-4h-3V7h3L9 3zm6 18l4-4h-3v-6h3l-4-4-4 4h3v6h-3l4 4z"/></svg>`,
    waves: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4c-2.8 0-4.2 1.5-6.5 1.5C3.2 5.5 2 4.4 2 4.4L1 6s1.6 1.5 4.5 1.5c2.8 0 4.2-1.5 6.5-1.5 2.3 0 3.7 1.5 6.5 1.5 2.9 0 4.5-1.5 4.5-1.5l-1-1.6s-1.2 1.1-3.5 1.1c-2.3 0-3.7-1.5-6.5-1.5zm0 6c-2.8 0-4.2 1.5-6.5 1.5C3.2 11.5 2 10.4 2 10.4L1 12s1.6 1.5 4.5 1.5c2.8 0 4.2-1.5 6.5-1.5 2.3 0 3.7 1.5 6.5 1.5 2.9 0 4.5-1.5 4.5-1.5l-1-1.6s-1.2 1.1-3.5 1.1c-2.3 0-3.7-1.5-6.5-1.5zm0 6c-2.8 0-4.2 1.5-6.5 1.5-2.3 0-3.5-1.1-3.5-1.1L1 18s1.6 1.5 4.5 1.5c2.8 0 4.2-1.5 6.5-1.5 2.3 0 3.7 1.5 6.5 1.5 2.9 0 4.5-1.5 4.5-1.5l-1-1.6s-1.2 1.1-3.5 1.1c-2.3 0-3.7-1.5-6.5-1.5z"/></svg>`,
    divider: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h18c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1zm3-6l-3 4 3 4V7zm12 0v8l3-4-3-4z"/></svg>`,
    sword: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.92 5h2.16L19 14.92V17l-2.08 2.08L14.84 17l-1.42 1.41-1.41-1.41 1.41-1.42-2.12-2.12L7 17.66l-2-2 4.24-4.24L7.12 9.3 5.71 10.71 4.29 9.3l1.42-1.41L3.63 5.81 5.71 3.73l2.08 2.08H6.92z"/></svg>`,
    covenant: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    default: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`
  };

  /**
   * Initialize and center map
   */
  function initMap() {
    const totalCount = Object.keys(mapLocations).length;
    if (siteCountBadge) {
      siteCountBadge.textContent = `${totalCount} Sites`;
    }

    if (mapImage.complete) {
      fitMapToScreen();
      renderTerritoryPolygons();
      renderCataclysmTerrain();
      renderMarkers();
      setupJourneys();
      setupLandmarksQuickJump();
      setupCataclysmHud();
    } else {
      mapImage.onload = () => {
        fitMapToScreen();
        renderTerritoryPolygons();
        renderCataclysmTerrain();
        renderMarkers();
        setupJourneys();
        setupLandmarksQuickJump();
        setupCataclysmHud();
      };
    }
  }

  /**
   * Fit map nicely to the center of the viewport
   */
  function fitMapToScreen() {
    const vWidth = viewport.clientWidth;
    const vHeight = viewport.clientHeight;
    const imgWidth = mapImage.naturalWidth || 848;
    const imgHeight = mapImage.naturalHeight || 1264;

    const scaleX = (vWidth * 0.88) / imgWidth;
    const scaleY = (vHeight * 0.90) / imgHeight;
    scale = Math.min(scaleX, scaleY);
    scale = Math.max(minScale, Math.min(scale, 1.4));

    translateX = (vWidth - (imgWidth * scale)) / 2;
    translateY = (vHeight - (imgHeight * scale)) / 2;

    applyTransform();
  }

  /**
   * Apply CSS transform to the map stage
   */
  function applyTransform() {
    stage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  }

  /**
   * Zoom by delta at a specific pivot screen coordinate
   */
  function zoomAtPoint(delta, clientX, clientY) {
    const rect = viewport.getBoundingClientRect();
    const pivotX = clientX - rect.left;
    const pivotY = clientY - rect.top;

    const newScale = Math.max(minScale, Math.min(maxScale, scale * delta));
    if (newScale === scale) return;

    translateX = pivotX - (pivotX - translateX) * (newScale / scale);
    translateY = pivotY - (pivotY - translateY) * (newScale / scale);
    scale = newScale;

    applyTransform();
  }

  /**
   * Render Interactive Territory Polygons
   */
  function renderTerritoryPolygons() {
    territoryGroup.innerHTML = '';
    const imgWidth = mapImage.naturalWidth || 848;
    const imgHeight = mapImage.naturalHeight || 1264;

    journeySvg.setAttribute('viewBox', `0 0 ${imgWidth} ${imgHeight}`);

    Object.values(mapLocations).forEach(loc => {
      if (!loc.territoryPolygon || loc.territoryPolygon.length < 3) return;

      const pointsStr = loc.territoryPolygon.map(p => {
        const x = (p.x / 100) * imgWidth;
        const y = (p.y / 100) * imgHeight;
        return `${x},${y}`;
      }).join(' ');

      const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      polygon.setAttribute('points', pointsStr);
      polygon.setAttribute('class', 'territory-polygon');
      polygon.dataset.id = loc.id;
      polygon.dataset.category = loc.category;

      polygon.addEventListener('click', (e) => {
        e.stopPropagation();
        openCodex(loc.id);
      });

      polygon.addEventListener('mouseenter', () => {
        const marker = document.querySelector(`.map-marker[data-id="${loc.id}"]`);
        if (marker) marker.classList.add('active');
      });

      polygon.addEventListener('mouseleave', () => {
        const marker = document.querySelector(`.map-marker[data-id="${loc.id}"]`);
        if (marker && activeLocationId !== loc.id) marker.classList.remove('active');
      });

      territoryGroup.appendChild(polygon);
    });
  }

  /**
   * Render markers onto the markersLayer
   */
  function renderMarkers() {
    markersLayer.innerHTML = '';

    Object.values(mapLocations).forEach(loc => {
      const marker = document.createElement('div');
      marker.className = 'map-marker';
      marker.dataset.id = loc.id;
      marker.dataset.category = loc.category;
      marker.dataset.size = loc.highlightSize || 'medium';
      marker.dataset.glow = loc.glowColor || 'gold';
      if (loc.isScripturalAddition) {
        marker.dataset.addition = 'true';
      }
      if (loc.fate3Nephi) {
        marker.dataset.fate = loc.fate3Nephi.type;
      }
      marker.style.left = `${loc.coords.x}%`;
      marker.style.top = `${loc.coords.y}%`;

      const iconSvg = icons[loc.icon] || icons.default;

      marker.innerHTML = `
        <div class="marker-inner">
          <div class="marker-pulse"></div>
          <div class="marker-pin">${iconSvg}</div>
          <div class="marker-label">${loc.name}</div>
        </div>
        <div class="hover-card">
          <div class="hover-card-title">${loc.name}</div>
          <div class="hover-card-subtitle">${loc.title}</div>
          <div class="hover-card-text">${loc.summary.substring(0, 140)}...</div>
          <div class="hover-card-footer">
            <span>${loc.region}</span>
            <span>Click for Codex</span>
          </div>
        </div>
      `;

      // Marker click event
      marker.addEventListener('click', (e) => {
        e.stopPropagation();
        // If searching, reset search to view marker clearly
        if (searchInput.value.trim().length > 0) {
          clearSearch();
        }
        openCodex(loc.id);
      });

      markersLayer.appendChild(marker);
    });
  }

  /**
   * Open Codex Drawer with details
   */
  function openCodex(id) {
    const loc = mapLocations[id];
    if (!loc) return;

    activeLocationId = id;

    // Update active marker styling
    document.querySelectorAll('.map-marker').forEach(m => {
      m.classList.toggle('active', m.dataset.id === id);
    });

    // Populate drawer contents
    document.getElementById('drawerCategory').innerText = loc.category.toUpperCase();
    document.getElementById('drawerTitle').innerText = loc.name;
    document.getElementById('drawerSubtitle').innerText = loc.title;
    document.getElementById('drawerSummary').innerText = loc.summary;

    // 3 Nephi Cataclysm Fate Card
    if (loc.fate3Nephi && drawerFateSection && drawerFateCard) {
      drawerFateSection.classList.remove('fate-section-hidden');
      const fateIcons = {
        burned: '🔥',
        sunk_sea: '🌊',
        waters: '💧',
        mountain: '⛰️',
        sunk_earth: '🕳️',
        earth: '🌋',
        sanctuary: '☀️'
      };
      const fateIcon = fateIcons[loc.fate3Nephi.type] || '⚡';
      drawerFateCard.className = `drawer-fate-card ${loc.fate3Nephi.type === 'sanctuary' ? 'sanctuary' : ''}`;
      drawerFateCard.innerHTML = `
        <div class="fate-icon">${fateIcon}</div>
        <div class="fate-details">
          <div class="fate-badge">${loc.fate3Nephi.label}</div>
          <div class="fate-verse">Recorded in <strong>${loc.fate3Nephi.verse}</strong> at the Crucifixion of Christ.</div>
        </div>
      `;
    } else if (drawerFateSection) {
      drawerFateSection.classList.add('fate-section-hidden');
    }

    // References
    const refsList = document.getElementById('drawerRefs');
    refsList.innerHTML = '';
    if (loc.refs && loc.refs.length > 0) {
      loc.refs.forEach(ref => {
        const item = document.createElement('div');
        item.className = 'ref-item';
        const churchUrl = getChurchScriptureUrl(ref.ref);
        
        item.innerHTML = `
          <div class="ref-header">
            <div class="ref-citation" title="Click to read chapter on Church of Jesus Christ website">
              ${ref.ref}
            </div>
            ${churchUrl ? `<button class="btn-read-scripture" title="Read in context on Church of Jesus Christ website">📖 Read Chapter</button>` : ''}
          </div>
          <div class="ref-text">"${ref.text}"</div>
        `;

        if (churchUrl) {
          const btn = item.querySelector('.btn-read-scripture');
          const citation = item.querySelector('.ref-citation');
          const openHandler = (e) => {
            e.stopPropagation();
            openScriptureModal(ref.ref, ref.text, churchUrl);
          };
          if (btn) btn.addEventListener('click', openHandler);
          if (citation) citation.addEventListener('click', openHandler);
        }
        refsList.appendChild(item);
      });
    }

    // Historical Events
    const eventsList = document.getElementById('drawerEvents');
    eventsList.innerHTML = '';
    if (loc.historicalEvents && loc.historicalEvents.length > 0) {
      loc.historicalEvents.forEach(evt => {
        const bullet = document.createElement('div');
        bullet.className = 'event-bullet';
        bullet.innerText = evt;
        eventsList.appendChild(bullet);
      });
    }

    // Notable People
    const peopleTags = document.getElementById('drawerPeople');
    peopleTags.innerHTML = '';
    if (loc.notablePeople && loc.notablePeople.length > 0) {
      loc.notablePeople.forEach(person => {
        const tag = document.createElement('span');
        tag.className = 'person-tag';
        tag.innerText = person;
        peopleTags.appendChild(tag);
      });
    }

    // Open drawer
    codexDrawer.classList.add('open');

    // Pan map to bring landmark toward comfortable view
    focusLocation(loc.coords.x, loc.coords.y);
  }

  /**
   * Smoothly pan to focus a location
   */
  function focusLocation(targetPctX, targetPctY, customScale) {
    const vWidth = viewport.clientWidth;
    const vHeight = viewport.clientHeight;
    const imgWidth = mapImage.naturalWidth || 848;
    const imgHeight = mapImage.naturalHeight || 1264;

    const targetX = (targetPctX / 100) * imgWidth;
    const targetY = (targetPctY / 100) * imgHeight;

    const offsetX = window.innerWidth > 900 ? vWidth * 0.35 : vWidth * 0.5;
    const offsetY = vHeight * 0.5;

    if (customScale) {
      scale = customScale;
    } else if (scale < 1.35) {
      scale = 1.35;
    }

    translateX = offsetX - (targetX * scale);
    translateY = offsetY - (targetY * scale);

    applyTransform();
  }

  /**
   * Close Codex Drawer
   */
  function closeCodex() {
    codexDrawer.classList.remove('open');
    activeLocationId = null;
    document.querySelectorAll('.map-marker').forEach(m => m.classList.remove('active'));
  }

  drawerCloseBtn.addEventListener('click', closeCodex);

  /**
   * Setup Quick Jump Selector & Autocomplete Datalist for All Landmarks
   */
  const landmarkQuickJump = document.getElementById('landmarkQuickJump');
  const landmarksList = document.getElementById('landmarksList');

  function setupLandmarksQuickJump() {
    const sortedLocs = Object.values(mapLocations).sort((a, b) => a.name.localeCompare(b.name));

    if (landmarkQuickJump) {
      landmarkQuickJump.innerHTML = `<option value="">-- Jump to Landmark (${sortedLocs.length}) --</option>`;
      sortedLocs.forEach(loc => {
        const opt = document.createElement('option');
        opt.value = loc.id;
        opt.textContent = `${loc.name} (${loc.region || loc.category})`;
        landmarkQuickJump.appendChild(opt);
      });

      landmarkQuickJump.addEventListener('change', (e) => {
        const id = e.target.value;
        if (!id) return;
        const loc = mapLocations[id];
        if (!loc) return;
        focusLocation(loc.coords.x, loc.coords.y, 1.6);
        openCodex(id);
      });
    }

    if (landmarksList) {
      landmarksList.innerHTML = '';
      // 1. Add all location names
      sortedLocs.forEach(loc => {
        const opt = document.createElement('option');
        opt.value = loc.name;
        landmarksList.appendChild(opt);
      });

      // 2. Add notable scriptural groups and peoples
      const scripturalSuggestions = [
        "Anti-Nephi-Lehies (People of Ammon)",
        "Anti-Lehi-Nephites (People of Ammon)",
        "2,000 Stripling Warriors (Sons of Helaman)",
        "People of Ammon (Ammonites)",
        "Nephites",
        "Lamanites",
        "Jaredites",
        "Zoramites",
        "Amlicites",
        "Amalekites",
        "Gadianton Robbers",
        "Captain Moroni",
        "Helaman",
        "Ammon",
        "King Anti-Nephi-Lehi",
        "Alma the Younger",
        "Amulek",
        "King Benjamin",
        "King Mosiah",
        "King Noah",
        "Abinadi",
        "Mormon",
        "Moroni",
        "Coriantumr",
        "Ether",
        "Shiz",
        "Brother of Jared (Maholnahri Moriancumer)",
        "Lehi",
        "Nephi",
        "Samuel the Lamanite",
        "Zeezrom",
        "Waters of Jerusalem (3 Nephi 9:7)",
        "Mount Moronihah (3 Nephi 9:5)",
        "Waters of Ripliancum (Ether 15:8)",
        "Hill Ramah / Cumorah (Ether 15:11)"
      ];

      scripturalSuggestions.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item;
        landmarksList.appendChild(opt);
      });
    }
  }

  /**
   * Render dynamic physical terrain transformations (3 Nephi 8–10 Cataclysm)
   * Waters cast up in place of Jerusalem, Onihah, Mocum;
   * Sunk into the sea at Moroni;
   * Earth carried up forming a great mountain at Moronihah;
   * Sunken earth chasms & valleys at Gilgal, Gadiandi, Gadiomnah, Jacob, Gimgimno;
   * Scorched ruins at Zarahemla, Jacobugath, Kishkumen;
   * Sanctuary at Bountiful.
   */
  function renderCataclysmTerrain() {
    if (!cataclysmTerrainGroup) return;
    cataclysmTerrainGroup.innerHTML = '';

    const imgW = mapImage.naturalWidth || 2120;
    const imgH = mapImage.naturalHeight || 3160;
    const px = pct => (pct / 100) * imgW;
    const py = pct => (pct / 100) * imgH;

    // Dynamically retrieve exact coordinates from mapLocations
    const getCoords = (id, defaultX, defaultY) => {
      const loc = (typeof mapLocations !== 'undefined' && mapLocations[id]) ? mapLocations[id] : null;
      if (loc && loc.coords) return { x: px(loc.coords.x), y: py(loc.coords.y) };
      return { x: px(defaultX), y: py(defaultY) };
    };

    // Waters of Jerusalem (3 Nephi 9:7)
    const jCoords = getCoords('city_of_jerusalem', 46.1, 94.0);
    const jx = jCoords.x, jy = jCoords.y;
    // Waters of Onihah (3 Nephi 9:7)
    const oCoords = getCoords('city_of_onihah', 47.0, 64.0);
    const ox = oCoords.x, oy = oCoords.y;
    // Waters of Mocum (3 Nephi 9:7)
    const mCoords = getCoords('city_of_mocum', 38.5, 68.0);
    const mx = mCoords.x, my = mCoords.y;
    // Moroni Sunk in Sea (3 Nephi 8:9, 9:4)
    const mrCoords = getCoords('city_of_moroni', 91.0, 66.8);
    const mrx = mrCoords.x, mry = mrCoords.y;
    // Mount Moronihah (3 Nephi 8:10, 9:5)
    const mhCoords = getCoords('city_of_moronihah', 58.5, 56.5);
    const mhx = mhCoords.x, mhy = mhCoords.y;
    // Chasms & Sunken Valleys (3 Nephi 9:6, 8):
    const gCoords = getCoords('city_of_gilgal', 71.0, 16.5);
    const gx = gCoords.x, gy = gCoords.y;
    const gdCoords = getCoords('city_of_gadiandi', 35.0, 48.0);
    const gdx = gdCoords.x, gdy = gdCoords.y;
    const goCoords = getCoords('city_of_gadiomnah', 31.0, 52.0);
    const gox = goCoords.x, goy = goCoords.y;
    const jcCoords = getCoords('city_of_jacob', 40.0, 57.0);
    const jcx = jcCoords.x, jcy = jcCoords.y;
    const ggCoords = getCoords('city_of_gimgimno', 44.0, 54.0);
    const ggx = ggCoords.x, ggy = ggCoords.y;
    // Scorched Ruin Sites (3 Nephi 9:9-10):
    const zCoords = getCoords('zarahemla', 45.5, 51.3);
    const zx = zCoords.x, zy = zCoords.y;
    const juCoords = getCoords('city_of_jacobugath', 68.0, 11.0);
    const jux = juCoords.x, juy = juCoords.y;
    const kCoords = getCoords('city_of_kishkumen', 58.0, 64.5);
    const kx = kCoords.x, ky = kCoords.y;
    // Bountiful Sanctuary (3 Nephi 11:1):
    const bCoords = getCoords('bountiful', 64.4, 39.7);
    const bx = bCoords.x, by = bCoords.y;

    const featuresHtml = `
      <!-- Waters of Jerusalem (3 Nephi 9:7 - Waters cast up in place thereof) -->
      <g class="terrain-feature terrain-feature-jerusalem" data-id="city_of_jerusalem" style="cursor: pointer;">
        <ellipse cx="${jx}" cy="${jy}" rx="110" ry="75" fill="#f4ebd9" stroke="#bfa074" stroke-width="4" />
        <ellipse cx="${jx}" cy="${jy}" rx="130" ry="90" class="terrain-water-ripple" />
        <path d="M ${jx - 105},${jy - 12} C ${jx - 110},${jy - 60} ${jx - 40},${jy - 70} ${jx + 30},${jy - 62} C ${jx + 88},${jy - 66} ${jx + 110},${jy - 26} ${jx + 104},${jy + 26} C ${jx + 94},${jy + 66} ${jx + 18},${jy + 75} ${jx - 52},${jy + 66} C ${jx - 96},${jy + 54} ${jx - 102},${jy + 18} ${jx - 105},${jy - 12} Z" class="terrain-water-body" />
        <path d="M ${jx - 55},${jy - 22} Q ${jx},${jy - 35} ${jx + 55},${jy - 22}" stroke="#caf0f8" stroke-width="3.5" fill="none" opacity="0.9" />
        <path d="M ${jx - 65},${jy + 18} Q ${jx - 8},${jy + 5} ${jx + 50},${jy + 18}" stroke="#caf0f8" stroke-width="3.5" fill="none" opacity="0.85" />
        <text x="${jx}" y="${jy + 42}" class="terrain-label water-label">WATERS OF JERUSALEM</text>
      </g>

      <!-- Waters of Onihah (3 Nephi 9:7 - Inundated with waters) -->
      <g class="terrain-feature terrain-feature-onihah" data-id="city_of_onihah" style="cursor: pointer;">
        <ellipse cx="${ox}" cy="${oy}" rx="85" ry="58" fill="#f4ebd9" stroke="#bfa074" stroke-width="4" />
        <ellipse cx="${ox}" cy="${oy}" rx="102" ry="72" class="terrain-water-ripple" />
        <path d="M ${ox - 80},${oy - 10} C ${ox - 85},${oy - 48} ${ox - 35},${oy - 56} ${ox + 18},${oy - 50} C ${ox + 62},${oy - 54} ${ox + 84},${oy - 22} ${ox + 78},${oy + 22} C ${ox + 70},${oy + 54} ${ox + 14},${oy + 60} ${ox - 40},${oy + 52} C ${ox - 74},${oy + 42} ${ox - 78},${oy + 16} ${ox - 80},${oy - 10} Z" class="terrain-water-body" />
        <path d="M ${ox - 42},${oy - 18} Q ${ox},${oy - 28} ${ox + 42},${oy - 18}" stroke="#caf0f8" stroke-width="3" fill="none" opacity="0.9" />
        <path d="M ${ox - 48},${oy + 14} Q ${ox - 6},${oy + 3} ${ox + 36},${oy + 14}" stroke="#caf0f8" stroke-width="3" fill="none" opacity="0.85" />
        <text x="${ox}" y="${oy + 34}" class="terrain-label water-label">WATERS OF ONIHAH</text>
      </g>

      <!-- Waters of Mocum (3 Nephi 9:7 - Inundated with waters) -->
      <g class="terrain-feature terrain-feature-mocum" data-id="city_of_mocum" style="cursor: pointer;">
        <ellipse cx="${mx}" cy="${my}" rx="78" ry="54" fill="#f4ebd9" stroke="#bfa074" stroke-width="4" />
        <ellipse cx="${mx}" cy="${my}" rx="94" ry="68" class="terrain-water-ripple" />
        <path d="M ${mx - 74},${my - 8} C ${mx - 78},${my - 44} ${mx - 30},${my - 52} ${mx + 16},${my - 46} C ${mx + 58},${my - 50} ${mx + 76},${my - 20} ${mx + 72},${my + 20} C ${mx + 64},${my + 48} ${mx + 12},${my + 54} ${mx - 36},${my + 48} C ${mx - 68},${my + 38} ${mx - 72},${my + 14} ${mx - 74},${my - 8} Z" class="terrain-water-body" />
        <path d="M ${mx - 36},${my - 16} Q ${mx},${my - 25} ${mx + 36},${my - 16}" stroke="#caf0f8" stroke-width="3" fill="none" opacity="0.9" />
        <path d="M ${mx - 44},${my + 12} Q ${mx - 4},${my + 3} ${mx + 32},${my + 12}" stroke="#caf0f8" stroke-width="3" fill="none" opacity="0.85" />
        <text x="${mx}" y="${my + 32}" class="terrain-label water-label">WATERS OF MOCUM</text>
      </g>

      <!-- City of Moroni Sunk into Depths of the Sea (3 Nephi 8:9, 9:4) -->
      <g class="terrain-feature terrain-feature-moroni" data-id="moroni" style="cursor: pointer;">
        <ellipse cx="${mrx}" cy="${mry}" rx="130" ry="95" class="terrain-water-ripple" />
        <path d="M ${mrx - 120},${mry - 30} C ${mrx - 110},${mry - 95} ${mrx - 30},${mry - 105} ${mrx + 50},${mry - 90} C ${mrx + 140},${mry - 80} ${mrx + 210},${mry - 40} ${mrx + 210},${mry + 70} C ${mrx + 190},${mry + 110} ${mrx + 100},${mry + 120} ${mrx + 10},${mry + 110} C ${mrx - 70},${mry + 100} ${mrx - 115},${mry + 60} ${mrx - 120},${mry - 30} Z" class="terrain-ocean-swell" />
        <path d="M ${mrx - 75},${mry - 18} Q ${mrx - 10},${mry - 40} ${mrx + 70},${mry - 18}" stroke="#ade8f4" stroke-width="4" fill="none" />
        <path d="M ${mrx - 95},${mry + 30} Q ${mrx},${mry + 8} ${mrx + 85},${mry + 30}" stroke="#ade8f4" stroke-width="4" fill="none" />
        <text x="${mrx}" y="${mry + 52}" class="terrain-label ocean-label">MORONI (SUNK IN SEA)</text>
      </g>

      <!-- Mount Moronihah (Mountain Formed in Place of City - 3 Nephi 8:10, 9:5) -->
      <g class="terrain-feature terrain-feature-moronihah" data-id="city_of_moronihah" style="cursor: pointer;">
        <polygon points="${mhx},${mhy - 120} ${mhx - 130},${mhy + 55} ${mhx + 130},${mhy + 55}" class="terrain-mountain-peak" />
        <polygon points="${mhx - 70},${mhy - 75} ${mhx - 150},${mhy + 55} ${mhx - 10},${mhy + 55}" class="terrain-mountain-peak" />
        <polygon points="${mhx + 70},${mhy - 85} ${mhx + 10},${mhy + 55} ${mhx + 150},${mhy + 55}" class="terrain-mountain-peak" />
        <polyline points="${mhx},${mhy - 120} ${mhx - 22},${mhy - 25} ${mhx - 130},${mhy + 55}" class="terrain-mountain-ridge" />
        <polyline points="${mhx},${mhy - 120} ${mhx + 28},${mhy - 20} ${mhx + 130},${mhy + 55}" class="terrain-mountain-ridge" />
        <line x1="${mhx}" y1="${mhy - 120}" x2="${mhx}" y2="${mhy + 55}" stroke="#fefae0" stroke-width="3" opacity="0.8" />
        <text x="${mhx}" y="${mhy + 80}" class="terrain-label mountain-label">MOUNT MORONIHAH</text>
      </g>

      <!-- Sunken Valleys & Earth Chasms (3 Nephi 9:6, 8) -->
      <g class="terrain-feature terrain-feature-gilgal" data-id="city_of_gilgal" style="cursor: pointer;">
        <polygon points="${gx},${gy - 45} ${gx + 70},${gy - 18} ${gx + 55},${gy + 35} ${gx - 45},${gy + 30} ${gx - 65},${gy - 12}" class="terrain-earth-chasm" />
        <polyline points="${gx - 55},${gy - 6} ${gx},${gy + 12} ${gx + 50},${gy + 24}" class="terrain-chasm-crack" />
        <text x="${gx}" y="${gy + 55}" class="terrain-label chasm-label">VALLEY OF GILGAL</text>
      </g>

      <g class="terrain-feature terrain-feature-gadiandi" data-id="city_of_gadiandi" style="cursor: pointer;">
        <polygon points="${gdx},${gdy - 40} ${gdx + 60},${gdy - 12} ${gdx + 45},${gdy + 30} ${gdx - 40},${gdy + 25} ${gdx - 55},${gdy - 12}" class="terrain-earth-chasm" />
        <polyline points="${gdx - 45},${gdy} ${gdx},${gdy + 10} ${gdx + 40},${gdy + 18}" class="terrain-chasm-crack" />
        <text x="${gdx}" y="${gdy + 48}" class="terrain-label chasm-label">GADIANDI CHASM</text>
      </g>

      <g class="terrain-feature terrain-feature-gadiomnah" data-id="city_of_gadiomnah" style="cursor: pointer;">
        <polygon points="${gox},${goy - 40} ${gox + 60},${goy - 12} ${gox + 45},${goy + 30} ${gox - 40},${goy + 25} ${gox - 55},${goy - 12}" class="terrain-earth-chasm" />
        <polyline points="${gox - 45},${goy} ${gox},${goy + 10} ${gox + 40},${goy + 18}" class="terrain-chasm-crack" />
        <text x="${gox}" y="${goy + 48}" class="terrain-label chasm-label">GADIOMNAH VALLEY</text>
      </g>

      <g class="terrain-feature terrain-feature-jacob" data-id="city_of_jacob" style="cursor: pointer;">
        <polygon points="${jcx},${jcy - 40} ${jcx + 60},${jcy - 12} ${jcx + 45},${jcy + 30} ${jcx - 40},${jcy + 25} ${jcx - 55},${jcy - 12}" class="terrain-earth-chasm" />
        <polyline points="${jcx - 45},${jcy} ${jcx},${jcy + 10} ${jcx + 40},${jcy + 18}" class="terrain-chasm-crack" />
        <text x="${jcx}" y="${jcy + 48}" class="terrain-label chasm-label">JACOB CHASM</text>
      </g>

      <g class="terrain-feature terrain-feature-gimgimno" data-id="city_of_gimgimno" style="cursor: pointer;">
        <polygon points="${ggx},${ggy - 40} ${ggx + 60},${ggy - 12} ${ggx + 45},${ggy + 30} ${ggx - 40},${ggy + 25} ${ggx - 55},${ggy - 12}" class="terrain-earth-chasm" />
        <polyline points="${ggx - 45},${ggy} ${ggx},${ggy + 10} ${ggx + 40},${ggy + 18}" class="terrain-chasm-crack" />
        <text x="${ggx}" y="${ggy + 48}" class="terrain-label chasm-label">GIMGIMNO VALLEY</text>
      </g>

      <!-- Continental Seismic Fault Lines & Rifts (3 Nephi 8:18 - Rocks Rent in Twain) -->
      <g class="terrain-feature terrain-feature-faults">
        <path d="M ${px(20)},${py(56)} L ${px(26)},${py(61)} L ${px(32)},${py(59)} L ${px(38)},${py(66)} L ${px(46)},${py(63)} L ${px(52)},${py(70)} L ${px(60)},${py(68)}" class="terrain-fault-line" />
        <path d="M ${px(20)},${py(56)} L ${px(26)},${py(61)} L ${px(32)},${py(59)} L ${px(38)},${py(66)} L ${px(46)},${py(63)} L ${px(52)},${py(70)} L ${px(60)},${py(68)}" class="terrain-fault-glow" />
        <path d="M ${px(50)},${py(44)} L ${px(56)},${py(48)} L ${px(62)},${py(45)} L ${px(68)},${py(51)} L ${px(76)},${py(47)} L ${px(84)},${py(54)}" class="terrain-fault-line" />
        <path d="M ${px(50)},${py(44)} L ${px(56)},${py(48)} L ${px(62)},${py(45)} L ${px(68)},${py(51)} L ${px(76)},${py(47)} L ${px(84)},${py(54)}" class="terrain-fault-glow" />
      </g>

      <!-- Scorched Foundations & Ash Footprints (3 Nephi 9:9-10) -->
      <g class="terrain-feature terrain-feature-zarahemla" data-id="zarahemla" style="cursor: pointer;">
        <circle cx="${zx}" cy="${zy}" r="45" class="terrain-scorched-ruin" />
      </g>
      <g class="terrain-feature terrain-feature-jacobugath" data-id="city_of_jacobugath" style="cursor: pointer;">
        <circle cx="${jux}" cy="${juy}" r="45" class="terrain-scorched-ruin" />
      </g>
      <g class="terrain-feature terrain-feature-kishkumen" data-id="city_of_kishkumen" style="cursor: pointer;">
        <circle cx="${kx}" cy="${ky}" r="40" class="terrain-scorched-ruin" />
      </g>

      <!-- Sanctuary at Bountiful (3 Nephi 11:1) -->
      <g class="terrain-feature terrain-feature-bountiful" data-id="bountiful" style="cursor: pointer;">
        <circle cx="${bx}" cy="${by}" r="55" stroke="#f1c40f" stroke-width="4.5" fill="none" stroke-dasharray="14 8" opacity="0.95" />
        <text x="${bx}" y="${by + 72}" class="terrain-label" font-size="20px" fill="#fff9db" filter="drop-shadow(0 0 6px #744210)">TEMPLE SANCTUARY</text>
      </g>
    `;

    cataclysmTerrainGroup.innerHTML = featuresHtml;

    // Attach click listeners to terrain features to open Codex
    cataclysmTerrainGroup.querySelectorAll('.terrain-feature').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = el.dataset.id;
        if (id) {
          openCodex(id);
        }
      });
    });
  }

  // Name overrides for markers during and after the 3 Nephi destruction
  const cataclysmNameOverrides = {
    "city_of_jerusalem": {
      era3: "🌊 Waters of Jerusalem (Replaced by Waters)",
      era4: "🌊 Waters of Jerusalem (Submerged Lake)"
    },
    "city_of_onihah": {
      era3: "💧 Waters of Onihah (Inundated)",
      era4: "💧 Waters of Onihah (Inundated Lake)"
    },
    "city_of_mocum": {
      era3: "💧 Waters of Mocum (Inundated)",
      era4: "💧 Waters of Mocum (Inundated Waters)"
    },
    "moroni": {
      era3: "🌊 Moroni (Sunk into Depths of Sea)",
      era4: "🌊 Moroni (Sunken in Ocean Depths)"
    },
    "city_of_moronihah": {
      era3: "🏔️ Mount Moronihah (Mountain in place of City)",
      era4: "🏔️ Mount Moronihah (Great Mountain Peak)"
    },
    "city_of_gilgal": {
      era3: "🕳️ Sunken Valley of Gilgal (Sunk into Earth)",
      era4: "🕳️ Sunken Valley of Gilgal"
    },
    "city_of_gadiandi": {
      era3: "🕳️ Gadiandi Earth Chasm",
      era4: "🕳️ Gadiandi Earth Chasm"
    },
    "city_of_gadiomnah": {
      era3: "🕳️ Gadiomnah Sunken Valley",
      era4: "🕳️ Gadiomnah Sunken Valley"
    },
    "city_of_jacob": {
      era3: "🕳️ Jacob Earth Chasm",
      era4: "🕳️ Jacob Earth Chasm"
    },
    "city_of_gimgimno": {
      era3: "🕳️ Gimgimno Sunken Valley",
      era4: "🕳️ Gimgimno Sunken Valley"
    },
    "city_of_kishkumen": {
      era3: "🔥 Kishkumen (Burned by Fire)",
      era4: "🔥 Kishkumen (Scorched Ruins)"
    },
    "city_of_jacobugath": {
      era3: "🔥 Jacobugath (Burned by Fire)",
      era4: "🔥 Jacobugath (Scorched Ruins)"
    },
    "zarahemla": {
      era3: "🔥 Zarahemla (Burned by Fire)",
      era4: "🏛️ Zarahemla (Rebuilt in Righteousness)"
    },
    "bountiful": {
      era3: "☀️ Temple in Bountiful (Preserved Sanctuary)",
      era4: "☀️ Temple in Bountiful (Where Christ Appeared)"
    }
  };

  function updateMarkerLabelsForEra(step) {
    document.querySelectorAll('.map-marker').forEach(marker => {
      const locId = marker.dataset.id;
      const loc = mapLocations[locId];
      if (!loc) return;
      const labelEl = marker.querySelector('.marker-label');
      if (!labelEl) return;

      const override = cataclysmNameOverrides[locId];
      if (step === 3 && override && override.era3) {
        labelEl.textContent = override.era3;
      } else if (step === 4 && override && override.era4) {
        labelEl.textContent = override.era4;
      } else {
        labelEl.textContent = loc.name;
      }
    });
  }

  /**
   * Setup Scriptural Era & 3 Nephi Cataclysm Destruction Slider
   */
  function setupCataclysmHud() {
    if (!eraSlider) return;

    function applyEra(step) {
      step = parseInt(step, 10);
      eraSteps.forEach(el => {
        el.classList.toggle('active', parseInt(el.dataset.step, 10) === step);
      });

      if (step === 1) {
        // Jaredite Age (2200 BC - 600 BC)
        stage.classList.remove('cataclysm-mode', 'post-cataclysm-mode');
        if (cataclysmTerrainGroup) cataclysmTerrainGroup.classList.remove('visible');
        updateMarkerLabelsForEra(1);

        if (cataclysmIcon) cataclysmIcon.textContent = '👑';
        if (cataclysmTitle) cataclysmTitle.textContent = 'Era: Jaredite Age (c. 2200 BC – 600 BC)';
        if (cataclysmSubtitle) cataclysmSubtitle.textContent = 'Tower of Babel Exodus, Northern Kingdoms, Ripliancum & Ramah';
        if (cataclysmQuickToggle) {
          cataclysmQuickToggle.classList.remove('active');
          cataclysmQuickToggle.innerHTML = '🔥 <span>Trigger 3 Nephi Cataclysm (AD 34)</span>';
        }

        const jarediteKeywords = ['jaredite', 'ripliancum', 'moron', 'nehor', 'ephraim', 'corihor', 'shurr', 'agosh', 'heshlon', 'akish', 'ramah', 'nimrod', 'moriancumer', 'ogath'];
        document.querySelectorAll('.map-marker').forEach(marker => {
          const loc = mapLocations[marker.dataset.id];
          if (!loc) return;
          const isJaredite = jarediteKeywords.some(k => 
            loc.id.includes(k) || 
            (loc.region || '').toLowerCase().includes(k) || 
            (loc.summary || '').toLowerCase().includes(k)
          );
          marker.classList.toggle('dimmed', !isJaredite);
        });
      } else if (step === 2) {
        // Pre-Destruction (AD 1-33)
        stage.classList.remove('cataclysm-mode', 'post-cataclysm-mode');
        if (cataclysmTerrainGroup) cataclysmTerrainGroup.classList.remove('visible');
        updateMarkerLabelsForEra(2);

        if (cataclysmIcon) cataclysmIcon.textContent = '🏛️';
        if (cataclysmTitle) cataclysmTitle.textContent = 'Era: Pre-Destruction (Golden Age of the Republic)';
        if (cataclysmSubtitle) cataclysmSubtitle.textContent = 'Circa 90 BC – AD 33 • Thriving Cities, Strongholds & Coastal Sanctuaries';
        if (cataclysmQuickToggle) {
          cataclysmQuickToggle.classList.remove('active');
          cataclysmQuickToggle.innerHTML = '🔥 <span>Trigger 3 Nephi Cataclysm (AD 34)</span>';
        }
        document.querySelectorAll('.map-marker').forEach(marker => {
          marker.classList.remove('dimmed');
        });
      } else if (step === 3) {
        // The 3 Nephi Cataclysm (AD 34)
        stage.classList.add('cataclysm-mode');
        stage.classList.remove('post-cataclysm-mode');
        if (cataclysmTerrainGroup) cataclysmTerrainGroup.classList.add('visible');
        updateMarkerLabelsForEra(3);

        if (cataclysmIcon) cataclysmIcon.textContent = '🔥';
        if (cataclysmTitle) cataclysmTitle.textContent = 'Era: The 3 Nephi Cataclysm (Crucifixion Upheaval)';
        if (cataclysmSubtitle) cataclysmSubtitle.textContent = 'AD 34 • Sunk Harbors, Mountains Formed, Waters Cast Up & Fire from Heaven';
        if (cataclysmQuickToggle) {
          cataclysmQuickToggle.classList.add('active');
          cataclysmQuickToggle.innerHTML = '🕊️ <span>Reset to Pre-Destruction</span>';
        }

        document.querySelectorAll('.map-marker').forEach(marker => {
          marker.classList.remove('dimmed');
        });

        // Subtle seismic rumble Web Audio feedback
        playCataclysmRumble();
      } else if (step === 4) {
        // Post-Destruction Universal Peace (AD 35-200)
        stage.classList.remove('cataclysm-mode');
        stage.classList.add('post-cataclysm-mode');
        // Keep physical terrain transformations visible as permanent geographic reality
        if (cataclysmTerrainGroup) cataclysmTerrainGroup.classList.add('visible');
        updateMarkerLabelsForEra(4);

        if (cataclysmIcon) cataclysmIcon.textContent = '🕊️';
        if (cataclysmTitle) cataclysmTitle.textContent = 'Era: The Golden Century of Peace (4 Nephi)';
        if (cataclysmSubtitle) cataclysmSubtitle.textContent = 'AD 35 – 200 • Permanent Transformed Topography, Healing & Universal Peace';
        if (cataclysmQuickToggle) {
          cataclysmQuickToggle.classList.remove('active');
          cataclysmQuickToggle.innerHTML = '🔥 <span>Trigger 3 Nephi Cataclysm (AD 34)</span>';
        }
        document.querySelectorAll('.map-marker').forEach(marker => {
          marker.classList.remove('dimmed');
        });
      }
    }

    eraSlider.addEventListener('input', (e) => {
      applyEra(e.target.value);
    });

    eraSteps.forEach(stepEl => {
      stepEl.addEventListener('click', () => {
        const val = stepEl.dataset.step;
        eraSlider.value = val;
        applyEra(val);
      });
    });

    if (cataclysmQuickToggle) {
      cataclysmQuickToggle.addEventListener('click', () => {
        if (eraSlider.value === '3') {
          eraSlider.value = '2';
          applyEra(2);
        } else {
          eraSlider.value = '3';
          applyEra(3);
          focusLocation(64.4, 39.7, 1.25);
        }
      });
    }

    // Initialize era on load (defaults to Era 2 - Pre-Destruction)
    applyEra(eraSlider.value || 2);
  }

  function playCataclysmRumble() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(65, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(28, audioCtx.currentTime + 1.2);

      gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 1.2);
    } catch (e) {
      // Audio context may be restricted before gesture
    }
  }

  /**
   * Generates the official Church of Jesus Christ of Latter-day Saints scripture URL
   * strictly referencing the Book of Mormon on churchofjesuschrist.org
   */
  function getChurchScriptureUrl(refStr) {
    if (!refStr) return null;
    const cleanRef = refStr.trim();
    // Matches: "1 Nephi 18:23", "Alma 50:13-15", "Ether 15:8", "Words of Mormon 1:13", "Mormon 5:3"
    const match = cleanRef.match(/^(\d\s+[A-Za-z]+|[A-Za-z\s]+?)\s+(\d+)(?::(\d+)(?:-(\d+))?)?/);
    if (!match) return null;

    const rawBook = match[1].trim().toLowerCase();
    const chapter = match[2];
    const startVerse = match[3];
    const endVerse = match[4];

    const bookMap = {
      '1 nephi': '1-ne',
      'first nephi': '1-ne',
      '2 nephi': '2-ne',
      'second nephi': '2-ne',
      'jacob': 'jacob',
      'enos': 'enos',
      'jarom': 'jarom',
      'omni': 'omni',
      'words of mormon': 'w-of-m',
      'mosiah': 'mosiah',
      'alma': 'alma',
      'helaman': 'hel',
      '3 nephi': '3-ne',
      'third nephi': '3-ne',
      '4 nephi': '4-ne',
      'fourth nephi': '4-ne',
      'mormon': 'morm',
      'ether': 'ether',
      'moroni': 'moro'
    };

    const slug = bookMap[rawBook];
    if (!slug) return null;

    let url = `https://www.churchofjesuschrist.org/study/scriptures/bofm/${slug}/${chapter}?lang=eng`;
    if (startVerse) {
      if (endVerse) {
        url += `&id=p${startVerse}-p${endVerse}#p${startVerse}`;
      } else {
        url += `&id=p${startVerse}#p${startVerse}`;
      }
    }
    return url;
  }

  /**
   * Opens the in-app Scripture Reader Modal with official Church of Jesus Christ iframe
   */
  function openScriptureModal(refStr, verseText, url) {
    if (!url) url = getChurchScriptureUrl(refStr);
    if (!url) return;

    if (scriptureModalTitle) {
      scriptureModalTitle.innerText = `${refStr} — Book of Mormon`;
    }
    if (scriptureExternalLink) {
      scriptureExternalLink.href = url;
    }
    if (scriptureFooterLink) {
      scriptureFooterLink.href = url;
      scriptureFooterLink.innerText = url;
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
          setTimeout(() => {
            scriptureLoading.style.display = 'none';
          }, 250);
        }
      };
    }

    if (scriptureModal) {
      scriptureModal.classList.add('open');
      scriptureModal.setAttribute('aria-hidden', 'false');
    }

    // Safety fallback: dismiss loading screen after 4s so user can view whatever content arrived
    setTimeout(() => {
      if (scriptureLoading && scriptureLoading.style.display !== 'none') {
        scriptureLoading.style.opacity = '0';
        setTimeout(() => {
          scriptureLoading.style.display = 'none';
        }, 250);
      }
    }, 4000);
  }

  /**
   * Closes the Scripture Reader Modal
   */
  function closeScriptureModal() {
    if (!scriptureModal) return;
    scriptureModal.classList.remove('open');
    scriptureModal.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
      if (!scriptureModal.classList.contains('open') && scriptureIframe) {
        scriptureIframe.src = 'about:blank';
      }
    }, 250);
  }

  if (closeScriptureModalBtn) {
    closeScriptureModalBtn.addEventListener('click', closeScriptureModal);
  }
  if (scriptureModalBackdrop) {
    scriptureModalBackdrop.addEventListener('click', closeScriptureModal);
  }

  /**
   * Setup Journey Selector & Path Rendering
   */
  function setupJourneys() {
    journeySelect.innerHTML = '<option value="">-- Scriptural Journeys (12) --</option>';
    mapJourneys.forEach(journey => {
      const option = document.createElement('option');
      option.value = journey.id;
      option.textContent = journey.name;
      journeySelect.appendChild(option);
    });

    journeySelect.addEventListener('change', (e) => {
      startJourney(e.target.value);
    });
  }

  /**
   * Start a Scriptural Journey & activate the Expedition Player Bar
   */
  function startJourney(journeyId) {
    pathsGroup.innerHTML = '';
    if (!journeyId) {
      currentJourney = null;
      expeditionPlayerBar.classList.remove('active');
      document.querySelectorAll('.map-marker').forEach(m => {
        m.style.opacity = '1';
        m.style.pointerEvents = 'auto';
      });
      return;
    }

    currentJourney = mapJourneys.find(j => j.id === journeyId);
    if (!currentJourney) return;

    currentStageIndex = 0;

    expeditionTitle.textContent = currentJourney.name;
    expeditionSubtitle.textContent = currentJourney.subtitle;
    expeditionPlayerBar.classList.add('active');

    drawJourneyPath(currentJourney);
    goToJourneyStage(0);
  }

  /**
   * Draw the glowing SVG paths for a journey
   */
  function drawJourneyPath(journey) {
    pathsGroup.innerHTML = '';
    const imgWidth = mapImage.naturalWidth || 848;
    const imgHeight = mapImage.naturalHeight || 1264;

    const points = journey.waypoints.map(id => {
      const loc = mapLocations[id];
      if (!loc) return null;
      return {
        x: (loc.coords.x / 100) * imgWidth,
        y: (loc.coords.y / 100) * imgHeight,
        id: loc.id
      };
    }).filter(Boolean);

    if (points.length < 2) return;

    let pathD = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const midX = (prev.x + curr.x) / 2 + (Math.random() * 16 - 8);
      const midY = (prev.y + curr.y) / 2 - 14;
      pathD += ` Q ${midX} ${midY}, ${curr.x} ${curr.y}`;
    }

    const glowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    glowPath.setAttribute('d', pathD);
    glowPath.setAttribute('fill', 'none');
    glowPath.setAttribute('stroke', journey.color);
    glowPath.setAttribute('stroke-width', '8');
    glowPath.setAttribute('class', 'journey-path-glow');
    pathsGroup.appendChild(glowPath);

    const mainPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    mainPath.setAttribute('d', pathD);
    mainPath.setAttribute('fill', 'none');
    mainPath.setAttribute('stroke', '#fff');
    mainPath.setAttribute('stroke-width', '3');
    mainPath.setAttribute('class', 'journey-path');
    pathsGroup.appendChild(mainPath);

    document.querySelectorAll('.map-marker').forEach(m => {
      const isWaypoint = journey.waypoints.includes(m.dataset.id);
      m.style.opacity = isWaypoint ? '1' : '0.2';
      m.style.pointerEvents = isWaypoint ? 'auto' : 'none';
      if (isWaypoint) {
        m.style.display = 'block';
      }
    });
  }

  /**
   * Navigate to a specific stage of the active journey
   */
  function goToJourneyStage(index) {
    if (!currentJourney) return;
    const totalStages = currentJourney.stages ? currentJourney.stages.length : currentJourney.waypoints.length;
    if (index < 0 || index >= totalStages) return;

    currentStageIndex = index;

    const stageData = currentJourney.stages ? currentJourney.stages[index] : null;
    const waypointId = stageData ? stageData.locId : currentJourney.waypoints[index];
    const loc = mapLocations[waypointId];

    expStepIndicator.textContent = `Stage ${index + 1} of ${totalStages}`;
    if (stageData && stageData.note) {
      expeditionStepNote.textContent = `${loc ? loc.name + ': ' : ''}${stageData.note}`;
    } else if (loc) {
      expeditionStepNote.textContent = `${loc.name} — ${loc.title}`;
    }

    if (loc) {
      openCodex(loc.id);
    }
  }

  expPrevBtn.addEventListener('click', () => {
    goToJourneyStage(currentStageIndex - 1);
  });

  expNextBtn.addEventListener('click', () => {
    goToJourneyStage(currentStageIndex + 1);
  });

  expExitBtn.addEventListener('click', () => {
    journeySelect.value = '';
    startJourney('');
  });

  /**
   * Filter markers by category
   */
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.dataset.category;

      document.querySelectorAll('.map-marker').forEach(marker => {
        const matches = category === 'all' || marker.dataset.category === category;
        marker.style.display = matches ? 'block' : 'none';
        marker.classList.remove('dimmed', 'search-match');
      });

      document.querySelectorAll('.territory-polygon').forEach(poly => {
        const matches = category === 'all' || poly.dataset.category === category;
        poly.style.display = matches ? 'block' : 'none';
      });

      if (category !== 'all' && currentJourney) {
        journeySelect.value = '';
        startJourney('');
      }
    });
  });

  /**
   * Deep Search handler with Dimming & Clear Button
   */
  /**
   * Deep Search handler with Intelligent Token & Synonym Matching
   * Supports:
   * - "Anti-Lehi-Nephites" / "Anti-Nephi-Lehies" / "People of Ammon" / "Ammonites"
   * - "2,000 Stripling Warriors" / "Sons of Helaman"
   * - Multiple query words matching anywhere in name, region, summary, people, aliases, or refs
   */
  function applySearch(term) {
    const rawTerm = term.trim();
    term = rawTerm.toLowerCase();
    clearSearchBtn.style.display = term ? 'block' : 'none';

    if (!term) {
      document.querySelectorAll('.map-marker').forEach(marker => {
        marker.classList.remove('dimmed', 'search-match');
        marker.style.display = 'block';
      });
      return;
    }

    // Normalize query tokens (handle hyphens, apostrophes, plural endings)
    // E.g. "Anti-Lehi-Nephites" -> tokens: ["anti", "lehi", "nephites"]
    const cleanedTerm = term.replace(/[-_.,;:'"]/g, ' ');
    const tokens = cleanedTerm.split(/\s+/).filter(t => t.length > 0);

    // Check for common synonymous phrases:
    const hasAnti = tokens.includes('anti');
    const hasLehi = tokens.includes('lehi') || tokens.includes('lehies') || tokens.includes('lehites');
    const hasNephi = tokens.includes('nephi') || tokens.includes('nephite') || tokens.includes('nephites');
    const isAntiNephiLehiQuery = (hasAnti && (hasLehi || hasNephi)) || 
      term.includes('ammonite') || 
      (tokens.includes('people') && tokens.includes('ammon')) ||
      term.includes('anti-lehi') ||
      term.includes('anti-nephi');

    const isStriplingQuery = term.includes('stripling') || 
      term.includes('2000') || 
      term.includes('2,000') || 
      (tokens.includes('sons') && tokens.includes('helaman'));

    let firstMatch = null;
    let matchCount = 0;

    document.querySelectorAll('.map-marker').forEach(marker => {
      const loc = mapLocations[marker.dataset.id];
      if (!loc) return;

      const nameStr = (loc.name || '').toLowerCase();
      const titleStr = (loc.title || '').toLowerCase();
      const regionStr = (loc.region || '').toLowerCase();
      const summaryStr = (loc.summary || '').toLowerCase();
      const roleStr = (loc.strategicRole || '').toLowerCase();
      const descStr = (loc.description || '').toLowerCase();
      const eventsStr = (loc.historicalEvents || []).join(' ').toLowerCase();
      const peopleStr = (loc.notablePeople || []).join(' ').toLowerCase();
      const aliasesStr = (loc.aliases || []).join(' ').toLowerCase();
      const refsStr = (loc.refs || []).map(r => r.ref + ' ' + r.text).join(' ').toLowerCase();

      // Combined search corpus for this location
      const corpus = `${nameStr} ${titleStr} ${regionStr} ${summaryStr} ${roleStr} ${descStr} ${eventsStr} ${peopleStr} ${aliasesStr} ${refsStr}`;
      const normalizedCorpus = corpus.replace(/[-_.,;:'"]/g, ' ');

      // 1. Direct match on full term
      let matches = corpus.includes(term) || normalizedCorpus.includes(cleanedTerm);

      // 2. Alias / Synonym expansion match for Anti-Nephi-Lehies / Anti-Lehi-Nephites
      if (!matches && isAntiNephiLehiQuery) {
        if (
          corpus.includes('anti-nephi-lehi') || 
          corpus.includes('anti-lehi-nephi') ||
          corpus.includes('people of ammon') || 
          corpus.includes('ammonites') ||
          loc.id === 'jershon' ||
          loc.id === 'melek' ||
          loc.id === 'judea'
        ) {
          matches = true;
        }
      }

      // 3. Synonym expansion for 2,000 Stripling Warriors
      if (!matches && isStriplingQuery) {
        if (
          corpus.includes('stripling') || 
          corpus.includes('2,000') || 
          corpus.includes('two thousand') ||
          loc.id === 'judea' ||
          loc.id === 'cumeni' ||
          loc.id === 'antiparah'
        ) {
          matches = true;
        }
      }

      // 4. Multi-token match: every token in user query matches anywhere in corpus
      if (!matches && tokens.length > 1) {
        const allTokensFound = tokens.every(tok => {
          const stem = tok.endsWith('s') && tok.length > 4 ? tok.slice(0, -1) : tok;
          return normalizedCorpus.includes(tok) || normalizedCorpus.includes(stem);
        });
        if (allTokensFound) matches = true;
      }

      if (matches) {
        marker.classList.remove('dimmed');
        marker.classList.add('search-match');
        marker.style.display = 'block';
        matchCount++;
        if (!firstMatch) firstMatch = loc;
      } else {
        marker.classList.add('dimmed');
        marker.classList.remove('search-match');
      }
    });

    if (matchCount === 1 && firstMatch && term.length > 2) {
      focusLocation(firstMatch.coords.x, firstMatch.coords.y);
    }
  }

  function clearSearch() {
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    document.querySelectorAll('.map-marker').forEach(marker => {
      marker.classList.remove('dimmed', 'search-match');
      marker.style.display = 'block';
    });
  }

  searchInput.addEventListener('input', (e) => {
    applySearch(e.target.value);
  });

  clearSearchBtn.addEventListener('click', () => {
    clearSearch();
    searchInput.focus();
  });

  /**
   * Pointer & Drag Panning Listeners
   */
  viewport.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.hud-btn') || e.target.closest('.map-marker') || e.target.closest('.expedition-player-bar') || e.target.closest('.coords-inspector-badge')) return;

    isDragging = true;
    viewport.classList.add('panning');
    startPointerX = e.clientX;
    startPointerY = e.clientY;
    startTranslateX = translateX;
    startTranslateY = translateY;
    viewport.setPointerCapture(e.pointerId);
  });

  viewport.addEventListener('pointermove', (e) => {
    // Update live inspector coordinates
    const imgRect = mapImage.getBoundingClientRect();
    const xPct = Math.max(0, Math.min(100, (((e.clientX - imgRect.left) / imgRect.width) * 100))).toFixed(1);
    const yPct = Math.max(0, Math.min(100, (((e.clientY - imgRect.top) / imgRect.height) * 100))).toFixed(1);

    lastHoveredPct = { x: xPct, y: yPct };

    if (isInspectorActive && coordsBadgeText) {
      coordsBadgeText.innerHTML = `<strong>Map Pos:</strong> X: ${xPct}% | Y: ${yPct}%`;
    }

    if (!isDragging) return;

    const dx = e.clientX - startPointerX;
    const dy = e.clientY - startPointerY;
    translateX = startTranslateX + dx;
    translateY = startTranslateY + dy;
    applyTransform();
  });

  function stopDrag(e) {
    if (isDragging) {
      isDragging = false;
      viewport.classList.remove('panning');
      try { viewport.releasePointerCapture(e.pointerId); } catch (_) {}
    }
  }

  viewport.addEventListener('pointerup', stopDrag);
  viewport.addEventListener('pointercancel', stopDrag);

  /**
   * Viewport Click: If Inspector is Active, copy coordinates!
   */
  viewport.addEventListener('click', (e) => {
    if (!isInspectorActive) return;
    if (e.target.closest('.hud-btn') || e.target.closest('.expedition-player-bar')) return;

    const imgRect = mapImage.getBoundingClientRect();
    const xPct = Math.max(0, Math.min(100, (((e.clientX - imgRect.left) / imgRect.width) * 100))).toFixed(1);
    const yPct = Math.max(0, Math.min(100, (((e.clientY - imgRect.top) / imgRect.height) * 100))).toFixed(1);

    copyCoordinatesToClipboard(xPct, yPct);
  });

  /**
   * Inspector Badge Direct Click: Copy current position!
   */
  coordsInspectorBadge.addEventListener('click', (e) => {
    e.stopPropagation();
    copyCoordinatesToClipboard(lastHoveredPct.x, lastHoveredPct.y);
  });

  /**
   * Toggle Coordinate Inspector Tool
   */
  toggleInspectorBtn.addEventListener('click', () => {
    isInspectorActive = !isInspectorActive;
    toggleInspectorBtn.classList.toggle('active', isInspectorActive);
    coordsInspectorBadge.classList.toggle('visible', isInspectorActive);
    inspectorBtnText.textContent = isInspectorActive ? 'Inspector: ON' : 'Inspector: OFF';
    viewport.style.cursor = isInspectorActive ? 'crosshair' : '';
    if (isInspectorActive) {
      copyToast.textContent = "Inspector ON: Click anywhere on map or on this badge to copy coordinates!";
      copyToast.classList.add('show');
      setTimeout(() => copyToast.classList.remove('show'), 2600);
    }
  });

  /**
   * Mouse Wheel Zoom
   */
  viewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.15 : 0.87;
    zoomAtPoint(zoomFactor, e.clientX, e.clientY);
  }, { passive: false });

  /**
   * Touch Pinch-to-Zoom
   */
  viewport.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
      touchStartDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchStartScale = scale;
    }
  });

  viewport.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const currentDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      if (touchStartDist > 0) {
        const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        const factor = currentDist / touchStartDist;
        const targetScale = Math.max(minScale, Math.min(maxScale, touchStartScale * factor));
        zoomAtPoint(targetScale / scale, midX, midY);
      }
    }
  }, { passive: false });

  /**
   * HUD Zoom Buttons
   */
  zoomInBtn.addEventListener('click', () => {
    const rect = viewport.getBoundingClientRect();
    zoomAtPoint(1.25, rect.left + rect.width / 2, rect.top + rect.height / 2);
  });

  zoomOutBtn.addEventListener('click', () => {
    const rect = viewport.getBoundingClientRect();
    zoomAtPoint(0.8, rect.left + rect.width / 2, rect.top + rect.height / 2);
  });

  resetZoomBtn.addEventListener('click', fitMapToScreen);

  /**
   * Dismiss welcome toast
   */
  if (dismissIntroBtn) {
    dismissIntroBtn.addEventListener('click', () => {
      introToast.classList.add('hide');
    });
  }

  /**
   * Keyboard shortcuts
   */
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (scriptureModal && scriptureModal.classList.contains('open')) {
        closeScriptureModal();
        return;
      }
      closeCodex();
      clearSearch();
      if (currentJourney) {
        startJourney('');
        journeySelect.value = '';
      }
    } else if (e.key === '+' || e.key === '=') {
      zoomInBtn.click();
    } else if (e.key === '-' || e.key === '_') {
      zoomOutBtn.click();
    } else if (e.key === '0') {
      fitMapToScreen();
    } else if (e.key === 'f' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    } else if (currentJourney && e.key === 'ArrowRight') {
      goToJourneyStage(currentStageIndex + 1);
    } else if (currentJourney && e.key === 'ArrowLeft') {
      goToJourneyStage(currentStageIndex - 1);
    }
  });

  window.addEventListener('resize', () => {
    applyTransform();
  });

  // Start initialization
  initMap();
});
