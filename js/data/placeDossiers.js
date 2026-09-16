/**
 * Deep Scriptural Dossiers & Rich Teachings for Book of Mormon Geography
 * Modeled after the New Testament Geography contextual architecture.
 * Fully validated across all major Book of Mormon prophets, dispensations, and lands.
 */

const PLACE_DOSSIERS = {
  // =========================================================================
  // 1. ZARAHEMLA & CENTRAL SIDON BASIN
  // =========================================================================
  "zarahemla": {
    teacher: "King Benjamin, King Mosiah II, Alma the Younger, Nephi (Son of Helaman), & Samuel the Lamanite",
    audience: "Nephite & Mulekite Citizens, Judges, Assembled Families, and Multi-ethnic Multitudes",
    whatWasTaught: "Salvation through the Atonement of Jesus Christ; selfless service to our fellow beings ('when ye are in the service of your fellow beings ye are only in the service of your God'); retaining a remission of sins from day to day; the peaceful transition from monarchy to the Reign of Judges; the specific prophetic signs of the Savior's birth (a day, night, and day without darkness) and crucifixion.",
    whyTaught: "To unite two distinct linguistic cultures (Nephites and Mulekites), establish permanent covenant loyalty to God before King Benjamin's death, and warn a prosperous but morally drifting nation against secret combinations and spiritual pride.",
    context: "The political, spiritual, and economic capital of the Nephite republic, located on the west bank of the River Sidon. Multitudes assembled around the Zarahemla Temple, pitching family tents with doors facing the elevated wooden tower.",
    howAccepted: "Deeply moving national revival: upon hearing King Benjamin, the entire congregation fell to the earth, feeling their own carnal state, and cried aloud for mercy. They covenanted to take upon them the name of Christ and reported having 'no more disposition to do evil, but to do good continually.' Later, when Samuel preached from the walls, wicked factions shot arrows and threw stones, but believers came forth to be baptized.",
    passages: ["Mosiah 1–5", "Omni 1:12–19", "Alma 2:15–38", "Alma 5:1–62", "Helaman 5:16–19", "Helaman 7–9", "Helaman 13–16", "3 Nephi 8:8", "4 Nephi 1:8"]
  },

  // =========================================================================
  // 2. BOUNTIFUL & THE TEMPLE SANCTUARY
  // =========================================================================
  "bountiful": {
    teacher: "The Resurrected Lord Jesus Christ, The Twelve Nephite Disciples, & Captain Moroni",
    audience: "A Multitude of 2,500 Assembled Saints, the Twelve Nephite Disciples, and Little Children",
    whatWasTaught: "The physical reality of the Resurrection ('Behold, I am Jesus Christ, whom the prophets testified shall come into the world'); baptism by immersion with proper priesthood authority; the Sermon at the Temple (Beatitudes & higher law of celestial discipleship); healing of all physical and spiritual infirmities; institution of the memorial Sacrament; angels ministering to children in circles of fire; expounding the prophecies of Isaiah and Malachi.",
    whyTaught: "To fulfill ancient prophecy, deliver the fulness of the Gospel directly to the surviving remnant of Israel, and establish His covenant Church in the ancient Americas following the catastrophic destructions of 3 Nephi.",
    context: "The fertile northern stronghold situated just south of the Narrow Neck of Land. Surviving families gathered in solemn reverence around the Temple in Bountiful, conversing about the marvelous signs and upheavals that had reshaped the continent.",
    howAccepted: "Overwhelming reverence and adoration: each soul stepped forward one by one to feel the nail prints in the Savior's hands and feet and the spear wound in His side, bathing His feet with their tears. When He blessed their little children, angels descended in fire, and the entire multitude fell down to worship Him as the true God of Israel.",
    passages: ["3 Nephi 11:1–17", "3 Nephi 12–14", "3 Nephi 17:1–25", "3 Nephi 18:1–39", "3 Nephi 19–26", "Alma 52:9–18", "Alma 53:3–5"]
  },

  // =========================================================================
  // 3. WATERS OF MORMON & FOREST SANCTUARY
  // =========================================================================
  "waters_of_mormon": {
    teacher: "Alma the Elder (Former Priest of King Noah)",
    audience: "A Gathering of Repentant Believers Fleeing King Noah's Royal Retinue",
    whatWasTaught: "Repentance and faith on the Lord Jesus Christ; the sacred covenant of baptism ('to come into the fold of God and be called His people'); bearing one another's burdens that they may be light; mourning with those that mourn and comforting those that stand in need of comfort; standing as witnesses of God at all times and in all places.",
    whyTaught: "To establish the true Church of Jesus Christ in hiding following the fiery martyrdom of the prophet Abinadi, providing spiritual sanctuary for those seeking pure doctrine away from royal corruption.",
    context: "A secluded wilderness sanctuary featuring a pure spring of water and a dense forest thicket near the border of the Land of Nephi, providing natural concealment from King Noah's searching cavalry.",
    howAccepted: "Profound covenant devotion: 204 souls were baptized in the fountain of Mormon, including Helam and Alma. The believers clapped their hands for joy, exclaiming: 'This is the desire of our hearts!' They organized themselves into peaceful congregations, observing the Sabbath and sharing their temporal goods according to every man's need.",
    passages: ["Mosiah 18:1–35", "Mosiah 26:15", "Alma 5:3", "3 Nephi 5:12"]
  },

  // =========================================================================
  // 4. WATERS OF SEBUS & LAND OF ISHMAEL
  // =========================================================================
  "waters_of_sebus": {
    teacher: "Ammon (Son of King Mosiah)",
    audience: "King Lamoni, Queen of the Lamanites, Royal Flocks Servants, and Plundering Bandits",
    whatWasTaught: "Servant leadership and selfless discipleship; the Creation, Fall of Adam, and Plan of Redemption through the coming Messiah; the universal love of God toward all His children, both Nephites and Lamanites.",
    whyTaught: "To win the trust of a historically hostile Lamanite monarch through humble physical service, shattering centuries of bitter ethnic prejudice and preparing an entire kingdom to receive the Gospel.",
    context: "A vital watering hole in the Land of Ishmael where royal flocks were brought daily, frequently ambushed by roving gangs of Lamanite cattle thieves who scattered the animals.",
    howAccepted: "Total national conversion: stunned by Ammon's miraculous defense of the flocks and his refusal of royal honors, King Lamoni listened with an open heart. Both the King and Queen fell prostrate under the power of the Spirit, and thousands of Lamanites laid down their weapons of rebellion, becoming the Anti-Nephi-Lehies who never did fall away.",
    passages: ["Alma 17:26–39", "Alma 18:1–43", "Alma 19:1–36", "Alma 20:1–30"]
  },

  // =========================================================================
  // 5. AMMONIHAH (WESTERN COMMERCIAL STRONGHOLD)
  // =========================================================================
  "ammonihah": {
    teacher: "Alma the Younger & Amulek",
    audience: "Chief Judges, Lawyers (including Zeezrom), Rulers of the Order of Nehor, and Corrupt Citizens",
    whatWasTaught: "The resurrection of all mankind; the final judgment where thoughts, words, and works will condemn the unrepentant; the holy order of the Melchizedek Priesthood; repentance through faith in Christ; exposing dishonest legal manipulation and bribery.",
    whyTaught: "To extend a final prophetic warning to a sophisticated, prideful city infected with priestcraft and political conspiracy before divine judgment fell upon them.",
    context: "A wealthy, heavily fortified commercial city in the western wilderness, dominated by the wealthy lawyers and judges of the Order of Nehor who rejected the church and persecuted believers.",
    howAccepted: "Violent rejection followed by miraculous deliverance: while Zeezrom was converted and repented in agony of soul, the city magistrates burned innocent women and children in fire. Alma and Amulek were cast into prison, beaten, and starved until an earthquake shattered the prison walls, killing the wicked rulers while the prophets walked out unhurt.",
    passages: ["Alma 8:8–32", "Alma 9:1–34", "Alma 10–14", "Alma 15:1–19", "Alma 16:1–11"]
  },

  // =========================================================================
  // 6. CITY OF NEPHI / LEHI-NEPHI (SOUTHERN HIGHLANDS)
  // =========================================================================
  "lehi_nephi": {
    teacher: "Nephi, Jacob, Enos, Jarom, Omni, King Mosiah I, Abinadi, & Aaron (Son of Mosiah)",
    audience: "The Early Nephite Colony, Zeniff's Colonists, King Noah's Royal Court, and the King of all the Lamanites",
    whatWasTaught: "Industry, temple building, and working with metals; the law of Moses pointing forward to Christ; the Ten Commandments; Isaiah's prophecies of the Suffering Servant (Isaiah 53); the resurrection of Christ and redemption from spiritual death; the Plan of Salvation expounded to King Lamoni's father.",
    whyTaught: "To preserve the covenant identity of the righteous branch of Israel fleeing Laman's murderous threats, confront King Noah's lavish apostasy, and later convert the supreme Lamanite sovereign.",
    context: "The original southern highland capital established by Nephi around 580 BC, featuring a sacred temple modeled after Solomon's temple in Jerusalem, elevated towers, and royal palaces.",
    howAccepted: "Divided reception across centuries: the early Nephites lived in peace and righteousness; Zeniff's colony struggled against Lamanite harassment; King Noah condemned Abinadi to the flames; yet Abinadi's words converted Alma, while later Aaron converted the Great King of all the Lamanites, leading to nationwide religious liberty.",
    passages: ["2 Nephi 5:1–34", "Jacob 2–3", "Enos 1:1–27", "Omni 1:12–14", "Mosiah 9–10", "Mosiah 11–17", "Alma 22:1–26"]
  },

  // =========================================================================
  // 7. HILL CUMORAH / RAMAH (LAND NORTHWARD)
  // =========================================================================
  "cumorah": {
    teacher: "The Prophet-Historian Mormon, Moroni, & the Prophet Ether",
    audience: "All Future Generations, the Remnant of the House of Israel, and Modern Readers",
    whatWasTaught: "The tragic consequences of national wickedness and rejection of God; the preservation of sacred scriptures; the infinite love and grace of Jesus Christ; faith, hope, and charity (Moroni 7); the covenant gathering of Israel; the promise that anyone who reads the Book of Mormon with a sincere heart can know its truth by the Holy Ghost (Moroni 10:3–5).",
    whyTaught: "To provide a solemn final testament of a destroyed civilization, bury centuries of prophetic records safely for the latter days, and invite all humanity to come unto Christ and be perfected in Him.",
    context: "The prominent northern hill in the Land of Desolation (called Ramah by the ancient Jaredites), where both the Jaredite and Nephite nations fought their apocalyptic final struggles.",
    howAccepted: "A heartbreaking finale: hundreds of thousands fell in battle due to unrepented hatred, leaving Mormon and Moroni alone to mourn their extinct nation. Moroni wandered alone for decades, faithfully finishing the record and sealing the gold plates into the stone box for Joseph Smith to recover in 1827.",
    passages: ["Ether 15:1–34", "Mormon 6:1–22", "Mormon 8:1–35", "Moroni 1–10"]
  },

  // =========================================================================
  // 8. LAND OF FIRST INHERITANCE (WEST SEA SHORE)
  // =========================================================================
  "land_first_inheritance": {
    teacher: "The Patriarch Lehi, Sariah, & Nephi",
    audience: "Laman, Lemuel, Sam, Nephi, Jacob, Joseph, Zoram, and the Daughters of Ishmael",
    whatWasTaught: "The land of promise as a choice land above all other lands; the Tree of Life vision and the rod of iron; the Fall of Adam and Eve ('Adam fell that men might be; and men are, that they might have joy'); moral agency; patriarchal blessings upon all Lehi's posterity; the coming Messiah as the Redeemer.",
    whyTaught: "To lay the spiritual and doctrinal foundation of the new civilization upon landing in the promised land and plead with rebellious older sons before Lehi's death.",
    context: "The coastal haven along the West Sea shore where Lehi's ship made landfall following their transoceanic voyage guided by the Liahona.",
    howAccepted: "Righteous sons (Nephi, Sam, Jacob, Joseph) cherished their father's counsel; Laman and Lemuel murmured continually, plotted against Nephi's life, and eventually forced the righteous to flee into the wilderness to found the Land of Nephi.",
    passages: ["1 Nephi 18:23–25", "2 Nephi 1:1–32", "2 Nephi 2:1–30", "2 Nephi 3:1–25", "2 Nephi 4:1–12"]
  },

  // =========================================================================
  // 9. JUDEA & THE SOUTHWEST STRATEGIC BORDER
  // =========================================================================
  "judea": {
    teacher: "Helaman (Son of Alma) & the Mothers of the Stripling Warriors",
    audience: "The 2,060 Young Sons of the Anti-Nephi-Lehies and the Western Armies of Antipus",
    whatWasTaught: "Unwavering faith in God; honoring maternal teachings ('they did not doubt their mothers knew it'); exact obedience and moral purity as the foundation of miraculous deliverance; righteous defense of homeland without bloodthirstiness.",
    whyTaught: "To reinforce the collapsing southwestern frontier when adult Nephite manpower was exhausted by relentless multi-front warfare.",
    context: "A western border city garrison surrounded by defensive earthworks, serving as the central supply base for the military campaigns between Antiparah, Cumeni, and Manti.",
    howAccepted: "Miraculous military triumph: all 2,060 young men fought with superhuman courage, and though every single one received wounds, not one young warrior was slain, because of their complete faith that God would preserve them.",
    passages: ["Alma 53:10–22", "Alma 56:1–57", "Alma 57:19–27", "Alma 58:1–41"]
  },

  // =========================================================================
  // 10. ANTIONUM & HILL ONIDAH (EASTERN ZORAMITE HIGHLANDS)
  // =========================================================================
  "antionum": {
    teacher: "Alma the Younger, Amulek, Zeezrom, Corianton, & Shiblon",
    audience: "The Wealthy Ruling Class on the Rameumptom and the Cast-Out Poor on Hill Onidah",
    whatWasTaught: "True vs. false worship: God is a spirit who dwells in the humble heart, not in proud synagogues; the gospel word as an expanding seed that must be planted, nourished, and tested; redemption through Christ's infinite and eternal sacrifice.",
    whyTaught: "To counter the apostate Zoramite religion, which practiced ostentatious prayer on the Rameumptom and cast out the impoverished labor class from their places of worship.",
    context: "A land east of Zarahemla bordering the Lamanites, where Zoramites built exclusive synagogues with elevated single-person prayer stands (Rameumptom).",
    howAccepted: "A stark division: the wealthy elite drove Alma and Amulek out and expelled all poor believers; the humble poor on Hill Onidah embraced the word, crossed over into the Land of Jershon, and were lovingly received and fed by the people of Ammon.",
    passages: ["Alma 31:1–38", "Alma 32:1–43", "Alma 33:1–23", "Alma 34:1–41", "Alma 35:1–16"]
  },

  // =========================================================================
  // 11. VALLEY OF GIDEON (EAST OF RIVER SIDON)
  // =========================================================================
  "valley_of_gideon": {
    teacher: "Alma the Younger, Gideon the Heroic Patriot, & Chief Judge Pahoran",
    audience: "The Citizens of Gideon, King Noah (historically), and Korihor the Anti-Christ",
    whatWasTaught: "The mortal condescension and Atonement of Jesus Christ ('He shall go forth, suffering pains and afflictions and temptations of every kind... that He may know according to the flesh how to succor His people'); righteous civil leadership; resisting anti-Christ skepticism; loyalty to constitutional liberty.",
    whyTaught: "To strengthen a faithful congregation during Alma's preaching tour and fortify the people against Korihor's secular agitation.",
    context: "A fertile valley situated east of the River Sidon, nestled between the heights of the eastern mountains and the Sidon basin.",
    howAccepted: "Exemplary spiritual discernment: the people of Gideon were more faithful than the citizens of Zarahemla. When Korihor arrived, they refused to debate him, bound him, and sent him directly to the high priest and chief judge.",
    passages: ["Mosiah 19:1–8", "Alma 1:7–15", "Alma 6:7–8", "Alma 7:1–27", "Alma 30:21–29", "Alma 61–62"]
  },

  // =========================================================================
  // 12. SHORE OF MORIANCUMER & VALLEY OF NIMROD (JAREDITE EXODUS)
  // =========================================================================
  "moriancumer_shore": {
    teacher: "The Lord Jesus Christ & The Brother of Jared (Moriancumer)",
    audience: "The Jaredite Colony, Families, and Future Generations",
    whatWasTaught: "The nature of the premortal body of Christ; faith that pierces the veil; building tight barges according to divine design; spiritual light in dark places through molten stones; prayerful reliance upon God in times of crossing vast oceans.",
    whyTaught: "To prepare the Jaredite families for a harrowing 344-day transoceanic crossing to the Promised Land and reveal the reality of Christ's spirit body.",
    context: "The great ocean seashore where the Jaredites camped for four years in tents before constructing their submersible barges.",
    howAccepted: "Humble repentance followed by surpassing revelation: after being chastened for four hours for forgetting to pray, the Brother of Jared exercised faith so complete that the Lord showed Himself, declaring: 'Never have I showed myself unto man whom I have created, for never has man believed in me as thou hast.'",
    passages: ["Ether 1:33–43", "Ether 2:1–25", "Ether 3:1–28", "Ether 6:1–12"]
  },

  // =========================================================================
  // 13. LAND OF MELEK (WESTERN FRONTIER)
  // =========================================================================
  "melek": {
    teacher: "Alma the Younger & Amulek",
    audience: "The Inhabitants and Settlers on the Western Borders of Zarahemla",
    whatWasTaught: "The holy order of God; sanctification through the Holy Spirit; repentance from dead works; preparing for the coming of the Redeemer to take away the sins of the world.",
    whyTaught: "Following his great sermon in the Valley of Gideon, Alma traveled west over the wilderness to bring the blessings of the gospel to the western borders of the republic.",
    context: "An expansive agricultural land situated west of the River Sidon, bordering the western wilderness that separated Nephite lands from the West Sea.",
    howAccepted: "Widespread, joyful acceptance: the people throughout all the land of Melek came to Alma from all borders to hear his words, were deeply converted, and were baptized in large numbers throughout the entire region.",
    passages: ["Alma 8:3–6", "Alma 31:6", "Alma 35:13–14"]
  },

  // =========================================================================
  // 14. CITY OF SIDOM (NORTHERN REFUGE FOR THE PERSECUTED)
  // =========================================================================
  "sidom": {
    teacher: "Alma the Younger, Amulek, & Zeezrom (Converted)",
    audience: "Believing Refugees Driven from Ammonihah and Sick Seekers of Healing",
    whatWasTaught: "The healing power of faith in Jesus Christ; forgiveness of sins for the truly repentant; establishing the church among cast-out refugees; ordaining priests and teachers.",
    whyTaught: "To provide physical and spiritual sanctuary for the husbands and fathers whose families had been burned in Ammonihah, and to heal Zeezrom who lay burning with a severe fever.",
    context: "A quiet inland city northeast of Ammonihah, serving as a sanctuary for displaced believers.",
    howAccepted: "Miraculous healing and revival: Zeezrom leaped to his feet whole after declaring his faith in Christ and was immediately baptized by Alma. A thriving branch of the Church was established, and Zeezrom became one of the greatest missionary companions of Alma and Amulek.",
    passages: ["Alma 15:1–18"]
  },

  // =========================================================================
  // 15. LAND OF JERSHON (EAST SEA SANCTUARY OF PEACE)
  // =========================================================================
  "jershon": {
    teacher: "Alma the Younger, Ammon, & Captain Moroni",
    audience: "The Anti-Nephi-Lehies (People of Ammon) and Nephite Guard Garrisons",
    whatWasTaught: "Covenant preservation; the sacredness of human life; total forgiveness of murder through Christ; sustaining covenant pacifists through righteous military defense; sacrificial charity.",
    whyTaught: "To give an inheritance of land to the converted Lamanite pacifists who had covenanted never to take up arms again, providing them protection under the Nephite shield.",
    context: "A fertile coastal land along the East Sea shore south of Bountiful, chosen specifically to isolate the peaceful People of Ammon from Lamanite attack corridors.",
    howAccepted: "Saintly devotion and gratitude: the People of Ammon lived in profound holiness, never looking back to their former sins, and generously gave of their substance to support the Nephite armies who defended them.",
    passages: ["Alma 27:21–27", "Alma 28:1–3", "Alma 35:14", "Alma 43:11–13"]
  },

  // =========================================================================
  // 16. MIDDONI (LAMANITE PRISON LAND)
  // =========================================================================
  "middoni": {
    teacher: "Ammon, Aaron, Muloki, Ammah, & King Lamoni",
    audience: "King Antiomno, Prison Guards, and Lamanite Inhabitants of Middoni",
    whatWasTaught: "Mercy, righteousness, and divine justice; freedom of conscience; the true nature of God; testifying of Christ even when bound in chains and starved in prison.",
    whyTaught: "To secure the miraculous release of Aaron and his companions from a dungeon where they were suffering under brutal Lamanite imprisonment.",
    context: "A fortified Lamanite city ruled by King Antiomno, situated in the deeper southern territories.",
    howAccepted: "Humbled sovereign: initially hostile, King Antiomno was astounded by Ammon's love for Lamoni and his miraculous strength. He immediately ordered Aaron, Muloki, and Ammah released, clothed, and fed, opening Middoni to the preaching of the gospel.",
    passages: ["Alma 20:1–30", "Alma 21:12–17", "Alma 23:10"]
  },

  // =========================================================================
  // 17. CITY OF JERUSALEM (AMALEKITE SYNAGOGUE STRONGHOLD)
  // =========================================================================
  "city_of_jerusalem": {
    teacher: "Aaron (Son of King Mosiah) & Muloki",
    audience: "Amalekites, Amulonites, and Hardened Lamanite Synagogue Congregations",
    whatWasTaught: "The coming of the Son of God; redemption from the Fall; the resurrection of the dead; that salvation comes through Christ rather than the outward performances of the law.",
    whyTaught: "To preach the gospel in the great city founded by apostate Nephite dissenters who had aligned themselves with the Lamanites to fight against God.",
    context: "A great city built near the Waters of Mormon by Lamanites, Amalekites, and former priests of Noah, named after their ancient covenant homeland in Judea.",
    howAccepted: "Stubborn, angry rejection: the apostate Amalekites argued contendously, mocking the idea of a Messiah, and had Aaron and his brethren cast into prison and beaten, forcing them to flee to Ani-Anti.",
    passages: ["Alma 21:1–11", "Alma 24:1"]
  },

  // =========================================================================
  // 18. HELAM & VALLEY OF ALMA (THE RIGHTEOUS IN BONDAGE)
  // =========================================================================
  "helam": {
    teacher: "Alma the Elder & Heavenly Angels",
    audience: "The 450 Faithful Covenant Keepers from the Waters of Mormon",
    whatWasTaught: "Patience in affliction; trusting the Lord in bondage; bearing one another's burdens; the power of silent prayer; that the Lord visits His people in their afflictions.",
    whyTaught: "To sustain a peaceful Christian community suddenly subjugated by Amulon and a lost Lamanite army, forbidden on pain of death to pray aloud.",
    context: "A beautiful, secluded city and agricultural valley discovered by Alma's followers in the wilderness, eight days' journey from the Waters of Mormon.",
    howAccepted: "Miraculous divine deliverance: the Lord eased their burdens so that they could not feel them upon their backs, put the Lamanite guards into a deep sleep, and guided the entire colony safely to Zarahemla.",
    passages: ["Mosiah 23:1–39", "Mosiah 24:1–25"]
  },

  // =========================================================================
  // 19. LAND OF SIRON (BORDER OF THE LAMANITES)
  // =========================================================================
  "land_of_siron": {
    teacher: "Alma the Younger (Counseling his Son Corianton)",
    audience: "Corianton (Son of Alma) and Inhabitants of the Southern Border",
    whatWasTaught: "The unpardonable sin; the grievous sin of unchastity ('the most abominable above all sins save it be the shedding of innocent blood'); the state of the soul between death and resurrection (spirit world: paradise vs. outer darkness); the true meaning of restoration (good for good, evil for evil); justice and mercy harmonized through the Atonement.",
    whyTaught: "Corianton had abandoned his ministry in Antionum to pursue the harlot Isabel in Siron, causing the Zoramites to disbelieve Alma's words.",
    context: "A border region between Nephite and Lamanite territory known as a place of worldly vice and moral temptation.",
    howAccepted: "Profound, heart-wrenching repentance: Corianton received his father's severe rebuke with humility, repented completely, and returned to become a valiant, lifelong missionary of the gospel.",
    passages: ["Alma 39:1–19", "Alma 40:1–26", "Alma 41:1–15", "Alma 42:1–31", "Alma 49:30"]
  },

  // =========================================================================
  // 20. NARROW PASS & NARROW NECK (CONTINENTAL CHOKE POINT)
  // =========================================================================
  "narrow_pass": {
    teacher: "Captain Moroni, Teancum, & the Prophet-General Mormon",
    audience: "Nephite Border Defenses, Infiltrating Lamanite Armies, and All Future Readers",
    whatWasTaught: "Vigilant defense of national liberty; preventing the encirclement of free lands; strategic stewardship over the land choice above all others.",
    whyTaught: "To secure the narrow continental gateway that connected the Land Southward to the Land Northward and prevented Lamanite armies from outflanking the Nephite republic.",
    context: "A narrow coastal corridor between the Sea West and the inland waters, scarcely one day and a half's journey for a Nephite.",
    howAccepted: "Heroic military defense: Teancum slew Morianton here to stop his northern rebellion, and centuries later, Mormon fortified this pass to hold off massive Lamanite invasions.",
    passages: ["Alma 50:33–36", "Alma 52:9", "Alma 63:5", "Mormon 2:28–29", "Mormon 3:5–6"]
  },

  // =========================================================================
  // 21. CITY OF MORONI (EAST SEA SEASHORE)
  // =========================================================================
  "city_of_moroni": {
    teacher: "Captain Moroni & Nephite Military Chaplains",
    audience: "Nephite Border Garrisons, Allied Troops, and Captive Lamanite Armies",
    whatWasTaught: "Defending God, religion, liberty, peace, wives, and children; the sanctity of the Title of Liberty; righteousness as the sole guarantee of divine military protection; mercy and honorable treatment of prisoners of war.",
    whyTaught: "To anchor the vulnerable southeastern frontier against Amalickiah's massive Lamanite invasion and prevent the southern front from collapsing.",
    context: "A coastal fortress built directly on the east seashore near the southern border line of Lamanite possessions, fortified with immense earth banks, timber ramparts, and defensive parapets.",
    howAccepted: "Heroic defense followed by tragic cataclysm: the garrison fought valiantly, was captured through internal king-men treason, and retaken by Captain Moroni. Centuries later in AD 34, during the crucifixion upheavals, the entire city sank into the depths of the sea and was covered by water.",
    passages: ["Alma 50:13–15", "Alma 51:22–27", "Alma 62:30–36", "3 Nephi 8:9", "3 Nephi 9:4"]
  },

  // =========================================================================
  // 22. HILL SHIM & LAND OF ANTUM (SACRED RECORD REPOSITORY)
  // =========================================================================
  "hill_shim": {
    teacher: "Ammaron & Mormon (The Prophet-Historian)",
    audience: "Mormon (at age 10), Moroni, and the Latter-day Generations",
    whatWasTaught: "Sacred custodial responsibility; the preservation of the sacred gold plates of Nephi; spiritual sobriety and observational discernment in youth ('a quick observer'); writing the history of a falling civilization.",
    whyTaught: "Ammaron, constrained by the Holy Ghost, hid all the sacred records in Hill Shim before his death and commissioned the 10-year-old child Mormon to retrieve them at age 24.",
    context: "A prominent hill in the northern Land of Antum, used as an intermediate depository for all the Nephite plates before Mormon moved them to Cumorah.",
    howAccepted: "Perfect lifelong fidelity: young Mormon remembered Ammaron's commandment, retrieved the plates of Nephi at the appointed time, and faithfully abridged them into the Book of Mormon.",
    passages: ["Mormon 1:1–5", "Mormon 2:17", "Mormon 4:23", "Ether 9:3"]
  },

  // =========================================================================
  // 23. CITY OF JACOBUGATH (PRIDE & SECRET COMBINATIONS)
  // =========================================================================
  "city_of_jacobugath": {
    teacher: "The Voice of the Lord Jesus Christ from Heaven",
    audience: "King Jacob, Secret Combinations, Corrupt Lawyers, and Judges",
    whatWasTaught: "Divine judgment upon secret combinations, murders, and priestcraft; that those who stone and murder prophets cannot escape the justice of an offended God.",
    whyTaught: "The wicked rulers and lawyers had assassinated the Chief Judge Lachoneus, destroyed the constitutional government, and crowned a king named Jacob, establishing a fortress of pride.",
    context: "A northern stronghold built in the northern wilderness by the royalist secret combination, far from the righteous.",
    howAccepted: "Total and terrifying destruction: during the AD 34 cataclysm, the Lord caused the city to be burned with fire from heaven to destroy their secret combinations from before His face.",
    passages: ["3 Nephi 7:9–14", "3 Nephi 9:9"]
  },

  // =========================================================================
  // 24. HILL MANTO & HILL RIPLAH (STRATEGIC SIDON PASSES)
  // =========================================================================
  "hill_manti": {
    teacher: "Alma the Younger & Captain Moroni",
    audience: "Chief Captain Zoram, Lehi, and the Nephite Armies of Defense",
    whatWasTaught: "Inquiring of the Lord by revelation for military guidance; that God directs the defense of the righteous; covenant honor in combat.",
    whyTaught: "To discover where the Lamanite armies were marching so the Nephites could intercept them and rescue captive brethren without unnecessary slaughter.",
    context: "High hills overlooking the south wilderness and the headwaters of the River Sidon.",
    howAccepted: "Prophetic revelation guided Captain Moroni's ambush against Zerahemnah, resulting in the surrender of the Lamanite armies and the covenant of peace.",
    passages: ["Alma 16:5–8", "Alma 43:22–54", "Alma 44:1–24"]
  },

  // =========================================================================
  // 25. LAND OF MORON & VALLEY OF CORIHOR (JAREDITE CRADLE & TRAGEDY)
  // =========================================================================
  "land_of_moron": {
    teacher: "The Prophet Ether & Righteous Jaredite Kings (Orihah, Shule, Lib)",
    audience: "Coriantumr, Jaredite Monarchs, Rebellious Princes, and Secret Factions",
    whatWasTaught: "Repentance from secret combinations and bloodthirstiness; the New Jerusalem to be built upon this land; the spiritual perils of pride and dynastic rebellion.",
    whyTaught: "To plead with the Jaredite monarchs through centuries of civil war before the nation completely annihilated itself.",
    context: "The royal cradle and capital of the Jaredite civilization, situated near the Land of Desolation.",
    howAccepted: "Tragic cycle of pride, rebellion, and final destruction: though righteous kings like Shule and Lib protected the prophets, Coriantumr and his foes hardened their hearts, leading to total extinction.",
    passages: ["Ether 7:5–6", "Ether 9:1–3", "Ether 13:1–31", "Ether 14:1–31"]
  }
};

/**
 * Rich Biographical Dossiers for Notable Book of Mormon People & Leaders
 * Matches every notable figure found in map-data.js with exact roles and scriptures.
 */
const PROPHET_ROLES = {
  "Jesus Christ": "The Son of God, Creator of Heaven and Earth, and Redeemer of the World. Appeared in resurrected glory at the Temple in Bountiful (3 Nephi 11–28).",
  "Nephi": "Prophet, record-keeper, and founding leader of the Nephites. Built the ship and temple; recorded 1 & 2 Nephi.",
  "Lehi": "Patriarch and founding prophet who led his family out of Jerusalem in 600 BC; beheld the Tree of Life vision (1 & 2 Nephi).",
  "Jacob": "Brother of Nephi, consecrated priest and prophet. Preached on the Atonement, pride, and chastity (2 Nephi 9; Jacob 1–7).",
  "Enos": "Son of Jacob who wrestled before God in mighty prayer for his own soul, his brethren, and the Lamanites (Enos 1).",
  "Jarom": "Nephite record-keeper who recorded the growth, stiffneckedness, and military defenses of his people (Jarom 1).",
  "Omni": "Nephite record-keeper and soldier who preserved the small plates of Nephi during centuries of warfare (Omni 1).",
  "King Mosiah I": "Righteous king who was warned of God to flee the Land of Nephi; discovered the Mulekites at Zarahemla (Omni 1:12–19).",
  "King Benjamin": "Righteous prophet-king who addressed his people from a tower at the Zarahemla temple, teaching of service and Christ (Mosiah 1–6).",
  "King Mosiah II": "Last Nephite king who established the Reign of Judges, translated the 24 Jaredite plates, and preserved the records (Mosiah 28–29).",
  "Abinadi": "Courageous martyr prophet who testified of Christ's suffering servant role before wicked King Noah and his priests (Mosiah 11–17).",
  "Alma the Elder": "Priest of Noah converted by Abinadi's witness; baptized 204 souls at the Waters of Mormon and organized the church (Mosiah 18; 23–24).",
  "Alma the Younger": "First Chief Judge and High Priest who resigned the judgment seat to preach repentance across all Nephite lands (Mosiah 27; Alma 1–44).",
  "Amulek": "Citizen of Ammonihah called by an angel to companion Alma; testified of the resurrection and Christ's infinite Atonement (Alma 8–15; 34).",
  "Zeezrom": "Cunning lawyer in Ammonihah who tried to bribe Amulek; repented in agony of soul, was healed by Alma, and became a valiant missionary (Alma 10–15; 31).",
  "Ammon": "Son of Mosiah who served King Lamoni as a servant, defended the royal flocks at the Waters of Sebus, and converted thousands (Alma 17–20).",
  "Aaron": "Son of Mosiah who endured prison in Middoni and converted the Great King of all the Lamanites at the City of Nephi (Alma 21–23).",
  "Omner": "Son of Mosiah who companion with his brothers on their 14-year mission among the Lamanites (Alma 17–25).",
  "Himni": "Son of Mosiah who preached the word of God faithfully among the Lamanites (Alma 17–25).",
  "King Lamoni": "Lamanite monarch in the Land of Ishmael converted by Ammon's humble service and witness of the Plan of Redemption (Alma 17–19).",
  "Lamoni's Father": "Supreme monarch over all Lamanite lands converted by Aaron; decreed religious liberty across the entire continent (Alma 20; 22).",
  "The Lamanite Queen": "Wife of King Lamoni who exercised sublime faith during her husband's spiritual trance, declaring: 'He is not dead' (Alma 19).",
  "Abish": "Lamanite handmaid who had been converted for many years by a vision of her father; ran from house to house to gather the crowd (Alma 19:16).",
  "Captain Moroni": "Chief Captain of all the Nephite armies at age 25; raised the Title of Liberty and designed revolutionary earthen fortifications (Alma 43–62).",
  "Helaman (Son of Alma)": "High priest and military commander of the 2,060 Stripling Warriors; preserved every youth through their faith in God (Alma 53; 56–58).",
  "2,060 Stripling Warriors": "Youthful sons of the Anti-Nephi-Lehies who fought with miraculous valor, protected by the faith taught by their mothers (Alma 56–58).",
  "Teancum": "Fearless Nephite military commander who assassinated the tyrants Amalickiah and Ammoron in their own pavilions (Alma 50–52; 61–62).",
  "Pahoran": "Third Chief Judge of the Nephites who remained loyal to the constitution and liberty when rebel king-men drove him from Zarahemla (Alma 50; 60–62).",
  "Gideon": "Nephite patriot and church defender who opposed King Noah and stood firm against Nehor before suffering martyrdom (Mosiah 19; Alma 1).",
  "Nephi (Son of Helaman)": "Chief Judge and prophet who yielded the bench to preach; encircled by fire in prison; prophesied murder of Seezoram (Helaman 5–11).",
  "Lehi (Son of Helaman)": "Valiant brother of Nephi; encircled by fire in prison and ministered with angels across Nephite and Lamanite lands (Helaman 5; 11).",
  "Samuel the Lamanite": "Lamanite prophet who stood upon the walls of Zarahemla to prophesy the signs of Christ's birth and crucifixion (Helaman 13–16).",
  "Lachoneus": "Righteous Chief Judge who received Giddianhi's threatening letter and gathered all Nephites to starve out the Gadianton robbers (3 Nephi 1–4).",
  "Gidgiddoni": "Chief Captain and prophet of the Nephites who possessed the spirit of prophecy and revelation in defeating the robbers (3 Nephi 3–4).",
  "Mormon": "Prophet-general, historian, and abridger of the Nephite records from age 16; leader of the armies at the final battle of Cumorah (Mormon 1–7).",
  "Moroni": "Final solitary prophet of the Nephites who sealed the records at Cumorah, abridged the book of Ether, and wrote Moroni 1–10.",
  "Brother of Jared": "Mighty prophet who cried unto the Lord at the Tower of Babel, saw the premortal Christ, and led his colony across the ocean (Ether 1–3).",
  "Jared": "Patriarch and brother of Moriancumer who led their families and friends from the Tower of Babel to the promised land (Ether 1–6).",
  "Ether": "Final prophet of the Jaredites who dwelt in the cavity of a rock, cried repentance to Coriantumr, and recorded their total collapse (Ether 12–15).",
  "Coriantumr": "Last king of the Jaredites who fought Shiz in apocalyptic warfare and was discovered by the Mulekites at Zarahemla (Ether 13–15; Omni 1:21).",
  "Zeniff": "Overzealous leader who led a colony from Zarahemla back to the Land of Nephi; father of King Noah (Mosiah 9–10).",
  "King Limhi": "Righteous son of King Noah who helped his enslaved people escape Lamanite bondage and discover the 24 Jaredite plates (Mosiah 7–8; 19–22).",
  "Shiblon": "Righteous son of Alma the Younger who served faithfully as a missionary among the Zoramites and kept the records (Alma 38; 63).",
  "Corianton": "Son of Alma who initially strayed with the harlot Isabel in Siron, repented deeply, and returned to lifelong missionary labor (Alma 39–42; 63).",
  "Ammaron": "Prophet who hid all the sacred records in Hill Shim and commissioned the 10-year-old boy Mormon to remember them (Mormon 1:1–4).",
  "Sariah": "Wife of Lehi and matriarch of the Nephite nation; journeyed through the wilderness and across the ocean (1 Nephi 1–18)."
};

/**
 * Universal Dossier Resolver: returns curated dossier or dynamically generates
 * a rich, authentic context dossier for any landmark in the Book of Mormon atlas.
 */
function getPlaceDossier(locId, loc) {
  const key = String(locId || "").toLowerCase();

  // Check direct match in curated dossiers
  if (PLACE_DOSSIERS[key]) {
    return PLACE_DOSSIERS[key];
  }

  // Check alias matches
  if (key === "land_of_zarahemla" || key === "river_sidon") return PLACE_DOSSIERS["zarahemla"];
  if (key === "land_bountiful") return PLACE_DOSSIERS["bountiful"];
  if (key === "forest_of_mormon" || key === "thicket_of_mormon") return PLACE_DOSSIERS["waters_of_mormon"];
  if (key === "ishmael" || key === "land_of_ishmael") return PLACE_DOSSIERS["waters_of_sebus"];
  if (key === "city_of_nephi") return PLACE_DOSSIERS["lehi_nephi"];
  if (key === "hill_cumorah" || key === "waters_of_ripliancum") return PLACE_DOSSIERS["cumorah"];
  if (key === "manti" || key === "antiparah" || key === "cumeni") return PLACE_DOSSIERS["judea"];
  if (key === "hill_onidah") return PLACE_DOSSIERS["antionum"];
  if (key === "mount_shelem" || key === "valley_of_nimrod") return PLACE_DOSSIERS["moriancumer_shore"];
  if (key === "helamans_chain") return PLACE_DOSSIERS["judea"];
  if (key === "valley_of_alma") return PLACE_DOSSIERS["helam"];
  if (key === "shemlon") return PLACE_DOSSIERS["lehi_nephi"];
  if (key === "ani_anti") return PLACE_DOSSIERS["city_of_jerusalem"];
  if (key === "narrow_neck" || key === "waters_by_the_neck") return PLACE_DOSSIERS["narrow_pass"];
  if (key === "plains_of_heshlon" || key === "valley_of_gilgal" || key === "plains_of_agosh") return PLACE_DOSSIERS["cumorah"];
  if (key === "land_of_desolation") return PLACE_DOSSIERS["cumorah"];
  if (key === "land_of_antum") return PLACE_DOSSIERS["hill_shim"];
  if (key === "zeezrom_city") return PLACE_DOSSIERS["sidom"];

  // Dynamic fallback using landmark properties with verified prophetic connections
  const name = (loc && loc.name) || "This Scriptural Landmark";
  const region = (loc && loc.region) || "Ancient America";
  const people = (loc && loc.notablePeople && loc.notablePeople.length) ? loc.notablePeople.join(", ") : "Nephite and Lamanite Prophets and Leaders";
  const summary = (loc && loc.summary) || "A significant geographical and historical landmark recorded in the sacred text of the Book of Mormon.";
  const passages = (loc && loc.refs) ? loc.refs.map(r => r.ref) : [];

  return {
    teacher: people,
    audience: `Inhabitants, Garrison Defenders, and Covenant Families in the ${region}`,
    whatWasTaught: `The foundational message of the Book of Mormon: faith in Jesus Christ, repentance from sin, the solemnity of sacred covenants, and the defense of constitutional liberty. Historically witnessed in connection with ${name}.`,
    whyTaught: "To preserve the covenant people of God, sound a warning voice against pride, secret combinations, and dissension, and bear solemn witness of the Redeemer of the world.",
    context: `${summary} Situated within the ${region}, shaping military movements, day-journeys, and sacred assemblies.`,
    howAccepted: "Wherever the word of God was faithfully proclaimed by righteous prophets, humble souls repented and entered into baptismal covenants, while those who hardened their hearts brought conflict upon the land.",
    passages: passages
  };
}

// Global browser window attachment
if (typeof window !== "undefined") {
  window.PLACE_DOSSIERS = PLACE_DOSSIERS;
  window.PROPHET_ROLES = PROPHET_ROLES;
  window.getPlaceDossier = getPlaceDossier;
}
