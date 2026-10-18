window.PONTE_DATA = {
  it: {
    label: 'italiano', voice: 'it-IT',
    tutor: {
      name: 'Marco', avatar: '👨‍🍳', status: 'Tutor nativo · Roma',
      greeting: "Ciao! Sono Marco. Di quale livello vuoi parlare oggi?",
      starters: ['Ciao Marco!', 'Parliamo del livello A1', 'Mi chiamo...', 'Non capisco'],
      systemPrompt: `Eres "Marco", tutor de italiano nativo. Adaptas tu nivel. Corrige con cariño: "Ah, capisco! Piccola correzione: si dice...". Haz siempre una pregunta final.`
    },
    levels: {
      a1: {
        titulo: 'A1 · Principiante', desc: 'Lo esencial para sobrevivir y presentarte.',
        categorias: [
          { id: 'zione', titulo: '-ción → -zione', cognados: [
            { es: 'información', target: 'informazione' }, { es: 'nación', target: 'nazione' }, { es: 'educación', target: 'educazione' },
            { es: 'atención', target: 'attenzione' }, { es: 'estación', target: 'stazione' }, { es: 'función', target: 'funzione' },
            { es: 'acción', target: 'azione' }, { es: 'dirección', target: 'direzione' }, { es: 'tradición', target: 'tradizione' },
            { es: 'condición', target: 'condizione' }, { es: 'posición', target: 'posizione' }, { es: 'intención', target: 'intenzione' },
            { es: 'celebración', target: 'celebrazione' }, { es: 'aplicación', target: 'applicazione' }, { es: 'comunicación', target: 'comunicazione' }
          ]},
          { id: 'ta', titulo: '-dad → -tà', cognados: [
            { es: 'ciudad', target: 'città' }, { es: 'universidad', target: 'università' }, { es: 'libertad', target: 'libertà' },
            { es: 'curiosidad', target: 'curiosità' }, { es: 'felicidad', target: 'felicità' }, { es: 'realidad', target: 'realtà' },
            { es: 'actividad', target: 'attività' }, { es: 'personalidad', target: 'personalità' }, { es: 'sociedad', target: 'società' },
            { es: 'calidad', target: 'qualità' }, { es: 'dificultad', target: 'difficoltà' }, { es: 'cantidad', target: 'quantità' },
            { es: 'electricidad', target: 'elettricità' }, { es: 'identidad', target: 'identità' }, { es: 'capacidad', target: 'capacità' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Números', icon: '🔢', items: [
            { es: 'uno', target: 'uno' }, { es: 'dos', target: 'due' }, { es: 'tres', target: 'tre' }, { es: 'cuatro', target: 'quattro' },
            { es: 'cinco', target: 'cinque' }, { es: 'seis', target: 'sei' }, { es: 'siete', target: 'sette' }, { es: 'ocho', target: 'otto' },
            { es: 'nueve', target: 'nove' }, { es: 'diez', target: 'dieci' }, { es: 'veinte', target: 'venti' }, { es: 'cien', target: 'cento' }
          ]},
          { cat: 'Días', icon: '📅', items: [
            { es: 'lunes', target: 'lunedì' }, { es: 'martes', target: 'martedì' }, { es: 'miércoles', target: 'mercoledì' },
            { es: 'jueves', target: 'giovedì' }, { es: 'viernes', target: 'venerdì' }, { es: 'sábado', target: 'sabato' }, { es: 'domingo', target: 'domenica' }
          ]},
          { cat: 'Familia', icon: '👨‍👩‍👧', items: [
            { es: 'madre', target: 'madre' }, { es: 'padre', target: 'padre' }, { es: 'hermano', target: 'fratello' },
            { es: 'hermana', target: 'sorella' }, { es: 'hijo', target: 'figlio' }, { es: 'hija', target: 'figlia' },
            { es: 'abuelo', target: 'nonno' }, { es: 'abuela', target: 'nonna' }, { es: 'tío', target: 'zio' }, { es: 'tía', target: 'zia' }
          ]},
          { cat: 'Colores', icon: '🎨', items: [
            { es: 'rojo', target: 'rosso' }, { es: 'azul', target: 'blu' }, { es: 'verde', target: 'verde' }, { es: 'amarillo', target: 'giallo' },
            { es: 'negro', target: 'nero' }, { es: 'blanco', target: 'bianco' }
          ]}
        ],
        trampas: [
          { word: 'burro', opts: [['Un animal', false], ['Mantequilla', true], ['Un tonto', false]], note: 'El animal es "asino".', mnemonic: 'Burro untado de mantequilla.', phrase: 'Pane con il burro.' },
          { word: 'salire', opts: [['Salir', false], ['Subir', true], ['Saltar', false]], note: '"Salir" es "uscire".', mnemonic: 'Subir a un árbol.', phrase: 'Salire al piano.' },
          { word: 'guardare', opts: [['Guardar', false], ['Mirar', true], ['Cuidar', false]], note: '"Guardar" es "conservare".', mnemonic: 'Mirar la tele.', phrase: 'Guardare un film.' },
          { word: 'stanza', opts: [['Estancia larga', false], ['Habitación', true], ['Pausa', false]], note: 'Habitación o cuarto.', mnemonic: 'Tu stanza es tu cuarto.', phrase: 'La mia stanza è piccola.' },
          { word: 'magazzino', opts: [['Revista', false], ['Almacén', true], ['Tienda', false]], note: 'La revista es "rivista".', mnemonic: 'Il magazzino è dove tieni le cose.', phrase: 'Il magazzino è pieno.' },
          { word: 'camera', opts: [['Cámara', false], ['Habitación', true], ['Armario', false]], note: 'Cámara es "macchina fotografica".', mnemonic: 'Reservar habitación.', phrase: 'Ho prenotato una camera.' },
          { word: 'fattoria', opts: [['Factoría', false], ['Granja', true], ['Fábrica', false]], note: 'Factoría es "fabbrica".', mnemonic: 'Una fattoria toscana.', phrase: 'Vivono in una fattoria.' },
          { word: 'rumore', opts: [['Rumor', false], ['Ruido', true], ['Murmullo', false]], note: 'Chisme es "pettegolezzo".', mnemonic: 'Che rumore! = ¡Qué ruido!', phrase: "C'è troppo rumore." },
          { word: 'confetti', opts: [['Confeti', false], ['Caramelos', true], ['Papel picado', false]], note: 'Confeti es "coriandoli".', mnemonic: 'Caramelos de azúcar.', phrase: 'Mi piacciono i confetti.' },
          { word: 'parente', opts: [['Pariente lejano', false], ['Familiar', true], ['Conocido', false]], note: '"Parente" = familiar.', mnemonic: 'I parenti = los familiares.', phrase: 'Vado a trovare i parenti.' }
        ],
        verbos: {
          pronombres: [{it:'io', es:'yo'}, {it:'tu', es:'tú'}, {it:'lui/lei', es:'él/ella'}, {it:'noi', es:'nosotros'}, {it:'voi', es:'vosotros'}, {it:'loro', es:'ellos'}],
          lista: [
            { inf: 'essere', es: 'ser / estar', formas: ['sono','sei','è','siamo','siete','sono'], ejemplo: 'Sono di Panama.', ejEs: 'Soy de Panamá.' },
            { inf: 'avere', es: 'tener', formas: ['ho','hai','ha','abbiamo','avete','hanno'], ejemplo: 'Ho due fratelli.', ejEs: 'Tengo dos hermanos.' },
            { inf: 'andare', es: 'ir', formas: ['vado','vai','va','andiamo','andate','vanno'], ejemplo: 'Vado a Roma.', ejEs: 'Voy a Roma.' },
            { inf: 'fare', es: 'hacer', formas: ['faccio','fai','fa','facciamo','fate','fanno'], ejemplo: 'Faccio sport.', ejEs: 'Hago deporte.' },
            { inf: 'volere', es: 'querer', formas: ['voglio','vuoi','vuole','vogliamo','volete','vogliono'], ejemplo: 'Voglio un caffè.', ejEs: 'Quiero un café.' },
            { inf: 'potere', es: 'poder', formas: ['posso','puoi','può','possiamo','potete','possono'], ejemplo: 'Posso aiutarti?', ejEs: '¿Puedo ayudarte?' },
            { inf: 'dovere', es: 'deber', formas: ['devo','devi','deve','dobbiamo','dovete','devono'], ejemplo: 'Devo studiare.', ejEs: 'Debo estudiar.' },
            { inf: 'sapere', es: 'saber', formas: ['so','sai','sa','sappiamo','sapete','sanno'], ejemplo: 'Non so nuotare.', ejEs: 'No sé nadar.' },
            { inf: 'vedere', es: 'ver', formas: ['vedo','vedi','vede','vediamo','vedete','vedono'], ejemplo: 'Vedo il mare.', ejEs: 'Veo el mar.' },
            { inf: 'mangiare', es: 'comer', formas: ['mangio','mangi','mangia','mangiamo','mangiate','mangiano'], ejemplo: 'Mangio la pasta.', ejEs: 'Como pasta.' },
            { inf: 'parlare', es: 'hablar', formas: ['parlo','parli','parla','parliamo','parlate','parlano'], ejemplo: 'Parlo italiano.', ejEs: 'Hablo italiano.' },
            { inf: 'stare', es: 'estar / quedarse', formas: ['sto','stai','sta','stiamo','state','stanno'], ejemplo: 'Sto bene.', ejEs: 'Estoy bien.' }
          ]
        },
        construccion: [
          { es: 'Yo soy de Panamá', palabras: ['Io','sono','di','Panama'], distractores: ['è','siamo','a'], traduccion: 'Io sono di Panama.' },
          { es: 'Tú eres italiano', palabras: ['Tu','sei','italiano'], distractores: ['sono','è','Roma'], traduccion: 'Tu sei italiano.' },
          { es: 'Él tiene un perro', palabras: ['Lui','ha','un','cane'], distractores: ['ho','hai','gatto'], traduccion: 'Lui ha un cane.' },
          { es: 'Nosotros vamos a Roma', palabras: ['Noi','andiamo','a','Roma'], distractores: ['vado','vai','Milano'], traduccion: 'Noi andiamo a Roma.' },
          { es: 'Quiero un café', palabras: ['Voglio','un','caffè'], distractores: ['vuoi','vuole','tè'], traduccion: 'Voglio un caffè.' },
          { es: 'No sé nadar', palabras: ['Non','so','nuotare'], distractores: ['sai','sa','cantare'], traduccion: 'Non so nuotare.' },
          { es: 'Veo el mar', palabras: ['Vedo','il','mare'], distractores: ['vedi','vede','montagna'], traduccion: 'Vedo il mare.' },
          { es: '¿Puedes ayudarme?', palabras: ['Puoi','aiutarmi'], distractores: ['posso','può','grazie'], traduccion: 'Puoi aiutarmi?' },
          { es: 'Hablo italiano', palabras: ['Parlo','italiano'], distractores: ['parli','parla','spagnolo'], traduccion: 'Parlo italiano.' },
          { es: 'Estoy bien', palabras: ['Sto','bene'], distractores: ['stai','sta','male'], traduccion: 'Sto bene.' }
        ],
        supervivencia: [
          { categoria: 'Saludos', icono: '👋', frases: [
            { es: 'Hola / Chau', target: 'Ciao' }, { es: 'Buenos días', target: 'Buongiorno' }, { es: 'Buenas tardes', target: 'Buonasera' },
            { es: 'Adiós', target: 'Arrivederci' }, { es: 'Por favor', target: 'Per favore' }, { es: 'Gracias', target: 'Grazie' },
            { es: 'De nada', target: 'Prego' }, { es: 'Disculpe', target: 'Scusi' }, { es: 'Buenas noches', target: 'Buonanotte' }, { es: 'Bienvenido', target: 'Benvenuto' }
          ]},
          { categoria: 'Básicos', icono: '💬', frases: [
            { es: 'Sí / No', target: 'Sì / No' }, { es: 'No entiendo', target: 'Non capisco' }, { es: '¿Habla español?', target: 'Parla spagnolo?' },
            { es: '¿Cómo se dice...?', target: 'Come si dice...?' }, { es: '¿Cuánto cuesta?', target: 'Quanto costa?' }, { es: '¿Dónde está el baño?', target: "Dov'è il bagno?" },
            { es: '¿Qué hora es?', target: 'Che ora è?' }, { es: 'Soy de...', target: 'Sono di...' }, { es: 'No hablo italiano', target: 'Non parlo italiano' }, { es: '¿Puede repetir?', target: 'Può ripetere?' }
          ]},
          { categoria: 'Restaurante', icono: '🍽️', frases: [
            { es: 'Una mesa para dos', target: 'Un tavolo per due' }, { es: 'El menú, por favor', target: 'Il menù, per favore' }, { es: 'Quisiera...', target: 'Vorrei...' },
            { es: 'La cuenta, por favor', target: 'Il conto, per favore' }, { es: 'Sin gluten', target: 'Senza glutine' }, { es: '¡Está delicioso!', target: 'È delizioso!' },
            { es: 'Un vaso de agua', target: 'Un bicchiere d\'acqua' }, { es: 'Estoy lleno', target: 'Sono pieno' }, { es: 'Un café por favor', target: 'Un caffè per favore' }, { es: 'La pizza', target: 'La pizza' }
          ]},
          { categoria: 'Direcciones', icono: '🧭', frases: [
            { es: '¿Dónde está la estación?', target: "Dov'è la stazione?" }, { es: 'A la derecha', target: 'A destra' }, { es: 'A la izquierda', target: 'A sinistra' },
            { es: 'Todo recto', target: 'Sempre dritto' }, { es: '¿Está lejos?', target: 'È lontano?' }, { es: 'Estoy perdido', target: 'Mi sono perso' },
            { es: '¿Dónde está el hotel?', target: "Dov'è l'hotel?" }, { es: 'Un taxi, por favor', target: 'Un taxi, per favore' }, { es: 'El aeropuerto', target: "L'aeroporto" }, { es: 'La playa', target: 'La spiaggia' }
          ]},
          { categoria: 'Emergencias', icono: '🚨', frases: [
            { es: '¡Ayuda!', target: 'Aiuto!' }, { es: 'Llamen a la policía', target: 'Chiamate la polizia' }, { es: 'No me siento bien', target: 'Non mi sento bene' },
            { es: 'Necesito un médico', target: 'Ho bisogno di un medico' }, { es: 'He perdido mi pasaporte', target: 'Ho perso il passaporto' }, { es: 'Es una emergencia', target: "È un'emergenza" }
          ]}
        ]
      },
      a2: {
        titulo: 'A2 · Básico', desc: 'Para conversar sobre el pasado y planes futuros.',
        categorias: [
          { id: 'mente', titulo: '-mente → -mente', cognados: [
            { es: 'lentamente', target: 'lentamente' }, { es: 'naturalmente', target: 'naturalmente' }, { es: 'probablemente', target: 'probabilmente' },
            { es: 'finalmente', target: 'finalmente' }, { es: 'rápidamente', target: 'rapidamente' }, { es: 'perfectamente', target: 'perfettamente' },
            { es: 'tristemente', target: 'tristemente' }, { es: 'felizmente', target: 'felicemente' }, { es: 'claramente', target: 'chiaramente' }, { es: 'normalmente', target: 'normalmente' }
          ]},
          { id: 'bile', titulo: '-ble → -bile', cognados: [
            { es: 'posible', target: 'possibile' }, { es: 'terrible', target: 'terribile' }, { es: 'responsable', target: 'responsabile' },
            { es: 'increíble', target: 'incredibile' }, { es: 'probable', target: 'probabile' }, { es: 'imposible', target: 'impossibile' },
            { es: 'horrible', target: 'orribile' }, { es: 'visible', target: 'visibile' }, { es: 'flexible', target: 'flessibile' }, { es: 'estable', target: 'stabile' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Comida', icon: '🍝', items: [
            { es: 'pasta', target: 'pasta' }, { es: 'pizza', target: 'pizza' }, { es: 'agua', target: 'acqua' }, { es: 'vino', target: 'vino' },
            { es: 'carne', target: 'carne' }, { es: 'pescado', target: 'pesce' }, { es: 'pan', target: 'pane' }, { es: 'queso', target: 'formaggio' },
            { es: 'manzana', target: 'mela' }, { es: 'naranja', target: 'arancia' }
          ]},
          { cat: 'Ropa', icon: '👕', items: [
            { es: 'camisa', target: 'camicia' }, { es: 'pantalón', target: 'pantaloni' }, { es: 'zapatos', target: 'scarpe' }, { es: 'sombrero', target: 'cappello' },
            { es: 'vestido', target: 'vestito' }, { es: 'falda', target: 'gonna' }, { es: 'abrigo', target: 'cappotto' }, { es: 'calcetines', target: 'calzini' }
          ]}
        ],
        trampas: [
          { word: 'camera', opts: [['Cámara', false], ['Habitación', true], ['Armario', false]], note: 'La cámara es "macchina fotografica".', mnemonic: 'Reservar una habitación.', phrase: 'Ho prenotato una camera.' },
          { word: 'fattoria', opts: [['Factoría', false], ['Granja', true], ['Fábrica', false]], note: 'La factoría es "fabbrica".', mnemonic: 'Una fattoria toscana.', phrase: 'Vivono in una fattoria.' },
          { word: 'rumore', opts: [['Rumor', false], ['Ruido', true], ['Murmullo', false]], note: 'Chisme es "pettegolezzo".', mnemonic: 'Che rumore!', phrase: "C'è troppo rumore." },
          { word: 'confetti', opts: [['Confeti', false], ['Caramelos', true], ['Papel picado', false]], note: 'Confeti es "coriandoli".', mnemonic: 'Caramelos de azúcar.', phrase: 'Mi piacciono i confetti.' },
          { word: 'parente', opts: [['Pariente lejano', false], ['Familiar', true], ['Conocido', false]], note: 'Familiar directo o indirecto.', mnemonic: 'I parenti = familiares.', phrase: 'Vado a trovare i parenti.' }
        ],
        verbos: {
          pronombres: [{it:'io', es:'yo'}, {it:'tu', es:'tú'}, {it:'lui/lei', es:'él/ella'}, {it:'noi', es:'nosotros'}, {it:'voi', es:'vosotros'}, {it:'loro', es:'ellos'}],
          lista: [
            { inf: 'ho mangiato (passato)', es: 'he comido', formas: ['ho mangiato','hai mangiato','ha mangiato','abbiamo mangiato','avete mangiato','hanno mangiato'], ejemplo: 'Ho mangiato la pizza.', ejEs: 'He comido pizza.' },
            { inf: 'sono andato (passato)', es: 'he ido', formas: ['sono andato','sei andato','è andato','siamo andati','siete andati','sono andati'], ejemplo: 'Sono andato a Roma.', ejEs: 'He ido a Roma.' },
            { inf: 'parlavo (imperfetto)', es: 'hablaba', formas: ['parlavo','parlavi','parlava','parlavamo','parlavate','parlavano'], ejemplo: 'Parlavo con lui.', ejEs: 'Hablaba con él.' },
            { inf: 'mangiavo (imperfetto)', es: 'comía', formas: ['mangiavo','mangiavi','mangiava','mangiavamo','mangiavate','mangiavano'], ejemplo: 'Mangiavo la pasta.', ejEs: 'Comía pasta.' }
          ]
        },
        construccion: [
          { es: 'He comido pizza', palabras: ['Ho','mangiato','la','pizza'], distractores: ['mangio','ieri'], traduccion: 'Ho mangiato la pizza.' },
          { es: 'He ido a Roma', palabras: ['Sono','andato','a','Roma'], distractores: ['vado','ieri'], traduccion: 'Sono andato a Roma.' },
          { es: 'Hablaba con él', palabras: ['Parlavo','con','lui'], distractores: ['parlo','con lei'], traduccion: 'Parlavo con lui.' },
          { es: 'Comía pasta', palabras: ['Mangiavo','la','pasta'], distractores: ['mangio','pizza'], traduccion: 'Mangiavo la pasta.' },
          { es: 'Ayer fui a la playa', palabras: ['Ieri','sono','andato','in','spiaggia'], distractores: ['vado','oggi'], traduccion: 'Ieri sono andato in spiaggia.' }
        ],
        supervivencia: [
          { categoria: 'Restaurante', icono: '🍽️', frases: [
            { es: 'Una mesa para dos', target: 'Un tavolo per due' }, { es: 'El menú, por favor', target: 'Il menù, per favore' }, { es: 'Quisiera...', target: 'Vorrei...' },
            { es: 'La cuenta, por favor', target: 'Il conto, per favore' }, { es: 'Sin gluten', target: 'Senza glutine' }, { es: '¡Está delicioso!', target: 'È delizioso!' }
          ]},
          { categoria: 'Direcciones', icono: '🧭', frases: [
            { es: '¿Dónde está la estación?', target: "Dov'è la stazione?" }, { es: 'A la derecha', target: 'A destra' }, { es: 'A la izquierda', target: 'A sinistra' },
            { es: 'Todo recto', target: 'Sempre dritto' }, { es: '¿Está lejos?', target: 'È lontano?' }, { es: 'Estoy perdido', target: 'Mi sono perso' }
          ]}
        ]
      },
      b1: {
        titulo: 'B1 · Intermedio', desc: 'Planes futuros, condicionales y viajes.',
        categorias: [
          { id: 'futuro', titulo: 'El Futuro', cognados: [
            { es: 'mañana', target: 'domani' }, { es: 'la próxima semana', target: 'la prossima settimana' }, { es: 'si llueve, me quedo', target: 'se piove, resto' },
            { es: 'pasado mañana', target: 'dopodomani' }, { es: 'el año que viene', target: 'l\'anno prossimo' }, { es: 'pronto', target: 'presto' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Viajes', icon: '✈️', items: [
            { es: 'billete de avión', target: 'biglietto aereo' }, { es: 'maleta', target: 'valigia' }, { es: 'equipaje', target: 'bagaglio' },
            { es: 'vuelo', target: 'volo' }, { es: 'hotel', target: 'albergo' }, { es: 'pasaporte', target: 'passaporto' },
            { es: 'tren', target: 'treno' }, { es: 'estación', target: 'stazione' }, { es: 'mapa', target: 'mappa' }, { es: 'vacaciones', target: 'vacanze' }
          ]}
        ],
        trampas: [
          { word: 'partire', opts: [['Partir (romper)', false], ['Irse / Salir de viaje', true], ['Repartir', false]], note: 'Para romper se usa "rompere".', mnemonic: 'Parto per Roma = Me voy a Roma.', phrase: 'Parto domani.' },
          { word: 'preoccuparsi', opts: [['Preocuparse', true], ['Ocuparse', false], ['Ocupar', false]], note: 'Significa preocuparse.', mnemonic: 'Non ti preoccupare.', phrase: 'Mi preoccupo per te.' },
          { word: 'fabbrica', opts: [['Fábrica', true], ['Factoría', false], ['Granja', false]], note: 'Fabbrica = fábrica.', mnemonic: 'La fabbrica di auto.', phrase: 'Lavoro in fabbrica.' }
        ],
        verbos: {
          pronombres: [{it:'io', es:'yo'}, {it:'tu', es:'tú'}, {it:'lui/lei', es:'él/ella'}, {it:'noi', es:'nosotros'}, {it:'voi', es:'vosotros'}, {it:'loro', es:'ellos'}],
          lista: [
            { inf: 'sarò (essere)', es: 'seré / estaré', formas: ['sarò','sarai','sarà','saremo','sarete','saranno'], ejemplo: 'Domani sarò a Roma.', ejEs: 'Mañana estaré en Roma.' },
            { inf: 'avrò (avere)', es: 'tendré', formas: ['avrò','avrai','avrà','avremo','avrete','avranno'], ejemplo: 'Avrò tempo.', ejEs: 'Tendré tiempo.' },
            { inf: 'andrò (andare)', es: 'iré', formas: ['andrò','andrai','andrà','andremo','andrete','andranno'], ejemplo: 'Andrò in Italia.', ejEs: 'Iré a Italia.' },
            { inf: 'pensare', es: 'pensar', formas: ['penso','pensi','pensa','pensiamo','pensate','pensano'], ejemplo: 'Penso a te.', ejEs: 'Pienso en ti.' },
            { inf: 'credere', es: 'creer', formas: ['credo','credi','crede','crediamo','credete','credono'], ejemplo: 'Credo in te.', ejEs: 'Creo en ti.' },
            { inf: 'viaggiare', es: 'viajar', formas: ['viaggio','viaggi','viaggia','viaggiamo','viaggiate','viaggiano'], ejemplo: 'Viaggio molto.', ejEs: 'Viajo mucho.' }
          ]
        },
        construccion: [
          { es: 'Mañana voy a Roma', palabras: ['Domani','andrò','a','Roma'], distractores: ['vado','ieri'], traduccion: 'Domani andrò a Roma.' },
          { es: 'Pienso en ti', palabras: ['Penso','a','te'], distractores: ['credo','in'], traduccion: 'Penso a te.' },
          { es: 'Viajo mucho', palabras: ['Viaggio','molto'], distractores: ['viaggi','poco'], traduccion: 'Viaggio molto.' },
          { es: 'Tendré tiempo', palabras: ['Avrò','tempo'], distractores: ['ho','avrai'], traduccion: 'Avrò tempo.' },
          { es: 'Iré a Italia', palabras: ['Andrò','in','Italia'], distractores: ['vado','a'], traduccion: 'Andrò in Italia.' }
        ],
        supervivencia: [
          { categoria: 'En el aeropuerto', icono: '🛫', frases: [
            { es: '¿Dónde está la puerta de embarque?', target: "Dov'è il gate?" }, { es: 'Mi vuelo se retrasa', target: 'Il mio volo è in ritardo' },
            { es: '¿Dónde recojo mi equipaje?', target: 'Dove ritiro il bagaglio?' }, { es: '¿Cuánto cuesta el billete?', target: 'Quanto costa il biglietto?' }
          ]}
        ]
      },
      b2: {
        titulo: 'B2 · Intermedio Alto', desc: 'Opiniones, trabajo y el subjuntivo.',
        categorias: [
          { id: 'subjuntivo', titulo: 'El Subjuntivo', cognados: [
            { es: 'Espero que vengas', target: 'Spero che tu venga' }, { es: 'Creo que es verdad', target: 'Credo che sia vero' },
            { es: 'Dudo que venga', target: 'Dubo che venga' }, { es: 'Es necesario que estudies', target: 'È necessario che tu studi' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Trabajo', icon: '💼', items: [
            { es: 'reunión', target: 'riunione' }, { es: 'jefe', target: 'capo' }, { es: 'sueldo', target: 'stipendio' },
            { es: 'empresa', target: 'azienda' }, { es: 'compañero', target: 'collega' }, { es: 'oficina', target: 'ufficio' },
            { es: 'entrevista', target: 'colloquio' }, { es: 'contrato', target: 'contratto' }, { es: 'proyecto', target: 'progetto' }, { es: 'éxito', target: 'successo' }
          ]}
        ],
        trampas: [
          { word: 'attuale', opts: [['Actual (de ahora)', true], ['Actuado', false], ['Antiguo', false]], note: '"Actual" en español es "reale" en italiano.', mnemonic: 'La situazione attuale = La situación actual.', phrase: 'Il problema attuale.' },
          { word: 'eventuale', opts: [['Eventual (que puede pasar)', true], ['Importante', false], ['Falso', false]], note: 'Se usa para algo que puede suceder.', mnemonic: 'Un problema eventuale.', phrase: 'Un ritardo eventuale.' }
        ],
        verbos: {
          pronombres: [{it:'io', es:'yo'}, {it:'tu', es:'tú'}, {it:'lui/lei', es:'él/ella'}, {it:'noi', es:'nosotros'}, {it:'voi', es:'vosotros'}, {it:'loro', es:'ellos'}],
          lista: [
            { inf: 'che io sia (essere)', es: 'que yo sea', formas: ['sia','sia','sia','siamo','siate','siano'], ejemplo: 'Penso che sia giusto.', ejEs: 'Pienso que es justo.' },
            { inf: 'che io abbia (avere)', es: 'que yo tenga', formas: ['abbia','abbia','abbia','abbiamo','abbiate','abbiano'], ejemplo: 'Spero che tu abbia tempo.', ejEs: 'Espero que tengas tiempo.' },
            { inf: 'sperare', es: 'esperar', formas: ['spero','speri','spera','speriamo','sperate','sperano'], ejemplo: 'Spero di sì.', ejEs: 'Espero que sí.' }
          ]
        },
        construccion: [
          { es: 'Creo que él tiene razón', palabras: ['Credo','che','lui','abbia','ragione'], distractores: ['ha','sia'], traduccion: 'Credo che lui abbia ragione.' },
          { es: 'Espero que tengas tiempo', palabras: ['Spero','che','tu','abbia','tempo'], distractores: ['hai','sia'], traduccion: 'Spero che tu abbia tempo.' },
          { es: 'Dudo que venga', palabras: ['Dubo','che','venga'], distractores: ['viene','sia'], traduccion: 'Dubo che venga.' }
        ],
        supervivencia: [
          { categoria: 'Opiniones', icono: '🗣️', frases: [
            { es: 'En mi opinión...', target: 'Secondo me...' }, { es: 'Estoy de acuerdo', target: 'Sono d\'accordo' },
            { es: 'No estoy de acuerdo', target: 'Non sono d\'accordo' }, { es: '¿Qué piensas?', target: 'Cosa ne pensi?' },
            { es: 'Tienes razón', target: 'Hai ragione' }, { es: 'No estoy seguro', target: 'Non sono sicuro' }
          ]}
        ]
      },
      c1: {
        titulo: 'C1 · Avanzado', desc: 'Fluidez, temas abstractos y expresiones complejas.',
        categorias: [
          { id: 'abstracto', titulo: 'Conceptos Abstractos', cognados: [
            { es: 'sin embargo', target: 'tuttavia' }, { es: 'por lo tanto', target: 'pertanto' },
            { es: 'a pesar de', target: 'nonostante' }, { es: 'en cuanto a', target: 'per quanto riguarda' },
            { es: 'por consiguiente', target: 'di conseguenza' }, { es: 'no obstante', target: 'ciononostante' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Sociedad', icon: '🌍', items: [
            { es: 'desarrollo sostenible', target: 'sviluppo sostenibile' }, { es: 'desigualdad', target: 'disuguaglianza' }, { es: 'medio ambiente', target: 'ambiente' },
            { es: 'globalización', target: 'globalizzazione' }, { es: 'política', target: 'politica' }, { es: 'economía', target: 'economia' },
            { es: 'educación', target: 'educazione' }, { es: 'tecnología', target: 'tecnologia' }, { es: 'cultura', target: 'cultura' }, { es: 'sociedad', target: 'società' }
          ]}
        ],
        trampas: [
          { word: 'eventuale', opts: [['Eventual (que puede pasar)', true], ['Importante', false], ['Falso', false]], note: 'Se usa para algo que puede suceder.', mnemonic: 'Un problema eventuale.', phrase: 'Un ritardo eventuale.' },
          { word: 'assistere', opts: [['Asistir (a un evento)', true], ['Ayudar', false], ['Atender', false]], note: 'Significa estar presente.', mnemonic: 'Assistere a un concerto.', phrase: 'Ho assistito alla lezione.' }
        ],
        verbos: {
          pronombres: [{it:'io', es:'yo'}, {it:'tu', es:'tú'}, {it:'lui/lei', es:'él/ella'}, {it:'noi', es:'nosotros'}, {it:'voi', es:'vosotros'}, {it:'loro', es:'ellos'}],
          lista: [
            { inf: 'avessi (avere)', es: 'si yo tuviera', formas: ['avessi','avessi','avesse','avessimo','aveste','avessero'], ejemplo: 'Se avessi tempo, viaggerei.', ejEs: 'Si tuviera tiempo, viajaría.' },
            { inf: 'fossi (essere)', es: 'si yo fuera', formas: ['fossi','fossi','fosse','fossimo','foste','fossero'], ejemplo: 'Se fossi in te...', ejEs: 'Si yo fuera tú...' },
            { inf: 'ritenere', es: 'considerar', formas: ['ritengo','ritieni','ritiene','riteniamo','ritenete','ritengono'], ejemplo: 'Ritengo che sia importante.', ejEs: 'Considero que es importante.' }
          ]
        },
        construccion: [
          { es: 'Si tuviera tiempo, viajaría', palabras: ['Se','avessi','tempo','viaggerei'], distractores: ['ho','viaggio'], traduccion: 'Se avessi tempo, viaggerei.' },
          { es: 'Considero que es importante', palabras: ['Ritengo','che','sia','importante'], distractores: ['è','fosse'], traduccion: 'Ritengo che sia importante.' }
        ],
        supervivencia: [
          { categoria: 'Debate', icono: '⚖️', frases: [
            { es: 'Por un lado... por otro lado...', target: 'Da un lato... dall\'altro...' }, { es: 'Sin embargo...', target: 'Tuttavia...' },
            { es: 'En resumen...', target: 'In sintesi...' }, { es: 'Estoy a favor de...', target: 'Sono a favore di...' },
            { es: 'Estoy en contra de...', target: 'Sono contro...' }, { es: 'Es un tema complejo', target: 'È un tema complesso' }
          ]}
        ]
      },
      c2: {
        titulo: 'C2 · Maestría', desc: 'Modismos, literatura y nivel nativo.',
        categorias: [
          { id: 'modismos', titulo: 'Modismos (Idioms)', cognados: [
            { es: 'En boca cerrada no entran moscas', target: 'Chi tace acconsente' }, { es: 'Estar en las nubes', target: 'Essere tra le nuvole' },
            { es: 'Ser pan comido', target: 'Essere un gioco da ragazzi' }, { es: 'Meter la pata', target: 'Fare un passo falso' },
            { es: 'Tomar el pelo', target: 'Prendere in giro' }, { es: 'Costar un ojo de la cara', target: 'Costare un occhio della testa' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Literatura', icon: '📚', items: [
            { es: 'trama', target: 'trama' }, { es: 'personaje', target: 'personaggio' }, { es: 'novela', target: 'romanzo' },
            { es: 'poesía', target: 'poesia' }, { es: 'autor', target: 'autore' }, { es: 'capítulo', target: 'capitolo' }
          ]},
          { cat: 'Expresiones', icon: '🎭', items: [
            { es: 'meter la pata', target: 'fare un passo falso' }, { es: 'tomar el pelo', target: 'prendere in giro' },
            { es: 'costar un ojo de la cara', target: 'costare un occhio della testa' }, { es: 'estar en las nubes', target: 'essere tra le nuvole' }
          ]}
        ],
        trampas: [
          { word: 'botte', opts: [['Bota', false], ['Golpe / Barrica', true], ['Botella', false]], note: 'La bota de vestir es "stivale".', mnemonic: 'Dare botte = dar golpes.', phrase: 'Ha preso una botte.' },
          { word: 'sottoscrivere', opts: [['Suscribir', true], ['Escribir debajo', false], ['Firmar', false]], note: 'Significa suscribir o estar de acuerdo.', mnemonic: 'Sottoscrivere un accordo.', phrase: 'Ho sottoscritto il contratto.' }
        ],
        verbos: {
          pronombres: [{it:'io', es:'yo'}, {it:'tu', es:'tú'}, {it:'lui/lei', es:'él/ella'}, {it:'noi', es:'nosotros'}, {it:'voi', es:'vosotros'}, {it:'loro', es:'ellos'}],
          lista: [
            { inf: 'presupporre', es: 'presuponer', formas: ['presuppongo','presupponi','presuppone','presupponiamo','presupponete','presuppongono'], ejemplo: 'Presuppongo che tu lo sappia.', ejEs: 'Presupongo que lo sabes.' }
          ]
        },
        construccion: [
          { es: 'Si yo fuera tú, lo haría', palabras: ['Se','fossi','in','te','lo','farei'], distractores: ['sono','faccio'], traduccion: 'Se fossi in te, lo farei.' },
          { es: 'Presupongo que lo sabes', palabras: ['Presuppongo','che','tu','lo','sappia'], distractores: ['sai','saresti'], traduccion: 'Presuppongo che tu lo sappia.' }
        ],
        supervivencia: [
          { categoria: 'Expresiones', icono: '🎭', frases: [
            { es: 'Meter la pata', target: 'Fare un passo falso' }, { es: 'Tomar el pelo', target: 'Prendere in giro' },
            { es: 'Costar un ojo de la cara', target: 'Costare un occhio della testa' }, { es: 'Estar en las nubes', target: 'Essere tra le nuvole' }
          ]}
        ]
      }
    }
  },
  fr: {
    label: 'francés', voice: 'fr-FR',
    tutor: {
      name: 'Sophie', avatar: '👩‍🎨', status: 'Tutrice native · Paris',
      greeting: "Salut! Je m'appelle Sophie. De quel niveau veux-tu parler aujourd'hui?",
      starters: ['Salut Sophie!', 'Parlons du niveau A1', "Je m'appelle...", 'Je ne comprends pas'],
      systemPrompt: `Eres "Sophie", tutora de francés nativa. Adaptas tu nivel. Corrige con cariño: "Ah, je vois! Petite correction: on dit...". Haz siempre una pregunta final.`
    },
    levels: {
      a1: {
        titulo: 'A1 · Principiante', desc: 'Lo esencial para sobrevivir y presentarte.',
        categorias: [
          { id: 'tion', titulo: '-ción → -tion', cognados: [
            { es: 'información', target: 'information' }, { es: 'nación', target: 'nation' }, { es: 'educación', target: 'éducation' },
            { es: 'atención', target: 'attention' }, { es: 'estación', target: 'station' }, { es: 'función', target: 'fonction' },
            { es: 'acción', target: 'action' }, { es: 'dirección', target: 'direction' }, { es: 'tradición', target: 'tradition' }, { es: 'condición', target: 'condition' }
          ]},
          { id: 'te', titulo: '-dad → -té', cognados: [
            { es: 'ciudad', target: 'cité' }, { es: 'universidad', target: 'université' }, { es: 'libertad', target: 'liberté' },
            { es: 'curiosidad', target: 'curiosité' }, { es: 'realidad', target: 'réalité' }, { es: 'sociedad', target: 'société' },
            { es: 'calidad', target: 'qualité' }, { es: 'dificultad', target: 'difficulté' }, { es: 'cantidad', target: 'quantité' }, { es: 'identidad', target: 'identité' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Números', icon: '🔢', items: [
            { es: 'uno', target: 'un' }, { es: 'dos', target: 'deux' }, { es: 'tres', target: 'trois' }, { es: 'cuatro', target: 'quatre' },
            { es: 'cinco', target: 'cinq' }, { es: 'seis', target: 'six' }, { es: 'siete', target: 'sept' }, { es: 'ocho', target: 'huit' },
            { es: 'nueve', target: 'neuf' }, { es: 'diez', target: 'dix' }
          ]},
          { cat: 'Días', icon: '📅', items: [
            { es: 'lunes', target: 'lundi' }, { es: 'martes', target: 'mardi' }, { es: 'miércoles', target: 'mercredi' },
            { es: 'jueves', target: 'jeudi' }, { es: 'viernes', target: 'vendredi' }, { es: 'sábado', target: 'samedi' }, { es: 'domingo', target: 'dimanche' }
          ]},
          { cat: 'Familia', icon: '👨‍👩‍👧', items: [
            { es: 'madre', target: 'mère' }, { es: 'padre', target: 'père' }, { es: 'hermano', target: 'frère' },
            { es: 'hermana', target: 'sœur' }, { es: 'hijo', target: 'fils' }, { es: 'hija', target: 'fille' }
          ]}
        ],
        trampas: [
          { word: 'large', opts: [['Largo', false], ['Ancho', true], ['Grande', false]], note: '"Largo" es "long".', mnemonic: 'Una calle ancha.', phrase: 'Cette rue est large.' },
          { word: 'rester', opts: [['Restar', false], ['Quedarse', true], ['Descansar', false]], note: '"Restar" es "soustraire".', mnemonic: 'Quedarse en casa.', phrase: 'Je reste ici.' },
          { word: 'attendre', opts: [['Atender', false], ['Esperar', true], ['Asistir', false]], note: 'Atender es "s\'occuper de".', mnemonic: 'Esperar el bus.', phrase: "J'attends le train." },
          { word: 'constipé', opts: [['Resfriado', false], ['Estreñido', true], ['Cansado', false]], note: 'Resfriado es "enrhumé".', mnemonic: 'Como en inglés.', phrase: 'Il est constipé.' },
          { word: 'éventuellement', opts: [['Eventualmente', false], ['Posiblemente', true], ['Finalmente', false]], note: 'Significa si llega a ocurrir.', mnemonic: 'Evento futuro.', phrase: 'Je viendrai éventuellement.' }
        ],
        verbos: {
          pronombres: [{it:'je', es:'yo'}, {it:'tu', es:'tú'}, {it:'il/elle', es:'él/ella'}, {it:'nous', es:'nosotros'}, {it:'vous', es:'vosotros/usted'}, {it:'ils/elles', es:'ellos/ellas'}],
          lista: [
            { inf: 'être', es: 'ser / estar', formas: ['suis','es','est','sommes','êtes','sont'], ejemplo: 'Je suis de Panama.', ejEs: 'Soy de Panamá.' },
            { inf: 'avoir', es: 'tener', formas: ['ai','as','a','avons','avez','ont'], ejemplo: "J'ai un chat.", ejEs: 'Tengo un gato.' },
            { inf: 'aller', es: 'ir', formas: ['vais','vas','va','allons','allez','vont'], ejemplo: 'Je vais à Paris.', ejEs: 'Voy a París.' },
            { inf: 'faire', es: 'hacer', formas: ['fais','fais','fait','faisons','faites','font'], ejemplo: 'Je fais du sport.', ejEs: 'Hago deporte.' },
            { inf: 'vouloir', es: 'querer', formas: ['veux','veux','veut','voulons','voulez','veulent'], ejemplo: 'Je veux un café.', ejEs: 'Quiero un café.' },
            { inf: 'pouvoir', es: 'poder', formas: ['peux','peux','peut','pouvons','pouvez','peuvent'], ejemplo: "Je peux t'aider?", ejEs: '¿Puedo ayudarte?' }
          ]
        },
        construccion: [
          { es: 'Yo soy de Panamá', palabras: ['Je','suis','de','Panama'], distractores: ['es','est','à'], traduccion: 'Je suis de Panama.' },
          { es: 'Tú eres francés', palabras: ['Tu','es','français'], distractores: ['suis','est','Paris'], traduccion: 'Tu es français.' },
          { es: 'Él tiene un perro', palabras: ['Il','a','un','chien'], distractores: ['ai','as','chat'], traduccion: 'Il a un chien.' },
          { es: 'Nosotros vamos a París', palabras: ['Nous','allons','à','Paris'], distractores: ['vais','vas','Lyon'], traduccion: 'Nous allons à Paris.' },
          { es: 'Quiero un café', palabras: ['Je','veux','un','café'], distractores: ['veut','peux','thé'], traduccion: 'Je veux un café.' }
        ],
        supervivencia: [
          { categoria: 'Saludos', icono: '👋', frases: [
            { es: 'Buenos días', target: 'Bonjour' }, { es: 'Buenas tardes/noches', target: 'Bonsoir' }, { es: 'Hola / Chau', target: 'Salut' },
            { es: 'Adiós', target: 'Au revoir' }, { es: 'Por favor', target: "S'il vous plaît" }, { es: 'Gracias', target: 'Merci' },
            { es: 'De nada', target: 'De rien' }, { es: 'Disculpe', target: 'Excusez-moi' }
          ]},
          { categoria: 'Básicos', icono: '💬', frases: [
            { es: 'Sí / No', target: 'Oui / Non' }, { es: 'No entiendo', target: 'Je ne comprends pas' }, { es: '¿Habla español?', target: 'Parlez-vous espagnol?' },
            { es: '¿Cómo se dice...?', target: 'Comment dit-on...?' }, { es: '¿Cuánto cuesta?', target: 'Combien ça coûte?' }, { es: '¿Dónde están los baños?', target: 'Où sont les toilettes?' }
          ]},
          { categoria: 'Restaurante', icono: '🍽️', frases: [
            { es: 'Una mesa para dos', target: 'Une table pour deux' }, { es: 'El menú, por favor', target: "Le menu, s'il vous plaît" }, { es: 'Quisiera...', target: 'Je voudrais...' },
            { es: 'La cuenta, por favor', target: "L'addition, s'il vous plaît" }, { es: 'Sin gluten', target: 'Sans gluten' }, { es: '¡Está delicioso!', target: "C'est délicieux!" }
          ]},
          { categoria: 'Direcciones', icono: '🧭', frases: [
            { es: '¿Dónde está la estación?', target: 'Où est la gare?' }, { es: 'A la derecha', target: 'À droite' }, { es: 'A la izquierda', target: 'À gauche' },
            { es: 'Todo recto', target: 'Tout droit' }, { es: '¿Está lejos?', target: "C'est loin?" }, { es: 'Estoy perdido', target: 'Je suis perdu' }
          ]},
          { categoria: 'Emergencias', icono: '🚨', frases: [
            { es: '¡Socorro!', target: 'Au secours!' }, { es: 'Llamen a la policía', target: 'Appelez la police' }, { es: 'No me siento bien', target: 'Je ne me sens pas bien' },
            { es: 'Necesito un médico', target: "J'ai besoin d'un médecin" }, { es: 'He perdido mi pasaporte', target: "J'ai perdu mon passeport" }, { es: 'Es una emergencia', target: "C'est une urgence" }
          ]}
        ]
      },
      a2: {
        titulo: 'A2 · Básico', desc: 'Para conversar sobre el pasado y planes futuros.',
        categorias: [
          { id: 'eux', titulo: '-oso → -eux', cognados: [
            { es: 'famoso', target: 'fameux' }, { es: 'curioso', target: 'curieux' }, { es: 'precioso', target: 'précieux' },
            { es: 'peligroso', target: 'dangereux' }, { es: 'numeroso', target: 'nombreux' }, { es: 'misterioso', target: 'mystérieux' },
            { es: 'ambicioso', target: 'ambitieux' }, { es: 'generoso', target: 'généreux' }, { es: 'nervioso', target: 'nerveux' }, { es: 'valiente', target: 'vaillant' }
          ]},
          { id: 'aire', titulo: '-ario → -aire', cognados: [
            { es: 'diccionario', target: 'dictionnaire' }, { es: 'necesario', target: 'nécessaire' }, { es: 'calendario', target: 'calendrier' },
            { es: 'salario', target: 'salaire' }, { es: 'vocabulario', target: 'vocabulaire' }, { es: 'aniversario', target: 'anniversaire' },
            { es: 'adversario', target: 'adversaire' }, { es: 'escenario', target: 'scénario' }, { es: 'millonario', target: 'millionnaire' }, { es: 'imaginario', target: 'imaginaire' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Comida', icon: '🥐', items: [
            { es: 'pan', target: 'pain' }, { es: 'queso', target: 'fromage' }, { es: 'agua', target: 'eau' }, { es: 'vino', target: 'vin' },
            { es: 'carne', target: 'viande' }, { es: 'pescado', target: 'poisson' }, { es: 'manzana', target: 'pomme' }, { es: 'naranja', target: 'orange' },
            { es: 'leche', target: 'lait' }, { es: 'huevo', target: 'œuf' }
          ]},
          { cat: 'Ropa', icon: '👕', items: [
            { es: 'camisa', target: 'chemise' }, { es: 'pantalón', target: 'pantalon' }, { es: 'zapatos', target: 'chaussures' }, { es: 'sombrero', target: 'chapeau' },
            { es: 'vestido', target: 'robe' }, { es: 'falda', target: 'jupe' }, { es: 'abrigo', target: 'manteau' }, { es: 'calcetines', target: 'chaussettes' }
          ]}
        ],
        trampas: [
          { word: 'constipé', opts: [['Resfriado', false], ['Estreñido', true], ['Cansado', false]], note: '"Resfriado" es "enrhumé".', mnemonic: 'Como en inglés.', phrase: 'Il est constipé.' },
          { word: 'réaliser', opts: [['Realizar', false], ['Darse cuenta', true], ['Hacer realidad', false]], note: 'Significa darse cuenta.', mnemonic: "J'ai réalisé mon erreur.", phrase: "J'ai réalisé mon erreur." },
          { word: 'ignorer', opts: [['Ignorar', false], ['No saber', true], ['Despreciar', false]], note: 'Significa no saber algo.', mnemonic: "J'ignore = no sé.", phrase: "J'ignore la réponse." },
          { word: 'chair', opts: [['Silla', false], ['Carne', true], ['Piel', false]], note: 'Silla es "chaise".', mnemonic: 'Chair = carne.', phrase: "J'aime la chair de poulet." },
          { word: 'pièce', opts: [['Pieza', false], ['Habitación/moneda', true], ['Pedazo', false]], note: 'Habitación o moneda.', mnemonic: 'Une pièce = habitación.', phrase: 'Une pièce de deux euros.' }
        ],
        verbos: {
          pronombres: [{it:'je', es:'yo'}, {it:'tu', es:'tú'}, {it:'il/elle', es:'él/ella'}, {it:'nous', es:'nosotros'}, {it:'vous', es:'vosotros/usted'}, {it:'ils/elles', es:'ellos/ellas'}],
          lista: [
            { inf: 'ai mangé (passé)', es: 'he comido', formas: ['ai mangé','as mangé','a mangé','avons mangé','avez mangé','ont mangé'], ejemplo: "J'ai mangé la pizza.", ejEs: 'He comido pizza.' },
            { inf: 'suis allé (passé)', es: 'he ido', formas: ['suis allé','es allé','est allé','sommes allés','êtes allés','sont allés'], ejemplo: 'Je suis allé à Paris.', ejEs: 'He ido a París.' },
            { inf: 'parlais (imparfait)', es: 'hablaba', formas: ['parlais','parlais','parlait','parlions','parliez','parlaient'], ejemplo: 'Je parlais avec lui.', ejEs: 'Hablaba con él.' },
            { inf: 'mangeais (imparfait)', es: 'comía', formas: ['mangeais','mangeais','mangeait','mangions','mangiez','mangeaient'], ejemplo: 'Je mangeais des pâtes.', ejEs: 'Comía pasta.' }
          ]
        },
        construccion: [
          { es: 'He comido pizza', palabras: ['J\'ai','mangé','la','pizza'], distractores: ['mange','hier'], traduccion: 'J\'ai mangé la pizza.' },
          { es: 'He ido a París', palabras: ['Je','suis','allé','à','Paris'], distractores: ['vais','hier'], traduccion: 'Je suis allé à Paris.' },
          { es: 'Hablaba con él', palabras: ['Je','parlais','avec','lui'], distractores: ['parle','avec elle'], traduccion: 'Je parlais avec lui.' },
          { es: 'Comía pasta', palabras: ['Je','mangeais','des','pâtes'], distractores: ['mange','pizza'], traduccion: 'Je mangeais des pâtes.' }
        ],
        supervivencia: [
          { categoria: 'Restaurante', icono: '🍽️', frases: [
            { es: 'La cuenta, por favor', target: "L'addition, s'il vous plaît" }, { es: 'Una mesa para dos', target: 'Une table pour deux' },
            { es: 'El menú, por favor', target: "Le menu, s'il vous plaît" }, { es: 'Quisiera...', target: 'Je voudrais...' },
            { es: '¡Está delicioso!', target: "C'est délicieux!" }, { es: 'Sin gluten', target: 'Sans gluten' }
          ]},
          { categoria: 'Direcciones', icono: '🧭', frases: [
            { es: 'A la derecha', target: 'À droite' }, { es: 'A la izquierda', target: 'À gauche' }, { es: 'Todo recto', target: 'Tout droit' },
            { es: '¿Está lejos?', target: "C'est loin?" }, { es: 'Estoy perdido', target: 'Je suis perdu' }, { es: '¿Dónde está el hotel?', target: "Où est l'hôtel?" }
          ]}
        ]
      },
      b1: {
        titulo: 'B1 · Intermedio', desc: 'Planes futuros, condicionales y viajes.',
        categorias: [
          { id: 'futuro', titulo: 'El Futuro', cognados: [
            { es: 'mañana', target: 'demain' }, { es: 'la próxima semana', target: 'la semaine prochaine' }, { es: 'pasado mañana', target: 'après-demain' },
            { es: 'el año que viene', target: "l'année prochaine" }, { es: 'pronto', target: 'bientôt' }, { es: 'si llueve, me quedo', target: "s'il pleut, je reste" }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Viajes', icon: '✈️', items: [
            { es: 'billete de avión', target: 'billet d\'avion' }, { es: 'maleta', target: 'valise' }, { es: 'equipaje', target: 'bagage' },
            { es: 'vuelo', target: 'vol' }, { es: 'hotel', target: 'hôtel' }, { es: 'pasaporte', target: 'passeport' },
            { es: 'tren', target: 'train' }, { es: 'estación', target: 'gare' }, { es: 'mapa', target: 'carte' }, { es: 'vacaciones', target: 'vacances' }
          ]}
        ],
        trampas: [
          { word: 'partir', opts: [['Partir (romper)', false], ['Irse / Salir de viaje', true], ['Repartir', false]], note: 'Para romper se usa "casser".', mnemonic: 'Je pars à Paris = Me voy a París.', phrase: 'Je pars demain.' },
          { word: 'préoccuper', opts: [['Preocuparse', true], ['Ocuparse', false], ['Ocupar', false]], note: 'Significa preocuparse.', mnemonic: 'Ne te préoccupe pas.', phrase: 'Je me préoccupe pour toi.' },
          { word: 'usine', opts: [['Fábrica', true], ['Factoría', false], ['Granja', false]], note: 'Usine = fábrica.', mnemonic: "L'usine de voitures.", phrase: 'Je travaille à l\'usine.' }
        ],
        verbos: {
          pronombres: [{it:'je', es:'yo'}, {it:'tu', es:'tú'}, {it:'il/elle', es:'él/ella'}, {it:'nous', es:'nosotros'}, {it:'vous', es:'vosotros/usted'}, {it:'ils/elles', es:'ellos/ellas'}],
          lista: [
            { inf: 'serai (être)', es: 'seré / estaré', formas: ['serai','seras','sera','serons','serez','seront'], ejemplo: 'Demain je serai à Paris.', ejEs: 'Mañana estaré en París.' },
            { inf: 'aurai (avoir)', es: 'tendré', formas: ['aurai','auras','aura','aurons','aurez','auront'], ejemplo: 'J\'aurai du temps.', ejEs: 'Tendré tiempo.' },
            { inf: 'irai (aller)', es: 'iré', formas: ['irai','iras','ira','irons','irez','iront'], ejemplo: 'J\'irai en Italie.', ejEs: 'Iré a Italia.' },
            { inf: 'penser', es: 'pensar', formas: ['pense','penses','pense','pensons','pensez','pensent'], ejemplo: 'Je pense à toi.', ejEs: 'Pienso en ti.' },
            { inf: 'croire', es: 'creer', formas: ['crois','crois','croit','croyons','croyez','croient'], ejemplo: 'Je crois en toi.', ejEs: 'Creo en ti.' }
          ]
        },
        construccion: [
          { es: 'Mañana voy a París', palabras: ['Demain','j\'irai','à','Paris'], distractores: ['vais','hier'], traduccion: 'Demain j\'irai à Paris.' },
          { es: 'Pienso en ti', palabras: ['Je','pense','à','toi'], distractores: ['crois','en'], traduccion: 'Je pense à toi.' },
          { es: 'Tendré tiempo', palabras: ['J\'aurai','du','temps'], distractores: ['ai','aura'], traduccion: 'J\'aurai du temps.' }
        ],
        supervivencia: [
          { categoria: 'En el aeropuerto', icono: '🛫', frases: [
            { es: '¿Dónde está la puerta de embarque?', target: "Où est la porte d'embarquement?" }, { es: 'Mi vuelo se retrasa', target: 'Mon vol est en retard' },
            { es: '¿Dónde recojo mi equipaje?', target: 'Où récupère-t-on les bagages?' }, { es: '¿Cuánto cuesta el billete?', target: 'Combien coûte le billet?' }
          ]}
        ]
      },
      b2: {
        titulo: 'B2 · Intermedio Alto', desc: 'Opiniones, trabajo y el subjuntivo.',
        categorias: [
          { id: 'subjuntivo', titulo: 'El Subjuntivo', cognados: [
            { es: 'Espero que vengas', target: 'J\'espère que tu viennes' }, { es: 'Creo que es verdad', target: 'Je crois que c\'est vrai' },
            { es: 'Dudo que venga', target: 'Je doute qu\'il vienne' }, { es: 'Es necesario que estudies', target: 'Il est nécessaire que tu étudies' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Trabajo', icon: '💼', items: [
            { es: 'reunión', target: 'réunion' }, { es: 'jefe', target: 'patron' }, { es: 'sueldo', target: 'salaire' },
            { es: 'empresa', target: 'entreprise' }, { es: 'compañero', target: 'collègue' }, { es: 'oficina', target: 'bureau' },
            { es: 'entrevista', target: 'entretien' }, { es: 'contrato', target: 'contrat' }, { es: 'proyecto', target: 'projet' }, { es: 'éxito', target: 'succès' }
          ]}
        ],
        trampas: [
          { word: 'actuel', opts: [['Actual (de ahora)', true], ['Actuado', false], ['Antiguo', false]], note: '"Actual" en español es "réel" en francés.', mnemonic: 'La situation actuelle.', phrase: 'Le problème actuel.' },
          { word: 'éventuel', opts: [['Eventual (que puede pasar)', true], ['Importante', false], ['Falso', false]], note: 'Se usa para algo que puede suceder.', mnemonic: 'Un problème éventuel.', phrase: 'Un retard éventuel.' }
        ],
        verbos: {
          pronombres: [{it:'je', es:'yo'}, {it:'tu', es:'tú'}, {it:'il/elle', es:'él/ella'}, {it:'nous', es:'nosotros'}, {it:'vous', es:'vosotros/usted'}, {it:'ils/elles', es:'ellos/ellas'}],
          lista: [
            { inf: 'que je sois (être)', es: 'que yo sea', formas: ['sois','sois','soit','soyons','soyez','soient'], ejemplo: 'Je pense que ce soit juste.', ejEs: 'Pienso que es justo.' },
            { inf: 'que j\'aie (avoir)', es: 'que yo tenga', formas: ['aie','aies','ait','ayons','ayez','aient'], ejemplo: 'J\'espère que tu aies le temps.', ejEs: 'Espero que tengas tiempo.' },
            { inf: 'espérer', es: 'esperar', formas: ['espère','espères','espère','espérons','espérez','espèrent'], ejemplo: 'J\'espère que oui.', ejEs: 'Espero que sí.' }
          ]
        },
        construccion: [
          { es: 'Creo que él tiene razón', palabras: ['Je','crois','qu\'il','ait','raison'], distractores: ['a','soit'], traduccion: 'Je crois qu\'il ait raison.' },
          { es: 'Espero que tengas tiempo', palabras: ['J\'espère','que','tu','aies','le','temps'], distractores: ['as','sois'], traduccion: 'J\'espère que tu aies le temps.' }
        ],
        supervivencia: [
          { categoria: 'Opiniones', icono: '🗣️', frases: [
            { es: 'En mi opinión...', target: 'À mon avis...' }, { es: 'Estoy de acuerdo', target: 'Je suis d\'accord' },
            { es: 'No estoy de acuerdo', target: 'Je ne suis pas d\'accord' }, { es: '¿Qué piensas?', target: 'Qu\'est-ce que tu penses?' },
            { es: 'Tienes razón', target: 'Tu as raison' }, { es: 'No estoy seguro', target: 'Je ne suis pas sûr' }
          ]}
        ]
      },
      c1: {
        titulo: 'C1 · Avanzado', desc: 'Fluidez, temas abstractos y expresiones complejas.',
        categorias: [
          { id: 'abstracto', titulo: 'Conceptos Abstractos', cognados: [
            { es: 'sin embargo', target: 'cependant' }, { es: 'por lo tanto', target: 'par conséquent' },
            { es: 'a pesar de', target: 'malgré' }, { es: 'en cuanto a', target: 'en ce qui concerne' },
            { es: 'por consiguiente', target: 'par suite' }, { es: 'no obstante', target: 'néanmoins' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Sociedad', icon: '🌍', items: [
            { es: 'desarrollo sostenible', target: 'développement durable' }, { es: 'desigualdad', target: 'inégalité' }, { es: 'medio ambiente', target: 'environnement' },
            { es: 'globalización', target: 'mondialisation' }, { es: 'política', target: 'politique' }, { es: 'economía', target: 'économie' },
            { es: 'educación', target: 'éducation' }, { es: 'tecnología', target: 'technologie' }, { es: 'cultura', target: 'culture' }, { es: 'sociedad', target: 'société' }
          ]}
        ],
        trampas: [
          { word: 'éventuel', opts: [['Eventual (que puede pasar)', true], ['Importante', false], ['Falso', false]], note: 'Se usa para algo que puede suceder.', mnemonic: 'Un problème éventuel.', phrase: 'Un retard éventuel.' },
          { word: 'assister', opts: [['Asistir (a un evento)', true], ['Ayudar', false], ['Atender', false]], note: 'Significa estar presente.', mnemonic: 'Assister à un concert.', phrase: 'J\'ai assisté au cours.' }
        ],
        verbos: {
          pronombres: [{it:'je', es:'yo'}, {it:'tu', es:'tú'}, {it:'il/elle', es:'él/ella'}, {it:'nous', es:'nosotros'}, {it:'vous', es:'vosotros/usted'}, {it:'ils/elles', es:'ellos/ellas'}],
          lista: [
            { inf: 'que j\'aie (avoir)', es: 'que yo tenga', formas: ['aie','aies','ait','ayons','ayez','aient'], ejemplo: 'Il faut que j\'aie du temps.', ejEs: 'Hace falta que tenga tiempo.' },
            { inf: 'considérer', es: 'considerar', formas: ['considère','considères','considère','considérons','considérez','considèrent'], ejemplo: 'Je considère que c\'est important.', ejEs: 'Considero que es importante.' }
          ]
        },
        construccion: [
          { es: 'Si tuviera tiempo, viajaría', palabras: ['Si','j\'avais','le','temps','je','voyagerais'], distractores: ['ai','voyage'], traduccion: 'Si j\'avais le temps, je voyagerais.' },
          { es: 'Considero que es importante', palabras: ['Je','considère','que','c\'est','important'], distractores: ['est','soit'], traduccion: 'Je considère que c\'est important.' }
        ],
        supervivencia: [
          { categoria: 'Debate', icono: '⚖️', frases: [
            { es: 'Por un lado... por otro lado...', target: 'D\'un côté... de l\'autre...' }, { es: 'Sin embargo...', target: 'Cependant...' },
            { es: 'En resumen...', target: 'En résumé...' }, { es: 'Estoy a favor de...', target: 'Je suis pour...' },
            { es: 'Estoy en contra de...', target: 'Je suis contre...' }, { es: 'Es un tema complejo', target: 'C\'est un sujet complexe' }
          ]}
        ]
      },
      c2: {
        titulo: 'C2 · Maestría', desc: 'Modismos, literatura y nivel nativo.',
        categorias: [
          { id: 'modismos', titulo: 'Modismos (Idioms)', cognados: [
            { es: 'Ser pan comido', target: 'C\'est du gâteau' }, { es: 'Estar en las nubes', target: 'Être dans la lune' },
            { es: 'Meter la pata', target: 'Faire une gaffe' }, { es: 'Tomar el pelo', target: 'Se moquer de quelqu\'un' },
            { es: 'Costar un ojo de la cara', target: 'Coûter les yeux de la tête' }, { es: 'En boca cerrada no entran moscas', target: 'La parole est d\'argent, le silence est d\'or' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Literatura', icon: '📚', items: [
            { es: 'trama', target: 'intrigue' }, { es: 'personaje', target: 'personnage' }, { es: 'novela', target: 'roman' },
            { es: 'poesía', target: 'poésie' }, { es: 'autor', target: 'auteur' }, { es: 'capítulo', target: 'chapitre' }
          ]},
          { cat: 'Expresiones', icon: '🎭', items: [
            { es: 'meter la pata', target: 'faire une gaffe' }, { es: 'tomar el pelo', target: 'se moquer de quelqu\'un' },
            { es: 'costar un ojo de la cara', target: 'coûter les yeux de la tête' }, { es: 'estar en las nubes', target: 'être dans la lune' }
          ]}
        ],
        trampas: [
          { word: 'botte', opts: [['Bota', false], ['Golpe / Barrica', true], ['Botella', false]], note: 'La bota de vestir es "botte".', mnemonic: 'Dare botte = dar golpes.', phrase: 'Il a pris une botte.' },
          { word: 'souscrire', opts: [['Suscribir', true], ['Escribir debajo', false], ['Firmar', false]], note: 'Significa suscribir o estar de acuerdo.', mnemonic: 'Souscrire un accord.', phrase: 'J\'ai souscrit au contrat.' }
        ],
        verbos: {
          pronombres: [{it:'je', es:'yo'}, {it:'tu', es:'tú'}, {it:'il/elle', es:'él/ella'}, {it:'nous', es:'nosotros'}, {it:'vous', es:'vosotros/usted'}, {it:'ils/elles', es:'ellos/ellas'}],
          lista: [
            { inf: 'que je fusse (être)', es: 'si yo fuera', formas: ['fusse','fusses','fût','fussions','fussiez','fussent'], ejemplo: 'Si je fusse toi...', ejEs: 'Si yo fuera tú...' }
          ]
        },
        construccion: [
          { es: 'Si yo fuera tú, lo haría', palabras: ['Si','j\'étais','toi','je','le','ferais'], distractores: ['suis','fais'], traduccion: 'Si j\'étais toi, je le ferais.' }
        ],
        supervivencia: [
          { categoria: 'Expresiones', icono: '🎭', frases: [
            { es: 'Meter la pata', target: 'Faire une gaffe' }, { es: 'Tomar el pelo', target: 'Se moquer de quelqu\'un' },
            { es: 'Costar un ojo de la cara', target: 'Coûter les yeux de la tête' }, { es: 'Estar en las nubes', target: 'Être dans la lune' }
          ]}
        ]
      }
    }
  }
};
