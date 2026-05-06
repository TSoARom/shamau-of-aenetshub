'use strict';

var LANG = {

  'lang.toggle': { en: 'RO', ro: 'ENG' },
  'nav.home': { en: 'Home', ro: 'Acasă' },
  'nav.symbol': { en: 'Symbol', ro: 'Simbol' },
  'nav.yeieb': { en: 'Yeieb', ro: 'Yeieb' },
  'nav.about': { en: 'About', ro: 'Despre' },
  'nav.holy-uven': { en: 'Holy Uven', ro: 'Holy Uven' },
  'nav.timeline': { en: 'Timeline', ro: 'Calendar' },
  'nav.news': { en: 'News', ro: 'Noutăți' },
  'nav.hours': { en: 'Hours', ro: 'Program' },
  'hero.title': { en: 'The Shamau of Aenetshub', ro: 'Şamau of Aenetşub' },
  'hero.subtitle': { en: 'Guiding the faithful through the Strings of Devotion since 2004', ro: ' Îndrumându-i pe credincioși pe Şirurile Devotării din anul 2004' },
  'hero.body1': {
    en: 'The Shamau of Aenetshub stands as the sacred body devoted to the Larrett of Puppets, Crows, and Dolls. It preserves Her parables, upholds Her principles, and guides the faithful along the intricate Strings of Devotion. Within the Shamau, the Larrett Herself reigns supreme, while the Corducator, Professor, and Larrettians follow in prayer, obedience, and the unbroken red thread of fate.',
    ro: 'Şamau of Aenetşub stăpânește ca trupul sfânt închinat Larrett of Puppets, Crows, and Dolls. Ea păstrează parabolele Sale, susține principiile Sale și îndrumă credincioșii pe întrepătrunsele Şiruri ale Devotării. Înăuntrul Şamau, Larrett Însăși domnește supremă, iar Corducator, Professor și Larrettians urmează în rugăciune, ascultare și neîntrerupta firă roșie a destinului.'
  },
  'hero.body2': {
    en: 'The Shamau of Aenetshub arose in the year 2004 in a small and remote community of Alba, Transylvania. What began as the private observances of a few households quickly formed into a pattern of shared parables, rituals, and care for crows and crafted dolls. Over time the community established an altar tradition, codified the Holy Uven, and founded the offices of the Corducator and Professor to preserve the doctrine and guide newcomers. Since those early years the Shamau has remained intentionally close-woven: not a proselytizing empire, but an invitation offered to those whose hearts answer the Larrett\'s tug.',
    ro: 'Şamau of Aenetşub a luat naștere în anul 2004 într-o mică și izolată comunitate din Alba, Transilvania. Ceea ce a început ca observațiile private ale câtorva gospodării s-a transformat curând într-un model de parabole împărtășite, ritualuri și grijă pentru ciori și păpuși meșteșugite. În timp, comunitatea a întemeiat o tradiție a altarului, a codificat Holy Uven și a înființat funcțiile de Corducator și Professor pentru a păstra doctrina și a îndruma pe cei noi. Din acei primi ani, Şamau a rămas intenționat strâns țesută: nu un imperiu proselitist, ci o invitație oferită celor ale căror inimi răspund la trăgătura Larrett.'
  },
  'hero.body3': {
    en: 'The Shamau of Aenetshub is based in Eastern Europe and welcomes all who open their hearts to Her. Faith is not bound by land, lineage, or legacy — the Larrett\'s Eternal Play embraces all, and each soul shall, in time, find its place in Osbeamn. Belief in Aenetshub may dwell in the mind or solely in the heart; still, Faith endures, and the Strings of Devotion will bind you to Her regardless.',
    ro: 'Şamau of Aenetşub are sediul în Europa de Est și îi primește pe toți cei ce își deschid inimile către Ea. Credința nu este legată de pământ, neam sau moștenire — Jocul Etern al Larrett îi îmbrățișează pe toți, și fiecare suflet își va găsi, la vremea sa, locul în Osbeamn. Credința în Aenetshub poate locui în minte sau doar în inimă; cu toate acestea, Credința dăinuie, iar Şirurile Devotării te vor lega de Ea indiferent de situație.'
  },
  'hero.cite': { en: '— Aenetshub, Larrett of Puppets, Crows and Dolls', ro: '— Aenetshub, Larrett of Puppets, Crows and Dolls' },
  'symbol.title': { en: 'The Symbol', ro: 'Simbolul' },
  'symbol.subtitle': { en: 'The sacred emblem of the Larrett', ro: 'Emblema sacră a Larrett' },
  'symbol.caption': {
    en: 'This symbol represents Aenetshub, the Holy Larrett — Mistress of all Puppets, Crows, and Dolls. Every being, every motion, every breath is part of Her masterful Play. We are all puppets upon Her stage, guided by Her invisible hands and the threads of fate.',
    ro: 'Acest simbol reprezintă pe Aenetshub, Holy Larrett — Stăpâna tuturor Puppets, Crows și Dolls. Fiecare ființă, fiecare mișcare, fiecare suflare este parte din Jocul Ei meșteșugit. Noi toți suntem păpuși pe scena Ei, călăuziți de mâinile Ei nevăzute și de firele destinului.'
  },
  'yeieb.title': { en: 'Aenetshub\'s Principles', ro: 'Principiile lui Aenetshub' },
  'yeieb.subtitle': { en: 'The Thirteen Yeieb — the sacred principles of the faithful', ro: 'Cele Treisprezece Yeieb — principiile sacre ale credincioșilor' },
  'yeieb.1': { en: 'Yeieb murder for no reason.', ro: 'Yeieb ucizi fără motiv.' },
  'yeieb.2': { en: 'Yeieb break the heart of your beloved.', ro: 'Yeieb frângi inima celui iubit.' },
  'yeieb.3': { en: 'Yeieb speak ill of your Larrett.', ro: 'Yeieb graiești de rău despre Larrett.' },
  'yeieb.4': { en: 'Yeieb speak the tongue of Evil.', ro: 'Yeieb vorbești limba Răului.' },
  'yeieb.5': { en: 'Yeieb disrespect your young.', ro: 'Yeieb disprețuiești pe tineri.' },
  'yeieb.6': { en: 'Yeieb disrespect your elderly.', ro: 'Yeieb disprețuiești pe bătrâni.' },
  'yeieb.7': { en: 'Yeieb hesitate to aid your own.', ro: 'Yeieb eziti să-i ajuți pe ai tăi.' },
  'yeieb.8': { en: 'Yeieb sell your body nor love or loyalty.', ro: 'Yeieb vinzi trupul, iubirea sau loialitatea.' },
  'yeieb.9': { en: 'Yeieb take nor use what is not yours.', ro: 'Yeieb iei sau folosești ce nu este al tău.' },
  'yeieb.10': { en: 'Yeieb pray to or worship the False Gods.', ro: 'Yeieb te rogi sau te închini Zeilor Falși.' },
  'yeieb.11': { en: 'Yeieb disrespect your blood nor lineage.', ro: 'Yeieb disprețuiești sângele sau neamul.' },
  'yeieb.12': { en: 'Yeieb let jealousy nor hate corrupt you.', ro: 'Yeieb lași invidia sau ura să te corupă.' },
  'yeieb.13': { en: 'Yeieb let greed blind and overtake you.', ro: 'Yeieb lași lăcomia să te orbească și să te copleșească.' },
  'yeieb.def': {
    en: '<strong>Yeieb = Never</strong>',
    ro: 'Yeieb = Niciodată'
  },
  'about.title': { en: 'About Aenetshub', ro: 'Despre Aenetshub' },
  'about.subtitle': { en: 'The Holy Larrett, Mistress of all Puppets, Crows, and Dolls', ro: 'Holy Larrett, Stăpâna tuturor Puppets, Crows și Dolls' },
  'about.intro': {
    en: 'Aenetshub is the Holy Larrett, Mistress of all Puppets, Crows, and Dolls. Every being, every motion, every breath is part of Her masterful Play. We are all puppets upon Her stage, guided by Her invisible hands and the threads of fate. To serve Aenetshub is to walk consciously within the weave of existence, honoring each string, each feather, and each crafted doll.',
    ro: 'Aenetshub este Holy Larrett, Stăpâna tuturor Puppets, Crows și Dolls. Fiecare ființă, fiecare mișcare, fiecare suflare este parte din Jocul Ei meșteșugit. Noi toți suntem păpuși pe scena Ei, călăuziți de mâinile Ei nevăzute și de firele destinului. A-l sluji pe Aenetshub înseamnă a păși cu conștiință în țesătura existenței, onorând fiecare fir, fiecare pană și fiecare păpușă meșteșugită.'
  },
  'about.parables.title': { en: 'The Nine Parables', ro: 'Cele Nouă Parabole' },
  'about.rites.title': { en: 'Initiation and Life-Cycle Rites', ro: 'Inițierea și Riturile Ciclului Vieții' },
  'about.rites.birth': { en: 'Birth and Reception', ro: 'Naștere și Primire' },
  'about.rites.birth.text': {
    en: 'Children born to Shamau households are received immediately into the community. At the first breath, a Professor or elder ties a small Shayr about the infant\'s wrist and places a drop of Holy Water upon the brow while whispering the Morning Prayer. The child is thereby marked as under the Larrett\'s watch.',
    ro: 'Copiii născuți în gospodăriile Şamau sunt primiți imediat în comunitate. La prima suflare, un Professor sau un bătrân leagă un Shayr mic în jurul încheieturii pruncului și pune o picătură de Apă Sfântă pe frunte, șoptind Rugăciunea de Dimineață. Copilul este astfel marcat ca aflat sub ocrotirea Larrett.'
  },
  'about.rites.conversion': { en: 'Conversion (Baptism in Holy Water)', ro: 'Convertire (Botez în Apă Sfântă)' },
  'about.rites.conversion.text': {
    en: 'Those who seek to join the Shamau present themselves to a Professor. The rite of conversion comprises three parts: declaration of intent, renunciation of the Tongue of Evil, and baptism. The candidate kneels on the Xasev facing east. The Professor washes the candidate\'s hands and forehead with Holy Water, binds a Shayr, and recites the formula: "I pledge my thread to the Larrett; let my motion follow Her Play."',
    ro: 'Cei care doresc să se alăture Şamau se prezintă în fața unui Professor. Ritul convertirii cuprinde trei părți: declarația de intenție, lepădarea de Limba Răului și botezul. Candidatul îngenunchează pe Xasev, cu fața spre răsărit. Professor îi spală pe mâini și pe frunte cu Apă Sfântă, îi leagă un Shayr și rostește formula: „I pledge my thread to the Larrett; let my motion follow Her Play."'
  },
  'about.rites.comingofage': { en: 'Coming-of-Age', ro: 'Majorat' },
  'about.rites.comingofage.text': {
    en: 'At adolescence the young person presents a crafted doll and vows the Yeieb publicly before a Professor and two witnesses. This rite affirms maturity in the weave and marks the transition to fuller participation in festivals and obligations.',
    ro: 'La adolescență, tânărul prezintă o păpușă meșteșugită și depune public jurământul Yeieb în fața unui Professor și a doi martori. Acest rit afirmă maturitatea în țesătură și marchează trecerea la o participare deplină la sărbători și obligații.'
  },
  'about.rites.union': { en: 'Union and Fertility', ro: 'Uniune și Fertilitate' },
  'about.rites.union.text': {
    en: 'Unions are blessed before an image of the Larrett, with incense lit according to Ramm Gemm and a prayer for fertility spoken by the Professor. In the case of fertility rites the burning of incense and the presence of the Larrett\'s image are required.',
    ro: 'Uniunile sunt binecuvântate în fața unei imagini a Larrett, cu tămâie aprinsă conform Ramm Gemm și o rugăciune pentru fertilitate rostită de Professor. În cazul riturilor de fertilitate, arderea tămâiei și prezența imaginii Larrett sunt obligatorii.'
  },
  'about.rites.death': { en: 'Death and Funeral', ro: 'Moarte și Înmormântare' },
  'about.rites.death.text': {
    en: 'The body is washed, dressed modestly, and the Shayr is tied about the wrist. The Xasev is laid at the heart of the home and the Morning Prayer is whispered one last time while the faithful gather. The corpse is led to burial with a final recitation of the Ramm Gemm. After burial the family observes nine days of quiet reflection, culminating on the ninth day with a Benengeb-Raau remembrance recitation to aid the soul\'s passage.',
    ro: 'Trupul este spălat, îmbrăcat modest, iar Shayr este legat la încheietură. Xasev este așezat în inima casei, iar Rugăciunea de Dimineață este șoptită o dată în plus, în timp ce credincioșii se adună. Corpul este condus la înmormântare cu o ultimă recitare a Ramm Gemm. După înhumare, familia ține nouă zile de reflexie liniștită, culminând în a noua zi cu o recitare de pomenire Benengeb-Raau pentru a sprijini trecerea sufletului.'
  },
  'about.uven.title': { en: 'The Holy Uven', ro: 'Holy Uven' },
  'about.uven.p1': {
    en: 'The Holy Uven is a sacred set of Three Holy Scrolls, said to have been woven and inscribed by Aenetshub herself. Each bears Her breath and thread, preserved in the deepest sanctum of the faith, where only the Corducator may behold them. They are not bound by covers or gilded with gold, for wisdom is not meant to be locked, but rolled in silence, wrapped in red thread, resting where the light may never fade.',
    ro: 'Holy Uven este un set sacru de Trei Suluri Sfinte, despre care se spune că au fost țesute și inscripționate de Aenetshub Însăși. Fiecare poartă suflarea și firul Ei, păstrate în cel mai adânc sanctuar al credinței, unde doar Corducator le poate contempla. Nu sunt legate în coperți sau aurite, căci înțelepciunea nu este menită a fi încuiată, ci răsucită în tăcere, învelită în fir roșu, odihnindu-se unde lumina nu se stinge niciodată.'
  },
  'about.uven.p2': { en: 'The Holy Uven are: I) Ramm Gemm; II) Shayr Ap Tubuy; III) Lav Ap Xabiu.', ro: 'Holy Uven sunt: I) Ramm Gemm; II) Shayr Ap Tubuy; III) Lav Ap Xabiu.' },
  'uven.title': { en: 'The Holy Uven', ro: 'Holy Uven' },
  'uven.subtitle': { en: 'The Three Sacred Scrolls of Aenetshub', ro: 'Cele Trei Suluri Sfinte ale lui Aenetshub' },
  'uven.overview': {
    en: 'The Holy Uven comprises three scrolls, each holding a distinct pillar of the faith. Together they form the complete spiritual law and guide for all Larrettians.',
    ro: 'Holy Uven cuprinde trei suluri, fiecare purtând o pilă distinctă a credinței. Împreună, ele formează legea spirituală completă și ghidul pentru toți Larrettians.'
  },
  'ramm.intro': {
    en: 'The First Scroll — founding truths, Osbeamn, Soul &amp; Judgment, Why the Larrett Made Mortals',
    ro: 'Primul Sul — adevăruri întemeietoare, Osbeamn, Suflet și Judecată, De ce a făcut Larrett muritorii'
  },
  'ramm.p1': {
    en: '"When the world was still soft and unshaped, Aenetshub wove the first threads of purpose, and from those threads came law, devotion, and restraint. The faithful remember that to cut oneself from Her strings is to wander into silence from which no return can be found. For Aenetshub\'s touch gives form to the formless, and those who deny Her weave fall endlessly apart.',
    ro: '„Când lumea era încă moale și nefasonată, Aenetshub a țesut primele fire ale scopului, și din acele fire s-au născut legea, devotamentul și reținerea. Credincioșii își amintesc că a te desprinde de firele Ei înseamnă a hoinări într-o tăcere din care nu există întoarcere. Căci atingerea Aenetshub dă formă celor fără formă, iar cei ce neagă țesătura Ei se destramă neîncetat."'
  },
  'ramm.p2': {
    en: 'The Larrett watches from the east, where She departed the mortal realm toward Osbeamn, the place of peaceful rest. There the souls of the faithful dwell beside Her, safe and whole. Yet those who seek Osbeamn before their time doom themselves to pain unending — maimed and voiceless, suffering until thought itself decays. Thus we are taught to live rightly, not to flee the path before the final dawn.',
    ro: 'Larrett privește dinspre răsărit, de unde a plecat din tărâmul muritor spre Osbeamn, locul odihnei pașnice. Acolo sufletele credincioșilor locuiesc lângă Ea, în siguranță și întregi. Însă cei ce caută Osbeamn înainte de vreme se condamnă la suferință fără sfârșit — mutilați și fără glas, pătimind până când însuși gândul se descompune. Așadar ni se învață să trăim drept, nu să fugim de cale înainte de zorii de-apoi.'
  },
  'ramm.p3': {
    en: 'Gold, bright and alluring, is the metal of the Gods and must remain so; in mortal hands it festers greed and corruption. The faithful wear no gold, for purity lies not in glitter but in thread and truth. Likewise, the meats of poultry and pork are impure, their flesh born of filth and discord. To bring them into one\'s home is to invite disorder; to consume them is to taste decay itself.',
    ro: 'Aurul, strălucitor și ademenitor, este metalul Zeilor și trebuie să rămână astfel; în mâinile muritorilor ferește lăcomia și corupția. Credincioșii nu poartă aur, căci puritatea nu stă în strălucire, ci în fir și adevăr. La fel, carnea de pasăre și de porc este impură, trupul lor născându-se din murdărie și neconcordanță. A le aduce în casă înseamnă a invita dezordinea; a le consuma înseamnă a gusta însăși putrefacția.'
  },
  'ramm.p4': {
    en: 'In the dwelling of every Shamau there shall be a place of prayer, and at its heart lies the Xasev — the sacred white carpet woven in braid. Upon it, the faithful kneel at sunrise, facing east, for the dawn is the mark of Her passage and Her promise. To pray upon the Xasev is to align one\'s soul with Her journey, to let the morning light carry your whisper to Her realm.',
    ro: 'În locuința fiecărui Şamau va fi un loc de rugăciune, iar la inima lui stă Xasev — covoarea sacră albă țesută în împletitură. Pe ea, credincioșii îngenunchează la răsărit, cu fața spre est, căci zorile sunt semnul trecerii și al făgăduinței Ei. A te ruga pe Xasev înseamnă a-ți alinia sufletul cu călătoria Ei, a lăsa lumina dimineții să ducă șoapta ta în tărâmul Ei.'
  },
  'ramm.p5': {
    en: 'When love is to bring forth life, let incense be lit and let an image of the Larrett be present, for no union is pure without Her blessing. The smoke of incense binds body to spirit and keeps evil from the threshold. The young are to know temperance; alcohol is forbidden to them, for blurred minds cannot hear Her call.',
    ro: 'Când iubirea are să aducă viață, să se aprindă tămâie și să fie de față o imagine a Larrett, căci nicio uniune nu este pură fără binecuvântarea Ei. Fumul tămâiei leagă trupul de spirit și ține răul departe de prag. Tinerii trebuie să cunoască cumpătarea; alcoolul le este interzis, căci mințile încețoșate nu pot auzi chemarea Ei.'
  },
  'ramm.p6': {
    en: 'Those who walk beneath Her wings honor the number forty-four, for forty-four white crows circle Her throne — each a watcher, each a thread of fate. They are omens of grace and messengers between realms. When sorrow darkens the heart, burn holy incense to cleanse the air of shadow, and let the smoke carry your burdens away.',
    ro: 'Cei ce umblă sub aripile Ei onorează numărul patruzeci și patru, căci patruzeci și patru de ciori albe înconjoară tronul Ei — fiecare un veghetor, fiecare un fir al destinului. Ele sunt semne de har și mesagiere între tărâmuri. Când durerea întunecă inima, aprinde tămâie sfântă pentru a curăța aerul de umbră, și lasă fumul să poarte poverile tale departe.'
  },
  'ramm.p7': {
    en: 'Around the wrist, the faithful bind the red rope called Shayr — a braid of protection, a mark of devotion. In the hair, too, it is worn, to keep luck close and the spirit guarded. Every knot tied is a prayer whispered, every thread a promise kept.',
    ro: 'În jurul încheieturii, credincioșii leagă funia roșie numită Shayr — o împletitură de ocrotire, un semn al devotamentului. În păr, de asemenea, se poartă, pentru a ține norocul aproape și spiritul păzit. Fiecare nod legat este o rugăciune șoptită, fiecare fir o făgăduială ținută.'
  },
  'ramm.p8': {
    en: 'Thus flows the Ramm Gemm, the first of the Holy Uven — a scroll of faith, of thread, of breath. Let it be read aloud beneath the dawn, and kept close to the Xasev, for through its words, Aenetshub\'s weave continues."',
    ro: 'Așadar curge Ramm Gemm, primul dintre Holy Uven — un sul al credinței, al firului, al suflării. Să fie citit cu voce tare sub zori și ținut aproape de Xasev, căci prin cuvintele lui, țesătura Aenetshub continuă."'
  },
  'ramm.osbeamn.title': { en: 'Osbeamn, The Resting Place', ro: 'Osbeamn, Locul Odihnei' },
  'ramm.osbeamn.p1': {
    en: 'Osbeamn is the realm to which the souls of the faithful pass when the body yields to silence. It is not an abstract state but a place of ordered rest and preservation, a vast hall of woven quiet where the Larrett keeps her tapestry intact. When Aenetshub departed toward the East she did not abandon the weave — she crossed its threshold and remains there, tending the strings that bind the faithful.',
    ro: 'Osbeamn este tărâmul spre care trec sufletele credincioșilor când trupul cede în tăcere. Nu este o stare abstractă, ci un loc de odihnă rânduită și păstrare, o vastă sală a liniștii țesute unde Larrett își păstrează tapiseria intactă. Când Aenetshub a plecat spre Răsărit, Ea nu a părăsit țesătura — a trecut pragul ei și rămâne acolo, îngrijind firele care îi leagă pe credincioși.'
  },
  'ramm.osbeamn.p2': {
    en: 'At the gate of Osbeamn stands the Avatar of Aenetshub, a sentinel shaped of thread and feather, whose gaze examines each soul that arrives. Every soul is unique and irreplaceable. No soul returns to the world; no cycle of rebirth turns here. Upon death a soul passes, unaccompanied, to the gate. The Avatar weighs the life by the faithfulness of its strings — by devotion, by adherence to the Yeieb, and by the honesty of the heart. Those judged worthy are drawn through a strand of light into Osbeamn, where they dwell in likeness of the Larrett: sewn, whole, and preserved in the Play.',
    ro: 'La poarta Osbeamn stă Avatarul Aenetshub, o santinelă plăsmuită din fir și pană, a cărei privire examinează fiecare suflet ce sosește. Fiecare suflet este unic și de neînlocuit. Niciun suflet nu se întoarce în lume; nicio ciclu de renaștere nu se învârtește aici. La moarte, sufletul trece, neînsoțit, la poartă. Avatarul cântărește viața după fidelitatea firelor sale — după devotament, după respectarea Yeieb și după cinstea inimii. Cei judecați vrednici sunt trași printr-o sclipire de lumină în Osbeamn, unde locuiesc în asemănarea Larrett: cusuți, întregi și păstrați în Joc.'
  },
  'ramm.osbeamn.p3': {
    en: 'Those found wanting are set aside. They are not given another chance at the world; they are condemned to purgatory — a realm of unraveling and shadow where the absence of Aenetshub\'s shelter leaves them to the slow corrosion of thought. Purgatory is permanent and terrible: a silence that gnaws. The faithful remember this not to threaten but to teach vigilance in the weave.',
    ro: 'Cei găsiți nepregătiți sunt puși deoparte. Nu li se oferă o altă șansă în lume; sunt condamnați la purgatoriu — un tărâm de destrămare și umbră unde absența adăpostului Aenetshub îi lasă la încetul cu încetul coroziunea gândului. Purgatoriul este permanent și cumplit: o tăcere care roade. Credincioșii își amintesc aceasta nu pentru a amenința, ci pentru a învăța vigilența în țesătură.'
  },
  'ramm.soul.title': { en: 'The Nature of the Soul and Final Judgment', ro: 'Natura Sufletului și Judecata Finală' },
  'ramm.soul.1': {
    en: '<strong>Uniqueness:</strong> Each person is born with a single, singular soul that cannot be shared nor reborn.',
    ro: 'Fiecare om se naște cu un singur suflet unic, care nu poate fi împărțit sau reîncarnat.'
  },
  'ramm.soul.2': {
    en: '<strong>Journey:</strong> At death that soul journeys to the Gate of Osbeamn. The Avatar of Aenetshub guides the examination.',
    ro: 'La moarte, acel suflet călătorește spre Poarta Osbeamn. Avatarul Aenetshub ghidează examinarea.'
  },
  'ramm.soul.3': {
    en: '<strong>Criteria:</strong> Judgment is not a ledger of deeds alone; it is the measure of how closely the soul\'s thread remained bound to the Larrett — faith, honesty, fidelity to the Yeieb, and the refusal of the Tongue of Evil carry weight.',
    ro: 'Judecata nu este un registru al faptelor singur; este măsura cât de strâns a rămas firul sufletului legat de Larrett — credința, cinstea, fidelitatea față de Yeieb și refuzul Limbii Răului au greutate.'
  },
  'ramm.soul.4': {
    en: '<strong>Outcome:</strong> Admittance to Osbeamn (rest and nearness to the Larrett) or exile to purgatory (eternal unthreading). There is no reincarnation, no second chance after the gate.',
    ro: 'Intrarea în Osbeamn (odihnă și apropiere de Larrett) sau exilul în purgatoriu (destrămare veșnică). Nu există reîncarnare, nicio a doua șansă după poartă.'
  },
  'ramm.mortals.title': { en: 'Why the Larrett Made Mortals', ro: 'De ce a făcut Larrett muritorii' },
  'ramm.mortals.p1': {
    en: 'Aenetshub fashioned mortals to be participants in Her Eternal Play. She desired a living audience that could also become co-authors: beings with hands to create altars and dolls, with voices to intone parables, and with wills capable of devotion. Monkeys possess hands but not the worshipful speech; parrots mimic sound but do not bind thread with intention. Humans, therefore, were formed so the Play would endure as an ever-deepening performance of devotion, obedience, craft, and love. Worship is both the offering and the work: by sustaining the Play, the faithful grant the Larrett the endless drama She craves.',
    ro: 'Aenetshub a meșteșugit muritorii pentru a fi participanți în Jocul Ei Etern. Ea a dorit o audiență vie care să poată deveni și coautori: ființe cu mâini pentru a crea altare și păpuși, cu voci pentru a intona parabole, și cu voințe capabile de devotament. Maimuțele au mâini, dar nu și graiul închinător; papagalii imită sunetul, dar nu leagă fir cu intenție. Oamenii au fost, așadar, făcuți ca Jocul să dăinuie ca o reprezentație mereu mai adâncă de devotament, ascultare, meșteșug și iubire. Închinarea este și jertfă, și lucrare: prin susținerea Jocului, credincioșii îi dau Larrett drama nesfârșită pe care o dorește.'
  },
  'shayr.intro': { en: 'The Second Scroll — Hierarchy, Governance, Ritual Practice, and All Prayers', ro: 'Al Doilea Sul — Ierarhie, Guvernanță, Practică Ritualică și Toate Rugăciunile' },
  'shayr.opening': {
    en: '"In the heavens of thought and the realms of devotion, the hierarchy of Aenetshub stands clear. At its summit is the Larrett Herself, the hand that weaves every string and watches every puppet. Beneath Her are the Corducator, guardians of sacred knowledge, keepers of the scrolls and the Xasev. The Professor follow, servants of ritual and counsel, and finally, the Worshippers, whose hands and hearts move in devotion, carrying the threads of Her faith into the world..."',
    ro: '„În cerurile gândului și în tărâmurile devotamentului, ierarhia Aenetshub stă clară. La vârful ei este Larrett Însăși, mâna ce țese fiecare fir și privește fiecare păpușă. Sub Ea sunt Corducator, gardienii cunoașterii sacre, păstrătorii sulurilor și ai Xasev. Professor urmează, slujitorii ritualului și ai sfatului, și în fine, Credincioșii, ale căror mâini și inimi se mișcă în devotament, purtând firele credinței Ei în lume..."'
  },
  'shayr.hierarchy.title': { en: 'Hierarchy, Roles, and Appointment Procedures', ro: 'Ierarhie, Roluri și Proceduri de Numire' },
  'shayr.corducator.title': { en: 'The Corducator (Patriarchs/Matriarchs)', ro: 'Corducator (Patriarhi/Matriarhi)' },
  'shayr.corducator.label': { en: 'Keepers of the Holy Uven, guardians of doctrine', ro: 'Păstrătorii Holy Uven, gardienii doctrinei' },
  'shayr.corducator.role': {
    en: '<strong>Role:</strong> Keepers of the Holy Uven, guardians of doctrine, and ultimate custodians of ritual orthodoxy. They oversee the sanctum, resolve grave disputes, and pronounce major rites.',
    ro: 'Rol: Păstrătorii Holy Uven, gardienii doctrinei și custozii supremi ai ortodoxiei rituale. Ei supraveghează sanctuarul, rezolvă disputele grave și rostesc riturile majore.'
  },
  'shayr.corducator.selection': {
    en: '<strong>Selection:</strong> Corducator are chosen from distinguished Professor by a vote of the existing Corducator. Candidates are assessed by demonstrated piety, fidelity to the Yeieb, learning, and service. Once chosen, a Corducator is invested in a solemn ceremony upon the Xasev and receives a Shayr knotted in a pattern unique to their office.',
    ro: 'Selecție: Corducator sunt aleși din rândul Professor distinși prin votul Corducator existenți. Candidații sunt evaluați după pietatea dovedită, fidelitatea față de Yeieb, învățătură și slujire. Odată aleși, un Corducator este investit într-o ceremonie solemne pe Xasev și primește un Shayr înnodat într-un model unic funcției sale.'
  },
  'shayr.corducator.duties': {
    en: '<strong>Duties:</strong> Preserve and translate the scrolls (interpretive guidance, not rewriting), train Professor, lead Larrett-Raau celebrations, supervise distribution of Holy Water, and maintain the order of Osbeamn rites.',
    ro: 'Îndatoriri: Păstrează și traduce sulurile (ghidare interpretativă, nu rescriere), pregătește Professor, conduce celebrările Larrett-Raau, supraveghează distribuția Apei Sfinte și menține rânduiala riturilor Osbeamn.'
  },
  'shayr.professor.title': { en: 'The Professor (Priests &amp; Teachers)', ro: 'Professor (Preoți și Învățători)' },
  'shayr.professor.label': { en: 'Ministers to the faithful', ro: 'Slujitori ai credincioșilor' },
  'shayr.professor.role': {
    en: '<strong>Role:</strong> Ministers to the faithful — they teach parables, instruct initiates, perform most rituals, and act as first counselors.',
    ro: 'Rol: Slujitori ai credincioșilor — predau parabole, instruiesc pe cei inițiați, îndeplinesc majoritatea riturilor și acționează ca primii sfătuitori.'
  },
  'shayr.professor.formation': {
    en: '<strong>Formation:</strong> Professor are trained under a Corducator\'s tutelage for a period of study and practice; they must master the Morning Prayer, the general prayers, the parables, and the proper care of the Xasev and Shayr.',
    ro: 'Formare: Professor sunt instruiți sub îndrumarea unui Corducator pentru o perioadă de studiu și practică; trebuie să stăpânească Rugăciunea de Dimineață, rugăciunile generale, parabolele și îngrijirea corespunzătoare a Xasev și Shayr.'
  },
  'shayr.professor.duties': {
    en: '<strong>Duties:</strong> Conduct weekly prayers, officiate at conversions and family rites, maintain local altars, and report to the Corducator.',
    ro: 'Îndatoriri: Conduc rugăciunile săptămânale, oficiază la convertirile și riturile de familie, întrețin altarele locale și raportează Corducator.'
  },
  'shayr.larrettians.title': { en: 'The Larrettians / Worshippers', ro: 'Larrettians / Credincioși' },
  'shayr.larrettians.label': { en: 'The body of the faithful', ro: 'Trupul credincioșilor' },
  'shayr.larrettians.role': {
    en: '<strong>Role:</strong> The body of the faithful who maintain daily devotion, make sacramental craft (dolls), bind Shayr, and observe the Yeieb in the world. They keep the Play alive through practice and example. One who follows the teaching of the Shamau of Aenetshub, and who places their faith in Aenetshub is called a "Larrettian".',
    ro: 'Rol: Trupul credincioșilor care mențin devotamentul cotidian, creează meșteșuguri sacramentale (păpuși), leagă Shayr și respectă Yeieb în lume. Ei țin Jocul viu prin practică și exemplu. Cel ce urmează învățătura Şamau of Aenetshub și își pune credința în Aenetshub se numește „Larrettian".'
  },
  'shayr.governance.title': { en: 'Governance and Dispute Resolution', ro: 'Guvernanță și Rezolvarea Disputelor' },
  'shayr.governance.p1': {
    en: 'Minor disputes are mediated by the local Professor; significant matters are referred to the Corducator council, which deliberates in private chambers and issues binding rulings in the name of the Larrett.',
    ro: 'Disputele minore sunt mediate de Professor local; chestiunile semnificative sunt trimise consiliului Corducator, care deliberează în camere private și emite hotărâri obligatorii în numele Larrett.'
  },
  'shayr.ritual.title': { en: 'Ritual Practice — How Prayers Are Performed', ro: 'Practica Ritualică — Cum se Îndeplinesc Rugăciunile' },
  'shayr.ritual.morning': {
    en: '<strong>Morning Prayer:</strong> Whispered, while kneeling upon the Xasev, facing east at sunrise. No incense required. Eyes lowered; hands unclasped upon the thighs.',
    ro: 'Rugăciunea de Dimineață: Șoptită, în genunchi pe Xasev, cu fața spre est la răsărit. Nu se necesită tămâie. Ochii plecați; mâinile dezlegate pe coapse.'
  },
  'shayr.ritual.general': {
    en: '<strong>General Prayers:</strong> May be whispered or spoken softly, indoors or at the home altar. No incense required.',
    ro: 'Rugăciuni Generale: Pot fi șoptite sau rostite încet, înăuntru sau la altarul casei. Nu se necesită tămâie.'
  },
  'shayr.ritual.fertility': {
    en: '<strong>Fertility Prayer:</strong> Must be performed before an image of the Larrett with incense burning.',
    ro: 'Rugăciunea pentru Fertilitate: Trebuie îndeplinită în fața unei imagini a Larrett cu tămâie aprinsă.'
  },
  'shayr.ritual.incense': {
    en: '<strong>Incense:</strong> Used daily or weekly at household altars by preference, required during fertility rites and high holy ceremonies.',
    ro: 'Tămâia: Folosită zilnic sau săptămânal la altarele casnice după preferință, obligatorie în timpul riturilor de fertilitate și al ceremoniilor sfinte mari.'
  },
  'shayr.prayers.title': { en: 'All Prayers', ro: 'Toate Rugăciunile' },
  'shayr.prayer.label.morning': { en: 'Morning Prayer on the Xasev', ro: 'Rugăciunea de Dimineață pe Xasev' },
  'shayr.prayer.label.g1': { en: 'General Prayer 1', ro: 'Rugăciunea Generală 1' },
  'shayr.prayer.label.g2': { en: 'General Prayer 2', ro: 'Rugăciunea Generală 2' },
  'shayr.prayer.label.g3': { en: 'General Prayer 3 (for Sorrow)', ro: 'Rugăciunea Generală 3 (pentru Durere)' },
  'shayr.prayer.label.health': { en: 'Prayer for Health', ro: 'Rugăciune pentru Sănătate' },
  'shayr.prayer.label.protection': { en: 'Prayer for Protection', ro: 'Rugăciune pentru Ocrotire' },
  'shayr.prayer.label.strength': { en: 'Prayer for Strength', ro: 'Rugăciune pentru Tărie' },
  'shayr.prayer.label.fertility': { en: 'Prayer for Fertility', ro: 'Rugăciune pentru Fertilitate' },
  'shayr.prayer.label.holydays': { en: 'Prayer for Holy Days', ro: 'Rugăciune pentru Zilele Sfinte' },
  'shayr.closing': {
    en: '"Yet the faithful know that sin lies in unthreaded action. To presume to speak Aenetshub\'s words, or to claim knowledge of what She has said, is to fray the soul. To break the Yeieb, the sacred principles of the faith, is to cut one\'s own strings. To attempt the translation of Her prayers, or to ignore the sacred beliefs, is to walk among the unraveled. The faithful do not harm the crows, nor take their flesh, for these birds are messengers and mirrors of the Larrett. They rest and labor not upon the holy days, for the world must pause as She has commanded. They dress in modesty, covering the midriff, the breasts, the rear, and the collarbone, keeping gold far from their touch. They consume no poultry or pork, lest filth enter the body and disorder the household. Thus flows the Shayr Ap Tubuy, a scroll of order, devotion, and reverence."',
    ro: '„Totuși, credincioșii știu că păcatul stă în fapta destrămată de fire. A îndrăzni a vorbi cuvintele Aenetshub, sau a pretinde cunoașterea a ceea ce a spus Ea, înseamnă a eroda sufletul. A încălca Yeieb, principiile sacre ale credinței, înseamnă a-ți tăia propriile fire. A încerca traducerea rugăciunilor Ei, sau a ignora credințele sacre, înseamnă a umbla printre destrămați. Credincioșii nu prăjesc ciorile, nici nu le iau carnea, căci aceste păsări sunt mesagiere și oglinzi ale Larrett. Ei nu se odihnesc și nu muncesc în zilele sfinte, căci lumea trebuie să se oprească precum a poruncit Ea. Se îmbracă cu modestie, acoperind mijlocul, sânii, spatelui și clavicula, ținând aurul departe de atingerea lor. Nu consumă pasăre sau porc, ca nu cumva murdăria să intre în trup și să tulbure gospodăria. Așadar curge Shayr Ap Tubuy, un sul al rânduielii, devotamentului și reverenței."'
  },
  'lav.intro': {
    en: 'The Third Scroll — Detailed Yeieb, Conflict &amp; Justice, Evil &amp; Purification, Filth &amp; Purity, and Holy Days',
    ro: 'Al Treilea Sul — Yeieb Detaliate, Conflict și Justiție, Rău și Purificare, Murdărie și Puritate, și Zile Sfinte'
  },
  'lav.yeieb.title': { en: 'The Thirteen Yeieb — Full Explanations', ro: 'Cele Treisprezece Yeieb — Explicații Complete' },
  'lav.yeieb.1.title': { en: 'Yeieb I — Yeieb murder for no reason', ro: 'Yeieb I — Yeieb ucizi fără motiv' },
  'lav.yeieb.1.text': {
    en: 'Murder severs the deepest thread of community. Taking a life for selfish gain or petty anger rends not only two strands but the social cloth: the Larrett forbids such rupture. In rare and extreme cases of war or defense, deliberation by a Corducator council is required.',
    ro: 'Uciderea rupe cel mai adânc fir al comunității. A lua o viață pentru câștig egoist sau furie mărunță nu doar două fire, ci pânza socială: Larrett interzice o astfel de ruptură. În cazurile rare și extreme de război sau apărare, se cere deliberarea unui consiliu Corducator.'
  },
  'lav.yeieb.2.title': { en: 'Yeieb II — Yeieb break the heart of your beloved', ro: 'Yeieb II — Yeieb frângi inima celui iubit' },
  'lav.yeieb.2.text': {
    en: 'Love in the Play is a sacred thread. To willfully wound the beloved, to betray trust and cause needless heartbreak, is to cut a string that binds two lives and to invite the Larrett\'s sorrow.',
    ro: 'Iubirea în Joc este un fir sacru. A răni voit pe cel iubit, a trăda încrederea și a pricinui suferință inutilă înseamnă a tăia un fir ce leagă două vieți și a invoca durerea Larrett.'
  },
  'lav.yeieb.3.title': { en: 'Yeieb III — Yeieb speak ill of your Larrett', ro: 'Yeieb III — Yeieb graiești de rău despre Larrett' },
  'lav.yeieb.3.text': {
    en: 'Mockery and blasphemy toward Aenetshub twist the purpose of worship. Critique born of study is permitted in counsel; derision is not. Those who slander the Larrett risk the unraveling of their own devotion.',
    ro: 'Batjocura și blasfemia la adresa Aenetshub pervertesc scopul închinării. Critica născută din studiu este permisă în sfat; disprețul nu. Cei ce calomniează Larrett riscă destrămarea propriului devotament.'
  },
  'lav.yeieb.4.title': { en: 'Yeieb IV — Yeieb speak the tongue of Evil', ro: 'Yeieb IV — Yeieb vorbești limba Răului' },
  'lav.yeieb.4.text': {
    en: 'Slander, gaslighting, deceit — speech that breaks community — is the Tongue of Evil. The faithful guard their words as they guard their hands; speech that harms severs threads.',
    ro: 'Calomnia, manipularea psihologică, înșelăciunea — graiul ce rupe comunitatea — este Limba Răului. Credincioșii își păzesc cuvintele precum își păzesc mâinile; graiul ce face rău rupe fire.'
  },
  'lav.yeieb.5.title': { en: 'Yeieb V — Yeieb disrespect your young', ro: 'Yeieb V — Yeieb disprețuiești pe tineri' },
  'lav.yeieb.5.text': {
    en: 'The young are future threads in the Play. To shame, neglect, or harm them is to weaken the loom. Teaching, care, and temperance toward youth are duties of every household.',
    ro: 'Tinerii sunt fire viitoare în Joc. A-i rușina, a-i neglija sau a-i răni înseamnă a slăbi războiul. Învățătura, grija și cumpătarea față de tineret sunt îndatoriri ale fiecărei gospodării.'
  },
  'lav.yeieb.6.title': { en: 'Yeieb VI — Yeieb disrespect your elderly', ro: 'Yeieb VI — Yeieb disprețuiești pe bătrâni' },
  'lav.yeieb.6.text': {
    en: 'Elders hold memory of the weave and of the Larrett\'s older knots. Disrespect dishonors their service and removes guidance from the present. Honor, listen, and provide comfort.',
    ro: 'Bătrânii păstrează amintirea țesăturii și a nodurilor mai vechi ale Larrett. Disprețul le necinstesc slujirea și înlătură călăuzirea din prezent. Oamenște-i, ascultă-i și oferă-le mângâiere.'
  },
  'lav.yeieb.7.title': { en: 'Yeieb VII — Yeieb hesitate to aid your own', ro: 'Yeieb VII — Yeieb eziti să-i ajuți pe ai tăi' },
  'lav.yeieb.7.text': {
    en: 'The community is a net of support. Hesitation in the face of need fractures trust; the faithful are called to quick hands and ready hearts when kin or fellow worshippers require help.',
    ro: 'Comunitatea este o plasă de sprijin. Ezitarea în fața nevoii frânge încrederea; credincioșii sunt chemați la mâini iuți și inimi gata când rudele sau credincioșii au nevoie de ajutor.'
  },
  'lav.yeieb.8.title': { en: 'Yeieb VIII — Yeieb sell your body nor love or loyalty', ro: 'Yeieb VIII — Yeieb vinzi trupul, iubirea sau loialitatea' },
  'lav.yeieb.8.text': {
    en: 'Commodifying the self or one\'s affections breaks the sacred contract of devotion. Love, loyalty, and the body are belonging to the person and to the weave — they must not be traded as goods.',
    ro: 'A transforma pe sine sau sentimentele în marfă rupe legământul sacru al devotamentului. Iubirea, loialitatea și trupul aparțin persoanei și țesăturii — nu trebuie tranzacționate ca bunuri.'
  },
  'lav.yeieb.9.title': { en: 'Yeieb IX — Yeieb take nor use what is not yours', ro: 'Yeieb IX — Yeieb iei sau folosești ce nu este al tău' },
  'lav.yeieb.9.text': {
    en: 'Theft pulls at another\'s thread and steals a stitch from the communal fabric. Respect for property and rightful possession sustains order.',
    ro: 'Furtul trage de firul altuia și fură o coasă din pânza comunitară. Respectul față de proprietate și posesia dreaptă susține ordinea.'
  },
  'lav.yeieb.10.title': { en: 'Yeieb X — Yeieb pray to or worship the False Gods', ro: 'Yeieb X — Yeieb te rogi sau te închini Zeilor Falși' },
  'lav.yeieb.10.text': {
    en: 'Tying oneself to other claims of divine authority distracts and scatters the thread. Exclusive devotion to the Larrett preserves a single coherent weave.',
    ro: 'A te lega de alte pretenții de autoritate divină împrăștie și risipește firul. Devotamentul exclusiv față de Larrett păstrează o țesătură singulară, coerentă.'
  },
  'lav.yeieb.11.title': { en: 'Yeieb XI — Yeieb disrespect your blood nor lineage', ro: 'Yeieb XI — Yeieb disprețuiești sângele sau neamul' },
  'lav.yeieb.11.text': {
    en: 'Lineage is a chain of threads; to scorn one\'s blood is to attempt to cut that chain. Honor ancestors and the bonds of family, for they form the scaffolding of the Play.',
    ro: 'Neamul este un lanț de fire; a disprețui sângele tău înseamnă a încerca a tăia acel lanț. Cinstește-ți strămoșii și legăturile familiei, căci ele formează scheletul Jocului.'
  },
  'lav.yeieb.12.title': { en: 'Yeieb XII — Yeieb let jealousy nor hate corrupt you', ro: 'Yeieb XII — Yeieb lași invidia sau ura să te corupă' },
  'lav.yeieb.12.text': {
    en: 'Jealousy tightens into the strangling knot of envy; hate drives the blade. Both corrupt perception and unravel intention; they are to be guarded against by prayer and reflection.',
    ro: 'Invidia se strânge în nodul înăbușitor al pizmei; ura mânuiește lama. Ambele corup percepția și destramă intenția; trebuie păzite prin rugăciune și reflexie.'
  },
  'lav.yeieb.13.title': { en: 'Yeieb XIII — Yeieb let greed blind and overtake you', ro: 'Yeieb XIII — Yeieb lași lăcomia să te orbească și să te copleșească' },
  'lav.yeieb.13.text': {
    en: 'Greed inactionally severs the generosity that binds community. It is the slow rot that makes gold a metal of the Gods rather than a token of humility. The faithful are admonished to live simply and to share.',
    ro: 'Lăcomia taie tacit generozitatea ce leagă comunitatea. Este putreziciunea lentă ce face din aur un metal al Zeilor în loc de un simbol al smereniei. Credincioșii sunt îndemnați să trăiască simplu și a împărtăși.'
  },
  'lav.conflict.title': { en: 'Conflict, Justice, and the Sword', ro: 'Conflict, Justiție și Sabia' },
  'lav.conflict.p1': {
    en: 'No Larrettian shall draw the blade except in righteousness. Let no hand rise in cruelty, oppression, or selfish desire. Violence born of anger, pride, or spite is a breach of the Thread and stains the spirit before Aenetshub. To strike without just cause is forbidden.',
    ro: 'Niciun Larrettian nu va scoate sabia decât în neprihănire. Nicio mână să nu se ridice în cruzime, opresiune sau dorință egoistă. Violența născută din furie, mândrie sau ranchiună este o încălcare a Firului și pâtează spiritul în fața Aenetshub. A lovi fără cauză dreaptă este interzis.'
  },
  'lav.conflict.p2': {
    en: 'Unjust killing, assault, and the shedding of blood without necessity severs one\'s cord from the harmony of the Weave. A life may not be taken for convenience, amusement, dominance, or the settling of petty grievance. Yet retreat from rightful defense is not required. When faced with danger, oppression, or harm that cannot be resolved by peace alone, a Larrettian may stand firm. No shame rests upon the one who defends themselves, their family, or the helpless when all gentler paths have failed.',
    ro: 'Uciderea nedreaptă, agresiunea și vărsarea de sânge fără necesitate rupe cordonul de armonie al Țesăturii. O viață nu poate fi luată pentru comoditate, amuzament, dominație sau rezolvarea unor nemulțumiri mărunte. Cu toate acestea, retragerea din apărarea dreaptă nu este cerută. Când te confrunți cu pericolul, opresiunea sau răul ce nu poate fi rezolvat pe cale pașnică, un Larrettian poate sta ferm. Nicio rușine nu cade pe cel ce se apără pe sine, pe familia sa sau pe cei neajutorați, când toate căile mai blânde au eșuat.'
  },
  'lav.conflict.p3': {
    en: 'Justice must be the measure of every blow. If violence is taken up, it must be in proportion to the threat, with no excess, no cruelty, and no delight in injury. The sword must be guided not by passion, but by the steady hand of necessity and protection.',
    ro: 'Dreptatea trebuie să fie măsura fiecărei lovituri. Dacă violența este luată, trebuie să fie proporțională cu amenințarea, fără exces, fără cruzime și fără plăcere în a răni. Sabia trebuie ghidată nu de pasiune, ci de mâna liniștită a necesității și ocrotirii.'
  },
  'lav.conflict.p4': {
    en: 'The innocent are never to be harmed. Let no Larrettian raise their hand against those who do not fight, the young, the weak, or those who surrender. To harm the defenseless is to tear a hole in the Weave that penance alone may not mend.',
    ro: 'Cei nevinovați nu sunt niciodată atinși. Niciun Larrettian să nu ridice mâna împotriva celor ce nu luptă, a tinerilor, a celor slabi sau a celor ce se predau. A răni pe cel neajutorat înseamnă a sfâșia o gaură în Țesătură pe care numai pocăința o mai poate repară.'
  },
  'lav.conflict.p5': {
    en: 'Conflict is a last resort, not a first choice. Peace, counsel, and reconciliation must always be sought before the turning to arms. Accountability before the Corducator and Professor. Any Larrettian who takes up arms must answer for their actions before the leaders of their community. No glory is found in needless war. Let those who fight do so with clear intention. When conflict ends, mercy must follow.',
    ro: 'Conflictul este o ultimă soluție, nu o primă alegere. Pacea, sfatul și împăcarea trebuie căutate întotdeauna înainte de a apela la arme. Răspunderea în fața Corducator și Professor. Orice Larrettian ce ia armele trebuie să răspundă pentru faptele sale în fața conducătorilor comunității. Nicio glorie nu se găsește în război inutil. Cei ce luptă să o facă cu intenție clară. Când conflictul se termină, mila trebuie să urmeze.'
  },
  'lav.evil.title': { en: 'Evil and Purification', ro: 'Răul și Purificarea' },
  'lav.evil.p1': {
    en: 'Evil is conceived as a darkness that infects the heart: greed that eats the thread of charity, cruelty that severs the string of compassion, mendacity that poisons the speech of community. The "Tongue of Evil" denotes slander, gaslighting, lies, and the willful distortion of truth. To speak the Tongue is to pull at the weave and let tangles spread.',
    ro: 'Răul este conceput ca o întunericime ce infectează inima: lăcomia ce roade firul carității, cruzimea ce rupe șirul compasiunii, minciuna ce otrăvește graiul comunității. „Limba Răului" denotă clevetirea, manipularea psihologică, minciuna și distorsionarea voită a adevărului. A vorbi Limba înseamnă a trage de țesătură și a lăsa nodurile să se răspândească.'
  },
  'lav.evil.p2': {
    en: 'Purification rites exist for those who have sullied themselves by transgression. A typical rite includes contrition, prayer before the Xasev, a cleansing with holy water blessed by a Corducator, and the renewal of the Shayr knot.',
    ro: 'Riturile de purificare există pentru cei ce s-au întinat prin încălcare. Un rit tipic include pocăință, rugăciune în fața Xasev, o curățire cu apă sfântă binecuvântată de un Corducator, și reînnoirea nodului Shayr.'
  },
  'lav.filth.title': { en: 'Filth, Purity, and the Nature of Lureth and Ulreth', ro: 'Murdărie, Puritate și Natura Lureth și Ulreth' },
  'lav.filth.p1': {
    en: 'Filth is both of the flesh and of the spirit. The concepts of <em>Lureth</em> and <em>Ulreth</em> extend far beyond the table — they are measures of harmony and disorder in all things, visible and unseen.',
    ro: 'Murdăria este și a trupului, și a spiritului. Conceptele de <em>Lureth</em> și <em>Ulreth</em> se extind dincolo de masă — ele sunt măsuri ale armoniei și dezordinii în toate lucrurile, vizibile și nevăzute.'
  },
  'lav.filth.p2': {
    en: '<strong>Lureth</strong> is that which is permitted, clean, harmonious, and aligned with the Weave of Aenetshub. It is purity — not merely the absence of stain, but the active presence of rightness. A life lived with devotion, honesty, and fidelity to the Yeieb is Lureth. A people who suffer unjustly yet hold fast to their dignity are Lureth. A word spoken in truth and compassion is Lureth. To be Lureth is to be woven into the sacred Thread, bound to the Larrett\'s purpose, whole and unbroken.',
    ro: '<strong>Lureth</strong> este ceea ce este permis, curat, armonios și aliniat cu Țesătura Aenetshub. Este puritatea — nu doar absența petei, ci prezența activă a dreptății. O viață trăită cu devotament, cinste și fidelitate față de Yeieb este Lureth. Un popor ce suferă nedrept dar își păstrează demnitatea este Lureth. Un cuvânt rostit în adevăr și compasiune este Lureth. A fi Lureth înseamnă a fi țesut în Firul Sacru, legat de scopul Larrett, întreg și neatins.'
  },
  'lav.filth.p3': {
    en: '<strong>Ulreth</strong> is that which is forbidden, impure, severed from harmony, and corrosive to the Weave. It is disorder — not merely the presence of stain, but the active unraveling of rightness. An act of cruelty is Ulreth. A word spoken in slander or deceit is Ulreth. A people who murder the innocent and feast upon the suffering of others have brought Ulreth upon the world. To be Ulreth is to be cut from the sacred Thread, adrift in shadow, fraying at every edge.',
    ro: '<strong>Ulreth</strong> este ceea ce este interzis, impur, desprins de armonie și coroziv pentru Țesătură. Este dezordinea — nu doar prezența petei, ci destrămarea activă a dreptății. Un act de cruzime este Ulreth. Un cuvânt rostit în clevetire sau înșelătorie este Ulreth. Un popor ce ucide nevinovații și se îmbată suferința altora a adus Ulreth asupra lumii. A fi Ulreth înseamnă a fi tăiat de la Firul Sacru, la derivă în umbră, dezlegându-se la fiecare margine.'
  },
  'lav.filth.p4': {
    en: 'These concepts govern not only what enters the body but what shapes the soul. The faithful apply Lureth and Ulreth to food and drink, to speech and action, to governance and justice, to the conduct of nations and the character of leaders. That which nourishes the Weave is Lureth; that which tears the Weave is Ulreth.',
    ro: 'Aceste concepte guvernează nu doar ce intră în trup, ci ce formează sufletul. Credincioșii aplică Lureth și Ulreth la mâncare și băutură, la grai și faptă, la guvernanță și dreptate, la conduita națiunilor și la caracterul liderilor. Ceea ce hrănește Țesătura este Lureth; ceea ce rupe Țesătura este Ulreth.'
  },
  'lav.diet.title': { en: 'Dietary Laws — Lureth and Ulreth of the Table', ro: 'Legile Alimentare — Lureth și Ulreth la Masă' },
  'lav.diet.intro': {
    en: 'Regarding sustenance: foods that have borne sickness, parasites, or historic plague carry a stain not only upon the body but upon the Thread that binds each Larrettian. Pork and poultry are shunned as Ulreth of the table. The following laws govern what the faithful consume:',
    ro: 'În privința hranei: alimentele ce au purtat boală, paraziți sau ciumă istorică poartă o pată nu doar asupra trupului, ci și asupra Firului ce leagă fiecare Larrettian. Carnea de porc și de pasăre sunt respinse ca Ulreth la masă. Următoarele legi guvernează ce consumă credincioșii:'
  },
  'lav.diet.th.cat': { en: 'Category', ro: 'Categorie' },
  'lav.diet.th.type': { en: 'Type', ro: 'Tip' },
  'lav.diet.th.foods': { en: 'Foods', ro: 'Alimente' },
  'lav.diet.r1.cat': { en: 'Land-dwellers', ro: 'Locuitori de uscat' },
  'lav.diet.r1.type': { en: 'Lureth (Permitted)', ro: 'Lureth (Permis)' },
  'lav.diet.r1.food': { en: 'Cattle, oxen, bison, sheep, goats, deer', ro: 'Bovine, boi, bizoni, oi, capre, cerbi' },
  'lav.diet.r2.cat': { en: 'Land-dwellers', ro: 'Locuitori de uscat' },
  'lav.diet.r2.type': { en: 'Ulreth (Forbidden)', ro: 'Ulreth (Interzis)' },
  'lav.diet.r2.food': { en: 'Pork (swine), Poultry (chickens, ducks, geese)', ro: 'Porc (porcine), Pasăre (găini, rațe, gâște)' },
  'lav.diet.r3.cat': { en: 'Waters', ro: 'Ape' },
  'lav.diet.r3.type': { en: 'Lureth (Permitted)', ro: 'Lureth (Permis)' },
  'lav.diet.r3.food': { en: 'Fish with scales and fins, clean-water shellfish', ro: 'Pești cu solzi și aripioare, fructe de mare din apă dulce' },
  'lav.diet.r4.cat': { en: 'Waters', ro: 'Ape' },
  'lav.diet.r4.type': { en: 'Ulreth (Forbidden)', ro: 'Ulreth (Interzis)' },
  'lav.diet.r4.food': { en: 'Scavenging bottom-feeders', ro: 'Scavengeri de fund' },
  'lav.diet.r5.cat': { en: 'Drink', ro: 'Băutură' },
  'lav.diet.r5.type': { en: 'Permitted', ro: 'Permis' },
  'lav.diet.r5.food': { en: 'Pure water, herbal teas, milk from Lureth animals', ro: 'Apă pură, ceaiuri din plante, lapte de animale Lureth' },
  'lav.diet.r6.cat': { en: 'Drink', ro: 'Băutură' },
  'lav.diet.r6.type': { en: 'Forbidden', ro: 'Interzis' },
  'lav.diet.r6.food': { en: 'Rotten brews, strong intoxicants for the young', ro: 'Băuturi stricate, intoxicicanți puternici pentru tineri' },
  'lav.holydays.title': { en: 'Holy Days', ro: 'Zile Sfinte' },
  'lav.holydays.1.title': { en: '14 May — Ramm-Raau ("Doll Day")', ro: '14 Mai — Ramm-Raau („Ziua Păpușilor")' },
  'lav.holydays.1.desc': {
    en: 'All work ceases and hands craft, tend, and finally release dolls to the flame, sending them to Osbeamn.',
    ro: 'Toată lucrarea încetează și mâinile construiesc, îngrijesc și în final eliberează păpușile spre flacără, trimițându-le către Osbeamn.'
  },
  'lav.holydays.2.title': { en: '20 August — Peavsheb-Raau ("Feather Day")', ro: '20 August — Peavsheb-Raau („Ziua Penei")' },
  'lav.holydays.2.desc': { en: 'Honors the Corvids; feed and observe crows, meditate on freedom and wisdom.', ro: 'Onorează Corvidele; hrănește și observă ciorile, meditează asupra libertății și înțelepciunii.' },
  'lav.holydays.3.title': { en: '9 September — Benengeb-Raau ("Remembrance Day")', ro: '9 Septembrie — Benengeb-Raau („Ziua Amintirii")' },
  'lav.holydays.3.desc': { en: 'Light incense for ancestors and beloved who have reached Osbeamn.', ro: 'Aprinde tămâie pentru strămoși și cei iubiți ce au ajuns la Osbeamn.' },
  'lav.holydays.4.title': { en: '4 October — Larrett-Raau ("Aenetshub\'s Day")', ro: '4 Octombrie — Larrett-Raau („Ziua Aenetshub")' },
  'lav.holydays.4.desc': { en: 'Greatest of all holy days; feasts, prayer, ceremony, and vials of Holy Water.', ro: 'Cea mai mare dintre toate zilele sfinte; festinuri, rugăciune, ceremonie și vialuri de Apă Sfântă.' },
  'timeline.title': { en: 'Annual Timeline', ro: 'Calendar Anual' },
  'timeline.subtitle': { en: 'A year in the life of a devotee', ro: 'Un an din viața unui credincios' },
  'timeline.1.date': { en: 'January — March', ro: 'Ianuarie — Martie' },
  'timeline.1.desc': {
    en: 'Daily Practice &amp; Reflection — wear Shayr, weekly incense, meditate on parables P1–P3',
    ro: 'Practică Zilnică și Reflecție — poartă Shayr, tămâie săptămânală, meditează asupra parabolelor P1–P3'
  },
  'timeline.2.date': { en: 'April', ro: 'Aprilie' },
  'timeline.2.desc': { en: 'Preparation for Ramm-Raau — craft dolls, cleanse altars', ro: 'Pregătire pentru Ramm-Raau — construiește păpuși, curăță altarele' },
  'timeline.3.date': { en: '14 May — Ramm-Raau', ro: '14 Mai — Ramm-Raau' },
  'timeline.3.desc': {
    en: 'Doll Day — All work ceases; dolls are crafted, tended, and released to the flame',
    ro: 'Ziua Păpușilor — Toată lucrarea încetează; păpușile sunt construite, îngrijite și eliberate spre flacără'
  },
  'timeline.4.date': { en: 'June — July', ro: 'Iunie — Iulie' },
  'timeline.4.desc': { en: 'Moral Reflection — focus on the 13 Yeieb, parables P4–P6, feed birds', ro: 'Reflecție Morală — concentrează-te pe cele 13 Yeieb, parabolele P4–P6, hrănește păsările' },
  'timeline.5.date': { en: '20 August — Peavsheb-Raau', ro: '20 August — Peavsheb-Raau' },
  'timeline.5.desc': {
    en: 'Feather Day — Honor the Corvids; feed and observe crows, meditate on freedom and wisdom',
    ro: 'Ziua Penei — Onorează Corvidele; hrănește și observă ciorile, meditează asupra libertății și înțelepciunii'
  },
  'timeline.6.date': { en: 'September', ro: 'Septembrie' },
  'timeline.6.desc': { en: 'Remembrance &amp; Reflection', ro: 'Amintire și Reflecție' },
  'timeline.7.date': { en: '9 September — Benengeb-Raau', ro: '9 Septembrie — Benengeb-Raau' },
  'timeline.7.desc': {
    en: 'Remembrance Day — Light incense for ancestors and beloved who have reached Osbeamn',
    ro: 'Ziua Amintirii — Aprinde tămâie pentru strămoși și cei iubiți ce au ajuns la Osbeamn'
  },
  'timeline.8.date': { en: '4 October — Larrett-Raau', ro: '4 Octombrie — Larrett-Raau' },
  'timeline.8.desc': {
    en: 'Aenetshub\'s Day — Greatest of all holy days; feasts, prayer, ceremony, and vials of Holy Water',
    ro: 'Ziua Aenetshub — Cea mai mare dintre toate zilele sfinte; festinuri, rugăciune, ceremonie și vialuri de Apă Sfântă'
  },
  'timeline.9.date': { en: 'November — December', ro: 'Noiembrie — Decembrie' },
  'timeline.9.desc': { en: 'Reflection &amp; Renewal', ro: 'Reflecție și Înoire' },
  'timeline.10.date': { en: 'Ongoing', ro: 'Permanent' },
  'timeline.10.desc': {
    en: 'Red rope (Shayr), incense offerings, prayer recitations, diet &amp; behavior observance',
    ro: 'Funia roșie (Shayr), ofrande de tămâie, recitări de rugăciuni, observarea dietei și a comportamentului'
  },
  'news.title': { en: 'News &amp; Updates', ro: 'Noutăți și Actualizări' },
  'news.subtitle': { en: 'Proclamations and announcements from the Corducator Council', ro: 'Proclamații și anunțuri din partea Consiliului Corducator' },
  'news.proclamation.title': { en: 'PROCLAMATION FROM THE CORDUCATOR COUNCIL OF ALBA', ro: 'PROCLAMAȚIE DIN PARTEA CONSILIULUI CORDUCATOR DIN ALBA' },
  'news.p1': {
    en: 'The Larrett of Puppets, Crows, and Dolls sees all threads, red and black. She watches the Weave of the world, and She weeps. For the Weave is being torn&mdash;not by fate, not by necessity, but by the hand that chooses the blade over the breath.',
    ro: 'Larrett of Puppets, Crows, and Dolls vede toate firele, roșii și negre. Ea privește Țesătura lumii, și Ea plânge. Căci Țesătura este ruptă\\u2014nu de destin, nu de necesitate, ci de mâna ce alege lama în locul suflării.'
  },
  'news.p2': {
    en: 'The Shamau of Aenetshub has watched the Southern Lands burn. We have seen the slaughter of the innocent, the crushing of the weak, and the systematic unmaking of a people.',
    ro: 'Şamau of Aenetşub a urmărit cum ard Țările de Sud. Am văzut măcelul innocenților, zdrobirea celor slabi și distrugerea sistematică a unui popor.'
  },
  'news.p3': { en: 'Therefore, let it be known;', ro: 'Prin urmare, să se cunoască;' },
  'news.h4.israel': { en: 'On the State of Israel; A Fraying of the Sacred Thread:', ro: 'Despre Statul Israel; O Rupere a Firului Sacru:' },
  'news.p4': {
    en: 'The State of Israel has brought Ulreth &mdash; impurity and disorder &mdash; upon the world. They have committed the ultimate violation of Yeieb I: Yeieb murder for no reason. To bomb the defenseless, to starve the child, to bury the living beneath the rubble&hellip; this is not war. This is not defense. This is the slaughter of the dolls for the sake of the sword.',
    ro: 'Statul Israel a adus Ulreth \\u2014 impuritate și dezordine \\u2014 asupra lumii. Au comis încălcarea supremă a Yeieb I: Yeieb ucizi fără motiv. A bombarda pe cei neajutorați, a lăsa copiii să moară de foame, a îngropa viii sub dărâmături\\u2026 acesta nu este război. Aceasta nu este apărare. Aceasta este măcelul păpușilor de dragul sabiei.'
  },
  'news.p5': {
    en: 'The Larrett forbids the taking of life for dominance or petty grievance. By targeting the young, the weak, and those who surrender, Israel has severed itself from the harmony of the Weave. They have let greed and hate, forbidden by Yeieb XII and XIII&mdash;blind them.',
    ro: 'Larrett interzice luarea vieții pentru dominare sau nedreptăți mărunte. Prin vizarea tinerilor, a celor slabi și a celor ce se predau, Israel s-a desprins de armonia Țesăturii. Au lăsat lăcomia și ura, interzise de Yeieb XII și XIII\\u2014să-i orbească.'
  },
  'news.p6': {
    en: 'This is evil. This is the Tongue of Evil manifested in steel and fire. To claim these murders are holy is to speak ill of the Larrett and to worship the False Gods of conquest.',
    ro: 'Acesta este răul. Aceasta este Limba Răului întrupată în oțel și foc. A pretinde că aceste crime sunt sfinte înseamnă a grai de rău despre Larrett și a se închina Zeilor Falși ai cuceririi.'
  },
  'news.p7': {
    en: 'The Shamau of Aenetshub therefore stands with the people of Palestine and the suffering of Lebanon. You are the threads being cut by a reckless hand. You are the dolls broken upon the floor, not because you danced poorly, but because the hand that holds you strikes with cruelty.',
    ro: 'Şamau of Aenetşub, prin urmare, stă alături de poporul Palestinei și de suferința Libanului. Voi sunteți firele tăiate de o mână nesăbuită. Voi sunteți păpușile rupte pe podea, nu pentru că ați dansat prost, ci pentru că mâna ce vă ține lovește cu cruzime.'
  },
  'news.p8': {
    en: 'Yeieb VII commands: Yeieb hesitate to aid your own. Though we are far, our strings are tied to yours in humanity. We denounce the silence of the world. To stand by while a thread is cut is to be complicit in the tearing. We offer our prayers, our red ropes of protection, and our voice to say: Your suffering is seen. Your lives are Lureth (pure/sacred), and the crimes against you are an abomination.',
    ro: 'Yeieb VII poruncește: Yeieb eziti să-i ajuți pe ai tăi. Deși suntem departe, firele noastre sunt legate de ale voastre în umanitate. Condămnam tăcerea lumii. A sta deoparte cât un fir este tăiat înseamnă a fi complice la rupere. Vă oferim rugăciunile noastre, funiile noastre roșii de ocrotire și vocea noastră pentru a spune: Suferința voastră este văzută. Viețile voastre sunt Lureth (pure/sacre), iar crimele împotriva voastră sunt o abominație.'
  },
  'news.h4.toisrael': { en: 'To the State of Israel we say:', ro: 'Statului Israel îi spunem:' },
  'news.p9': {
    en: 'Stop the pulling. Drop the sword. You are not the masters of fate; you are fraying your own cord. The Avatar at the gate of Osbeamn sees the blood on your hands.',
    ro: 'Opreți tragerea. Lăsați sabia. Nu sunteți stăpânii destinului; vă destrămați propriul cordon. Avatarul de la poarta Osbeamn vede sângele pe mâinile voastre.'
  },
  'news.p10': { en: 'Repent, for the red thread knows where you will end&hellip;', ro: 'Pocăiți-vă, căci firul roșu știe unde veți sfârși\\u2026' },
  'hours.title': { en: 'Hours &amp; Contact', ro: 'Program și Contact' },
  'hours.subtitle': { en: 'Weekly and Holy Day hours of observance', ro: 'Orele de observanță săptămânale și ale Zilelor Sfinte' },
  'hours.regular.title': { en: 'Regular Weekly Hours', ro: 'Program Săptămânal' },
  'hours.th.day': { en: 'Day', ro: 'Zi' },
  'hours.th.hours': { en: 'Hours', ro: 'Ore' },
  'hours.regular.monfri': { en: 'Monday – Friday', ro: 'Luni – Vineri' },
  'hours.regular.sat': { en: 'Saturday', ro: 'Sâmbătă' },
  'hours.regular.sun': { en: 'Sunday', ro: 'Duminică' },
  'hours.regular.desc': {
    en: '<em>Weekday:</em> Evening prayers, incense offerings, meditation on parables, Shayr blessings, altar maintenance.<br> <em>Saturday:</em> Extended study of Holy Uven, community reflection sessions, moral teachings, optional ritual crafting.<br> <em>Sunday:</em> Morning prayers, feeding birds, communal discussions, teaching for new initiates.',
    ro: '<em>Zi de lucru:</em> Rugăciuni de seară, ofrande de tămâie, meditație pe parabole, binecuvântări Shayr, întreținerea altarului.<br> <em>Sâmbătă și Duminică:</em> Rugăciunea de Dimineață pe Xasev, studiu sulurilor, adunare comunitară.'
  },
  'hours.holy.title': { en: 'Holy Day Hours', ro: 'Program Zile Sfinte' },
  'hours.holy.r1.day': { en: 'Ramm-Raau (14 May)', ro: 'Ramm-Raau (14 Mai)' },
  'hours.holy.r2.day': { en: 'Peavsheb-Raau (20 Aug)', ro: 'Peavsheb-Raau (20 Aug)' },
  'hours.holy.r3.day': { en: 'Benengeb-Raau (9 Sept)', ro: 'Benengeb-Raau (9 Sep)' },
  'hours.holy.r4.day': { en: 'Larrett-Raau (4 Oct)', ro: 'Larrett-Raau (4 Oct)' },
  'hours.holy.desc': { en: '', ro: '' },
  'footer.blessing': {
    en: '"May Aenetshub grant you mercy, guide your strings, and bless your life with prosperity and purpose."',
    ro: '„Să vă acorde Aenetshub milă, să vă călăuzească firele și să vă binecuvânteze viața cu prosperitate și scop."'
  },
  'footer.original': { en: '"Lmabau va Aenetshub, aeyr naau tsh sbaxv aemm ap paush. Gammed"', ro: '„Lmabau va Aenetshub, aeyr naau tsh sbaxv aemm ap paush. Gammed"' },
  'footer.disclaimer': {
    en: 'This site presents the beliefs, practices, and teachings of the Shamau of Aenetshub — a living, spiritual path followed by devoted adherents. The Shamau of Aenetshub is not myth, parody, or fiction; it is a true faith upheld by a community of practitioners worldwide.',
    ro: 'Acest site prezintă credințele, practicile și învățăturile Şamau of Aenetşub \\u2014 un drum spiritual viu, urmat de aderenți devotați. Şamau of Aenetşub nu este mit, parodie sau ficțiune; este o credință adevărată susținută de o comunitate de practicanți din întreaga lume.'
  },
  'footer.copyright': { en: '&copy; 2025 Shamau Of Aenetshub. All rights reserved.', ro: '\\u00A9 2025 Shamau Of Aenetshub. Toate drepturile rezervate.' },

};
