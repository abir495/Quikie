const courseData = {
    modules: [
        {
            id: "m1",
            number: "Module I",
            title: "In the Beginning",
            topics: [
                {
                    title: "1.1 Introduction to the English Language",
                    priority: "background",
                    content: `
                        <div class="prose">
                            English belongs to the West Germanic branch of the Indo-European language family. It is today spoken as a first or second language by over 1.5 billion people worldwide, making it the most widely used language in history.
                        </div>
                        <div class="prose">
                            Yet English as we know it emerged only gradually over fifteen centuries of invasion, migration, and cultural contact. The study of how a language changes over time is called <strong>diachronic linguistics</strong> (from Greek <em>dia</em> = through, <em>chronos</em> = time). This course adopts a diachronic approach, tracing English from its Germanic roots through Old English, Middle English, Early Modern English, and into the contemporary global language it has become.
                        </div>
                        <div class="box box-note">
                            <div class="box-icon">💡</div>
                            <div class="box-body">
                                <div class="box-label">Key Note</div>
                                <div class="box-text"><strong>DIACHRONIC:</strong> studying language change across time (contrast with <em>SYNCHRONIC</em>, which studies language at a single point in time). Your course is explicitly diachronic.</div>
                            </div>
                        </div>
                    `
                },
                {
                    title: "1.2 Proto-Indo-European (PIE) Family of Languages",
                    priority: "high",
                    content: `
                        <div class="box box-tip">
                            <div class="box-icon">🎯</div>
                            <div class="box-body">
                                <div class="box-label">Exam Tip</div>
                                <div class="box-text">This is ALREADY asked in your exam paper as Q2 (10 marks). You MUST be able to draw the full family tree and discuss each major branch with at least one modern language example.</div>
                            </div>
                        </div>

                        <div class="sec-head">What is Proto-Indo-European?</div>
                        <div class="prose">
                            Proto-Indo-European (PIE) is the reconstructed common ancestor of a large family of languages spoken across Europe, Iran, and the Indian subcontinent. No written records of PIE exist — linguists reconstructed it during the 19th century by comparing similarities across its daughter languages. Sir William Jones famously observed in 1786 that Sanskrit, Greek, and Latin showed such deep structural similarities that they must have sprung from a common source.
                        </div>
                        <div class="prose">
                            PIE is estimated to have been spoken roughly between 4000 and 3000 BCE on the Pontic–Caspian steppe (modern Ukraine and southern Russia). As communities migrated westward into Europe and southward into Iran and India, the language gradually differentiated into distinct branches.
                        </div>

                        <div class="sec-head">Major Branches of the PIE Family</div>
                        
                        <div class="hl-list">
                            <div class="hl-item">
                                <div class="hl-dot">1</div>
                                <div class="hl-text">
                                    <strong>Indo-Iranian</strong>
                                    The largest branch by number of speakers. Divided into the Indic sub-branch (Old Indo-Aryan → Sanskrit → Prakrits → Hindi, Urdu, Bengali, Punjabi, Marathi, Gujarati) and the Iranian sub-branch (Old Persian → Avestan → Modern Persian/Farsi, Kurdish, Pashto). Key ancient text: the Rigveda (Sanskrit).
                                </div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">2</div>
                                <div class="hl-text">
                                    <strong>Hellenic (Greek)</strong>
                                    Contains only Greek, but Greek has one of the longest continuously recorded literary traditions. Ancient Greek (Homer, Plato) → Byzantine Greek → Modern Greek. Greek contributed enormously to English through Latin and directly during the Renaissance (philosophy, medicine, science terms).
                                </div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">3</div>
                                <div class="hl-text">
                                    <strong>Italic (Romance)</strong>
                                    Latin is the parent of all Romance languages. Latin → Vulgar Latin → French, Spanish, Portuguese, Italian, Romanian. Latin (Classical and Ecclesiastical) poured into English in huge waves. French — a Romance language — is the single biggest external influence on English vocabulary.
                                </div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">4</div>
                                <div class="hl-text">
                                    <strong>Germanic</strong>
                                    The branch to which English belongs. Divided into: (a) West Germanic — English, German, Dutch, Afrikaans, Frisian; (b) North Germanic — Swedish, Danish, Norwegian, Icelandic; (c) East Germanic — Gothic (extinct). English descends from the West Germanic dialects spoken by the Angles, Saxons, and Jutes.
                                </div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">5</div>
                                <div class="hl-text">
                                    <strong>Celtic</strong>
                                    Languages of the pre-Roman inhabitants of Britain and Gaul. Divided into Goidelic (Irish Gaelic, Scottish Gaelic, Manx) and Brythonic (Welsh, Cornish, Breton). Despite early contact, Celtic left surprisingly few words in English — mainly place names and river names.
                                </div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">6</div>
                                <div class="hl-text">
                                    <strong>Balto-Slavic</strong>
                                    Eastern branch dividing into Baltic (Lithuanian, Latvian) and Slavic (Russian, Polish, Czech, Serbian, Bulgarian). Lithuanian is considered extremely archaic and close to reconstructed PIE. These languages had minimal direct influence on English.
                                </div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">7</div>
                                <div class="hl-text">
                                    <strong>Anatolian</strong>
                                    Spoken in ancient Asia Minor (modern Turkey). Hittite is the most well-known Anatolian language and the earliest attested IE language (c. 1700 BCE). All Anatolian languages are now extinct. Some scholars argue PIE originated in Anatolia rather than the steppe.
                                </div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">8</div>
                                <div class="hl-text">
                                    <strong>Tocharian</strong>
                                    Extinct languages discovered in manuscripts from western China (Tarim Basin). Surprisingly, Tocharian is more closely related to western IE languages (Celtic, Italic) than to its geographical neighbours. All extinct.
                                </div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">9</div>
                                <div class="hl-text">
                                    <strong>Albanian & Armenian</strong>
                                    Each forms its own independent branch with no close living relatives. Albanian (spoken in Albania and Kosovo) and Armenian (spoken in Armenia) are each sole survivors of their respective branches.
                                </div>
                            </div>
                        </div>

                        <div class="sec-head">The Germanic Subdivision — Most Important for English</div>
                        <table class="tbl">
                            <tr><th>Sub-branch</th><th>Period</th><th>Languages</th><th>Relation to English</th></tr>
                            <tr><td>West Germanic</td><td>500 BCE onward</td><td>English, German, Dutch, Frisian</td><td>Direct ancestor of English</td></tr>
                            <tr><td>North Germanic</td><td>500 BCE onward</td><td>Old Norse → Swedish, Danish, Norwegian, Icelandic</td><td>Major influence (Viking Age)</td></tr>
                            <tr><td>East Germanic</td><td>c. 200–700 CE</td><td>Gothic, Vandal, Burgundian</td><td>Extinct; no direct influence</td></tr>
                        </table>

                        <div class="box box-tip">
                            <div class="box-icon">📝</div>
                            <div class="box-body">
                                <div class="box-label">How to Answer Q2 on the PIE Family Tree</div>
                                <div class="box-text">Your answer must include: (a) a clearly labelled tree diagram showing PIE at the root, major branches as intermediate nodes, and 2–3 modern languages under each; (b) a discussion paragraph on the origin and spread of PIE (steppe hypothesis); (c) a paragraph on the Germanic branch specifically; (d) brief notes on the contemporary world — Hindi, French, Spanish, Russian are all PIE languages. Five most mark-worthy branches: Indo-Iranian (Hindi/Sanskrit), Italic (Latin/French), Germanic (English), Hellenic (Greek), Balto-Slavic (Russian).</div>
                            </div>
                        </div>
                    `
                },
                {
                    title: "1.3 Language Situation in Britain Before 450 CE — The Celts",
                    priority: "medium",
                    content: `
                        <div class="box box-tip">
                            <div class="box-icon">🎯</div>
                            <div class="box-body">
                                <div class="box-label">Exam Tip</div>
                                <div class="box-text">Q1 in your actual exam paper asks about Celtic influence on English. This is a confirmed 5-mark topic. Write a crisp 50-word answer covering: place names, river names, and WHY Celtic influence was limited.</div>
                            </div>
                        </div>

                        <div class="sec-head">Who Were the Celts?</div>
                        <div class="prose">
                            The Celts were the pre-Roman inhabitants of Britain, arriving in two main waves around 800–600 BCE and 400 BCE. Celtic speakers occupied the entire island before Julius Caesar's expeditionary raids (55–54 BCE) and the full Roman conquest under Emperor Claudius in 43 CE. The Celtic languages spoken in Britain were <strong>Brythonic Celtic</strong> — ancestor of modern Welsh, Cornish, and Breton. <strong>Goidelic Celtic</strong> (ancestor of Irish and Scottish Gaelic) was spoken in Ireland.
                        </div>

                        <div class="sec-head">Celtic Influence on English</div>
                        <div class="prose">
                            Despite the Celts being the indigenous population of Britain, their linguistic influence on English is surprisingly minimal. Scholars estimate fewer than twenty commonly used words in Modern English can be traced directly to Celtic. The main areas of Celtic influence are:
                        </div>
                        
                        <div class="hl-list">
                            <div class="hl-item">
                                <div class="hl-dot">📍</div>
                                <div class="hl-text">
                                    <strong>Place Names (Most Significant)</strong>
                                    Many British place names preserve Celtic roots: London (from Celtic Londinium/Llyn-don), York (Eboracum), Kent, Devon, Cornwall, Dover.
                                </div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">🌊</div>
                                <div class="hl-text">
                                    <strong>River & Geographical Names</strong>
                                    River names are extremely conservative linguistically. Examples: Thames (from Celtic Tamesa = 'dark river'), Avon (= 'river'), Exe, Esk, Axe, Usk, Wye, Severn, Trent. The Celtic word 'avon' simply means river — hence River Avon literally means 'River River.'
                                </div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">🗣️</div>
                                <div class="hl-text">
                                    <strong>A Few Common Words</strong>
                                    Brock (badger), crag, bin, tor (high rocky peak), loch/lough (lake), bannock (a type of bread), dun (fort — appears in Doncaster, Dundee).
                                </div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">🔬</div>
                                <div class="hl-text">
                                    <strong>Grammatical Influence (Disputed)</strong>
                                    Some linguists argue certain syntactic features of English — like the progressive aspect ('I am doing') — may have Celtic origins, as this feature is far more common in Celtic languages than other Germanic ones. This remains debated.
                                </div>
                            </div>
                        </div>

                        <div class="sec-head">Why Was Celtic Influence So Limited?</div>
                        <div class="hl-list">
                            <div class="hl-item">
                                <div class="hl-dot">⚔️</div>
                                <div class="hl-text">The Anglo-Saxon invaders (from 449 CE onward) pushed the Celts westward and northward into Wales, Cornwall, and Scotland — little sustained, equal social contact.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">👑</div>
                                <div class="hl-text">The Celts were politically subordinated — conquered peoples rarely impose their language on conquerors.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">🏔️</div>
                                <div class="hl-text">Celtic-speaking communities became geographically isolated in the 'Celtic fringe' (Wales, Cornwall, Scotland, Ireland).</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">📦</div>
                                <div class="hl-text">English already had Germanic vocabulary for most everyday concepts, so there was no 'lexical gap' that Celtic words needed to fill.</div>
                            </div>
                        </div>

                        <div class="box box-eg">
                            <div class="box-icon">✍️</div>
                            <div class="box-body">
                                <div class="box-label">Model 50-Word Answer for Q1</div>
                                <div class="box-text">The Celtic languages spoken in pre-Roman and Roman Britain left surprisingly little imprint on English. Their primary legacy lies in place names (London, Kent, Devon) and river names (Thames, Avon, Exe). Celtic had minimal influence on grammar or vocabulary because Anglo-Saxon invaders pushed Celtic speakers into isolated western and northern regions, reducing sustained linguistic contact.</div>
                            </div>
                        </div>
                    `
                },
                {
                    title: "1.4 Romanisation of Britain",
                    priority: "medium",
                    content: `
                        <div class="sec-head">The Roman Conquest (43–410 CE)</div>
                        <div class="prose">
                            Rome conquered Britain in 43 CE under Emperor Claudius. The Romans occupied most of England and Wales for nearly 400 years (43–410 CE). During this period, Latin became the language of administration, the army, commerce, and urban life. Roman Britain was essentially a bilingual society — Latin above, Celtic below.
                        </div>

                        <div class="sec-head">Latin's Impact — Place Names</div>
                        <div class="prose">
                            Latin words survive mainly in place names rather than general English vocabulary. The suffix <strong>-chester/-caster/-cester</strong> (from Latin <em>castra</em> = military camp) appears in:
                        </div>
                        <div class="pill-grid">
                            <span class="pill">Winchester</span>
                            <span class="pill">Manchester</span>
                            <span class="pill">Lancaster</span>
                            <span class="pill">Leicester</span>
                            <span class="pill">Colchester</span>
                            <span class="pill">Gloucester</span>
                        </div>
                        <div class="prose">
                            The suffix <strong>-coln</strong> (from Latin <em>colonia</em> = settlement) appears in: Lincoln.
                        </div>

                        <div class="sec-head">The Roman Withdrawal (410 CE)</div>
                        <div class="prose">
                            In 410 CE, Emperor Honorius withdrew legions from Britain to defend Rome against the Visigoths. This left Britain vulnerable, and within decades Anglo-Saxon tribes from the European mainland began raiding and settling. Roman Latin's major contribution came indirectly — through the Church (second wave of Latin) and through French (which descended from Latin).
                        </div>
                    `
                },
                {
                    title: "1.5 Continental Latin Borrowings (Before 450 CE)",
                    priority: "medium",
                    content: `
                        <div class="prose">
                            Before the Anglo-Saxons ever set foot in Britain, their Germanic tribes on the continent were already in contact with Rome through trade, military service, and cultural exchange. Words borrowed at this stage are called <strong>Continental Latin borrowings</strong> — they entered the Germanic dialects that would eventually become English, and so they feel deeply native.
                        </div>
                        
                        <div class="box box-eg">
                            <div class="box-icon">📚</div>
                            <div class="box-body">
                                <div class="box-label">Examples — Continental Latin Borrowings in Modern English</div>
                                <div class="box-text">wine (Latin <em>vinum</em>), cheese (<em>caseus</em>), street (<em>strata via</em> = paved road), wall (<em>vallum</em>), pound (<em>pondus</em> = weight), mile (<em>mille passus</em> = 1000 paces), butter (<em>butyrum</em>), cup (<em>cupa</em>), dish (<em>discus</em>), kitchen (<em>coquina</em>), school (<em>schola</em> via Greek), bishop (<em>episcopus</em> via Greek).</div>
                            </div>
                        </div>

                        <div class="prose">
                            These borrowings show that even before arriving in Britain, the Germanic peoples who became the English were absorbing Roman material culture and its vocabulary. Words for new concepts (paved roads, wine, coinage) were borrowed wholesale.
                        </div>
                    `
                },
                {
                    title: "Module I — Critical Dates & Key Terms",
                    priority: "background",
                    content: `
                        <div class="sec-head">Critical Dates</div>
                        <table class="tbl">
                            <tr><th>Date</th><th>Event</th><th>Significance</th></tr>
                            <tr><td>c. 4000–3000 BCE</td><td>PIE spoken</td><td>Common ancestor of English, Hindi, French, Russian, etc.</td></tr>
                            <tr><td>800–400 BCE</td><td>Celtic tribes in Britain</td><td>Pre-Roman British population — left place/river names</td></tr>
                            <tr><td>55–54 BCE</td><td>Julius Caesar raids Britain</td><td>First Roman contact; no permanent settlement</td></tr>
                            <tr><td>43 CE</td><td>Roman conquest (Claudius)</td><td>Latin becomes language of administration; lasts 400 years</td></tr>
                            <tr><td>410 CE</td><td>Roman withdrawal</td><td>Britain vulnerable; Anglo-Saxon settlement begins</td></tr>
                            <tr><td>449 CE</td><td>Anglo-Saxon migration begins</td><td>Start of Old English period</td></tr>
                            <tr><td>1786 CE</td><td>Sir William Jones</td><td>Observed Sanskrit/Greek/Latin share a common ancestor</td></tr>
                        </table>

                        <div class="sec-head">Key Terms</div>
                        <div class="hl-list">
                            <div class="hl-item">
                                <div class="hl-dot">📖</div>
                                <div class="hl-text"><strong>Diachronic</strong> — Studying language change across time (the approach of this entire course). Contrast with synchronic.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">📖</div>
                                <div class="hl-text"><strong>Proto-Indo-European (PIE)</strong> — The reconstructed common ancestor language of the Indo-European family, spoken c. 4000–3000 BCE on the Pontic steppe.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">📖</div>
                                <div class="hl-text"><strong>Steppe Hypothesis</strong> — Theory that PIE originated on the Pontic–Caspian steppe (modern Ukraine/Russia) and spread through migration.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">📖</div>
                                <div class="hl-text"><strong>Celtic</strong> — Branch of IE languages — Goidelic (Irish, Scottish Gaelic, Manx) and Brythonic (Welsh, Cornish, Breton). Pre-Roman languages of Britain.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">📖</div>
                                <div class="hl-text"><strong>West Germanic</strong> — The sub-branch of Germanic from which English directly descends. Includes German, Dutch, Frisian.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">📖</div>
                                <div class="hl-text"><strong>Continental Latin Borrowings</strong> — Latin words absorbed by Germanic tribes on the European continent before they migrated to Britain.</div>
                            </div>
                        </div>
                    `
                }
            ]
        },
        {
            id: "m2",
            number: "Module II",
            title: "English in British Isles: 450-1500",
            topics: [
                {
                    title: "2.1 Language Situation in Britain 450-1500 CE — Background",
                    priority: "background",
                    content: `
                        <div class="prose">
                            This period is the most linguistically turbulent in English history. It saw three distinct waves of external influence — Scandinavian, then Norman French — layered onto the original Anglo-Saxon base, while Latin continued as the language of the Church throughout. By 1500 CE, English had transformed almost beyond recognition from the Old English of 450 CE.
                        </div>
                    `
                },
                {
                    title: "2.2 Foreign Influences on Old English",
                    priority: "high",
                    content: `
                        <div class="box box-tip">
                            <div class="box-icon">🎯</div>
                            <div class="box-body">
                                <div class="box-label">Exam Tip</div>
                                <div class="box-text">Examiner favourite for both Q1 and Q2. Know all three waves: Celtic (minimal), Latin (two waves: Roman + Christian), and Scandinavian (Viking Age). Give word examples for each.</div>
                            </div>
                        </div>

                        <div class="sec-head">Wave 1 — Celtic Influence on Old English</div>
                        <div class="prose">
                            As discussed in Module I, Celtic influence on Old English was minimal. The Anglo-Saxon invaders displaced Celtic speakers rather than absorbing them. Place names and a handful of common words (brock, crag, loch) are the main legacy. Celtic influence on Old English grammar was effectively zero.
                        </div>

                        <div class="sec-head">Wave 2 — Latin Influence (Two Sub-Waves)</div>
                        <div class="prose">
                            Latin influenced Old English in two distinct historical moments, and it is important to distinguish them:
                        </div>
                        
                        <div class="hl-list">
                            <div class="hl-item">
                                <div class="hl-dot">🏛️</div>
                                <div class="hl-text">
                                    <strong>(a) Continental Latin / Roman Period Borrowings</strong>
                                    As discussed in 1.5, these entered before the Anglo-Saxons reached Britain. Words for material culture: wine, cheese, street, wall, cup, dish, mile, pound.
                                </div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">⛪</div>
                                <div class="hl-text">
                                    <strong>(b) Christian/Ecclesiastical Latin (6th—10th centuries)</strong>
                                    In 597 CE, Pope Gregory the Great sent St Augustine of Canterbury to convert the Anglo-Saxons to Christianity. With Christianity came an enormous wave of Latin vocabulary — the language of the Church, learning, and manuscripts. This is sometimes called the second wave of Latin into English.
                                </div>
                            </div>
                        </div>
                        
                        <div class="box box-eg">
                            <div class="box-icon">📖</div>
                            <div class="box-body">
                                <div class="box-label">Examples of Ecclesiastical Latin</div>
                                <div class="box-text">angel, candle, hymn, mass, monk, nun, priest, school, disciple, epistle, paradise, temple, font, altar, psalm, minister, pope, creed, martyr, deacon, apostle, pilgrim. Also educational terms: grammar, meter, verse. Some entered through Greek: church (kyriakon), bishop (episkopos), devil (diabolos).</div>
                            </div>
                        </div>

                        <div class="sec-head">Wave 3 — Scandinavian / Old Norse Influence (Viking Age)</div>
                        <div class="prose">
                            The Viking invasions began in 787 CE (first recorded raid on Lindisfarne, 793 CE) and continued for nearly three centuries. Danish and Norwegian Vikings first raided, then settled large parts of northern and eastern England — the area that came to be called the Danelaw (formally established by the Treaty of Wedmore, 878 CE, between King Alfred the Great and the Danish leader Guthrum). The Danelaw covered roughly the area north and east of a line from London to Chester. Within this territory, Old Norse and Old English coexisted and mixed intimately.
                        </div>
                        
                        <div class="prose">
                            <strong>What Old Norse Gave English:</strong> The Scandinavian contribution is remarkable because it affected not just vocabulary but core grammar — pronouns, prepositions, and common everyday words. This is unusual — grammatical elements are almost never borrowed between languages unless contact is extremely deep and prolonged.
                        </div>

                        <div class="box box-eg">
                            <div class="box-icon">⚔️</div>
                            <div class="box-body">
                                <div class="box-label">Examples of Old Norse Borrowings</div>
                                <div class="box-text"><strong>Pronouns:</strong> they, them, their (replaced OE hie, him, hiera).<br><strong>Everyday words:</strong> sky, egg, cake, take, call, want, get, give, birth, husband, sister, window, wrong, ugly, happy, loose, low, flat, ill, weak.<br><strong>Verbs:</strong> die, ride (Norse sense), crawl, gasp, glitter, scare.<br><strong>Place names:</strong> -by (Grimsby), -thorp (Scunthorpe), -toft (Lowestoft), -ness (Skegness).</div>
                            </div>
                        </div>
                        
                        <div class="box box-note">
                            <div class="box-icon">❗</div>
                            <div class="box-body">
                                <div class="box-label">Key Note</div>
                                <div class="box-text">The replacement of the Old English 3rd-person plural pronouns (hie/him/hiera) with Norse they/them/their is hugely significant — even the most basic function words were exchanged. This shows how deeply integrated Scandinavian settlers were in daily Anglo-Saxon life.</div>
                            </div>
                        </div>
                    `
                },
                {
                    title: "2.3 Characteristics of Old English",
                    priority: "high",
                    content: `
                        <div class="box box-tip">
                            <div class="box-icon">🎯</div>
                            <div class="box-body">
                                <div class="box-label">Exam Tip</div>
                                <div class="box-text">Very likely to appear as Q2 (diagram + long answer). Draw a mind-map with five branches: Compound Words, Strong Verbs, Word Order, Winchester Vocabulary, Stress Pattern.</div>
                            </div>
                        </div>

                        <div class="sec-head">What is Old English?</div>
                        <div class="prose">
                            Old English (OE), also called Anglo-Saxon, was spoken from approximately 450 CE to 1100 CE. It descended from the West Germanic dialects of the Angles, Saxons, Jutes, and Frisians who migrated to Britain from the 5th century onward. OE looks almost like a foreign language to modern eyes — it has elaborate grammatical inflections, a different vocabulary, and different word order.
                        </div>
                        <div class="prose">
                            The most famous Old English text is the epic poem <em>Beowulf</em> (composed between 8th—10th centuries). Other major texts include the <em>Anglo-Saxon Chronicle</em> and King Alfred's translations of Latin works.
                        </div>

                        <div class="sec-head">(a) Compound Words</div>
                        <div class="prose">
                            Old English was highly productive in creating compound words by joining two existing words to form a new concept. This is called compounding. OE poetry especially favoured <strong>kennings</strong> — poetic compounds used as metaphorical descriptors.
                        </div>
                        <div class="box box-eg">
                            <div class="box-icon">🧩</div>
                            <div class="box-body">
                                <div class="box-label">Examples of Compounds & Kennings</div>
                                <div class="box-text"><strong>Compounds:</strong> godspell (god + spell = good news — Gospel), woruldcyning (world-king), tungolcræft (star-craft = astronomy), heofenweard (heaven-guardian = God).<br><strong>Kennings in Beowulf:</strong> hronrad (whale-road = sea), beadoleoma (battle-light = sword), goldwine (gold-friend = generous lord).</div>
                            </div>
                        </div>

                        <div class="sec-head">(b) Strong Verbs</div>
                        <div class="prose">
                            OE inherited from Germanic a system of strong verbs that changed their vowel in the past tense rather than adding an -ed ending. This is called <strong>ablaut</strong> or <strong>vowel gradation</strong>. Many modern English 'irregular verbs' are survivals of this OE strong verb system. There were seven classes of strong verbs in OE, each with a distinct ablaut pattern.
                        </div>
                        <div class="pill-grid">
                            <span class="pill">sing/sang/sung</span>
                            <span class="pill">ring/rang/rung</span>
                            <span class="pill">drive/drove/driven</span>
                            <span class="pill">write/wrote/written</span>
                            <span class="pill">speak/spoke/spoken</span>
                            <span class="pill">ride/rode/ridden</span>
                            <span class="pill">rise/rose/risen</span>
                            <span class="pill">break/broke/broken</span>
                            <span class="pill">freeze/froze/frozen</span>
                            <span class="pill">bind/bound/bound</span>
                        </div>

                        <div class="sec-head">(c) Word Order</div>
                        <div class="prose">
                            Modern English uses a fixed Subject-Verb-Object (SVO) order to convey grammatical relationships. Old English could vary its word order much more freely because it used inflectional endings (case endings) to show grammatical function — not position. OE had four cases: Nominative, Accusative, Genitive, and Dative, plus traces of an Instrumental case. In OE poetry and formal prose, verb-final (SOV) order was common, reflecting the Germanic heritage.
                        </div>
                        <div class="prose">
                            As inflectional endings eroded (especially under Norse contact, which accelerated this process), English had to compensate by fixing word order. The shift to SVO is one of the most fundamental changes in the history of English grammar.
                        </div>

                        <div class="sec-head">(d) Winchester Vocabulary</div>
                        <div class="prose">
                            Winchester was the capital of the West Saxon kingdom and became the major centre of learning and manuscript production in Anglo-Saxon England, especially under King Alfred the Great (r. 871-899 CE). Alfred's ambitious programme of translating Latin works into English established a prestige variety of Old English — <strong>Late West Saxon</strong> — centred on Winchester. This variety became the written standard for OE, meaning that the OE texts we can read today primarily reflect the Winchester (West Saxon) dialect, not the Anglian or Kentish dialects.
                        </div>
                        <div class="box box-note">
                            <div class="box-icon">👑</div>
                            <div class="box-body">
                                <div class="box-label">Key Note: Winchester</div>
                                <div class="box-text">Winchester Vocabulary = the standardised literary vocabulary of Late West Saxon OE, associated with King Alfred's court. It is not a separate dialect but a prestige written form. This matters because the Norman Conquest of 1066 destroyed Winchester's prestige, and the written standard had to be rebuilt — eventually in London English.</div>
                            </div>
                        </div>

                        <div class="sec-head">(e) Stress Patterns</div>
                        <div class="prose">
                            In Old English, stress was placed on the root syllable — almost always the first syllable of a native word. This is the Germanic stress pattern inherited from PIE. Prefixes in OE could be stressed (when they modified nouns: <em>andswaru</em> = answer) or unstressed (when they modified verbs: <em>andswarian</em> = to answer). This distinction between noun-stress and verb-stress survives in some Modern English pairs: PROtest (noun) vs proTEST (verb); REcord vs reCORD.
                        </div>
                    `
                },
                {
                    title: "2.4 Middle English (1066-1500) and the French Influence",
                    priority: "high",
                    content: `
                        <div class="box box-tip">
                            <div class="box-icon">🎯</div>
                            <div class="box-body">
                                <div class="box-label">Exam Tip</div>
                                <div class="box-text">French influence after 1066 is another near-certain Q2 topic. Cover: Norman Conquest context, domains of French vocabulary (law, food, fashion, government), the social stratification (French = elite, English = common), and the eventual re-emergence of English.</div>
                            </div>
                        </div>

                        <div class="sec-head">The Norman Conquest (1066 CE)</div>
                        <div class="prose">
                            On 14 October 1066, William the Conqueror (Duke of Normandy, France) defeated and killed King Harold II at the Battle of Hastings. This single event had more impact on the English language than any other in its history. The Norman invaders spoke a dialect of Old French (Anglo-Norman French), and they became the new ruling class of England — as nobles, clergy, lawyers, and administrators.
                        </div>
                        <div class="prose">
                            For the next 300 years, England was effectively trilingual:
                        </div>
                        <table class="tbl">
                            <tr><th>Language</th><th>Used by whom</th><th>Domains</th></tr>
                            <tr><td><strong>Anglo-Norman French</strong></td><td>Royalty, nobles, the Church hierarchy, government, law, literature</td><td>Government, law, religion</td></tr>
                            <tr><td><strong>Latin</strong></td><td>The Church, scholars, official documents</td><td>Religion, scholarship, international correspondence</td></tr>
                            <tr><td><strong>Middle English</strong></td><td>The common people, peasants, tradesmen</td><td>Everyday speech, agriculture, trade</td></tr>
                        </table>

                        <div class="sec-head">French Influence on Vocabulary — The Semantic Split</div>
                        <div class="prose">
                            The most striking evidence of Norman French influence is the famous semantic split between Anglo-Saxon words for animals and Norman French words for their meat. The Anglo-Saxon peasants who tended the animals used OE words; the Norman nobles who ate the cooked meat used French words. This split has survived to the present day:
                        </div>
                        <table class="tbl">
                            <tr><th>Animal (OE/AS word)</th><th>Meat at table (OF word)</th></tr>
                            <tr><td>ox / cow (OE: <em>oxa/cu</em>)</td><td>beef (OF: <em>boeuf</em>)</td></tr>
                            <tr><td>sheep (OE: <em>sceap</em>)</td><td>mutton (OF: <em>mouton</em>)</td></tr>
                            <tr><td>swine / pig (OE: <em>swin</em>)</td><td>pork (OF: <em>porc</em>)</td></tr>
                            <tr><td>calf (OE: <em>cealf</em>)</td><td>veal (OF: <em>veel</em>)</td></tr>
                            <tr><td>deer (OE: <em>deor</em>)</td><td>venison (OF: <em>venaison</em>)</td></tr>
                            <tr><td>chicken / hen (OE: <em>henn</em>)</td><td>poultry (OF: <em>poulet</em>)</td></tr>
                        </table>

                        <div class="sec-head">Domains of French Borrowing</div>
                        <div class="hl-list">
                            <div class="hl-item">
                                <div class="hl-dot">👑</div>
                                <div class="hl-text"><strong>Government & administration:</strong> government, parliament, council, crown, court, state, mayor, chancellor, minister, sovereign, nation, empire, reign, noble, baron, duke, countess.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">⚖️</div>
                                <div class="hl-text"><strong>Law:</strong> judge, jury, justice, crime, prison, defendant, plaintiff, verdict, attorney, pardon, felony, indict, legal, evidence, bail, accuse.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">⚔️</div>
                                <div class="hl-text"><strong>Military:</strong> army, navy, battle, war, soldier, sergeant, captain, lieutenant, garrison, castle, siege, enemy, peace, lance, assault.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">⛪</div>
                                <div class="hl-text"><strong>Religion:</strong> saint, prayer, charity, mercy, miracle, abbey, chancel, sermon, piety, grace, devout, faith, divine.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">🍗</div>
                                <div class="hl-text"><strong>Food & cooking:</strong> cuisine, sauce, boil, fry, roast, feast, supper, dinner, appetite, beef, pork, mutton, veal, venison, pastry, biscuit, cream, sugar, salad.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">👗</div>
                                <div class="hl-text"><strong>Fashion & luxury:</strong> fashion, garment, gown, robe, jewel, diamond, fur, lace, embroidery, perfume, beauty, colour.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">🎨</div>
                                <div class="hl-text"><strong>Art & culture:</strong> art, music, dance, poem, romance, literature, culture, image, beauty, leisure, pleasure.</div>
                            </div>
                        </div>

                        <div class="sec-head">French Influence on Pronunciation and Structure</div>
                        <div class="hl-list">
                            <div class="hl-item">
                                <div class="hl-dot">🗣️</div>
                                <div class="hl-text"><strong>Pronunciation:</strong> French introduced sounds and sound combinations new to English, such as the [v] sound at the start of words (veal, vain, very — OE had no initial /v/), the [dʒ] sound (judge, gentle, giant from OF), and stress on the final syllable in many borrowed words (hotel, café, machine).</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">✍️</div>
                                <div class="hl-text"><strong>Spelling:</strong> French scribes introduced the spelling convention of 'qu' for /kw/ (queen, instead of OE cwen), 'ch' for /tʃ/ (church had been spelled cirice).</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">🧩</div>
                                <div class="hl-text"><strong>Suffixes:</strong> Many French suffixes became productive in English: -tion (nation, action), -ment (government, movement), -ance/-ence (distance, evidence), -ity (dignity, nobility), -ous (famous, curious), -al (royal, legal).</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">📏</div>
                                <div class="hl-text"><strong>Word order:</strong> French helped consolidate Subject-Verb-Object order by reinforcing the erosion of OE case endings.</div>
                            </div>
                        </div>

                        <div class="sec-head">The Re-emergence of English</div>
                        <div class="prose">
                            By the mid-13th century, English began its comeback. Several events accelerated this:
                        </div>
                        <div class="hl-list">
                            <div class="hl-item">
                                <div class="hl-dot">1</div>
                                <div class="hl-text"><strong>1204 - Loss of Normandy:</strong> King John lost Normandy to the French king. Anglo-Norman nobles could no longer maintain estates in both England and France and had to choose — most chose England, gradually shifting to English.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">2</div>
                                <div class="hl-text"><strong>1348-49 - The Black Death:</strong> Killed nearly a third of England's population, disproportionately affecting the Latin-educated clergy and French-speaking elite. English speakers filled administrative positions, raising the language's social status.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">3</div>
                                <div class="hl-text"><strong>1362 - Statute of Pleading:</strong> Decreed that court proceedings be conducted in English (not French). In the same year, Parliament was opened in English for the first time.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">4</div>
                                <div class="hl-text"><strong>Late 14th C. - Chaucer:</strong> Geoffrey Chaucer wrote <em>The Canterbury Tales</em> (c. 1387-1400) in the London dialect of Middle English — this literary prestige accelerated English's re-establishment as a written standard.</div>
                            </div>
                        </div>
                    `
                }
            ]
        },
        {
            id: "m3",
            number: "Module III",
            title: "English: 1500 to Present",
            topics: [
                {
                    title: "3.1 The Renaissance and the Inkhorn Controversy",
                    priority: "high",
                    content: `
                        <div class="box box-tip">
                            <div class="box-icon">🎯</div>
                            <div class="box-body">
                                <div class="box-label">Exam Tip</div>
                                <div class="box-text">This is asked almost every year. You MUST know what an "Inkhorn Term" is, why people borrowed them, and who fought for and against them (Elyot vs. Wilson).</div>
                            </div>
                        </div>

                        <div class="sec-head">The English Renaissance (1500–1650)</div>
                        <div class="prose">
                            The Renaissance (rebirth) brought a revival of classical learning across Europe. English scholars translating ancient Greek and Latin texts realized that English lacked the vocabulary to express complex scientific, philosophical, and medical ideas.
                        </div>
                        <div class="prose">
                            In 1476, William Caxton introduced the <strong>printing press</strong> to England, which drastically increased literacy and began the long process of standardizing English spelling.
                        </div>

                        <div class="sec-head">The Inkhorn Controversy</div>
                        <div class="prose">
                            To fill the gaps in English, scholars began inventing or directly borrowing thousands of words from Latin and Greek. These obscure, overly academic words were mockingly called <strong>"Inkhorn terms"</strong> (referring to the horn vessels of ink carried by pedantic scholars).
                        </div>
                        
                        <div class="hl-list">
                            <div class="hl-item">
                                <div class="hl-dot">🛡️</div>
                                <div class="hl-text">
                                    <strong>The Defenders (e.g., Sir Thomas Elyot)</strong>
                                    Believed borrowing enriched the English language, making it capable of expressing anything Latin could. They believed English needed "augmenting".
                                </div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">⚔️</div>
                                <div class="hl-text">
                                    <strong>The Purists (e.g., Thomas Wilson & John Cheke)</strong>
                                    Hated inkhorn terms. Wilson mocked them in his book <em>Arte of Rhetorique</em>. John Cheke argued English should be "written cleane and pure, unmixt and unmangeled with borowing of other tunges". Purists wanted to create new words using native Anglo-Saxon roots (e.g., instead of <em>geometry</em>, they proposed <em>earth-measuring</em>; instead of <em>crucified</em>, they proposed <em>crossed</em>).
                                </div>
                            </div>
                        </div>

                        <div class="box box-eg">
                            <div class="box-icon">📚</div>
                            <div class="box-body">
                                <div class="box-label">Surviving Inkhorn Terms</div>
                                <div class="box-text">Many words considered ridiculous then are essential today: <em>absurd, adapt, alienate, anonymous, appropriate, assassinate, benefit, catastrophe, exact, explain, extract, exist, expectation, halo, harass, meditate.</em></div>
                            </div>
                        </div>

                        <div class="sec-head">Shakespeare's Influence</div>
                        <div class="prose">
                            William Shakespeare (1564–1616) lived at the peak of this linguistic explosion. He had the largest vocabulary of any English writer (over 20,000 words used).
                        </div>
                        <div class="prose">
                            He invented thousands of words by converting nouns to verbs (<em>"he childed as I fathered"</em>), combining words, or adding prefixes/suffixes. 
                        </div>
                        <div class="pill-grid">
                            <span class="pill">eyeball</span>
                            <span class="pill">bedroom</span>
                            <span class="pill">assassination</span>
                            <span class="pill">swagger</span>
                            <span class="pill">lonely</span>
                            <span class="pill">gossip</span>
                        </div>
                        <div class="box box-eg">
                            <div class="box-icon">🗣️</div>
                            <div class="box-body">
                                <div class="box-label">Phrases He Invented</div>
                                <div class="box-text">"break the ice", "dead as a doornail", "wild goose chase", "green-eyed monster", "heart of gold".</div>
                            </div>
                        </div>
                    `
                },
                {
                    title: "3.2 The Great Vowel Shift (GVS)",
                    priority: "high",
                    content: `
                        <div class="box box-tip">
                            <div class="box-icon">🎯</div>
                            <div class="box-body">
                                <div class="box-label">Exam Tip</div>
                                <div class="box-text">The GVS is the reason why English spelling is so illogical today. You must define what it was (a phonetic shift) and why it caused spelling issues. Give at least two word examples.</div>
                            </div>
                        </div>

                        <div class="sec-head">What was the Great Vowel Shift?</div>
                        <div class="prose">
                            Between 1400 and 1700, English underwent a massive phonological transformation known as the Great Vowel Shift. The pronunciation of all Middle English <strong>long vowels</strong> changed; they shifted "upwards" in the mouth.
                        </div>
                        <div class="prose">
                            Vowels that were pronounced at the front of the mouth were raised higher. Vowels that were already at the highest point (like /i:/ and /u:/) "broke" into diphthongs.
                        </div>

                        <div class="sec-head">Examples of the Shift</div>
                        <table class="tbl">
                            <tr><th>Word</th><th>Chaucer's Pronunciation (c. 1390)</th><th>Shakespeare's Pronunciation (c. 1600)</th></tr>
                            <tr><td>Bite</td><td>/bi:t/ (beet)</td><td>/bait/ (bite)</td></tr>
                            <tr><td>Meet</td><td>/me:t/ (mate)</td><td>/mi:t/ (meet)</td></tr>
                            <tr><td>Meat</td><td>/mɛ:t/ (mair-t)</td><td>/mi:t/ (meet) - merged later</td></tr>
                            <tr><td>House</td><td>/hu:s/ (hoose)</td><td>/haus/ (house)</td></tr>
                            <tr><td>Boot</td><td>/bo:t/ (boat)</td><td>/bu:t/ (boot)</td></tr>
                        </table>

                        <div class="sec-head">The Impact on Spelling (Why English Spelling is Crazy)</div>
                        <div class="prose">
                            William Caxton introduced the printing press in 1476, right in the middle of the Great Vowel Shift. The printers "froze" the spelling of words to match how they were pronounced at that exact moment. 
                        </div>
                        <div class="prose">
                            However, the pronunciation kept shifting for another 200 years! Therefore, modern English spelling is essentially a museum of 15th-century pronunciation. We spell the word "knight" with a K and GH because in 1400, every single letter was pronounced (k-nee-kh-t).
                        </div>
                    `
                },
                {
                    title: "3.3 Standardization and the Grammarians (18th Century)",
                    priority: "medium",
                    content: `
                        <div class="sec-head">The Urge to "Fix" the Language</div>
                        <div class="prose">
                            By the 18th century, writers like Jonathan Swift felt the English language was "decaying" and needed to be standardized, refined, and permanently fixed, similar to how the Académie Française regulated French.
                        </div>

                        <div class="sec-head">Samuel Johnson's Dictionary (1755)</div>
                        <div class="prose">
                            Instead of an Academy, England got Samuel Johnson. He spent nine years compiling <em>A Dictionary of the English Language</em>. 
                        </div>
                        <div class="hl-list">
                            <div class="hl-item">
                                <div class="hl-dot">📖</div>
                                <div class="hl-text">It was the first dictionary to use literary quotations to illustrate word meanings.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">🔨</div>
                                <div class="hl-text">It effectively standardized English spelling, fixing the chaotic orthography of the Renaissance.</div>
                            </div>
                        </div>

                        <div class="sec-head">The Prescriptive Grammarians</div>
                        <div class="prose">
                            Following the dictionary, a wave of grammarians (like Robert Lowth and Lindley Murray) wrote influential grammar books. They were <strong>prescriptive</strong> — they wanted to dictate how English <em>should</em> be used, rather than describing how it <em>was</em> used.
                        </div>
                        <div class="prose">
                            Many of these grammarians were obsessed with Latin grammar, forcing Latin rules onto English (a Germanic language).
                        </div>
                        <div class="box box-note">
                            <div class="box-icon">🚫</div>
                            <div class="box-body">
                                <div class="box-label">Rules Invented by Grammarians</div>
                                <div class="box-text">
                                    They created rules that had never existed before in English: <br>
                                    1. Banned the "double negative" (which Shakespeare used freely).<br>
                                    2. Banned ending a sentence with a preposition (e.g., "Who are you talking to?").<br>
                                    3. Banned the split infinitive (e.g., "to boldly go").
                                </div>
                            </div>
                        </div>
                    `
                }
            ]
        },
        {
            id: "m4",
            number: "Module IV",
            title: "From Island Tongue to World Language",
            topics: [
                {
                    title: "4.1 English in the Contemporary World",
                    priority: "high",
                    content: `
                        <div class="prose">
                            English today is the world's foremost global language — used in international diplomacy, science, technology, aviation, popular culture, and the internet.
                        </div>

                        <div class="sec-head">How English Became a World Language</div>
                        <div class="hl-list">
                            <div class="hl-item">
                                <div class="hl-dot">🌍</div>
                                <div class="hl-text"><strong>British colonialism (17th–20th centuries):</strong> Spread English to North America, Australia, New Zealand, South Asia, Africa, and the Caribbean.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">⚙️</div>
                                <div class="hl-text"><strong>The Industrial Revolution:</strong> Gave Britain economic power; English became the language of trade and industry.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">🎬</div>
                                <div class="hl-text"><strong>American dominance:</strong> In the 20th century (especially post-WWII), American economic and cultural dominance entrenched English globally through Hollywood, music, and the internet.</div>
                            </div>
                            <div class="hl-item">
                                <div class="hl-dot">🔬</div>
                                <div class="hl-text"><strong>Science & Internet:</strong> Over 80% of global research papers are published in English, and a disproportionate share of online content is in English.</div>
                            </div>
                        </div>

                        <div class="box box-tip">
                            <div class="box-icon">🎯</div>
                            <div class="box-body">
                                <div class="box-label">Exam Tip</div>
                                <div class="box-text">Kachru's model is the most important diagram for Module IV. Practise drawing three concentric circles with correct country examples for each.</div>
                            </div>
                        </div>

                        <div class="sec-head">Kachru's Three Circles of English (1985)</div>
                        <div class="prose">
                            The most influential model for understanding the global spread of English is Braj Kachru's Three Circles Model. It challenges the idea that only British or American English is "correct."
                        </div>
                        <div class="box box-note">
                            <div class="box-icon">⭕</div>
                            <div class="box-body">
                                <div class="box-label">The Circles</div>
                                <div class="box-text">
                                    <strong>Inner Circle:</strong> Native language (L1), norm-providing. (UK, USA, Canada, Australia, NZ, Ireland)<br><br>
                                    <strong>Outer Circle:</strong> Important second language (L2), institutionalised, colonial legacy. (India, Nigeria, Pakistan, Singapore, Kenya, Philippines)<br><br>
                                    <strong>Expanding Circle:</strong> Learned as a foreign language (EFL), norm-dependent. (China, Japan, South Korea, Russia, Brazil, Germany)
                                </div>
                            </div>
                        </div>
                    `
                },
                {
                    title: "4.2 Characteristics of Indian English",
                    priority: "medium",
                    content: `
                        <div class="prose">
                            Indian English (IndE) is the variety of English used in India, where it has been spoken for over 350 years. With 22 scheduled languages, English functions as a crucial link language.
                        </div>

                        <div class="sec-head">Phonological Characteristics</div>
                        <div class="hl-list">
                            <div class="hl-item"><div class="hl-dot">🗣️</div><div class="hl-text"><strong>Retroflex consonants:</strong> Pronouncing /t/ and /d/ with the tongue curled back (e.g., 'waTer').</div></div>
                            <div class="hl-item"><div class="hl-dot">🗣️</div><div class="hl-text"><strong>No /v/ and /w/ distinction:</strong> Both pronounced as a labio-dental approximant (vine/wine sound similar).</div></div>
                            <div class="hl-item"><div class="hl-dot">🗣️</div><div class="hl-text"><strong>Syllable-timed:</strong> IndE gives roughly equal time to each syllable (staccato rhythm), unlike the stress-timed rhythm of British English.</div></div>
                        </div>

                        <div class="sec-head">Grammatical Characteristics</div>
                        <div class="hl-list">
                            <div class="hl-item"><div class="hl-dot">📝</div><div class="hl-text"><strong>Tag question:</strong> 'isn't it?' or 'no?' used universally ('She came, isn't it?').</div></div>
                            <div class="hl-item"><div class="hl-dot">📝</div><div class="hl-text"><strong>Progressive aspect overuse:</strong> 'I am understanding the problem' instead of 'I understand'.</div></div>
                            <div class="hl-item"><div class="hl-dot">📝</div><div class="hl-text"><strong>Reduplication for emphasis:</strong> 'Do it now only', 'He is always telling only'.</div></div>
                            <div class="hl-item"><div class="hl-dot">📝</div><div class="hl-text"><strong>Question formation:</strong> Direct word order in indirect questions ('I don't know where is he going').</div></div>
                        </div>

                        <div class="sec-head">Lexical Characteristics</div>
                        <div class="box box-eg">
                            <div class="box-icon">📚</div>
                            <div class="box-body">
                                <div class="box-label">Vocabulary & Shifts</div>
                                <div class="box-text">
                                    <strong>Loanwords:</strong> lakh, crore, pucca, dacoit, godown, hartal, jugaad, dhobi.<br>
                                    <strong>Semantic shifts:</strong> prepone (opposite of postpone), pass out (graduate), cousin-brother (distinguish gender), Eve-teasing (harassment).<br>
                                    <strong>Hybrid compounds:</strong> dicky (car trunk), stepney (spare tyre).
                                </div>
                            </div>
                        </div>
                    `
                },
                {
                    title: "4.3 Characteristics of American English",
                    priority: "medium",
                    content: `
                        <div class="prose">
                            American English (AmE) diverged from British English (BrE) over the 17th–19th centuries as English-speaking colonists established communities in North America.
                        </div>

                        <div class="sec-head">Noah Webster and Standardisation</div>
                        <div class="prose">
                            Noah Webster (1758–1843) is the key figure in American standardisation. His <em>American Dictionary of the English Language (1828)</em> deliberately Americanised spellings for nationalism and logic.
                        </div>
                        <table class="tbl">
                            <tr><th>British Spelling</th><th>American Spelling</th><th>Webster's Reason</th></tr>
                            <tr><td>colour, honour</td><td>color, honor</td><td>Remove silent 'u'</td></tr>
                            <tr><td>centre, theatre</td><td>center, theater</td><td>More phonetically logical</td></tr>
                            <tr><td>travelling</td><td>traveling</td><td>Single 'l' when stress not on final syllable</td></tr>
                            <tr><td>analyse, realise</td><td>analyze, realize</td><td>Use 'z' which is the actual sound made</td></tr>
                            <tr><td>cheque</td><td>check</td><td>Simplification</td></tr>
                        </table>

                        <div class="sec-head">Phonological Characteristics</div>
                        <div class="hl-list">
                            <div class="hl-item"><div class="hl-dot">🗣️</div><div class="hl-text"><strong>Rhotic accent:</strong> AmE speakers pronounce /r/ in all positions (car, bird). BrE is mostly non-rhotic.</div></div>
                            <div class="hl-item"><div class="hl-dot">🗣️</div><div class="hl-text"><strong>Flapping:</strong> /t/ between vowels is pronounced as a quick /d/ ('budder' for butter, 'wader' for water).</div></div>
                            <div class="hl-item"><div class="hl-dot">🗣️</div><div class="hl-text"><strong>Cot-caught merger:</strong> Many AmE speakers do not distinguish between these vowels.</div></div>
                        </div>

                        <div class="sec-head">Vocabulary Differences: AmE vs BrE</div>
                        <table class="tbl">
                            <tr><th>Concept</th><th>American English</th><th>British English</th></tr>
                            <tr><td>Ground level</td><td>First floor</td><td>Ground floor</td></tr>
                            <tr><td>Housing</td><td>Apartment</td><td>Flat</td></tr>
                            <tr><td>Waste</td><td>Trash/garbage can</td><td>Dustbin/rubbish bin</td></tr>
                            <tr><td>Transport</td><td>Elevator</td><td>Lift</td></tr>
                            <tr><td>Road</td><td>Freeway/highway</td><td>Motorway</td></tr>
                            <tr><td>Fuel</td><td>Gas</td><td>Petrol</td></tr>
                            <tr><td>Car storage</td><td>Trunk</td><td>Boot</td></tr>
                            <tr><td>Car front</td><td>Hood</td><td>Bonnet</td></tr>
                            <tr><td>Sweet treat</td><td>Cookie</td><td>Biscuit</td></tr>
                            <tr><td>Film venue</td><td>Movie theater</td><td>Cinema</td></tr>
                            <tr><td>Time off</td><td>Vacation</td><td>Holiday</td></tr>
                            <tr><td>Baby wear</td><td>Diaper</td><td>Nappy</td></tr>
                            <tr><td>Season</td><td>Fall</td><td>Autumn</td></tr>
                            <tr><td>Footwear</td><td>Sneakers</td><td>Trainers</td></tr>
                            <tr><td>Walking path</td><td>Sidewalk</td><td>Pavement</td></tr>
                        </table>

                        <div class="box box-note">
                            <div class="box-icon">⏳</div>
                            <div class="box-body">
                                <div class="box-label">Archaisms Preserved</div>
                                <div class="box-text">Some features of AmE are older English forms preserved by settlers and later abandoned in Britain: <strong>Fall</strong> (used in 17th c. BrE), <strong>Gotten</strong> (standard in OE/ME), <strong>Mad</strong> (meaning angry), <strong>Trash</strong>, <strong>Faucet</strong>, and <strong>Sick</strong> (meaning generally unwell).</div>
                            </div>
                        </div>
                    `
                }
            ]
        }
    ],
    diagrams: [
        {
            title: "Diagram 1: Proto-Indo-European Family Tree",
            description: "Shows PIE at the root with its 9 branches. Important: Germanic branch subdivides into West, North, East.",
            mermaid: `
                graph TD
                    PIE[Proto-Indo-European<br>c. 4000-3000 BCE]
                    PIE --> II[Indo-Iranian]
                    PIE --> H[Hellenic]
                    PIE --> IT[Italic]
                    PIE --> G[Germanic]
                    PIE --> C[Celtic]
                    PIE --> BS[Balto-Slavic]
                    PIE --> AN[Anatolian]
                    PIE --> T[Tocharian]
                    PIE --> AL[Albanian & Armenian]

                    II --> Hindi[Hindi, Urdu, Persian]
                    H --> Greek[Greek]
                    IT --> Romance[Latin -> French, Spanish]
                    C --> Welsh[Welsh, Irish Gaelic]
                    BS --> Russian[Russian, Polish]
                    
                    G --> WG[West Germanic]
                    G --> NG[North Germanic]
                    G --> EG[East Germanic]

                    WG --> Eng[English, German, Dutch]
                    NG --> Swed[Swedish, Danish, Old Norse]
                    EG --> Goth[Gothic - Extinct]

                    style Eng fill:#7c6dfa,color:#fff,stroke:#fff,stroke-width:2px
            `
        },
        {
            title: "Diagram 2: Influences on Old English",
            description: "A central hub showing the major waves of vocabulary entering Old English.",
            mermaid: `
                graph TD
                    CELT[Celtic<br>Minimal: Place/River Names] --> OE
                    ROMAN[Continental Latin<br>Before 450 CE: Material Culture] --> OE
                    OE((Old English<br>450-1100 CE<br>Anglo-Saxon Base))
                    CHURCH[Ecclesiastical Latin<br>597 CE: Religious Vocab] --> OE
                    NORSE[Old Norse / Scandinavian<br>787 CE: Core Vocab & Grammar] --> OE
                    
                    style OE fill:#00c9a0,color:#000,stroke:#fff,stroke-width:2px,shape:circle
            `
        },
        {
            title: "Diagram 3: Standardisation Flow",
            description: "Linear process of how English was standardised from 1476 to the 18th century.",
            mermaid: `
                flowchart LR
                    A[Printing Press<br>Caxton 1476] --> B[Bible Translation<br>Tyndale 1526<br>KJB 1611]
                    B --> C[Spelling Reform<br>Hart, Mulcaster]
                    C --> D[Dictionaries<br>Cawdrey 1604<br>Johnson 1755]
                    D --> E[Grammar Books<br>18th Century]
                    E --> F(((Standardised<br>Modern English)))
                    
                    style F fill:#ffb347,color:#000,stroke:#fff,stroke-width:2px
            `
        },
        {
            title: "Diagram 4: Kachru's Three Circles of English",
            description: "Concentric circles showing the global spread of English.",
            htmlOverride: `
                <div style="position: relative; width: 450px; height: 450px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
                    <div style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background: rgba(255,107,157,0.1); border: 2px dashed var(--v3); display: flex; align-items: flex-start; justify-content: center; padding-top: 25px;">
                        <span style="font-size: 0.95rem; font-weight: bold; color: var(--v3); text-align: center;">EXPANDING CIRCLE (EFL)<br>China, Japan, Russia</span>
                    </div>
                    <div style="position: absolute; width: 66%; height: 66%; border-radius: 50%; background: rgba(0,201,160,0.15); border: 2px dashed var(--v2); display: flex; align-items: flex-start; justify-content: center; padding-top: 35px;">
                        <span style="font-size: 0.95rem; font-weight: bold; color: var(--v2); text-align: center;">OUTER CIRCLE (L2)<br>India, Nigeria</span>
                    </div>
                    <div style="position: absolute; width: 33%; height: 33%; border-radius: 50%; background: rgba(124,109,250,0.25); border: 2px solid var(--v1); display: flex; align-items: center; justify-content: center;">
                        <span style="font-size: 0.95rem; font-weight: bold; color: #fff; text-align: center;">INNER (L1)<br>UK, USA</span>
                    </div>
                </div>
            `
        },
        {
            title: "Diagram 5: Timeline of English",
            description: "Chronological flow from pre-English Britain to the global present.",
            mermaid: `
                timeline
                    Pre-English : Before 450 CE : Celtic + Roman Latin : 43 CE Roman Conquest
                    Old English : 450 - 1100 CE : Germanic + Norse + Church Latin : 597 CE Christianization : 787 CE Viking Raids
                    Middle English : 1100 - 1500 CE : + Norman French : 1066 Norman Conquest : 1476 Caxton Printing Press
                    Early Modern : 1500 - 1700 CE : Renaissance & Standardization : 1611 King James Bible
                    Modern English : 1700 - Present : Global Spread : 1755 Johnson's Dictionary : American/Indian English
            `
        }
    ],
    qanda: [
        { q: "Celtic influence on English", marks: 5, a: "The Celtic languages spoken in pre-Roman and Roman Britain left surprisingly little imprint on English. Their primary legacy lies in place names (London, Kent, Devon) and river names (Thames, Avon, Exe). Celtic had minimal influence on grammar or vocabulary because Anglo-Saxon invaders pushed Celtic speakers into isolated western and northern regions, reducing sustained linguistic contact." },
        { q: "PIE family tree + subdivisions", marks: 10, a: "Proto-Indo-European (PIE) is the reconstructed common ancestor of languages spanning Europe to India, originating on the Pontic steppe (4000-3000 BCE). The family has 9 branches: Indo-Iranian, Hellenic, Italic, Germanic, Celtic, Balto-Slavic, Anatolian, Tocharian, and Albanian/Armenian. English belongs to the West Germanic sub-branch of the Germanic branch, sharing distant ancestry with Hindi (Indo-Iranian) and French (Italic). <em>(Make sure to draw Diagram 1 here)</em>." },
        { q: "Inkhorn Terms — define + examples", marks: 5, a: "Inkhorn terms are overly learned, pedantic words borrowed directly from Latin or Greek during the Renaissance to fill vocabulary gaps. They were mocked by purists like Thomas Wilson as products of a scholar's 'inkhorn', while defenders like Sir Thomas Elyot argued they enriched English. While many failed to survive, words like 'absurd', 'education', and 'exist' are surviving inkhorn terms." },
        { q: "Kachru's Three Circles", marks: 10, a: "Braj Kachru's 1985 model categorizes global English speakers into three concentric circles. The Inner Circle (L1/Native) includes the UK, USA, and Australia, acting as norm-providers. The Outer Circle (L2/Institutionalised) includes post-colonial nations like India and Nigeria, where English has official status. The Expanding Circle (EFL) includes China and Russia, learning English as a foreign language. This model validates varieties like Indian English as legitimate. <em>(Draw Diagram 4 here)</em>." },
        { q: "French influence on ME — semantic split + domains", marks: 10, a: "The 1066 Norman Conquest made French the language of England's ruling class, heavily influencing domains of power: law (judge, jury), military (army, enemy), and art (fashion, jewel). Crucially, a 'semantic split' occurred: English peasants kept Anglo-Saxon words for live animals (cow, pig, sheep), while French nobles used Norman words for the cooked meat (beef, pork, mutton), fundamentally changing the English lexicon." }
    ],
    timeline: [
        { date: "c. 4000–3000 BCE", event: "Proto-Indo-European spoken", desc: "Common ancestor of English, Hindi, French, Russian etc." },
        { date: "43 CE", event: "Roman conquest (Claudius)", desc: "Latin becomes language of administration; lasts 400 years." },
        { date: "449 CE", event: "Anglo-Saxon migration begins", desc: "Start of Old English period." },
        { date: "597 CE", event: "Augustine of Canterbury", desc: "Christianity converts Anglo-Saxons; ecclesiastical Latin wave." },
        { date: "787 CE", event: "First Viking raids", desc: "Start of Scandinavian influence." },
        { date: "1066 CE", event: "Norman Conquest", desc: "French becomes language of the elite; Middle English begins." },
        { date: "1362 CE", event: "Statute of Pleading", desc: "Parliament and courts opened in English." },
        { date: "1476 CE", event: "Caxton's printing press", desc: "Standardises English spelling; print culture begins." },
        { date: "1611 CE", event: "King James Bible", desc: "The most influential prose work in English history." },
        { date: "1755 CE", event: "Samuel Johnson's Dictionary", desc: "First major comprehensive English dictionary." },
        { date: "1828 CE", event: "Webster's American Dictionary", desc: "Codifies American English spelling." }
    ],
    glossary: [
        { term: "Ablaut", def: "Vowel alternation in strong verbs: sing/sang/sung. An inherited Indo-European feature." },
        { term: "Danelaw", def: "Region of northern/eastern England under Viking/Danish control after Treaty of Wedmore (878 CE)." },
        { term: "Diachronic", def: "Studying language change across time (the approach of this entire course)." },
        { term: "Inkhorn terms", def: "Overly learned Latin/Greek coinages of the Renaissance, many of which failed to survive." },
        { term: "Kenning", def: "A poetic compound in OE (e.g. 'whale-road' = sea; 'battle-light' = sword)." },
        { term: "Rhoticity", def: "Pronouncing /r/ in all positions. AmE is rhotic; most BrE is non-rhotic." },
        { term: "Semantic split", def: "The OE/OF division of meaning between animal name (OE) and meat (OF): cow/beef, pig/pork." },
        { term: "Strong verbs", def: "OE verbs that change root vowel for past tense (ablaut) — 'irregular' verbs in Modern English." },
        { term: "World Englishes", def: "The study of the many varieties of English spoken globally, each with its own legitimate norms." }
    ]
};
