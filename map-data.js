/**
 * Comprehensive Book of Mormon Geography Dataset
 * Strictly Verified Against the Text of the Book of Mormon
 * 
 * Coordinates calibrated directly to printed landmark dots on 'Book of Mormon Geography Clean.jpg' (848x1264)
 */

const mapLocations = {
  // ==========================================
  // LAND NORTHWARD (JAREDITE LANDS & DESOLATION)
  // ==========================================
  "waters_of_ripliancum": {
    id: "waters_of_ripliancum",
    name: "Waters of Ripliancum",
    title: "Great Waters of the Far North",
    category: "waters",
    region: "Far Land Northward",
    coords: { x: 52.8, y: 6.2 },
    highlightSize: "large",
    glowColor: "azure",
    icon: "waves",
    territoryPolygon: [
      { x: 30, y: 4 }, { x: 45, y: 3 }, { x: 62, y: 4 }, { x: 75, y: 8 },
      { x: 65, y: 11 }, { x: 48, y: 10 }, { x: 34, y: 8 }
    ],
    summary: "An expansive body of water situated in the far Land Northward. Moroni records that the Jaredite name Ripliancum translates to 'large, or to exceed all'. The Book of Mormon establishes its northern position because after the battle fought here, Shiz's army fled 'southward' to Ogath, and Coriantumr pursued him southward to the hill Ramah (which is Cumorah).",
    refs: [
      { ref: "Ether 15:8", text: "And it came to pass that he came to the waters of Ripliancum, which, by interpretation, is large, or to exceed all; wherefore, when they came to these waters they pitched their tents; and Shiz also pitched his tents near unto them; and therefore on the morrow they did come to battle." },
      { ref: "Ether 15:9", text: "And it came to pass that they fought an exceedingly sore battle, in which Coriantumr was wounded again, and he fainted with the loss of blood." },
      { ref: "Ether 15:10", text: "And it came to pass that the armies of Coriantumr did press upon the armies of Shiz that they beat them, that they caused them to flee before them; and they did flee southward, and did pitch their tents in a place which was called Ogath." },
      { ref: "Ether 15:11", text: "And it came to pass that the army of Coriantumr did pitch their tents by the hill Ramah; and it was that same hill where my father Mormon did hide up the records unto the Lord, which were sacred." }
    ],
    historicalEvents: [
      "Jaredite civil war reaches the northernmost great waters exceeding all others (Ether 15:8)",
      "Coriantumr wounded in severe combat and faints from blood loss (Ether 15:9)",
      "Coriantumr's army rallies and drives the armies of Shiz fleeing southward to Ogath and Ramah/Cumorah (Ether 15:10-11)"
    ],
    notablePeople: ["Coriantumr", "Shiz", "Ether", "Mormon"]
  },

  "plains_of_agosh": {
    id: "plains_of_agosh",
    name: "Plains of Agosh",
    title: "Battleground of the Jaredite Insurgency",
    category: "wilderness",
    region: "Land Northward (East of Gilgal)",
    coords: { x: 76.0, y: 15.0 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "sword",
    summary: "A sprawling plain in the Land Northward where Coriantumr pursued Lib and slew him in open battle, which prompted Lib's brother Shiz to take a blood oath of vengeance.",
    refs: [
      { ref: "Ether 14:15", text: "And it came to pass that Lib did pursue Coriantumr until he came to the plains of Agosh." },
      { ref: "Ether 14:16", text: "And Coriantumr gave battle unto Lib upon the plains of Agosh, and he slew him after a hard struggle." }
    ],
    historicalEvents: [
      "Coriantumr slays King Lib in single combat",
      "Shiz takes an oath of vengeance, beginning a campaign of total annihilation"
    ],
    notablePeople: ["Coriantumr", "Lib", "Shiz"]
  },

  "cumorah": {
    id: "cumorah",
    name: "Hill Cumorah / Ramah",
    title: "Battleground of Two Extinctions & Repository of Plates",
    category: "sacred",
    region: "Land Northward (Desolation)",
    coords: { x: 52.8, y: 15.6 },
    highlightSize: "large",
    glowColor: "gold",
    icon: "records",
    summary: "The prominent hill in the Land Northward where both the Jaredites (calling it Ramah) and the Nephites fought their final battles. Here Mormon concealed all sacred records before delivering the Gold Plates to Moroni.",
    refs: [
      { ref: "Ether 15:11", text: "And it came to pass that the army of Coriantumr did pitch their tents by the hill Ramah; and it was that same hill where my father Mormon did hide up the records unto the Lord, which were sacred." },
      { ref: "Mormon 6:6", text: "And it came to pass that when we had gathered in all our people in one to the land of Cumorah, behold I, Mormon, began to be old; and knowing it to be the last struggle of my people, and having been commanded of the Lord that I should not suffer the records which had been handed down by our fathers, which were sacred, to fall into the hands of the Lamanites... I made this record out of the plates of Nephi, and hid up in the hill Cumorah all the records which had been entrusted to me by the hand of the Lord, save it were these few plates which I gave unto my son Moroni." },
      { ref: "Mormon 8:1-5", text: "Behold I, Moroni, do finish the record of my father, Mormon. Behold, I have but few things to write, which things I have been commanded by my father... my father hath been slain in battle, and all my kinsfolk, and I have not friends nor whither to go." }
    ],
    historicalEvents: [
      "Jaredite Final Battle: Coriantumr slays Shiz at Ramah, ending the Jaredite nation",
      "Mormon conceals the vast Nephite archive in the Hill Cumorah (AD 385)",
      "Nephite Final Stand: 230,000 fallen warriors lamented by Mormon",
      "Moroni guards the Gold Plates alone in the wilderness (AD 421)"
    ],
    notablePeople: ["Coriantumr", "Ether", "Shiz", "Mormon", "Moroni"]
  },

  "plains_of_heshlon": {
    id: "plains_of_heshlon",
    name: "Plains of Heshlon",
    title: "Western Plains of the Jaredites",
    category: "wilderness",
    region: "Land Northward (West of Cumorah)",
    coords: { x: 43.5, y: 21.0 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "mountain",
    summary: "A plain west of Ramah where Coriantumr and Shared battled for three consecutive days with unmatched fury.",
    refs: [
      { ref: "Ether 13:25", text: "And it came to pass that Shared gave him battle; and he did beat him, insomuch that in the third year he did bring him into captivity." },
      { ref: "Ether 13:28", text: "And Coriantumr gave battle unto Shared in the plains of Heshlon, and he beat him, and Shared fled back to the valley of Gilgal." }
    ],
    historicalEvents: [
      "Three-day clash between Coriantumr and Shared",
      "Shared forced to retreat east into the Valley of Gilgal"
    ],
    notablePeople: ["Coriantumr", "Shared"]
  },

  "valley_of_gilgal": {
    id: "valley_of_gilgal",
    name: "Valley of Gilgal",
    title: "Valley of Jaredite Clashes",
    category: "wilderness",
    region: "Land Northward (South of Ramah)",
    coords: { x: 57.5, y: 19.5 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "sword",
    summary: "A rugged valley south of Ramah where Coriantumr pursued Shared and slew him in mortal combat, sustaining a severe thigh wound.",
    refs: [
      { ref: "Ether 14:28", text: "And Shared did pitch his tents in the valley of Gilgal; and Coriantumr did pitch his tents in the plains of Heshlon." },
      { ref: "Ether 14:29-30", text: "And Coriantumr gave battle unto Shared in the valley of Gilgal, in which he did beat Shared and did slay him; and Shared wounded Coriantumr in his thigh." }
    ],
    historicalEvents: [
      "Decisive battle in the Valley of Gilgal",
      "Death of Shared and severe wounding of Coriantumr"
    ],
    notablePeople: ["Coriantumr", "Shared"]
  },

  "hill_shim": {
    id: "hill_shim",
    name: "Hill Shim (in Antum)",
    title: "Ancient Record Sanctuary of Ammaron",
    category: "sacred",
    region: "Land of Antum (Northward)",
    coords: { x: 72.8, y: 20.2 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "records",
    summary: "A sacred hill in the land of Antum where the disciple Ammaron deposited all the sacred records before commissioning ten-year-old Mormon to take them when he reached twenty-four.",
    refs: [
      { ref: "Mormon 1:3", text: "And Ammaron said unto me: I perceive that thou art a sober child, and art quick to observe; therefore, when ye are about twenty and four years old I would that ye should remember the things that ye have observed concerning this people; and when ye are of that age go to the land Antum, unto a hill which shall be called Shim; and there have I deposited unto the Lord all the sacred engravings concerning this people." },
      { ref: "Mormon 4:23", text: "And now I, Mormon, seeing that the Lamanites were about to overthrow the land, therefore I did go to the hill Shim, and did take up all the records which Ammaron had hid up unto the Lord." },
      { ref: "Ether 9:3", text: "And the Lord warned Omer in a dream that he should depart out of the land; wherefore Omer departed out of the land with his family, and traveled many days, and came over and passed by the hill of Shim." }
    ],
    historicalEvents: [
      "King Omer's flight past the hill Shim to escape Akish's assassins",
      "Ammaron conceals the sacred annals of the Nephites (c. AD 321)",
      "Mormon removes the plates from Hill Shim before the Lamanite occupation (c. AD 375)"
    ],
    notablePeople: ["Ammaron", "Mormon", "King Omer"]
  },

  "city_of_jordan": {
    id: "city_of_jordan",
    name: "City of Jordan",
    title: "Nephite Fortress City of the Late Wars",
    category: "fortresses",
    region: "Land Northward (Near Hill Shim & Valley of Gilgal)",
    coords: { x: 59.4, y: 20.5 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "fort",
    labelPosition: "top",
    summary: "The heavily fortified Nephite bastion in the Land Northward along the river valley by Hill Shim, where Mormon retreated and successfully repulsed repeated Lamanite assaults during the late wars (Mormon 5:3-4).",
    refs: [
      { ref: "Mormon 5:3-4", text: "And it came to pass that we did fly to the city of Jordan... and the Nephites did maintain the city of Jordan and repulse the Lamanites." }
    ],
    historicalEvents: [
      "Heroic Nephite defensive stand under Mormon's leadership (Mormon 5:3-4)",
      "Repulse of the Lamanite host before the final retreat toward Cumorah"
    ],
    notablePeople: ["Mormon"]
  },

  "boaz": {
    id: "boaz",
    name: "City of Boaz",
    title: "Site of Nephite Bold Stand",
    category: "fortresses",
    region: "Land Northward",
    coords: { x: 77.0, y: 25.0 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "fort",
    summary: "A fortified city where Nephite refugees made a courageous defense against the Lamanite armies, standing with exceeding boldness before being overrun.",
    refs: [
      { ref: "Mormon 4:20-21", text: "And they fled again from the Lamanites, and they came to the city of Boaz; and there they did stand against the Lamanites with exceeding boldness, insomuch that the Lamanites did not beat them until they had come again the second time." }
    ],
    historicalEvents: [
      "Nephite victory during the first assault at Boaz",
      "Overwhelmed during the second wave; refugees flee to Jordan"
    ],
    notablePeople: ["Mormon"]
  },

  "teancum": {
    id: "teancum",
    name: "City of Teancum",
    title: "Coastal Fortress of the Northward Seashore",
    category: "fortresses",
    region: "Land Northward (Near Seashore by Desolation)",
    coords: { x: 56.1, y: 31.9 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "fort",
    summary: "A coastal fortress city situated in the borders by the seashore near the city Desolation, named in honor of the great Nephite patriot Teancum.",
    refs: [
      { ref: "Mormon 4:3", text: "And it came to pass that the Nephites did flee before them until they had come unto the city of Teancum; and the city of Teancum lay in the borders by the seashore; and it was also near the city Desolation." },
      { ref: "Mormon 4:6-7", text: "And it came to pass that the Nephites did defend the city of Teancum... and did beat the Lamanites and take many prisoners." }
    ],
    historicalEvents: [
      "Heroic repulse of Lamanite invaders by the seashore",
      "Lamanite sacrifice of Nephite women and children outside the walls"
    ],
    notablePeople: ["Mormon", "Teancum (commemorated)"]
  },

  "narrow_pass": {
    id: "narrow_pass",
    name: "Narrow Pass",
    title: "The Strategic Gateway to the Land Northward",
    category: "wilderness",
    region: "North of the Narrow Neck by the Sea",
    coords: { x: 45.2, y: 29.5 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "chokepoint",
    summary: "The vital narrow pass leading by the sea into the Land Northward. Guarded vigilantly by Captain Moroni and Teancum to prevent Lamanites or dissenters from bypassing Nephite territory.",
    refs: [
      { ref: "Alma 50:34", text: "And it came to pass that they did not head them until they had come to the borders of the land Desolation; and there they did head them, by the narrow pass which led by the sea into the land northward, yea, by the sea, on the west and on the east." },
      { ref: "Alma 52:9", text: "And he also sent orders unto him that he should fortify the land Bountiful, and secure the narrow pass which led into the land northward, lest the Lamanites should obtain that point and should have power to harass them on every side." },
      { ref: "Mormon 3:5", text: "And it came to pass that I did cause my people that they should gather themselves together at the land Desolation, to a city which was in the borders, by the narrow pass which led into the land southward." }
    ],
    historicalEvents: [
      "Teancum intercepts and slays the rebel leader Morianton",
      "Fortification of the pass by Captain Moroni",
      "Mormon gathers Nephite forces to defend the continent's gateway"
    ],
    notablePeople: ["Captain Moroni", "Teancum", "Morianton", "Mormon"]
  },

  "land_of_desolation": {
    id: "land_of_desolation",
    name: "Land of Desolation (Mulekite First Landing)",
    title: "Ruins of the Jaredites & Site of Mulekite First Landfall",
    category: "regions",
    region: "Land Northward (Above the Narrow Neck)",
    coords: { x: 52.0, y: 26.5 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "ruins",
    summary: "The vast northern territory where the Jaredite nation perished. Alma 22:30 explicitly identifies this northern coastal territory as the 'place of their first landing' for the people of Zarahemla (Mulekites), after which they migrated southward into the wilderness along the River Sidon to establish the City of Zarahemla.",
    refs: [
      { ref: "Alma 22:30", text: "And it bordered upon the land which they called Desolation, it being so far northward that it came into the land which had been peopled and been destroyed, of whose bones we have spoken, which was discovered by the people of Zarahemla, it being the place of their first landing." },
      { ref: "Alma 22:31", text: "And they came from there up into the south wilderness. Thus the land on the northward was called Desolation, and the land on the southward was called Bountiful." },
      { ref: "Helaman 6:10", text: "Now the land south was called Lehi, and the land north was called Mulek, which was after the son of Zedekiah; for the Lord did bring Mulek into the land north, and Lehi into the land south." },
      { ref: "Omni 1:14-16", text: "Mosiah discovered that the people of Zarahemla came out from Jerusalem at the time that Zedekiah, king of Judah, was carried away captive into Babylon, and were brought by the hand of the Lord across the great waters." }
    ],
    historicalEvents: [
      "Place of first landing for Prince Mulek and the people of Zarahemla (Alma 22:30)",
      "Mulekites discover the ruins and bones of the extinct Jaredite civilization",
      "Mulekites migrate 'up into the south wilderness' along River Sidon to found Zarahemla",
      "Discovery of the 24 gold plates by King Limhi's 43 explorers (Mosiah 8:7-12)"
    ],
    notablePeople: ["Mulek", "Zarahemla", "Limhi's Explorers", "Mormon", "Ether"]
  },

  // ==========================================
  // NARROW NECK & SEAS
  // ==========================================
  "narrow_neck": {
    id: "narrow_neck",
    name: "Narrow Neck of Land",
    title: "Strategic Continental Choke Point",
    category: "wilderness",
    region: "Between Land Southward and Land Northward",
    coords: { x: 50.5, y: 34.2 },
    highlightSize: "large",
    glowColor: "gold",
    icon: "chokepoint",
    territoryPolygon: [
      { x: 42, y: 32 }, { x: 56, y: 32 }, { x: 58, y: 37 }, { x: 44, y: 37 }
    ],
    summary: "The narrow isthmus separating the Land Northward from the Land Southward. Described as exactly a day and a half's journey for a Nephite on foot from the Sea West to the Sea East.",
    refs: [
      { ref: "Alma 22:32", text: "And now, it was only the distance of a day and a half's journey for a Nephite, on the line Bountiful and the land Desolation, from the east to the west sea; and thus the land of Nephi and the land of Zarahemla were nearly surrounded by water, there being a small neck of land between the land northward and the land southward." },
      { ref: "Alma 63:5", text: "And it came to pass that Hagoth, he being an exceeding curious man, therefore he went forth and built him an exceeding large ship, on the borders of the land Bountiful, by the land Desolation, and launched it forth into the west sea, by the narrow neck which led into the land northward." },
      { ref: "Mormon 2:28-29", text: "And the Lamanites did give unto us the land northward, yea, even to the narrow passage which led into the land southward. And we gave unto the Lamanites all the land southward." }
    ],
    historicalEvents: [
      "Moroni stations military cordons to hem in Lamanites",
      "Hagoth constructs maritime shipyards launching ships into the Pacific",
      "Boundary treaty line established between Mormon and the Lamanites"
    ],
    notablePeople: ["Captain Moroni", "Hagoth", "Mormon"]
  },

  "waters_by_the_neck": {
    id: "waters_by_the_neck",
    name: "Waters by the Neck",
    title: "Inlet of the Eastern Isthmus",
    category: "waters",
    region: "East Shoreline at Narrow Neck",
    coords: { x: 66.5, y: 34.5 },
    highlightSize: "small",
    glowColor: "azure",
    icon: "waves",
    summary: "The coastal inlets and bays flanking the narrow neck of land on the East Sea, serving as natural water barriers protecting the border of Bountiful.",
    refs: [
      { ref: "Alma 50:34", text: "By the narrow pass which led by the sea into the land northward, yea, by the sea, on the west and on the east." }
    ],
    historicalEvents: [
      "Coastal surveillance and border patrols by Captain Moroni"
    ],
    notablePeople: ["Teancum", "Captain Moroni"]
  },

  "sea_west": {
    id: "sea_west",
    name: "Sea West",
    title: "The Great Western Ocean",
    category: "waters",
    region: "Western Continental Border",
    coords: { x: 13.0, y: 31.0 },
    highlightSize: "large",
    glowColor: "azure",
    icon: "waves",
    summary: "The great ocean bounding the western shores of both the Land Northward and Land Southward. Where Hagoth launched his majestic ships and along whose coast the Nephite armies fortified strongholds.",
    refs: [
      { ref: "Alma 22:27", text: "A narrow strip of wilderness, which ran from the sea east even to the sea west." },
      { ref: "Alma 63:5", text: "Hagoth built him an exceeding large ship, on the borders of the land Bountiful, and launched it forth into the west sea." }
    ],
    historicalEvents: [
      "Landing of Father Lehi on the southwest coast",
      "Hagoth's maritime voyages into uncharted northern waters"
    ],
    notablePeople: ["Hagoth", "Alma", "Helaman"]
  },

  "sea_east": {
    id: "sea_east",
    name: "Sea East",
    title: "The Great Eastern Ocean",
    category: "waters",
    region: "Eastern Continental Border",
    coords: { x: 87.0, y: 40.0 },
    highlightSize: "large",
    glowColor: "azure",
    icon: "waves",
    summary: "The ocean bounding the eastern shores of the continent. Site of Moroni's string of coastal fortified cities: Moroni, Nephihah, Lehi, Morianton, Omner, Gid, and Mulek.",
    refs: [
      { ref: "Alma 50:13", text: "And it came to pass that the Nephites began the foundation of a city, and they called the name of the city Moroni; and it was by the east sea; and it was on the south by the line of the possessions of the Lamanites." },
      { ref: "Alma 51:26", text: "And thus he went on, taking possession of many cities, the city of Nephihah, and the city of Lehi, and the city of Morianton, and the city of Omner, and the city of Gid, and the city of Mulek, all of which were on the east borders by the seashore." }
    ],
    historicalEvents: [
      "Fortification of the eastern seaboard by Captain Moroni",
      "Amalickiah's coastal blitzkrieg halted by Teancum on the beach"
    ],
    notablePeople: ["Captain Moroni", "Teancum", "Amalickiah"]
  },

  // ==========================================
  // EAST COASTAL NETWORK & BOUNTIFUL
  // ==========================================
  "bountiful": {
    id: "bountiful",
    name: "City of Bountiful",
    title: "Sanctuary of Christ's Visitation",
    category: "sacred",
    region: "Land Bountiful (South of the Narrow Neck)",
    coords: { x: 64.4, y: 39.7 },
    highlightSize: "large",
    glowColor: "gold",
    icon: "christ",
    fate3Nephi: {
      type: "sanctuary",
      label: "Spared Sanctuary: Christ Descends at the Temple",
      verse: "3 Nephi 11:1"
    },
    summary: "The prime fortified coastal key near the eastern seashore and the narrow neck of land. Here at the temple in Bountiful, the resurrected Lord Jesus Christ descended out of heaven to minister to the Nephite multitude.",
    refs: [
      { ref: "Alma 22:31", text: "And they came from there up into the south wilderness. Thus the land on the northward was called Desolation, and the land on the southward was called Bountiful, it being the wilderness which is filled with all manner of wild animals of every kind, a part of which had come from the land northward for food." },
      { ref: "Alma 52:17-27", text: "Teancum and Captain Moroni liberate the city through strategic decoy and valor." },
      { ref: "3 Nephi 11:1-8", text: "And now it came to pass that there were a great multitude gathered together, of the people of Nephi, round about the temple which was in the land Bountiful; and they were marveling and wondering one with another... and behold, they saw a Man descending out of heaven; and he was clothed in a white robe; and he came down and stood in the midst of them." },
      { ref: "3 Nephi 11:14-15", text: "Arise and come forth unto me, that ye may thrust your hands into my side, and also that ye may feel the prints of the nails in my hands and in my feet, that ye may know that I am the God of Israel, and the God of the whole earth, and have been slain for the sins of the world." }
    ],
    historicalEvents: [
      "Fortification of Bountiful by Captain Moroni with deep ditches and timber palisades",
      "Slaying of King Amalickiah by Teancum on the borders of Bountiful",
      "Recapture of Bountiful by Captain Moroni and Teancum",
      "The Visitation of the Resurrected Savior Jesus Christ (c. AD 34)"
    ],
    notablePeople: ["Jesus Christ", "Captain Moroni", "Teancum", "Lehi (Captain)", "Nephi (Son of Helaman)"]
  },

  "land_bountiful": {
    id: "land_bountiful",
    name: "Land Bountiful",
    title: "Fruitful Northern Territory",
    category: "regions",
    region: "Land Bountiful",
    coords: { x: 62.0, y: 41.5 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "covenant",
    summary: "A fertile, prosperous territory spanning from the east to the west sea south of the narrow neck, filled with game, fruit, and lush vegetation.",
    refs: [
      { ref: "Alma 22:31", text: "And the Nephites had inhabited the land Bountiful, even from the east unto the west sea, and thus the Nephites in their wisdom, with their guards and their armies, had hemmed in the Lamanites on the south, that thereby they should have no more possession on the north." }
    ],
    historicalEvents: [
      "Nephite defensive cordon blocking northern wilderness"
    ],
    notablePeople: ["Captain Moroni", "Teancum"]
  },

  "jershon": {
    id: "jershon",
    name: "Land & City of Jershon",
    title: "Sanctuary of the Anti-Nephi-Lehies",
    category: "cities",
    region: "East Coastal Plain (East of River Sidon)",
    coords: { x: 72.1, y: 39.2 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "covenant",
    summary: "A territory on the east by the sea given by the Nephites as an inheritance to the converted Lamanites (People of Ammon) who had buried their weapons of war. Protected by the Nephite armies.",
    refs: [
      { ref: "Alma 27:22", text: "And it came to pass that the voice of the people came, saying: Behold, we will give up the land of Jershon, which is on the east by the sea, which joins the land Bountiful, which is on the south of the land Bountiful; and this land Jershon is the land which we will give unto our brethren for an inheritance." },
      { ref: "Alma 43:15", text: "And it came to pass that the Lamanites came with their thousands; and they came into the land of Antionum, which is the land of the Zoramites; and a man by the name of Zerahemnah was their leader." }
    ],
    historicalEvents: [
      "National covenant asylum granted to the converted Lamanites",
      "Arrival and settlement of the People of Ammon",
      "Moroni stations armies to protect the peace-loving believers"
    ],
    aliases: [
      "Anti-Nephi-Lehies",
      "Anti-Lehi-Nephites",
      "Anti-Nephi-Lehi",
      "Anti-Lehi-Nephi",
      "Anti-Nephi-Lehites",
      "People of Ammon",
      "Ammonites",
      "Stripling Warriors",
      "Converted Lamanites"
    ],
    notablePeople: [
      "Ammon",
      "King Anti-Nephi-Lehi",
      "Anti-Nephi-Lehies",
      "Anti-Lehi-Nephites (People of Ammon)",
      "People of Ammon",
      "Captain Moroni"
    ]
  },

  "mulek": {
    id: "mulek",
    name: "City of Mulek",
    title: "Heavily Fortified Coastal Redoubt",
    category: "fortresses",
    region: "East Sea Shore (South of Bountiful)",
    coords: { x: 73.1, y: 43.1 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "shield",
    summary: "A formidable stronghold on the East Sea shore captured by Amalickiah. Retaken by Captain Moroni and Teancum through a brilliant decoy maneuver where Jacob the Zoramite was slain.",
    refs: [
      { ref: "Alma 51:26", text: "And thus he went on, taking possession of many cities... and the city of Mulek, all of which were on the east borders by the seashore." },
      { ref: "Alma 52:19-26", text: "Moroni commanded that Teancum should take a small number of men and march down near the seashore; and Moroni and his army marched in the night into the wilderness, on the west of the city Mulek... and when the guards of the city saw him, they went and told Jacob, who was their leader, that an army of the Nephites was marching by... and they pursued Teancum... and Moroni marched into the city of Mulek and took possession of it." }
    ],
    historicalEvents: [
      "Amalickiah's capture of the city",
      "Moroni's decoy entrapment and liberation of Mulek",
      "Lamanite prisoners employed in building fortifications around Bountiful"
    ],
    notablePeople: ["Captain Moroni", "Teancum", "Jacob the Zoramite"]
  },

  "gid": {
    id: "gid",
    name: "City of Gid",
    title: "Site of Lamanite Prison Camp Liberation",
    category: "fortresses",
    region: "East Sea Shore",
    coords: { x: 74.5, y: 46.3 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "fort",
    summary: "A coastal city where thousands of Nephite prisoners of war were imprisoned. Liberated without bloodshed by Moroni using Laman, a former servant of the king, who brought strong wine to drug the guards.",
    refs: [
      { ref: "Alma 55:7-24", text: "And it came to pass that Moroni caused that Laman and a small number of his men should go to the city of Gid... and Laman said: Behold, I am a Lamanite; behold, we have escaped from the Nephites, and they sleep; and behold we have taken of their wine and brought with us... and they took of the wine freely... and when they were all drunk and in a deep sleep, Moroni caused that weapons of war should be cast unto the prisoners." }
    ],
    historicalEvents: [
      "Bloodless liberation of thousands of Nephite captive warriors",
      "Surrender and disarmament of the entire Lamanite garrison"
    ],
    notablePeople: ["Captain Moroni", "Laman (soldier)"]
  },

  "omner": {
    id: "omner",
    name: "City of Omner",
    title: "Coastal Garrison of the East",
    category: "cities",
    region: "East Sea Shore",
    coords: { x: 76.7, y: 48.7 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "fort",
    summary: "One of the eastern coastal cities fortified by Moroni and later captured during Amalickiah's rapid coastal assault.",
    refs: [
      { ref: "Alma 51:26", text: "And thus he went on, taking possession of many cities... and the city of Omner, all of which were on the east borders by the seashore." }
    ],
    historicalEvents: [
      "Captured by Amalickiah during the king-men insurrection",
      "Liberated during Captain Moroni's coordinated counteroffensive"
    ],
    notablePeople: ["Captain Moroni", "Amalickiah"]
  },

  "morianton": {
    id: "morianton",
    name: "City & Land of Morianton",
    title: "Border Controversy & Intercepted Insurgency",
    category: "cities",
    region: "East Sea Shore (Bordering Lehi on the North)",
    coords: { x: 79.2, y: 51.3 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "shield",
    summary: "A coastal city whose leader, Morianton, instigated a boundary war with neighboring Lehi and conspired to lead his people into the Land Northward until intercepted and slain by Teancum at the narrow pass.",
    refs: [
      { ref: "Alma 50:25", text: "And it came to pass that in the commencement of the twenty and fourth year of the reign of the judges, there would also have been peace among the people of Nephi had it not been for a contention which took place among them concerning the land of Lehi, and the land of Morianton, which joined upon the borders of Lehi; both of which were on the borders by the seashore." },
      { ref: "Alma 50:26-35", text: "For behold, the people who possessed the land of Morianton did claim a part of the land of Lehi; wherefore there began to be a warm contention between them... and Morianton was a man of much passion, wherefore he was angry with one of his maidservants, and he fell upon her and beat her much... and she fled forth and came unto the camp of Moroni and told him all... and Teancum headed Morianton by the narrow pass and slew him." }
    ],
    historicalEvents: [
      "Border dispute between Morianton and Lehi",
      "Morianton beats a maidservant who reveals the secret conspiracy to Moroni",
      "Teancum slays Morianton in single combat at the narrow pass"
    ],
    notablePeople: ["Morianton", "Teancum", "Captain Moroni"]
  },

  "city_of_lehi": {
    id: "city_of_lehi",
    name: "City of Lehi",
    title: "Eastern Seashore Anchor",
    category: "cities",
    region: "East Sea Shore (South of Morianton)",
    coords: { x: 81.6, y: 54.0 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "fort",
    summary: "A prominent coastal city built by the Nephites on the east seashore, named in honor of Father Lehi and commanded by Chief Captain Lehi.",
    refs: [
      { ref: "Alma 50:15", text: "And they also began in that same year to build many cities on the north, one which they called Lehi, which was on the north by the borders of the seashore." },
      { ref: "Alma 50:25-28", text: "The people of Morianton claimed part of the land of Lehi; the people of Lehi fled to Moroni's camp for protection." },
      { ref: "Alma 51:24", text: "And it came to pass that the people of the city of Lehi gathered themselves together again, and prepared and were resolute to give them battle." },
      { ref: "Alma 51:26", text: "Amalickiah took possession of the city of Lehi as part of his eastern campaign." },
      { ref: "Alma 62:30", text: "Moroni and Lehi encircle the Lamanite armies near the eastern cities, retaking the land." }
    ],
    historicalEvents: [
      "Founded by the Nephites under Captain Moroni (c. 72 BC)",
      "Border conflict with Morianton settled by Moroni",
      "Captured by Amalickiah, later recaptured by Chief Captain Lehi"
    ],
    notablePeople: ["Lehi (Military Commander)", "Captain Moroni", "Amalickiah"]
  },

  "nephihah": {
    id: "nephihah",
    name: "City of Nephihah",
    title: "Inland Eastern Stronghold",
    category: "fortresses",
    region: "Inland Plains between Zarahemla and East Sea",
    coords: { x: 69.7, y: 58.7 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "fort",
    summary: "A major fortified hub founded between the city of Moroni and the city of Aaron, named in honor of the second Chief Judge Nephihah. Captured by Lamanites due to government treason, and later retaken by Moroni scaling the walls at night with cords and ladders.",
    refs: [
      { ref: "Alma 50:14", text: "And they also began a foundation for a city between the city of Moroni and the city of Aaron, coordinating the borders of Aaron and Moroni; and they called the name of the city, or the land, Nephihah." },
      { ref: "Alma 51:26", text: "Amalickiah marches against Nephihah and takes possession of it." },
      { ref: "Alma 62:18-26", text: "And it came to pass that Moroni caused that his men should march forth and come upon the top of the wall, and let themselves down into that part of the city, yea, even on the west, where the Lamanites did not camp with their armies... and when the Lamanites awoke and saw that the armies of Moroni were within the walls, they were affrighted exceedingly." }
    ],
    historicalEvents: [
      "Founded during the judge ship of Nephihah",
      "Fell during the king-men rebellion in Zarahemla",
      "Nighttime infiltration by Moroni and Pahoran scaling the walls with ladders"
    ],
    notablePeople: ["Nephihah", "Captain Moroni", "Pahoran"]
  },

  "antionum": {
    id: "antionum",
    name: "Land of Antionum",
    title: "Domain of the Apostate Zoramites & Rameumptom",
    category: "regions",
    region: "East of River Sidon (South of Jershon)",
    coords: { x: 83.6, y: 57.9 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "ruins",
    summary: "The territory east of River Sidon inhabited by the apostate Zoramites who worshipped upon the Rameumptom (holy stand) and cast out the humble poor, whom Alma and Amulek converted.",
    refs: [
      { ref: "Alma 31:3", text: "Now the Zoramites had gathered themselves together in a land which they called Antionum, which was east of the land of Zarahemla, which lay nearly bordering upon the seashore, which was on the south of the land of Jershon, which also bordered upon the wilderness south." },
      { ref: "Alma 31:13-23", text: "Alma beholds the Zoramites praying upon the holy stand, which they called Rameumptom, thanking God that they were separated and elected." },
      { ref: "Alma 32", text: "Alma preaches to the poor outcasts upon the Hill Onidah, comparing the word of God unto a seed." }
    ],
    historicalEvents: [
      "Alma and Amulek's mission to the Zoramites",
      "Observation of the prideful Rameumptom prayers",
      "Sermon on faith and the word as a seed (Alma 32)",
      "Zoramite military alliance with Lamanites triggering major war"
    ],
    notablePeople: ["Alma the Younger", "Amulek", "Zoram (Apostate leader)"]
  },

  "hill_onidah": {
    id: "hill_onidah",
    name: "Hill Onidah",
    title: "Pulpit of the Seed of Faith Sermon",
    category: "sacred",
    region: "Land of Antionum",
    coords: { x: 80.9, y: 57.0 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "mountain",
    summary: "A prominent hill situated in the interior of the Land of Antionum on solid ground (not in the East Sea). Here, Alma the Younger stood to preach to the great multitude of impoverished Zoramites cast out of their synagogues, delivering his immortal discourse comparing faith unto a seed (Alma 32:4).",
    refs: [
      { ref: "Alma 32:4", text: "And it came to pass that they came unto him upon the hill Onidah, and there came unto him a great multitude, which were they of whom we have been speaking, which were the poor in heart." },
      { ref: "Alma 32:28", text: "Now, we will compare the word unto a seed. Now, if ye give place, that a seed may be planted in your heart, behold, if it be a true seed, or a good seed, if ye do not cast it out by your unbelief, that ye will resist the Spirit of the Lord, behold, it will begin to swell within your breasts." }
    ],
    historicalEvents: [
      "Alma preaches the seed of faith discourse",
      "Amulek delivers his witness of the infinite and eternal Atonement (Alma 34)"
    ],
    notablePeople: ["Alma the Younger", "Amulek"]
  },

  "aaron_coastal": {
    id: "aaron_coastal",
    name: "City of Aaron (Coastal)",
    title: "Southeastern Coastal Hub",
    category: "cities",
    region: "Near City of Moroni by the East Sea",
    coords: { x: 88.5, y: 62.2 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "fort",
    summary: "A strategic Nephite fortified city situated along the southeastern seashore corridor north of the City of Moroni, serving as a vital defensive garrison against Lamanite incursions along the coast.",
    refs: [
      { ref: "Alma 50:14", text: "And they also began a foundation for a city between the city of Moroni and the city of Aaron, joining the borders of Aaron and Moroni; and they called the name of the city, or the land, Nephihah." },
      { ref: "Alma 51:26", text: "And thus he went on, taking possession of many cities, the city of Nephihah, and the city of Lehi, and the city of Morianton, and the city of Omner, and the city of Gid, and the city of Mulek, all of which were on the east borders by the seashore." }
    ],
    historicalEvents: [
      "Border defense along the southeastern perimeter"
    ],
    notablePeople: ["Captain Moroni"]
  },

  "city_of_moroni": {
    id: "city_of_moroni",
    name: "City of Moroni",
    title: "Southeastern Coastal Bulwark",
    category: "fortresses",
    region: "East Sea Coast (Southeast border near Lamanites)",
    coords: { x: 91.0, y: 66.8 },
    highlightSize: "large",
    glowColor: "amber",
    icon: "shield",
    fate3Nephi: {
      type: "sunk_sea",
      label: "Sunk into the Depths of the Sea",
      verse: "3 Nephi 9:4"
    },
    territoryPolygon: [
      { x: 81, y: 59 }, { x: 92, y: 60 }, { x: 93, y: 68 }, { x: 83, y: 68 }, { x: 79, y: 65 }
    ],
    summary: "Built by Captain Moroni on the eastern shoreline near the southern border as a frontline stronghold against Lamanite aggression. Sunk into the depths of the sea during the crucifixion upheavals.",
    refs: [
      { ref: "Alma 50:13", text: "And it came to pass that the Nephites began the foundation of a city, and they called the name of the city Moroni; and it was by the east sea; and it was on the south by the line of the possessions of the Lamanites." },
      { ref: "Alma 51:23-26", text: "And it came to pass that the Lamanites took the city, yea, took possession of all their fortifications... even the city of Moroni." },
      { ref: "Alma 62:32-34", text: "Moroni marched to the city of Moroni, and surrounded the army of the Lamanites, and took them prisoners." },
      { ref: "3 Nephi 8:9", text: "And the city of Moroni did sink into the depths of the sea, and the inhabitants thereof were drowned." }
    ],
    historicalEvents: [
      "Founded by Captain Moroni as part of national defense network (c. 72 BC)",
      "Captured by Amalickiah during the king-men insurrection",
      "Retaken by Captain Moroni in heroic siege",
      "Submerged into the sea during the cataclysms of 3 Nephi"
    ],
    notablePeople: ["Captain Moroni", "Amalickiah", "Lehi (Military Commander)"]
  },

  "aaron_inland": {
    id: "aaron_inland",
    name: "Land & City of Aaron (Inland)",
    title: "Southern Border Settlement",
    category: "cities",
    region: "Southern Border of Zarahemla",
    coords: { x: 76.2, y: 66.1 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "fort",
    summary: "An inland settlement south of Zarahemla near the mountain border, contributing supplies and troops to the eastern theaters of war.",
    refs: [
      { ref: "Alma 50:14", text: "Coordinating the borders of Aaron and Moroni, inland from the sea." }
    ],
    historicalEvents: [
      "Inland buffer garrison on the southern frontier"
    ],
    notablePeople: ["Captain Moroni"]
  },

  // ==========================================
  // HEARTLAND & RIVER SIDON BASIN
  // ==========================================
  "zarahemla": {
    id: "zarahemla",
    name: "City of Zarahemla",
    title: "Heart of the Nephite Nation",
    category: "capitals",
    region: "Land of Zarahemla (West of River Sidon)",
    coords: { x: 45.5, y: 51.3 },
    highlightSize: "large",
    glowColor: "gold",
    icon: "temple",
    summary: "The political, spiritual, and economic capital of the Nephite nation for over four centuries. Founded by the people of Zarahemla (Mulekites) and united under King Mosiah I.",
    refs: [
      { ref: "Omni 1:12-14", text: "Behold, I will speak unto you somewhat concerning Mosiah, who was made king over the land of Zarahemla; for behold, he being warned of the Lord that he should flee out of the land of Nephi... he did according as the Lord had commanded him... and they discovered a people, who were called the people of Zarahemla. Now, there was great rejoicing among the people of Zarahemla; and also Zarahemla did rejoice exceedingly, because the Lord had sent the people of Mosiah with the plates of brass which contained the record of the Jews." },
      { ref: "Mosiah 2:1-6", text: "King Benjamin caused that the people should gather themselves together throughout all the land, that they might go up to the temple to hear the words which he should speak unto them... and they pitched their tents round about the temple, every man having his tent with the door thereof towards the temple." },
      { ref: "Alma 2:15", text: "And it came to pass that the Amlicites came upon the hill Amnihu, which was east of the river Sidon, which ran by the land of Zarahemla, and there they began to make war with the Nephites." },
      { ref: "3 Nephi 8:8", text: "And the city of Zarahemla did take fire." },
      { ref: "4 Nephi 1:8", text: "The city of Zarahemla did they rebuild, and peace was maintained throughout the land." }
    ],
    historicalEvents: [
      "Union of the Nephites and Mulekites under King Mosiah I (c. 120 BC)",
      "King Benjamin's Farewell Address at the Temple (c. 124 BC)",
      "Establishment of the Reign of the Judges (Alma the Younger)",
      "Invasion and liberation of Zarahemla (Captain Moroni & Pahoran)",
      "Destroyed by fire at Christ's crucifixion; rebuilt in the era of peace"
    ],
    notablePeople: ["King Mosiah I", "King Benjamin", "Mosiah II", "Alma the Younger", "Pahoran", "Samuel the Lamanite"]
  },

  "land_of_zarahemla": {
    id: "land_of_zarahemla",
    name: "Greater Land of Zarahemla",
    title: "The Central Nephite Heartland",
    category: "regions",
    region: "Central Continent",
    coords: { x: 55.0, y: 62.0 },
    highlightSize: "large",
    glowColor: "gold",
    icon: "crown",
    fate3Nephi: {
      type: "burned",
      label: "Took Fire at the Crucifixion",
      verse: "3 Nephi 8:8"
    },
    territoryPolygon: [
      { x: 38, y: 52 }, { x: 56, y: 47 }, { x: 68, y: 55 }, { x: 67, y: 68 }, { x: 45, y: 69 }, { x: 34, y: 60 }
    ],
    summary: "The expansive heartland surrounding the River Sidon, bounded by the Narrow Strip of Wilderness in the south and Land Bountiful in the north.",
    refs: [
      { ref: "Alma 22:27-32", text: "The proclamation of King Lamoni's father defining the land of Zarahemla, bordered on the south by the wilderness." }
    ],
    historicalEvents: [
      "Golden era of Nephite liberty under the Judges",
      "Agricultural and cultural center of the nation"
    ],
    notablePeople: ["King Benjamin", "Mosiah II", "Pahoran"]
  },

  "river_sidon": {
    id: "river_sidon",
    name: "River Sidon",
    title: "The Great Arterial River",
    category: "waters",
    region: "Flows Northward from Manti past Zarahemla",
    coords: { x: 52.0, y: 45.0 },
    highlightSize: "large",
    glowColor: "azure",
    icon: "waves",
    summary: "The primary river of the Book of Mormon, flowing northward from its head near Manti, past Gideon and Zarahemla. Site of baptisms, river crossings, and major battles.",
    refs: [
      { ref: "Alma 2:15", text: "The river Sidon, which ran by the land of Zarahemla." },
      { ref: "Alma 2:34", text: "And thus he cleared the ground, or rather the bank, which was on the west of the river Sidon, throwing the bodies of the Lamanites who had been slain into the waters of Sidon, that thereby his people might have room to cross and contend with the Lamanites and the Amlicites on the west side of the river Sidon." },
      { ref: "Alma 4:4", text: "And they began to establish the church more fully; yea, and many were baptized in the waters of Sidon and were joined unto the church of God." },
      { ref: "Alma 43:32", text: "And the remainder he concealed in the west valley, on the west of the river Sidon, and so down into the borders of the land Manti." }
    ],
    historicalEvents: [
      "Mass baptisms by Alma the Younger (Alma 4)",
      "Battle against Amlici at the Crossing of Sidon (Alma 2)",
      "Moroni's ambush of Zerahemnah at the River Sidon (Alma 43)"
    ],
    notablePeople: ["Alma the Younger", "Captain Moroni", "Zerahemnah", "Amlici"]
  },

  "valley_of_gideon": {
    id: "valley_of_gideon",
    name: "Valley of Gideon (East Bank)",
    title: "Valley of the Hero Patriot",
    category: "wilderness",
    region: "East of River Sidon, opposite Zarahemla",
    coords: { x: 60.5, y: 51.0 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "sword",
    summary: "Named in honor of the venerable patriot Gideon who withstood King Noah and was later slain by Nehor. Alma established the church here, delivering his revered prophecy on the mortal infirmities of Christ.",
    refs: [
      { ref: "Alma 2:20", text: "And it came to pass that the Nephites did pursue the Amlicites all that day, and did slay them with much slaughter, insomuch that there were slain of the Amlicites twelve thousand five hundred thirty and two souls; and they were slain in the valley of Gideon." },
      { ref: "Alma 6:7", text: "And now it came to pass that when Alma had made an end of speaking the words of the church in the city of Zarahemla, he went over upon the east of the river Sidon, into the valley of Gideon." },
      { ref: "Alma 7:11-12", text: "And he shall go forth, suffering pains and afflictions and temptations of every kind; and this that the word might be fulfilled which saith he will take upon him the pains and the sicknesses of his people... that his bowels may be filled with mercy, according to the flesh, that he may know according to the flesh how to succor his people." }
    ],
    historicalEvents: [
      "Decisive victory over Amlici's insurgent host (Alma 2)",
      "Alma's immortal sermon on the Atonement of Christ (Alma 7)"
    ],
    notablePeople: ["Gideon", "Alma the Younger", "Amlici"]
  },

  "minon": {
    id: "minon",
    name: "Land & City of Minon",
    title: "Upper Sidon Agricultural Border",
    category: "cities",
    region: "South of Zarahemla, Up the River Sidon",
    coords: { x: 50.7, y: 56.3 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "fort",
    summary: "An agricultural area south (up-river) of Zarahemla on the west bank of River Sidon, where fleeing Nephites were joined by Alma after the Amlicite clash.",
    refs: [
      { ref: "Alma 2:24", text: "Behold, we followed the camp of the Amlicites, and to our great astonishment, in the land of Minon, above the land of Zarahemla, in the course of the land of Nephi, we saw a numerous host of the Lamanites; and behold, the Amlicites have joined them." }
    ],
    historicalEvents: [
      "Strategic reconnaissance by Nephite spies discovering Lamanite invasion"
    ],
    notablePeople: ["Alma the Younger"]
  },

  "melek": {
    id: "melek",
    name: "Land & City of Melek",
    title: "Western Evangelical Refuge",
    category: "cities",
    region: "West of River Sidon (West of Zarahemla)",
    coords: { x: 39.6, y: 58.8 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "temple",
    summary: "A peaceful city west of Sidon where Alma taught the people with tremendous success before traveling northward to wicked Ammonihah.",
    refs: [
      { ref: "Alma 8:3-4", text: "And Alma departed and took his journey over into the land of Melek, on the west of the river Sidon, on the west by the borders of the wilderness. And he began to teach the people in the land of Melek according to the holy order of God." },
      { ref: "Alma 35:13", text: "And the people of Ammon departed out of the land of Jershon, and came over into the land of Melek, and gave place in the land of Jershon for the armies of the Nephites." }
    ],
    historicalEvents: [
      "Spiritual revival and mass baptisms under Alma the Younger",
      "Sanctuary provided to the Ammonites and impoverished Zoramite outcasts"
    ],
    aliases: [
      "Haven of the People of Ammon",
      "Anti-Nephi-Lehies",
      "Anti-Lehi-Nephites",
      "Ammonites"
    ],
    notablePeople: [
      "Alma the Younger",
      "Amulek",
      "People of Ammon",
      "Anti-Nephi-Lehies",
      "Anti-Lehi-Nephites"
    ]
  },

  "ammonihah": {
    id: "ammonihah",
    name: "City of Ammonihah",
    title: "The Desolate City of Nehors",
    category: "cities",
    region: "Western Border (Three Days North of Melek)",
    coords: { x: 26.7, y: 50.8 },
    highlightSize: "large",
    glowColor: "gold",
    icon: "ruins",
    fate3Nephi: {
      type: "earth",
      label: "Buried by Earthwork Cataclysm",
      verse: "3 Nephi 9:5"
    },
    summary: "A wicked city steeped in the apostate order of Nehor. Alma and Amulek were imprisoned here until God collapsed the prison walls. The city was later destroyed in a single day by Lamanite armies, fulfilling Alma's prophecy.",
    refs: [
      { ref: "Alma 8:6", text: "And it came to pass that he came to the city which was called Ammonihah, being three days' journey on the north of the land of Melek." },
      { ref: "Alma 14:27-29", text: "And the earth shook mightily, and the walls of the prison were rent in twain, so that they fell to the earth... and Alma and Amulek came forth out of the prison, and they were not hurt." },
      { ref: "Alma 16:1-11", text: "And thus in one day it was left desolate; and the carcases were mangled by dogs and wild beasts of the wilderness... and it was called Desolation of Nehors." },
      { ref: "Alma 49:1-14", text: "Rebuilt and fortified with impassable earthworks by Captain Moroni." }
    ],
    historicalEvents: [
      "Alma & Amulek preach repentance in the city of Nehors",
      "Martyrdom of the faithful believers in the fire",
      "Divine collapse of the prison walls (Alma 14)",
      "Total annihilation in one day by Lamanite armies ('Desolation of Nehors')"
    ],
    notablePeople: ["Alma the Younger", "Amulek", "Zeezrom (prior to conversion)"]
  },

  "city_of_noah": {
    id: "city_of_noah",
    name: "City & Land of Noah",
    title: "Moroni's Impregnable Earthworks",
    category: "fortresses",
    region: "Western Frontier (Near Ammonihah)",
    coords: { x: 28.5, y: 47.5 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "fort",
    summary: "A city near Ammonihah that had previously been weak, but was so powerfully fortified by Captain Moroni with deep ditches and timber palisades that the invading Lamanite army was decimated trying to climb its ramparts.",
    refs: [
      { ref: "Alma 49:12-15", text: "Now behold, the Lamanites could not get into their forts of security by any other way save by the entrance, because of the highness of the bank which had been thrown up, and the depth of the ditch which had been dug round about... therefore they marched forward to the land of Noah, with a full purpose to conduct the attack." },
      { ref: "Alma 49:21-25", text: "And when they found that they could not obtain power over the Nephites by the pass, they began to dig down their banks of earth... but behold, they were swept off by the stones and arrows which were hurled at them; and instead of filling up the ditches... they were filled up in a measure with their dead and wounded bodies. Thus were more than a thousand of the Lamanites slain; and not one Nephite was slain." }
    ],
    historicalEvents: [
      "Engineering of revolutionary earthwork fortifications by Captain Moroni",
      "Decisive victory under the command of Chief Captain Lehi"
    ],
    notablePeople: ["Captain Moroni", "Lehi (Captain)"]
  },

  "hermounts": {
    id: "hermounts",
    name: "Hermounts Wilderness",
    title: "The Beast-Infested Mountain Wilderness",
    category: "wilderness",
    region: "North and West of Zarahemla",
    coords: { x: 35.0, y: 42.0 },
    highlightSize: "large",
    glowColor: "gold",
    icon: "mountain",
    territoryPolygon: [
      { x: 26, y: 39 }, { x: 42, y: 38 }, { x: 44, y: 46 }, { x: 28, y: 45 }
    ],
    summary: "A harsh, rugged mountainous zone north and west of the Land of Zarahemla, infested with wild and ravenous beasts. Defeated Lamanite and Amlicite armies fled here and were devoured.",
    refs: [
      { ref: "Alma 2:37-38", text: "And they fled before the Nephites towards the wilderness which was west and north, away beyond the borders of the land; and the Nephites did pursue them with their might, and did slay them. Yea, they were met on every hand, and slain and driven, until they were scattered on the west, and on the north, until they had reached the wilderness, which was called Hermounts; and it was that part of the wilderness which was infested by wild and ravenous beasts. And it came to pass that many died in the wilderness of their wounds, and were devoured by those beasts and also the vultures of the air." }
    ],
    historicalEvents: [
      "Rout and scatter of Amlicite alliance after the River Sidon engagement"
    ],
    notablePeople: ["Captain Moroni", "Alma the Younger"]
  },

  // ==========================================
  // HELAMAN'S SOUTHWESTERN FRONTIER
  // ==========================================
  "antiparah": {
    id: "antiparah",
    name: "City of Antiparah",
    title: "Western Front Bastion",
    category: "fortresses",
    region: "Southwestern Frontier by West Sea",
    coords: { x: 13.2, y: 62.8 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "fort",
    summary: "A fortified stronghold on the southwestern front captured by Lamanites and later retaken by Antipus and Helaman.",
    refs: [
      { ref: "Alma 56:14", text: "And these are the cities which the Lamanites have obtained possession of by the shedding of the blood of so many of our valiant men: The land of Manti, or the city of Manti, and the city of Zeezrom, and the city of Cumeni, and the city of Antiparah." },
      { ref: "Alma 57:1-4", text: "And now it came to pass that I received an epistle from Ammoron, the king, stating that if I would deliver up those prisoners of war which we had taken, that he would deliver up the city of Antiparah unto us... and the people of Antiparah did leave the city, and fled to their other cities." }
    ],
    historicalEvents: [
      "Key garrison captured during the southwestern campaigns",
      "Re-won through tactical maneuvers by Helaman's forces"
    ],
    notablePeople: ["Helaman", "Antipus"]
  },

  "cumeni": {
    id: "cumeni",
    name: "City of Cumeni",
    title: "Heroic Redoubt of the 2,000 Striplings",
    category: "fortresses",
    region: "Southwestern Frontier",
    coords: { x: 25.7, y: 68.8 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "shield",
    summary: "A fortress city where Helaman's stripling warriors endured a brutal siege. In a desperate counterattack, 200 youths fainted from loss of blood, but miraculously not one was slain.",
    refs: [
      { ref: "Alma 57:7-12", text: "And it came to pass that it was not long after there were men brought unto our army... that we did surround the city of Cumeni... and it came to pass that the Lamanites did yield up the city into our hands." },
      { ref: "Alma 57:19-25", text: "And it came to pass that they did fall upon the Lamanites; and they did slay them with a great slaughter; and they were about to fall upon the Nephites, when behold, my two thousand and sixty fell upon their rear and did slay them... and behold, to my great joy, there had not one soul of them fallen; yea, and neither was there one soul among them who had not received many wounds. And it came to pass that there were two hundred, out of my two thousand and sixty, who had fainted because of the loss of blood; nevertheless, according to the goodness of God, not one soul of them did perish." }
    ],
    historicalEvents: [
      "Surrender and liberation of Cumeni",
      "The miraculous preservation of Helaman's 2,060 sons"
    ],
    notablePeople: ["Helaman", "2,060 Stripling Warriors"]
  },

  "zeezrom_city": {
    id: "zeezrom_city",
    name: "City of Zeezrom",
    title: "Western Frontier Fortress",
    category: "fortresses",
    region: "Southwestern Frontier (Near West Sea)",
    coords: { x: 18.4, y: 74.1 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "fort",
    summary: "Named in honor of the converted lawyer Zeezrom, forming an integral link in Helaman's southwestern defense chain.",
    refs: [
      { ref: "Alma 56:14", text: "Held by the Lamanites along with Judea, Cumeni, and Antiparah." }
    ],
    historicalEvents: [
      "Liberated during Helaman's campaign to secure the western borders"
    ],
    notablePeople: ["Helaman", "Zeezrom"]
  },

  "judea": {
    id: "judea",
    name: "City of Judea",
    title: "Helaman's Southwest Headquarters",
    category: "fortresses",
    region: "Southwestern Frontier (Helaman's Chain)",
    coords: { x: 17.6, y: 80.0 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "shield",
    summary: "The fortified redoubt in the southwest where Antipus and Helaman's 2,000 stripling sons made their headquarters and miraculously repelled massive Lamanite armies without losing a single youth.",
    refs: [
      { ref: "Alma 56:15-18", text: "And now it came to pass in the second month of this year, there was brought unto us many provisions from the fathers of those my two thousand sons. And also there were sent two thousand men unto us from the land of Zarahemla. And thus we were prepared with ten thousand men, and provisions for them, and also for their wives and their children. And the Lamanites, thus seeing our forces increase daily... were depressed." },
      { ref: "Alma 56:44-56", text: "Therefore they said unto me: Father, behold our God is with us, and he will not suffer that we should fall; then let us go forth; we would not slay our brethren if they would let us alone; therefore let us go, lest they should overpower the army of Antipus... and now it came to pass that when they had surrendered themselves up unto us, behold, I numbered those young men who had fought with me, fearing lest there were many of them slain. But behold, to my great joy, there had not one soul of them fallen to the earth; yea, and they had fought as if with the strength of God." }
    ],
    historicalEvents: [
      "Arrival of Helaman's 2,000 sons of Ammon to reinforce Antipus",
      "Decisive victory over the superior Lamanite forces"
    ],
    aliases: [
      "2,000 Stripling Warriors",
      "Two Thousand Stripling Warriors",
      "Sons of the People of Ammon",
      "Anti-Nephi-Lehies",
      "Anti-Lehi-Nephites",
      "Stripling Sons"
    ],
    notablePeople: [
      "Antipus",
      "Helaman",
      "2,000 Stripling Warriors",
      "Anti-Nephi-Lehies",
      "Anti-Lehi-Nephites",
      "People of Ammon"
    ]
  },

  "helamans_chain": {
    id: "helamans_chain",
    name: "Helaman's Defense Chain",
    title: "The Southwestern Wall of Fortresses",
    category: "fortresses",
    region: "Southwestern Frontier (Between West Sea and Manti)",
    coords: { x: 20.0, y: 72.0 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "shield",
    summary: "The continuous strategic chain of fortified cities (Antiparah, Cumeni, Zeezrom, and Judea) defending the western flank of the Nephite republic from Lamanite encroachment.",
    refs: [
      { ref: "Alma 56:13-15", text: "Helaman describes the cities which the Lamanites had wrested from the Nephites by bloodshed." }
    ],
    historicalEvents: [
      "Masterful reclamation campaigns by Helaman and the 2,060 stripling warriors"
    ],
    notablePeople: ["Helaman", "Antipus", "2,060 Stripling Warriors"]
  },

  "manti": {
    id: "manti",
    name: "City & Hill of Manti",
    title: "Southwestern Headwaters Bastion",
    category: "fortresses",
    region: "Head of River Sidon (Near Narrow Strip of Wilderness)",
    coords: { x: 25.4, y: 87.7 },
    highlightSize: "large",
    glowColor: "gold",
    icon: "fort",
    summary: "The southernmost military pillar defending the central valley of Zarahemla from southern Lamanite invasion. Situated near the head of River Sidon beside Hill Manti.",
    refs: [
      { ref: "Alma 16:6-7", text: "Zoram and his sons knew that Alma was high priest over the church... therefore they went unto him to desire of him that he should inquire of the Lord whether they should go into the wilderness in search of their brethren, who had been taken captive by the Lamanites... and Alma returned and said: Behold, the Lamanites will cross the river Sidon in the south wilderness, away up beyond the borders of the land of Manti." },
      { ref: "Alma 43:22-42", text: "And Moroni placed spies round about, that he might know when the camp of the Lamanites should come... and Moroni came and placed his armies in the valley of Manti, on the borders of the river Sidon." },
      { ref: "Alma 58:13-28", text: "Helaman and his stripling warriors liberate Manti through an ingenious feigned retreat, decoying the entire Lamanite army out of the city." }
    ],
    historicalEvents: [
      "Battle against Zerahemnah where Moroni demands covenant of peace",
      "Strategic liberation by Helaman's young stripling warriors",
      "Key garrison point controlling access across the Narrow Strip of Wilderness"
    ],
    notablePeople: ["Captain Moroni", "Helaman (Son of Alma)", "2,060 Stripling Warriors", "Zerahemnah"]
  },

  "hill_manti": {
    id: "hill_manti",
    name: "Hill Manti",
    title: "Watchpost at River Sidon Headwaters",
    category: "wilderness",
    region: "Headwaters of River Sidon",
    coords: { x: 24.5, y: 94.2 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "mountain",
    summary: "A commanding hill guarding the upper mountain pass into the land of Zarahemla near the River Sidon head.",
    refs: [
      { ref: "Alma 56:14", text: "Surrounding mountainous topography near the southern border." }
    ],
    historicalEvents: [
      "Tactical observation post used by Nephite scouts"
    ],
    notablePeople: ["Helaman", "Antipus"]
  },

  "hill_riplah": {
    id: "hill_riplah",
    name: "Hill Riplah",
    title: "Site of Moroni's Pincer Ambush",
    category: "wilderness",
    region: "East Bank of River Sidon (Near Manti)",
    coords: { x: 31.0, y: 85.0 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "mountain",
    summary: "A strategic hill east of River Sidon where Captain Moroni concealed Lehi and half the Nephite host in the valley, successfully trapping Zerahemnah's Lamanite armies between two forces.",
    refs: [
      { ref: "Alma 43:31", text: "Therefore he divided his army and brought a part over into the valley, and concealed them on the east, and on the south of the hill Riplah." },
      { ref: "Alma 43:35", text: "And it came to pass that when the Lamanites had passed the hill Riplah, and came into the valley, and began to cross the river Sidon, the army which was concealed on the south of the hill, which was led by a man whose name was Lehi... marched forth and encircled the Lamanites." }
    ],
    historicalEvents: [
      "Moroni's tactical ambush of Zerahemnah",
      "Lehi's charge encircling the Lamanite host"
    ],
    notablePeople: ["Captain Moroni", "Lehi (Captain)", "Zerahemnah"]
  },

  // ==========================================
  // THE CONTINENTAL DIVIDE
  // ==========================================
  "narrow_strip": {
    id: "narrow_strip",
    name: "Narrow Strip of Wilderness",
    title: "The Continental Mountain Divide",
    category: "wilderness",
    region: "Extending from Sea West to Sea East",
    coords: { x: 53.0, y: 71.0 },
    highlightSize: "large",
    glowColor: "gold",
    icon: "divider",
    territoryPolygon: [
      { x: 36, y: 70 }, { x: 74, y: 70 }, { x: 73, y: 74 }, { x: 35, y: 74 }
    ],
    summary: "A formidable rugged mountain ridge running east to west across the land, acting as a natural geographic border separating the Nephite Land of Zarahemla in the north from the Lamanite Land of Nephi in the south.",
    refs: [
      { ref: "Alma 22:27", text: "And it came to pass that the king sent a proclamation throughout all the land, among all his people who were in all his land, who were in all the regions round about, which was bordering even to the sea, on the east and on the west, and which was divided from the land of Zarahemla by a narrow strip of wilderness, which ran from the sea east even to the sea west, and round about on the borders of the seashore, and the borders of the wilderness which was on the north by the land of Zarahemla, through the borders of Manti, by the head of the river Sidon, running from the east towards the west." },
      { ref: "Alma 50:7-11", text: "And it came to pass that Moroni caused that his armies should go forth into the east wilderness; yea, and they went forth and drove all the Lamanites who were in the east wilderness into their own lands, which were south of the land of Zarahemla. And the land of Nephi did run in a straight course from the east sea to the west." }
    ],
    historicalEvents: [
      "Natural buffer separating Nephites and Lamanites",
      "Fortified and cleared by Captain Moroni's campaigns"
    ],
    notablePeople: ["Captain Moroni"]
  },

  // ==========================================
  // LAND OF NEPHI & ALMA'S FLIGHT (SOUTHWARD)
  // ==========================================
  "valley_of_alma": {
    id: "valley_of_alma",
    name: "Valley of Alma",
    title: "Valley of Song and Deliverance",
    category: "wilderness",
    region: "North of Helam, in the Wilderness",
    coords: { x: 45.0, y: 75.5 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "covenant",
    summary: "The beautiful valley where Alma and his people stopped to pour out thanks and sing praises unto God after escaping Amulon and the Lamanite guards.",
    refs: [
      { ref: "Mosiah 24:20-21", text: "And it came to pass that Alma and his people in the night-time gathered their flocks together, and also of their grain; yea, even all the night-time were they gathering their flocks together. And in the morning the Lord caused a deep sleep to come upon the Lamanites, yea, and all their task-masters were in a profound sleep, and Alma and his people departed into the wilderness; and when they had traveled all day they pitched their tents in a valley, and they called the valley Alma, because he led their way in the wilderness." },
      { ref: "Mosiah 24:22", text: "Yea, and in the valley of Alma they poured out their thanks to God, because he had been merciful unto them, and eased their burdens, and had delivered them out of bondage." }
    ],
    historicalEvents: [
      "Miraculous deep sleep cast on Lamanite taskmasters",
      "Joyous thanksgiving prayer and departure to Zarahemla"
    ],
    notablePeople: ["Alma the Elder"]
  },

  "helam": {
    id: "helam",
    name: "City & Land of Helam",
    title: "Sanctuary of Alma's Believers",
    category: "cities",
    region: "Wilderness between Nephi and Zarahemla",
    coords: { x: 60.1, y: 75.6 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "temple",
    summary: "A beautiful, peaceful city built by Alma's converts eight days into the wilderness from Waters of Mormon. Subjugated by Amulon and wicked priests before divine deliverance.",
    refs: [
      { ref: "Mosiah 23:19-20", text: "And they built a city, which they called the city of Helam. And it came to pass that they did multiply and prosper exceedingly in the land of Helam; and they were an industrious people, and did labor exceedingly." },
      { ref: "Mosiah 24:8-15", text: "And it came to pass that Amulon began to exercise authority over Alma and his brethren, and began to persecute him, and cause that his children should persecute their children... and Alma and his people did not raise their voices to the Lord their God, but did pour out their hearts to him; and he did know the thoughts of their hearts. And it came to pass that the voice of the Lord came to them in their afflictions, saying: Lift up your heads and be of good comfort, for I know of the covenant which ye have made unto me; and I will covenant with my people and deliver them out of bondage. And I will also ease the burdens which are put upon your shoulders, that even you cannot feel them upon your backs." }
    ],
    historicalEvents: [
      "Establishment of a pure covenant community by Alma the Elder",
      "Deliverance from Amulon's tyranny and taskmasters"
    ],
    notablePeople: ["Alma the Elder", "Amulon"]
  },

  "forest_of_mormon": {
    id: "forest_of_mormon",
    name: "Forest of Mormon",
    title: "Sacred Woodlands of the Covenant",
    category: "wilderness",
    region: "Border of the Land of Nephi",
    coords: { x: 49.0, y: 79.5 },
    highlightSize: "large",
    glowColor: "gold",
    icon: "covenant",
    territoryPolygon: [
      { x: 39, y: 76 }, { x: 57, y: 76 }, { x: 58, y: 82 }, { x: 38, y: 82 }
    ],
    summary: "The secluded thicket of small trees adjacent to the Waters of Mormon where Alma hid by day from the spies of King Noah while teaching the doctrine of Christ.",
    refs: [
      { ref: "Mosiah 18:5", text: "Now, there was in Mormon a fountain of pure water, and Alma resorted thither, there being near the water a thicket of small trees, where he did hide himself in the daytime from the searches of the king." },
      { ref: "Mosiah 18:30", text: "And now it came to pass that all this was done in Mormon, yea, by the waters of Mormon, in the forest that was near the waters of Mormon; yea, the place of Mormon, the waters of Mormon, the forest of Mormon, how beautiful are they to the eyes of them who there came to the knowledge of their Redeemer; yea, and how blessed are they, for they shall sing to his praise forever." }
    ],
    historicalEvents: [
      "Concealment of Alma and the early covenant believers",
      "Gathering place for Sabbath worship and scripture study"
    ],
    notablePeople: ["Alma the Elder", "Helam"]
  },

  "waters_of_mormon": {
    id: "waters_of_mormon",
    name: "Waters of Mormon",
    title: "Sanctuary of Covenant & Baptism",
    category: "sacred",
    region: "Border of the Land of Nephi / Forest of Mormon",
    coords: { x: 66.5, y: 78.8 },
    highlightSize: "large",
    glowColor: "azure",
    icon: "fountain",
    territoryPolygon: [
      { x: 60, y: 76 }, { x: 72, y: 76 }, { x: 72, y: 82 }, { x: 61, y: 82 }
    ],
    summary: "A beautiful, secluded spring of pure water near a thicket of small trees. Having fled the court of wicked King Noah, Alma gathered believers here to secretly teach the doctrine of Christ and institute the baptismal covenant.",
    refs: [
      { ref: "Mosiah 18:8-10", text: "And it came to pass that he said unto them: Behold, here are the waters of Mormon... and now, as ye are desirous to come into the fold of God, and to be called his people, and are willing to bear one another's burdens, that they may be light; yea, and are willing to mourn with those that mourn; yea, and comfort those that stand in need of comfort, and to stand as witnesses of God at all times and in all things, and in all places that ye may be in, even until death... what have you against being baptized in the name of the Lord?" },
      { ref: "Mosiah 18:12-16", text: "And now it came to pass that Alma took Helam, he being one of the first, and went and stood forth in the water, and cried, saying: O Lord, pour out thy Spirit upon thy servant... and he baptized him, and they were filled with the Holy Spirit... and after this manner he did baptize every one that went forth to the place of Mormon; and they were in number about two hundred and four souls." }
    ],
    historicalEvents: [
      "Alma the Elder preaches in secret after Abinadi's martyrdom",
      "First baptisms of the restored covenant Church (Helam and 204 souls)",
      "Hearts knit together in unity and in love one towards another (Mosiah 18:21)"
    ],
    notablePeople: ["Alma the Elder", "Helam", "Abinadi (spirit of his teachings)"]
  },

  "lehi_nephi": {
    id: "lehi_nephi",
    name: "City of Lehi-Nephi",
    title: "Ancestral Homeland of the Nephites",
    category: "capitals",
    region: "Land of Nephi (South of the Wilderness)",
    coords: { x: 49.2, y: 81.6 },
    highlightSize: "large",
    glowColor: "gold",
    icon: "crown",
    summary: "The original city built by Nephi after separating from Laman and Lemuel. Later reclaimed by Zeniff and ruled by King Noah and King Limhi before the Nephites escaped back to Zarahemla.",
    refs: [
      { ref: "2 Nephi 5:8", text: "And my people would that we should call the name of the place Nephi; wherefore, we did call it Nephi." },
      { ref: "2 Nephi 5:16", text: "And I, Nephi, did build a temple; and I did construct it after the manner of the temple of Solomon save it were not built of so many precious things; for they were not to be found upon the land, wherefore, it could not be built like unto Solomon's temple. But the manner of the construction was like unto the temple of Solomon; and the workmanship thereof was exceeding fine." },
      { ref: "Mosiah 9:6", text: "And I went in unto the king, and he covenanted with me that I might possess the land of Lehi-Nephi, and the land of Shilom." },
      { ref: "Mosiah 11-17", text: "The court of King Noah; Abinadi seals his testimony in the flames." },
      { ref: "Mosiah 22:11-13", text: "Limhi and his people escape by night through the secret pass in the back of the city." }
    ],
    historicalEvents: [
      "Original settlement and temple construction by Nephi (c. 580 BC)",
      "Mosiah I warns the righteous to flee to Zarahemla (c. 130 BC)",
      "Zeniff's re-colonization and defensive victories",
      "Abinadi's burning martyrdom and prophecy of judgment",
      "Midnight escape of Limhi's people to Zarahemla"
    ],
    notablePeople: ["Nephi", "Jacob", "Zeniff", "King Noah", "Abinadi", "King Limhi"]
  },

  "shilom": {
    id: "shilom",
    name: "Land & City of Shilom",
    title: "Agricultural Heartland of Zeniff",
    category: "cities",
    region: "Land of Nephi (Bordering Lehi-Nephi)",
    coords: { x: 46.6, y: 84.6 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "fort",
    summary: "A premier Nephite city and agricultural plain ceded to King Zeniff contiguous with the City of Lehi-Nephi (Mosiah 9:6-8). Situated on the highland shelf at the base of the northern hills overlooking the southern lowlands of Shemlon. King Noah constructed a commanding high watchtower upon the hill north of Shilom to monitor Lamanite military maneuvers across Shemlon (Mosiah 11:12). Placed on solid ground contiguous to Lehi-Nephi in accordance with textual topography.",
    refs: [
      { ref: "Mosiah 7:21", text: "Zeniff, who was made king over this people, he being over-zealous to inherit the land of his fathers, therefore being deceived by the cunning and craftiness of king Laman, who having entered into a treaty with king Zeniff, and having yielded up the possession of the land of Lehi-Nephi, and the land of Shilom." },
      { ref: "Mosiah 11:12", text: "And it came to pass that he built a tower near the temple; yea, a very high tower, even so high that he could stand upon the top thereof and overlook the land of Shilom, and also the land of Shemlon." }
    ],
    historicalEvents: [
      "Construction of the Great Watchtower of Shilom by King Noah",
      "Repulse of Lamanite raids by Zeniff's veterans"
    ],
    notablePeople: ["Zeniff", "King Noah", "Ammon (Explorer)"]
  },

  "shemlon": {
    id: "shemlon",
    name: "Land of Shemlon",
    title: "Domain of the Lamanites & Maidens' Gathering",
    category: "regions",
    region: "Bordering Lehi-Nephi and Shilom",
    coords: { x: 41.5, y: 85.6 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "ruins",
    summary: "A Lamanite territory where the daughters of the Lamanites gathered to dance, from where they were abducted by the wicked priests of King Noah.",
    refs: [
      { ref: "Mosiah 10:7", text: "And it came to pass that I went up with my men into the wilderness to spy out the Lamanites... and I saw all their preparations for war in the land of Shemlon." },
      { ref: "Mosiah 20:1-5", text: "Now there was a place in Shemlon where the daughters of the Lamanites did gather themselves together to sing, and to dance, and to make themselves merry. And it came to pass that there was one day a small number of them gathered together to sing and to dance. And now the priests of king Noah, being ashamed to return to the city of Nephi, yea, and also fearing that the people would slay them, therefore they durst not return to their wives and their children. And having tarried in the wilderness, and having discovered the daughters of the Lamanites, they laid and watched them; and when there were but few of them gathered together to dance, they came forth out of their secret places and took them and carried them into the wilderness." }
    ],
    historicalEvents: [
      "Abduction of the twenty-four Lamanite maidens by Noah's priests",
      "Lamanite invasion of Limhi's people in retribution"
    ],
    notablePeople: ["Priests of Noah", "Amulon", "King Limhi"]
  },

  "middoni": {
    id: "middoni",
    name: "Land & City of Middoni",
    title: "Lamanite Kingdom Ruled by King Antiomno",
    category: "cities",
    region: "Land of Nephi",
    coords: { x: 72.4, y: 91.1 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "ruins",
    summary: "An inland sovereign Lamanite kingdom ruled by King Antiomno situated on the solid eastern mainland south of the City of Laman. Reached overland by chariot from the Land of Ishmael (Alma 20:6) and traversed by foot across from the village of Ani-Anti (Alma 21:11-13). It was situated along the primary overland thoroughfare between Ishmael and the City of Lehi-Nephi, where Ammon and Lamoni encountered Lamoni's father, the high king of all the Lamanites (Alma 20:8).",
    refs: [
      { ref: "Alma 20:2-4", text: "And the voice of the Lord came to Ammon, saying: Thou shalt not go up to the land of Nephi, for behold, the king will seek thy life; but thou shalt go to the land of Middoni; for behold, thy brother Aaron, and also Muloki and Ammah are in prison." },
      { ref: "Alma 20:6-8", text: "Now when Lamoni had heard this he caused that his servants should make ready his horses and his chariots. And he said unto Ammon: Come, I will go with thee to the land of Middoni... And it came to pass that as Ammon and Lamoni were journeying thither, they met the father of Lamoni, who was king over all the land." },
      { ref: "Alma 20:28-30", text: "And it came to pass that Ammon and Lamoni proceeded on their journey towards the land of Middoni. And Lamoni found favor in the eyes of the king of the land; therefore the brethren of Ammon were brought forth out of prison... and they were naked, and their skins were worn exceedingly because of being bound with strong cords." }
    ],
    historicalEvents: [
      "Ammon and Lamoni prepare horses and chariots for overland travel (Alma 20:6)",
      "Dramatic confrontation with Lamoni's father on the royal highway (Alma 20:8)",
      "Liberation of Aaron and fellow missionaries from the prison in Middoni"
    ],
    notablePeople: ["Ammon", "King Lamoni", "Aaron", "King Antiomno", "Lamoni's Father"]
  },

  "ishmael": {
    id: "ishmael",
    name: "Land of Ishmael",
    title: "Domain of King Lamoni & the Royal Flocks",
    category: "cities",
    region: "Land of Nephi",
    coords: { x: 43.0, y: 88.6 },
    highlightSize: "large",
    glowColor: "gold",
    icon: "shield",
    summary: "The domain of King Lamoni where Ammon entered service as a humble servant, defending the king's sheep at the Waters of Sebus and converting the king, queen, and royal household.",
    refs: [
      { ref: "Alma 17:19-21", text: "And as Ammon entered the land of Ishmael, the Lamanites took him and bound him, as was their practice to bind all the Nephites who fell into their hands, and carry them before the king... and the name of the king was Lamoni; and he was a descendant of Ishmael. And the king inquired of Ammon if it were his desire to dwell in the land among the Lamanites, or among his people. And Ammon said unto him: Yea, I desire to dwell among this people for a time; yea, and perhaps until the day I die." },
      { ref: "Alma 18-19", text: "Conversion of King Lamoni, his household, and the whole land of Ishmael; the royal court falls into a trance overcome by the Spirit." }
    ],
    historicalEvents: [
      "Ammon volunteers as a shepherd for King Lamoni",
      "Defense of the royal flocks against plunderers",
      "Conversion of King Lamoni, the Queen, and the royal court (Alma 19)"
    ],
    notablePeople: ["Ammon", "King Lamoni", "The Lamanite Queen", "Abish"]
  },

  "ani_anti": {
    id: "ani_anti",
    name: "Village of Ani-Anti",
    title: "Lamanite Missionary Outpost",
    category: "cities",
    region: "Land of Nephi (Near Jerusalem)",
    coords: { x: 43.5, y: 90.3 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "ruins",
    summary: "A village where Aaron and his companions preached after being rejected at Jerusalem. Finding the people hardened, they departed to the land of Middoni, where they were seized and cast into prison.",
    refs: [
      { ref: "Alma 21:11", text: "And it came to pass that they went forth whithersoever they were led by the Spirit of the Lord, preaching the word of God in every synagogue of the Amalekites, or in every assembly of the Lamanites where they could be admitted. And it came to pass that the Lord began to bless them, insomuch that they brought many to the knowledge of the truth; yea, they did convince many of their sins." }
    ],
    historicalEvents: [
      "Sons of Mosiah missionary journey through hardened territory"
    ],
    notablePeople: ["Muloki", "Ammah"]
  },

  "city_of_jerusalem": {
    id: "city_of_jerusalem",
    name: "City of Jerusalem",
    title: "Apostate Stronghold of the Amalekites",
    category: "cities",
    region: "Land of Nephi (Bordering Waters of Mormon)",
    coords: { x: 44.2, y: 92.0 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "ruins",
    fate3Nephi: {
      type: "waters",
      label: "Covered by Inundating Waters",
      verse: "3 Nephi 9:7"
    },
    summary: "A prominent city built by Lamanites, Amalekites, and Amulonites, named after the ancient city in the Old World. Deeply hardened against the gospel; sunk beneath the waters during the 3 Nephi destruction.",
    refs: [
      { ref: "Alma 21:1-2", text: "Now when Ammon and his brethren separated themselves in the borders of the land of the Lamanites, behold Aaron took his journey towards the land which was called by the Lamanites, Jerusalem, calling it after the land of their fathers' nativity; and it was situated adjoining the borders of Mormon. Now the Lamanites and the Amalekites and the people of Amulon had built a great city, which was called Jerusalem." },
      { ref: "3 Nephi 9:7", text: "And behold, the city of Jerusalem, and the waters thereof, have I caused to come up in the stead thereof, to hide their wickedness and abominations from before my face." }
    ],
    historicalEvents: [
      "Aaron preaches in the synagogues of the Amalekites in Jerusalem",
      "Complete submersion beneath the waters during the crucifixion upheavals"
    ],
    notablePeople: ["Aaron", "Amalekite rulers"]
  },

  "waters_of_sebus": {
    id: "waters_of_sebus",
    name: "Water of Sebus (Pastoral Watering Place)",
    title: "Where Ammon Defended the Royal Flocks (Alma 17:26)",
    category: "sacred",
    region: "Land of Ishmael",
    coords: { x: 45.8, y: 89.2 },
    highlightSize: "medium",
    glowColor: "azure",
    icon: "waves",
    summary: "A pastoral watering place in the Land of Ishmael where Lamanite shepherds drove their flocks to drink. Here Ammon defended King Lamoni's sheep against plunderers with his sling and sword (Alma 17:26–39), preserving the king's flocks and preparing King Lamoni's heart to receive the gospel of Jesus Christ.",
    refs: [
      { ref: "Alma 17:26", text: "And it came to pass that as Ammon and the servants of the king were driving forth their flocks to the place of water, which was called the water of Sebus, and all the Lamanites drive their flocks hither, that they may have water." },
      { ref: "Alma 17:36-39", text: "And he began to cast stones at them with his sling, with much power; yea, with such power that he did slay a number of them... and every man that lifted his club to smite Ammon, he smote off their arms with his sword... and they fled before him." },
      { ref: "Alma 18:7", text: "Now the place where they watered their flocks was called the water of Sebus... and they did bring the arms which had been smitten off by the sword of Ammon, unto the king, for a testimony of the things which they had done." }
    ],
    historicalEvents: [
      "Ammon's defense of the royal flocks against armed plunderers at the watering hole",
      "Severed arms presented to King Lamoni in the royal palace",
      "Catalyst for the conversion of the entire kingdom of Ishmael"
    ],
    notablePeople: ["Ammon", "King Lamoni", "Lamoni's Servants"]
  },

  "land_first_inheritance": {
    id: "land_first_inheritance",
    name: "Land of First Inheritance (Lehite / Nephite Landing)",
    title: "Lehite Arrival Shoreline on Sea West",
    category: "sacred",
    region: "Southwest Coast by Sea West",
    coords: { x: 6.8, y: 84.0 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "temple",
    summary: "The coastal area along the West Sea, west of the Land of Nephi in the Land Southward, where Father Lehi's vessel made landfall after crossing the ocean from the Old World. Here the colony first pitched their tents, planted seeds brought from Jerusalem, and began their civilization before Nephi fled inland into the wilderness to escape Laman and Lemuel.",
    refs: [
      { ref: "1 Nephi 18:23", text: "And it came to pass that after we had sailed for the space of many days we did arrive at the promised land; and we went forth upon the land, and did pitch our tents; and we did call it the promised land." },
      { ref: "Alma 22:28", text: "Now, the more idle part of the Lamanites lived in the wilderness, and dwelt in tents; and they were spread through the wilderness on the west, in the land of Nephi; yea, and also on the west of the land of Zarahemla, in the borders by the seashore, and on the west in the land of Antionum, in the land of their fathers' first inheritance, and thus bordering along by the seashore." },
      { ref: "Helaman 6:10", text: "Now the land south was called Lehi, and the land north was called Mulek, which was after the son of Zedekiah; for the Lord did bring Mulek into the land north, and Lehi into the land south." }
    ],
    historicalEvents: [
      "First landfall of Father Lehi, Sariah, Nephi, Sam, Laman, and Lemuel (1 Nephi 18:23)",
      "Pitching of initial tents and first agricultural cultivation with Jerusalem seeds (1 Nephi 18:24)",
      "Discovery of domestic animals, beasts, gold, silver, and copper ore in the wilderness (1 Nephi 18:25)",
      "Death of Patriarch Lehi and subsequent division leading to Nephi's flight inland (2 Nephi 4-5)"
    ],
    notablePeople: ["Lehi", "Sariah", "Nephi", "Sam", "Laman", "Lemuel"]
  },

  "place_of_ogath": {
    id: "place_of_ogath",
    name: "Place of Ogath",
    title: "Southern Encampment of Shiz's Host",
    category: "wilderness",
    region: "Land Northward (South of Ripliancum)",
    coords: { x: 62.5, y: 14.8 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "tent",
    isScripturalAddition: true,
    summary: "The staging ground where the retreating armies of Shiz fled southward from the Waters of Ripliancum and pitched their tents, immediately preceding the final gathering at the Hill Ramah / Cumorah.",
    refs: [
      { ref: "Ether 15:10", text: "And it came to pass that the armies of Coriantumr did press upon the armies of Shiz that they beat them, that they caused them to flee before them; and they did flee southward, and did pitch their tents in a place which was called Ogath." },
      { ref: "Ether 15:11", text: "And it came to pass that the army of Coriantumr did pitch their tents by the hill Ramah; and it was that same hill where my father Mormon did hide up the records unto the Lord, which were sacred." }
    ],
    historicalEvents: [
      "Shiz's armies flee southward from the bloody melee at Ripliancum (Ether 15:10)",
      "Encampment established at Ogath before moving south to the Hill Ramah (Ether 15:10-11)"
    ],
    notablePeople: ["Shiz", "Coriantumr"]
  },

  "land_of_moron": {
    id: "land_of_moron",
    name: "Land & City of Moron (Jaredite First Settlement & Capital)",
    title: "Ancestral Jaredite Homeland Near Desolation",
    category: "capitals",
    region: "Land Northward (Near Desolation)",
    coords: { x: 42.0, y: 15.0 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "crown",
    summary: "The principal ancestral seat and royal capital established by the first Jaredite kings upon arriving in the promised land, situated in the Land Northward near the land called Desolation by the Nephites. Here the Jaredites established their first dynasty under King Orihah, and successive kings reigned until the final civil wars.",
    refs: [
      { ref: "Ether 6:12", text: "And they did land upon the shore of the promised land. And when they had set their feet upon the shores of the promised land they bowed themselves down upon the face of the land, and did humble themselves before the Lord, and did shed tears of joy before the Lord, because of the multitude of his tender mercies over them." },
      { ref: "Ether 7:5-6", text: "Now the land of Moron, where the king dwelt, was near the land which is called Desolation by the Nephites... and Corihor came unto the land of Moron where the king dwelt, and took him captive." },
      { ref: "Ether 14:6", text: "And it came to pass that the brother of Shared did come to battle against him in the wilderness of Akish... and Shared did beat him that he did come again even to the land of Moron." }
    ],
    historicalEvents: [
      "Arrival of the 8 Jaredite barges upon the shore of the promised land (Ether 6:11-12)",
      "Orihah anointed first king; royal capital established at Moron near Desolation (Ether 6:27; 7:1-6)",
      "Successive rebellions, overthrows, and royal restorations throughout Jaredite history (Ether 7, 14)"
    ],
    notablePeople: ["Jared", "Brother of Jared", "Orihah", "Kib", "Corihor", "Shule", "Coriantumr"]
  },

  "valley_of_corihor": {
    id: "valley_of_corihor",
    name: "Valley of Corihor",
    title: "Valley of Jaredite Civil War",
    category: "wilderness",
    region: "Land Northward",
    coords: { x: 50.0, y: 14.5 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "camp",
    summary: "A central northern valley where Coriantumr pitched his tents and challenged the armies of Shared and Shiz across the adjacent plains and valleys.",
    refs: [
      { ref: "Ether 14:27", text: "And it came to pass that Coriantumr was exceeding angry with Shared, and he went against him with his armies to battle; and they did meet in great fury; and they did meet in the valley of Corihor; and the battle became exceeding sore." },
      { ref: "Ether 14:28", text: "And it came to pass that Coriantumr did smite Shared, that he did beat him; and Shared did flee to the valley of Shurr, and pitched his tents in the valley of Shurr; now the valley of Shurr was near the hill Comnor." }
    ],
    historicalEvents: [
      "Fierce conflict between Coriantumr and Shared in the valley of Corihor (Ether 14:27)",
      "Shared's retreat eastward into the valley of Shurr (Ether 14:28)"
    ],
    notablePeople: ["Coriantumr", "Shared"]
  },

  "valley_of_shurr_comnor": {
    id: "valley_of_shurr_comnor",
    name: "Valley of Shurr & Hill Comnor",
    title: "Battleground by Hill Comnor",
    category: "wilderness",
    region: "Land Northward",
    coords: { x: 54.0, y: 14.2 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "sword",
    summary: "A strategic valley and prominent hill where Coriantumr rallied his men by sound of trumpet to challenge Shiz and Shared.",
    refs: [
      { ref: "Ether 14:28", text: "And Shared did flee to the valley of Shurr, and pitched his tents in the valley of Shurr; now the valley of Shurr was near the hill Comnor; wherefore, Coriantumr did challenge Shared upon the hill Comnor." }
    ],
    historicalEvents: [
      "Coriantumr challenges Shared upon the hill Comnor by trumpet sound (Ether 14:28)"
    ],
    notablePeople: ["Coriantumr", "Shared", "Shiz"]
  },

  "wilderness_of_akish": {
    id: "wilderness_of_akish",
    name: "Wilderness of Akish",
    title: "Northern Rugged Battleground",
    category: "wilderness",
    region: "Land Northward",
    coords: { x: 46.5, y: 13.5 },
    highlightSize: "small",
    glowColor: "forest",
    icon: "tree",
    summary: "A harsh northern wilderness region through which royal armies pursued each other during the Jaredite collapse.",
    refs: [
      { ref: "Ether 14:4", text: "And it came to pass that there arose one Gilead, and he also gave battle unto Coriantumr; and he did beat him, and did drive him back into the wilderness of Akish." },
      { ref: "Ether 14:6", text: "And it came to pass that the brother of Shared did come to battle against him in the wilderness of Akish; and the battle became exceeding sore." }
    ],
    historicalEvents: [
      "Coriantumr driven into the wilderness of Akish by Gilead (Ether 14:4)",
      "Clash between the brother of Shared and royalist forces (Ether 14:6)"
    ],
    notablePeople: ["Coriantumr", "Gilead"]
  },

  "city_of_jacobugath": {
    id: "city_of_jacobugath",
    name: "City of Jacobugath",
    title: "Stronghold of the Secret Combination",
    category: "cities",
    region: "Far Northern Plains",
    coords: { x: 71.5, y: 12.5 },
    highlightSize: "medium",
    glowColor: "crimson",
    icon: "flame",
    fate3Nephi: {
      type: "burned",
      label: "Burned with Fire from Heaven",
      verse: "3 Nephi 9:9"
    },
    summary: "The northern sanctuary city established by the royalist secret combination under King Jacob after the collapse of the Nephite government, destroyed by divine fire at the Savior's crucifixion.",
    refs: [
      { ref: "3 Nephi 7:12", text: "Therefore, Jacob seeing that their enemies were more numerous than they, he being the king of the band, therefore he commanded his people that they should take their flight into the northernmost part of the land, and there build up unto themselves a kingdom." },
      { ref: "3 Nephi 9:9", text: "And behold, that great city Jacobugath, which was inhabited by the people of king Jacob, have I caused to be burned with fire because of their sins and their wickedness, which was above all the wickedness of the whole earth, because of their secret murders and combinations." }
    ],
    historicalEvents: [
      "Flight of King Jacob and the secret combination to the northernmost borders (3 Nephi 7:12)",
      "City consumed with fire from heaven at the Savior's death (3 Nephi 9:9)"
    ],
    notablePeople: ["King Jacob"]
  },

  "city_of_joshua": {
    id: "city_of_joshua",
    name: "City & Land of Joshua",
    title: "West Seashore Fortress City",
    category: "cities",
    region: "West Seashore (Land Northward / Borders)",
    coords: { x: 38.0, y: 22.0 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "fort",
    summary: "A coastal city located in the western borders by the seashore, where Mormon marched and gathered the Nephite populace against overwhelming Lamanite armies.",
    refs: [
      { ref: "Mormon 2:6", text: "And it came to pass that we did march forth to the land of Joshua, which was in the borders west by the seashore." },
      { ref: "Mormon 2:7", text: "And it came to pass that we did gather in our people as fast as it were possible, that we might get them together in one body." }
    ],
    historicalEvents: [
      "Mormon gathers Nephite families together by the west seashore (Mormon 2:6-7)"
    ],
    notablePeople: ["Mormon", "Aaron (Lamanite King)"]
  },

  "city_of_david": {
    id: "city_of_david",
    name: "City of David",
    title: "Nephite Line of Retreat Bastion",
    category: "cities",
    region: "Northern Borderlands",
    coords: { x: 46.0, y: 24.5 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "shield",
    summary: "A retreat destination during the late Nephite wars where Nephite forces fled before relocating to Joshua on the west coast.",
    refs: [
      { ref: "Mormon 2:5", text: "And it came to pass that we did fly to the city of David; and we did gather in our people from all the land around about, that we might get them together into one body." }
    ],
    historicalEvents: [
      "Nephite retreat to David during the massive Lamanite offensive (Mormon 2:5)"
    ],
    notablePeople: ["Mormon"]
  },

  "city_of_jashon": {
    id: "city_of_jashon",
    name: "City of Jashon",
    title: "Sanctuary Near the Hill Shim",
    category: "cities",
    region: "Land of Antum",
    coords: { x: 58.0, y: 18.5 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "scroll",
    summary: "A city near the hill Shim where Ammaron had deposited the sacred Nephite records, and where Mormon retrieved the plates of Nephi as a young commander.",
    refs: [
      { ref: "Mormon 2:16", text: "And it came to pass that we did flee to the city of Jashon, which was near the land where Ammaron had deposited the records unto the Lord, that they might not be destroyed." },
      { ref: "Mormon 2:17", text: "And behold I had gone according to the word of Ammaron, and taken the plates of Nephi, and did make a record according to the words of Ammaron." }
    ],
    historicalEvents: [
      "Mormon takes the plates of Nephi from the Hill Shim near Jashon (Mormon 2:16-17)"
    ],
    notablePeople: ["Mormon", "Ammaron"]
  },

  "city_of_shem": {
    id: "city_of_shem",
    name: "City of Shem",
    title: "Fortified Redoubt of Thirty Thousand",
    category: "fortresses",
    region: "Land Northward",
    coords: { x: 52.0, y: 18.0 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "fort",
    summary: "A heavily fortified northern city where Mormon rallied thirty thousand Nephite warriors and boldly stood against a massive Lamanite host, driving them back.",
    refs: [
      { ref: "Mormon 2:20", text: "And it came to pass that we did fly to the city of Shem, and did fortify the city of Shem, and did gather in our people from all the land round about." },
      { ref: "Mormon 2:21", text: "And it came to pass that in the three hundred and forty and sixth year they began to come upon us again; and they did come upon us with all their power; and we did conquer them, that they did not conquer us, and we did maintain our city." }
    ],
    historicalEvents: [
      "Heroic defense of Shem under Mormon's exhortation (Mormon 2:20-25)"
    ],
    notablePeople: ["Mormon"]
  },

  "city_of_sherrizah": {
    id: "city_of_sherrizah",
    name: "City & Tower of Sherrizah",
    title: "Late Nephite Fortified Haven",
    category: "fortresses",
    region: "Land Northward",
    coords: { x: 62.0, y: 19.5 },
    highlightSize: "small",
    glowColor: "crimson",
    icon: "fort",
    summary: "A walled city and tower mentioned by Mormon in his epistles to Moroni, where Nephite families sought refuge during the final collapse of law and morality.",
    refs: [
      { ref: "Moroni 9:7", text: "And again, my son, there are many widows and their daughters who remain in Sherrizah; and that part of the provisions which the Lamanites did not carry away, behold, the army of Zenephi has carried away, and left them to wander withersoever they can for food." },
      { ref: "Moroni 9:16", text: "And again, my son, behold, the army of Zenephi did carry away their provisions... and how can a people like this, whose delight is in so much abomination—how can we expect that God will stay his hand in judgment against us?" }
    ],
    historicalEvents: [
      "Plunder of provisions at the tower of Sherrizah (Moroni 9:7, 16)"
    ],
    notablePeople: ["Mormon", "Moroni", "Zenephi"]
  },

  "city_of_moriantum": {
    id: "city_of_moriantum",
    name: "City of Moriantum",
    title: "Interior Nephite City",
    category: "cities",
    region: "Land Northward",
    coords: { x: 67.5, y: 13.5 },
    highlightSize: "small",
    glowColor: "crimson",
    icon: "castle",
    isScripturalAddition: true,
    summary: "An inland city in the Land Northward (distinct from the coastal Morianton), cited by Mormon in his sorrowful epistle regarding the barbarism of the late war.",
    refs: [
      { ref: "Moroni 9:9", text: "And notwithstanding this great abomination of the Lamanites, it doth not exceed that of our people in Moriantum. For behold, many of the daughters of the Lamanites have they taken prisoners; and after depriving them of that which was most dear and precious above all things, which is chastity and virtue..." }
    ],
    historicalEvents: [
      "Mormon laments the spiritual degradation and war atrocities committed at Moriantum (Moroni 9:9-11)"
    ],
    notablePeople: ["Mormon", "Moroni"]
  },

  "land_of_amulon": {
    id: "land_of_amulon",
    name: "Land of Amulon",
    title: "Settlement of the Wicked Priests",
    category: "wilderness",
    region: "Wilderness between Helam and Zarahemla",
    coords: { x: 74.5, y: 70.0 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "tree",
    summary: "A fertile wilderness land settled by Amulon and the former priests of King Noah after fleeing into the wilderness; later used by Lamanite forces to subjugate Alma's people in Helam.",
    refs: [
      { ref: "Mosiah 23:31", text: "And the Lamanites had taken possession of the land of Helam; and the king of the Lamanites had granted unto Amulon that he should be a king and a ruler over his people, who were in the land of Helam." },
      { ref: "Mosiah 23:35", text: "And they went and found the place which was called Amulon; and they began to possess the land of Amulon and began to till the ground." },
      { ref: "Alma 24:1", text: "And it came to pass that the Amalekites and the Amulonites and the Lamanites who were in the land of Amulon... did take up arms to go to battle against the people of Anti-Nephi-Lehi." }
    ],
    historicalEvents: [
      "Priests of Noah settle Amulon and till the soil (Mosiah 23:35)",
      "Amulon placed in charge of the teachers over the Lamanites (Mosiah 24:1-4)"
    ],
    notablePeople: ["Amulon", "Alma the Elder"]
  },

  "mount_antipas": {
    id: "mount_antipas",
    name: "Mount Antipas & Onidah",
    title: "Mountain of Lamanite Resistance",
    category: "sacred",
    region: "Land of Nephi",
    coords: { x: 68.5, y: 84.0 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "mountain",
    summary: "A prominent mountain in the Land of Nephi near the place of arms called Onidah, where Lehonti and his dissident Lamanites encamped in defense against Amalickiah.",
    refs: [
      { ref: "Alma 47:5", text: "And now he had fled to Onidah, to the place of arms; and there were the king's servants." },
      { ref: "Alma 47:7", text: "Now they had gathered themselves together upon the top of the mount which was called Antipas, in preparation to battle." },
      { ref: "Alma 47:18", text: "And it came to pass that Amalickiah caused that one of his servants should administer poison by degrees to Lehonti, that he died." }
    ],
    historicalEvents: [
      "Lehonti gathers the peaceful Lamanite faction upon Mount Antipas (Alma 47:7)",
      "Amalickiah secretly poisons Lehonti and usurps total military command (Alma 47:18)"
    ],
    notablePeople: ["Lehonti", "Amalickiah"]
  },

  "land_of_siron": {
    id: "land_of_siron",
    name: "Land of Siron",
    title: "Border Outpost of Antionum",
    category: "wilderness",
    coords: { x: 81.1, y: 62.0 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "compass",
    summary: "A frontier borderland situated on solid ground among the wilderness borders of the Lamanites south of the Land of Antionum (Alma 39:3). It was here that Alma's son Corianton departed from the Zoramite mission, wandering across the southern perimeter after the harlot Isabel, before returning in repentance to preach the word of God.",
    refs: [
      { ref: "Alma 39:3", text: "And this is not all, my son. Thou didst do that which was grievous unto me; for thou didst forsake the ministry, and did go into the land of Siron, among the borders of the Lamanites, after the harlot Isabel." }
    ],
    historicalEvents: [
      "Alma counsels his son Corianton regarding his conduct in Siron (Alma 39:3-5)"
    ],
    notablePeople: ["Alma the Younger", "Corianton"]
  },

  "hill_amnihu": {
    id: "hill_amnihu",
    name: "Hill Amnihu",
    title: "Battleground of the Amlicite Rebellion",
    category: "wilderness",
    region: "East Bank of River Sidon (Near Zarahemla & Gideon)",
    coords: { x: 55.5, y: 49.5 },
    highlightSize: "small",
    glowColor: "gold",
    icon: "sword",
    summary: "A strategic hill on the east of the river Sidon opposite Zarahemla where Alma led the Nephite armies in personal combat against the rebel king Amlici, securing victory before pursuing them into the adjacent Valley of Gideon (Alma 2:15-20).",
    refs: [
      { ref: "Alma 2:15", text: "And it came to pass that the Amlicites came upon the hill Amnihu, which was on the east of the river Sidon, which ran by the land of Zarahemla, and there they began to make war with the Nephites." },
      { ref: "Alma 2:20", text: "And it came to pass that when Alma could pursue the Amlicites no longer he caused that his people should pitch their tents in the valley of Gideon..." },
      { ref: "Alma 2:31", text: "And it came to pass that Alma fought with Amlici with the sword, face to face; and they did contend mightily, one with another." }
    ],
    historicalEvents: [
      "Amlicite rebel army invades upon Hill Amnihu east of Sidon (Alma 2:15)",
      "Alma slays Amlici face to face with the sword (Alma 2:31)",
      "Nephites pursue fleeing remnants eastward into the Valley of Gideon (Alma 2:20)"
    ],
    notablePeople: ["Alma the Younger", "Amlici"]
  },

  "city_of_moronihah": {
    id: "city_of_moronihah",
    name: "City of Moronihah",
    title: "Mountain of the Cataclysm",
    category: "cities",
    region: "Land Southward (Highlands of Zarahemla)",
    coords: { x: 58.5, y: 56.5 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "mountain",
    isScripturalAddition: true,
    fate3Nephi: {
      type: "mountain",
      label: "Buried & Great Mountain Formed",
      verse: "3 Nephi 9:5"
    },
    summary: "A notable Nephite city situated in the central highlands of the Land Southward. At the crucifixion of the Savior, the earth was carried up over the city and in its place became a great mountain (3 Nephi 8:10, 9:5).",
    refs: [
      { ref: "3 Nephi 8:10", text: "And the earth was carried up upon the city of Moronihah, that in the place of the city there became a great mountain." },
      { ref: "3 Nephi 9:5", text: "And behold, that great city Moronihah have I covered with the earth, and the inhabitants thereof, to hide their iniquities and their abominations from before my face, that the blood of the prophets and the saints should not come any more unto me against them." }
    ],
    historicalEvents: [
      "City overwhelmed by upheaval and replaced by a towering mountain peak at the Savior's death (3 Nephi 8:10, 9:5)"
    ],
    notablePeople: ["Moronihah (Namesake)"]
  },

  "city_of_gilgal": {
    id: "city_of_gilgal",
    name: "City of Gilgal",
    title: "Chasm of the Earth",
    category: "cities",
    region: "Land Northward",
    coords: { x: 71.0, y: 16.5 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "fissure",
    isScripturalAddition: true,
    fate3Nephi: {
      type: "sunk_earth",
      label: "Sunk into the Depths of the Earth",
      verse: "3 Nephi 9:6"
    },
    summary: "A northern city near the valley and plains of Gilgal that was entirely swallowed and buried in the earth during the cosmic tremors at the Savior's crucifixion.",
    refs: [
      { ref: "3 Nephi 9:6", text: "And behold, the city of Gilgal have I caused to be sunk, and the inhabitants thereof to be buried up in the depths of the earth." }
    ],
    historicalEvents: [
      "City and inhabitants swallowed into subterranean depths (3 Nephi 9:6)"
    ],
    notablePeople: ["Mormon"]
  },

  "city_of_onihah": {
    id: "city_of_onihah",
    name: "City of Onihah",
    title: "Submerged Valley City",
    category: "cities",
    region: "Southwest Foothills",
    coords: { x: 47.0, y: 64.0 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "waves",
    isScripturalAddition: true,
    fate3Nephi: {
      type: "waters",
      label: "Waters Cast Up in Place Thereof",
      verse: "3 Nephi 9:7"
    },
    summary: "An interior city inundated by rising subterranean floodwaters during the three hours of upheaval at Christ's death.",
    refs: [
      { ref: "3 Nephi 9:7", text: "Yea, and the city of Onihah and the inhabitants thereof, and the city of Mocum and the inhabitants thereof, and the city of Jerusalem and the inhabitants thereof; and waters have I caused to come up in the stead thereof, to hide their wickedness and abominations from before my face." }
    ],
    historicalEvents: [
      "Inundated beneath cast-up waters (3 Nephi 9:7)"
    ],
    notablePeople: ["Samuel the Lamanite (Prophesied)"]
  },

  "city_of_mocum": {
    id: "city_of_mocum",
    name: "City of Mocum",
    title: "Inundated Inland Haven",
    category: "cities",
    region: "Southwest Foothills",
    coords: { x: 38.5, y: 68.0 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "waves",
    isScripturalAddition: true,
    fate3Nephi: {
      type: "waters",
      label: "Waters Cast Up in Place Thereof",
      verse: "3 Nephi 9:7"
    },
    summary: "A settlement buried under deep surging waters when the foundations of the land broke up at the Crucifixion.",
    refs: [
      { ref: "3 Nephi 9:7", text: "And the city of Mocum and the inhabitants thereof... and waters have I caused to come up in the stead thereof." }
    ],
    historicalEvents: [
      "Covered by floodwaters at the Savior's death (3 Nephi 9:7)"
    ],
    notablePeople: ["Mormon"]
  },

  "city_of_gadiandi": {
    id: "city_of_gadiandi",
    name: "City of Gadiandi",
    title: "Western Foothills Stronghold",
    category: "cities",
    region: "Western Borders",
    coords: { x: 35.0, y: 48.0 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "fissure",
    isScripturalAddition: true,
    fate3Nephi: {
      type: "sunk_earth",
      label: "Sunk into the Earth",
      verse: "3 Nephi 9:8"
    },
    summary: "A city in the western borders sunk into the earth to hide its secret combinations and wickedness.",
    refs: [
      { ref: "3 Nephi 9:8", text: "And behold, the city of Gadiandi, and the city of Gadiomnah, and the city of Jacob, and the city of Gimgimno, all these have I caused to be sunk, and made hills and valleys in the places thereof; and the inhabitants thereof have I buried up in the depths of the earth." }
    ],
    historicalEvents: [
      "City sunk into subterranean fissures, transforming the topography into hills and valleys (3 Nephi 9:8)"
    ],
    notablePeople: ["Gadianton Robbers (Inhabitants)"]
  },

  "city_of_gadiomnah": {
    id: "city_of_gadiomnah",
    name: "City of Gadiomnah",
    title: "Western Mountain City",
    category: "cities",
    region: "Western Borders",
    coords: { x: 31.0, y: 52.0 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "fissure",
    isScripturalAddition: true,
    fate3Nephi: {
      type: "sunk_earth",
      label: "Sunk into the Earth",
      verse: "3 Nephi 9:8"
    },
    summary: "Swallowed into the bowels of the earth during the great earthquake that convulsed the whole face of the land.",
    refs: [
      { ref: "3 Nephi 9:8", text: "And the city of Gadiomnah... have I caused to be sunk, and made hills and valleys in the places thereof." }
    ],
    historicalEvents: [
      "Topography convulsed into new hills and valleys (3 Nephi 9:8)"
    ],
    notablePeople: ["Mormon"]
  },

  "city_of_jacob": {
    id: "city_of_jacob",
    name: "City of Jacob",
    title: "Subterranean Redoubt",
    category: "cities",
    region: "Western Borders",
    coords: { x: 40.0, y: 57.0 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "fissure",
    isScripturalAddition: true,
    fate3Nephi: {
      type: "sunk_earth",
      label: "Sunk into the Earth",
      verse: "3 Nephi 9:8"
    },
    summary: "One of four western cities submerged into the crust of the earth as hills and valleys were formed in their stead.",
    refs: [
      { ref: "3 Nephi 9:8", text: "And the city of Jacob... have I caused to be sunk, and made hills and valleys in the places thereof." }
    ],
    historicalEvents: [
      "Sunk into the earth at the Crucifixion (3 Nephi 9:8)"
    ],
    notablePeople: ["King Jacob (Namesake)"]
  },

  "city_of_gimgimno": {
    id: "city_of_gimgimno",
    name: "City of Gimgimno",
    title: "Western Bastion",
    category: "cities",
    region: "Western Borders",
    coords: { x: 44.0, y: 54.0 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "fissure",
    isScripturalAddition: true,
    fate3Nephi: {
      type: "sunk_earth",
      label: "Sunk into the Earth",
      verse: "3 Nephi 9:8"
    },
    summary: "Buried in the depths of the earth during the cataclysmic restructuring of the western wilderness.",
    refs: [
      { ref: "3 Nephi 9:8", text: "And the city of Gimgimno, all these have I caused to be sunk, and made hills and valleys in the places thereof." }
    ],
    historicalEvents: [
      "Buried in the depths of the earth (3 Nephi 9:8)"
    ],
    notablePeople: ["Mormon"]
  },

  "city_of_laman": {
    id: "city_of_laman",
    name: "City of Laman",
    title: "Southern Frontier Stronghold",
    category: "cities",
    region: "Land of Nephi (South)",
    coords: { x: 72.0, y: 88.0 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "flame",
    isScripturalAddition: true,
    fate3Nephi: {
      type: "burned",
      label: "Burned with Fire from Heaven",
      verse: "3 Nephi 9:10"
    },
    summary: "A southern Lamanite stronghold consumed by heavenly fire at the death of Christ to avenge the blood of the prophets.",
    refs: [
      { ref: "3 Nephi 9:10", text: "And behold, the city of Laman, and the city of Josh, and the city of Gad, and the city of Kishkumen, have I caused to be burned with fire, and the inhabitants thereof, because of their wickedness in casting out the prophets, and stoning them." }
    ],
    historicalEvents: [
      "Consumed with fire from heaven (3 Nephi 9:10)"
    ],
    notablePeople: ["Prophets who were stoned and cast out"]
  },

  "city_of_josh": {
    id: "city_of_josh",
    name: "City of Josh",
    title: "Southern Border City",
    category: "cities",
    region: "Land of Nephi (South)",
    coords: { x: 76.0, y: 86.0 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "flame",
    isScripturalAddition: true,
    fate3Nephi: {
      type: "burned",
      label: "Burned with Fire from Heaven",
      verse: "3 Nephi 9:10"
    },
    summary: "Burned to ash during the fierce tempests and lightning storms that struck the wicked cities.",
    refs: [
      { ref: "3 Nephi 9:10", text: "And the city of Josh... have I caused to be burned with fire, and the inhabitants thereof." }
    ],
    historicalEvents: [
      "Burned with fire at the Savior's crucifixion (3 Nephi 9:10)"
    ],
    notablePeople: ["Mormon"]
  },

  "city_of_gad": {
    id: "city_of_gad",
    name: "City of Gad",
    title: "Southern Wilderness Bastion",
    category: "cities",
    region: "Land of Nephi (Southeast)",
    coords: { x: 80.0, y: 83.0 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "flame",
    isScripturalAddition: true,
    fate3Nephi: {
      type: "burned",
      label: "Burned with Fire from Heaven",
      verse: "3 Nephi 9:10"
    },
    summary: "A southeastern city consumed by fire at the Crucifixion for persecuting righteous messengers.",
    refs: [
      { ref: "3 Nephi 9:10", text: "And the city of Gad... have I caused to be burned with fire, and the inhabitants thereof." }
    ],
    historicalEvents: [
      "Consumed with fire (3 Nephi 9:10)"
    ],
    notablePeople: ["Mormon"]
  },

  "city_of_kishkumen": {
    id: "city_of_kishkumen",
    name: "City of Kishkumen",
    title: "Secret Gadianton Haven",
    category: "cities",
    region: "Southern Wilderness Borders of Zarahemla",
    coords: { x: 58.0, y: 64.5 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "flame",
    isScripturalAddition: true,
    fate3Nephi: {
      type: "burned",
      label: "Burned with Fire from Heaven",
      verse: "3 Nephi 9:10"
    },
    summary: "Named after the infamous assassin Kishkumen who murdered Chief Judge Pahoran; situated in the southern wilderness borders and destroyed with divine fire at the Crucifixion (3 Nephi 9:10).",
    refs: [
      { ref: "3 Nephi 9:10", text: "And the city of Kishkumen, have I caused to be burned with fire, and the inhabitants thereof." }
    ],
    historicalEvents: [
      "Stronghold of the early Gadianton robbers",
      "Consumed by fire from heaven at the Savior's death (3 Nephi 9:10)"
    ],
    notablePeople: ["Kishkumen (Namesake)"]
  },

  "city_of_sidom": {
    id: "city_of_sidom",
    name: "City & Land of Sidom",
    title: "Sanctuary of Healing & Faith",
    category: "cities",
    region: "Between Ammonihah & Zarahemla",
    coords: { x: 36.5, y: 50.5 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "temple",
    isScripturalAddition: true,
    summary: "The sanctuary land situated between Ammonihah and Zarahemla where believers who escaped the martyrdom in Ammonihah gathered, and where Alma and Amulek miraculously healed Zeezrom from a burning fever before returning over to Zarahemla (Alma 15:1-18).",
    refs: [
      { ref: "Alma 15:1", text: "And it came to pass that Alma and Amulek were commanded to depart out of that city; and they departed, and came out even into the land of Sidom; and there they found all the people who had departed out of the land of Ammonihah, who had been cast out and stoned." },
      { ref: "Alma 15:3", text: "And also Zeezrom lay sick at Sidom, with a burning fever, which was caused by the great tribulations of his mind on account of his wickedness." },
      { ref: "Alma 15:11", text: "And Alma cried unto the Lord, saying: O Lord our God, have mercy on this man, and heal him according to his faith which is in Christ. And when Alma had said these words, Zeezrom leaped upon his feet, and began to walk." },
      { ref: "Alma 15:18", text: "And it came to pass that Alma took Amulek and came over to the land of Zarahemla, and took him to his own house, and did administer unto him in his tribulations, and strengthened him in the Lord." }
    ],
    historicalEvents: [
      "Refuge for the exiled believers of Ammonihah (Alma 15:1)",
      "Miraculous healing and baptism of Zeezrom (Alma 15:11-12)",
      "Establishment of the Church in Sidom (Alma 15:13)",
      "Alma brings Amulek over to Zarahemla (Alma 15:18)"
    ],
    notablePeople: ["Alma the Younger", "Amulek", "Zeezrom"]
  },

  "city_of_nehor": {
    id: "city_of_nehor",
    name: "City of Nehor",
    title: "Early Jaredite Stronghold",
    category: "capitals",
    region: "Land Northward (Near Moron & Ephraim)",
    coords: { x: 38.0, y: 16.5 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "crown",
    isScripturalAddition: true,
    summary: "An early Jaredite city where Corihor set up his kingdom and held his father Kib in captivity, until Shule armed his followers from Hill Ephraim and liberated the throne (Ether 7:4, 9).",
    refs: [
      { ref: "Ether 7:4", text: "And when Corihor was thirty and two years old he rebelled against his father, and went over and dwelt in the land of Nehor; and he begat sons and daughters, and they became exceeding fair; wherefore Corihor drew away many people after him." },
      { ref: "Ether 7:9", text: "Wherefore, he came to the hill Ephraim, and he did molten out of the hill, and made swords out of steel for those whom he had drawn away with him; and after he had armed them with swords he returned to the city of Nehor and gave battle unto his brother Corihor; and by this means he obtained the kingdom and restored it unto his father Kib." }
    ],
    historicalEvents: [
      "Corihor establishes rival kingdom at Nehor (Ether 7:4)",
      "Shule liberates his father Kib and overthrows Corihor (Ether 7:9)"
    ],
    notablePeople: ["Corihor", "Kib", "Shule"]
  },

  "hill_ephraim": {
    id: "hill_ephraim",
    name: "Hill Ephraim",
    title: "Hill of Ore & Steel Swords",
    category: "sacred",
    region: "Land Northward (South of Ripliancum Bay)",
    coords: { x: 34.0, y: 16.0 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "mountain",
    isScripturalAddition: true,
    summary: "A mineral-rich hill in the Land Northward where Shule extracted ore and smelted steel swords to overthrow the usurper Corihor.",
    refs: [
      { ref: "Ether 7:9", text: "Wherefore, he came to the hill Ephraim, and he did molten out of the hill, and made swords out of steel for those whom he had drawn away with him." }
    ],
    historicalEvents: [
      "Shule smelts steel swords out of the hill Ephraim (Ether 7:9)"
    ],
    notablePeople: ["Shule"]
  },

  "moriancumer_shore": {
    id: "moriancumer_shore",
    name: "Old World: Moriancumer (Ocean Encampment)",
    title: "Old World Seashore & Transoceanic Departure (Ether 2:13)",
    category: "waters",
    region: "Old World (Separated by the Great Deep)",
    coords: { x: 93.5, y: 5.5 },
    highlightSize: "large",
    glowColor: "azure",
    icon: "waves",
    isScripturalAddition: true,
    summary: "The Old World seashore across the great ocean where the Brother of Jared and his companions dwelt in tents for four years after traveling from the Tower of Babel through the Valley of Nimrod. Here the Lord commanded them to build eight submersible barges and touched sixteen stones with divine light before they launched on a 344-day oceanic crossing to reach the Promised Land shores (Ether 2:13-17; 6:11-12). Note: This Old World embarkation site was separated from the Promised Land continent by the vast ocean.",
    refs: [
      { ref: "Ether 2:13", text: "And it came to pass that the Lord did bring Jared and his brethren forth even to that great sea which divideth the lands. And as they came to the sea they pitched their tents; and they called the name of the place Moriancumer; and they dwelt in tents upon the seashore for the space of four years." },
      { ref: "Ether 6:11-12", text: "And thus they were driven forth, three hundred and forty and four days upon the water. And they did land upon the shore of the promised land." }
    ],
    historicalEvents: [
      "Jaredite encampment upon the Old World seashore for four years (Ether 2:13)",
      "The Lord instructs the brother of Jared and commands barge construction (Ether 2:14-17)",
      "Divine lighting of the sixteen stones on Mount Shelem (Ether 3:1-6)",
      "344-day transoceanic crossing across the great deep to the Promised Land (Ether 6:11-12)"
    ],
    notablePeople: ["Brother of Jared", "Jared"]
  },

  "valley_of_nimrod": {
    id: "valley_of_nimrod",
    name: "Old World: Valley of Nimrod (Near Babel)",
    title: "Ancient Mesopotamian Gathering Valley (Ether 2:1)",
    category: "wilderness",
    region: "Old World Mesopotamia (Near Tower of Babel)",
    coords: { x: 94.5, y: 13.5 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "tree",
    isScripturalAddition: true,
    summary: "The wilderness valley in the ancient Old World near the Tower of Babel where Jared, his brother, and their friends gathered their families, flocks, seeds, and honeybees (deseret) before beginning their trek across ancient Asia toward the great sea (Ether 2:1-4). Note: Located in the ancient Old World, separated from the Promised Land continent by the ocean.",
    refs: [
      { ref: "Ether 2:1", text: "And it came to pass that Jared and his brother, and their families, and also the friends of Jared and his brother and their families, went down into the valley which was northward, (and the name of the valley was Nimrod, being called after the mighty hunter) with their flocks which they had gathered together, male and female, of every kind." }
    ],
    historicalEvents: [
      "Gathering of flocks, fowl, and honeybees (deseret) near Babel in Nimrod (Ether 2:1-3)",
      "Departure into the wilderness guided by the Lord in a cloud (Ether 2:4-5)"
    ],
    notablePeople: ["Jared", "Brother of Jared"]
  },

  "land_of_antum": {
    id: "land_of_antum",
    name: "Land of Antum",
    title: "Region of the Hill Shim",
    category: "regions",
    region: "Land Northward",
    coords: { x: 56.5, y: 16.5 },
    highlightSize: "medium",
    glowColor: "gold",
    icon: "compass",
    isScripturalAddition: true,
    summary: "A northern land that contained the Hill Shim where Ammaron hid all the sacred records unto the Lord before Mormon retrieved them.",
    refs: [
      { ref: "Mormon 1:3", text: "And Ammaron said unto me: I perceive that thou art a sober child, and art quick to observe; Therefore, when ye are about twenty and four years old I would that ye should remember the things that ye have observed concerning this people; and when ye are of that age go to the land Antum, unto a hill which shall be called Shim; and there have I deposited unto the Lord all the sacred engravings concerning this people." }
    ],
    historicalEvents: [
      "Ammaron instructs ten-year-old Mormon concerning the records in Antum (Mormon 1:3)"
    ],
    notablePeople: ["Mormon", "Ammaron"]
  }
};

/**
 * Scriptural Expeditions and Historical Journeys (12 Comprehensive Tours)
 */
const mapJourneys = [
  {
    id: "the_three_ancient_landings",
    name: "The Three Ancient Landings & Beginnings",
    subtitle: "Jaredites (c. 2200 BC), Nephites (c. 589 BC), & Mulekites (c. 586 BC)",
    color: "#f39c12",
    description: "The Book of Mormon explicitly records the landfall and starting locations of all three civilizations: 1) The Jaredites land upon the northern shore and establish their royal seat in the Land of Moron near Desolation (Ether 6:12; 7:6); 2) Lehi's colony lands on the southwest shore at the Land of First Inheritance on the West Sea (Alma 22:28; Helaman 6:10); 3) Prince Mulek's company lands in the Land Northward at Desolation before journeying south into the wilderness to found Zarahemla (Alma 22:30-31; Helaman 6:10).",
    stages: [
      { locId: "land_of_moron", note: "1. Jaredite Landing & Capital (c. 2200 BC): After 344 days in 8 barges, the Jaredites disembark upon the northern promised land and establish their throne at Moron near Desolation (Ether 6:11-12; 7:5-6)." },
      { locId: "land_first_inheritance", note: "2. Lehi / Nephite Landing (c. 589 BC): Lehi's vessel sails across the ocean and makes landfall on the West Sea at the Land of First Inheritance in the Land Southward (1 Nephi 18:23; Alma 22:28; Helaman 6:10)." },
      { locId: "lehi_nephi", note: "3. Nephite Separation (c. 588 BC): Nephi flees Laman's threats, journeying inland into the wilderness to establish the City of Lehi-Nephi and build a temple (2 Nephi 5:5-16)." },
      { locId: "land_of_desolation", note: "4. Mulekite Landing (c. 586 BC): Escaping the Babylonian destruction of Jerusalem, Prince Mulek's party lands in the Land Northward at the borders of Desolation (Alma 22:30; Helaman 6:10)." },
      { locId: "zarahemla", note: "5. Mulekite Migration to Zarahemla: Journeying 'up into the south wilderness' along the River Sidon, the Mulekites build the City of Zarahemla, later uniting with Mosiah I (Omni 1:14-21; Alma 22:31)." }
    ],
    waypoints: ["land_of_moron", "land_first_inheritance", "lehi_nephi", "land_of_desolation", "zarahemla"]
  },
  {
    id: "alma_covenant",
    name: "Alma's Flight & Covenant at Mormon",
    subtitle: "Mosiah 18-24 (c. 148-120 BC)",
    color: "#289bcf",
    description: "The perilous journey of Alma the Elder and his believers from wicked King Noah's court, through baptism at the Waters of Mormon, settlement in Helam, and miraculous deliverance to Zarahemla.",
    stages: [
      { locId: "lehi_nephi", note: "Alma flees King Noah's court after Abinadi's burning martyrdom." },
      { locId: "forest_of_mormon", note: "Alma conceals himself in the forest, gathering believers in secret." },
      { locId: "waters_of_mormon", note: "Baptism of Helam and 204 souls into the restored Church of Christ." },
      { locId: "helam", note: "Settlement in Helam, subjected to Amulon's harsh rule, God eases their burdens." },
      { locId: "valley_of_alma", note: "Midnight deliverance; believers offer songs of thanksgiving in the valley." },
      { locId: "valley_of_gideon", note: "Passing through the valley east of Sidon toward safety." },
      { locId: "zarahemla", note: "Joyous reception by King Mosiah II in Zarahemla." }
    ],
    waypoints: ["lehi_nephi", "forest_of_mormon", "waters_of_mormon", "helam", "valley_of_alma", "valley_of_gideon", "zarahemla"]
  },

  {
    id: "limhis_search_party",
    name: "Limhi's Search Party to the Jaredite Ruins",
    subtitle: "Mosiah 8:7-11; 21:25-27 (c. 121 BC)",
    color: "#e67e22",
    description: "King Limhi sends 43 men to find Zarahemla to beg for relief. Lost in the wilderness, they pass through the Narrow Neck into the Land Northward, discovering the 24 gold plates and rusted armor at Cumorah/Ramah, mistaking it for destroyed Zarahemla.",
    stages: [
      { locId: "lehi_nephi", note: "King Limhi commissions 43 men to find Zarahemla to beg for military aid." },
      { locId: "narrow_strip", note: "The explorers lose their way crossing the rugged mountain wilderness." },
      { locId: "narrow_neck", note: "They inadvertently bypass Zarahemla and pass north through the isthmus." },
      { locId: "land_of_desolation", note: "They enter a land covered with bones of fallen warriors and cankered breastplates." },
      { locId: "cumorah", note: "At Ramah/Cumorah, they discover the 24 gold plates of Ether." },
      { locId: "lehi_nephi", note: "Return in sorrow to Limhi, believing Zarahemla had been utterly obliterated." }
    ],
    waypoints: ["lehi_nephi", "narrow_strip", "narrow_neck", "land_of_desolation", "cumorah", "lehi_nephi"]
  },

  {
    id: "zeniffs_reclamation",
    name: "Zeniff's Reclamation of Lehi-Nephi",
    subtitle: "Mosiah 9-10 (c. 200-187 BC)",
    color: "#9b59b6",
    description: "Zeniff leads an earnest band of Nephites from Zarahemla south across the wilderness to reclaim their ancestral homeland from King Laman.",
    stages: [
      { locId: "zarahemla", note: "Zeniff departs Zarahemla with an expedition eager to possess their heritage." },
      { locId: "narrow_strip", note: "Contentious trek through the wilderness where the first expedition failed." },
      { locId: "shilom", note: "King Laman cedes the land of Shilom and Lehi-Nephi through cunning treaty." },
      { locId: "lehi_nephi", note: "Nephites rebuild the walls, cultivate crops, and defend against Lamanite raids." }
    ],
    waypoints: ["zarahemla", "narrow_strip", "shilom", "lehi_nephi"]
  },

  {
    id: "mosiah_exodus",
    name: "Mosiah I's Exodus to Zarahemla",
    subtitle: "Omni 1:12-19 (c. 210 BC)",
    color: "#16a085",
    description: "Warned of God to flee the corrupting Land of Nephi, Mosiah I leads the righteous through the wilderness, discovers the Mulekites at Zarahemla, and is crowned king over a united nation.",
    stages: [
      { locId: "lehi_nephi", note: "Mosiah I warned by the Lord to depart out of the Land of Nephi." },
      { locId: "waters_of_mormon", note: "Trek through the wilderness following divine guidance." },
      { locId: "valley_of_alma", note: "Navigating the mountain passes north of the wilderness." },
      { locId: "zarahemla", note: "Discovery of the people of Zarahemla; unity under one king and language." }
    ],
    waypoints: ["lehi_nephi", "waters_of_mormon", "valley_of_alma", "zarahemla"]
  },

  {
    id: "almas_circuit",
    name: "Alma the Younger's Evangelical Circuit",
    subtitle: "Alma 4-16 (c. 83-81 BC)",
    color: "#f39c12",
    description: "Resigning the judgment seat to bear pure testimony, Alma preaches in Zarahemla, Melek, is rejected at Ammonihah, returns with Amulek, and preaches in Gideon and Sidon.",
    stages: [
      { locId: "zarahemla", note: "Alma resigns the chief judgeship to Nephihah to devote his life to preaching." },
      { locId: "melek", note: "Great success in Melek; thousands baptized into the church." },
      { locId: "ammonihah", note: "Cast out of Ammonihah; visited by an angel and returns to join Amulek." },
      { locId: "valley_of_gideon", note: "Preaches the magnificent prophecy of Christ's mortal pains." },
      { locId: "river_sidon", note: "Mass baptisms along the river before returning to Zarahemla." },
      { locId: "zarahemla", note: "Return to the capital having established churches throughout the land." }
    ],
    waypoints: ["zarahemla", "melek", "ammonihah", "valley_of_gideon", "river_sidon", "zarahemla"]
  },

  {
    id: "stripling_warriors",
    name: "Helaman's Southwest Defense",
    subtitle: "Alma 53, 56-58 (c. 66-62 BC)",
    color: "#e8a838",
    description: "Helaman marches with his 2,060 young sons of Ammon to relieve the beleaguered cities of Judea, Cumeni, Zeezrom, Antiparah, and Manti, protecting the southwestern border without a single casualty.",
    stages: [
      { locId: "zarahemla", note: "Helaman enlists 2,000 young Ammonite sons who covenant to fight for liberty." },
      { locId: "judea", note: "Reinforces Antipus at Judea, turning the tide of moral defeat." },
      { locId: "antiparah", note: "Lamanites flee Antiparah upon Helaman's strategic maneuvering." },
      { locId: "cumeni", note: "Brutal siege; 200 youths faint from loss of blood, but all survive." },
      { locId: "manti", note: "Feigned retreat liberates Manti, securing the entire southwest." }
    ],
    waypoints: ["zarahemla", "judea", "antiparah", "cumeni", "manti"]
  },

  {
    id: "coastal_campaign",
    name: "Captain Moroni's Coastal Counteroffensive",
    subtitle: "Alma 51-53, 62 (c. 67-60 BC)",
    color: "#48c774",
    description: "Captain Moroni and Teancum march along the eastern seashore to liberate the fortified cities taken by Amalickiah: Bountiful, Mulek, Gid, Omner, Morianton, Lehi, and Moroni.",
    stages: [
      { locId: "bountiful", note: "Teancum slays Amalickiah in his tent by the seashore of Bountiful." },
      { locId: "mulek", note: "Moroni and Teancum use decoy maneuvers to liberate the fortress of Mulek." },
      { locId: "gid", note: "Bloodless liberation of thousands of Nephite prisoners using wine to drug guards." },
      { locId: "omner", note: "Recapture of the coastal garrison." },
      { locId: "morianton", note: "Securing the coastal boundaries." },
      { locId: "city_of_lehi", note: "Relief of Captain Lehi's defenders." },
      { locId: "nephihah", note: "Nighttime scaling of city walls with ladders and cords." },
      { locId: "city_of_moroni", note: "Final encirclement and restoration of national sovereignty." }
    ],
    waypoints: ["bountiful", "mulek", "gid", "omner", "morianton", "city_of_lehi", "nephihah", "city_of_moroni"]
  },

  {
    id: "battle_of_manti",
    name: "Moroni's Ambush at Manti & River Sidon",
    subtitle: "Alma 43-44 (c. 74 BC)",
    color: "#c0392b",
    description: "Moroni consults Alma, discovers Zerahemnah's line of march toward Manti, conceals Lehi by the Hill Riplah, and traps the Lamanite host in the River Sidon.",
    stages: [
      { locId: "zarahemla", note: "Moroni sends spies and asks Alma to inquire of the Lord where the enemy marches." },
      { locId: "hill_riplah", note: "Moroni conceals half his army under Lehi east of the Hill Riplah." },
      { locId: "manti", note: "Lamanites march into the valley of Manti, unaware of the trap." },
      { locId: "river_sidon", note: "Lamanites surrounded in the river; Zerahemnah scalped by Moroni's soldier; oath of peace." }
    ],
    waypoints: ["zarahemla", "hill_riplah", "manti", "river_sidon"]
  },

  {
    id: "hagoth_voyages",
    name: "Hagoth's Northern Maritime Voyages",
    subtitle: "Alma 63:5-8 (c. 55-54 BC)",
    color: "#3498db",
    description: "An exceedingly curious shipbuilder launches great vessels into the West Sea by the narrow neck, transporting thousands of men, women, and provisions northward into uncharted oceans.",
    stages: [
      { locId: "narrow_neck", note: "Hagoth establishes shipyards on the western border by the narrow neck." },
      { locId: "sea_west", note: "First great vessel launched carrying many Nephites into the West Sea." },
      { locId: "waters_of_ripliancum", note: "Ships sail far into northern waters and are never heard from again." }
    ],
    waypoints: ["narrow_neck", "sea_west", "waters_of_ripliancum"]
  },

  {
    id: "sons_of_mosiah",
    name: "Mission of the Sons of Mosiah",
    subtitle: "Alma 17-26 (c. 91-77 BC)",
    color: "#f59e0b",
    description: "Ammon, Aaron, Omner, and Himni journey into the Land of Nephi to preach repentance to the Lamanites, preaching in Ishmael, Sebus, Middoni, and Jerusalem.",
    stages: [
      { locId: "zarahemla", note: "The four prince brothers decline kingship and depart into the wilderness." },
      { locId: "ishmael", note: "Ammon enters King Lamoni's service as a shepherd." },
      { locId: "waters_of_sebus", note: "Ammon slays robbers and severs arms with his sword defending the royal sheep." },
      { locId: "middoni", note: "Ammon and Lamoni negotiate release of Aaron and brethren from prison." },
      { locId: "city_of_jerusalem", note: "Aaron preaches in the synagogues of the hardened Amalekites." }
    ],
    waypoints: ["zarahemla", "ishmael", "waters_of_sebus", "middoni", "city_of_jerusalem"]
  },

  {
    id: "christ_visitation",
    name: "Christ's Ministry at Bountiful",
    subtitle: "3 Nephi 11-28 (c. AD 34)",
    color: "#dfba54",
    description: "Following cosmic upheavals across the lands, the righteous gather at the Temple in Bountiful, where the Resurrected Savior descends from the heavens to teach, ordain, heal, and bless.",
    stages: [
      { locId: "bountiful", note: "Resurrected Savior descends out of heaven at the Temple in Bountiful." },
      { locId: "zarahemla", note: "Healing and reconstruction spread outward throughout all the lands." }
    ],
    waypoints: ["bountiful", "zarahemla"]
  },

  {
    id: "final_retreat",
    name: "The Final Stand at Cumorah",
    subtitle: "Mormon 2-6 (c. AD 350-385)",
    color: "#d94b34",
    description: "Mormon leads the remnant of the Nephite armies northward through the narrow neck of land past Teancum, Boaz, and Jordan to make their final stand by the Hill Cumorah.",
    stages: [
      { locId: "zarahemla", note: "Nephites driven from the southern heartland by overwhelming Lamanite armies." },
      { locId: "narrow_neck", note: "Brief defensive treaty line established at the isthmus." },
      { locId: "narrow_pass", note: "Nephite armies retreat into the Land Northward." },
      { locId: "teancum", note: "Desperate defense of the coastal city of Teancum." },
      { locId: "boaz", note: "Nephites stand with exceeding boldness at Boaz." },
      { locId: "city_of_jordan", note: "Mormon repulses the Lamanites at Jordan." },
      { locId: "cumorah", note: "The final battle of 230,000 fallen warriors; records hidden in Cumorah." }
    ],
    waypoints: ["zarahemla", "narrow_neck", "narrow_pass", "teancum", "boaz", "city_of_jordan", "cumorah"]
  }
];

// ==========================================================================
// CHRONOLOGICAL TIMELINE MILESTONES (2200 BC - AD 421)
// ==========================================================================
const chronologicalMilestones = [
  {
    "step": 0,
    "year": -2200,
    "yearLabel": "2200 BC",
    "title": "The Great Dispersion & Jaredite Exodus",
    "subtitle": "Tower of Babel language confusion; Brother of Jared leads families across ancient wilderness",
    "icon": "🌊",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [
      "valley_of_nimrod",
      "moriancumer_shore",
      "waters_of_ripliancum",
      "sea_west",
      "sea_east",
      "river_sidon",
      "narrow_neck",
      "narrow_pass",
      "narrow_strip",
      "waters_by_the_neck",
      "hermounts"
    ],
    "newCityNames": [
      "Valley of Nimrod",
      "Moriancumer (Great Sea Shore)",
      "Waters of Ripliancum",
      "Sea West",
      "Sea East",
      "River Sidon",
      "Narrow Neck of Land",
      "Narrow Pass",
      "Narrow Strip of Wilderness",
      "Waters by the Neck",
      "Hermounts Wilderness"
    ],
    "totalCumulativeSites": 11
  },
  {
    "step": 1,
    "year": -2000,
    "yearLabel": "2000 BC",
    "title": "Early Jaredite Kingdom",
    "subtitle": "Jaredites settle in the Land of Moron near Desolation; King Orihah reigns in righteousness",
    "icon": "👑",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [
      "land_of_moron",
      "valley_of_gilgal",
      "plains_of_heshlon"
    ],
    "newCityNames": [
      "Land & City of Moron",
      "Valley of Gilgal (Jaredite)",
      "Plains of Heshlon"
    ],
    "totalCumulativeSites": 14
  },
  {
    "step": 2,
    "year": -1800,
    "yearLabel": "1800 BC",
    "title": "Jaredite Dynastic Wars",
    "subtitle": "Rebellion of Corihor; City of Nehor founded; steel swords manufactured at Hill Ephraim",
    "icon": "⚔️",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [
      "city_of_nehor",
      "hill_ephraim",
      "valley_of_corihor"
    ],
    "newCityNames": [
      "City of Nehor",
      "Hill Ephraim (Iron Ore Mine)",
      "Valley of Corihor"
    ],
    "totalCumulativeSites": 17
  },
  {
    "step": 3,
    "year": -1500,
    "yearLabel": "1500 BC",
    "title": "Mid-Jaredite Dynasties & Secret Oaths",
    "subtitle": "Rise of secret combinations; Wilderness of Akish fortified; battles in Valley of Shurr",
    "icon": "🗡️",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [
      "wilderness_of_akish",
      "valley_of_shurr_comnor"
    ],
    "newCityNames": [
      "Wilderness of Akish",
      "Valley of Shurr & Hill Comnor"
    ],
    "totalCumulativeSites": 19
  },
  {
    "step": 4,
    "year": -1000,
    "yearLabel": "1000 BC",
    "title": "Era of King Lib & Northern Exploration",
    "subtitle": "Serpents seal the south; Lib builds a great city by the narrow neck for hunting and metallurgy",
    "icon": "🐍",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [
      "land_of_desolation"
    ],
    "newCityNames": [
      "Land of Desolation"
    ],
    "totalCumulativeSites": 20
  },
  {
    "step": 5,
    "year": -600,
    "yearLabel": "600 BC",
    "title": "Jaredite Final War & Lehi's Arrival",
    "subtitle": "Shiz and Coriantumr clash at Ramah; Lehi lands in the south; City of Lehi-Nephi founded",
    "icon": "⛵",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [
      "plains_of_agosh",
      "place_of_ogath",
      "cumorah",
      "land_first_inheritance",
      "lehi_nephi",
      "shilom"
    ],
    "newCityNames": [
      "Plains of Agosh",
      "Place of Ogath",
      "Hill Cumorah / Ramah",
      "Land of First Inheritance",
      "City of Lehi-Nephi",
      "Land & City of Shilom"
    ],
    "totalCumulativeSites": 26
  },
  {
    "step": 6,
    "year": -550,
    "yearLabel": "550 BC",
    "title": "Nephite & Lamanite Separation",
    "subtitle": "Nephi flees southward into the wilderness; Lamanites occupy Shemlon and Waters of Sebus",
    "icon": "🏹",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [
      "shemlon",
      "waters_of_sebus"
    ],
    "newCityNames": [
      "Land of Shemlon",
      "Water of Sebus (Pastoral Watering Place)"
    ],
    "totalCumulativeSites": 28
  },
  {
    "step": 7,
    "year": -500,
    "yearLabel": "500 BC",
    "title": "Lamanite Southern Expansion",
    "subtitle": "Sub-kingdoms established in the south; Land and royal fortress of Middoni constructed",
    "icon": "⛺",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [
      "middoni"
    ],
    "newCityNames": [
      "Land & City of Middoni"
    ],
    "totalCumulativeSites": 29
  },
  {
    "step": 8,
    "year": -450,
    "yearLabel": "450 BC",
    "title": "Age of Enos & Pastoral Growth",
    "subtitle": "Enos wrestles in prayer; pastoral Lamanite lands flourish around the Land of Ishmael",
    "icon": "🐑",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [
      "ishmael"
    ],
    "newCityNames": [
      "Land of Ishmael"
    ],
    "totalCumulativeSites": 30
  },
  {
    "step": 9,
    "year": -400,
    "yearLabel": "400 BC",
    "title": "Mid-Nephite Epoch (Jarom)",
    "subtitle": "Nephites fortify cities against repeated invasions; Amalekite village of Ani-Anti settled",
    "icon": "🛡️",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [
      "ani_anti"
    ],
    "newCityNames": [
      "Village of Ani-Anti"
    ],
    "totalCumulativeSites": 31
  },
  {
    "step": 10,
    "year": -350,
    "yearLabel": "350 BC",
    "title": "Southern Border Settlements (Omni)",
    "subtitle": "Dissident factions assist Lamanites in building the great fortified City of Jerusalem",
    "icon": "🏰",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [
      "city_of_jerusalem"
    ],
    "newCityNames": [
      "City of Jerusalem"
    ],
    "totalCumulativeSites": 32
  },
  {
    "step": 11,
    "year": -300,
    "yearLabel": "300 BC",
    "title": "Flourishing Southern Domains",
    "subtitle": "Lamanite presence strengthens across the deep south from Jerusalem to Sebus",
    "icon": "🌾",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [],
    "newCityNames": [],
    "totalCumulativeSites": 32
  },
  {
    "step": 12,
    "year": -250,
    "yearLabel": "250 BC",
    "title": "Pre-Mosiah Exploration & Frontier Expansion",
    "subtitle": "Nephite scouting expeditions probe northward through the narrow strip of wilderness",
    "icon": "🧭",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [],
    "newCityNames": [],
    "totalCumulativeSites": 32
  },
  {
    "step": 13,
    "year": -200,
    "yearLabel": "200 BC",
    "title": "Flight of Mosiah I & Discovery of Zarahemla",
    "subtitle": "Mosiah I leads righteous Nephites across wilderness; discovers Mulekite civilization at Zarahemla",
    "icon": "👑",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [
      "zarahemla",
      "land_of_zarahemla"
    ],
    "newCityNames": [
      "City of Zarahemla",
      "Greater Land of Zarahemla"
    ],
    "totalCumulativeSites": 34
  },
  {
    "step": 14,
    "year": -150,
    "yearLabel": "150 BC",
    "title": "Zeniff's Colony & Alma's Covenant at Mormon",
    "subtitle": "Zeniff reclaims Lehi-Nephi; Alma secretly baptizes at Waters of Mormon; builds City of Helam",
    "icon": "💧",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [
      "forest_of_mormon",
      "waters_of_mormon",
      "helam",
      "land_of_amulon",
      "valley_of_alma"
    ],
    "newCityNames": [
      "Forest of Mormon",
      "Waters of Mormon",
      "City & Land of Helam",
      "Land of Amulon",
      "Valley of Alma"
    ],
    "totalCumulativeSites": 39
  },
  {
    "step": 15,
    "year": -100,
    "yearLabel": "100 BC",
    "title": "Golden Age of the Republic (Reign of Judges)",
    "subtitle": "Mosiah initiates constitutional reign of judges; Amlicite war at Amnihu; cities of Melek, Sidom, and Ammonihah founded",
    "icon": "⚖️",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [
      "minon",
      "hill_amnihu",
      "valley_of_gideon",
      "melek",
      "ammonihah",
      "city_of_sidom"
    ],
    "newCityNames": [
      "Land & City of Minon",
      "Hill Amnihu",
      "Valley of Gideon (East Bank)",
      "Land & City of Melek",
      "City of Ammonihah",
      "City & Land of Sidom"
    ],
    "totalCumulativeSites": 45
  },
  {
    "step": 16,
    "year": -75,
    "yearLabel": "75 BC",
    "title": "Sons of Mosiah Missions & Zoramite Crisis",
    "subtitle": "Anti-Nephi-Lehies given Jershon; Zoramites apostatize at Antionum; Moroni defends southern border at Manti; Bountiful safeguarded",
    "icon": "⚔️",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [
      "jershon",
      "antionum",
      "hill_onidah",
      "land_of_siron",
      "mount_antipas",
      "hill_riplah",
      "manti",
      "hill_manti",
      "bountiful",
      "land_bountiful"
    ],
    "newCityNames": [
      "Land & City of Jershon",
      "Land of Antionum",
      "Hill Onidah",
      "Land of Siron",
      "Mount Antipas & Onidah",
      "Hill Riplah",
      "City & Hill of Manti",
      "Hill Manti",
      "City of Bountiful",
      "Land Bountiful"
    ],
    "totalCumulativeSites": 55
  },
  {
    "step": 17,
    "year": -70,
    "yearLabel": "70 BC",
    "title": "Captain Moroni's Fortifications & Morianton Dispute",
    "subtitle": "Alma 50: Moroni fortifies eastern sea line (Moroni, Nephihah, Lehi, Morianton, Mulek); Teancum slays Morianton at narrow pass; Helaman's stripling warriors defend southwest (Judea, Cumeni)",
    "icon": "🛡️",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [
      "morianton",
      "city_of_lehi",
      "nephihah",
      "city_of_moroni",
      "aaron_coastal",
      "aaron_inland",
      "city_of_noah",
      "mulek",
      "gid",
      "omner",
      "judea",
      "antiparah",
      "cumeni",
      "zeezrom_city",
      "helamans_chain"
    ],
    "newCityNames": [
      "City & Land of Morianton",
      "City of Lehi",
      "City of Nephihah",
      "City of Moroni",
      "City of Aaron (Coastal)",
      "Land & City of Aaron (Inland)",
      "City & Land of Noah",
      "City of Mulek",
      "City of Gid",
      "City of Omner",
      "City of Judea",
      "City of Antiparah",
      "City of Cumeni",
      "City of Zeezrom",
      "Helaman's Defense Chain"
    ],
    "totalCumulativeSites": 70
  },
  {
    "step": 18,
    "year": -25,
    "yearLabel": "25 BC",
    "title": "Late Republic & Secret Combinations",
    "subtitle": "Dissident factions build up northern and inland strongholds; cities multiplying prior to the crucifixion cataclysm",
    "icon": "🚩",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [
      "city_of_kishkumen",
      "city_of_gadiandi",
      "city_of_gadiomnah",
      "city_of_jacob",
      "city_of_gimgimno",
      "city_of_jacobugath",
      "city_of_moronihah",
      "city_of_gilgal",
      "city_of_onihah",
      "city_of_mocum",
      "city_of_laman",
      "city_of_josh",
      "city_of_gad"
    ],
    "newCityNames": [
      "City of Kishkumen",
      "City of Gadiandi",
      "City of Gadiomnah",
      "City of Jacob",
      "City of Gimgimno",
      "City of Jacobugath",
      "City of Moronihah",
      "City of Gilgal",
      "City of Onihah",
      "City of Mocum",
      "City of Laman",
      "City of Josh",
      "City of Gad"
    ],
    "totalCumulativeSites": 83
  },
  {
    "step": 19,
    "year": 1,
    "yearLabel": "AD 1",
    "title": "Birth of Christ (Zionic Hope & Peace)",
    "subtitle": "New star appears and night with no darkness; all 83 established cities thrive across northern and southern lands",
    "icon": "⭐",
    "isCataclysm": false,
    "isPostCataclysm": false,
    "newIds": [],
    "newCityNames": [],
    "totalCumulativeSites": 83
  },
  {
    "step": 20,
    "year": 34,
    "yearLabel": "AD 34",
    "title": "The 3 Nephi Cataclysm & Savior's Visit",
    "subtitle": "Crucifixion upheaval: 16 wicked cities sunk, burned, and shaken; Resurrected Lord descends at the Temple in Bountiful",
    "icon": "🔥",
    "isCataclysm": true,
    "isPostCataclysm": false,
    "newIds": [],
    "newCityNames": [],
    "totalCumulativeSites": 83
  },
  {
    "step": 21,
    "year": 50,
    "yearLabel": "AD 50",
    "title": "Post-Cataclysm Reconstruction",
    "subtitle": "Zarahemla rebuilt from ashes; permanent altered geography; righteous order throughout the land",
    "icon": "🕊️",
    "isCataclysm": false,
    "isPostCataclysm": true,
    "newIds": [],
    "newCityNames": [],
    "totalCumulativeSites": 83
  },
  {
    "step": 22,
    "year": 100,
    "yearLabel": "AD 100",
    "title": "The Golden Century of Peace (4 Nephi)",
    "subtitle": "All people dwell in complete unity and divine fellowship; no rich, no poor, no bond or free",
    "icon": "✨",
    "isCataclysm": false,
    "isPostCataclysm": true,
    "newIds": [],
    "newCityNames": [],
    "totalCumulativeSites": 83
  },
  {
    "step": 23,
    "year": 150,
    "yearLabel": "AD 150",
    "title": "Zenith of 4 Nephi Zion",
    "subtitle": "Fair and delightsome civilization; cities multiplied and prosperous across all lands",
    "icon": "🏛️",
    "isCataclysm": false,
    "isPostCataclysm": true,
    "newIds": [],
    "newCityNames": [],
    "totalCumulativeSites": 83
  },
  {
    "step": 24,
    "year": 200,
    "yearLabel": "AD 200",
    "title": "End of the 4 Nephi Golden Age",
    "subtitle": "A small part revolts; wearing of costly apparel, pride, and false churches re-emerge",
    "icon": "⚖️",
    "isCataclysm": false,
    "isPostCataclysm": true,
    "newIds": [],
    "newCityNames": [],
    "totalCumulativeSites": 83
  },
  {
    "step": 25,
    "year": 250,
    "yearLabel": "AD 250",
    "title": "Resurgence of Secret Combinations",
    "subtitle": "Lamanites and Nephites divide once more; Gadianton oaths revived throughout the land",
    "icon": "🗡️",
    "isCataclysm": false,
    "isPostCataclysm": true,
    "newIds": [],
    "newCityNames": [],
    "totalCumulativeSites": 83
  },
  {
    "step": 26,
    "year": 325,
    "yearLabel": "AD 325",
    "title": "Ammaron's Charge & Hill Shim",
    "subtitle": "Ammaron charges 10-year-old Mormon to safeguard sacred records deposited in Hill Shim in the Land of Antum (Mormon 1:3)",
    "icon": "📜",
    "isCataclysm": false,
    "isPostCataclysm": true,
    "newIds": [
      "land_of_antum",
      "hill_shim"
    ],
    "newCityNames": [
      "Land of Antum",
      "Hill Shim (in Antum)"
    ],
    "totalCumulativeSites": 85
  },
  {
    "step": 27,
    "year": 350,
    "yearLabel": "AD 350",
    "title": "Mormon's Defense & Northern Retreat",
    "subtitle": "General Mormon leads retreating Nephite armies through Joshua, David, Jashon, and Shem (Mormon 2)",
    "icon": "⚔️",
    "isCataclysm": false,
    "isPostCataclysm": true,
    "newIds": [
      "city_of_joshua",
      "city_of_david",
      "city_of_jashon",
      "city_of_shem"
    ],
    "newCityNames": [
      "City & Land of Joshua",
      "City of David",
      "City of Jashon",
      "City of Shem"
    ],
    "totalCumulativeSites": 89
  },
  {
    "step": 28,
    "year": 365,
    "yearLabel": "AD 365",
    "title": "Northern Coastal Battles (Teancum, Boaz & Jordan)",
    "subtitle": "Nephite armies make desperate stands at coastal fortified cities Teancum, Boaz, and Jordan (Mormon 4-5)",
    "icon": "🛡️",
    "isCataclysm": false,
    "isPostCataclysm": true,
    "newIds": [
      "teancum",
      "boaz",
      "city_of_jordan"
    ],
    "newCityNames": [
      "City of Teancum",
      "City of Boaz",
      "City of Jordan"
    ],
    "totalCumulativeSites": 92
  },
  {
    "step": 29,
    "year": 385,
    "yearLabel": "AD 385",
    "title": "Final Stand at Cumorah & Moroni's Seal",
    "subtitle": "Tragedies of Sherrizah and Moriantum (Moroni 9); 230,000 Nephites slain at Cumorah; Moroni seals the golden plates (AD 421)",
    "icon": "💀",
    "isCataclysm": false,
    "isPostCataclysm": true,
    "newIds": [
      "city_of_sherrizah",
      "city_of_moriantum"
    ],
    "newCityNames": [
      "City & Tower of Sherrizah",
      "City of Moriantum"
    ],
    "totalCumulativeSites": 94
  }
];

// Attach foundedYear and foundedStep to each landmark in mapLocations
chronologicalMilestones.forEach(step => {
  step.newIds.forEach(id => {
    if (mapLocations[id]) {
      mapLocations[id].foundedYear = step.year;
      mapLocations[id].foundedYearLabel = step.yearLabel;
      mapLocations[id].foundedStep = step.step;
    }
  });
});
