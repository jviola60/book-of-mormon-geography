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
  // BOUNTIFUL & TEMPLE VISITATION
  // =========================================================================
  "3 Nephi 11:1-10": {
    plainEnglish: "A crowd of about 2,500 Nephites had gathered around the temple in the Land Bountiful. While they were discussing the miraculous signs of Christ's death, they heard a quiet, gentle voice speaking from heaven. It wasn't loud or harsh, but it pierced them to their very core. Looking up toward heaven, they saw a Man descending in a white robe. He stood in their midst and said: 'Look, I am Jesus Christ, whom the prophets testified would come into the world.'",
    insight: "The climax of the Book of Mormon: the resurrected Lord descends from heaven at the Temple in Bountiful, inviting each person to feel the wounds in His hands and side."
  },
  "3 Nephi 11:14-15": {
    plainEnglish: "Jesus invited the multitude: 'Stand up and come to Me, feel the nail prints in My hands and feet, and put your hands into My side, so you can know for yourself that I am the God of Israel and was slain for the sins of the world.' One by one, the entire crowd went forward and witnessed His reality with their own eyes and hands.",
    insight: "Personal, individual witness: the Savior ministers to thousands 'one by one,' proving His physical resurrection and boundless love."
  },
  "3 Nephi 17:1-7": {
    plainEnglish: "Jesus looked at the crowd and saw they were crying because they didn't want Him to leave yet. Filled with deep compassion, He told them: 'Bring forward anyone who is sick, blind, lame, deaf, or suffering from any illness, and I will heal them.'",
    insight: "Compassion preceding miracles: Christ responds to the silent tears of the people with universal physical and emotional healing."
  },
  "3 Nephi 17:21-24": {
    plainEnglish: "Jesus took their little children one by one, blessed each of them, and prayed to the Father for them. As the parents watched in tears of joy, angels descended from heaven surrounded by fire, encircling the children in a circle of light and ministering to them.",
    insight: "The holiness of children: the Savior showcases children as the true model for entering the Kingdom of God, guarded by heavenly hosts."
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
  "Alma 53:20-21": {
    plainEnglish: "The 2,000 young men who marched under Helaman were exceptionally brave, strong, and active. More than that, they were young men of absolute integrity who kept all of God's commandments with strict obedience at all times.",
    insight: "The Stripling Warriors: moral integrity, exact obedience, and mothers' faith formed an impenetrable spiritual shield on the battlefield."
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
