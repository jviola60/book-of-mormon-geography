/**
 * Comprehensive Scriptural Dossiers, Historical Context & Figures for Book of Mormon Geography
 * Strictly Verified Against the Text of the Book of Mormon (1981/2013 LDS Edition)
 * Every location and figure verified: no unrecorded sermons fabricated; exact prophets,
 * military leaders, apostates, and timeframes distinguished with scriptural fidelity.
 */

const BOOK_OF_MORMON_FIGURES = {
  "Jesus Christ": {
    "roleType": "The Savior & Redeemer of Mankind",
    "badge": "The Son of God",
    "description": "The Son of the Eternal Father, Creator of heaven and earth, and Redeemer of the world. Ministered in resurrected glory to the righteous remnant at the Temple in Bountiful in AD 34 (3 Nephi 11–28)."
  },
  "Nephi": {
    "roleType": "Holy Prophet & Patriarch",
    "badge": "Founding Prophet of the Nephites",
    "description": "Prophet, record-keeper, and founding leader of the Nephite civilization. Built the transoceanic ship and temple modeled after Solomon's; author of 1 & 2 Nephi."
  },
  "Lehi": {
    "roleType": "Patriarch & Prophet",
    "badge": "Founding Patriarch",
    "description": "Patriarch and prophet who led his family out of Jerusalem in 600 BC; received the Tree of Life vision and blessed his posterity (1 & 2 Nephi)."
  },
  "Jacob": {
    "roleType": "Holy Prophet & Priest",
    "badge": "Nephite High Priest & Prophet",
    "description": "Younger brother of Nephi, consecrated priest and prophet. Testified powerfully of Christ's infinite Atonement and denounced pride and unchastity (2 Nephi 9; Jacob 1–7)."
  },
  "Enos": {
    "roleType": "Holy Prophet & Record Keeper",
    "badge": "Nephite Record Keeper",
    "description": "Son of Jacob who wrestled before God in mighty prayer for the pardon of his sins, the welfare of the Nephites, and the preservation of records for the Lamanites (Enos 1)."
  },
  "Jarom": {
    "roleType": "Nephite Record Keeper",
    "badge": "Record Keeper",
    "description": "Son of Enos who recorded the military defenses, stiffneckedness, and prosperity of the Nephites (Jarom 1)."
  },
  "Omni": {
    "roleType": "Nephite Record Keeper & Soldier",
    "badge": "Soldier & Record Keeper",
    "description": "Nephite soldier and keeper of the small plates during centuries of continual warfare (Omni 1)."
  },
  "King Mosiah I": {
    "roleType": "Prophet-King",
    "badge": "Righteous King of Zarahemla",
    "description": "Righteous king warned of God to flee the Land of Nephi; united the Nephites and the people of Zarahemla (Mulekites) around 120 BC (Omni 1:12–19)."
  },
  "King Benjamin": {
    "roleType": "Prophet-King",
    "badge": "Righteous Monarch & Prophet",
    "description": "Righteous prophet-king who labored with his own hands and addressed his people from an elevated tower at the Zarahemla temple, teaching of selfless service and Christ's Atonement (Mosiah 1–6)."
  },
  "Mosiah II": {
    "roleType": "Prophet-King",
    "badge": "Last Nephite King & Founder of Judges",
    "description": "Last Nephite monarch; established the Reign of Judges, translated the 24 Jaredite plates with the Urim and Thummim, and protected religious liberty (Mosiah 28–29)."
  },
  "Abinadi": {
    "roleType": "Martyr Prophet",
    "badge": "Holy Prophet & Martyr",
    "description": "Courageous prophet sent by God to call King Noah and his corrupt court to repentance; testified of the Ten Commandments, Isaiah 53, and Christ's suffering before dying by fire (Mosiah 11–17)."
  },
  "Abinadi (spirit of his teachings)": {
    "roleType": "Martyr Prophet",
    "badge": "Prophetic Legacy",
    "description": "The enduring doctrinal legacy and prophetic witness of Abinadi, which directly converted Alma the Elder and inspired the founding of the Church at the Waters of Mormon (Mosiah 18:1)."
  },
  "Alma": {
    "roleType": "Prophet & Chief Judge",
    "badge": "Alma the Younger",
    "description": "Alma the Younger, first Chief Judge and High Priest who traveled throughout Nephite lands preaching repentance (Mosiah 27; Alma 1–44)."
  },
  "Alma the Elder": {
    "roleType": "High Priest & Prophet",
    "badge": "Founder of the Nephite Church",
    "description": "Former priest of King Noah converted by Abinadi's witness; baptized 204 souls at the Waters of Mormon, organized the Church of Christ, and led his people through bondage to Zarahemla (Mosiah 18; 23–24)."
  },
  "Alma the Younger": {
    "roleType": "Chief Judge, High Priest & Prophet",
    "badge": "Prophet & First Chief Judge",
    "description": "Miraculously converted after an angel's rebuke; resigned the chief judgment seat to devote his life to preaching repentance across all Nephite lands; translated at the end of his ministry (Mosiah 27; Alma 1–44)."
  },
  "Amulek": {
    "roleType": "Holy Prophet & Missionary",
    "badge": "Faithful Missionary Companion",
    "description": "Wealthy citizen of Ammonihah called by an angel to companion Alma; testified of the resurrection and Christ's infinite and eternal Atonement (Alma 8–15; 34)."
  },
  "Zeezrom": {
    "roleType": "Faithful Missionary & Convert",
    "badge": "Convert & Valiant Missionary",
    "description": "Cunning lawyer in Ammonihah who initially tried to bribe Amulek; fell into agony of soul over his sins, was miraculously healed of a burning fever by Alma in Sidom, and became a devoted missionary (Alma 10–15; 31)."
  },
  "Zeezrom (prior to conversion)": {
    "roleType": "Corrupt Lawyer & Opponent",
    "badge": "Hostile Ammonihah Lawyer",
    "description": "The expert lawyer of Ammonihah who offered Amulek six onties of silver to deny the existence of a Supreme Being before being confounded by Amulek's witness (Alma 11:21–36)."
  },
  "Ammon": {
    "roleType": "Missionary Prince & Prophet",
    "badge": "Son of Mosiah & Valiant Missionary",
    "description": "Son of King Mosiah who refused the throne to preach to the Lamanites; served King Lamoni as a herdsman, defended the royal flocks at Sebus, and helped convert thousands (Alma 17–20)."
  },
  "Aaron": {
    "roleType": "Missionary Prince & High Priest",
    "badge": "Son of Mosiah & Missionary",
    "description": "Son of King Mosiah who endured brutal imprisonment in Middoni and converted the Great King of all the Lamanites at the City of Nephi, resulting in religious freedom for thousands (Alma 21–23)."
  },
  "Omner": {
    "roleType": "Missionary Prince",
    "badge": "Son of Mosiah",
    "description": "Son of King Mosiah who companion with his brothers on their 14-year mission among the Lamanites, laboring faithfully in the ministry (Alma 17–25)."
  },
  "Himni": {
    "roleType": "Missionary Prince",
    "badge": "Son of Mosiah",
    "description": "Son of King Mosiah who gave up royal rights to preach the word of God faithfully among the Lamanites (Alma 17–25)."
  },
  "Muloki": {
    "roleType": "Faithful Missionary",
    "badge": "Companion to Aaron",
    "description": "Righteous Nephite missionary who labored with Aaron and Ammah, suffered imprisonment in Middoni, and preached in Ani-Anti and Middoni (Alma 20:2; 21:11–13)."
  },
  "Ammah": {
    "roleType": "Faithful Missionary",
    "badge": "Companion to Aaron",
    "description": "Righteous missionary who companion with Aaron and Muloki, enduring bonds and hunger in the prisons of Middoni for the gospel (Alma 20:2; 21:11–13)."
  },
  "King Lamoni": {
    "roleType": "Righteous Convert & Lamanite Monarch",
    "badge": "Converted Lamanite King",
    "description": "King of the Land of Ishmael converted through Ammon's humble service, spiritual witness, and teaching of the Plan of Redemption (Alma 17–19)."
  },
  "The Lamanite Queen": {
    "roleType": "Righteous Disciple",
    "badge": "Faithful Lamanite Queen",
    "description": "Wife of King Lamoni who manifested profound faith during her husband's spiritual trance, declaring 'He is not dead' and witnessing the power of the Redeemer (Alma 19:1–13)."
  },
  "Abish": {
    "roleType": "Faithful Convert & Handmaid",
    "badge": "Faithful Lamanite Disciple",
    "description": "Lamanite handmaid to Lamoni's queen who had been converted for many years by a remarkable vision of her father; ran from house to house to gather the people to behold God's work (Alma 19:16–29)."
  },
  "Lamoni's Father": {
    "roleType": "Righteous Convert & Supreme Lamanite Sovereign",
    "badge": "Converted King of All Lamanites",
    "description": "The supreme monarch over all Lamanite lands converted by Aaron at the City of Nephi; covenanted to give up all his sins to know God, and proclaimed universal religious liberty (Alma 20; 22)."
  },
  "King Anti-Nephi-Lehi": {
    "roleType": "Righteous Lamanite King",
    "badge": "Brother of Lamoni & Covenant King",
    "description": "Brother of King Lamoni who was given rule over the converted Lamanites; led his people in burying their weapons of war in covenant peace (Alma 24:1–18)."
  },
  "Anti-Nephi-Lehies": {
    "roleType": "Righteous Covenant People",
    "badge": "The People of Ammon",
    "description": "Thousands of Lamanites converted by the sons of Mosiah who buried their weapons deep in the earth, made a covenant never to shed blood again, and became renowned for their unshakable faithfulness (Alma 23–24)."
  },
  "Anti-Lehi-Nephites": {
    "roleType": "Righteous Covenant People",
    "badge": "Variant Name for People of Ammon",
    "description": "The covenant-keeping converted Lamanites who settled in the Land of Jershon under Nephite protection (Alma 23–27)."
  },
  "Anti-Lehi-Nephites (People of Ammon)": {
    "roleType": "Righteous Covenant People",
    "badge": "The People of Ammon",
    "description": "The converted Lamanite pacifists given the land of Jershon for their inheritance, known throughout scripture for their integrity and never falling away (Alma 27:26)."
  },
  "People of Ammon": {
    "roleType": "Righteous Covenant People",
    "badge": "The People of Ammon",
    "description": "The name given to the Anti-Nephi-Lehies by the Nephites when they settled in Jershon; mothers of the 2,060 Stripling Warriors (Alma 27:26; 53:10–22)."
  },
  "Lamoni's Servants": {
    "roleType": "Lamanite Servants & Witnesses",
    "badge": "Royal Flocks Servants",
    "description": "Servants of King Lamoni who witnessed Ammon's miraculous defense of the royal flocks at the Waters of Sebus and carried the severed arms to the king (Alma 17:39; 18:1–3)."
  },
  "Captain Moroni": {
    "roleType": "Chief Military Commander & Patriot",
    "badge": "Chief Captain of the Nephite Armies",
    "description": "Inspired commander of all Nephite armies at age 25; raised the Title of Liberty, designed groundbreaking earthen fortifications, defended civil and religious freedom, and sought not power but the glory of God (Alma 43–62)."
  },
  "Helaman": {
    "roleType": "High Priest, Prophet & Military Commander",
    "badge": "Prophet & Leader of Stripling Warriors",
    "description": "Son of Alma the Younger; high priest over the church and beloved leader of the 2,060 young sons of Ammon during the southwestern campaigns (Alma 45; 53; 56–58)."
  },
  "Helaman (Son of Alma)": {
    "roleType": "High Priest, Prophet & Military Commander",
    "badge": "Leader of Stripling Warriors",
    "description": "High priest and military leader who commanded the 2,060 stripling warriors in the southwestern campaign, testifying of their miraculous preservation by God (Alma 53; 56–58)."
  },
  "2,000 Stripling Warriors": {
    "roleType": "Valiant Righteous Warriors",
    "badge": "Youthful Sons of Helaman",
    "description": "The two thousand youthful sons of the People of Ammon who covenanted to fight for Nephite liberty, led by Helaman and preserved without a single fatality through their faith in God (Alma 53:16–22; 56:44–56)."
  },
  "2,060 Stripling Warriors": {
    "roleType": "Valiant Righteous Warriors",
    "badge": "The Preserved Sons of Ammon",
    "description": "The complete company of stripling warriors, joined by 60 additional brethren; fought with miraculous courage in the defense of Cumeni and Manti; all wounded, yet not one slain (Alma 57:19–27; 58:39)."
  },
  "Teancum": {
    "roleType": "Nephite Military Commander & Patriot",
    "badge": "Valiant Nephite General",
    "description": "Fearless Nephite captain who intercepted Morianton's rebellion, recaptured Mulek alongside Moroni, and personally assassinated the tyrants Amalickiah and Ammoron in their camps (Alma 50–52; 61–62)."
  },
  "Teancum (commemorated)": {
    "roleType": "Military Commander & Patriot",
    "badge": "Namesake Patriot",
    "description": "The heroic Nephite commander commemorated in the naming of the fortified northern City of Teancum (Mormon 4:3)."
  },
  "Lehi (Captain)": {
    "roleType": "Nephite Military Commander",
    "badge": "Valiant Nephite Commander",
    "description": "Nephite chief captain second only to Moroni in valor; commanded the forces at Noah, Mulek, and Bountiful; feared by Lamanites because of his righteousness and courage (Alma 43:35; 49:16; 52:27–32; 62:32)."
  },
  "Lehi (Military Commander)": {
    "roleType": "Nephite Military Commander",
    "badge": "Valiant Nephite Commander",
    "description": "Chief captain alongside Moroni and Teancum who helped encircle and defeat Jacob the Zoramite at Mulek and defended the eastern coastline (Alma 52:27–35; 53:2)."
  },
  "Antipus": {
    "roleType": "Nephite Military Commander",
    "badge": "Commander of the Western Army",
    "description": "Valiant Nephite commander who fortified Judea and led his exhausted western army in pursuit of the Lamanites at Antiparah, falling in battle before victory was secured (Alma 56:9–57)."
  },
  "Pahoran": {
    "roleType": "Righteous Chief Judge",
    "badge": "Third Chief Judge of the Nephites",
    "description": "Righteous Chief Judge who remained committed to constitutional freedom and humble before Moroni's fiery epistle, helping Moroni crush the king-men rebellion and liberate Nephihah (Alma 50:40; 60–62)."
  },
  "Gideon": {
    "roleType": "Nephite Patriot & Church Defender",
    "badge": "Righteous Church Defender & Patriot",
    "description": "A venerable Nephite patriot who opposed King Noah's oppression, advised King Limhi, and stood firm in defense of the church against the false priestcraft of Nehor before being slain in old age (Mosiah 19; Alma 1:7–9)."
  },
  "Nephi (Son of Helaman)": {
    "roleType": "Holy Prophet & Chief Judge",
    "badge": "Prophet of the Cataclysm Era",
    "description": "Chief Judge who yielded the bench to preach repentance with his brother Lehi; encircled by divine fire in prison, prophesied the murder of Seezoram from his garden tower, and was granted the sealing power by God (Helaman 5–11)."
  },
  "Samuel the Lamanite": {
    "roleType": "Holy Prophet",
    "badge": "Lamanite Prophet of Christ's Coming",
    "description": "Courageous Lamanite prophet who stood upon the city walls of Zarahemla under a hail of arrows and stones, prophesying the exact signs of Christ's birth (a day, night, and day without darkness) and crucifixion (Helaman 13–16)."
  },
  "Samuel the Lamanite (Prophesied)": {
    "roleType": "Holy Prophet",
    "badge": "Prophetic Warning Witness",
    "description": "The prophetic witness of Samuel the Lamanite whose predictions of judgment and cataclysm upon wicked Nephite cities were strictly fulfilled in 3 Nephi 8–9 (Helaman 13:12–14)."
  },
  "Mormon": {
    "roleType": "Prophet-General, Historian & Abridger",
    "badge": "Prophet-General & Historian",
    "description": "Prophet-general, historian, and principal abridger of the Nephite records from age 16; led Nephite armies in their final tragic decades and hid sacred records at Cumorah before his martyrdom (Mormon 1–7; Moroni 7–9)."
  },
  "Moroni": {
    "roleType": "Final Solitary Prophet & Record Finisher",
    "badge": "Final Nephite Prophet & Plate Keeper",
    "description": "Son of Mormon and final surviving prophet of the Nephites; witnessed the total annihilation of his people, wandered alone for decades, abridged the Book of Ether, wrote Moroni 1–10, and sealed the golden plates in Hill Cumorah (AD 421)."
  },
  "Brother of Jared": {
    "roleType": "Mighty Prophet & Patriarch",
    "badge": "Prophet Moriancumer",
    "description": "Mighty prophet who cried unto the Lord at the Tower of Babel to preserve their language; saw the premortal spirit body of Jesus Christ through surpassing faith, and led his colony across the ocean to the promised land (Ether 1–3; 6)."
  },
  "Jared": {
    "roleType": "Jaredite Founding Patriarch",
    "badge": "Founding Patriarch",
    "description": "Patriarch who, along with his brother, led their families and friends from the Tower of Babel across the great ocean to the Promised Land (Ether 1–6)."
  },
  "Ether": {
    "roleType": "Final Jaredite Prophet",
    "badge": "Jaredite Prophet of Repentance",
    "description": "The last prophet of the Jaredites; dwelt in the cavity of a rock, cried repentance to King Coriantumr, prophesied of the New Jerusalem, and recorded the total extinction of the Jaredite nation upon 24 plates of gold (Ether 12–15)."
  },
  "Ammaron": {
    "roleType": "Nephite Record Keeper & Prophet",
    "badge": "Sacred Plate Custodian",
    "description": "Prophet and record custodian constrained by the Holy Ghost to hide all the sacred records in Hill Shim, charging the ten-year-old youth Mormon to retrieve them at age 24 (Mormon 1:1–4)."
  },
  "Sariah": {
    "roleType": "Patriarchal Matriarch",
    "badge": "Matriarch of the Lehite Colony",
    "description": "Wife of Lehi and matriarch of the Nephite and Lamanite peoples; endured trials in the Arabian wilderness and transoceanic voyage with faithful devotion (1 Nephi 1–18)."
  },
  "Sam": {
    "roleType": "Righteous Patriarch & Disciple",
    "badge": "Faithful Brother of Nephi",
    "description": "Righteous third son of Lehi and Sariah; believed Nephi's words from the beginning, supported his younger brother against rebellious Laman and Lemuel, and was numbered among the righteous (1 Nephi 2:17; 2 Nephi 5:6)."
  },
  "Shiblon": {
    "roleType": "Righteous Missionary & Record Keeper",
    "badge": "Son of Alma the Younger",
    "description": "Righteous son of Alma the Younger commended for his steadfastness and patience under persecution among the Zoramites; kept the sacred records before passing them to Helaman (Alma 38; 63:1–11)."
  },
  "Corianton": {
    "roleType": "Repentant Missionary & Teacher",
    "badge": "Son of Alma the Younger",
    "description": "Son of Alma who strayed morally in Siron, repented sincerely under his father's doctrinal instruction, returned to the ministry, and sailed northward with gospel provisions (Alma 39–42; 63:10)."
  },
  "Hagoth": {
    "roleType": "Nephite Shipbuilder & Explorer",
    "badge": "Exceedingly Curious Shipbuilder",
    "description": "An exceedingly curious Nephite shipbuilder who launched large ships into the West Sea by the Narrow Neck in 55 BC, transporting thousands of Nephites and provisions into the Land Northward (Alma 63:5–8)."
  },
  "Mulek": {
    "roleType": "Prince of Judah & Founding Colonist",
    "badge": "Son of King Zedekiah of Judah",
    "description": "The only surviving son of King Zedekiah of Jerusalem (586 BC), brought by the hand of the Lord across the ocean into the Land Northward at Desolation; namesake of the Mulekite nation (Alma 22:30; Helaman 6:10; Omni 1:14–19)."
  },
  "Zarahemla": {
    "roleType": "Mulekite Ruler & Founder",
    "badge": "Descendant of Mulek & Ruler",
    "description": "Leader of the Mulekite colony in the Sidon basin who welcomed King Mosiah I, rejoiced over the brass plates, united their peoples, and gave his name to the great capital city (Omni 1:14–19)."
  },
  "King Zarahemla (Mulekite ruler, Omni 1:14)": {
    "roleType": "Mulekite Ruler & Founder",
    "badge": "Descendant of Mulek & Ruler",
    "description": "The sovereign ruler of the people of Zarahemla (Mulekites) who united his civilization with Mosiah's Nephites around 120 BC (Omni 1:14–19)."
  },
  "Zeniff": {
    "roleType": "Nephite Colony Leader",
    "badge": "Overzealous Colony Leader",
    "description": "Overzealous Nephite leader who led a colony from Zarahemla back to the Land of Nephi; negotiated with King Laman, reclaimed Lehi-Nephi and Shilom, and defended his people through faith in God (Mosiah 9–10)."
  },
  "King Limhi": {
    "roleType": "Righteous Nephite Monarch",
    "badge": "Righteous Son of King Noah",
    "description": "Righteous son of King Noah who protected his oppressed people under Lamanite bondage, received Ammon the explorer, and led his colony's miraculous escape to Zarahemla (Mosiah 7–8; 19–22)."
  },
  "Ammon (Explorer)": {
    "roleType": "Nephite Military Leader & Explorer",
    "badge": "Descendant of Zarahemla & Explorer",
    "description": "Mighty and strong descendant of Zarahemla who led an expedition of sixteen men into the wilderness to discover King Limhi's colony in Lehi-Nephi (Mosiah 7:1–16)."
  },
  "Limhi's Explorers": {
    "roleType": "Nephite Expeditionary Scouts",
    "badge": "Discovery Scouts of Jaredite Plates",
    "description": "The expedition of 43 men sent by King Limhi into the wilderness seeking Zarahemla; became lost, discovered the ruins, bones, and 24 gold plates of the extinct Jaredites in Desolation (Mosiah 8:7–9; 21:25–27)."
  },
  "Helam": {
    "roleType": "Righteous Disciple & Convert",
    "badge": "First Convert Baptized at Mormon",
    "description": "First convert baptized by Alma the Elder in the Waters of Mormon; righteous elder and namesake of the peaceful City of Helam (Mosiah 18:12–14; 23:19)."
  },
  "Nephihah": {
    "roleType": "Second Chief Judge of the Nephites",
    "badge": "Chief Judge & Namesake",
    "description": "Second Chief Judge of the Nephite republic, appointed by Alma the Younger when Alma resigned the judgment seat to focus entirely on preaching (Alma 4:16–20; 50:14)."
  },
  "Moronihah (Namesake)": {
    "roleType": "Nephite Military Commander & Namesake",
    "badge": "Righteous Commander & Namesake",
    "description": "Valiant son of Captain Moroni and Chief Captain of the Nephite armies who retook Zarahemla; namesake of the city destroyed by a mountain in 3 Nephi 8:10 (Alma 62:43; Helaman 1:25–33)."
  },
  "Prophets who were stoned and cast out": {
    "roleType": "Holy Martyrs & Messengers",
    "badge": "Martyred Prophets of God",
    "description": "The righteous messengers sent by the Lord to testify of Christ and cry repentance to the wicked Nephite and Lamanite cities, whose rejection brought catastrophic judgment in 3 Nephi 9:10 (3 Nephi 7:14; 9:10)."
  },
  "Orihah": {
    "roleType": "Righteous Jaredite Monarch",
    "badge": "First King of the Jaredites",
    "description": "Righteous son of Jared who was anointed the first king of the Jaredites; walked humbly before God and executed righteous judgment throughout his long reign (Ether 6:27; 7:1)."
  },
  "Kib": {
    "roleType": "Jaredite Monarch",
    "badge": "Righteous Jaredite King",
    "description": "Son of Orihah who reigned in righteousness; taken captive by his rebellious son Corihor and lived in captivity until liberated by his son Shule (Ether 7:3–9)."
  },
  "Shule": {
    "roleType": "Righteous Jaredite King",
    "badge": "Liberator & Protector of Prophets",
    "description": "Mighty Jaredite king who forged steel swords at Hill Ephraim to liberate his father Kib; executed righteous judgment and protected the Lord's prophets when they cried repentance (Ether 7:8–27)."
  },
  "King Omer": {
    "roleType": "Righteous Jaredite Monarch",
    "badge": "Righteous Jaredite King",
    "description": "Righteous Jaredite king warned of the Lord in a dream to flee the Land of Moron with his family to escape the murderous secret combinations of Akish; dwelt in peace by the seashore at Ablom (Ether 9:1–3)."
  },
  "Lib": {
    "roleType": "Righteous Jaredite Monarch",
    "badge": "Prosperous Jaredite King",
    "description": "Righteous Jaredite king under whose reign the poisonous serpents were destroyed, the people built a great city by the narrow neck, and the land prospered exceedingly (Ether 10:19–28)."
  },
  "Corihor": {
    "roleType": "Jaredite Usurper & Rebel",
    "badge": "Rebellious Jaredite Prince",
    "description": "Son of Kib who rebelled against his father, gathered dissidents in the City of Nehor, and held his father captive until defeated by Shule (Ether 7:3–9)."
  },
  "Coriantumr": {
    "roleType": "Last Jaredite King & Warrior",
    "badge": "Last King of the Jaredites",
    "description": "Last king of the Jaredite nation; refused Ether's call to repentance, fought Shiz in apocalyptic battles that destroyed his entire civilization, and was discovered by the Mulekites at Zarahemla (Ether 13–15; Omni 1:21)."
  },
  "Shiz": {
    "roleType": "Fierce Jaredite Warlord",
    "badge": "Bloody Jaredite Warlord",
    "description": "Fierce, bloodthirsty Jaredite warrior whose terrifying oath to avenge his brother Shared resulted in the total mutual slaughter of millions of Jaredites at Ramah/Cumorah (Ether 14–15)."
  },
  "Shared": {
    "roleType": "Jaredite Usurper & Military Rival",
    "badge": "Jaredite Warlord",
    "description": "Rival warlord who fought Coriantumr in multiple catastrophic civil war battles across the Valley of Gilgal and plains of Heshlon before being slain in battle (Ether 14:3–8)."
  },
  "Gilead": {
    "roleType": "Jaredite Usurper & Rebel",
    "badge": "Jaredite Military Usurper",
    "description": "Brother of Shared who seized military power, defeated Coriantumr's armies in the Wilderness of Akish, and sat upon the throne before being assassinated by his high priest (Ether 14:8–10)."
  },
  "Jacob the Zoramite": {
    "roleType": "Enemy Military Captain / Apostate Dissenter",
    "badge": "Apostate Zoramite & Lamanite Military Captain",
    "description": "An apostate Zoramite leader appointed by Amalickiah/Ammoron as captain over the garrison of the captured city of Mulek. Mormon records in Alma 52:33 that Jacob possessed an 'unyielding and ferocious spirit.' When Teancum led a small decoy force past the city, Jacob pursued him toward Bountiful, allowing Captain Moroni to enter and seize Mulek. Jacob led his warriors with desperate fury until he was slain in battle when surrounded by the armies of Moroni and Lehi (Alma 52:19–35). He was an enemy military captain, never a prophet or teacher."
  },
  "Amalickiah": {
    "roleType": "Apostate Traitor & Usurper King",
    "badge": "Nephite Dissenter & Lamanite King",
    "description": "A cunning, ambitious Nephite dissenter who led a revolt against the church, poisoned Lehonti by degrees at Mount Antipas to steal the army, assassinated the Lamanite king, and instigated devastating wars against the Nephites until slain by Teancum in his tent (Alma 46–51)."
  },
  "Amlici": {
    "roleType": "Apostate Dissenter & King-Man",
    "badge": "Leader of the Amlicite Rebellion",
    "description": "A cunning Nephite after the order of Nehor who sought to overthrow the republic and be crowned king; when rejected by the voice of the people, he led an armed rebellion and allied with Lamanites before being slain in personal combat by Alma the Younger at River Sidon (Alma 2)."
  },
  "Nehor": {
    "roleType": "False Teacher & Murderer",
    "badge": "Originator of Nehorite Priestcraft",
    "description": "An apostate who introduced priestcraft among the Nephites, claiming all mankind would be redeemed without repentance. He murdered the aged patriot Gideon and was executed on Hill Manti for enforcing priestcraft with the sword (Alma 1:1–15)."
  },
  "King Noah": {
    "roleType": "Wicked Nephite Monarch",
    "badge": "Corrupt King of Lehi-Nephi",
    "description": "The wicked, lavish son of Zeniff who deposed righteous priests, laid heavy taxes, led his people into idolatry, and burned the holy prophet Abinadi at the stake before being burned to death by his own fleeing subjects (Mosiah 11–19)."
  },
  "Priests of Noah": {
    "roleType": "Apostate Priests & Kidnappers",
    "badge": "Apostate Priests of King Noah",
    "description": "The corrupt priests who fled into the wilderness when Noah was overthrown, abducted 24 Lamanite daughters at Shemlon, were placed in authority over Alma's people by the Lamanite king, and cruelly persecuted believers (Mosiah 19–24)."
  },
  "Amulon": {
    "roleType": "Wicked Priest & Oppressor",
    "badge": "Leader of the Priests of Noah",
    "description": "Leader of the corrupt priests of Noah who ruled the Land of Helam under the Lamanite king and severely oppressed Alma the Elder's church, forbidding prayer on penalty of death before Alma's miraculous escape (Mosiah 23–24)."
  },
  "Zoram (Founder & apostate leader of the Zoramites, Alma 31:1)": {
    "roleType": "Apostate Religious Founder",
    "badge": "Founder of the Zoramite Apostasy",
    "description": "The apostate Nephite leader who led a secession of Nephites to Antionum, establishing a prideful religion of weekly rote prayers atop the elevated Rameumptom and casting out the humble poor (Alma 31:1–25)."
  },
  "Zerahemnah": {
    "roleType": "Supreme Lamanite Military Commander",
    "badge": "Chief Commander of Lamanite Armies",
    "description": "The fierce chief commander of the combined Lamanite-Zoramite invasion host who appointed Zoramites and Amalekites as captains; defeated and scalped by Moroni's soldier at River Sidon (Alma 43–44)."
  },
  "Zerahemnah (Chief military commander of Lamanite/Zoramite forces, Alma 43:5)": {
    "roleType": "Supreme Lamanite Military Commander",
    "badge": "Chief Commander of Lamanite Armies",
    "description": "The fierce chief commander of the combined Lamanite-Zoramite invasion host who fought Moroni at River Sidon and was compelled to make a covenant of peace (Alma 43:5–44:20)."
  },
  "Morianton": {
    "roleType": "Nephite Rebel & Insurrectionist",
    "badge": "Leader of Morianton Insurrection",
    "description": "A passionate, violent Nephite leader who beat his maidservant, instigated an armed land dispute against Lehi, and led a northern migration to seize the Land Northward before being intercepted and slain by Teancum (Alma 50:25–36)."
  },
  "King Jacob": {
    "roleType": "Apostate Anti-Government Usurper",
    "badge": "King of the Royalist Secret Combination",
    "description": "The apostate crowned king of the secret combinations and corrupt lawyers who murdered Chief Judge Lachoneus and destroyed the Nephite central government; built the northern fortress of Jacobugath before divine destruction (3 Nephi 7:9–14; 9:9)."
  },
  "King Jacob (Namesake)": {
    "roleType": "Apostate Usurper & Namesake",
    "badge": "Namesake of Destroyed Wicked City",
    "description": "The apostate king of secret combinations whose royalist followers established the wicked City of Jacob, burned with fire at Christ's death (3 Nephi 9:8)."
  },
  "Kishkumen (Namesake)": {
    "roleType": "Assassin & Secret Combinations Leader",
    "badge": "Assassin & Founder of Robber Band",
    "description": "The assassin who murdered Chief Judge Pahoran II; co-founder with Gadianton of the secret robber band; namesake of the city burned with fire in 3 Nephi 9:10 (Helaman 1:9–12; 2:3–9)."
  },
  "Gadianton Robbers (Inhabitants)": {
    "roleType": "Murderous Secret Combinations",
    "badge": "Robbers & Assassins",
    "description": "The secret band of murderers, oath-takers, and robbers who infiltrated Nephite society, corrupted the judgment seat, and inhabited wicked cities burned at Christ's death (Helaman 2; 6; 3 Nephi 9:8)."
  },
  "King Antiomno": {
    "roleType": "Lamanite Monarch",
    "badge": "King of Middoni",
    "description": "Lamanite king of Middoni who imprisoned Aaron and his companions; convinced by Ammon and King Lamoni to release the prisoners and grant them liberty (Alma 20:4–30)."
  },
  "Aaron (Lamanite King)": {
    "roleType": "Lamanite Monarch",
    "badge": "Lamanite King in Mormon's Era",
    "description": "Lamanite king who marched against the young Nephite general Mormon with an army of 44,000 men and was defeated in the Land of Joshua in AD 330 (Mormon 2:9)."
  },
  "Amalekite rulers": {
    "roleType": "Apostate Dissident Leaders",
    "badge": "Hardened Synagogue Leaders",
    "description": "Apostate Nephite dissenters more hardened and murderous than the Lamanites; built synagogues after the order of Nehor in the City of Jerusalem and violently rejected the preaching of Aaron (Alma 21:1–10)."
  },
  "Laman": {
    "roleType": "Rebellious Patriarch",
    "badge": "Eldest Son of Lehi",
    "description": "Eldest son of Lehi and Sariah; murmured continually, sought to murder his brother Nephi, rejected the Lord's commandments, and became the father of the Lamanite nation (1 Nephi 2–18; 2 Nephi 5)."
  },
  "Lemuel": {
    "roleType": "Rebellious Patriarch",
    "badge": "Second Son of Lehi",
    "description": "Second son of Lehi and Sariah; joined his older brother Laman in murmuring, plotting violence against Nephi, and rebelling against God (1 Nephi 2–18; 2 Nephi 5)."
  },
  "Laman (soldier)": {
    "roleType": "Nephite Patriot Soldier",
    "badge": "Lamanite-Descendant Nephite Soldier",
    "description": "Righteous Nephite soldier descended from Laman who was chosen by Captain Moroni to execute the wine stratagem, successfully intoxicating the Lamanite guards and liberating the Nephite prisoners at Gid (Alma 55:4–24)."
  },
  "Lehonti": {
    "roleType": "Dissident Lamanite Military Leader",
    "badge": "Commander at Mount Antipas",
    "description": "Leader of the peaceful Lamanite faction encamped atop Mount Antipas who refused the king's order to wage aggressive war against the Nephites; compromised with Amalickiah and was poisoned by degrees (Alma 47:1–18)."
  },
  "Zenephi": {
    "roleType": "Apostate Army Commander",
    "badge": "Brutal Commander in Moroni's Era",
    "description": "Commander of the corrupt armies mentioned by Mormon in Moroni 9:16 who carried off all the provisions from the women and children of Sherrizah, leaving them to starve."
  }
};

const PLACE_DOSSIERS = {
  "global_bom": {
    "id": "global_bom",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 2200 BC – AD 421 (Spanning over 2,600 Years of Sacred History)",
    "teacher": "The Resurrected Lord Jesus Christ, The Brother of Jared, Lehi, Nephi, Jacob, Enos, Jarom, Omni, King Mosiah I, King Benjamin, Abinadi, Alma the Elder, King Mosiah II, Alma the Younger, Amulek, Zeezrom, Sons of Mosiah (Ammon, Aaron, Omner, Himni), Captain Moroni, Helaman, Shiblon, Corianton, Nephi & Lehi (sons of Helaman), Samuel the Lamanite, Lachoneus, The Twelve Nephite Disciples, Mormon, Moroni, & Ether",
    "audience": "Nephite, Lamanite, Mulekite, Jaredite & Zoramite Nations; Kings, Judges, Soldiers, Covenant Families, Little Children, and All Future Readers in the Latter Days",
    "whatWasTaught": "The Fulness of the Everlasting Gospel centered on the coming, mortal ministry, and Infinite Atonement of Jesus Christ. Every holy prophet from Lehi and Nephi to Samuel the Lamanite testified of His coming: declaring His virgin birth, His divine condescension, His miracles, His suffering in Gethsemane, His crucifixion, and His third-day bodily resurrection. Following the great cataclysm, the Resurrected Lord personally ministered at the Temple in Bountiful (3 Nephi 11–28): inviting all to touch His wounds, proclaiming the Doctrine of Christ (faith, repentance, baptism, and the Holy Ghost), delivering the Sermon at the Temple, healing the afflicted, blessing little children, instituting the Sacrament, gathering Israel, and granting the Three Nephites their righteous desire to tarry until His Second Coming.",
    "whyTaught": "Fulfilling the Three Sacred Purposes written upon the Title Page of the Book of Mormon: (1) To show unto the remnant of the House of Israel what great things the Lord hath done for their fathers; (2) That they may know the covenants of the Lord, that they are not cast off forever; and (3) Also to the convincing of the Jew and Gentile that JESUS is the CHRIST, the ETERNAL GOD, manifesting Himself unto all nations.",
    "context": "Over 2,600 years of prophetic history across the ancient Americas—spanning the Jaredite oceanic barges, Lehi's journey across the great waters, Solomonic temples, the Sidon river basin, the strategic Narrow Neck of Land, the great destructions at Christ's death, the personal post-resurrection ministry of the Savior, two centuries of Zion peace (4 Nephi), and the final sealing of the gold plates at Cumorah.",
    "howAccepted": "Every holy prophet pointed forward to Christ with unshakable faith ('We talk of Christ, we rejoice in Christ, we preach of Christ, we prophesy of Christ'). When the Savior descended at Bountiful, the 2,500 gathered saints fell prostrate, bathed His feet with tears, and received His personal touch one by one. The Twelve Disciples then ministered across all lands, establishing two centuries of unbroken Zion society (4 Nephi) with no contention, no rich or poor, and all things held in common through the love of God.",
    "passages": [
      "Title Page of the Book of Mormon",
      "1 Nephi 10:4–6",
      "2 Nephi 2:1–29",
      "2 Nephi 25:26",
      "2 Nephi 31:1–21",
      "Jacob 4:4–5",
      "Mosiah 3:5–19",
      "Mosiah 15:1–9",
      "Mosiah 18:8–10",
      "Alma 7:11–13",
      "Alma 34:8–16",
      "Helaman 5:12",
      "Helaman 14:2–28",
      "3 Nephi 11:1–17",
      "3 Nephi 12–14",
      "3 Nephi 17:1–25",
      "3 Nephi 27:1–22",
      "4 Nephi 1:1–18",
      "Ether 12:27–41",
      "Moroni 7:45–48",
      "Moroni 10:3–5"
    ]
  },
  "zarahemla": {
    "id": "zarahemla",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 124 BC (King Benjamin), c. 83 BC (Alma the Younger), c. 23 BC (Nephi son of Helaman), c. 6 BC (Samuel the Lamanite)",
    "teacher": "King Benjamin (c. 124 BC), Alma the Younger (c. 83 BC), Nephi (Son of Helaman, c. 23 BC), & Samuel the Lamanite (c. 6 BC)",
    "audience": "Assembled Nephite and Mulekite Families pitched in tents round about the Temple; later, hardening citizens, corrupt judges, and rebellious factions",
    "whatWasTaught": "Salvation comes only in and through the atoning blood of Christ the Lord Omnipotent (Mosiah 3:5–19); selfless service to fellow beings ('when ye are in the service of your fellow beings ye are only in the service of your God', Mosiah 2:17); retaining a remission of sins from day to day by imparting substance to the poor (Mosiah 4:12–26); spiritual rebirth and having Christ's image engraven upon one's countenance (Alma 5); solemn warnings against secret combinations and assassination of chief judges (Helaman 7–9); and the exact signs of Christ's birth (day, night, and day with no darkness) and crucifixion (three days of total darkness, earthquakes, and rocks rending) delivered from the city walls (Helaman 13–16).",
    "whyTaught": "To unite two distinct cultures (Nephites and Mulekites) in covenant loyalty to God before King Benjamin's death; to call a wealthy, proud church to repentance; and to extend a final warning voice to the capital city before divine judgment.",
    "context": "The political, judicial, spiritual, and economic capital of the Nephite republic, located on the west bank of River Sidon. Following its fiery destruction during the AD 34 crucifixion upheavals (3 Nephi 8:8), the city was completely rebuilt in righteousness during 4 Nephi.",
    "howAccepted": "Deeply moving national revival under King Benjamin: the entire multitude fell to the earth, crying for mercy through Christ, and reported having 'no more disposition to do evil, but to do good continually' (Mosiah 5:2). Under Alma, hundreds entered into baptismal covenants. In Helaman's day, wicked factions shot arrows and cast stones at Samuel upon the wall, but believers believed on his words and went forth to be baptized by Nephi (Helaman 16:1–3).",
    "passages": [
      "Omni 1:12–19",
      "Mosiah 1–5",
      "Alma 2:15–38",
      "Alma 5:1–62",
      "Helaman 5:16–19",
      "Helaman 7–9",
      "Helaman 13–16",
      "3 Nephi 8:8",
      "4 Nephi 1:8"
    ]
  },
  "land_of_zarahemla": {
    "id": "land_of_zarahemla",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 124 BC – AD 30",
    "teacher": "King Benjamin, King Mosiah II, Alma the Younger, Helaman, Nephi and Lehi (sons of Helaman)",
    "audience": "The citizens, villages, and church congregations throughout the greater Sidon basin",
    "whatWasTaught": "The foundation of constitutional liberty and equal rights under the law (Mosiah 29); the establishment of local churches and baptism of repentant souls (Alma 4; 6); keeping the commandments of God to prosper in the land; and the miraculous conversion of 8,000 Lamanites when Nephi and Lehi preached with divine power throughout the land (Helaman 5:16–19).",
    "whyTaught": "To maintain national righteousness, preserve the republic from internal king-men tyrants, and convert former enemies to the gospel of peace.",
    "context": "The central territory of the Nephite nation, encompassing the Sidon valley and surrounding agrarian settlements, bordered on the south by the narrow strip of wilderness.",
    "howAccepted": "Alternated between periods of profound spiritual prosperity and tragic pride. During the mission of Nephi and Lehi in Helaman 5, the Lamanites yielded up their weapons and surrendered lands back to the Nephites in peace.",
    "passages": [
      "Mosiah 29:1–44",
      "Alma 4:1–20",
      "Alma 6:1–8",
      "Helaman 5:16–19",
      "Helaman 11:20–26"
    ]
  },
  "river_sidon": {
    "id": "river_sidon",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 86 BC (Alma the Younger's Baptisms)",
    "teacher": "Alma the Younger (Ordaining Priests & Baptizing)",
    "audience": "Repentant citizens of Zarahemla coming forth to enter the covenant of baptism",
    "whatWasTaught": "The covenant of baptism for the remission of sins; taking upon oneself the name of Christ; establishing the church and ordaining priests and elders to watch over the flock of God (Alma 4:4). Beyond this recorded baptismal ministry, River Sidon is recorded in scripture as the strategic watercourse where major battles occurred: the defeat of Amlici (Alma 2:15–35) and the encirclement and surrender of Zerahemnah's Lamanite-Zoramite host (Alma 43:32–54; 44:1–20).",
    "whyTaught": "To cleanse the church and establish covenant order along the principal river of the promised land.",
    "context": "The primary river of the Book of Mormon, flowing northward through the Land of Zarahemla to the northern sea. The river banks served both as baptismal waters and decisive military battlegrounds.",
    "howAccepted": "Large numbers of believers were baptized in the waters of Sidon, uniting with the church of God. In military encounters, the river witnessed the total defeat and covenant surrender of invading enemies.",
    "passages": [
      "Alma 2:15–35",
      "Alma 4:4",
      "Alma 16:6–7",
      "Alma 43:31–54",
      "Alma 44:1–20"
    ]
  },
  "valley_of_gideon": {
    "id": "valley_of_gideon",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 83 BC (Alma the Younger's Preaching Tour)",
    "teacher": "Alma the Younger",
    "audience": "The faithful citizens and church members of the City of Gideon",
    "whatWasTaught": "One of the most sublime Christological discourses in scripture: the mortal condescension and Infinite Atonement of Jesus Christ. Alma testified that the Son of God would be born of Mary at Jerusalem, and would 'go forth, suffering pains and afflictions and temptations of every kind... that He may know according to the flesh how to succor His people according to their infirmities' (Alma 7:11–13). Taught the path of personal holiness: being temperate, keeping the commandments, and walking blameless before God.",
    "whyTaught": "To strengthen and comfort an already faithful congregation during Alma's general tour to declare the word of God throughout all Nephite lands.",
    "context": "A fertile valley situated east of River Sidon, named after the venerable patriot Gideon who stood against King Noah and Nehor.",
    "howAccepted": "Exemplary spiritual receptivity: Alma commended the people of Gideon, stating he had great joy because they were established in the way of righteousness and possessed greater faith than those in Zarahemla. Later, when Korihor the anti-Christ entered Gideon, the people showed spiritual maturity, refused to debate him, bound him, and sent him to the high priest (Alma 30:21–29).",
    "passages": [
      "Mosiah 19:1–8",
      "Alma 1:7–15",
      "Alma 6:7–8",
      "Alma 7:1–27",
      "Alma 30:21–29",
      "Alma 61–62"
    ]
  },
  "minon": {
    "id": "minon",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Military Crisis c. 87 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military & Historical Record Only)",
    "audience": "N/A — No Preaching or Sermons Recorded at this Site",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the Land or City of Minon. Scripture mentions Minon strictly as an agrarian settlement in the borders of the south wilderness above Zarahemla where Nephite scouts (Zeram, Amnor, Manti, and Limher) discovered that the fleeing Amlicite rebels had joined a massive Lamanite invading army, slaughtering Nephite inhabitants and pillaging flocks (Alma 2:21–25).",
    "whyTaught": "N/A — Preserved by Mormon in Alma 2 as an urgent military reconnaissance account explaining how Alma learned of the imminent invasion of Zarahemla.",
    "context": "An agricultural land situated south of Zarahemla on the route toward the Land of Nephi, bordering the southern wilderness.",
    "howAccepted": "Since no gospel preaching took place at Minon, there was no reception of doctrine recorded. Historically, the inhabitants of Minon were forced to flee before the combined Lamanite-Amlicite armies toward Zarahemla, prompting Alma to mobilize the Nephite army to intercept the invaders at River Sidon (Alma 2:24–27).",
    "passages": [
      "Alma 2:24–25"
    ]
  },
  "melek": {
    "id": "melek",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 82 BC (Alma the Younger's Western Mission)",
    "teacher": "Alma the Younger",
    "audience": "The inhabitants throughout all the borders of the Land of Melek (west of Sidon)",
    "whatWasTaught": "The holy order of God; repentance from sin; sanctification through the Holy Ghost; preparing to meet the Redeemer; and the covenant of baptism (Alma 8:3–5).",
    "whyTaught": "Following his tour in Gideon, Alma traveled west over the wilderness to bring the blessings of the gospel and establish the church on the western borders of the republic.",
    "context": "A fertile western region west of River Sidon and the western wilderness, noted for its hospitality and righteousness. Later served as a safe haven where the People of Ammon settled when war threatened Jershon (Alma 35:13).",
    "howAccepted": "Universal, joyful acceptance: people came to Alma from all borders of the land, believed his words, repented, and were baptized in large numbers throughout the entire region (Alma 8:4–5).",
    "passages": [
      "Alma 8:3–5",
      "Alma 31:6",
      "Alma 35:13–14"
    ]
  },
  "ammonihah": {
    "id": "ammonihah",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 82 BC (Mission of Alma & Amulek)",
    "teacher": "Alma the Younger & Amulek",
    "audience": "The Chief Judges, Lawyers (including Zeezrom), Followers of the Order of Nehor, and Inhabitants of Ammonihah",
    "whatWasTaught": "Universal bodily resurrection of both the just and unjust; the final judgment where thoughts, words, and works will condemn the unrepentant (Alma 12); the holy order of the Melchizedek Priesthood and ordination of high priests to look forward to the Son of God (Alma 13); exposing legal dishonesty, bribery, and priestcraft (Alma 10–11); and repentance before divine destruction fell upon them.",
    "whyTaught": "An angel commanded Alma to return to Ammonihah to extend a solemn final prophetic warning to a sophisticated, prideful city corrupted by the apostate order of Nehor.",
    "context": "A prosperous, heavily fortified commercial stronghold in the western wilderness dominated by apostate lawyers and judges.",
    "howAccepted": "Violent rejection by the rulers, accompanied by tragic martyrdom: while Zeezrom was converted and repented in agony of soul, the wicked rulers burned believing women and children alive in fire while forcing Alma and Amulek to watch. The prophets were imprisoned, stripped, beaten, and starved until God collapsed the prison walls, killing the wicked rulers while the prophets walked out unhurt (Alma 14). Within a few months, a Lamanite army destroyed the entire city in a single day ('the Desolation of Nehors', Alma 16:1–11).",
    "passages": [
      "Alma 8:8–32",
      "Alma 9:1–34",
      "Alma 10–14",
      "Alma 15:1–19",
      "Alma 16:1–11"
    ]
  },
  "sidom": {
    "id": "sidom",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 82 BC (Post-Ammonihah Refuge & Healing)",
    "teacher": "Alma the Younger & Amulek",
    "audience": "Believing refugees driven out of Ammonihah, and Zeezrom lying sick with a burning fever",
    "whatWasTaught": "The miraculous healing power of faith in Jesus Christ; remission of sins for the truly repentant; organizing the church among displaced believers; and ordaining priests and teachers to minister to the saints (Alma 15:1–18).",
    "whyTaught": "To provide physical and spiritual sanctuary for the husbands and fathers whose wives and children had been martyred in Ammonihah, and to heal Zeezrom who was tormented by guilt.",
    "context": "A tranquil inland city northeast of Ammonihah that served as a sanctuary for cast-out believers.",
    "howAccepted": "Joyful revival and miraculous healing: when Alma asked Zeezrom, 'Believest thou in the power of Christ unto salvation?' and Zeezrom declared his faith, Alma took him by the hand and he leaped upon his feet whole. Zeezrom was immediately baptized, and a flourishing branch of the church was established (Alma 15:11–18).",
    "passages": [
      "Alma 15:1–18"
    ]
  },
  "city_of_sidom": {
    "id": "city_of_sidom",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 82 BC (Post-Ammonihah Refuge & Healing)",
    "teacher": "Alma the Younger & Amulek",
    "audience": "Believing refugees driven out of Ammonihah, and Zeezrom lying sick with a burning fever",
    "whatWasTaught": "The miraculous healing power of faith in Jesus Christ; remission of sins for the truly repentant; organizing the church among displaced believers; and ordaining priests and teachers to minister to the saints (Alma 15:1–18).",
    "whyTaught": "To provide physical and spiritual sanctuary for the husbands and fathers whose wives and children had been martyred in Ammonihah, and to heal Zeezrom who was tormented by guilt.",
    "context": "A tranquil inland city northeast of Ammonihah that served as a sanctuary for cast-out believers.",
    "howAccepted": "Joyful revival and miraculous healing: when Alma asked Zeezrom, 'Believest thou in the power of Christ unto salvation?' and Zeezrom declared his faith, Alma took him by the hand and he leaped upon his feet whole. Zeezrom was immediately baptized, and a flourishing branch of the church was established (Alma 15:11–18).",
    "passages": [
      "Alma 15:1–18"
    ]
  },
  "city_of_noah": {
    "id": "city_of_noah",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Military Siege c. 72 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military & Historical Record Only)",
    "audience": "N/A — No Preaching or Sermons Recorded at this Fortress",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal discourses at the City of Noah. Scripture records Noah strictly as a western defensive fortress fortified by Captain Moroni with immense earthen ramparts, timber pickets, and deep surrounding ditches, garrisoned by Chief Captain Lehi (Alma 49:12–25). When Lamanite armies under Amalickiah's chief captains attacked expecting an easy victory, they were trapped at the narrow gate and slaughtered, losing more than a thousand men including all their chief captains, while the Nephites suffered only about fifty wounded and none slain.",
    "whyTaught": "N/A — Recorded by Mormon in Alma 49 to demonstrate how Captain Moroni's inspired fortifications and righteous leadership preserved the lives of the Nephites against overwhelming enemy odds.",
    "context": "A western city situated between Ammonihah and Zarahemla, originally weak but transformed into an impregnable fortress by Captain Moroni.",
    "howAccepted": "Since no gospel preaching took place at Noah, no doctrinal reception occurred. Historically, the Lamanites attacked the fortified gateway with desperate fury, were completely defeated, and retreated in utter humiliation into the wilderness (Alma 49:21–25).",
    "passages": [
      "Alma 49:12–25"
    ]
  },
  "hermounts": {
    "id": "hermounts",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Battlefield Wilderness c. 87 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military & Historical Record Only)",
    "audience": "N/A — No Inhabitants or Preaching Recorded; Wilderness of Beasts",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal discourses in the Hermounts Wilderness. Scripture mentions Hermounts solely as the desolate wilderness north and west of Zarahemla infested with ravenous wild beasts, where the fleeing remnants of the defeated Lamanite and Amlicite armies died of wounds and hunger, their bones being scattered on the earth and their flesh devoured by beasts of the wilderness and vultures (Alma 2:36–38).",
    "whyTaught": "N/A — Preserved by Mormon in Alma 2:37–38 as a grim historical fulfillment of divine warnings regarding the catastrophic consequences of armed rebellion and apostasy.",
    "context": "An uninhabited, rugged wilderness tract north and west of the Sidon basin.",
    "howAccepted": "Since no gospel preaching was delivered in Hermounts, there was no reception of doctrine. Historically, the invading soldiers perished in its wilderness without burial.",
    "passages": [
      "Alma 2:36–38"
    ]
  },
  "hill_amnihu": {
    "id": "hill_amnihu",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Amlicite Civil War Battle c. 87 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military & Historical Record Only)",
    "audience": "N/A — Battlefield Site; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or religious instruction at Hill Amnihu. Scripture records Hill Amnihu exclusively as the elevated ground east of River Sidon where Alma the Younger and the Nephite army engaged Amlici and his dissident army in fierce hand-to-hand combat (Alma 2:15–20). Alma prayed to God for strength to preserve his people, and in personal combat with Amlici on the hill, Alma slew Amlici with the sword.",
    "whyTaught": "N/A — Preserved by Mormon in Alma 2 to record the defeat of the first major internal insurrection against the newly established Reign of Judges.",
    "context": "A prominent hill located east of River Sidon, near the capital city of Zarahemla.",
    "howAccepted": "Since no gospel preaching took place at Hill Amnihu, no reception of doctrine occurred. Historically, the Nephite forces prevailed through prayer, slaying 12,532 Amlicites while losing 6,562 Nephites, driving the surviving dissidents into the southern wilderness (Alma 2:19–20).",
    "passages": [
      "Alma 2:15–20"
    ]
  },
  "hill_manti": {
    "id": "hill_manti",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Judicial Execution c. 91 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Judicial Record Only)",
    "audience": "N/A — Execution Site; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at Hill Manti near Zarahemla. Scripture records this hill solely as the place of execution where the apostate murderer Nehor was taken by the order of Chief Judge Alma. Atop Hill Manti, Nehor was compelled to confess between heaven and earth that what he had taught the people was contrary to the word of God, after which he suffered an ignominious death for introducing priestcraft and enforcing it with the sword (Alma 1:15).",
    "whyTaught": "N/A — Recorded by Mormon in Alma 1:15 to document the legal execution of the first man condemned for priestcraft and murder under the Reign of Judges.",
    "context": "A prominent hill located near Zarahemla, distinct from the distant southern City of Manti.",
    "howAccepted": "Since no gospel preaching occurred on Hill Manti, no reception of doctrine took place. Nehor confessed his falsehood under judicial duress and was executed according to the law.",
    "passages": [
      "Alma 1:15"
    ]
  },
  "bountiful": {
    "id": "bountiful",
    "hasRecordedTeachings": true,
    "whenTaught": "AD 34 (Personal Ministry of the Resurrected Jesus Christ)",
    "teacher": "The Resurrected Lord Jesus Christ & The Twelve Nephite Disciples",
    "audience": "A gathered multitude of 2,500 righteous Nephite and Lamanite survivors assembled round about the Temple in Bountiful, including men, women, and little children",
    "whatWasTaught": "The supreme doctrinal pinnacle of the Book of Mormon: (1) Chapter 11: The physical reality of the bodily Resurrection; personal invitation to feel the prints of the nails and the wound in His side; the Doctrine of Christ (faith, repentance, baptism, and the Holy Ghost); (2) Chapters 12–14: The Sermon at the Temple (Beatitudes, higher law, celestial discipleship, the Lord's Prayer, and building on the rock); (3) Chapters 15–16: The fulfillment of the Law of Moses; identifying the Nephites and the lost tribes as the 'Other Sheep' (John 10:16); (4) Chapter 17: Overflowing compassion; healing every afflicted soul; blessing little children one by one as angels ministered in fire; (5) Chapter 18: Institution of the Sacrament of bread and wine; commanding disciples to watch and pray always and pray in families in His name; (6) Chapter 19: Baptism of the Twelve Disciples; (7) Chapters 20–22: The Father's covenant with Israel and the New Jerusalem; (8) Chapters 23–25: Diligent search of Isaiah, correcting historical records, Malachi's prophecies of Elijah; (9) Chapters 27–28: Declaring the Name of His Church ('called in my name'); defining the Gospel; granting the Three Nephites their holy request to tarry on earth.",
    "whyTaught": "Directly fulfilling the Book of Mormon's central sacred purpose: convincing all Jew and Gentile that Jesus is the Christ, the Eternal God, and restoring the fulness of His gospel to the House of Israel.",
    "context": "The fertile northern sanctuary situated just south of the Narrow Neck. The righteous survivors who were spared during the crucifixion destructions (3 Nephi 10:12) gathered in reverence around the Temple in Bountiful.",
    "howAccepted": "Total, weeping adoration: each of the 2,500 individuals went forth one by one, touched His wounds, bathed His feet with tears, and cried 'Hosanna! Blessed be the name of the Most High God!' The Twelve Disciples traversed the entire land baptizing, establishing two centuries of unbroken Zion peace (4 Nephi 1).",
    "passages": [
      "3 Nephi 11:1–17",
      "3 Nephi 11:31–41",
      "3 Nephi 12–14",
      "3 Nephi 15–16",
      "3 Nephi 17:1–25",
      "3 Nephi 18:1–39",
      "3 Nephi 19–26",
      "3 Nephi 27:1–22",
      "3 Nephi 28:1–15",
      "4 Nephi 1:1–18"
    ]
  },
  "land_bountiful": {
    "id": "land_bountiful",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 72 BC – AD 35",
    "teacher": "Captain Moroni, Teancum, The Resurrected Lord Jesus Christ, and The Twelve Disciples",
    "audience": "Garrisons defending the northern frontier, and the gathered multitude at the Bountiful Temple",
    "whatWasTaught": "Vigilant defense of national liberty; righteous fortification; and the complete gospel ministry of Jesus Christ delivered at the Temple in Bountiful (3 Nephi 11–28).",
    "whyTaught": "To preserve the continental choke point from Lamanite encroachment, and to provide the sacred sanctuary where the Savior personally appeared to the ancient Americans.",
    "context": "The fertile northern territory extending from the east sea to the west sea, directly south of the Land of Desolation and the Narrow Neck of Land.",
    "howAccepted": "Righteous Nephite commanders held the line against Amalickiah; upon the Savior's post-resurrection appearance, the inhabitants entered into covenants that yielded 200 years of peace.",
    "passages": [
      "Alma 22:29–33",
      "Alma 52:9–18",
      "Alma 53:3–5",
      "3 Nephi 11–28",
      "4 Nephi 1:1–18"
    ]
  },
  "jershon": {
    "id": "jershon",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 74 BC (Settlement of the People of Ammon)",
    "teacher": "Alma the Younger, Ammon, and Captain Moroni",
    "audience": "The Anti-Nephi-Lehies (People of Ammon) and Nephite Guard Garrisons",
    "whatWasTaught": "Covenant preservation; the sacredness of human life; total remission of sins through Christ; sustaining covenant pacifists through righteous military defense; and Christian charity (Alma 27:21–27).",
    "whyTaught": "To provide a permanent inheritance of land to the converted Lamanites who had covenanted never to take up weapons of war again, placing them under the military shield of the Nephite army.",
    "context": "A fertile coastal territory situated on the East Sea shore south of the Land Bountiful, isolated from traditional Lamanite invasion corridors.",
    "howAccepted": "Exemplary covenant devotion: the People of Ammon were distinguished for their zeal toward God and never fell away. They generously shared their substance to support the Nephite armies who defended them (Alma 27:26–27).",
    "passages": [
      "Alma 27:21–27",
      "Alma 28:1–3",
      "Alma 35:14",
      "Alma 43:11–13"
    ]
  },
  "mulek": {
    "id": "mulek",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Military Campaigns c. 67–64 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military & Historical Record Only)",
    "audience": "N/A — No Preaching or Sermons Recorded at this Fortress",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Mulek. Scripture records Mulek exclusively as a heavily fortified Nephite coastal stronghold captured by Amalickiah (Alma 51:26) and later recaptured by Captain Moroni, Teancum, and Lehi through a coordinated decoy operation (Alma 52:16–40). The city was garrisoned by Lamanites commanded by Jacob the Zoramite, an apostate captain possessing an 'unyielding and ferocious spirit' (Alma 52:33). Jacob was lured out to pursue Teancum's decoy force toward Bountiful, allowing Moroni to capture the fortress and slay Jacob in battle.",
    "whyTaught": "N/A — Preserved by Mormon in Alma 51–52 as an account of righteous Nephite military strategy, the tragic cost of apostasy, and the liberation of captive lands along the East Sea corridor.",
    "context": "A heavily fortified coastal redoubt on the East Sea shore south of Bountiful, forming a vital anchor in the string of eastern defense cities.",
    "howAccepted": "Since no gospel preaching took place at Mulek, no doctrinal response or spiritual reception occurred. Historically, the Lamanite garrison under Jacob refused to leave their fortress until deceived by Teancum's decoy force; Jacob was slain in battle, and the surviving Lamanite soldiers surrendered their weapons and were put to work fortifying the City of Bountiful (Alma 52:31–40; 53:3–5).",
    "passages": [
      "Alma 51:26",
      "Alma 52:16–40",
      "Alma 53:3–5"
    ]
  },
  "gid": {
    "id": "gid",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Prisoner Liberation c. 63 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military & Historical Record Only)",
    "audience": "N/A — No Preaching or Sermons Recorded at this Fortress",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or religious instruction at the City of Gid. Scripture records Gid exclusively as an East Sea coastal city captured by Amalickiah (Alma 51:26) and used by the Lamanites to hold Nephite prisoners of war (Alma 55:7–24). Captain Moroni refused an unequal prisoner exchange with Ammoron and instead liberated Gid using a clever wine stratagem: a Nephite soldier named Laman (a descendant of Laman) delivered strong wine to the Lamanite guards, who became intoxicated and fell asleep. Moroni quietly armed the Nephite prisoners inside the city and surrounded the guards, taking the fortress and all guards captive without shedding a drop of blood.",
    "whyTaught": "N/A — Preserved by Mormon in Alma 55 to record Captain Moroni's tactical brilliance, his strict adherence to justice, and the bloodless liberation of captive Nephite families.",
    "context": "A fortified city on the East Sea coast situated between Omner and Mulek.",
    "howAccepted": "Since no gospel preaching was delivered at Gid, there was no reception of doctrine recorded. Historically, the drunken Lamanite guards awoke to find themselves surrounded by armed Nephites; they surrendered peacefully and were put to labor strengthening the fortifications of Gid (Alma 55:21–26).",
    "passages": [
      "Alma 51:26",
      "Alma 55:7–26"
    ]
  },
  "omner": {
    "id": "omner",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (East Coast Campaigns c. 67–61 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military & Historical Record Only)",
    "audience": "N/A — No Preaching or Sermons Recorded at this City",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or religious instruction at the City of Omner. Scripture mentions Omner strictly as one of the fortified Nephite cities along the East Sea seashore captured by Amalickiah during his eastern campaign in 67 BC (Alma 51:26), and later recaptured by the Nephite armies under Captain Moroni and Lehi (Alma 53:2; 62:32).",
    "whyTaught": "N/A — Preserved by Mormon in Alma 51:26 to document the geographical progression of Amalickiah's coastal invasion corridor.",
    "context": "A fortified coastal settlement on the eastern seashore between Morianton and Gid.",
    "howAccepted": "Since no gospel preaching was delivered at Omner, no doctrinal response occurred. Historically, the city fell to Amalickiah's surprise offensive and was later liberated by Nephite forces.",
    "passages": [
      "Alma 51:26",
      "Alma 53:2",
      "Alma 62:32"
    ]
  },
  "morianton": {
    "id": "morianton",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Border Dispute & Rebellion c. 67 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military & Historical Record Only)",
    "audience": "N/A — No Preaching or Sermons Recorded at this City",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or religious instruction at the Land or City of Morianton. Scripture records Morianton solely in connection with an aggressive boundary dispute and armed insurrection led by a violent leader named Morianton against the neighboring City of Lehi (Alma 50:25–36). Morianton beat his maidservant, who fled to Captain Moroni and revealed Morianton's plan to lead his people into the Land Northward. Fearing this would create a two-front war, Moroni dispatched Teancum, who intercepted the rebels at the Narrow Pass, slew Morianton in battle, and brought the people back under covenant of peace.",
    "whyTaught": "N/A — Preserved by Mormon in Alma 50 to illustrate how internal factionalism and unchecked anger threaten national survival during times of external crisis.",
    "context": "A settlement on the East Sea coast bordering the Land of Lehi to the south.",
    "howAccepted": "Since no gospel preaching took place at Morianton, no doctrinal reception occurred. Historically, the followers of Morianton surrendered to Teancum after their leader was slain, entered into a covenant of peace, and were restored to their lands (Alma 50:35–36).",
    "passages": [
      "Alma 50:25–36",
      "Alma 51:26",
      "Alma 55:33"
    ]
  },
  "city_of_lehi": {
    "id": "city_of_lehi",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Military Fortification c. 72–61 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military & Historical Record Only)",
    "audience": "N/A — No Preaching or Sermons Recorded at this Fortress",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Lehi. Scripture records this city exclusively as a fortified Nephite settlement founded in the eastern borders in 72 BC during Captain Moroni's comprehensive fortification program (Alma 50:15). It was defended against Morianton's border aggression (Alma 50:25–28), captured by Amalickiah in 67 BC (Alma 51:26), and eventually retaken by Captain Moroni and Lehi (Alma 62:30–34).",
    "whyTaught": "N/A — Recorded by Mormon in Alma 50–51 and 62 to trace the construction and eventual liberation of eastern coastal defense fortifications.",
    "context": "An eastern coastal city situated north of Nephihah and south of Morianton near the seashore.",
    "howAccepted": "Since no gospel preaching occurred at the City of Lehi, no reception of doctrine took place. Historically, the inhabitants appealed to Captain Moroni for defense against Morianton and later endured Lamanite occupation before liberation.",
    "passages": [
      "Alma 50:15",
      "Alma 50:25–28",
      "Alma 51:26",
      "Alma 62:30–34"
    ]
  },
  "nephihah": {
    "id": "nephihah",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Military Campaigns c. 72–61 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military & Historical Record Only)",
    "audience": "N/A — No Preaching or Sermons Recorded at this Fortress",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Nephihah. Scripture records Nephihah exclusively as a major inland fortress founded in 72 BC between the City of Moroni and City of Aaron and named after the Second Chief Judge (Alma 50:14). It fell to Lamanite armies in 67 BC due to government neglect in Zarahemla (Alma 51:26; 59:5–11), and was recaptured in 61 BC by Captain Moroni and Chief Judge Pahoran in a brilliant night assault where Nephite soldiers climbed over the walls with cords and ladders while the Lamanites slept (Alma 62:18–26).",
    "whyTaught": "N/A — Preserved by Mormon in Alma 50, 59, and 62 to emphasize the critical necessity of timely government support for frontline defenders and the inspired tactics of Captain Moroni.",
    "context": "A central inland fortress positioned between the eastern coastal cities and the greater Land of Zarahemla.",
    "howAccepted": "Since no gospel preaching took place at Nephihah, there was no reception of doctrine recorded. Historically, Moroni and Pahoran liberated the city without significant casualties; over 4,000 Lamanite prisoners entered into a covenant of peace and were sent to dwell with the People of Ammon (Alma 62:27–29).",
    "passages": [
      "Alma 50:14",
      "Alma 51:26",
      "Alma 59:5–11",
      "Alma 62:18–29"
    ]
  },
  "city_of_moroni": {
    "id": "city_of_moroni",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Frontier Fortress & AD 34 Cataclysm)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military & Cataclysm Record Only)",
    "audience": "N/A — Garrison Defenders; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Moroni. Scripture records Moroni strictly as a frontline military fortress constructed in 72 BC directly on the east seashore near the southern wilderness line to guard against southern Lamanite invasions (Alma 50:13–15). It was captured by Amalickiah (Alma 51:23–26) and retaken by Captain Moroni (Alma 62:32–34). Centuries later, during the AD 34 crucifixion cataclysm, the entire city was completely submerged into the depths of the sea and covered by water because of the wickedness of its inhabitants (3 Nephi 8:9; 9:4).",
    "whyTaught": "N/A — Preserved by Mormon to document Moroni's strategic frontier defense works, and later to record the solemn fulfillment of prophecy regarding the destruction of wicked cities at Christ's death.",
    "context": "A coastal fortress built directly on the southeastern seashore near the southern border line.",
    "howAccepted": "Since no gospel preaching was delivered at the City of Moroni, no doctrinal reception occurred. Historically, the fortress was contested through multiple sieges, and ultimately sank into the depths of the sea during the AD 34 cataclysm.",
    "passages": [
      "Alma 50:13–15",
      "Alma 51:22–27",
      "Alma 62:32–34",
      "3 Nephi 8:9",
      "3 Nephi 9:4"
    ]
  },
  "aaron_coastal": {
    "id": "aaron_coastal",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Fortification c. 72 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military & Historical Record Only)",
    "audience": "N/A — No Preaching or Sermons Recorded at this Site",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the coastal City of Aaron. Scripture mentions this city exclusively as one of the defensive settlements established during Captain Moroni's fortification campaign in 72 BC (Alma 50:14) and briefly occupied during Amalickiah's coastal march (Alma 51:26).",
    "whyTaught": "N/A — Recorded by Mormon in Alma 50:14 to document the sequence of fortifications constructed along the eastern frontier.",
    "context": "An eastern settlement located near the seashore between Moroni and Nephihah.",
    "howAccepted": "Since no gospel preaching was delivered here, no doctrinal reception took place. Historically, it served as part of the eastern defensive chain.",
    "passages": [
      "Alma 50:14",
      "Alma 51:26"
    ]
  },
  "aaron_inland": {
    "id": "aaron_inland",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Fortification Program c. 72 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military & Historical Record Only)",
    "audience": "N/A — No Preaching or Sermons Recorded at this Settlement",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the inland Land and City of Aaron. Scripture records Aaron solely as one of the defensive settlements established during Captain Moroni's comprehensive fortification campaign around 72 BC, situated near the borders of Nephihah (Alma 50:14).",
    "whyTaught": "N/A — Recorded by Mormon in Alma 50:14 to document the strategic defensive network established to secure the eastern approaches to Zarahemla.",
    "context": "An inland settlement situated near Nephihah and the eastern wilderness.",
    "howAccepted": "Since no gospel preaching took place here, no reception of doctrine occurred. Historically, it served as a secure inland settlement supporting Nephite defensive lines.",
    "passages": [
      "Alma 50:14"
    ]
  },
  "lehi_nephi": {
    "id": "lehi_nephi",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 580 BC (Nephi), c. 540 BC (Jacob), c. 148 BC (Abinadi), c. 90 BC (Aaron)",
    "teacher": "Nephi, Jacob, the Prophet Abinadi, & Aaron (Son of King Mosiah)",
    "audience": "The early Nephite colony; King Noah and his royal court of corrupt priests; and the Great King of all the Lamanites",
    "whatWasTaught": "Multiple foundational scriptural discourses: (1) Nephi and Jacob: living after the manner of happiness, constructing temples modeled after Solomon's, and Jacob's great sermon against pride, grosser crimes, and unchastity ('the Lord delighteth in the chastity of women', Jacob 2–3); (2) Abinadi's courageous confrontation before King Noah: the Ten Commandments, Isaiah 53 (the Suffering Servant), that salvation does not come by the law of Moses alone but through the redemption of God in Christ, and the resurrection of all who believe (Mosiah 12–16); (3) Aaron's mission to King Lamoni's father: the Creation, the Fall of Adam, and the Plan of Redemption through the coming Messiah (Alma 22:1–18).",
    "whyTaught": "To preserve covenant identity among the early Nephites, call an apostate monarch to repentance before divine destruction, and convert the supreme sovereign over all Lamanite lands.",
    "context": "The original southern highland capital established by Nephi around 580 BC, featuring an elevated temple, royal palaces, and fortified towers, later reclaimed by Zeniff's colony and ruled by King Noah.",
    "howAccepted": "Divided across centuries: early Nephites lived in peace; King Noah hardened his heart and sentenced Abinadi to death by fire, though his witness converted Alma the Elder; decades later, Lamoni's father was so deeply moved by Aaron's witness that he fell prostrate crying, 'I will give up all my sins to know thee,' resulting in a nationwide decree of religious freedom (Alma 22:18–27).",
    "passages": [
      "2 Nephi 5:8–16",
      "Jacob 2–3",
      "Mosiah 9:6",
      "Mosiah 11–17",
      "Mosiah 22:11–13",
      "Alma 22:1–26"
    ]
  },
  "waters_of_mormon": {
    "id": "waters_of_mormon",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 147 BC (Founding of the Church of Christ)",
    "teacher": "Alma the Elder (Former Priest of King Noah)",
    "audience": "A gathering of repentant believers fleeing King Noah's royal surveillance in the forest thicket",
    "whatWasTaught": "The foundational covenant of baptism and pure Christian community: 'to come into the fold of God, and to be called His people, and are willing to bear one another's burdens, that they may be light; yea, and are willing to mourn with those that mourn; yea, and comfort those that stand in need of comfort, and to stand as witnesses of God at all times and in all things, and in all places' (Mosiah 18:8–10). Preached faith in Christ, repentance, observing the Sabbath, having no contention, and sharing temporal goods according to need.",
    "whyTaught": "To establish the true Church of Jesus Christ in hiding following Abinadi's martyrdom, restoring pure ordinances away from the corruption of Noah's court.",
    "context": "A secluded wilderness sanctuary near the borders of the Land of Nephi, blessed with a pure fountain of water and a dense forest thicket that shielded believers from King Noah's searching soldiers.",
    "howAccepted": "Profound, weeping gratitude: two hundred and four repentant souls entered the waters of baptism, beginning with Helam and Alma. The believers clapped their hands for joy and exclaimed: 'This is the desire of our hearts!' (Mosiah 18:11–17).",
    "passages": [
      "Mosiah 18:1–35",
      "Mosiah 26:15",
      "Alma 5:3",
      "3 Nephi 5:12"
    ]
  },
  "forest_of_mormon": {
    "id": "forest_of_mormon",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 147 BC (Assemblies of the Church in Hiding)",
    "teacher": "Alma the Elder",
    "audience": "Repentant Nephite believers assembling secretly away from King Noah's guards",
    "whatWasTaught": "Living in holiness; having their hearts knit together in unity and love one towards another; observing the Sabbath day; and imparting of their substance to the poor and needy (Mosiah 18:21–29).",
    "whyTaught": "To nurture the newborn church in safety and mutual charity before King Noah discovered their gathering place.",
    "context": "The dense forest and thicket surrounding the Waters of Mormon, providing natural camouflage and peaceful shelter for sacred Christian worship.",
    "howAccepted": "The people walked uprightly before God, imparting to one another both temporally and spiritually according to their needs, walking in faith and unity.",
    "passages": [
      "Mosiah 18:5",
      "Mosiah 18:19–30"
    ]
  },
  "shilom": {
    "id": "shilom",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Colonial Agriculture c. 200–121 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Historical & Agrarian Record Only)",
    "audience": "N/A — No Preaching or Sermons Recorded at this Settlement",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the Land or City of Shilom. Scripture records Shilom strictly as an agricultural city adjoining Lehi-Nephi, ceded by King Laman to Zeniff's Nephite colony (Mosiah 9:6–8). King Noah later built lavish towers and palaces in Shilom using tax revenues (Mosiah 11:12–13), and the people farmed its lands under heavy Lamanite tribute until King Limhi's people escaped to Zarahemla (Mosiah 22).",
    "whyTaught": "N/A — Recorded by Zeniff and Mormon to trace the agrarian and political fortunes of Zeniff's overzealous colony in the Land of Nephi.",
    "context": "An agricultural land and city situated immediately adjoining the City of Lehi-Nephi to the north.",
    "howAccepted": "Since no gospel preaching took place at Shilom, no doctrinal reception occurred. Historically, the inhabitants endured periodic Lamanite raids, agricultural taxation, and military oppression.",
    "passages": [
      "Mosiah 7:21",
      "Mosiah 9:6–8",
      "Mosiah 10:8",
      "Mosiah 11:12–13",
      "Mosiah 22:11"
    ]
  },
  "shemlon": {
    "id": "shemlon",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Historical Kidnapping Incident c. 145 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Historical Record Only)",
    "audience": "N/A — Lamanite Gathering Place; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or religious instruction in the Land of Shemlon. Scripture records Shemlon strictly as a border territory where the daughters of the Lamanites assembled to sing, dance, and make merry, and where the 24 apostate priests of Noah, hiding in the wilderness, kidnapped twenty-four young Lamanite maidens and carried them into the wilderness (Mosiah 20:1–5). This abduction provoked the Lamanite king to launch an enraged military assault against King Limhi's innocent people, mistakenly believing they were responsible.",
    "whyTaught": "N/A — Preserved by Mormon in Mosiah 20 to record the cause of the near-fatal war between the Lamanites and Limhi's people, resolved only when Limhi explained the kidnapping by Noah's priests.",
    "context": "A border region in the Land of Nephi adjoining the territory occupied by Zeniff's people.",
    "howAccepted": "Since no gospel preaching was delivered at Shemlon, there was no reception of doctrine recorded. Historically, the abduction triggered an armed invasion that brought Limhi's people under severe military subjugation.",
    "passages": [
      "Mosiah 10:7",
      "Mosiah 11:12",
      "Mosiah 20:1–5",
      "Mosiah 24:1"
    ]
  },
  "helam": {
    "id": "helam",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 145–122 BC (Alma's Colony in Bondage)",
    "teacher": "Alma the Elder",
    "audience": "The 450 Faithful Covenant Keepers from the Waters of Mormon living under Lamanite and Amulonite oppression",
    "whatWasTaught": "Enduring affliction with patience; faith in God during severe temporal bondage; the power of silent prayer when forbidden on pain of death to pray aloud; trusting that the Lord visits His people in their afflictions and makes their burdens light; and walking in pure Christian brotherhood (Mosiah 23–24).",
    "whyTaught": "To sustain a peaceful Christian community suddenly subjugated by Amulon and a lost Lamanite army, placed under severe taskmasters and threatened with death for vocal prayer.",
    "context": "A beautiful, fertile inland city and valley settled by Alma's followers after an eight-day journey into the wilderness from the Waters of Mormon.",
    "howAccepted": "Unwavering faith and miraculous divine deliverance: the believers submitted cheerfully and with patience to all the will of the Lord. God eased their burdens so that they could not feel them upon their backs, caused a deep sleep to come upon the Lamanite guards, and led the entire community safely out of bondage to Zarahemla (Mosiah 24:13–25).",
    "passages": [
      "Mosiah 23:19–39",
      "Mosiah 24:1–25",
      "Mosiah 27:16"
    ]
  },
  "valley_of_alma": {
    "id": "valley_of_alma",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 122 BC (Thanksgiving Assembly upon Deliverance)",
    "teacher": "Alma the Elder",
    "audience": "The liberated colony of Nephite saints gathered in the valley after escaping Amulon's guards",
    "whatWasTaught": "Pouring out thanksgiving, praise, and adoration unto God for His miraculous deliverance from bondage; testifying that God alone had broken their bands and eased their burdens (Mosiah 24:20–22).",
    "whyTaught": "To consecrate their deliverance to the Lord and unite in solemn prayer before beginning their final twelve-day trek to Zarahemla.",
    "context": "A peaceful wilderness valley situated one day's journey north of the City of Helam.",
    "howAccepted": "Joyful, weeping gratitude: all the people lifted up their voices in thanks and praise, pitched their tents for the night, and departed peacefully under the guidance of the Lord into the wilderness.",
    "passages": [
      "Mosiah 24:20–22"
    ]
  },
  "land_of_amulon": {
    "id": "land_of_amulon",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Apostate Settlement c. 145–122 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Apostate Rule Only)",
    "audience": "N/A — Corrupt Priests and Subjugated Peoples; No Gospel Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction in the Land of Amulon. Scripture records this territory strictly as the wilderness sanctuary settled by Amulon and the corrupt, apostate priests of King Noah after abducting the Lamanite daughters at Shemlon (Mosiah 23:31–35). The Lamanite king appointed Amulon and his fellow priests as tributary rulers over the lands of Helam and Amulon, where they taught the Lamanites the language of Nephi but expressly forbade the teaching of God or the law of Moses (Mosiah 24:1–6).",
    "whyTaught": "N/A — Preserved by Mormon in Mosiah 23–24 to trace the origins of the tyrannical rule of Amulon over Alma's peaceful church in Helam.",
    "context": "A wilderness territory settled by the priests of Noah, situated between the Land of Nephi and the Land of Helam.",
    "howAccepted": "Since no gospel preaching took place in Amulon, no doctrinal reception occurred. Historically, the priests gained temporal influence, taught the Lamanites reading and writing for commercial gain, but maintained fierce apostasy against God.",
    "passages": [
      "Mosiah 23:31–39",
      "Mosiah 24:1–9",
      "Alma 24:1"
    ]
  },
  "mount_antipas": {
    "id": "mount_antipas",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Military Flattery & Murder c. 72 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Treasonous Political Record Only)",
    "audience": "N/A — Dissident Lamanite Host and Amalickiah's Army; No Gospel Preaching",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at Mount Antipas. Scripture records this mountain strictly as the place of arms (Onidah) in the Land of Nephi where Lehonti and the peaceful Lamanites encamped, refusing the Lamanite king's command to wage aggressive war against the Nephites (Alma 47:1–18). Amalickiah used deceptive diplomacy and false promises of joint command to lure Lehonti down the mount, then secretly had a servant administer poison 'by degrees' until Lehonti died, usurping total command of the army.",
    "whyTaught": "N/A — Recorded by Mormon in Alma 47 to expose the insidious methods of apostate traitors and to provide a powerful scriptural warning of how spiritual compromise and lowering one's standards leads to destruction 'by degrees.'",
    "context": "A prominent mountain and central military arsenal ('place of arms') in the Land of Nephi.",
    "howAccepted": "Since no gospel preaching was delivered at Mount Antipas, there was no reception of doctrine recorded. Historically, Lehonti yielded to repeated flatteries, compromised his position, was poisoned, and Amalickiah seized total command of the Lamanite army.",
    "passages": [
      "Alma 47:1–18"
    ]
  },
  "middoni": {
    "id": "middoni",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 90 BC (Imprisonment and Witness of Aaron & Companions)",
    "teacher": "Aaron, Muloki, Ammah, Ammon, and King Lamoni",
    "audience": "King Antiomno, Prison Guards, and Lamanite Inhabitants of Middoni",
    "whatWasTaught": "Testifying of the true God and His Son Jesus Christ even while bound in heavy cords and starved in a dark dungeon; divine justice, mercy, and freedom of conscience; and the power of brotherly love in Christ (Alma 20:2–30; 21:12–17).",
    "whyTaught": "To preach the gospel among hardened Lamanites, and through Ammon and Lamoni's intervention, to secure the miraculous release of Aaron and his fellow missionaries.",
    "context": "A fortified Lamanite city ruled by King Antiomno, situated deep in the southern Lamanite territories.",
    "howAccepted": "Initially violent rejection: the people cast Aaron, Muloki, and Ammah into prison, bound them, and starved them. However, when King Antiomno saw Ammon's supernatural strength and love for Lamoni, he was astonished, released the missionaries, clothed and fed them, and allowed the gospel to be preached freely in Middoni (Alma 20:28–30; 21:14–17).",
    "passages": [
      "Alma 20:2–30",
      "Alma 21:12–17",
      "Alma 23:10"
    ]
  },
  "ishmael": {
    "id": "ishmael",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 90 BC (Ammon's Mission to King Lamoni)",
    "teacher": "Ammon (Son of King Mosiah)",
    "audience": "King Lamoni, the Queen of the Lamanites, Royal Court Servants, and Gathered Inhabitants",
    "whatWasTaught": "The Creation of heaven and earth and all things; the Fall of Adam; the holy scriptures and words of the prophets; the Plan of Redemption through the coming of the Messiah; the universal love of God toward both Nephites and Lamanites; and the necessity of faith, repentance, and prayer (Alma 18:22–39; 19:1–36).",
    "whyTaught": "To win the trust of a hostile Lamanite monarch through humble physical service, dispelling centuries of ethnic hatred and opening an entire kingdom to the Gospel.",
    "context": "A prominent Lamanite territory in the Land Southward, named after the patriarch Ishmael.",
    "howAccepted": "Total, miraculous conversion: King Lamoni believed all Ammon's words, fell to the earth under the power of the Spirit as if dead, and beheld the Redeemer. The Queen, Lamoni, and many servants were converted; thousands of Lamanites laid down their arms, forming the faithful Anti-Nephi-Lehies who never fell away (Alma 19; 23).",
    "passages": [
      "Alma 17:19–25",
      "Alma 18:1–43",
      "Alma 19:1–36",
      "Alma 23:8–9"
    ]
  },
  "waters_of_sebus": {
    "id": "waters_of_sebus",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 90 BC (Defense of Flocks & Gospel Witness)",
    "teacher": "Ammon (Son of King Mosiah)",
    "audience": "Servants of King Lamoni, Marauding Bandits, and King Lamoni",
    "whatWasTaught": "Discipleship through servant leadership: encamping by the flocks, comforting frightened fellow servants ('be of good cheer and let us go in search of the flocks', Alma 17:31), and using divine power not for self-aggrandizement but to lead souls to Christ. Taught that God has all power and watches over His children (Alma 17:26–39; 18:12–21).",
    "whyTaught": "To defend the king's flocks from plundering cattle thieves who sought to scatter them, thereby preserving the lives of Lamoni's servants and winning the king's heart to hear the gospel.",
    "context": "A pastoral watering place in the Land of Ishmael where all the Lamanites drove their flocks to drink.",
    "howAccepted": "Astounded reverence: when the bandits attacked, Ammon cast stones with sling and slew their leader with the sword, severing the arms of every robber who lifted a club against him. The servants carried the severed arms to King Lamoni in awe, which shattered Lamoni's pride and opened his heart to hear Ammon's gospel sermon (Alma 17:39; 18:1–21).",
    "passages": [
      "Alma 17:26–39",
      "Alma 18:1–21"
    ]
  },
  "ani_anti": {
    "id": "ani_anti",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 90 BC (Mission of Muloki & Ammah)",
    "teacher": "Muloki, Ammah, and their Missionary Brethren",
    "audience": "The Lamanite Inhabitants of the Village of Ani-Anti",
    "whatWasTaught": "Repentance and faith on the coming Son of God; the Plan of Redemption; and turning away from dead traditions (Alma 21:11).",
    "whyTaught": "Following their expulsion from the City of Jerusalem, Muloki and Ammah traveled to Ani-Anti to preach the word of God to its inhabitants.",
    "context": "A Lamanite village situated near the City of Jerusalem in the southern lands.",
    "howAccepted": "Hardhearted rejection: the people of Ani-Anti proved stiffnecked and would not hear their words. The missionaries were cast out, and departing thence, came to Middoni where they were cast into prison (Alma 21:11–12).",
    "passages": [
      "Alma 21:11–12"
    ]
  },
  "city_of_jerusalem": {
    "id": "city_of_jerusalem",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 90 BC (Aaron's Synagogue Discourse)",
    "teacher": "Aaron (Son of King Mosiah)",
    "audience": "Amalekites, Amulonites, and Lamanites assembled in Synagogues after the Order of Nehor",
    "whatWasTaught": "The coming of the Son of God; redemption through His suffering and resurrection; and that salvation cannot come through the outward ceremonies of the law of Moses alone without Christ (Alma 21:4–9).",
    "whyTaught": "To carry the gospel into the great apostate stronghold built by Nephite dissenters who had allied with Lamanites to fight against God.",
    "context": "A great city built by Lamanites, Amalekites, and former priests of Noah near the Waters of Mormon, named after their ancient covenant home in Judea. Later submerged beneath waters during the AD 34 cataclysm (3 Nephi 9:7).",
    "howAccepted": "Fierce, contentious rejection: an Amalekite stood up and mocked Aaron, arguing that God would save all men regardless of repentance. The people became furious, refused to listen, and had Aaron and his companions cast into prison (Alma 21:5–10). Centuries later, the city was covered by water at Christ's death (3 Nephi 9:7).",
    "passages": [
      "Alma 21:1–11",
      "Alma 24:1",
      "3 Nephi 9:7"
    ]
  },
  "antionum": {
    "id": "antionum",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 74 BC (Alma's Zoramite Mission)",
    "teacher": "Alma the Younger, Amulek, Zeezrom, Shiblon, and Corianton",
    "audience": "The wealthy ruling class on the Rameumptom, and the impoverished cast-out laborers",
    "whatWasTaught": "True worship vs. ostentatious hypocrisy: that God is a spirit who dwells in the humble heart, not in proud synagogues; the gospel word as a seed that must be planted, nourished, and tested in the heart (Alma 32); prayer in all places (fields, closets, wilderness) rather than once a week on elevated stands (Alma 33); and redemption through Christ's infinite and eternal sacrifice (Alma 34).",
    "whyTaught": "To counter the apostate Zoramite religion founded by Zoram (Alma 31:1) and prevent the Zoramites from allying with the Lamanites to destroy Nephite liberty.",
    "context": "The Land of Antionum, east of Zarahemla across River Sidon, bordering the southern Lamanite wilderness; explicitly called 'the land of the Zoramites' in Alma 43:5.",
    "howAccepted": "A stark, tragic division: the wealthy elite drove the prophets out and cast all poor believers out of the land; the cast-out poor crossed over into Jershon, where they were lovingly received by the People of Ammon. The Zoramite rulers then allied with supreme commander Zerahemnah to invade the Nephites in Alma 43 (Alma 35:1–14; 43:5–8).",
    "passages": [
      "Alma 31:1–38",
      "Alma 32–34",
      "Alma 35:1–16",
      "Alma 43:5–8"
    ]
  },
  "hill_onidah": {
    "id": "hill_onidah",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 74 BC (Alma's Discourse on Faith)",
    "teacher": "Alma the Younger & Amulek",
    "audience": "The impoverished, cast-out working-class Zoramites who were excluded from the synagogues because of their coarse clothing",
    "whatWasTaught": "One of the most profound sermons on faith in all scripture: blessed are they who humble themselves without being compelled to be humble (Alma 32:13–16); defining faith not as a perfect knowledge, but as 'hope for things which are not seen, which are true' (Alma 32:21); comparing the word of God unto a seed planted in the heart; testing the seed as it begins to swell, sprout, and grow into the Tree of Life yielding fruit that is sweet above all that is sweet (Alma 32:26–43). Amulek followed, testifying of the Infinite and Eternal Atonement of Christ, and exhorting them to pray in their fields, houses, and closets, and not to procrastinate the day of their repentance (Alma 34:8–35).",
    "whyTaught": "To offer eternal spiritual hope, divine dignity, and redemption to the poor who had been rejected and cast out by their wealthy brethren.",
    "context": "A prominent hill in the Land of Antionum east of Sidon, distinct from Mount Antipas / Onidah in the Land of Nephi.",
    "howAccepted": "Total, life-changing embrace: the humble poor received the word with joy, repented, and when expelled from Antionum by their rulers, fled into the Land of Jershon where the People of Ammon gave them lands, food, and clothing (Alma 35:6–9).",
    "passages": [
      "Alma 32:4–43",
      "Alma 33:1–23",
      "Alma 34:1–41",
      "Alma 35:6–9"
    ]
  },
  "land_of_siron": {
    "id": "land_of_siron",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 74 BC (Alma's Doctrinal Counsel to his Son Corianton)",
    "teacher": "Alma the Younger",
    "audience": "Corianton (Son of Alma) and Inhabitants of the Southern Border",
    "whatWasTaught": "Crucial, foundational doctrinal discourses delivered by Alma to his straying son: the extreme seriousness of sexual sin ('the most abominable above all sins save it be the shedding of innocent blood', Alma 39:3–5); the state of the soul between death and resurrection (the spirit world: paradise of peace vs. outer darkness of weeping, Alma 40:11–14); the doctrine of restoration (good restored to good, evil to evil, Alma 41); and the divine harmony of justice and mercy through the Infinite Atonement of Christ (Alma 42).",
    "whyTaught": "Corianton had abandoned his missionary labors in Antionum to pursue the harlot Isabel in Siron, causing the Zoramites to disbelieve his father's words.",
    "context": "A border region between Nephite and Lamanite territory known as a place of worldly vice and moral temptation.",
    "howAccepted": "Heartfelt, complete repentance: Corianton received his father's severe rebuke with humility, repented fully, returned to the ministry, and became a lifelong valiant missionary of the gospel (Alma 49:30; 63:10).",
    "passages": [
      "Alma 39:1–19",
      "Alma 40:1–26",
      "Alma 41:1–15",
      "Alma 42:1–31",
      "Alma 49:30",
      "Alma 63:10"
    ]
  },
  "judea": {
    "id": "judea",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 66–64 BC (Helaman's Ministry to the Stripling Warriors)",
    "teacher": "Helaman (Son of Alma) & the Mothers of the Stripling Warriors",
    "audience": "The 2,060 Young Sons of the Anti-Nephi-Lehies and the Western Armies of Antipus",
    "whatWasTaught": "Unwavering faith in God; honoring the counsel of righteous mothers ('they did not doubt their mothers knew it', Alma 56:48); exact obedience and moral purity as the foundation of divine protection; and righteous defense of liberty without bloodthirstiness (Alma 53:16–22; 56:44–56).",
    "whyTaught": "To reinforce the collapsing southwestern frontier when adult Nephite manpower was exhausted by relentless multi-front warfare.",
    "context": "A western border city garrison surrounded by defensive earthworks, serving as the central base for the military campaigns between Antiparah, Cumeni, and Manti.",
    "howAccepted": "Miraculous military triumph: all 2,060 young men fought with superhuman courage, and though every single youth received wounds, not one was slain, because of their complete faith that God would deliver them (Alma 56:56; 57:25–26).",
    "passages": [
      "Alma 53:10–22",
      "Alma 56:1–57",
      "Alma 57:19–27",
      "Alma 58:1–41"
    ]
  },
  "antiparah": {
    "id": "antiparah",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Southwestern Military Campaign c. 65 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military Record Only)",
    "audience": "N/A — No Preaching or Sermons Recorded at this Fortress",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Antiparah. Scripture records Antiparah strictly as a southwestern Nephite fortress captured by Lamanites, garrisoned by their strongest army (Alma 56:14–16). Helaman and his 2,000 stripling warriors decoyed the Lamanite garrison out of Antiparah, drawing them away so Antipus's army could pursue. The Lamanite garrison was completely defeated in battle, and the city was subsequently recaptured by the Nephites without further bloodshed (Alma 56:30–57; 57:1–4).",
    "whyTaught": "N/A — Preserved by Mormon in Helaman's epistle (Alma 56–57) to record the heroic decoy campaign and miraculous preservation of the stripling warriors.",
    "context": "A fortified city on the southwest frontier near the West Sea, situated between Judea and Cumeni.",
    "howAccepted": "Since no gospel preaching took place at Antiparah, there was no reception of doctrine recorded. Historically, the Lamanite garrison was drawn out and defeated, and the remaining Lamanite forces evacuated the city.",
    "passages": [
      "Alma 56:14",
      "Alma 56:30–57",
      "Alma 57:1–4"
    ]
  },
  "cumeni": {
    "id": "cumeni",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Siege & Liberation c. 64 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military Record Only)",
    "audience": "N/A — No Preaching or Sermons Recorded at this Fortress",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Cumeni. Scripture records Cumeni exclusively as a southwestern fortress captured by Lamanites, which Helaman's army besieged by cutting off all supply trains until the Lamanites surrendered the city (Alma 57:7–12). When a massive fresh Lamanite army attacked the city to retake it, Helaman's 2,060 stripling warriors stood firm with miraculous valor, repulsing the assault; every young man was wounded with more than two hundred fainting from loss of blood, yet not one was slain (Alma 57:19–27).",
    "whyTaught": "N/A — Preserved by Mormon in Alma 57 to document the fulfillment of God's promise to preserve the stripling warriors because of their exact obedience and faith.",
    "context": "A strategic southwestern fortress situated between Antiparah and Manti.",
    "howAccepted": "Since no gospel preaching occurred at Cumeni, no doctrinal reception took place. Historically, the fortress was captured by siege and defended against desperate Lamanite counterattacks.",
    "passages": [
      "Alma 57:7–27"
    ]
  },
  "zeezrom_city": {
    "id": "zeezrom_city",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Frontier Garrison c. 65 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military Record Only)",
    "audience": "N/A — Garrison Defenders; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Zeezrom. Scripture records this city strictly as a fortified border settlement on the southwest frontier, named after the converted missionary Zeezrom, which fell into Lamanite hands during their southwestern offensive (Alma 56:13–14).",
    "whyTaught": "N/A — Recorded by Helaman in Alma 56:14 to delineate the chain of western cities captured by the Lamanites that threatened the survival of the republic.",
    "context": "A southwestern border fortress positioned between Manti, Cumeni, and Antiparah.",
    "howAccepted": "Since no gospel preaching was delivered at the City of Zeezrom, no doctrinal response occurred. Historically, it formed part of the contested southwestern defense line.",
    "passages": [
      "Alma 56:13–14"
    ]
  },
  "helamans_chain": {
    "id": "helamans_chain",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Military Theater c. 66–63 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military Defense Line Only)",
    "audience": "N/A — Military Defense Line; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction along Helaman's Defense Chain. Scripture describes this chain strictly as the coordinated line of fortified border cities—Manti, Zeezrom, Cumeni, Antiparah, and Judea—anchoring the southwestern frontier against massive Lamanite invasion corridors from the southern wilderness (Alma 56:13–15). Helaman and his stripling warriors conducted their entire western campaign across this chain.",
    "whyTaught": "N/A — Recorded by Helaman to describe the strategic frontier fortifications required to protect Nephite families and lands.",
    "context": "The southwestern border network stretching from the headwaters of River Sidon at Manti westward toward the Sea West.",
    "howAccepted": "Since no gospel preaching occurred along this military line, no reception of doctrine took place. Historically, the defense chain was completely reclaimed by Nephite armies through faith and inspired strategy.",
    "passages": [
      "Alma 56:13–15"
    ]
  },
  "manti": {
    "id": "manti",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Southern Frontier Campaigns c. 74 & 63 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military & Strategic Record Only)",
    "audience": "N/A — Garrison Defenders & Invading Armies; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Manti. Scripture records Manti exclusively as the strategic southern fortress guarding the headwaters of River Sidon and the southern wilderness passes. It was the staging ground where Captain Moroni inquired of the prophet Alma to anticipate Zerahemnah's invasion and ambushed the Lamanites at River Sidon in 74 BC (Alma 43:22–54). Later in 63 BC, Helaman and his stripling warriors recaptured Manti from a large Lamanite garrison using a nighttime decoy maneuver without shedding blood (Alma 58:13–30).",
    "whyTaught": "N/A — Preserved by Mormon in Alma 43 and 58 to demonstrate how prophetic revelation and inspired tactical maneuvers preserved the southern gateway of the Nephite republic.",
    "context": "The preeminent southern fortress near the headwaters of River Sidon, controlling the pass between the Land of Nephi and Zarahemla.",
    "howAccepted": "Since no gospel preaching was delivered at Manti, there was no reception of doctrine recorded. Historically, both Moroni and Helaman achieved total military victories, expelling Lamanite armies and securing the southern frontier.",
    "passages": [
      "Alma 16:6–7",
      "Alma 43:22–54",
      "Alma 58:13–39"
    ]
  },
  "hill_riplah": {
    "id": "hill_riplah",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Military Ambush c. 74 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military Record Only)",
    "audience": "N/A — Concealed Army Ambush Site; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at Hill Riplah. Scripture records Hill Riplah strictly as the high hill on the east of River Sidon in the south wilderness where Captain Moroni concealed a portion of his army under Chief Captain Lehi to encircle Zerahemnah's Lamanite host as they crossed the river (Alma 43:31–35).",
    "whyTaught": "N/A — Recorded by Mormon in Alma 43:31–35 to document Moroni's tactical encirclement of Zerahemnah's army, which forced the Lamanites to surrender and make an oath of peace.",
    "context": "A prominent hill situated south of River Sidon in the wilderness borders near Manti.",
    "howAccepted": "Since no gospel preaching took place at Hill Riplah, no doctrinal reception occurred. Historically, the concealed Nephite army under Lehi fell upon the rear of the Lamanites, driving them into Moroni's forces on the west bank.",
    "passages": [
      "Alma 43:31–35"
    ]
  },
  "narrow_strip": {
    "id": "narrow_strip",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Geographic & Defensive Buffer)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Geographic Wilderness Only)",
    "audience": "N/A — Wilderness Dividing Line; No Inhabitants or Preaching",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction in the Narrow Strip of Wilderness. Scripture describes this landmark strictly as the rugged continental wilderness dividing line running from the Sea East to the Sea West that separated the Land of Nephi in the south from the Land of Zarahemla in the north (Alma 22:27). Captain Moroni heavily fortified this line with border garrisons, clearing out all invading Lamanites and driving them south of the strip to create a secure buffer for Nephite lands (Alma 50:7–11).",
    "whyTaught": "N/A — Described by Mormon in Alma 22 and 50 as the primary strategic frontier defining the geopolitical boundary between Nephite and Lamanite civilizations.",
    "context": "A dense, mountainous wilderness running east-to-west across the entire continent between the southern highlands and the Sidon river basin.",
    "howAccepted": "Since no gospel preaching took place here, no reception of doctrine occurred. Historically, it was heavily patrolled by Nephite border guards to intercept enemy armies.",
    "passages": [
      "Alma 22:27",
      "Alma 50:7–11"
    ]
  },
  "narrow_pass": {
    "id": "narrow_pass",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Continental Choke Point Fortification c. 67 BC – AD 350)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military Strongpoint Only)",
    "audience": "N/A — Frontier Garrisons; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the Narrow Pass. Scripture records this pass exclusively as the strategic continental bottleneck connecting the Land Southward to the Land Northward. Teancum intercepted Morianton's armed insurrection here, slaying him in battle to prevent the rebels from seizing the northern lands (Alma 50:33–36). Captain Moroni later fortified the pass with a permanent garrison to prevent Lamanites from surrounding Nephite territories (Alma 52:9). Four centuries later, the prophet-general Mormon fortified this narrow passage with defensive armies, making a treaty with the Lamanites to divide the continent at this point (Mormon 2:28–29; 3:5–6).",
    "whyTaught": "N/A — Recorded by Mormon to document the vital geopolitical gateway that determined military survival across both Nephite and Jaredite dispensations.",
    "context": "A narrow coastal passage between the Sea West and the inland waters, scarcely one day and a half's journey for a Nephite.",
    "howAccepted": "Since no gospel preaching was delivered at the Narrow Pass, there was no reception of doctrine recorded. Historically, it served as a decisive military strongpoint where Nephite armies successfully checked northern invasions.",
    "passages": [
      "Alma 50:33–36",
      "Alma 52:9",
      "Alma 63:5",
      "Mormon 2:28–29",
      "Mormon 3:5–6"
    ]
  },
  "narrow_neck": {
    "id": "narrow_neck",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Continental Isthmus Geography)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Geographic Isthmus Only)",
    "audience": "N/A — Continental Choke Point; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the Narrow Neck of Land. Scripture describes this geographic feature as the continental isthmus scarcely one day's journey across from the East Sea to the West Sea (Helaman 4:7), separating the Land Northward (Desolation) from the Land Southward (Bountiful). It served as the boundary line of Nephite defense and the site where Hagoth launched his large ships into the West Sea in 55 BC (Alma 63:5).",
    "whyTaught": "N/A — Described by Mormon in Alma 22:32 and Helaman 4:7 as the geographical key to ancient American history and continental movement.",
    "context": "The narrow strip of land connecting the northern and southern continental landmasses.",
    "howAccepted": "Since no gospel preaching took place here, no reception of doctrine occurred. Historically, it was guarded by Nephite armies and used as a maritime launch point.",
    "passages": [
      "Alma 22:32",
      "Alma 63:5",
      "Helaman 4:7"
    ]
  },
  "waters_by_the_neck": {
    "id": "waters_by_the_neck",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Geographic Water Boundary)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Geographic Feature Only)",
    "audience": "N/A — Inland Waters; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the Waters by the Narrow Neck. Scripture mentions this water barrier strictly as the geographic body of water bordering the narrow passage between the Land Bountiful and the Land of Desolation (Alma 22:32).",
    "whyTaught": "N/A — Preserved by Mormon in Alma 22:32 to provide precise geographical context for the continental division line.",
    "context": "Inland or coastal waters bordering the narrow continental pass.",
    "howAccepted": "Since no preaching occurred here, no doctrinal reception took place.",
    "passages": [
      "Alma 22:32"
    ]
  },
  "sea_west": {
    "id": "sea_west",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Oceanic Boundary)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Oceanic Boundary Only)",
    "audience": "N/A — Ocean Seashore; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction along the Sea West generally. Scripture records the West Sea as the ocean boundary where Lehi's ship made landfall at the Land of First Inheritance (Alma 22:28), where Hagoth launched his exploration vessels (Alma 63:5), and where western military campaigns took place (Alma 53:8; 56:31).",
    "whyTaught": "N/A — Recorded by Mormon as the western oceanic limit of ancient American geography.",
    "context": "The Pacific ocean bounding the western shores of both the Land Southward and Land Northward.",
    "howAccepted": "Since no preaching took place along the sea itself, no reception of doctrine occurred.",
    "passages": [
      "Alma 22:28",
      "Alma 53:8",
      "Alma 56:31",
      "Alma 63:5",
      "Helaman 3:8"
    ]
  },
  "sea_east": {
    "id": "sea_east",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Oceanic Boundary)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Oceanic Boundary Only)",
    "audience": "N/A — Ocean Seashore; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction along the Sea East generally. Scripture records the East Sea as the ocean bounding the eastern coastline, along which Captain Moroni fortified a string of defense cities (Moroni, Nephihah, Lehi, Morianton, Omner, Gid, and Mulek) to guard against Lamanite coastal advances (Alma 50:13; 51:26).",
    "whyTaught": "N/A — Recorded by Mormon to establish the eastern geographic perimeter and military campaign corridor.",
    "context": "The Atlantic/Caribbean ocean bounding the eastern shores of the continent.",
    "howAccepted": "Since no preaching took place along the sea itself, no reception of doctrine occurred.",
    "passages": [
      "Alma 22:27",
      "Alma 50:13",
      "Alma 51:26",
      "Helaman 3:8"
    ]
  },
  "land_first_inheritance": {
    "id": "land_first_inheritance",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 588–570 BC (Patriarch Lehi's Final Doctrinal Discourses)",
    "teacher": "The Patriarch Lehi, Sariah, and Nephi",
    "audience": "Laman, Lemuel, Sam, Nephi, Jacob, Joseph, Zoram, and the Children of Ishmael",
    "whatWasTaught": "Foundational theological discourses of the Book of Mormon: (1) The covenant of the Promised Land as a choice land above all other lands, kept from other nations so long as the inhabitants serve God (2 Nephi 1); (2) The great sermon on moral agency, the Fall of Adam and Eve, and the coming Messiah ('Adam fell that men might be; and men are, that they might have joy', 2 Nephi 2:25); (3) Opposition in all things and freedom to choose eternal life through the great Mediator or choose captivity and death (2 Nephi 2:27); (4) The prophecies of Joseph of Egypt concerning the Latter-day seer, Joseph Smith (2 Nephi 3); (5) Patriarchal blessings upon all of Lehi's sons and grandchildren (2 Nephi 4:1–12).",
    "whyTaught": "To lay the permanent doctrinal, spiritual, and patriarchal foundation of the new civilization upon arriving in the promised land, and to plead with rebellious older sons before Lehi's death.",
    "context": "The coastal haven along the West Sea shore where Lehi's ship made landfall following their ocean crossing guided by the Liahona.",
    "howAccepted": "Divided between faithful and rebellious: righteous sons (Nephi, Sam, Jacob, Joseph) cherished their father's counsel; rebellious sons (Laman and Lemuel) murmured, plotted against Nephi's life, and forced the righteous to flee into the wilderness to found the Land of Nephi (2 Nephi 5:1–8).",
    "passages": [
      "1 Nephi 18:23–25",
      "2 Nephi 1:1–32",
      "2 Nephi 2:1–30",
      "2 Nephi 3:1–25",
      "2 Nephi 4:1–12",
      "Alma 22:28"
    ]
  },
  "waters_of_ripliancum": {
    "id": "waters_of_ripliancum",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Jaredite Civil War Battleground)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Jaredite War Record Only)",
    "audience": "N/A — Battleground Waters; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the Waters of Ripliancum. Scripture describes Ripliancum ('which, by interpretation, is large, or to exceed all') strictly as the vast northern sea where the final Jaredite civil war reached its apocalyptic climax: Coriantumr pursued Shiz to these waters, fought a bloody battle lasting three days in which thousands fell, and was severely wounded, driving Shiz's army southward to Ogath and Ramah/Cumorah (Ether 15:8–11).",
    "whyTaught": "N/A — Preserved by Ether and Moroni in Ether 15 to document the horrifying penultimate military clash that pushed the Jaredite nation toward complete extinction.",
    "context": "A vast body of water in the far northern territory beyond the plains of Agosh.",
    "howAccepted": "Since no gospel preaching took place here, no reception of doctrine occurred. Historically, the armies slaughtered each other with unrelenting fury until forced to retreat southward.",
    "passages": [
      "Ether 15:8–11"
    ]
  },
  "land_of_desolation": {
    "id": "land_of_desolation",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Ancient Ruins & Mulekite Landfall c. 586 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Historical & Archaeological Site Only)",
    "audience": "N/A — Desolate Ruins; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction in the Land of Desolation. Scripture records Desolation as the vast northern territory where the Jaredite nation perished, leaving behind ruins of buildings, bones of men, and 24 gold plates discovered by King Limhi's explorers (Mosiah 8:8; 21:26). Alma 22:30 explicitly identifies this northern coastal land as the 'place of their first landing' for Prince Mulek and the people of Zarahemla (Mulekites) escaping the Babylonian destruction of Jerusalem, after which they migrated southward into the Sidon wilderness to found Zarahemla.",
    "whyTaught": "N/A — Described by Mormon in Alma 22:30–32 and Mosiah 8:8 as a solemn archaeological testimony of the total destruction of an ancient civilization that rejected God.",
    "context": "The expansive northern continent situated north of the Narrow Neck of Land.",
    "howAccepted": "Since no preaching occurred here, no doctrinal reception took place. Limhi's explorers wept over the tragic bones and brought back the 24 gold plates to King Mosiah II for translation.",
    "passages": [
      "Mosiah 8:8",
      "Mosiah 21:26",
      "Alma 22:30–32",
      "Helaman 3:3–7"
    ]
  },
  "moriancumer_shore": {
    "id": "moriancumer_shore",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 2200 BC (Premortal Christ Appearing to the Brother of Jared)",
    "teacher": "The Premortal Lord Jesus Christ & The Brother of Jared (Moriancumer)",
    "audience": "The Brother of Jared, Jared, their Families, and Future Generations",
    "whatWasTaught": "One of the greatest visions recorded in sacred history: the Brother of Jared saw the premortal spirit body of Jesus Christ, who revealed Himself declaring: 'Behold, I am He who was prepared from the foundation of the world to redeem my people... Seest thou that ye are created after mine own image? Yea, even all men were created in the beginning after mine own image' (Ether 3:14–15). Taught building submersible barges 'tight like unto a dish', moltening sixteen stones out of a rock and touching them with the finger of God to provide light in dark barges, and prayerful reliance on God during a 344-day ocean crossing (Ether 2–3; 6).",
    "whyTaught": "To prepare the Jaredite colony for their oceanic voyage and reveal the reality of Christ's premortal spirit body through surpassing faith.",
    "context": "The great ocean seashore in the Old World where the Jaredites camped in tents for four years before embarking on their transoceanic crossing.",
    "howAccepted": "Total, humble faith: after the Brother of Jared repented for forgetting to pray, his faith pierced the veil so completely that the Lord showed Himself, declaring that never had man believed in Him as the Brother of Jared (Ether 3:9–15).",
    "passages": [
      "Ether 2:13–25",
      "Ether 3:1–28",
      "Ether 6:1–12"
    ]
  },
  "valley_of_nimrod": {
    "id": "valley_of_nimrod",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Colonial Assembly c. 2200 BC)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Jaredite Assembly Site Only)",
    "audience": "N/A — Encampment Site; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction in the Valley of Nimrod. Scripture records this valley strictly as the gathering place near the Tower of Babel named after Nimrod the mighty hunter, where Jared, the Brother of Jared, and their families gathered flocks of every kind, male and female, fowls of the air, seeds of every kind, and swarms of honeybees (deseret) before departing into the wilderness (Ether 2:1–3).",
    "whyTaught": "N/A — Recorded by Ether and Moroni in Ether 2:1 to document the logistical preparation of the Jaredite colony for their long wilderness trek.",
    "context": "A northern valley in the Old World near the ancient Tower of Babel.",
    "howAccepted": "Since no gospel preaching took place here, no reception of doctrine occurred. The Jaredites gathered their provisions and departed into the wilderness following the Lord.",
    "passages": [
      "Ether 2:1–3"
    ]
  },
  "land_of_moron": {
    "id": "land_of_moron",
    "hasRecordedTeachings": true,
    "whenTaught": "c. 600–500 BC (Ether's Prophetic Warnings to King Coriantumr)",
    "teacher": "The Prophet Ether & Righteous Jaredite Kings (Orihah, Shule, Lib)",
    "audience": "King Coriantumr, Jaredite Monarchs, Rebellious Princes, and Secret Combinations",
    "whatWasTaught": "Repentance from secret combinations, murders, and idolatry; faith in God as an anchor to the souls of men; the New Jerusalem to be built upon this land; and solemn prophecy that if Coriantumr refused to repent, all his people would be destroyed and he alone would survive to see another people inherit the land (Ether 12:4; 13:1–22).",
    "whyTaught": "To extend a final prophetic call to repentance to the Jaredite monarchs before their civilization annihilated itself in civil war.",
    "context": "The ancestral royal cradle and capital of the Jaredite civilization, situated in the Land Northward near Desolation.",
    "howAccepted": "Total, fatal rejection: though righteous kings like Shule and Lib had protected prophets in earlier centuries, Coriantumr and his court hardened their hearts, sought to kill Ether, and expelled him, forcing Ether to hide in the cavity of a rock to record their destruction (Ether 13:13–22).",
    "passages": [
      "Ether 7:5–6",
      "Ether 9:1–3",
      "Ether 13:1–31",
      "Ether 14:6"
    ]
  },
  "city_of_nehor": {
    "id": "city_of_nehor",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Jaredite Rebellion Site)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Jaredite Political Record Only)",
    "audience": "N/A — Rebel Stronghold; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the Jaredite City of Nehor. Scripture records this city strictly as the rebel capital built by Corihor, the son of King Kib, after rebelling against his father and drawing away many people (Ether 7:4–9). Corihor marched from Nehor against Moron and held his father Kib captive until Shule forged steel swords and overthrew Corihor.",
    "whyTaught": "N/A — Recorded by Ether in Ether 7 to document the first recorded dynastic rebellion and civil war in Jaredite history.",
    "context": "An early Jaredite city situated in the Land Northward near the royal land of Moron.",
    "howAccepted": "Since no gospel preaching took place here, no reception of doctrine occurred. Historically, it served as a dissident military stronghold.",
    "passages": [
      "Ether 7:4–9"
    ]
  },
  "hill_ephraim": {
    "id": "hill_ephraim",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Mining & Metallurgical Site)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Metallurgical Record Only)",
    "audience": "N/A — Iron Ore Hill; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at Hill Ephraim. Scripture records Hill Ephraim solely as the hill containing rich iron ore where Shule, son of Kib, moltened ore and forged swords of steel to arm his followers in order to overthrow his rebellious brother Corihor and restore his father Kib to the throne (Ether 7:9).",
    "whyTaught": "N/A — Recorded by Ether in Ether 7:9 to document early Jaredite metallurgy, the production of steel swords, and the liberation of King Kib.",
    "context": "A mineral-rich hill located in the Land Northward near the Land of Moron.",
    "howAccepted": "Since no preaching occurred here, no doctrinal reception took place. Shule armed his followers with steel swords and marched against the City of Nehor.",
    "passages": [
      "Ether 7:9"
    ]
  },
  "place_of_ogath": {
    "id": "place_of_ogath",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Jaredite Encampment Site)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Jaredite War Record Only)",
    "audience": "N/A — Encampment Site; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the Place of Ogath. Scripture records Ogath strictly as the place near the Hill Ramah (Cumorah) where the ferocious Jaredite warlord Shiz pitched his tents and gathered his armies, while Coriantumr pitched his tents by the Hill Ramah, spending four years gathering every remaining man, woman, and child for their final battle of mutual slaughter (Ether 15:10–14).",
    "whyTaught": "N/A — Preserved by Ether in Ether 15 to document the encampment sites preceding the final Jaredite battle.",
    "context": "A staging area in the Land of Desolation situated near the Hill Ramah (Cumorah).",
    "howAccepted": "Since no preaching took place here, no reception of doctrine occurred. Both sides gathered their populations with murderous fury until none were left.",
    "passages": [
      "Ether 15:10–14"
    ]
  },
  "valley_of_corihor": {
    "id": "valley_of_corihor",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Jaredite Civil War Battleground)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Jaredite War Record Only)",
    "audience": "N/A — Civil War Battleground; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction in the Valley of Corihor. Scripture records this valley strictly as the battleground where Coriantumr and Shared engaged in fierce warfare; Shared was slain, but Coriantumr was severely wounded and could not fight for three days, after which Shared's brother Gilead renewed the civil war (Ether 14:27–28).",
    "whyTaught": "N/A — Preserved by Ether to trace the catastrophic sequence of battles destroying the Jaredite population.",
    "context": "A northern valley situated between the plains of Heshlon and the Valley of Shurr.",
    "howAccepted": "Since no preaching took place here, no reception of doctrine occurred.",
    "passages": [
      "Ether 14:27–28"
    ]
  },
  "valley_of_shurr_comnor": {
    "id": "valley_of_shurr_comnor",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Jaredite Civil War Battleground)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Jaredite War Record Only)",
    "audience": "N/A — Battleground & Hill; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction in the Valley of Shurr or at Hill Comnor. Scripture records this valley and hill strictly as the battlefield where Coriantumr sounded a trumpet to challenge the armies of Shiz, fighting a bloody battle upon Hill Comnor where thousands were slain before Coriantumr was wounded and retreated to the Waters of Ripliancum (Ether 14:28; 15:1).",
    "whyTaught": "N/A — Recorded by Ether in Ether 14–15 to document the escalating brutality of the final Jaredite civil war.",
    "context": "A prominent hill and adjoining valley in the northern territory near the Valley of Corihor.",
    "howAccepted": "Since no preaching took place here, no doctrinal reception occurred.",
    "passages": [
      "Ether 14:28",
      "Ether 15:1"
    ]
  },
  "wilderness_of_akish": {
    "id": "wilderness_of_akish",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Jaredite Battleground)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Jaredite War Record Only)",
    "audience": "N/A — Wilderness Battleground; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction in the Wilderness of Akish. Scripture records this wilderness strictly as the terrain where Gilead ambushed Coriantumr's armies by night, defeating them and seizing Coriantumr's throne in Moron (Ether 14:4–6).",
    "whyTaught": "N/A — Recorded by Ether to document the rapid succession of military coups and assassinations characterizing the Jaredite collapse.",
    "context": "A rugged wilderness tract situated near the Land of Moron.",
    "howAccepted": "Since no preaching occurred here, no doctrinal reception took place.",
    "passages": [
      "Ether 14:4–6"
    ]
  },
  "plains_of_agosh": {
    "id": "plains_of_agosh",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Jaredite Civil War Plain)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Jaredite War Record Only)",
    "audience": "N/A — Civil War Plain; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction on the Plains of Agosh. Scripture records this plain strictly as the battlefield where Coriantumr fought the warlord Lib; Coriantumr slew Lib in combat, but Lib's brother Shiz took command, fought with terrifying fury, and drove Coriantumr northward (Ether 14:15–16).",
    "whyTaught": "N/A — Preserved by Ether in Ether 14 to document the rise of Shiz and the total mobilization of the Jaredite population for war.",
    "context": "Expansive northern plains situated south of the Waters of Ripliancum.",
    "howAccepted": "Since no preaching occurred here, no doctrinal reception took place.",
    "passages": [
      "Ether 14:15–16"
    ]
  },
  "plains_of_heshlon": {
    "id": "plains_of_heshlon",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Jaredite Civil War Plain)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Jaredite War Record Only)",
    "audience": "N/A — Civil War Plain; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction on the Plains of Heshlon. Scripture records Heshlon strictly as the site of a four-day battle between Coriantumr and Shared, where Shared drove Coriantumr back before Coriantumr regrouped in the Valley of Gilgal (Ether 13:25–30).",
    "whyTaught": "N/A — Recorded by Ether to document the initial phase of the catastrophic civil war following the rejection of Ether's prophecies.",
    "context": "Open plains located in the Land Northward near the Valley of Gilgal.",
    "howAccepted": "Since no preaching occurred here, no reception of doctrine took place.",
    "passages": [
      "Ether 13:25–30"
    ]
  },
  "valley_of_gilgal": {
    "id": "valley_of_gilgal",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Jaredite Civil War Valley)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Jaredite War Record Only)",
    "audience": "N/A — Civil War Valley; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction in the Valley of Gilgal. Scripture records this valley strictly as the battleground where Coriantumr defeated Shared's army and slew Shared in single combat, though Coriantumr received deep wounds that incapacitated him for three days (Ether 14:3–8).",
    "whyTaught": "N/A — Recorded by Ether in Ether 14 to document the brutal civil war conflicts that exhausted Jaredite manpower.",
    "context": "A northern valley situated near the Plains of Heshlon.",
    "howAccepted": "Since no preaching took place here, no reception of doctrine occurred.",
    "passages": [
      "Ether 14:3–8"
    ]
  },
  "cumorah": {
    "id": "cumorah",
    "hasRecordedTeachings": true,
    "whenTaught": "c. AD 385–421 (Final Testimonies of Mormon and Moroni)",
    "teacher": "The Prophet-Historian Mormon & Moroni (Final Solitary Prophet)",
    "audience": "All future readers of the Book of Mormon, the remnant of the House of Israel, and modern generations in the Latter Days",
    "whatWasTaught": "The ultimate concluding doctrinal testaments of the Book of Mormon: (1) Mormon's heartbreaking lamentation over his fallen nation ('O ye fair ones, how could ye have departed from the ways of the Lord!', Mormon 6:16–22); (2) Moroni's discourse on faith, hope, and charity ('charity is the pure love of Christ, and it endureth forever', Moroni 7:45–48); (3) Condemning infant baptism as a solemn mockery before God, because little children are alive in Christ (Moroni 8); (4) The coming forth of the Book of Mormon in the latter days by the power of God (Mormon 8); (5) Moroni's Promise: that whosoever reads these records and asks God the Eternal Father with a sincere heart, with real intent, having faith in Christ, God will manifest the truth of it unto him by the power of the Holy Ghost (Moroni 10:3–5); and the final invitation: 'Come unto Christ, and be perfected in Him' (Moroni 10:32).",
    "whyTaught": "To provide the final solemn testament of a destroyed nation, safely bury centuries of gold plates, and invite all mankind in the latter days to come unto the Redeemer.",
    "context": "The prominent northern hill in the Land of Desolation (called Ramah by the ancient Jaredites), where both the Jaredite and Nephite nations fought their final catastrophic struggles.",
    "howAccepted": "Tragic finality in ancient times: 230,000 Nephite soldiers fell around Cumorah in AD 385 due to hardened rebellion, leaving Mormon and Moroni alone to mourn. Moroni wandered alone for decades, faithfully finishing the record and sealing the gold plates in the stone box for Joseph Smith to recover in 1827.",
    "passages": [
      "Ether 15:1–34",
      "Mormon 6:1–22",
      "Mormon 8:1–35",
      "Moroni 1–10"
    ]
  },
  "land_of_antum": {
    "id": "land_of_antum",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Record Custody Era c. AD 321)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Record Custody Record Only)",
    "audience": "N/A — Northern Land; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction in the Land of Antum. Scripture mentions Antum solely as the northern territory containing Hill Shim, where the prophet Ammaron deposited all the sacred records and gold plates of the Nephites before charging the ten-year-old boy Mormon to remember their location (Mormon 1:3).",
    "whyTaught": "N/A — Recorded by Mormon in Mormon 1:3 to identify the geographic repository chosen by the Holy Ghost to preserve sacred scripture.",
    "context": "A territory in the Land Northward situated near the final Nephite battlefields.",
    "howAccepted": "Since no preaching occurred in Antum, no reception of doctrine took place. Young Mormon remembered Ammaron's instructions faithfully.",
    "passages": [
      "Mormon 1:3"
    ]
  },
  "hill_shim": {
    "id": "hill_shim",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Sacred Record Depository c. AD 321 & 345)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Sacred Custodial Charge Only)",
    "audience": "N/A — Record Depository; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at Hill Shim. Scripture records Hill Shim strictly as the sacred depository in the Land of Antum where Ammaron hid all the sacred records of Nephi (Mormon 1:3). Around AD 345, when Mormon reached age twenty-four and the Nephites were being driven north by Lamanite armies, Mormon came to Hill Shim and took up the plates of Nephi according to Ammaron's commandment to begin his great abridgment (Mormon 2:17). Later, fearing Lamanite capture, Mormon removed all the remaining records from Shim and hid them in Hill Cumorah (Mormon 4:23). Also mentioned in Ether 9:3 as the hill where King Omer fled with his family.",
    "whyTaught": "N/A — Preserved by Mormon in Mormon 1–4 to document the custodial chain that preserved the gold plates from which the Book of Mormon was translated.",
    "context": "A prominent hill in the northern Land of Antum used as an intermediate record repository.",
    "howAccepted": "Since no preaching was delivered here, no doctrinal reception occurred. Young Mormon obeyed Ammaron with lifelong fidelity, preserving the sacred records.",
    "passages": [
      "Mormon 1:1–5",
      "Mormon 2:17",
      "Mormon 4:23",
      "Ether 9:3"
    ]
  },
  "city_of_jordan": {
    "id": "city_of_jordan",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Mormon's Final Defensive Campaign c. AD 379)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Mormon Forbidden to Preach, Mormon 1:16–17; 3:16)",
    "audience": "N/A — Late Nephite Garrison; No Preaching Permitted Due to Hardness of Hearts",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Jordan. Scripture records that Mormon was expressly forbidden by the Lord to preach to the people because of the hardness of their hearts and their willful rebellion against God (Mormon 1:16–17; 3:16). The City of Jordan is mentioned strictly as a fortified northern stronghold where Mormon and the retreating Nephite armies successfully repulsed multiple massive Lamanite assaults, defending the city and maintaining their positions in AD 379 (Mormon 5:3–4).",
    "whyTaught": "N/A — Recorded by Mormon in Mormon 5:3–4 to document the final desperate defensive stands of the Nephite army before their ultimate retreat to Cumorah.",
    "context": "A fortified northern city situated in the Land Northward where Nephite forces temporarily checked the Lamanite advance.",
    "howAccepted": "Since no gospel preaching took place here, no reception of doctrine occurred. Historically, the Nephites defended the city with desperate courage, driving back the Lamanites twice before being overwhelmed in subsequent campaigns.",
    "passages": [
      "Mormon 5:3–4"
    ]
  },
  "boaz": {
    "id": "boaz",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Military Slaughter c. AD 375)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Mormon Forbidden to Preach, Mormon 1:16–17)",
    "audience": "N/A — Fleeing Inhabitants & Defeated Armies; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Boaz. Scripture records Boaz strictly as a northern city where the fleeing Nephite armies made a stand under Mormon; the Nephites initially repulsed the Lamanites with boldness, but in the second assault, the Lamanites came upon them with exceeding fury and slaughtered the Nephites with a great slaughter, taking their women and children as prisoners (Mormon 4:20–21).",
    "whyTaught": "N/A — Preserved by Mormon in Mormon 4:20–21 as a tragic testimony of the brutal consequences when a nation completely loses divine protection through unrepentant wickedness.",
    "context": "A northern city located between the City of Teancum and the City of Jordan.",
    "howAccepted": "Since no gospel preaching was delivered here, no doctrinal reception occurred. Historically, the Nephite forces broke in panic and fled, leaving their families behind to be slaughtered or captured.",
    "passages": [
      "Mormon 4:20–21"
    ]
  },
  "teancum": {
    "id": "teancum",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Coastal Defense Campaigns c. AD 363)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military Record Only)",
    "audience": "N/A — Northern Garrison; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Teancum. Scripture records this city strictly as a fortified northern stronghold built near the seashore and named in honor of the great patriot Teancum (Mormon 4:3). Mormon's armies retreated to Teancum after losing Desolation. Although the Nephites initially held the city and made offensive sorties to reclaim Desolation, the Lamanites attacked Teancum with overwhelming numbers, drove the Nephites out, and sacrificed Nephite women and children to their idols (Mormon 4:3–14).",
    "whyTaught": "N/A — Preserved by Mormon in Mormon 4 to record the horrific atrocities and idolatrous sacrifices committed during the final collapse of Nephite civilization.",
    "context": "A coastal city situated in the Land Northward near the borders of Desolation.",
    "howAccepted": "Since no gospel preaching took place here, no reception of doctrine occurred. Historically, the city fell to Lamanite forces amidst terrible atrocities.",
    "passages": [
      "Mormon 4:3–14"
    ]
  },
  "city_of_joshua": {
    "id": "city_of_joshua",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Mormon's Western Campaign c. AD 330)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Military Record Only)",
    "audience": "N/A — Fleeing Nephite Populations; No Preaching Permitted (Mormon 1:16–17)",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction in the Land or City of Joshua. Scripture records Joshua strictly as the territory in the borders west by the seashore where Mormon and the fleeing Nephites gathered their people in AD 330. King Aaron of the Lamanites marched against Mormon with an army of 44,000 men; Mormon, then a young general of twenty, engaged Aaron with 42,000 Nephites and defeated the Lamanite host, causing them to flee (Mormon 2:6–9).",
    "whyTaught": "N/A — Preserved by Mormon in Mormon 2:6–9 to document his first major military victory as commander-in-chief of all Nephite armies.",
    "context": "A western territory situated along the seashore of the Sea West.",
    "howAccepted": "Since no gospel preaching occurred in Joshua, no doctrinal reception took place. Historically, the victory provided temporary respite before continued retreats.",
    "passages": [
      "Mormon 2:6–9"
    ]
  },
  "city_of_david": {
    "id": "city_of_david",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Refugee Gathering Site c. AD 328)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Refugee Gathering Record Only)",
    "audience": "N/A — Fleeing Nephite Refugees; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of David. Scripture mentions David solely as a northern settlement where Mormon gathered all the fleeing Nephite populations in AD 328 to escape invading Lamanite armies before retreating further westward to Joshua (Mormon 2:5).",
    "whyTaught": "N/A — Recorded by Mormon in Mormon 2:5 to trace the geographical retreat of the Nephite nation across the continent.",
    "context": "A settlement situated between the southern lands and the western seacoast.",
    "howAccepted": "Since no preaching occurred here, no doctrinal reception took place. The refugees evacuated the city as enemy forces advanced.",
    "passages": [
      "Mormon 2:5"
    ]
  },
  "city_of_jashon": {
    "id": "city_of_jashon",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Retreat Gathering & Record Retrieval c. AD 345)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Record Custody Movement Only)",
    "audience": "N/A — Fleeing Nephite Host; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Jashon. Scripture records Jashon strictly as a northern city situated near Hill Shim where the Nephite refugees gathered in AD 345. Mormon took advantage of being near Hill Shim to retrieve the plates of Nephi according to Ammaron's commandment to begin his sacred abridgment (Mormon 2:16–17).",
    "whyTaught": "N/A — Recorded by Mormon in Mormon 2:16–17 to mark the exact moment and location where he obtained the sacred records to write the Book of Mormon.",
    "context": "A northern city situated in the Land of Antum near the sacred depository of Hill Shim.",
    "howAccepted": "Since no preaching took place here, no reception of doctrine occurred. The Nephite army was soon driven out of Jashon toward the City of Shem.",
    "passages": [
      "Mormon 2:16–17"
    ]
  },
  "city_of_shem": {
    "id": "city_of_shem",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Fortress Defense Stand c. AD 346)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Mormon Forbidden to Preach the Gospel, Mormon 1:16–17; Military Exhortation Only)",
    "audience": "N/A — 30,000 Nephite Soldiers Defending Against 50,000 Lamanites",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or religious instruction at the City of Shem. Mormon was forbidden by the Lord to preach the gospel because of the people's hardened rebellion. However, as general, Mormon exhorted his soldiers with patriotic fervor to stand boldly and fight for their wives, children, houses, and homes (Mormon 2:23). Mormon's army of 30,000 men stood firm against a Lamanite army of 50,000, achieving a stunning tactical victory that drove the invaders back into their own lands.",
    "whyTaught": "N/A — Preserved by Mormon in Mormon 2:20–26 to document the heroic stand at Shem that temporarily secured the continental treaty of AD 350.",
    "context": "A heavily fortified northern city situated north of Jashon.",
    "howAccepted": "Since no gospel preaching took place at Shem, there was no reception of doctrine. Historically, the soldiers responded to Mormon's military rallying cry and won a decisive defensive victory.",
    "passages": [
      "Mormon 2:20–26"
    ]
  },
  "city_of_sherrizah": {
    "id": "city_of_sherrizah",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Horrific Depravity in Final Nephite Wars c. AD 380)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Lamentation of Atrocities Only)",
    "audience": "N/A — Starving Women & Children; Total Depravity; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City and Tower of Sherrizah. Scripture records Sherrizah strictly in Mormon's second heartbreaking epistle to his son Moroni as a scene of unthinkable depravity and cannibalism during the final moral collapse of the Nephites (Moroni 9:7, 16–18). Lamanite armies captured Nephite women and children, fed the husbands the flesh of their wives, and fed the children the flesh of their fathers. When Nephite army commanders under Zenephi evacuated Sherrizah, they brutally carried off all food and provisions, leaving the remaining elderly, women, and children to starve in agony.",
    "whyTaught": "N/A — Preserved by Moroni in Moroni 9:7–18 as an unvarnished, horrifying record of the utter depravity, savagery, and cannibalism that ensues when a people completely reject the Spirit of God.",
    "context": "A fortified northern city and prominent tower in the final Nephite war zone.",
    "howAccepted": "Since no gospel preaching was delivered here, no doctrinal reception occurred. The surviving population died of starvation and unspeakable brutality.",
    "passages": [
      "Moroni 9:7",
      "Moroni 9:16–18"
    ]
  },
  "city_of_moriantum": {
    "id": "city_of_moriantum",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (Atrocity Lamentation c. AD 380)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Lamentation of Atrocities Only)",
    "audience": "N/A — Scene of Brutal Torture; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Moriantum. Scripture mentions Moriantum strictly in Mormon's second epistle to his son Moroni as the location where Nephite soldiers committed monstrous, depraved atrocities against captured Lamanite maidens, depriving them of chastity, murdering them, and consuming their flesh as a token of bravery (Moroni 9:9–11). Mormon wept bitterly, writing that the Nephites had become past feeling, without order and without mercy.",
    "whyTaught": "N/A — Preserved by Moroni in Moroni 9:9–11 as a solemn, sobering warning to future generations of the terrifying consequences of losing the Holy Ghost and becoming 'past feeling.'",
    "context": "A city in the northern territories during the final catastrophic wars between Nephites and Lamanites.",
    "howAccepted": "Since no preaching occurred here, no doctrinal reception took place. The inhabitants gave themselves over to complete spiritual darkness and brutality.",
    "passages": [
      "Moroni 9:9–11"
    ]
  },
  "city_of_jacobugath": {
    "id": "city_of_jacobugath",
    "hasRecordedTeachings": true,
    "whenTaught": "c. AD 34 (Divine Proclamation of Judgment from Heaven)",
    "teacher": "The Voice of the Lord Jesus Christ from Heaven",
    "audience": "The Secret Combinations, Corrupt Lawyers, and Followers of King Jacob",
    "whatWasTaught": "The solemn voice of the Lord Jesus Christ from heaven proclaiming divine justice upon secret combinations: 'the city of Jacobugath, which was inhabited by the people of king Jacob, have I caused to be burned with fire because of their sins and their wickedness, which was above all the wickedness of the whole earth, because of their secret murders and combinations; for it was they that destroyed the peace of my people and the government of the land; therefore I did cause them to be burned, to destroy them from before my face, that the blood of the prophets and the saints should not come up unto me any more against them' (3 Nephi 9:9).",
    "whyTaught": "To proclaim from heaven the cleansing of the land from the murderous secret combination that had assassinated Chief Judge Lachoneus and destroyed constitutional government.",
    "context": "A heavily fortified northern city built by the royalist secret combination under King Jacob, established far away from the righteous to consolidate their corrupt rule.",
    "howAccepted": "Total, instantaneous destruction: during the AD 34 crucifixion cataclysm, fire descended from heaven and burned the entire city and all its inhabitants to ashes, completely eliminating the secret combination (3 Nephi 9:9).",
    "passages": [
      "3 Nephi 7:9–14",
      "3 Nephi 9:9"
    ]
  },
  "city_of_moronihah": {
    "id": "city_of_moronihah",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (AD 34 Crucifixion Cataclysm)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Voice of Christ Declaring Judgment, 3 Nephi 9:5)",
    "audience": "N/A — Inhabitants Buried by a Mountain at Christ's Death",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction delivered in the City of Moronihah. Scripture records this city strictly as one of the wicked cities destroyed during the crucifixion upheavals in AD 34: a great mountain of earth was cast up in the place of the City of Moronihah, completely burying the city and its wicked inhabitants to hide their iniquities and secret murders from before the face of God (3 Nephi 8:10; 9:5).",
    "whyTaught": "N/A — Preserved in 3 Nephi 8–9 to document the physical fulfillment of prophetic warnings regarding the destruction of wicked cities rejecting God.",
    "context": "A prominent Nephite city, named after Chief Captain Moronihah, that had descended into corruption prior to the coming of Christ.",
    "howAccepted": "Since no sermons were delivered here prior to destruction, no doctrinal reception occurred. The entire city was instantly buried beneath a mountain.",
    "passages": [
      "3 Nephi 8:10",
      "3 Nephi 9:5"
    ]
  },
  "city_of_gilgal": {
    "id": "city_of_gilgal",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (AD 34 Cataclysm)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Voice of Christ Declaring Judgment, 3 Nephi 9:6)",
    "audience": "N/A — City Sunk into the Earth; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the Nephite City of Gilgal. Scripture records this city solely as one of the wicked cities destroyed at Christ's death: the Lord caused the City of Gilgal to sink into the earth and its inhabitants to be buried in the depths of the earth because of their wickedness (3 Nephi 9:6).",
    "whyTaught": "N/A — Recorded in 3 Nephi 9:6 as part of the Savior's celestial voice recounting the specific judgments executed across the continent.",
    "context": "A Nephite city named Gilgal, distinct from the Jaredite Valley of Gilgal.",
    "howAccepted": "Since no preaching took place here, no reception of doctrine occurred. The city was swallowed up into the earth.",
    "passages": [
      "3 Nephi 9:6"
    ]
  },
  "city_of_onihah": {
    "id": "city_of_onihah",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (AD 34 Cataclysm)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Voice of Christ Declaring Judgment, 3 Nephi 9:7)",
    "audience": "N/A — City Sunk and Covered by Waters; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Onihah. Scripture records Onihah solely in 3 Nephi 9:7, where the voice of the Savior declared that He had caused the City of Onihah and its inhabitants to be sunk, and waters to come up in the place thereof, to hide their wickedness from before His face.",
    "whyTaught": "N/A — Recorded in 3 Nephi 9:7 to document the fulfillment of Samuel the Lamanite's prophecies of divine destruction upon wicked cities.",
    "context": "A Nephite city that sank beneath waters during the AD 34 upheavals.",
    "howAccepted": "Since no preaching occurred here, no doctrinal reception took place. The city was completely submerged.",
    "passages": [
      "3 Nephi 9:7"
    ]
  },
  "city_of_mocum": {
    "id": "city_of_mocum",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (AD 34 Cataclysm)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Voice of Christ Declaring Judgment, 3 Nephi 9:7)",
    "audience": "N/A — City Submerged Beneath Waters; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Mocum. Scripture mentions Mocum solely in 3 Nephi 9:7 as one of the cities sunk into the earth and covered by waters during the crucifixion cataclysm to hide their iniquities.",
    "whyTaught": "N/A — Recorded by Mormon in 3 Nephi 9:7 to document the destruction of wicked cities at Christ's death.",
    "context": "A settlement destroyed and inundated by waters in AD 34.",
    "howAccepted": "Since no preaching took place here, no reception of doctrine occurred.",
    "passages": [
      "3 Nephi 9:7"
    ]
  },
  "city_of_gadiandi": {
    "id": "city_of_gadiandi",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (AD 34 Cataclysm)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Voice of Christ Declaring Judgment, 3 Nephi 9:8)",
    "audience": "N/A — Secret Combination Inhabitants Sunk Beneath Water; No Preaching",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Gadiandi. Scripture mentions Gadiandi strictly as a city inhabited by Gadianton robbers and secret combinations which the Lord caused to be sunk and covered with waters in AD 34 to destroy their secret combinations from before His face (3 Nephi 9:8).",
    "whyTaught": "N/A — Recorded in 3 Nephi 9:8 to document the eradication of wicked secret combinations by divine judgment.",
    "context": "A stronghold inhabited by corrupt factions and secret bands prior to AD 34.",
    "howAccepted": "Since no preaching occurred here, no reception of doctrine took place. The city sank beneath waters.",
    "passages": [
      "3 Nephi 9:8"
    ]
  },
  "city_of_gadiomnah": {
    "id": "city_of_gadiomnah",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (AD 34 Cataclysm)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Voice of Christ Declaring Judgment, 3 Nephi 9:8)",
    "audience": "N/A — Inhabitants Sunk Beneath Waters; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Gadiomnah. Scripture records Gadiomnah strictly in 3 Nephi 9:8 as one of the wicked cities sunk and covered with waters during the crucifixion cataclysm.",
    "whyTaught": "N/A — Preserved in 3 Nephi 9:8 to document the comprehensive cleansing of the land at Christ's death.",
    "context": "A northern or western settlement destroyed and covered with waters in AD 34.",
    "howAccepted": "Since no preaching was delivered here, no doctrinal reception took place.",
    "passages": [
      "3 Nephi 9:8"
    ]
  },
  "city_of_jacob": {
    "id": "city_of_jacob",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (AD 34 Cataclysm)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Voice of Christ Declaring Judgment, 3 Nephi 9:8)",
    "audience": "N/A — Royalist Rebel Inhabitants Burned with Fire; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Jacob. Scripture records this city strictly as a settlement inhabited by the royalist followers of King Jacob that was burned with fire from heaven during the crucifixion cataclysm in AD 34 because of their sins and wickedness (3 Nephi 9:8).",
    "whyTaught": "N/A — Recorded in 3 Nephi 9:8 to record divine judgment upon those who rebelled against constitutional government and righteousness.",
    "context": "A rebel settlement named after King Jacob, destroyed by fire in AD 34.",
    "howAccepted": "Since no preaching took place here, no reception of doctrine occurred. The city was consumed by fire.",
    "passages": [
      "3 Nephi 9:8"
    ]
  },
  "city_of_gimgimno": {
    "id": "city_of_gimgimno",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (AD 34 Cataclysm)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Voice of Christ Declaring Judgment, 3 Nephi 9:8)",
    "audience": "N/A — Inhabitants Sunk Beneath Earth; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Gimgimno. Scripture mentions Gimgimno solely in 3 Nephi 9:8 as one of the cities sunk into the depths of the earth during the great earthquake at Christ's crucifixion to hide their iniquities from before God.",
    "whyTaught": "N/A — Recorded in 3 Nephi 9:8 as part of the voice of Christ proclaiming judgment.",
    "context": "An ancient settlement swallowed up by the earth in AD 34.",
    "howAccepted": "Since no preaching occurred here, no doctrinal reception took place.",
    "passages": [
      "3 Nephi 9:8"
    ]
  },
  "city_of_laman": {
    "id": "city_of_laman",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (AD 34 Cataclysm)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Voice of Christ Declaring Judgment, 3 Nephi 9:10)",
    "audience": "N/A — Inhabitants Burned with Fire for Stoning Prophets; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction delivered in the City of Laman. Scripture records this city strictly in 3 Nephi 9:10, where the voice of the Savior declared that He had caused the City of Laman to be burned with fire from heaven because the inhabitants had cast out, stoned, and slain the prophets sent unto them.",
    "whyTaught": "N/A — Recorded in 3 Nephi 9:10 to show that the Lord avenge the blood of the martyred prophets upon those who cast them out.",
    "context": "A wicked city burned with fire in AD 34 because of its rejection of God's messengers.",
    "howAccepted": "Since the inhabitants had stoned and murdered the prophets who came to preach to them, they received no doctrine, bringing upon themselves total destruction by fire (3 Nephi 9:10).",
    "passages": [
      "3 Nephi 9:10"
    ]
  },
  "city_of_josh": {
    "id": "city_of_josh",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (AD 34 Cataclysm)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Voice of Christ Declaring Judgment, 3 Nephi 9:10)",
    "audience": "N/A — Inhabitants Burned with Fire for Murdering Prophets; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction delivered in the City of Josh. Scripture records this city solely in 3 Nephi 9:10, where the Savior declared that He had caused the City of Josh to be burned with fire because its citizens cast out, stoned, and murdered the prophets sent to call them to repentance.",
    "whyTaught": "N/A — Recorded in 3 Nephi 9:10 as a solemn warning that shedding innocent prophetic blood brings divine justice.",
    "context": "A wicked city consumed by fire at Christ's death.",
    "howAccepted": "The citizens had violently rejected, cast out, and murdered the prophets, resulting in their complete destruction by fire.",
    "passages": [
      "3 Nephi 9:10"
    ]
  },
  "city_of_gad": {
    "id": "city_of_gad",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (AD 34 Cataclysm)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Voice of Christ Declaring Judgment, 3 Nephi 9:10)",
    "audience": "N/A — Inhabitants Burned with Fire for Stoning Prophets; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction delivered in the City of Gad. Scripture records this city solely in 3 Nephi 9:10 as one of the wicked cities burned with fire from heaven because the inhabitants had cast out, stoned, and killed the holy prophets sent to preach unto them.",
    "whyTaught": "N/A — Recorded in 3 Nephi 9:10 to document divine retribution for the martyrdom of God's prophets.",
    "context": "A wicked city destroyed by fire in AD 34.",
    "howAccepted": "The inhabitants cast out and killed the prophets, thereby receiving no gospel doctrines and suffering total destruction.",
    "passages": [
      "3 Nephi 9:10"
    ]
  },
  "city_of_kishkumen": {
    "id": "city_of_kishkumen",
    "hasRecordedTeachings": false,
    "whenTaught": "No Gospel Preaching Recorded (AD 34 Cataclysm)",
    "teacher": "No Gospel Preaching Recorded in Scripture (Voice of Christ Declaring Judgment, 3 Nephi 9:10)",
    "audience": "N/A — Murderous Inhabitants Burned with Fire; No Preaching Recorded",
    "whatWasTaught": "The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal instruction at the City of Kishkumen. Scripture records this city, named after the assassin and founder of the secret combination Kishkumen, strictly as one of the wicked cities burned with fire from heaven during the crucifixion cataclysm in AD 34 because the inhabitants cast out and murdered the prophets and saints (3 Nephi 9:10).",
    "whyTaught": "N/A — Recorded in 3 Nephi 9:10 to demonstrate that God purges the earth of secret combinations and those who murder the saints.",
    "context": "A city named after the infamous assassin Kishkumen, destroyed by fire at Christ's death.",
    "howAccepted": "The citizens stoned and murdered the prophets sent unto them, bringing upon themselves total destruction by fire.",
    "passages": [
      "3 Nephi 9:10"
    ]
  }
};

// Backward-compatible alias for existing references
const PROPHET_ROLES = BOOK_OF_MORMON_FIGURES;

/**
 * Universal Dossier Resolver: returns the curated, scripturally verified dossier
 * for any location in the Book of Mormon Geography atlas.
 */
function getPlaceDossier(locId, loc) {
  const key = String(locId || "").toLowerCase();

  // Return global Book of Mormon dossier if no specific location or global requested
  if (!locId || key === "global" || key === "global_bom" || key === "introduction" || key === "book_of_mormon") {
    return Object.assign({}, PLACE_DOSSIERS["global_bom"]);
  }

  if (PLACE_DOSSIERS[key]) {
    const base = Object.assign({}, PLACE_DOSSIERS[key]);
    if (loc) {
      base.confidenceLevel = loc.confidenceLevel || 2;
      base.confidenceJustification = loc.confidenceJustification || '';
      base.relatedPlaces = loc.relatedPlaces || [];
      base.dispensation = loc.dispensation || 'nephite_lamanite';
      base.isIndeterminate = !!loc.isIndeterminate;
    }
    return base;
  }

  // Fallback for any unindexed landmarks: honest and scriptural (no fabricated sermons)
  const name = (loc && loc.name) || "This Scriptural Landmark";
  const region = (loc && loc.region) || "Ancient America";
  const summary = (loc && loc.summary) || "A geographical landmark recorded in the text of the Book of Mormon.";
  const passages = (loc && loc.refs) ? loc.refs.map(r => r.ref) : [];

  return {
    id: key,
    hasRecordedTeachings: false,
    whenTaught: "No Gospel Preaching Recorded in Scripture",
    teacher: "No Gospel Preaching Recorded in Scripture (Historical Landmark Only)",
    audience: "N/A — No Preaching or Sermons Recorded at this Site",
    whatWasTaught: `The Book of Mormon contains no record of gospel preaching, sermons, or doctrinal discourses at ${name}. This site is preserved in the sacred record for its historical, political, or geographical significance.`,
    whyTaught: "N/A — Recorded by ancient prophets and historians as part of the geography and history of the promised land.",
    context: `${summary} Situated within ${region}.`,
    howAccepted: "Since no gospel preaching took place at this location, no reception of doctrine occurred.",
    passages: passages,
    confidenceLevel: (loc && loc.confidenceLevel) || 2,
    confidenceJustification: (loc && loc.confidenceJustification) || '',
    relatedPlaces: (loc && loc.relatedPlaces) || [],
    dispensation: (loc && loc.dispensation) || 'nephite_lamanite',
    isIndeterminate: !!(loc && loc.isIndeterminate)
  };
}

// Global browser window attachment
if (typeof window !== "undefined") {
  window.BOOK_OF_MORMON_FIGURES = BOOK_OF_MORMON_FIGURES;
  window.PROPHET_ROLES = BOOK_OF_MORMON_FIGURES;
  window.PLACE_DOSSIERS = PLACE_DOSSIERS;
  window.getPlaceDossier = getPlaceDossier;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    BOOK_OF_MORMON_FIGURES,
    PROPHET_ROLES,
    PLACE_DOSSIERS,
    getPlaceDossier
  };
}
