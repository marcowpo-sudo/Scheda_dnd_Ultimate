// ==========================================
// DATABASE EQUIPAGGIAMENTO
// ==========================================
const equipaggiamento5e={"Acciarino e Pietra Focaia":0.5,"Acqua Santa (ampolla)":0.5,"Acquasantiera":2.5,"Aglio (1 mazzo)":0,"Ampolla (vuota)":0.1,"Anello con Sigillo":0,"Apparecchio per Distillare":4,"Arazzo / Tappeto":5,"Ariete Portatile":17.5,"Armatura di Cuoio":5,"Armatura di Cuoio Borchiato":6.5,"Armatura di Maglia":27.5,"Armatura di Pelle":22.5,"Armatura di Piastre":32.5,"Armatura di Scaglie":22.5,"Armatura Imbottita":4,"Arpione":2,"Attrezzi da Artigiano (vari)":2.5,"Attrezzi da Fabbro":4,"Attrezzi da Falegname":2.5,"Attrezzi da Inventore":5,"Attrezzi da Scassinatore":0.5,"Bacca di Agrifoglio":0,"Baccello di Componenti":1,"Bacinella":1,"Balaustra / Catena":5,"Balestra a Mano":1.5,"Balestra Leggera":2.5,"Balestra Pesante":9,"Barca a Remi":50,"Bardo (Strumento)":1,"Bastone da Viaggio":2,"Boccale":0.5,"Borsa Conservante":7.5,"Borsa da Guaritore":1.5,"Borsa dei Trucchi":1.5,"Borsa per Componenti":1,"Bottiglia (vetro, vuota)":1,"Campanella":0,"Canape (15m)":5,"Candela":0,"Cannocchiale":0.5,"Canoa":25,"Carro":200,"Carrozza":300,"Carta (1 foglio)":0,"Cassa":10,"Catena (3m)":5,"Cera per Sigilli":0,"Cesto":1,"Chiodo da Roccia":0.25,"Clessidra":0.5,"Coperta":0,"Corda di Canapa (15m)":5,"Corda di Seta (15m)":2.5,"Corno":1,"Corpetto Anellato":20,"Cotta di Maglia":27.5,"Cubo da 3m (legno)":5,"Dado (set)":0,"Dardo":0.1,"Dardo da Balestra (20)":0.75,"Diario":2.5,"Equipaggiamento da Esploratore":29.5,"Equipaggiamento da Monaco":2,"Equipaggiamento da Sacerdote":12.5,"Equipaggiamento da Studioso":18.5,"Erba Spadaccina":0,"Faretto":0.5,"Faretra":0.5,"Fiaschetta":0.5,"Fiala":0,"Filo (15m)":0.5,"Fiocco":0,"Fionda":0,"Focus Arcano (bacchetta)":0.5,"Focus Arcano (bastone)":2,"Focus Arcano (cristallo)":0.5,"Focus Arcano (globo)":1.5,"Focus Druidico (bastone)":2,"Focus Druidico (ramoscello)":0,"Focus Druidico (totem)":0,"Focus Druidico (vischio)":0,"Fodero":0.5,"Foglio di Pergamena":0,"Forcone":2,"Formaggio":0.5,"Forziere":12.5,"Frecce (20)":0.5,"Fuoco dell'Alchimista (ampolla)":0.5,"Gabbia":5,"Gancio da Pesca":0,"Gesso (1 pezzo)":0,"Ghiandola di Veleno":0.5,"Giaccaglio":10,"Giavellotto":1,"Grembiule":1,"Grimaldello":0.5,"Incensiere":2.5,"Incenso (1 blocco)":0,"Inchiostro (1 oncia)":0,"Insegna":1,"Lampada":0.5,"Lanterna Ceca":1,"Lanterna Schermabile":1,"Lazo":2.5,"Legna da Ardere (1 giorno)":10,"Lente d'Ingrandimento":0,"Levigatore":0.5,"Libreria (piccola)":10,"Libro":2.5,"Libro degli Incantesimi":1.5,"Liuto":1,"Lucchetto":0.5,"Mannaia":1,"Mantello":0.5,"Mappa":0,"Martello":1.5,"Martello da Fabbro":5,"Mazza (strumento)":2,"Mezza Armatura":20,"Olio (fiaschetta)":0.5,"Orologio ad Acqua":10,"Otre (pieno)":2.5,"Otre (vuoto)":0.5,"Pala":2.5,"Palo da 3m":3.5,"Pan di Via":0.5,"Panno":0.5,"Papiro":0,"Pelliccia":2.5,"Pendente":0,"Pennino":0,"Pentola":5,"Pergamena (1 foglio)":0,"Pesi (set)":2.5,"Piede di Porco":2.5,"Pietra Focaia":0,"Piuma":0,"Piton":0.1,"Prisma":0.5,"Profumo (fiala)":0,"Proiettili da Fionda (20)":0.75,"Rampino":2,"Razionamento (1 giorno)":1,"Rete":1.5,"Robba da Scalatore":2.5,"Sacco":0.5,"Sacchetto":0.5,"Sale (1 pizzico)":0,"Salnitro":0,"Sanguisuga":0,"Sapone":0,"Scala a Pioli (3m)":12.5,"Scatola":5,"Scudo":3,"Secchio":1,"Sedia":2.5,"Sella (da carico)":7.5,"Sella (da cavalleria)":12.5,"Sella (da equitazione)":12.5,"Sella (esotica)":20,"Seme":0,"Set da Gioco (carte)":0,"Set da Gioco (dadi)":0,"Set da Gioco (scacchi)":0.5,"Sfera di Cristallo":1.5,"Slitta":150,"Specchio (metallo)":0.25,"Spiedo":2.5,"Spillo":0,"Stathetta":0.5,"Stivali":1.5,"Strumenti da Navigatore":1,"Strumenti da Pittore":2.5,"Tappeto":5,"Tenda (due posti)":10,"Tonaca":1,"Torcia":0.5,"Trappola per Cacciatori":12.5,"Tribolo":0.1,"Tromba":1,"Tubo per Pergamene":0.5,"Uovo":0,"Vanghetto":1,"Vaso":2.5,"Veleno (fiala base)":0,"Velo":0.5,"Verga":1,"Veste":1,"Vestiti (abiti comuni)":1.5,"Vestiti (abiti costosi)":1.5,"Vestiti (abiti da viaggiatore)":2,"Zaino (vuoto)":2.5};

// ==========================================
// DATABASE ARMI
// ==========================================
const armi5e={"Colpo Senz'Armi":{stat:"str",dmg:"1",prop:"Semplice, Mischia",desc:"Pugno o calcio.",img:"https://api.iconify.design/game-icons/fist.svg?color=%23cba052&width=120"},"Dardo di Fuoco":{stat:"spell",dmg:"1d10",prop:"Trucchetto, Gittata 36m",desc:"Scagli un dardo di fuoco.",img:"https://api.iconify.design/game-icons/magic-swirl.svg?color=%23e53e3e&width=120"},"Deflagrazione Occulta":{stat:"spell",dmg:"1d10",prop:"Trucchetto, Gittata 36m",desc:"Raggio crepitante.",img:"https://api.iconify.design/game-icons/magic-swirl.svg?color=%238b5cf6&width=120"},"Frusta di Spine":{stat:"spell",dmg:"1d6",prop:"Trucchetto, Mischia 9m",desc:"Frusta l'avversario.",img:"https://api.iconify.design/game-icons/whip.svg?color=%2338a169&width=120"},"Raggio di Gelo":{stat:"spell",dmg:"1d8",prop:"Trucchetto, Gittata 18m",desc:"Rallenta il bersaglio.",img:"https://api.iconify.design/game-icons/magic-swirl.svg?color=%2360a5fa&width=120"},"Spruzzo Velenoso":{stat:"spell",dmg:"1d12",prop:"Trucchetto, Gittata 3m",desc:"Sbuffo di gas.",img:"https://api.iconify.design/game-icons/poison-gas.svg?color=%2338a169&width=120"},"Tocco Gelido":{stat:"spell",dmg:"1d8",prop:"Trucchetto, Gittata 36m",desc:"Impedisce le cure.",img:"https://api.iconify.design/game-icons/skeletal-hand.svg?color=%233b0764&width=120"},"Alabarda":{stat:"str",dmg:"1d10",prop:"Pesante, Portata, Due Mani",desc:"Arma inastata.",img:"https://api.iconify.design/game-icons/halberd.svg?color=%23cba052&width=120"},"Arco Corto":{stat:"dex",dmg:"1d6",prop:"Munizioni (9/36), Due Mani",desc:"Arco compatto.",img:"https://api.iconify.design/game-icons/bow-string.svg?color=%23cba052&width=120"},"Arco Lungo":{stat:"dex",dmg:"1d8",prop:"Munizioni (45/180), Pesante, Due Mani",desc:"Arco letale.",img:"https://api.iconify.design/game-icons/high-shot.svg?color=%23cba052&width=120"},"Ascia (Accetta)":{stat:"str",dmg:"1d6",prop:"Lanciare (6/18), Leggera",desc:"Piccola ascia.",img:"https://api.iconify.design/game-icons/wood-axe.svg?color=%23cba052&width=120"},"Ascia Bipenne":{stat:"str",dmg:"1d12",prop:"Pesante, Due Mani",desc:"Massiccia ascia.",img:"https://api.iconify.design/game-icons/battle-axe.svg?color=%23cba052&width=120"},"Ascia da Battaglia":{stat:"str",dmg:"1d8",prop:"Versatile (1d10)",desc:"A una mano.",img:"https://api.iconify.design/game-icons/tomahawk.svg?color=%23cba052&width=120"},"Balestra a Mano":{stat:"dex",dmg:"1d6",prop:"Munizioni (9/36), Leggera, Caricamento",desc:"A una mano.",img:"https://api.iconify.design/game-icons/crossbow.svg?color=%23cba052&width=120"},"Balestra Leggera":{stat:"dex",dmg:"1d8",prop:"Munizioni (24/96), Caricamento, Due Mani",desc:"Semplice.",img:"https://api.iconify.design/game-icons/crossbow.svg?color=%23cba052&width=120"},"Balestra Pesante":{stat:"dex",dmg:"1d10",prop:"Munizioni (30/120), Pesante, Due Mani, Caricamento",desc:"Lenta ma letale.",img:"https://api.iconify.design/game-icons/crossbow.svg?color=%23cba052&width=120"},"Bastone Ferrato":{stat:"str",dmg:"1d6",prop:"Versatile (1d8)",desc:"Bastone.",img:"https://api.iconify.design/game-icons/wizard-staff.svg?color=%23cba052&width=120"},"Cerbottana":{stat:"dex",dmg:"1",prop:"Munizioni (7.5/30), Caricamento",desc:"Per dardi.",img:"https://api.iconify.design/game-icons/blowing-dart.svg?color=%23cba052&width=120"},"Dardo":{stat:"dex",dmg:"1d4",prop:"Accurata, Lanciare (6/18)",desc:"Da lancio.",img:"https://api.iconify.design/game-icons/dart.svg?color=%23cba052&width=120"},"Falcetto":{stat:"str",dmg:"1d4",prop:"Leggera",desc:"Lama ricurva.",img:"https://api.iconify.design/game-icons/sickle.svg?color=%23cba052&width=120"},"Falcione":{stat:"str",dmg:"1d10",prop:"Pesante, Portata, Due Mani",desc:"Inastata.",img:"https://api.iconify.design/game-icons/glaive.svg?color=%23cba052&width=120"},"Fionda":{stat:"dex",dmg:"1d4",prop:"Munizioni (9/36)",desc:"Scaglia pietre.",img:"https://api.iconify.design/game-icons/sling.svg?color=%23cba052&width=120"},"Frusta":{stat:"finesse",dmg:"1d4",prop:"Accurata, Portata",desc:"In pelle.",img:"https://api.iconify.design/game-icons/whip.svg?color=%23cba052&width=120"},"Giavellotto":{stat:"str",dmg:"1d6",prop:"Lanciare (9/36)",desc:"Lancia leggera.",img:"https://api.iconify.design/game-icons/spear-head.svg?color=%23cba052&width=120"},"Lancia":{stat:"str",dmg:"1d6",prop:"Lanciare (6/18), Versatile (1d8)",desc:"Lancia.",img:"https://api.iconify.design/game-icons/spear-hook.svg?color=%23cba052&width=120"},"Lancia da Cavaliere":{stat:"str",dmg:"1d12",prop:"Portata, Speciale",desc:"Cavalleria.",img:"https://api.iconify.design/game-icons/spear-head.svg?color=%23cba052&width=120"},"Martello da Guerra":{stat:"str",dmg:"1d8",prop:"Versatile (1d10)",desc:"Pesante.",img:"https://api.iconify.design/game-icons/warhammer.svg?color=%23cba052&width=120"},"Martello Leggero":{stat:"str",dmg:"1d4",prop:"Leggera, Lanciare",desc:"Maneggevole.",img:"https://api.iconify.design/game-icons/thor-hammer.svg?color=%23cba052&width=120"},"Mazza":{stat:"str",dmg:"1d6",prop:"-",desc:"A percussione.",img:"https://api.iconify.design/game-icons/flanged-mace.svg?color=%23cba052&width=120"},"Mazza Marziale":{stat:"str",dmg:"2d6",prop:"Pesante, Due Mani",desc:"Enorme martello.",img:"https://api.iconify.design/game-icons/hammer-drop.svg?color=%23cba052&width=120"},"Mazzafusto":{stat:"str",dmg:"1d8",prop:"-",desc:"A catena.",img:"https://api.iconify.design/game-icons/flail.svg?color=%23cba052&width=120"},"Picca":{stat:"str",dmg:"1d10",prop:"Pesante, Portata",desc:"Ad asta.",img:"https://api.iconify.design/game-icons/pikeman.svg?color=%23cba052&width=120"},"Piccone da Guerra":{stat:"str",dmg:"1d8",prop:"-",desc:"Perforante.",img:"https://api.iconify.design/game-icons/mining.svg?color=%23cba052&width=120"},"Pugnale":{stat:"finesse",dmg:"1d4",prop:"Accurata, Lanciare, Leggera",desc:"Lama corta.",img:"https://api.iconify.design/game-icons/stiletto.svg?color=%23cba052&width=120"},"Randello":{stat:"str",dmg:"1d4",prop:"Leggera",desc:"Pezzo di legno.",img:"https://api.iconify.design/game-icons/wood-club.svg?color=%23cba052&width=120"},"Scimitarra":{stat:"finesse",dmg:"1d6",prop:"Accurata",desc:"Ricurva.",img:"https://api.iconify.design/game-icons/scimitar.svg?color=%23cba052&width=120"},"Spada Corta":{stat:"finesse",dmg:"1d6",prop:"Accurata, Leggera",desc:"Dritta.",img:"https://api.iconify.design/game-icons/short-sword.svg?color=%23cba052&width=120"},"Spada Lunga":{stat:"str",dmg:"1d8",prop:"Versatile (1d10)",desc:"Da cavaliere.",img:"https://api.iconify.design/game-icons/broadsword.svg?color=%23cba052&width=120"},"Spadone":{stat:"str",dmg:"2d6",prop:"Pesante, Due Mani",desc:"Enorme.",img:"https://api.iconify.design/game-icons/zweihander.svg?color=%23cba052&width=120"},"Stocco":{stat:"finesse",dmg:"1d8",prop:"Accurata",desc:"Da scherma.",img:"https://api.iconify.design/game-icons/rapier.svg?color=%23cba052&width=120"},"Tridente":{stat:"str",dmg:"1d6",prop:"Lanciare, Versatile",desc:"A tre punte.",img:"https://api.iconify.design/game-icons/trident.svg?color=%23cba052&width=120"},"Attacco Magia Base":{stat:"spell",dmg:"Var",prop:"Incantesimo",desc:"Attacco magico.",img:"https://api.iconify.design/game-icons/magic-swirl.svg?color=%233182ce&width=120"}};

// ==========================================
// DATABASE GRIMORIO (Completo per tutte le Classi inclusi Sottoclassi Monaco)
// ==========================================
const mioGrimorio = {
    "Mago": [
        "Colpo Accurato (Trucchetto)", "Dardo di Fuoco (Trucchetto)", "Fiamma Perenne (Trucchetto)", "Illusione Minore (Trucchetto)", "Luce (Trucchetto)", "Mano Magica (Trucchetto)", "Messaggio (Trucchetto)", "Prestidigitazione (Trucchetto)", "Raggio di Gelo (Trucchetto)", "Riparare (Trucchetto)", "Spruzzo Velenoso (Trucchetto)", "Tocco Gelido (Trucchetto)", 
        "Allarme (Lvl 1)", "Armatura Magica (Lvl 1)", "Caduta Morbida (Lvl 1)", "Camuffare Se Stesso (Lvl 1)", "Charme su Persone (Lvl 1)", "Comprensione dei Linguaggi (Lvl 1)", "Dardo Incantato (Lvl 1)", "Evoca Famiglio (Lvl 1)", "Identificare (Lvl 1)", "Immagine Silenziosa (Lvl 1)", "Individuazione del Magico (Lvl 1)", "Nube di Nebbia (Lvl 1)", "Onda Tonante (Lvl 1)", "Passo Veloce (Lvl 1)", "Protezione dal Bene e dal Male (Lvl 1)", "Raggio di Assideramento (Lvl 1)", "Ritirata Rapida (Lvl 1)", "Salto (Lvl 1)", "Scudo (Lvl 1)", "Servitore Inosservato (Lvl 1)", "Sonno (Lvl 1)", "Unto (Lvl 1)",
        "Arma Magica (Lvl 2)", "Blocca Persone (Lvl 2)", "Bocca Magica (Lvl 2)", "Cecità/Sordità (Lvl 2)", "Corona di Follia (Lvl 2)", "Frantumare (Lvl 2)", "Immagine Speculare (Lvl 2)", "Individuazione dei Pensieri (Lvl 2)", "Ingrandire/Ridurre (Lvl 2)", "Invisibilità (Lvl 2)", "Levitazione (Lvl 2)", "Localizza Oggetto (Lvl 2)", "Movimenti del Ragno (Lvl 2)", "Nube di Pugnali (Lvl 2)", "Oscurità (Lvl 2)", "Passo Velato (Lvl 2)", "Raggio Rovente (Lvl 2)", "Ragnatela (Lvl 2)", "Scassinare (Lvl 2)", "Sfocatura (Lvl 2)", "Suggestione (Lvl 2)", "Vedere Invisibilità (Lvl 2)", 
        "Anti-Individuazione (Lvl 3)", "Capanna di Leomund (Lvl 3)", "Chiaroveggenza (Lvl 3)", "Controincantesimo (Lvl 3)", "Dissolvi Magie (Lvl 3)", "Forma Gassosa (Lvl 3)", "Fulmine (Lvl 3)", "Inviare (Lvl 3)", "Lentezza (Lvl 3)", "Linguaggi (Lvl 3)", "Nube Maleodorante (Lvl 3)", "Palla di Fuoco (Lvl 3)", "Paura (Lvl 3)", "Respirare sott'Acqua (Lvl 3)", "Tocco del Vampiro (Lvl 3)", "Trama Ipnotica (Lvl 3)", "Velocità (Lvl 3)", "Volare (Lvl 3)", 
        "Esilio (Lvl 4)", "Invisibilità Superiore (Lvl 4)", "Metamorfosi (Lvl 4)", "Muro di Fuoco (Lvl 4)", "Occhio Arcano (Lvl 4)", "Pelle di Pietra (Lvl 4)", "Porta Dimensionale (Lvl 4)", "Tempesta di Ghiaccio (Lvl 4)", "Tentacoli Neri di Evard (Lvl 4)", "Terreno Illusorio (Lvl 4)",
        "Animare Oggetti (Lvl 5)", "Cono di Freddo (Lvl 5)", "Creazione (Lvl 5)", "Dominare Persone (Lvl 5)", "Legame Planare (Lvl 5)", "Modificare Memoria (Lvl 5)", "Muro di Forza (Lvl 5)", "Muro di Pietra (Lvl 5)", "Nube Mortale (Lvl 5)", "Passapareti (Lvl 5)", "Scrutare (Lvl 5)", "Sogno (Lvl 5)", "Telecinesi (Lvl 5)", 
        "Catena di Fulmini (Lvl 6)", "Disintegrazione (Lvl 6)", "Evoca Folletto (Lvl 6)", "Globo di Invulnerabilità (Lvl 6)", "Sguardo Penetrante (Lvl 6)", "Suggestione di Massa (Lvl 6)", "Visione del Vero (Lvl 6)", 
        "Gabbia di Forza (Lvl 7)", "Inversione della Gravità (Lvl 7)", "Palla di Fuoco Ritardata (Lvl 7)", "Spostamento Planare (Lvl 7)", "Spruzzo Prismatico (Lvl 7)", "Teletrasporto (Lvl 7)", 
        "Clone (Lvl 8)", "Dominare Mostri (Lvl 8)", "Esplosione Solare (Lvl 8)", "Labirinto (Lvl 8)", "Parola del Potere Stordire (Lvl 8)", "Vuoto Mentale (Lvl 8)", 
        "Desiderio (Lvl 9)", "Fermare il Tempo (Lvl 9)", "Metamorfosi Pura (Lvl 9)", "Parola del Potere Uccidere (Lvl 9)", "Previsione (Lvl 9)", "Sciame di Meteore (Lvl 9)"
    ],
    "Chierico": [
        "Fiamma Sacra (Trucchetto)", "Guida (Trucchetto)", "Luce (Trucchetto)", "Resistenza (Trucchetto)", "Riparare (Trucchetto)", "Salvare i Morenti (Trucchetto)", "Taumaturgia (Trucchetto)", 
        "Anatema (Lvl 1)", "Benedizione (Lvl 1)", "Comando (Lvl 1)", "Creare o Distruggere Acqua (Lvl 1)", "Cura Ferite (Lvl 1)", "Dardo Tracciante (Lvl 1)", "Guarigione Ferite (Lvl 1)", "Individuazione del Bene e del Male (Lvl 1)", "Individuazione del Magico (Lvl 1)", "Individuazione delle Malattie e dei Veleni (Lvl 1)", "Infliggi Ferite (Lvl 1)", "Parola Guaritrice (Lvl 1)", "Protezione dal Bene e dal Male (Lvl 1)", "Purificare Cibo e Bevande (Lvl 1)", "Santuario (Lvl 1)", "Scudo della Fede (Lvl 1)", 
        "Aiuto (Lvl 2)", "Arma Spirituale (Lvl 2)", "Blocca Persone (Lvl 2)", "Calmare Emozioni (Lvl 2)", "Caratteristica Potenziata (Lvl 2)", "Cecità/Sordità (Lvl 2)", "Fiamma Perenne (Lvl 2)", "Localizza Oggetto (Lvl 2)", "Preghiera di Guarigione (Lvl 2)", "Presagio (Lvl 2)", "Protezione dai Veleni (Lvl 2)", "Riposo Inviolato (Lvl 2)", "Ristorare Inferiore (Lvl 2)", "Scopri Trappole (Lvl 2)", "Silenzio (Lvl 2)", "Vincolo di Interdizione (Lvl 2)", "Zona di Verità (Lvl 2)", 
        "Animare Morti (Lvl 3)", "Camminare sull'Acqua (Lvl 3)", "Cerchio Magico (Lvl 3)", "Chiaroveggenza (Lvl 3)", "Creare Cibo e Acqua (Lvl 3)", "Dissolvi Magie (Lvl 3)", "Faro di Speranza (Lvl 3)", "Fondersi nella Pietra (Lvl 3)", "Glifo di Interdizione (Lvl 3)", "Guardiani Spirituali (Lvl 3)", "Inviare (Lvl 3)", "Linguaggi (Lvl 3)", "Luce Diurna (Lvl 3)", "Morte Apparente (Lvl 3)", "Parlare con i Morti (Lvl 3)", "Parola Guaritrice di Massa (Lvl 3)", "Protezione dall'Energia (Lvl 3)", "Rimuovi Maledizione (Lvl 3)", "Rinascita (Lvl 3)", "Scagliare Maledizione (Lvl 3)", 
        "Controllare Acqua (Lvl 4)", "Divinazione (Lvl 4)", "Esilio (Lvl 4)", "Guardiano della Fede (Lvl 4)", "Interdizione alla Morte (Lvl 4)", "Libertà di Movimento (Lvl 4)", "Localizza Creatura (Lvl 4)", "Scolpire Pietra (Lvl 4)", 
        "Colpo Infuocato (Lvl 5)", "Comunione (Lvl 5)", "Conoscenza delle Leggende (Lvl 5)", "Contagio (Lvl 5)", "Costrizione (Lvl 5)", "Cura Ferite di Massa (Lvl 5)", "Dissolvi il Bene e il Male (Lvl 5)", "Legame Planare (Lvl 5)", "Piaga degli Insetti (Lvl 5)", "Rianimare Morti (Lvl 5)", "Ristorare Superiore (Lvl 5)", "Santificare (Lvl 5)", "Scrutare (Lvl 5)", 
        "Alleato Planare (Lvl 6)", "Banchetto degli Eroi (Lvl 6)", "Barriera di Lame (Lvl 6)", "Creare Non Morti (Lvl 6)", "Ferire (Lvl 6)", "Guarigione (Lvl 6)", "Parola del Ritiro (Lvl 6)", "Proibizione (Lvl 6)", "Scopri il Percorso (Lvl 6)", "Visione del Vero (Lvl 6)", 
        "Evoca Celestiale (Lvl 7)", "Forma Eterea (Lvl 7)", "Parola Divina (Lvl 7)", "Resurrezione (Lvl 7)", "Rigenerazione (Lvl 7)", "Simbolo (Lvl 7)", "Spostamento Planare (Lvl 7)", "Tempesta di Fuoco (Lvl 7)", 
        "Aura Sacra (Lvl 8)", "Campo Anti-Magia (Lvl 8)", "Controllare Tempo Atmosferico (Lvl 8)", "Terremoto (Lvl 8)", 
        "Guarigione di Massa (Lvl 9)", "Portale (Lvl 9)", "Proiezione Astrale (Lvl 9)", "Resurrezione Pura (Lvl 9)"
    ],
    "Bardo": [
        "Amicizia (Trucchetto)", "Beffa Crudele (Trucchetto)", "Colpo Accurato (Trucchetto)", "Illusione Minore (Trucchetto)", "Interdizione alle Lame (Trucchetto)", "Luce (Trucchetto)", "Luci Danzanti (Trucchetto)", "Mano Magica (Trucchetto)", "Messaggio (Trucchetto)", "Prestidigitazione (Trucchetto)", "Riparare (Trucchetto)", 
        "Amicizia con gli Animali (Lvl 1)", "Anatema (Lvl 1)", "Caduta Morbida (Lvl 1)", "Camuffare Se Stesso (Lvl 1)", "Charme su Persone (Lvl 1)", "Comprensione dei Linguaggi (Lvl 1)", "Cura Ferite (Lvl 1)", "Eroismo (Lvl 1)", "Identificare (Lvl 1)", "Immagine Silenziosa (Lvl 1)", "Individuazione del Magico (Lvl 1)", "Luminescenza (Lvl 1)", "Onda Tonante (Lvl 1)", "Parlare con gli Animali (Lvl 1)", "Parola Guaritrice (Lvl 1)", "Passo Veloce (Lvl 1)", "Risata Incontenibile di Tasha (Lvl 1)", "Scritto Illusorio (Lvl 1)", "Servitore Inosservato (Lvl 1)", "Sonno (Lvl 1)", "Sussurri Dissonanti (Lvl 1)", 
        "Allucinazione di Forza (Lvl 2)", "Animale Messaggero (Lvl 2)", "Blocca Persone (Lvl 2)", "Bocca Magica (Lvl 2)", "Calmare Emozioni (Lvl 2)", "Caratteristica Potenziata (Lvl 2)", "Cecità/Sordità (Lvl 2)", "Corona di Follia (Lvl 2)", "Estasiare (Lvl 2)", "Frantumare (Lvl 2)", "Individuazione dei Pensieri (Lvl 2)", "Invisibilità (Lvl 2)", "Localizza Animali o Vegetali (Lvl 2)", "Localizza Oggetto (Lvl 2)", "Nube di Pugnali (Lvl 2)", "Riscaldare il Metallo (Lvl 2)", "Ristorare Inferiore (Lvl 2)", "Scassinare (Lvl 2)", "Silenzio (Lvl 2)", "Suggestione (Lvl 2)", "Vedere Invisibilità (Lvl 2)", "Zona di Verità (Lvl 2)", 
        "Anti-Individuazione (Lvl 3)", "Capanna di Leomund (Lvl 3)", "Chiaroveggenza (Lvl 3)", "Crescita Vegetale (Lvl 3)", "Dissolvi Magie (Lvl 3)", "Glifo di Interdizione (Lvl 3)", "Immagine Maggiore (Lvl 3)", "Inviare (Lvl 3)", "Linguaggi (Lvl 3)", "Morte Apparente (Lvl 3)", "Nube Maleodorante (Lvl 3)", "Parlare con i Morti (Lvl 3)", "Parlare con i Vegetali (Lvl 3)", "Paura (Lvl 3)", "Scagliare Maledizione (Lvl 3)", "Trama Ipnotica (Lvl 3)", 
        "Compulsione (Lvl 4)", "Confusione (Lvl 4)", "Invisibilità Superiore (Lvl 4)", "Libertà di Movimento (Lvl 4)", "Localizza Creatura (Lvl 4)", "Metamorfosi (Lvl 4)", "Porta Dimensionata (Lvl 4)", "Terreno Illusorio (Lvl 4)", 
        "Animare Oggetti (Lvl 5)", "Blocca Mostri (Lvl 5)", "Cerchio di Teletrasporto (Lvl 5)", "Conoscenza delle Leggende (Lvl 5)", "Costrizione (Lvl 5)", "Cura Ferite di Massa (Lvl 5)", "Dominare Persone (Lvl 5)", "Fuorviare (Lvl 5)", "Legame Planare (Lvl 5)", "Modificare Memoria (Lvl 5)", "Rianimare Morti (Lvl 5)", "Ristorare Superiore (Lvl 5)", "Risveglio (Lvl 5)", "Scrutare (Lvl 5)", "Sembrare (Lvl 5)", "Sogno (Lvl 5)", 
        "Danza Irresistibile di Otto (Lvl 6)", "Illusione Programmata (Lvl 6)", "Scopri il Percorso (Lvl 6)", "Sguardo Penetrante (Lvl 6)", "Suggestione di Massa (Lvl 6)", "Vigilanza e Interdizione (Lvl 6)", "Visione del Vero (Lvl 6)", 
        "Forma Eterea (Lvl 7)", "Gabbia di Forza (Lvl 7)", "Immagine Proiettata (Lvl 7)", "Miraggio Arcano (Lvl 7)", "Reggia Meravigliosa di Mordenkainen (Lvl 7)", "Resurrezione (Lvl 7)", "Rigenerazione (Lvl 7)", "Simbolo (Lvl 7)", "Spada di Mordenkainen (Lvl 7)", "Teletrasporto (Lvl 7)", 
        "Dominare Mostri (Lvl 8)", "Eloquenza (Lvl 8)", "Parola del Potere Stordire (Lvl 8)", "Regressione Mentale (Lvl 8)", "Vuoto Mentale (Lvl 8)", 
        "Metamorfosi Pura (Lvl 9)", "Parola del Potere Guarire (Lvl 9)", "Parola del Potere Uccidere (Lvl 9)", "Previsione (Lvl 9)"
    ],
    "Druido": [
        "Artificio Druidico (Trucchetto)", "Frusta di Spine (Trucchetto)", "Guida (Trucchetto)", "Produrre Fiamma (Trucchetto)", "Randello Incantato (Trucchetto)", "Resistenza (Trucchetto)", "Riparare (Trucchetto)", "Spruzzo Velenoso (Trucchetto)", 
        "Amicizia con gli Animali (Lvl 1)", "Bacche Benefiche (Lvl 1)", "Charme su Persone (Lvl 1)", "Creare o Distruggere Acqua (Lvl 1)", "Cura Ferite (Lvl 1)", "Individuazione del Magico (Lvl 1)", "Individuazione delle Malattie e dei Veleni (Lvl 1)", "Intralciare (Lvl 1)", "Luminescenza (Lvl 1)", "Nube di Nebbia (Lvl 1)", "Onda Tonante (Lvl 1)", "Parlare con gli Animali (Lvl 1)", "Parola Guaritrice (Lvl 1)", "Passo Veloce (Lvl 1)", "Purificare Cibo e Bevande (Lvl 1)", "Saltare (Lvl 1)", 
        "Animale Messaggero (Lvl 2)", "Bagliore Lunare (Lvl 2)", "Blocca Persone (Lvl 2)", "Caratteristica Potenziata (Lvl 2)", "Crescita di Spine (Lvl 2)", "Folata di Vento (Lvl 2)", "Lama Infuocata (Lvl 2)", "Localizza Animali o Vegetali (Lvl 2)", "Localizza Oggetto (Lvl 2)", "Passare Senza Tracce (Lvl 2)", "Pelle Coriacea (Lvl 2)", "Percezione delle Bestie (Lvl 2)", "Protezione dai Veleni (Lvl 2)", "Riscaldare il Metallo (Lvl 2)", "Ristorare Inferiore (Lvl 2)", "Scopri Trappole (Lvl 2)", "Scurovisione (Lvl 2)", "Sfera Infuocata (Lvl 2)", 
        "Camminare sull'Acqua (Lvl 3)", "Crescita Vegetale (Lvl 3)", "Dissolvi Magie (Lvl 3)", "Evoca Animali (Lvl 3)", "Fondersi nella Pietra (Lvl 3)", "Invocare il Fulmine (Lvl 3)", "Luce Diurna (Lvl 3)", "Muro di Vento (Lvl 3)", "Parlare con i Vegetali (Lvl 3)", "Protezione dall'Energia (Lvl 3)", "Respirare sott'Acqua (Lvl 3)", "Tempesta di Nevischio (Lvl 3)", 
        "Confusione (Lvl 4)", "Controllare Acqua (Lvl 4)", "Dominare Bestie (Lvl 4)", "Evoca Creature Boschive (Lvl 4)", "Evoca Elementali Minori (Lvl 4)", "Inaridire (Lvl 4)", "Insetto Gigante (Lvl 4)", "Libertà di Movimento (Lvl 4)", "Localizza Creatura (Lvl 4)", "Metamorfosi (Lvl 4)", "Muro di Fuoco (Lvl 4)", "Occhio Arcano (Lvl 4)", "Pelle di Pietra (Lvl 4)", "Porta Dimensionale (Lvl 4)", "Scolpire Pietra (Lvl 4)", "Tempesta di Ghiaccio (Lvl 4)", "Tentacoli Neri di Evard (Lvl 4)", 
        "Comunione con la Natura (Lvl 5)", "Contagio (Lvl 5)", "Cura Ferite di Massa (Lvl 5)", "Evoca Elementale (Lvl 5)", "Geas (Lvl 5)", "Muro di Pietra (Lvl 5)", "Piaga degli Insetti (Lvl 5)", "Reincarnazione (Lvl 5)", "Ristorare Superiore (Lvl 5)", "Risveglio (Lvl 5)", "Scrutare (Lvl 5)", "Traslazione Arborea (Lvl 5)", 
        "Banchetto degli Eroi (Lvl 6)", "Evoca Folletto (Lvl 6)", "Guarigione (Lvl 6)", "Muro di Spine (Lvl 6)", "Raggio Solare (Lvl 6)", "Scopri il Percorso (Lvl 6)", "Spostamento Terrestre (Lvl 6)", "Trasporto Vegetale (Lvl 6)", 
        "Inversione della Gravità (Lvl 7)", "Miraggio Arcano (Lvl 7)", "Reggia Meravigliosa (Lvl 7)", "Spostamento Planare (Lvl 7)", "Tempesta di Fuoco (Lvl 7)", 
        "Antipatia/Simpatia (Lvl 8)", "Controllare Tempo Atmosferico (Lvl 8)", "Esplosione Solare (Lvl 8)", "Forme Animali (Lvl 8)", "Terremoto (Lvl 8)", 
        "Previsione (Lvl 9)", "Resurrezione Pura (Lvl 9)", "Tempesta di Vendetta (Lvl 9)", "Trasformazione (Lvl 9)"
    ],
    "Paladino": [
        "Benedizione (Lvl 1)", "Comando (Lvl 1)", "Cura Ferite (Lvl 1)", "Duello Obbligato (Lvl 1)", "Eroismo (Lvl 1)", "Favore Divino (Lvl 1)", "Individuazione del Bene e del Male (Lvl 1)", "Individuazione del Magico (Lvl 1)", "Individuazione delle Malattie e dei Veleni (Lvl 1)", "Protezione dal Bene e dal Male (Lvl 1)", "Punizione Collerica (Lvl 1)", "Punizione Incandescente (Lvl 1)", "Punizione Tonante (Lvl 1)", "Purificare Cibo e Bevande (Lvl 1)", "Scudo della Fede (Lvl 1)", 
        "Aiuto (Lvl 2)", "Arma Magica (Lvl 2)", "Localizza Oggetto (Lvl 2)", "Protezione dai Veleni (Lvl 2)", "Punizione Marchiante (Lvl 2)", "Ristorare Inferiore (Lvl 2)", "Trova Cavalcatura (Lvl 2)", "Zona di Verità (Lvl 2)", 
        "Arma Elementale (Lvl 3)", "Aura di Vitalità (Lvl 3)", "Cerchio Magico (Lvl 3)", "Creare Cibo e Acqua (Lvl 3)", "Dissolvi Magie (Lvl 3)", "Luce Diurna (Lvl 3)", "Manto del Crociato (Lvl 3)", "Punizione Accecante (Lvl 3)", "Rimuovi Maledizione (Lvl 3)", "Rinascita (Lvl 3)", 
        "Aura di Purezza (Lvl 4)", "Aura di Vita (Lvl 4)", "Esilio (Lvl 4)", "Interdizione alla Morte (Lvl 4)", "Localizza Creatura (Lvl 4)", "Punizione Demoralizzante (Lvl 4)", 
        "Cerchio di Potere (Lvl 5)", "Costrizione (Lvl 5)", "Dissolvi il Bene e il Male (Lvl 5)", "Onda Distruttiva (Lvl 5)", "Punizione Esiliante (Lvl 5)", "Rianimare Morti (Lvl 5)"
    ],
    "Ranger": [
        "Allarme (Lvl 1)", "Amicizia con gli Animali (Lvl 1)", "Bacche Benefiche (Lvl 1)", "Colpo Intrappolante (Lvl 1)", "Cura Ferite (Lvl 1)", "Individuazione del Magico (Lvl 1)", "Individuazione delle Malattie e dei Veleni (Lvl 1)", "Marchio del Cacciatore (Lvl 1)", "Nube di Nebbia (Lvl 1)", "Parlare con gli Animali (Lvl 1)", "Passo Veloce (Lvl 1)", "Raffica di Spine (Lvl 1)", "Saltare (Lvl 1)", 
        "Animale Messaggero (Lvl 2)", "Cordone di Frecce (Lvl 2)", "Crescita di Spine (Lvl 2)", "Localizza Animali o Vegetali (Lvl 2)", "Localizza Oggetto (Lvl 2)", "Passare Senza Tracce (Lvl 2)", "Pelle Coriacea (Lvl 2)", "Percezione delle Bestie (Lvl 2)", "Protezione dai Veleni (Lvl 2)", "Ristorare Inferiore (Lvl 2)", "Scopri Trappole (Lvl 2)", "Scurovisione (Lvl 2)", "Silenzio (Lvl 2)", 
        "Anti-Individuazione (Lvl 3)", "Camminare sull'Acqua (Lvl 3)", "Crescita Vegetale (Lvl 3)", "Evoca Animali (Lvl 3)", "Evoca Raffica (Lvl 3)", "Freccia Folgorante (Lvl 3)", "Luce Diurna (Lvl 3)", "Muro di Vento (Lvl 3)", "Parlare con i Vegetali (Lvl 3)", "Protezione dall'Energia (Lvl 3)", "Respirare sott'Acqua (Lvl 3)", 
        "Evoca Creature Boschive (Lvl 4)", "Libertà di Movimento (Lvl 4)", "Localizza Creatura (Lvl 4)", "Pelle di Pietra (Lvl 4)", "Rampicante Afferrante (Lvl 4)", 
        "Comunione con la Natura (Lvl 5)", "Evoca Pioggia di Armi (Lvl 5)", "Faretra Rapida (Lvl 5)", "Traslazione Arborea (Lvl 5)"
    ],
    "Stregone": [
        "Colpo Accurato (Trucchetto)", "Dardo di Fuoco (Trucchetto)", "Illusione Minore (Trucchetto)", "Luce (Trucchetto)", "Mano Magica (Trucchetto)", "Messaggio (Trucchetto)", "Prestidigitazione (Trucchetto)", "Raggio di Gelo (Trucchetto)", "Spruzzo Velenoso (Trucchetto)", "Tocco Gelido (Trucchetto)", 
        "Armatura Magica (Lvl 1)", "Caduta Morbida (Lvl 1)", "Charme su Persone (Lvl 1)", "Comprensione dei Linguaggi (Lvl 1)", "Dardo Incantato (Lvl 1)", "Immagine Silenziosa (Lvl 1)", "Individuazione del Magico (Lvl 1)", "Ritirata Rapida (Lvl 1)", "Scudo (Lvl 1)", "Sonno (Lvl 1)", 
        "Arma Magica (Lvl 2)", "Blocca Persone (Lvl 2)", "Cecità/Sordità (Lvl 2)", "Corona di Follia (Lvl 2)", "Frantumare (Lvl 2)", "Immagine Speculare (Lvl 2)", "Individuazione dei Pensieri (Lvl 2)", "Ingrandire/Ridurre (Lvl 2)", "Invisibilità (Lvl 2)", "Levitazione (Lvl 2)", "Nube di Pugnali (Lvl 2)", "Oscurità (Lvl 2)", "Passo Velato (Lvl 2)", "Raggio Rovente (Lvl 2)", "Ragnatela (Lvl 2)", "Sfocatura (Lvl 2)", "Suggestione (Lvl 2)", "Vedere Invisibilità (Lvl 2)", 
        "Controincantesimo (Lvl 3)", "Dissolvi Magie (Lvl 3)", "Forma Gassosa (Lvl 3)", "Fulmine (Lvl 3)", "Lentezza (Lvl 3)", "Palla di Fuoco (Lvl 3)", "Paura (Lvl 3)", "Velocità (Lvl 3)", "Volare (Lvl 3)", 
        "Esilio (Lvl 4)", "Invisibilità Superiore (Lvl 4)", "Metamorfosi (Lvl 4)", "Muro di Fuoco (Lvl 4)", "Pelle di Pietra (Lvl 4)", "Porta Dimensionale (Lvl 4)", 
        "Animare Oggetti (Lvl 5)", "Cono di Freddo (Lvl 5)", "Creazione (Lvl 5)", "Dominare Persone (Lvl 5)", "Nube Mortale (Lvl 5)", "Scrutare (Lvl 5)", "Telecinesi (Lvl 5)", 
        "Catena di Fulmini (Lvl 6)", "Disintegrazione (Lvl 6)", "Globo di Invulnerabilità (Lvl 6)", "Visione del Vero (Lvl 6)", 
        "Palla di Fuoco Ritardata (Lvl 7)", "Spostamento Planare (Lvl 7)", "Spruzzo Prismatico (Lvl 7)", "Teletrasporto (Lvl 7)", 
        "Dominare Mostri (Lvl 8)", "Esplosione Solare (Lvl 8)", "Terremoto (Lvl 8)", 
        "Desiderio (Lvl 9)", "Fermare il Tempo (Lvl 9)", "Parola del Potere Uccidere (Lvl 9)", "Sciame di Meteore (Lvl 9)"
    ],
    "Warlock": [
        "Amicizia (Trucchetto)", "Colpo Accurato (Trucchetto)", "Deflagrazione Occulta (Trucchetto)", "Illusione Minore (Trucchetto)", "Interdizione alle Lame (Trucchetto)", "Mano Magica (Trucchetto)", "Prestidigitazione (Trucchetto)", "Spruzzo Velenoso (Trucchetto)", "Tocco Gelido (Trucchetto)", 
        "Armatura di Agathys (Lvl 1)", "Braccia di Hadar (Lvl 1)", "Charme su Persone (Lvl 1)", "Comprensione dei Linguaggi (Lvl 1)", "Dardo Stregato (Lvl 1)", "Intimorire Infernale (Lvl 1)", "Protezione dal Bene e dal Male (Lvl 1)", "Ritirata Rapida (Lvl 1)", "Scritto Illusorio (Lvl 1)", "Servitore Inosservato (Lvl 1)", "Sortilegio (Lvl 1)", 
        "Blocca Persone (Lvl 2)", "Corona di Follia (Lvl 2)", "Estasiare (Lvl 2)", "Frantumare (Lvl 2)", "Immagine Speculare (Lvl 2)", "Invisibilità (Lvl 2)", "Movimenti del Ragno (Lvl 2)", "Oscurità (Lvl 2)", "Passo Velato (Lvl 2)", "Raggio di Affaticamento (Lvl 2)", "Suggestione (Lvl 2)", 
        "Cerchio Magico (Lvl 3)", "Controincantesimo (Lvl 3)", "Dissolvi Magie (Lvl 3)", "Fame di Hadar (Lvl 3)", "Forma Gassosa (Lvl 3)", "Immagine Maggiore (Lvl 3)", "Linguaggi (Lvl 3)", "Paura (Lvl 3)", "Rimuovi Maledizione (Lvl 3)", "Tocco del Vampiro (Lvl 3)", "Trama Ipnotica (Lvl 3)", "Volare (Lvl 3)", 
        "Esilio (Lvl 4)", "Inaridire (Lvl 4)", "Porta Dimensionale (Lvl 4)", "Terreno Illusorio (Lvl 4)", 
        "Blocca Mostri (Lvl 5)", "Contattare Altri Piani (Lvl 5)", "Scrutare (Lvl 5)", "Sogno (Lvl 5)", 
        "Carne in Pietra (Lvl 6)", "Cerchio di Morte (Lvl 6)", "Creare Non Morti (Lvl 6)", "Evoca Folletto (Lvl 6)", "Portale Arcano (Lvl 6)", "Sguardo Penetrante (Lvl 6)", "Suggestione di Massa (Lvl 6)", "Visione del Vero (Lvl 6)", 
        "Dito della Morte (Lvl 7)", "Forma Eterea (Lvl 7)", "Gabbia di Forza (Lvl 7)", "Spostamento Planare (Lvl 7)", 
        "Dominare Mostri (Lvl 8)", "Loquacità (Lvl 8)", "Parola del Potere Stordire (Lvl 8)", "Regressione Mentale (Lvl 8)", "Semipiano (Lvl 8)", 
        "Imprigionare (Lvl 9)", "Metamorfosi Pura (Lvl 9)", "Parola del Potere Uccidere (Lvl 9)", "Previsione (Lvl 9)", "Proiezione Astrale (Lvl 9)"
    ],
    "Monaco": [
        "Artificio Druidico (Trucchetto)", "Dardo di Fuoco (Trucchetto)", "Illusione Minore (Trucchetto)", "Luce (Trucchetto)", "Mano Magica (Trucchetto)", "Prestidigitazione (Trucchetto)", 
        "Mani Brucianti (Lvl 1)", "Onda Tonante (Lvl 1)", 
        "Blocca Persone (Lvl 2)", "Cecità/Sordità (Lvl 2)", "Folata di Vento (Lvl 2)", "Frantumare (Lvl 2)", "Oscurità (Lvl 2)", "Passare Senza Tracce (Lvl 2)", "Raggio Rovente (Lvl 2)", "Scurovisione (Lvl 2)", "Sfera Infuocata (Lvl 2)", "Silenzio (Lvl 2)", 
        "Forma Gassosa (Lvl 3)", "Luce Diurna (Lvl 3)", "Palla di Fuoco (Lvl 3)", "Volare (Lvl 3)", 
        "Controllare Acqua (Lvl 4)", "Muro di Fuoco (Lvl 4)", "Pelle di Pietra (Lvl 4)", 
        "Cono di Freddo (Lvl 5)", "Muro di Pietra (Lvl 5)"
    ]
};

// ==========================================
// DATABASE TRATTI E PRIVILEGI 
// ==========================================
const trattiGenerici = [
    "Scurovisione", "Resistenza Infernale (Tiefling)", "Fortunato (Halfling)", 
    "Fortitudine Nanica", "Retaggio Fatato (Elfo)", "Arma a Soffio (Dragonide)", 
    "Tenacia Implacabile (Mezzorco)", "Talento Generico"
];

const trattiPerClasse = {
    "Barbaro": [
        {lvl: 1, nome: "Ira"}, {lvl: 1, nome: "Difesa Senza Armatura"}, 
        {lvl: 2, nome: "Attacco Temerario"}, {lvl: 2, nome: "Percezione del Pericolo"},
        {lvl: 5, nome: "Attacco Extra"}, {lvl: 5, nome: "Movimento Veloce"},
        {lvl: 7, nome: "Istinto Ferino"}, {lvl: 9, nome: "Critico Brutale"},
        {lvl: 11, nome: "Ira Implacabile"}, {lvl: 15, nome: "Ira Persistente"},
        {lvl: 18, nome: "Forza Indomita"}, {lvl: 20, nome: "Campione Primordiale"}
    ],
    "Bardo": [
        {lvl: 1, nome: "Ispirazione Bardica"}, {lvl: 2, nome: "Tuttofare"}, 
        {lvl: 2, nome: "Canto di Riposo"}, {lvl: 3, nome: "Maestria"},
        {lvl: 5, nome: "Fonte di Ispirazione"}, {lvl: 6, nome: "Controfascinazione"},
        {lvl: 10, nome: "Segreti Magici"}, {lvl: 20, nome: "Ispirazione Superiore"}
    ],
    "Chierico": [
        {lvl: 1, nome: "Dominio Divino"}, {lvl: 2, nome: "Incanalare Divinità"}, 
        {lvl: 2, nome: "Scacciare Non Morti"}, {lvl: 5, nome: "Distruggere Non Morti"},
        {lvl: 10, nome: "Intervento Divino"}
    ],
    "Druido": [
        {lvl: 1, nome: "Druidico"}, {lvl: 2, nome: "Forma Selvatica"}, 
        {lvl: 18, nome: "Corpo Senza Età"}, {lvl: 18, nome: "Incantesimi Bestiali"},
        {lvl: 20, nome: "Arcidruido"}
    ],
    "Guerriero": [
        {lvl: 1, nome: "Stile di Combattimento"}, {lvl: 1, nome: "Recuperare Energie"}, 
        {lvl: 2, nome: "Azione Impetuosa"}, {lvl: 5, nome: "Attacco Extra"},
        {lvl: 9, nome: "Indomito"}
    ],
    "Ladro": [
        {lvl: 1, nome: "Attacco Furtivo"}, {lvl: 1, nome: "Gergo dei Ladri"},
        {lvl: 2, nome: "Azione Astuta"}, {lvl: 5, nome: "Schivata Prodigiosa"}, 
        {lvl: 7, nome: "Elusione"}, {lvl: 11, nome: "Dote Attendibile"},
        {lvl: 14, nome: "Senso Cieco"}, {lvl: 15, nome: "Mente Sfuggente"},
        {lvl: 18, nome: "Elusivo"}, {lvl: 20, nome: "Colpo di Fortuna"}
    ],
    "Monaco": [
        {lvl: 1, nome: "Arti Marziali"}, {lvl: 1, nome: "Difesa Senza Armatura"}, 
        {lvl: 2, nome: "Ki / Focus"}, {lvl: 2, nome: "Raffica di Colpi"},
        {lvl: 2, nome: "Pazienza, Passo del Vento"}, {lvl: 3, nome: "Deviare Proiettili"},
        {lvl: 4, nome: "Caduta Lenta"}, {lvl: 5, nome: "Attacco Extra"},
        {lvl: 5, nome: "Colpo Stordente"}, {lvl: 6, nome: "Colpi Ki"},
        {lvl: 7, nome: "Elusione"}, {lvl: 7, nome: "Mente Lucida"},
        {lvl: 10, nome: "Purezza del Corpo"}, {lvl: 13, nome: "Anima di Diamante"},
        {lvl: 14, nome: "Anima di Sole e Luna"}, {lvl: 15, nome: "Corpo Senza Età"},
        {lvl: 18, nome: "Corpo Vuoto"}, {lvl: 20, nome: "Perfezione Astrale"}
    ],
    "Paladino": [
        {lvl: 1, nome: "Senso Divino"}, {lvl: 1, nome: "Imposizione delle Mani"},
        {lvl: 2, nome: "Stile di Combattimento"}, {lvl: 2, nome: "Punizione Divina"}, 
        {lvl: 3, nome: "Salute Divina"}, {lvl: 3, nome: "Incanalare Divinità"},
        {lvl: 5, nome: "Attacco Extra"}, {lvl: 6, nome: "Aura di Protezione"},
        {lvl: 10, nome: "Aura di Coraggio"}, {lvl: 11, nome: "Punizione Divina Migliorata"},
        {lvl: 14, nome: "Tocco Purificatore"}
    ],
    "Ranger": [
        {lvl: 1, nome: "Nemico Prescelto"}, {lvl: 1, nome: "Esploratore Nato"},
        {lvl: 2, nome: "Stile di Combattimento"}, {lvl: 3, nome: "Consapevolezza Primordiale"},
        {lvl: 5, nome: "Attacco Extra"}, {lvl: 8, nome: "Andatura sul Terreno"},
        {lvl: 10, nome: "Mimetismo Naturale"}, {lvl: 14, nome: "Svanire"},
        {lvl: 18, nome: "Sensi Ferini"}, {lvl: 20, nome: "Uccisore di Nemici"}
    ],
    "Stregone": [
        {lvl: 1, nome: "Origine Stregonesca"}, {lvl: 2, nome: "Fonte di Magia"}, 
        {lvl: 2, nome: "Punti Stregoneria"}, {lvl: 3, nome: "Metamagia"},
        {lvl: 20, nome: "Ripristino Stregonesco"}
    ],
    "Warlock": [
        {lvl: 1, nome: "Patrono Ultraterreno"}, {lvl: 1, nome: "Magia del Patto"}, 
        {lvl: 2, nome: "Suppliche Occulte"}, {lvl: 3, nome: "Dono del Patto"},
        {lvl: 11, nome: "Arcanum Mistico"}, {lvl: 20, nome: "Maestro Occulto"}
    ],
    "Mago": [
        {lvl: 1, nome: "Recupero Arcano"}, {lvl: 2, nome: "Tradizione Arcana"},
        {lvl: 18, nome: "Padronanza Incantesimi"}, {lvl: 20, nome: "Incantesimo Personale"}
    ]
};

const tratti5e = {
    "Scurovisione": "Vedi nell'oscurità fino a 18m come luce fioca, in scala di grigi.",
    "Resistenza Infernale (Tiefling)": "Resistenza ai danni da fuoco.",
    "Fortunato (Halfling)": "Se ottieni 1 a TpC, TS o abilità, ritira e tieni il nuovo risultato.",
    "Fortitudine Nanica": "Vantaggio TS veleno e resistenza danni veleno.",
    "Retaggio Fatato (Elfo)": "Vantaggio TS contro fascino. La magia non ti addormenta.",
    "Arma a Soffio (Dragonide)": "Azione: esali energia. TS Des o Cos dimezza i danni.",
    "Tenacia Implacabile (Mezzorco)": "Scendi a 0 PF ma non muori sul colpo? Scendi a 1 PF.",
    "Talento Generico": "Guarda il Manuale per la descrizione del tuo talento specifico.",
    "Ira": "Vantaggio Forza, danni extra in mischia, resistenze a danni fisici.",
    "Difesa Senza Armatura": "CA = 10 + Des + Cos (o Sag per il Monaco).",
    "Attacco Temerario": "Vantaggio al tuo TpC in mischia, ma i nemici hanno Vantaggio contro di te.",
    "Percezione del Pericolo": "Vantaggio ai TS Destrezza contro effetti che puoi vedere.",
    "Attacco Extra": "Puoi attaccare due volte (invece di una) quando usi l'azione di Attacco.",
    "Ispirazione Bardica": "Azione bonus: dai un dado bonus a un alleato da sommare a un tiro.",
    "Tuttofare": "Aggiungi metà bonus competenza a prove abilità senza competenza.",
    "Incanalare Divinità": "Incanali l'energia divina per un effetto del tuo dominio.",
    "Scacciare Non Morti": "Azione: Non morti entro 9m fanno TS Saggezza o fuggono in preda al terrore.",
    "Punizione Divina": "Quando colpisci in mischia, brucia uno slot per danni radiosi extra (2d8+).",
    "Forma Selvatica": "Azione/Azione Bonus: Assumi magicamente la forma di una bestia.",
    "Recuperare Energie": "Azione bonus: recuperi 1d10 + livello guerriero PF.",
    "Azione Impetuosa": "Azione extra nel tuo turno (1/riposo).",
    "Attacco Furtivo": "Danni extra (1d6 a scalare) se hai Vantaggio o un alleato vicino al bersaglio.",
    "Azione Astuta": "Azione Bonus per fare Scatto, Disimpegno o Nascondersi.",
    "Schivata Prodigiosa": "Reazione: quando vieni colpito da un nemico visibile, dimezzi i danni.",
    "Arti Marziali": "Usi Des per colpi senz'armi. Danno a scalare (1d6+).",
    "Raffica di Colpi": "Spendi 1 Punto Focus dopo un attacco per 2 colpi senz'armi (Azione Bonus).",
    "Nemico Prescelto": "Vantaggio a Sopravvivenza/Indagare contro un tipo specifico di creatura.",
    "Punti Stregoneria": "Riserva di energia per creare Slot o usare le Metamagie.",
    "Metamagia": "Modifica incantesimi (es. Raddoppiato, Rapido, Potenziato, Celato).",
    "Magia del Patto": "Tutti i tuoi Slot sono del livello massimo e ricaricano col Riposo Breve.",
    "Recupero Arcano": "Durante un Riposo Breve recuperi Slot pari a metà livello mago."
};

const dadiVitaMap={"Mago":"d6","Stregone":"d6","Bardo":"d8","Chierico":"d8","Druido":"d8","Ladro":"d8","Monaco":"d8","Warlock":"d8","Guerriero":"d10","Paladino":"d10","Ranger":"d10","Barbaro":"d12"};

// ==========================================
// MAPPA SLOT INCANTESIMI PER LIVELLO
// ==========================================
const fullCasterSlots=[[0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0],[3,0,0,0,0,0,0,0,0],[4,2,0,0,0,0,0,0,0],[4,3,0,0,0,0,0,0,0],[4,3,2,0,0,0,0,0,0],[4,3,3,0,0,0,0,0,0],[4,3,3,1,0,0,0,0,0],[4,3,3,2,0,0,0,0,0],[4,3,3,3,1,0,0,0,0],[4,3,3,3,2,0,0,0,0],[4,3,3,3,2,1,0,0,0],[4,3,3,3,2,1,0,0,0],[4,3,3,3,2,1,1,0,0],[4,3,3,3,2,1,1,0,0],[4,3,3,3,2,1,1,1,0],[4,3,3,3,2,1,1,1,0],[4,3,3,3,2,1,1,1,1],[4,3,3,3,3,1,1,1,1],[4,3,3,3,3,2,1,1,1],[4,3,3,3,3,2,2,1,1]];
const halfCasterSlots=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0],[3,0,0,0,0,0,0,0,0],[3,0,0,0,0,0,0,0,0],[4,2,0,0,0,0,0,0,0],[4,2,0,0,0,0,0,0,0],[4,3,0,0,0,0,0,0,0],[4,3,0,0,0,0,0,0,0],[4,3,2,0,0,0,0,0,0],[4,3,2,0,0,0,0,0,0],[4,3,3,0,0,0,0,0,0],[4,3,3,0,0,0,0,0,0],[4,3,3,1,0,0,0,0,0],[4,3,3,1,0,0,0,0,0],[4,3,3,2,0,0,0,0,0],[4,3,3,2,0,0,0,0,0],[4,3,3,3,1,0,0,0,0],[4,3,3,3,1,0,0,0,0],[4,3,3,3,2,0,0,0,0],[4,3,3,3,2,0,0,0,0]];
const warlockSlots=[[0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0],[0,2,0,0,0,0,0,0,0],[0,2,0,0,0,0,0,0,0],[0,0,2,0,0,0,0,0,0],[0,0,2,0,0,0,0,0,0],[0,0,0,2,0,0,0,0,0],[0,0,0,2,0,0,0,0,0],[0,0,0,0,2,0,0,0,0],[0,0,0,0,2,0,0,0,0],[0,0,0,0,3,1,0,0,0],[0,0,0,0,3,1,0,0,0],[0,0,0,0,3,1,1,0,0],[0,0,0,0,3,1,1,0,0],[0,0,0,0,3,1,1,1,0],[0,0,0,0,3,1,1,1,0],[0,0,0,0,4,1,1,1,1],[0,0,0,0,4,1,1,1,1],[0,0,0,0,4,1,1,1,1],[0,0,0,0,4,1,1,1,1]];

// =========================================
// LOGICA ECG IN BASE AI PF
// =========================================
function aggiornaECG() {
    let hpMax = parseInt(document.getElementById('hp-max').value) || 0;
    let hpTotal = parseInt(document.getElementById('hp-total-calc').value) || 0;
    let ecgLine = document.getElementById('ecg-line');

    if (!ecgLine || hpMax === 0) return;

    let percentualePF = (hpTotal / hpMax) * 100;

    ecgLine.classList.remove('ecg-normal', 'ecg-medium', 'ecg-critical', 'ecg-flatline');

    if (hpTotal <= 0) {
        ecgLine.classList.add('ecg-flatline');
    } else if (percentualePF <= 30) {
        ecgLine.classList.add('ecg-critical');
    } else if (percentualePF <= 70) {
        ecgLine.classList.add('ecg-medium');
    } else {
        ecgLine.classList.add('ecg-normal');
    }
}