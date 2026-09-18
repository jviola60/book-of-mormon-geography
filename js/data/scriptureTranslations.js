/**
 * Book of Mormon Scripture Translations & Plain English (7th Grade Level) Engine
 * Designed to provide accessible, clear modern English alongside standard scriptural text.
 */

const BOOK_OF_MORMON_TRANSLATIONS = {
  // =========================================================================
  // ZARAHEMLA & RIVER SIDON
  // =========================================================================
  "Mosiah 2:1-6": {
    plainEnglish: "King Benjamin asked all the people across the land to gather at the temple in Zarahemla so he could speak to them. A huge crowd came—so many that they could not all fit inside the temple. So the families pitched their tents all around the temple grounds, with the doors facing the temple so everyone could hear.",
    insight: "Families positioned their tents facing the sacred sanctuary to focus their entire households on the prophetic word, establishing temple-centered worship in the heart of Zarahemla."
  },
  "Mosiah 2:17": {
    plainEnglish: "Remember this: When you serve other people, you are really serving God.",
    insight: "King Benjamin's foundational principle: true discipleship and civic righteousness are measured by active, selfless service to our neighbors."
  },
  "Omni 1:12-14": {
    plainEnglish: "Mosiah was warned by the Lord to flee from the land of Nephi. Following God's guidance through the wilderness, his group discovered a large civilization called the people of Zarahemla. The people of Zarahemla celebrated with great joy because Mosiah brought the brass plates containing the sacred scriptures and genealogy of their ancestors.",
    insight: "The momentous union of the Nephites and Mulekites in Zarahemla, demonstrating how preserving sacred records saved a society from linguistic and spiritual decay."
  },
  "Alma 2:15": {
    plainEnglish: "The rebel army called the Amlicites marched onto the Hill Amnihu, on the east side of the River Sidon next to Zarahemla, and attacked the Nephite forces.",
    insight: "The strategic eastern heights overlooking River Sidon served as a critical battlefield protecting the capital of Zarahemla from rebel takeover."
  },
  "Helaman 13:2-4": {
    plainEnglish: "Samuel, a faithful Lamanite prophet, came to Zarahemla to preach repentance. When the people cast him out, he was about to return home, but the voice of the Lord commanded him to turn back and prophesy whatever came into his heart. Because they wouldn't let him enter the city gates, he climbed onto the city wall, stretched out his hands, and boldly called the nation to repent.",
    insight: "Samuel's courage atop Zarahemla's high fortifications broke ethnic and social barriers, proclaiming the exact signs of the Savior's birth and crucifixion."
  },
  "3 Nephi 8:8": {
    plainEnglish: "During the massive storms and cataclysms that occurred at Christ's death, the great city of Zarahemla caught fire and burned completely.",
    insight: "The fiery destruction of the capital fulfilled Samuel the Lamanite's solemn warnings when the city rejected the prophets."
  },
  "4 Nephi 1:8": {
    plainEnglish: "After the Savior visited them, the people rebuilt the city of Zarahemla, and unbroken peace spread across the entire land.",
    insight: "Zion society after the Savior's ministry: peaceful cooperation, shared resources, and total harmony where there were no rich or poor."
  },

  // =========================================================================
  // ANTIONUM & THE ZORAMITES (ALMA 31–35, ALMA 43)
  // =========================================================================
  "Alma 31:1": {
    plainEnglish: "Alma received troubling reports that a group of Nephites called the Zoramites were distorting the gospel. A man named Zoram, who was their leader, was leading the people into pride, false doctrine, and bowing down to idols.",
    insight: "The origin of the Zoramite apostasy: founded and led by Zoram, they separated themselves from the Church in Zarahemla and substituted divine truth with elitist self-justification."
  },
  "Alma 31:3": {
    plainEnglish: "The Zoramites gathered and moved away into a region called Antionum. This land was located east of Zarahemla, stretched nearly to the eastern seashore, lay just south of the land of Jershon, and bordered the southern wilderness filled with Lamanites.",
    insight: "The precise geographic placement of Antionum: situated east of River Sidon and south of Jershon, it became a perilous eastern borderland between the Nephite nation and Lamanite territory."
  },
  "Alma 31:12-23": {
    plainEnglish: "Alma and his missionary companions watched in sorrow as the Zoramites climbed one by one atop a tall stand called the Rameumptom. Each person raised their hands toward heaven and thanked God that they were elected and separated from all other people, believing only they would be saved.",
    insight: "The Rameumptom stands as scripture's starkest warning against spiritual pride, exclusive religious superiority, and neglecting the needy."
  },
  "Alma 32:1-4": {
    plainEnglish: "The wealthy Zoramite rulers expelled the poor working-class people from their synagogues because of their coarse clothing. These humble outcasts gathered around Alma atop Hill Onidah in Antionum, eager to learn how they could worship God.",
    insight: "Spiritual readiness born of worldly rejection: while the proud were blinded by their wealth on the Rameumptom, the cast-out poor on Hill Onidah were prepared to plant the seed of faith."
  },
  "Alma 32:4": {
    plainEnglish: "A great multitude of humble, impoverished people gathered around Alma upon the Hill Onidah in Antionum, asking how they could pray and worship since they were forbidden to enter the synagogues.",
    insight: "Alma revealed that true worship requires no elevated stand or ornate building; God hears the sincere prayers of the humble heart in any place."
  },
  "Alma 32:28": {
    plainEnglish: "Alma invited them to compare God's word to a seed: if you make room in your heart and plant it through faith, not resisting the Holy Spirit, it will begin to swell, sprout, and grow, giving you undeniable proof that the word is good and true.",
    insight: "The scientific spiritual experiment: Alma outlines the tangible, internal evidence of gospel truth through active nourishment and testing of the word."
  },
  "Alma 35:6-9": {
    plainEnglish: "When the poor Zoramites accepted the gospel, the rulers of Antionum drove them out of the land. They fled north into Jershon, where the People of Ammon welcomed them with open arms, feeding and clothing them. Enraged, the Zoramite rulers entered into a military pact with the Lamanites to wage war against the Nephites.",
    insight: "Christlike sanctuary vs. apostate vengeance: the converted Lamanites in Jershon gave refuge to the outcast Zoramites, which triggered the massive international conflict of Alma 43."
  },
  "Alma 43:5": {
    plainEnglish: "Thousands of Lamanite warriors marched into the land of Antionum, which is the land of the Zoramites. A fierce Nephite dissenter named Zerahemnah was the supreme commander of this entire invading army.",
    insight: "Alma 43:5 explicitly identifies Antionum as 'the land of the Zoramites'. Note on leaders: Zoram was the religious leader who founded the sect (Alma 31:1); Zerahemnah was the supreme military general who commanded the combined Lamanite/Zoramite invasion forces."
  },
  "Alma 43:6-8": {
    plainEnglish: "Zerahemnah appointed Zoramites and Amalekites as captains over all the Lamanite forces because their intense hatred for the Nephites would make them fight with ruthless determination to conquer and enslave.",
    insight: "Apostates weaponized: Zerahemnah strategically exploited the bitter hostility of Nephite dissenters to lead Lamanite soldiers against the church and free institutions."
  },
  "Alma 43:15": {
    plainEnglish: "The Lamanites and Zoramites gathered their forces in Antionum, while Captain Moroni placed his Nephite armies in the borders of Jershon to protect the peaceful People of Ammon.",
    insight: "Captain Moroni's defensive positioning: stationing forces in Jershon prevented Zerahemnah from slaughtering the pacifist Ammonites, forcing the invaders to detour around through Manti."
  },

  // =========================================================================
  // TITLE PAGE & CORE PROPHECIES OF CHRIST'S COMING
  // =========================================================================
  "Title Page": {
    plainEnglish: "Written to show the remnant of Israel the great things God did for their ancestors, to help them understand His eternal covenants and know they are not cast off forever, and to convince both Jew and Gentile that Jesus is the Christ, the Eternal God, who shows Himself to all nations.",
    insight: "The three foundational purposes of the Book of Mormon: (1) Remembering God's past mercies; (2) Knowing His eternal covenants with Israel; and (3) Testifying that Jesus Christ is the Savior of all mankind."
  },
  "1 Nephi 10:4-6": {
    plainEnglish: "Lehi prophesied that exactly 600 years after leaving Jerusalem, God would raise up a Messiah among the Jews—a Savior and Redeemer of the world. He told how this Messiah would be baptized by John in the Jordan River and die to redeem all mankind.",
    insight: "Early prophetic timeline: Lehi precisely dates the coming of Jesus Christ six centuries before His mortal birth."
  },
  "2 Nephi 25:26": {
    plainEnglish: "We talk about Christ, we celebrate Christ, we preach about Christ, and we prophesy about Christ. We write these words so our children will know where to look to receive forgiveness for their sins.",
    insight: "The core Christ-centered heart of the Book of Mormon: every prophet, chapter, and sermon is written to point souls to the Savior."
  },
  "Mosiah 3:5-8": {
    plainEnglish: "King Benjamin told his people what an angel had revealed to him: the Lord Almighty will come down from heaven to live among mortal men. He will heal the sick, raise the dead, bleed from every pore through great anguish, die on a cross, and rise from the dead on the third day.",
    insight: "Direct angelic revelation to King Benjamin: foretelling the Savior's agony in Gethsemane and His bodily resurrection."
  },
  "Alma 7:11-13": {
    plainEnglish: "Alma prophesied that the Son of God would take upon Himself our pains, sicknesses, and weaknesses so that His heart would be filled with mercy and He would know how to comfort and rescue us according to our mortal struggles.",
    insight: "The intimate Atonement: Christ suffered not only for our sins, but also for our grief, illnesses, and sorrows so He could perfectly comfort us."
  },

  // =========================================================================
  // BOUNTIFUL & CHRIST'S VISITATION (3 NEPHI 11 TO 30)
  // =========================================================================
  "3 Nephi 11:1-11": {
    plainEnglish: "A crowd of about 2,500 Nephites had gathered around the temple in the Land Bountiful. While they were discussing the miraculous signs of Christ's death, they heard a quiet, gentle voice speaking from heaven. It wasn't loud or harsh, but it pierced them to their very core: 'Behold my Beloved Son, in whom I am well pleased—hear ye him.' Looking up toward heaven, they saw a Man descending in a white robe. He stood in their midst and said: 'Look, I am Jesus Christ, whom the prophets testified would come into the world. I am the light and life of the world.'",
    insight: "The climax of the Book of Mormon: the resurrected Lord descends from heaven at the Temple in Bountiful, announcing Himself as the Messiah foretold by all prophets."
  },
  "3 Nephi 11:14-17": {
    plainEnglish: "Jesus invited the multitude: 'Stand up and come to Me, feel the nail prints in My hands and feet, and put your hands into My side, so you can know for yourself that I am the God of Israel and was slain for the sins of the world.' One by one, the entire crowd went forward and witnessed His reality with their own eyes and hands. They shouted 'Hosanna!' and worshipped at His feet.",
    insight: "Personal, individual witness: the Savior ministers to thousands 'one by one,' proving His physical resurrection and boundless personal love."
  },
  "3 Nephi 11:31-41": {
    plainEnglish: "Jesus declared His doctrine plainly: the Father commands all people everywhere to repent, believe in Christ, and be baptized in water. Anyone who builds upon this doctrine builds upon Christ's solid rock, and the gates of hell will never overcome them.",
    insight: "The pure Doctrine of Christ: faith, repentance, baptism, and the Holy Ghost, with no contention or philosophical speculation allowed."
  },
  "3 Nephi 12:1-16": {
    plainEnglish: "Jesus gave the Sermon at the Temple, teaching the Beatitudes: blessed are the humble, the peacemakers, and those who hunger for righteousness. He called His disciples to be the salt of the earth and the light of the world, letting their good works inspire others to praise their Heavenly Father.",
    insight: "The Sermon at the Temple delivers the celestial standard of Christ's kingdom, calling believers to live as true disciples."
  },
  "3 Nephi 13:5-13": {
    plainEnglish: "Jesus taught His followers how to pray sincerely in private rather than showing off before others. He gave them the Lord's Prayer: honoring God's holy name, seeking His kingdom and will on earth, asking for daily bread, and seeking forgiveness while forgiving others.",
    insight: "Pure communication with God: Christ emphasizes secret prayer, sincere devotion, and reciprocal forgiveness."
  },
  "3 Nephi 14:21-27": {
    plainEnglish: "Jesus warned that merely saying 'Lord, Lord' is not enough—we must actually do Heavenly Father's will. Those who hear His words and live them are like a wise man who built his home on solid rock; when rains poured and winds blew, the house stood firm.",
    insight: "The parable of the two foundations: discipleship requires active obedience to Christ rather than lip service."
  },
  "3 Nephi 15:1-9": {
    plainEnglish: "Jesus told them that the old Law of Moses was completely fulfilled in Him. He is the law and the light, and those who look to Him and endure to the end will receive eternal life. He then revealed that the Nephites were the 'other sheep' He had spoken of to the apostles in Jerusalem.",
    insight: "Fulfillment of the Law: Christ is the fulfillment of centuries of animal sacrifice and Mosaic rituals, revealing the Nephites as His 'other sheep' (John 10:16)."
  },
  "3 Nephi 16:1-5": {
    plainEnglish: "Jesus explained that He had even more 'other sheep' in other parts of the world—the scattered lost tribes of Israel—whom He was commanded by the Father to visit and teach, so that all of Israel would hear His voice and be united under one Shepherd.",
    insight: "The universal scope of the Savior's ministry: Christ ministers to all scattered branches of Israel across the globe."
  },
  "3 Nephi 17:5-10": {
    plainEnglish: "Seeing that the people were in tears and didn't want Him to leave, Jesus was moved with deep compassion. He asked them to bring forward everyone who was sick, blind, lame, deaf, or afflicted in any way, and He healed every single one of them.",
    insight: "Compassion preceding miracles: Christ responds to the silent longings of the multitude with total, compassionate physical and emotional healing."
  },
  "3 Nephi 17:21-25": {
    plainEnglish: "Jesus took their little children one by one, blessed each of them, wept for joy, and prayed to the Father for them. As the parents watched, angels descended from heaven surrounded by fire, encircling the children in divine light and ministering to them.",
    insight: "The divine worth of children: Christ establishes little children as the purest example of holiness, enveloped by heavenly angels in fire."
  },
  "3 Nephi 18:1-14": {
    plainEnglish: "Jesus gave power to His chosen disciples to break bread and bless wine for the sacrament. He told the people to eat the bread in memory of His body and drink the wine in memory of His blood, promising that those who always remember Him will always have His Spirit.",
    insight: "The memorial ordinance of the Sacrament: renewing baptismal covenants and securing the constant companionship of the Holy Ghost."
  },
  "3 Nephi 18:28-32": {
    plainEnglish: "Jesus commanded the disciples to protect the holiness of the sacrament, but told them never to cast anyone out of their meetings. Instead, they should continue to minister, pray for them, and hold family prayers in His name.",
    insight: "Unconditional pastoral love: even when someone struggles spiritually, Christ commands His followers to keep welcoming and praying for them."
  },
  "3 Nephi 19:10-25": {
    plainEnglish: "Nephi went down into the water and baptized the twelve disciples. When they came up, the Holy Ghost fell upon them like fire. Jesus appeared again, smiled upon them, and knelt in mighty prayer, thanking the Father for their great faith.",
    insight: "The foundation of the Church: the twelve disciples are baptized, receive the Holy Ghost, and are sanctified in Christ's presence."
  },
  "3 Nephi 20:10-29": {
    plainEnglish: "Jesus proclaimed the Father's eternal covenant with the House of Israel: in the latter days, the scattered remnant of Jacob will be gathered, the scriptures will come forth, and a holy city—the New Jerusalem—will be built in this land.",
    insight: "The gathering of Israel: Christ details the fulfillment of the Abrahamic covenant in the Promised Land."
  },
  "3 Nephi 22:1-17": {
    plainEnglish: "Jesus quoted the words of Isaiah: even if mountains crumble and hills are removed, God's loving kindness and His covenant of peace will never be taken away from His children. No weapon formed against His people will ever prosper.",
    insight: "God's unbreakable covenant loyalty: quoting Isaiah 54, Christ promises everlasting mercy and protection to Zion."
  },
  "3 Nephi 23:1-5": {
    plainEnglish: "Jesus commanded the multitude to search the scriptures diligently, declaring: 'Great are the words of Isaiah.' He then checked their written records and pointed out that Samuel the Lamanite's prophecy about resurrected saints appearing to many had not been written down, commanding Nephi to record it immediately.",
    insight: "Scriptural accuracy and inclusion: Christ commands careful study of Isaiah and ensures the prophetic fulfillment of Samuel the Lamanite is preserved."
  },
  "3 Nephi 24:1-3": {
    plainEnglish: "Jesus gave them the sacred prophecies of Malachi: the Lord will suddenly come to His temple like a refiner's fire, purifying the sons of Levi so they can offer an offering in righteousness.",
    insight: "The refiner's fire: Christ preserves Malachi's prophecies of spiritual purification for future generations."
  },
  "3 Nephi 25:1-6": {
    plainEnglish: "Jesus shared Malachi's vision of the last days: the proud will be burned like stubble, but to those who revere His name, the Sun of Righteousness will arise with healing in His wings. He promised to send Elijah before the great day of the Lord to turn the hearts of fathers to their children.",
    insight: "Elijah's mission: sealing families across generations, connecting ancestors and children through sacred temple ordinances."
  },
  "3 Nephi 26:1-16": {
    plainEnglish: "Jesus expounded all things to them from the very beginning of the world until His second coming in glory. He taught the children, loosed their tongues, and they began to speak marvelous things that amazed their parents.",
    insight: "The fulness of revelation: Christ opens the mysteries of eternity, and even nursing infants declare the wonders of God."
  },
  "3 Nephi 27:1-22": {
    plainEnglish: "When the disciples asked what name to call the church, Jesus answered: 'How can it be My church unless it is called in My name? If it's called after Moses, it's Moses' church; if after a man, it's a man's church. But if it's called in My name, it is My church, if they are built on My gospel.' He then defined the Gospel: that He was lifted up on the cross to draw all people to Him.",
    insight: "The identity and name of the Church: Christ insists His Church must bear His sacred name and be built on His Gospel of faith, repentance, and baptism."
  },
  "3 Nephi 28:1-15": {
    plainEnglish: "Jesus asked each of His twelve disciples what they desired after His departure. Nine wanted to return quickly to His kingdom, but three desired to live on earth until Christ's Second Coming to bring souls to Him. Jesus granted both desires, blessing the Three Nephites with translation so they would never taste death or pain.",
    insight: "The holy ministry of the Three Nephites: transfigured servants of God who continue ministering among humanity throughout all generations."
  },
  "3 Nephi 29:1-9": {
    plainEnglish: "Mormon declared to future readers: when you see the Book of Mormon come forth among the Gentiles, know that God's ancient covenant with Israel is rolling forward and being fulfilled, and nobody can stop His work.",
    insight: "The Book of Mormon as the sign: its appearance in the latter days is the divine signal that the gathering of Israel has begun."
  },
  "3 Nephi 30:1-2": {
    plainEnglish: "Mormon delivers the Lord's final invitation to all Gentiles: turn away from wickedness, deceit, and pride, repent with all your heart, be baptized in the name of Jesus Christ, and be counted among the House of Israel.",
    insight: "Universal invitation to salvation: everyone—regardless of ethnic heritage—can enter the covenant family of Israel through repentance and baptism in Christ."
  },
  "Alma 52:9": {
    plainEnglish: "Captain Moroni sent orders to Teancum to fortify the Land Bountiful and secure the narrow mountain pass that led into the Land Northward, preventing the Lamanites from surrounding them on all sides.",
    insight: "Bountiful was the military keystone defending the narrow neck of land; losing it would have divided the Nephite nation in two."
  },

  // =========================================================================
  // WATERS OF MORMON
  // =========================================================================
  "Mosiah 18:8-10": {
    plainEnglish: "Alma said to the believers: 'Here are the Waters of Mormon. If you truly want to come into God's fold and be called His people, you must be willing to bear one another's heavy burdens, comfort those who are sad, and stand as witnesses of God everywhere and at all times. If this is your heart's desire, what keeps you from being baptized in the name of the Lord?'",
    insight: "The classic baptismal covenant: community solidarity, empathy, mutual care, and lifelong dedication to God's work."
  },
  "Mosiah 18:14-16": {
    plainEnglish: "Alma walked into the water holding Helam, prayed for God's Spirit to rest upon them, and both were immersed in the pure fountain. Helam came up filled with the Holy Spirit. Alma then baptized 204 souls at the Waters of Mormon, and they were filled with the grace of God.",
    insight: "Sanctuary in the wilderness: a secluded natural spring surrounded by thickets became one of the most beloved and sacred sites in scripture."
  },
  "Mosiah 18:30": {
    plainEnglish: "How beautiful in the eyes of the believers are the Waters of Mormon, the Forest of Mormon, and the Place of Mormon! There they first came to the knowledge of their Redeemer, and how blessed are they forever.",
    insight: "Sacred geography: physical places where spiritual rebirth occurs forever remain holy in the hearts of the covenant people."
  },

  // =========================================================================
  // WATERS OF SEBUS & AMMON
  // =========================================================================
  "Alma 17:26-29": {
    plainEnglish: "As Ammon was tending King Lamoni's royal sheep at the Waters of Sebus, a gang of Lamanite plunderers scattered the flock to steal them. The king's other servants began weeping in terror, knowing the king would execute them for losing the animals. But Ammon saw this as a God-given opportunity to win their hearts and lead them to the gospel.",
    insight: "Transforming crisis into opportunity: Ammon replaces fear with faith, using humble service to open the hearts of a hostile nation."
  },
  "Alma 17:36-39": {
    plainEnglish: "Ammon stood alone against the bandits with his sling and stones, knocking down their leaders from a distance. When they rushed him with clubs, he drew his sword and cut off the arms of anyone who raised a weapon against him. Astonished by his strength, the rest of the gang fled in panic.",
    insight: "The dramatic defense at Sebus: Ammon's defense of life and property stunned the Lamanites, demonstrating divine power in a humble shepherd."
  },

  // =========================================================================
  // AMMONIHAH & DELIVERANCE
  // =========================================================================
  "Alma 8:14-18": {
    plainEnglish: "After being rejected and spit upon in the corrupt city of Ammonihah, Alma left feeling weighed down with sorrow. But an angel of the Lord appeared and told him: 'Lift up your head and rejoice! Go back to Ammonihah and tell the people that unless they repent, the Lord will completely destroy their city.' Alma immediately turned around and re-entered through another gate.",
    insight: "Instant obedience: Alma sets aside personal rejection and exhaustion to obey divine instruction without hesitation."
  },
  "Alma 14:26-28": {
    plainEnglish: "Bound in chains and starved in the Ammonihah dungeon, Alma cried out: 'How long, O Lord, shall we suffer this great trial? Give us strength according to our faith in Christ!' Breaking the cords from their hands, Alma and Amulek stood up. A massive earthquake shook the prison to its foundations, the stone walls collapsed on top of their tormentors, and Alma and Amulek walked out into the streets completely unharmed.",
    insight: "Deliverance through faith: divine power shatters stone prison walls, proving that God preserves His servants until their mission is finished."
  },
  "Alma 16:2-3": {
    plainEnglish: "A Lamanite army made a surprise march into the borders and destroyed the wicked city of Ammonihah in a single day, leaving not one soul alive, exactly as Alma had prophesied.",
    insight: "The 'Desolation of Nehors': Ammonihah's total destruction demonstrated the fatal consequence of unrepented corruption and cruelty."
  },

  // =========================================================================
  // CITY OF NEPHI & LEHI-NEPHI
  // =========================================================================
  "2 Nephi 5:15-16": {
    plainEnglish: "Nephi taught his people to work with timber, iron, copper, brass, steel, and gold. He also built a beautiful temple after the pattern of Solomon's temple in Jerusalem, though not with as many precious stones since they were not found in that land. The workmanship was exceptionally fine.",
    insight: "Re-creating the covenant sanctuary: the early Nephites centered their new civilization on temple worship and productive industry."
  },
  "Mosiah 11:20-25": {
    plainEnglish: "The prophet Abinadi went among the people of King Noah in the city of Nephi, warning them: 'Thus says the Lord: Unless this people repents of their wicked ways and turns from their sins, they will be brought into bondage and smitten by their enemies.'",
    insight: "Speaking truth to corrupt power: Abinadi fearlessly confronted King Noah's lavish court, calling the nation back to the Ten Commandments."
  },
  "Mosiah 17:13-20": {
    plainEnglish: "King Noah's guards took Abinadi, tied him up, and scourged his skin with bundles of burning sticks until he died in the flames. As the fire engulfed him, Abinadi prophesied that his persecutors would suffer a similar fiery death, crying out with his final breath: 'O God, receive my soul!'",
    insight: "Sealing testimony with blood: Abinadi's martyrdom became the catalyst that converted Alma the Elder and established the Church of Christ."
  },

  // =========================================================================
  // HILL CUMORAH / RAMAH
  // =========================================================================
  "Mormon 6:6": {
    plainEnglish: "Knowing this would be the final, tragic battle of our nation, and having been commanded by the Lord not to let the sacred records fall into enemy hands, I, Mormon, made this abridgment from the large plates of Nephi. I buried all our ancient records in the Hill Cumorah, except for these few gold plates which I handed over to my son Moroni.",
    insight: "The ultimate repository of sacred truth: Mormon conceals centuries of prophetic records inside Cumorah, preserving them for our modern day."
  },
  "Moroni 10:3-5": {
    plainEnglish: "When you read these records, remember how merciful the Lord has been to humanity from the creation of Adam until now, and think deeply about it in your heart. Ask God, the Eternal Father, in the name of Christ, if these things are true. If you ask with a sincere heart, real intent, and faith in Christ, He will show you the truth of it by the power of the Holy Ghost. And by the Holy Ghost you may know the truth of all things.",
    insight: "Moroni's timeless promise: the universal spiritual formula for discovering divine truth through sincere prayer and the witness of the Holy Ghost."
  },

  // =========================================================================
  // MOUNT SHELEM & JAREDITE ORIGINS
  // =========================================================================
  "Ether 3:1-6": {
    plainEnglish: "The Brother of Jared climbed to the top of an exceedingly high mountain called Mount Shelem. He melted sixteen small, clear stones out of a rock and prayed: 'O Lord, touch these stones with Your finger so they will shine and give light inside our dark barges as we cross the ocean.' When the Lord reached out His hand, the Brother of Jared saw the finger of the Lord, looking like the finger of a man, of flesh and blood.",
    insight: "The power of exceeding faith: the Brother of Jared's belief pierced the heavenly veil, beholding the premortal spirit body of Jesus Christ."
  },

  // =========================================================================
  // DEFENSES & CAPTAIN MORONI
  // =========================================================================
  "Alma 46:12-13": {
    plainEnglish: "Captain Moroni tore his military coat, took a piece of the cloth, and wrote upon it: 'In memory of our God, our religion, and freedom, our peace, our wives, and our children.' He fastened the cloth to the end of a tall pole and called it the Title of Liberty. Then he strapped on his armor, bowed to the earth, and prayed mightily for the blessing of liberty upon the land.",
    insight: "The Title of Liberty: Moroni rallies a divided nation by reminding them of their sacred core values—faith, family, and divine freedom."
  },
  "Alma 49:18-24": {
    plainEnglish: "The Lamanite army came expecting to easily capture the city of Ammonihah as they had in previous years. But to their utter amazement, Moroni had built immense earth ramparts, deep trenches, and timber parapets. When the attackers tried to leap the ditches and climb the walls, the Nephite guards shot them down with arrows and stones, driving the invaders away in complete defeat.",
    insight: "Moroni's revolutionary defense engineering: prepared physical fortifications mirrored spiritual defenses against evil."
  },
  // =========================================================================
  // CORE DISPENSATIONAL SCRIPTURES ACROSS THE BOOK OF MORMON
  // =========================================================================
  "1 Nephi 3:7": {
    plainEnglish: "I told my father: I will go and do whatever the Lord commands, because I know that God never gives a commandment without preparing a way for us to accomplish it.",
    insight: "Nephi's foundational motto of obedience and unwavering faith that God empowers those who follow His voice."
  },
  "2 Nephi 2:25": {
    plainEnglish: "Adam fell so that humans could exist on earth; and humans exist so that they might experience true joy.",
    insight: "Lehi's revolutionary doctrine on the purpose of mortal existence: happiness, agency, and eternal growth through Christ."
  },
  "2 Nephi 31:20": {
    plainEnglish: "You must press forward with total steadfastness in Christ, filled with bright hope and genuine love for God and all people. If you keep pressing forward, feasting on Christ's words, and endure to the very end, the Father promises you will receive eternal life.",
    insight: "Nephi's final summation of the Doctrine of Christ: lifelong faith, feasting on scripture, and love for all humanity."
  },
  "Alma 32:21": {
    plainEnglish: "Faith does not mean knowing everything with 100% certainty. Having faith means having hope in things that are true even though you cannot physically see them yet.",
    insight: "Alma's definition of faith as an active experiment: testing the spiritual seed by planting it in your heart."
  },
  "Alma 46:12": {
    plainEnglish: "Moroni tore a piece of his military coat and wrote on it: 'In memory of our God, our religion, and freedom, and our peace, our wives, and our children.' He tied the cloth to a pole and raised it as the Title of Liberty.",
    insight: "The standard of liberty: defending home, family, and religious freedom against tyrannical usurpation."
  },
  "Helaman 5:12": {
    plainEnglish: "Remember, my sons, remember that you must build your life's foundation upon the rock of our Redeemer, who is Jesus Christ. When the devil unleashes his fiercest storms and whirlwinds, they will have no power to drag you down, because you are anchored on a solid rock that cannot fall.",
    insight: "Helaman's charge to his sons: Christ as our only immovable foundation against moral whirlwinds and spiritual temptation."
  },
  "Ether 12:27": {
    plainEnglish: "If people come to Me, I will show them their weaknesses. I allow people to experience weakness so they will be humble. My grace is completely enough for anyone who humbles themselves before Me; if they humble themselves and trust Me, I will turn their weaknesses into strengths.",
    insight: "Divine grace transforms human limitation: weakness acknowledged in humility becomes divine strength through Christ."
  },
  "Moroni 7:47": {
    plainEnglish: "Charity is the pure, unconditional love of Christ, and it never fails. Whoever possesses this love at the final judgment will be blessed and safe with Him forever.",
    insight: "Mormon's greatest sermon: pure charity as the highest Christian virtue and the defining attribute of discipleship."
  },
  "Moroni 10:4-5": {
    plainEnglish: "When you read these records, I urge you to ask God, the Eternal Father, in the name of Christ, if they are true. If you ask with an honest heart, real intent, and faith in Christ, He will prove the truth of it to you through the power of the Holy Ghost. And by the Holy Ghost, you can know the truth of all things.",
    insight: "Moroni's timeless promise: personal spiritual revelation through the Holy Ghost confirms the truth of the Book of Mormon."
  }
};

/**
 * Intelligent rule-based engine to modernize any Book of Mormon verse into clear 7th-grade English.
 */
function modernizeToPlainEnglish(rawText) {
  if (!rawText || typeof rawText !== "string") return "";

  let text = rawText.trim();

  // Remove common repetitive opening phrases
  text = text.replace(/^And it came to pass that /i, "");
  text = text.replace(/^Now it came to pass that /i, "");
  text = text.replace(/^And now it came to pass that /i, "");
  text = text.replace(/^Behold, it came to pass that /i, "");
  text = text.replace(/and it came to pass that /gi, "then ");
  text = text.replace(/it came to pass that /gi, "then ");
  text = text.replace(/\bAnd now behold\b/gi, "Now look");
  text = text.replace(/\bAnd now\b/gi, "Now");
  text = text.replace(/\bfor behold\b/gi, "because");
  text = text.replace(/\bbehold\b/gi, "see");

  // Archaic pronouns and contractions
  text = text.replace(/\bthou art\b/gi, "you are");
  text = text.replace(/\bthou hast\b/gi, "you have");
  text = text.replace(/\bthou shalt\b/gi, "you will");
  text = text.replace(/\bthou wilt\b/gi, "you will");
  text = text.replace(/\bthou\b/gi, "you");
  text = text.replace(/\bthee\b/gi, "you");
  text = text.replace(/\bthine\b/gi, "your");
  text = text.replace(/\bthy\b/gi, "your");
  text = text.replace(/\bye\b/gi, "you");

  // Archaic verbs & helpers
  text = text.replace(/\bspake\b/gi, "spoke");
  text = text.replace(/\bsaith\b/gi, "says");
  text = text.replace(/\bhath\b/gi, "has");
  text = text.replace(/\bdoth\b/gi, "does");
  text = text.replace(/\bdidst\b/gi, "did");
  text = text.replace(/\bhearken\b/gi, "listen closely");
  text = text.replace(/\bhearkened\b/gi, "listened");
  text = text.replace(/\bunto\b/gi, "to");
  text = text.replace(/\bwherefore\b/gi, "therefore");
  text = text.replace(/\binsomuch that\b/gi, "so much that");
  text = text.replace(/\bperadventure\b/gi, "perhaps");
  text = text.replace(/\bstraightway\b/gi, "immediately");
  text = text.replace(/\bexceeding\b/gi, "very");
  text = text.replace(/\bexceedingly\b/gi, "greatly");
  text = text.replace(/\bwhosoever\b/gi, "whoever");
  text = text.replace(/\bwhence\b/gi, "from where");
  text = text.replace(/\bhither\b/gi, "here");
  text = text.replace(/\bthither\b/gi, "there");
  text = text.replace(/\bwither\b/gi, "dry up");
  text = text.replace(/\bcleave\b/gi, "hold fast");
  text = text.replace(/\bwo\b/gi, "sorrow and warning");
  text = text.replace(/\blest\b/gi, "in case");
  text = text.replace(/\bsave it were\b/gi, "except for");
  text = text.replace(/\bsave\b/gi, "except");

  // Normalize capitalization of first character
  text = text.charAt(0).toUpperCase() + text.slice(1);

  return text;
}

/**
 * Public Scripture Translation Interface
 */
const SCRIPTURE_TRANSLATIONS = {
  get(ref, standardText) {
    if (!ref) {
      return {
        standard: standardText || "",
        plainEnglish: modernizeToPlainEnglish(standardText || ""),
        insight: "Sacred scripture from the Book of Mormon."
      };
    }

    const cleanRef = ref.trim();

    // Check direct match in pre-curated translations
    if (BOOK_OF_MORMON_TRANSLATIONS[cleanRef]) {
      const match = BOOK_OF_MORMON_TRANSLATIONS[cleanRef];
      return {
        standard: standardText || "",
        plainEnglish: match.plainEnglish,
        insight: match.insight
      };
    }

    // Check partial citation match (e.g. "Mosiah 2" matching "Mosiah 2:1-6")
    for (const [key, val] of Object.entries(BOOK_OF_MORMON_TRANSLATIONS)) {
      if (cleanRef.startsWith(key) || key.startsWith(cleanRef)) {
        return {
          standard: standardText || "",
          plainEnglish: val.plainEnglish,
          insight: val.insight
        };
      }
    }

    // Fallback: use dynamic 7th-grade modern English engine
    return {
      standard: standardText || "",
      plainEnglish: modernizeToPlainEnglish(standardText || ""),
      insight: `Key verse referenced in connection with ancient Book of Mormon events (${cleanRef}).`
    };
  },

  modernizeToPlainEnglish
};

// Global browser window attachment
if (typeof window !== "undefined") {
  window.BOOK_OF_MORMON_TRANSLATIONS = BOOK_OF_MORMON_TRANSLATIONS;
  window.SCRIPTURE_TRANSLATIONS = SCRIPTURE_TRANSLATIONS;
}
