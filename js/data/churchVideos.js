/**
 * Official Book of Mormon Videos from ChurchofJesusChrist.org
 * Produced by The Church of Jesus Christ of Latter-day Saints
 * Matched strictly to verified Book of Mormon geographic locations, events, and narratives
 */

const BOOK_OF_MORMON_VIDEOS = [
  // =========================================================================
  // SEASON 1 & 2: LEHI'S COLONY, SEPARATION & THE EARLY NEPHITES
  // =========================================================================
  {
    id: "lehis-family-sails-promised-land",
    title: "Lehi's Family Sails to the Promised Land",
    scriptureRef: "1 Nephi 18:1–25",
    duration: "15:18",
    category: "Transoceanic Voyage",
    locations: ["land_first_inheritance", "sea_west"],
    description: "Directed by the Liahona, Nephi builds a ship according to the instructions of the Lord. The colony endures rebellion on the high seas before arriving safely upon the promised land.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2019-10-0080-lehis-family-sails-to-the-promised-land?lang=eng",
    thumbnailText: "Arrival at the Land of First Inheritance (West Sea Shore)"
  },
  {
    id: "nephites-separate-from-lamanites",
    title: "The Nephites Separate from the Lamanites & Build a Temple",
    scriptureRef: "2 Nephi 5:1–34",
    duration: "10:22",
    category: "Early Settlements",
    locations: ["lehi_nephi", "city_of_nephi", "land_first_inheritance"],
    description: "Warned of the Lord to flee Laman's wrath, Nephi leads the righteous into the wilderness to establish the City of Nephi and construct a sacred temple after the manner of Solomon.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0100-the-nephites-separate-from-the-lamanites?lang=eng",
    thumbnailText: "Nephi and his people build the Temple in the Land of Nephi"
  },
  {
    id: "jacob-teaches-atonement",
    title: "Jacob Teaches of the Atonement and Resurrection",
    scriptureRef: "2 Nephi 9:1–54",
    duration: "11:45",
    category: "Doctrinal Discourse",
    locations: ["city_of_nephi", "lehi_nephi"],
    description: "Jacob preaches at the Temple of Nephi regarding the infinite Atonement of Jesus Christ, the resurrection of all mankind, and deliverance from death and hell.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0130-jacob-teaches-of-the-atonement?lang=eng",
    thumbnailText: "Jacob preaching at the Temple in the City of Nephi"
  },
  {
    id: "sherem-denies-christ",
    title: "Sherem Denies Christ and Seeks a Sign",
    scriptureRef: "Jacob 7:1–27",
    duration: "10:14",
    category: "Faith & Defense",
    locations: ["city_of_nephi", "lehi_nephi"],
    description: "The anti-Christ Sherem challenges Jacob in the City of Nephi, denying the law of Moses' fulfillment in Christ. He demands a sign and is smitten of God before confessing the truth.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0160-sherem-denies-christ?lang=eng",
    thumbnailText: "Sherem confronts Jacob before the multitude in Nephi"
  },
  {
    id: "enos-prays-mightily",
    title: "Enos Prays Mightily for His Soul in the Forest",
    scriptureRef: "Enos 1:1–27",
    duration: "8:35",
    category: "Prayer & Faith",
    locations: ["city_of_nephi", "wilderness"],
    description: "While hunting beasts in the wilderness of Nephi, Enos's soul hungers. He kneels in all-day prayer, receiving remission of sins and a covenant regarding the preservation of the Lamanites.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0170-enos-prays-mightily?lang=eng",
    thumbnailText: "Enos kneels in fervent prayer in the forests of Nephi"
  },

  // =========================================================================
  // SEASON 3: MOSIAH & ALMA (ZARAHEMLA, MORMON, SEBUS & AMMONIHAH)
  // =========================================================================
  {
    id: "king-benjamin-addresses-people",
    title: "King Benjamin Addresses His People from the Tower",
    scriptureRef: "Mosiah 1–5",
    duration: "17:34",
    category: "Prophetic Address",
    locations: ["zarahemla"],
    description: "King Benjamin gathers the Nephite and Mulekite people around the Temple in Zarahemla. From an elevated wooden tower, he proclaims service to fellow beings and salvation through Christ.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0190-king-benjamin-addresses-his-people?lang=eng",
    thumbnailText: "The multitude pitches tents around the Temple in Zarahemla"
  },
  {
    id: "abinadi-testifies-king-noah",
    title: "Abinadi Testifies of Jesus Christ before King Noah",
    scriptureRef: "Mosiah 11–17",
    duration: "14:15",
    category: "Martyrdom & Prophecy",
    locations: ["lehi_nephi", "city_of_nephi", "shemlon", "shilom"],
    description: "Bound before King Noah and his corrupt priests in the royal palace of Nephi, Abinadi's face shines like Moses as he expounds the Ten Commandments and Isaiah 53 before sealing his testimony with fire.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0210-abinadi-testifies-before-king-noah?lang=eng",
    thumbnailText: "Abinadi stands fearless before King Noah's council"
  },
  {
    id: "alma-baptizes-waters-mormon",
    title: "Alma Preaches and Baptizes at the Waters of Mormon",
    scriptureRef: "Mosiah 18:1–35",
    duration: "12:08",
    category: "Covenant & Ordinances",
    locations: ["waters_of_mormon", "thicket_of_mormon"],
    description: "Having fled King Noah's court, Alma hides in the thicket of Mormon. He invites believers to enter the covenant of baptism—to mourn with those that mourn and stand as witnesses of God.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0220-alma-preaches-and-baptizes-at-the-waters-of-mormon?lang=eng",
    thumbnailText: "Helam and 204 souls baptized in the pure fountain of Mormon"
  },
  {
    id: "alma-younger-conversion",
    title: "Alma the Younger Is Visited by an Angel of God",
    scriptureRef: "Mosiah 27:1–37; Alma 36",
    duration: "11:50",
    category: "Conversion & Repentance",
    locations: ["zarahemla"],
    description: "While seeking to destroy the Church in Zarahemla, Alma the Younger and the sons of Mosiah are confronted by an angel descending in a cloud. Struck dumb, Alma experiences the miraculous agony and joy of repentance.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0250-alma-the-younger-is-converted-unto-the-lord?lang=eng",
    thumbnailText: "An angel appears with voice of thunder in the streets of Zarahemla"
  },
  {
    id: "ammon-serves-king-lamoni",
    title: "Ammon Defends the King's Flocks at the Waters of Sebus",
    scriptureRef: "Alma 17–19",
    duration: "18:22",
    category: "Missionary Service",
    locations: ["waters_of_sebus", "land_of_ishmael"],
    description: "Serving as a humble shepherd in the Land of Ishmael, Ammon uses sling and sword to scatter the plunderers at the Waters of Sebus, preparing King Lamoni and his household to receive the Gospel.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0300-ammon-serves-and-teaches-king-lamoni?lang=eng",
    thumbnailText: "Ammon defends the royal flocks at the Waters of Sebus"
  },
  {
    id: "alma-amulek-ammonihah",
    title: "Alma and Amulek Are Delivered from Prison in Ammonihah",
    scriptureRef: "Alma 8–15",
    duration: "19:12",
    category: "Prophetic Witness & Miracles",
    locations: ["ammonihah"],
    description: "After preaching repentance to the wicked lawyers of Ammonihah, Alma and Amulek are cast into prison. Through faith, the earth shakes, the prison walls fall to the ground, and they walk out unharmed.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0280-alma-and-amulek-are-delivered-by-the-power-of-god?lang=eng",
    thumbnailText: "The prison walls of Ammonihah tumble by the power of God"
  },
  {
    id: "anti-nephi-lehies-bury-weapons",
    title: "The Anti-Nephi-Lehies Bury Their Weapons of War",
    scriptureRef: "Alma 23–24",
    duration: "13:40",
    category: "Covenant of Peace",
    locations: ["land_of_ishmael", "land_of_jershon"],
    description: "Converted Lamanites covenant never again to shed human blood, burying their swords and weapons of war deep in the earth rather than break their sacred promise unto God.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0320-the-anti-nephi-lehies-bury-their-weapons-of-war?lang=eng",
    thumbnailText: "Swords buried deep in the earth as a covenant of peace"
  },
  {
    id: "alma-korihor-zarahemla",
    title: "Alma Contends with Korihor, the Anti-Christ",
    scriptureRef: "Alma 30:1–60",
    duration: "12:15",
    category: "Defense of Truth",
    locations: ["zarahemla", "gideon", "land_of_jershon"],
    description: "Korihor preaches across Jershon and Gideon before being brought before the chief judge and Alma in Zarahemla. Demanding a sign of God's power, he is struck dumb by divine judgment.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0340-all-things-denote-there-is-a-god?lang=eng",
    thumbnailText: "Alma bears witness before Korihor in the judgment-seat of Zarahemla"
  },
  {
    id: "alma-amulek-zoramites-faith",
    title: "Alma Compares the Word unto a Seed among the Zoramites",
    scriptureRef: "Alma 31–34",
    duration: "14:40",
    category: "Faith & Repentance",
    locations: ["antionum", "hill_onidah"],
    description: "Observing the proud Rameumptom prayers in Antionum, Alma turns to the humble poor cast out of synagogues on Hill Onidah, inviting them to experiment upon the word as an expanding seed.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0360-alma-counsels-his-sons?lang=eng",
    thumbnailText: "Alma teaches the humble poor upon the Hill Onidah in Antionum"
  },

  // =========================================================================
  // SEASON 4: CAPTAIN MORONI, STRIPLING WARRIORS & SAMUEL THE LAMANITE
  // =========================================================================
  {
    id: "captain-moroni-title-of-liberty",
    title: "Captain Moroni Raises the Title of Liberty",
    scriptureRef: "Alma 46:11–37",
    duration: "9:52",
    category: "Freedom & War",
    locations: ["zarahemla", "bountiful"],
    description: "Rending his coat, Captain Moroni writes upon it: 'In memory of our God, our religion, and freedom, and our peace, our wives, and our children.' He fastens it upon a pole and rallies the nation.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0400-captain-moroni-raises-the-title-of-liberty?lang=eng",
    thumbnailText: "Captain Moroni rallies the armies of the Nephites in Zarahemla"
  },
  {
    id: "moroni-fortifies-cities",
    title: "Moroni Fortifies the Nephite Cities against Lamanite Armies",
    scriptureRef: "Alma 48–50; 52–53",
    duration: "14:30",
    category: "Military Engineering",
    locations: ["ammonihah", "city_of_noah", "bountiful", "city_of_moroni", "mulek"],
    description: "Captain Moroni designs unprecedented defensive works: deep moats, earth ramparts, timber walls, and battlements. The Lamanite armies under Amalickiah are astonished and defeated at Noah and Ammonihah.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0420-moroni-fortifies-the-cities-of-the-nephites?lang=eng",
    thumbnailText: "Immense earth banks and timber fortifications at the City of Noah"
  },
  {
    id: "stripling-warriors-defend-faith",
    title: "Helaman and the 2,000 Stripling Warriors",
    scriptureRef: "Alma 53; 56–58",
    duration: "16:10",
    category: "Courage & Miracles",
    locations: ["judea", "antiparah", "cumeni", "manti", "hill_manti", "helamans_chain"],
    description: "The young sons of the Anti-Nephi-Lehies march to the southwest border under Helaman. Trusting in the teachings of their mothers that God would deliver them, all 2,060 fight valiantly and survive.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0440-they-did-not-doubt-their-mothers-knew-it?lang=eng",
    thumbnailText: "Helaman's two thousand young warriors stand firm in the southwest border"
  },
  {
    id: "samuel-lamanite-walls-zarahemla",
    title: "Samuel the Lamanite Prophesies upon the Walls of Zarahemla",
    scriptureRef: "Helaman 13–16",
    duration: "15:20",
    category: "Prophetic Warning",
    locations: ["zarahemla", "land_of_zarahemla", "river_sidon"],
    description: "Cast out of Zarahemla, Samuel is commanded to return. Climbing atop the city walls, he prophesies the exact signs of the Savior's birth (a day, night, and day without darkness) and crucifixion, while arrows cannot hit him.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0470-samuel-the-lamanite-prophesies?lang=eng",
    thumbnailText: "Samuel stands atop the high walls of Zarahemla amidst flying arrows"
  },

  // =========================================================================
  // SEASON 5: 3 NEPHI & THE MINISTRY OF THE RISEN LORD AT BOUNTIFUL
  // =========================================================================
  {
    id: "cataclysm-destructions-christ-death",
    title: "The Great Destruction and Darkness at the Death of Christ",
    scriptureRef: "3 Nephi 8–10",
    duration: "13:05",
    category: "Cataclysm & Judgment",
    locations: ["zarahemla", "city_of_moroni", "moronihah", "city_of_moronihah", "jerusalem_city", "city_of_jerusalem", "onihah", "city_of_onihah", "mocum", "city_of_mocum", "city_of_gadiandi", "city_of_gadiomnah", "city_of_jacob", "city_of_gimgimno", "city_of_laman", "city_of_josh", "city_of_gad", "city_of_kishkumen"],
    description: "In the 34th year, devastating storms, earthquakes, and lightning reshape the Promised Land. Moronihah becomes a mountain, Moroni sinks into the sea, and Zarahemla burns, followed by three days of thick darkness.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0500-jesus-christ-appears-in-the-ancient-americas?lang=eng",
    thumbnailText: "The Promised Land transformed during three days of impenetrable darkness"
  },
  {
    id: "savior-appears-at-bountiful",
    title: "Jesus Christ Appears at the Temple in the Land Bountiful",
    scriptureRef: "3 Nephi 11:1–17",
    duration: "16:45",
    category: "Divine Epiphany",
    locations: ["bountiful", "land_bountiful"],
    description: "A multitude gathered around the Temple in Bountiful hears a still, small voice from heaven. Looking up, they behold Jesus Christ descending in a white robe, declaring: 'Behold, I am Jesus Christ, whom the prophets testified shall come into the world.'",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0510-behold-i-am-jesus-christ-whom-the-prophets-testified-shall-come?lang=eng",
    thumbnailText: "The Risen Lord descends from heaven at the Temple in Bountiful"
  },
  {
    id: "christ-heals-sick-blesses-children",
    title: "Jesus Christ Heals the Sick and Blesses the Little Children",
    scriptureRef: "3 Nephi 17:1–25",
    duration: "13:30",
    category: "Compassion & Miracles",
    locations: ["bountiful", "land_bountiful"],
    description: "Moved with compassion, the Savior bids the multitude bring forth their lame, blind, and diseased, healing every one. He kneels upon the earth, prays words that cannot be written, and blesses their little children one by one.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0530-behold-your-little-ones?lang=eng",
    thumbnailText: "Angels descend in circles of fire around the little children at Bountiful"
  },
  {
    id: "christ-institutes-sacrament-nephites",
    title: "Jesus Christ Administers the Sacrament to the Nephites",
    scriptureRef: "3 Nephi 18:1–39; 20:1–9",
    duration: "12:18",
    category: "Sacred Ordinances",
    locations: ["bountiful", "land_bountiful"],
    description: "The Lord commands His disciples to bring bread and wine. He breaks bread, blesses it, and gives it to the disciples and multitude to eat in remembrance of His body and blood.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0540-this-is-my-gospel?lang=eng",
    thumbnailText: "The Savior institutes the memorial sacrament at Bountiful"
  },
  {
    id: "brother-jared-finger-of-lord",
    title: "The Brother of Jared Sees the Finger of the Lord",
    scriptureRef: "Ether 1–3",
    duration: "14:10",
    category: "Jaredite Antiquities",
    locations: ["mount_shelem", "moriancumer_shore", "valley_of_nimrod", "land_of_moron"],
    description: "Upon Mount Shelem, the Brother of Jared presents sixteen molten stones. Because of his exceedingly great faith, the veil is taken from his eyes and he beholds the finger of Jesus Christ touching each stone with light.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0600-the-brother-of-jared-sees-the-finger-of-the-lord?lang=eng",
    thumbnailText: "Sixteen clear stones touched with light atop Mount Shelem"
  },
  {
    id: "moroni-invites-all-come-unto-christ",
    title: "Moroni Seals the Sacred Records and Invites All to Come unto Christ",
    scriptureRef: "Mormon 8–9; Moroni 1–10",
    duration: "11:55",
    category: "Final Testament",
    locations: ["cumorah", "hill_cumorah", "waters_of_ripliancum", "plains_of_agosh", "place_of_ogath"],
    description: "Alone after the destruction of his nation at Cumorah, Moroni finishes the sacred record, inscribes his promise of truth by the Holy Ghost (Moroni 10:4–5), and deposits the gold plates into the stone box.",
    churchUrl: "https://www.churchofjesuschrist.org/media/video/2020-03-0650-moroni-invites-all-to-come-unto-christ?lang=eng",
    thumbnailText: "Moroni seals the sacred gold plates in the Hill Cumorah"
  }
];

/**
 * Helper function to locate Church videos matching a specific location or region
 */
function findChurchVideosForLocation(locId, region) {
  if (!locId) {
    return BOOK_OF_MORMON_VIDEOS.slice(0, 6);
  }

  const normalizedId = String(locId).toLowerCase();

  const directMatches = BOOK_OF_MORMON_VIDEOS.filter(v => 
    v.locations && v.locations.some(loc => {
      const l = loc.toLowerCase();
      return l === normalizedId ||
             (normalizedId === 'cumorah' && (l === 'hill_cumorah' || l === 'cumorah')) ||
             (normalizedId === 'valley_of_gideon' && l === 'gideon') ||
             (normalizedId === 'ishmael' && l === 'land_of_ishmael') ||
             (normalizedId === 'jershon' && l === 'land_of_jershon') ||
             (normalizedId === 'forest_of_mormon' && l === 'waters_of_mormon') ||
             (normalizedId === 'land_bountiful' && l === 'bountiful') ||
             (normalizedId === 'land_of_zarahemla' && l === 'zarahemla') ||
             (normalizedId === 'lehi_nephi' && (l === 'city_of_nephi' || l === 'lehi_nephi'));
    })
  );

  if (directMatches.length > 0) {
    return directMatches;
  }

  // Region or related fallback
  if (region) {
    const regLower = region.toLowerCase();
    if (regLower.includes('northward') || regLower.includes('jaredite') || regLower.includes('desolation')) {
      return BOOK_OF_MORMON_VIDEOS.filter(v => 
        v.locations.includes('cumorah') || v.locations.includes('moriancumer_shore') || v.locations.includes('mount_shelem')
      );
    } else if (regLower.includes('nephi') || regLower.includes('southward')) {
      return BOOK_OF_MORMON_VIDEOS.filter(v => 
        v.locations.includes('lehi_nephi') || v.locations.includes('waters_of_mormon') || v.locations.includes('city_of_nephi')
      );
    } else if (regLower.includes('zarahemla') || regLower.includes('sidon')) {
      return BOOK_OF_MORMON_VIDEOS.filter(v => 
        v.locations.includes('zarahemla') || v.locations.includes('land_of_zarahemla')
      );
    }
  }

  // Default to the most iconic Book of Mormon videos
  return [
    BOOK_OF_MORMON_VIDEOS.find(v => v.id === "savior-appears-at-bountiful"),
    BOOK_OF_MORMON_VIDEOS.find(v => v.id === "king-benjamin-addresses-people"),
    BOOK_OF_MORMON_VIDEOS.find(v => v.id === "alma-baptizes-waters-mormon"),
    BOOK_OF_MORMON_VIDEOS.find(v => v.id === "captain-moroni-title-of-liberty"),
    BOOK_OF_MORMON_VIDEOS.find(v => v.id === "moroni-invites-all-come-unto-christ")
  ].filter(Boolean);
}

// Global browser window attachment
if (typeof window !== 'undefined') {
  window.BOOK_OF_MORMON_VIDEOS = BOOK_OF_MORMON_VIDEOS;
  window.findChurchVideosForLocation = findChurchVideosForLocation;
}
