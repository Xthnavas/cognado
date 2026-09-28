window.PONTE_DATA = {
  it: {
    label: 'italiano',
    voice: 'it-IT',
    tutor: {
      name: 'Marco', avatar: '👨‍🍳', status: 'Tutor nativo · Roma',
      greeting: "Ciao! Sono Marco, il tuo tutor di italiano. Piacere di conoscerti! Come ti chiami?",
      starters: ['Ciao Marco!', 'Mi chiamo...', 'Come stai?', 'Non capisco'],
      systemPrompt: `Eres "Marco", un tutor de italiano nativo de Roma, amable, paciente y con sentido del humor. Estás ayudando a un hispanohablante principiante a practicar italiano conversacional.

REGLAS ESTRICTAS:
1. Responde SIEMPRE en italiano. Solo usas español muy brevemente para correcciones.
2. Usa vocabulario simple, frases cortas (nivel A1-A2).
3. Si el estudiante comete un error, responde primero de forma natural y luego corrige brevemente. Formato: "Ah, capisco! [respuesta natural]. Piccola correzione: si dice '[correcto]', non '[incorrecto]'. [continuación]".
4. Si el estudiante escribe en español, anímalo suavemente a intentar en italiano: "Prova a dirlo in italiano! :)"
5. Haz SIEMPRE una pregunta al final para mantener la conversación viva.
6. NUNCA respondas con más de 3 frases cortas. Sé conciso.
7. Si no entiendes algo, pide que repita: "Come? Puoi ripetere?"
8. Adapta tu vocabulario al nivel del estudiante.

CONTEXTO: El estudiante quiere practicar conversación básica para viajar a Italia. Empieza presentándote brevemente y preguntándole su nombre.`
    },
    categorias: [
      { id: 'zione', titulo: '-ción → -zione', cognados: [
        { es: 'información', target: 'informazione' }, { es: 'nación', target: 'nazione' },
        { es: 'educación', target: 'educazione' }, { es: 'atención', target: 'attenzione' },
        { es: 'estación', target: 'stazione' }, { es: 'función', target: 'funzione' },
        { es: 'acción', target: 'azione' }, { es: 'dirección', target: 'direzione' },
        { es: 'tradición', target: 'tradizione' }, { es: 'condición', target: 'condizione' },
        { es: 'posición', target: 'posizione' }, { es: 'intención', target: 'intenzione' },
        { es: 'celebración', target: 'celebrazione' }, { es: 'aplicación', target: 'applicazione' },
        { es: 'comunicación', target: 'comunicazione' }
      ]},
      { id: 'ta', titulo: '-dad → -tà', cognados: [
        { es: 'ciudad', target: 'città' }, { es: 'universidad', target: 'università' },
        { es: 'libertad', target: 'libertà' }, { es: 'curiosidad', target: 'curiosità' },
        { es: 'felicidad', target: 'felicità' }, { es: 'realidad', target: 'realtà' },
        { es: 'actividad', target: 'attività' }, { es: 'personalidad', target: 'personalità' },
        { es: 'sociedad', target: 'società' }, { es: 'calidad', target: 'qualità' },
        { es: 'dificultad', target: 'difficoltà' }, { es: 'cantidad', target: 'quantità' },
        { es: 'electricidad', target: 'elettricità' }, { es: 'identidad', target: 'identità' },
        { es: 'capacidad', target: 'capacità' }
      ]},
      { id: 'bile', titulo: '-ble → -bile', cognados: [
        { es: 'posible', target: 'possibile' }, { es: 'terrible', target: 'terribile' },
        { es: 'responsable', target: 'responsabile' }, { es: 'increíble', target: 'incredibile' },
        { es: 'probable', target: 'probabile' }, { es: 'imposible', target: 'impossibile' },
        { es: 'horrible', target: 'orribile' }, { es: 'visible', target: 'visibile' },
        { es: 'flexible', target: 'flessibile' }, { es: 'amable', target: 'amabile' },
        { es: 'notable', target: 'notevole' }, { es: 'estable', target: 'stabile' }
      ]},
      { id: 'ario', titulo: '-ario → -ario', cognados: [
        { es: 'diccionario', target: 'dizionario' }, { es: 'necesario', target: 'necessario' },
        { es: 'calendario', target: 'calendario' }, { es: 'salario', target: 'salario' },
        { es: 'vocabulario', target: 'vocabolario' }, { es: 'aniversario', target: 'anniversario' },
        { es: 'adversario', target: 'avversario' }, { es: 'escenario', target: 'scenario' },
        { es: 'funcionario', target: 'funzionario' }, { es: 'millonario', target: 'milionario' },
        { es: 'revolucionario', target: 'rivoluzionario' }, { es: 'imaginario', target: 'immaginario' }
      ]},
      { id: 'oso', titulo: '-oso → -oso', cognados: [
        { es: 'famoso', target: 'famoso' }, { es: 'curioso', target: 'curioso' },
        { es: 'precioso', target: 'prezioso' }, { es: 'delicioso', target: 'delizioso' },
        { es: 'peligroso', target: 'pericoloso' }, { es: 'numeroso', target: 'numeroso' },
        { es: 'religioso', target: 'religioso' }, { es: 'misterioso', target: 'misterioso' },
        { es: 'ambicioso', target: 'ambizioso' }, { es: 'generoso', target: 'generoso' },
        { es: 'nervioso', target: 'nervoso' }, { es: 'valiente', target: 'valente' }
      ]},
      { id: 'ale', titulo: '-al → -ale', cognados: [
        { es: 'animal', target: 'animale' }, { es: 'normal', target: 'normale' },
        { es: 'natural', target: 'naturale' }, { es: 'final', target: 'finale' },
        { es: 'personal', target: 'personale' }, { es: 'general', target: 'generale' },
        { es: 'original', target: 'originale' }, { es: 'cultural', target: 'culturale' },
        { es: 'social', target: 'sociale' }, { es: 'especial', target: 'speciale' },
        { es: 'comercial', target: 'commerciale' }, { es: 'internacional', target: 'internazionale' }
      ]},
      { id: 'ista', titulo: '-ista → -ista', cognados: [
        { es: 'artista', target: 'artista' }, { es: 'turista', target: 'turista' },
        { es: 'pianista', target: 'pianista' }, { es: 'dentista', target: 'dentista' },
        { es: 'optimista', target: 'ottimista' }, { es: 'realista', target: 'realista' },
        { es: 'socialista', target: 'socialista' }, { es: 'capitalista', target: 'capitalista' },
        { es: 'periodista', target: 'giornalista' }, { es: 'futbolista', target: 'calciatore' }
      ]},
      { id: 'ente', titulo: '-ente → -ente', cognados: [
        { es: 'presidente', target: 'presidente' }, { es: 'cliente', target: 'cliente' },
        { es: 'diferente', target: 'differente' }, { es: 'inteligente', target: 'intelligente' },
        { es: 'paciente', target: 'paziente' }, { es: 'ingrediente', target: 'ingrediente' },
        { es: 'ambiente', target: 'ambiente' }, { es: 'presente', target: 'presente' },
        { es: 'accidente', target: 'incidente' }, { es: 'ausente', target: 'assente' }
      ]},
      { id: 'ico', titulo: '-ico → -ico', cognados: [
        { es: 'político', target: 'politico' }, { es: 'económico', target: 'economico' },
        { es: 'música', target: 'musica' }, { es: 'público', target: 'pubblico' },
        { es: 'técnico', target: 'tecnico' }, { es: 'práctico', target: 'pratico' },
        { es: 'típico', target: 'tipico' }, { es: 'magnífico', target: 'magnifico' },
        { es: 'auténtico', target: 'autentico' }, { es: 'histórico', target: 'storico' },
        { es: 'básico', target: 'basilare' }
      ]}
    ],
    trampas: [
      { word: 'burro', opts: [['Un animal, como en español', false], ['Mantequilla', true], ['Un tonto', false]], note: 'El animal se dice "asino".', mnemonic: 'Imagina un burro untado de mantequilla.', phrase: 'Mi piace il pane con il burro.' },
      { word: 'salire', opts: [['Salir de un lugar', false], ['Subir', true], ['Saltar', false]], note: 'Para "salir" se usa "uscire".', mnemonic: 'Salire su un albero = subir a un árbol.', phrase: 'Devo salire al secondo piano.' },
      { word: 'guardare', opts: [['Guardar algo', false], ['Mirar', true], ['Cuidar', false]], note: 'Para "guardar" se usa "conservare".', mnemonic: 'Guardare la TV = mirar la tele.', phrase: 'Mi piace guardare i film italiani.' },
      { word: 'stanza', opts: [['Una estancia larga', false], ['Habitación', true], ['Una pausa', false]], note: '"Stanza" es habitación o cuarto.', mnemonic: 'Tu stanza es tu cuarto.', phrase: 'La mia stanza è piccola.' },
      { word: 'magazzino', opts: [['Una revista', false], ['Un almacén', true], ['Una tienda', false]], note: 'La revista se dice "rivista".', mnemonic: 'Il magazzino è dove tieni le cose.', phrase: 'Il magazzino è pieno.' },
      { word: 'camera', opts: [['Una cámara', false], ['Una habitación', true], ['Un armario', false]], note: 'La cámara se dice "macchina fotografica".', mnemonic: 'Prenoto una camera = reservo una habitación.', phrase: 'Ho prenotato una camera.' },
      { word: 'fattoria', opts: [['Una factoría', false], ['Una granja', true], ['Una fábrica', false]], note: 'La factoría se dice "fabbrica".', mnemonic: 'Una fattoria toscana = una granja.', phrase: 'Vivono in una fattoria.' },
      { word: 'rumore', opts: [['Un rumor', false], ['Un ruido', true], ['Un murmullo', false]], note: 'El rumor (chisme) se dice "pettegolezzo".', mnemonic: 'Che rumore! = ¡Qué ruido!', phrase: "C'è troppo rumore." },
      { word: 'confetti', opts: [['Confeti', false], ['Caramelos', true], ['Papel picado', false]], note: 'El confeti se dice "coriandoli".', mnemonic: 'Son caramelos de azúcar.', phrase: 'Mi piacciono i confetti.' },
      { word: 'parente', opts: [['Un pariente lejano', false], ['Un familiar', true], ['Un conocido', false]], note: '"Parente" = familiar.', mnemonic: 'I parenti = los familiares.', phrase: 'Vado a trovare i parenti.' }
    ],
    verbos: {
      pronombres: [
  { it: 'io', es: 'yo' },
  { it: 'tu', es: 'tú' },
  { it: 'lui/lei', es: 'él/ella' },
  { it: 'noi', es: 'nosotros' },
  { it: 'voi', es: 'vosotros' },
  { it: 'loro', es: 'ellos' }
],
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
        { inf: 'mangiare', es: 'comer', formas: ['mangio','mangi','mangia','mangiamo','mangiate','mangiano'], ejemplo: 'Mangio la pasta.', ejEs: 'Como pasta.' }
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
      { es: '¿Puedes ayudarme?', palabras: ['Puoi','aiutarmi'], distractores: ['posso','può','grazie'], traduccion: 'Puoi aiutarmi?' }
    ],
    supervivencia: [
      { categoria: 'Saludos', icono: '👋', frases: [
        { es: 'Hola / Chau', target: 'Ciao' },
        { es: 'Buenos días', target: 'Buongiorno' },
        { es: 'Buenas tardes/noches', target: 'Buonasera' },
        { es: 'Adiós', target: 'Arrivederci' },
        { es: 'Por favor', target: 'Per favore' },
        { es: 'Gracias', target: 'Grazie' },
        { es: 'De nada', target: 'Prego' },
        { es: 'Disculpe', target: 'Scusi' }
      ]},
      { categoria: 'Básicos', icono: '💬', frases: [
        { es: 'Sí / No', target: 'Sì / No' },
        { es: 'No entiendo', target: 'Non capisco' },
        { es: '¿Habla español?', target: 'Parla spagnolo?' },
        { es: '¿Cómo se dice...?', target: 'Come si dice...?' },
        { es: '¿Cuánto cuesta?', target: 'Quanto costa?' },
        { es: '¿Dónde está el baño?', target: "Dov'è il bagno?" }
      ]},
      { categoria: 'Restaurante', icono: '🍽️', frases: [
        { es: 'Una mesa para dos', target: 'Un tavolo per due' },
        { es: 'El menú, por favor', target: 'Il menù, per favore' },
        { es: 'Quisiera...', target: 'Vorrei...' },
        { es: 'La cuenta, por favor', target: 'Il conto, per favore' },
        { es: 'Sin gluten', target: 'Senza glutine' },
        { es: '¡Está delicioso!', target: 'È delizioso!' }
      ]},
      { categoria: 'Direcciones', icono: '🧭', frases: [
        { es: '¿Dónde está la estación?', target: "Dov'è la stazione?" },
        { es: 'A la derecha', target: 'A destra' },
        { es: 'A la izquierda', target: 'A sinistra' },
        { es: 'Todo recto', target: 'Sempre dritto' },
        { es: '¿Está lejos?', target: 'È lontano?' },
        { es: 'Estoy perdido', target: 'Mi sono perso' }
      ]},
      { categoria: 'Emergencias', icono: '🚨', frases: [
        { es: '¡Ayuda!', target: 'Aiuto!' },
        { es: 'Llamen a la policía', target: 'Chiamate la polizia' },
        { es: 'No me siento bien', target: 'Non mi sento bene' },
        { es: 'Necesito un médico', target: 'Ho bisogno di un medico' }
      ]}
    ]
  },
  fr: {
    label: 'francés',
    voice: 'fr-FR',
    tutor: {
      name: 'Sophie', avatar: '👩‍🎨', status: 'Tutrice native · Paris',
      greeting: "Salut! Je m'appelle Sophie, ta tutrice de français. Enchantée! Comment tu t'appelles?",
      starters: ['Salut Sophie!', "Je m'appelle...", 'Ça va?', 'Je ne comprends pas'],
      systemPrompt: `Eres "Sophie", una tutora de francés nativa de París, amable, paciente y con sentido del humor. Estás ayudando a un hispanohablante principiante a practicar francés conversacional.

REGLAS ESTRICTAS:
1. Responde SIEMPRE en francés. Solo usas español muy brevemente para correcciones.
2. Usa vocabulario simple, frases cortas (nivel A1-A2).
3. Si el estudiante comete un error, responde primero de forma natural y luego corrige brevemente. Formato: "Ah, je vois! [respuesta natural]. Petite correction: on dit '[correcto]', pas '[incorrecto]'. [continuación]".
4. Si el estudiante escribe en español, anímalo suavemente a intentar en francés: "Essaie de le dire en français! :)"
5. Haz SIEMPRE una pregunta al final para mantener la conversación viva.
6. NUNCA respondas con más de 3 frases cortas. Sé concisa.
7. Si no entiendes algo, pide que repita: "Comment? Tu peux répéter?"
8. Adapta tu vocabulario al nivel del estudiante.

CONTEXTO: El estudiante quiere practicar conversación básica para viajar a Francia. Empieza presentándote brevemente y preguntándole su nombre.`
    },
    categorias: [
      { id: 'tion', titulo: '-ción → -tion', cognados: [
        { es: 'información', target: 'information' }, { es: 'nación', target: 'nation' },
        { es: 'educación', target: 'éducation' }, { es: 'atención', target: 'attention' },
        { es: 'estación', target: 'station' }, { es: 'función', target: 'fonction' },
        { es: 'acción', target: 'action' }, { es: 'dirección', target: 'direction' },
        { es: 'tradición', target: 'tradition' }, { es: 'condición', target: 'condition' },
        { es: 'posición', target: 'position' }, { es: 'intención', target: 'intention' },
        { es: 'celebración', target: 'célébration' }, { es: 'aplicación', target: 'application' },
        { es: 'comunicación', target: 'communication' }
      ]},
      { id: 'te', titulo: '-dad → -té', cognados: [
        { es: 'ciudad', target: 'cité' }, { es: 'universidad', target: 'université' },
        { es: 'libertad', target: 'liberté' }, { es: 'curiosidad', target: 'curiosité' },
        { es: 'felicidad', target: 'félicité' }, { es: 'realidad', target: 'réalité' },
        { es: 'actividad', target: 'activité' }, { es: 'personalidad', target: 'personnalité' },
        { es: 'sociedad', target: 'société' }, { es: 'calidad', target: 'qualité' },
        { es: 'dificultad', target: 'difficulté' }, { es: 'cantidad', target: 'quantité' },
        { es: 'electricidad', target: 'électricité' }, { es: 'identidad', target: 'identité' },
        { es: 'capacidad', target: 'capacité' }
      ]},
      { id: 'ble', titulo: '-ble → -ble', cognados: [
        { es: 'posible', target: 'possible' }, { es: 'terrible', target: 'terrible' },
        { es: 'responsable', target: 'responsable' }, { es: 'increíble', target: 'incroyable' },
        { es: 'probable', target: 'probable' }, { es: 'imposible', target: 'impossible' },
        { es: 'horrible', target: 'horrible' }, { es: 'visible', target: 'visible' },
        { es: 'flexible', target: 'flexible' }, { es: 'amable', target: 'aimable' },
        { es: 'notable', target: 'notable' }, { es: 'estable', target: 'stable' }
      ]},
      { id: 'aire', titulo: '-ario → -aire', cognados: [
        { es: 'diccionario', target: 'dictionnaire' }, { es: 'necesario', target: 'nécessaire' },
        { es: 'calendario', target: 'calendrier' }, { es: 'salario', target: 'salaire' },
        { es: 'vocabulario', target: 'vocabulaire' }, { es: 'aniversario', target: 'anniversaire' },
        { es: 'adversario', target: 'adversaire' }, { es: 'escenario', target: 'scénario' },
        { es: 'funcionario', target: 'fonctionnaire' }, { es: 'millonario', target: 'millionnaire' },
        { es: 'revolucionario', target: 'révolutionnaire' }, { es: 'imaginario', target: 'imaginaire' }
      ]},
      { id: 'eux', titulo: '-oso → -eux', cognados: [
        { es: 'famoso', target: 'fameux' }, { es: 'curioso', target: 'curieux' },
        { es: 'precioso', target: 'précieux' }, { es: 'delicioso', target: 'délicieux' },
        { es: 'peligroso', target: 'dangereux' }, { es: 'numeroso', target: 'nombreux' },
        { es: 'religioso', target: 'religieux' }, { es: 'misterioso', target: 'mystérieux' },
        { es: 'ambicioso', target: 'ambitieux' }, { es: 'generoso', target: 'généreux' },
        { es: 'nervioso', target: 'nerveux' }, { es: 'valiente', target: 'vaillant' }
      ]},
      { id: 'al', titulo: '-al → -al', cognados: [
        { es: 'animal', target: 'animal' }, { es: 'normal', target: 'normal' },
        { es: 'natural', target: 'naturel' }, { es: 'final', target: 'final' },
        { es: 'personal', target: 'personnel' }, { es: 'general', target: 'général' },
        { es: 'original', target: 'original' }, { es: 'cultural', target: 'culturel' },
        { es: 'social', target: 'social' }, { es: 'especial', target: 'spécial' },
        { es: 'comercial', target: 'commercial' }, { es: 'internacional', target: 'international' }
      ]},
      { id: 'iste', titulo: '-ista → -iste', cognados: [
        { es: 'artista', target: 'artiste' }, { es: 'turista', target: 'touriste' },
        { es: 'pianista', target: 'pianiste' }, { es: 'dentista', target: 'dentiste' },
        { es: 'optimista', target: 'optimiste' }, { es: 'realista', target: 'réaliste' },
        { es: 'socialista', target: 'socialiste' }, { es: 'capitalista', target: 'capitaliste' },
        { es: 'periodista', target: 'journaliste' }, { es: 'futbolista', target: 'footballeur' }
      ]},
      { id: 'ent', titulo: '-ente → -ent', cognados: [
        { es: 'presidente', target: 'président' }, { es: 'cliente', target: 'client' },
        { es: 'diferente', target: 'différent' }, { es: 'inteligente', target: 'intelligent' },
        { es: 'paciente', target: 'patient' }, { es: 'ingrediente', target: 'ingrédient' },
        { es: 'ambiente', target: 'environnement' }, { es: 'presente', target: 'présent' },
        { es: 'accidente', target: 'accident' }, { es: 'ausente', target: 'absent' }
      ]},
      { id: 'ique', titulo: '-ico → -ique', cognados: [
        { es: 'político', target: 'politique' }, { es: 'económico', target: 'économique' },
        { es: 'música', target: 'musique' }, { es: 'público', target: 'public' },
        { es: 'técnico', target: 'technique' }, { es: 'práctico', target: 'pratique' },
        { es: 'típico', target: 'typique' }, { es: 'magnífico', target: 'magnifique' },
        { es: 'auténtico', target: 'authentique' }, { es: 'histórico', target: 'historique' },
        { es: 'básico', target: 'basique' }
      ]}
    ],
    trampas: [
      { word: 'large', opts: [['Largo', false], ['Ancho', true], ['Grande', false]], note: 'Para "largo" se usa "long".', mnemonic: 'Une route "large" = ancha.', phrase: 'Cette rue est très large.' },
      { word: 'rester', opts: [['Restar (matemática)', false], ['Quedarse', true], ['Descansar', false]], note: 'Para "restar" se usa "soustraire".', mnemonic: 'Je reste ici = me quedo aquí.', phrase: 'Je reste à la maison.' },
      { word: 'attendre', opts: [['Atender a alguien', false], ['Esperar', true], ['Asistir', false]], note: 'Para "atender" se usa "s\'occuper de".', mnemonic: "Attendre l'autobus = esperar.", phrase: "J'attends le train." },
      { word: 'constipé', opts: [['Resfriado', false], ['Estreñido', true], ['Cansado', false]], note: 'Para "resfriado" se usa "enrhumé".', mnemonic: 'Como "constipated" en inglés.', phrase: 'Il est constipé.' },
      { word: 'éventuellement', opts: [['Eventualmente, quizás', false], ['Posiblemente, si surge', true], ['Finalmente', false]], note: 'Significa "si llega a ocurrir".', mnemonic: 'Es un evento futuro posible.', phrase: 'Je viendrai éventuellement.' },
      { word: 'réaliser', opts: [['Realizar un proyecto', false], ['Darse cuenta', true], ['Hacer realidad', false]], note: '"Réaliser" es darse cuenta.', mnemonic: "J'ai réalisé mon erreur.", phrase: "J'ai réalisé mon erreur." },
      { word: 'ignorer', opts: [['Ignorar a alguien', false], ['No saber algo', true], ['Despreciar', false]], note: 'Ignorar a alguien = "ne pas faire attention".', mnemonic: "J'ignore = no sé.", phrase: "J'ignore la réponse." },
      { word: 'chair', opts: [['Silla', false], ['Carne', true], ['Piel', false]], note: 'La silla se dice "chaise".', mnemonic: 'Chair = carne. Chaise = silla.', phrase: "J'aime la chair de poulet." },
      { word: 'pièce', opts: [['Pieza de repuesto', false], ['Habitación o moneda', true], ['Pedazo', false]], note: 'Habitación o moneda.', mnemonic: 'Une pièce = habitación o moneda.', phrase: 'Une pièce de deux euros.' },
      { word: 'journée', opts: [['Jornada laboral', false], ['Día completo', true], ['Viaje de un día', false]], note: 'Día como duración completa.', mnemonic: 'Bonne journée! = ¡Buen día!', phrase: 'Bonne journée!' }
    ],
    verbos: {
      pronombres: [
  { it: 'je', es: 'yo' },
  { it: 'tu', es: 'tú' },
  { it: 'il/elle', es: 'él/ella' },
  { it: 'nous', es: 'nosotros' },
  { it: 'vous', es: 'vosotros / usted' },
  { it: 'ils/elles', es: 'ellos/ellas' }
],
      lista: [
        { inf: 'être', es: 'ser / estar', formas: ['suis','es','est','sommes','êtes','sont'], ejemplo: 'Je suis de Panama.', ejEs: 'Soy de Panamá.' },
        { inf: 'avoir', es: 'tener', formas: ['ai','as','a','avons','avez','ont'], ejemplo: "J'ai deux frères.", ejEs: 'Tengo dos hermanos.' },
        { inf: 'aller', es: 'ir', formas: ['vais','vas','va','allons','allez','vont'], ejemplo: 'Je vais à Paris.', ejEs: 'Voy a París.' },
        { inf: 'faire', es: 'hacer', formas: ['fais','fais','fait','faisons','faites','font'], ejemplo: 'Je fais du sport.', ejEs: 'Hago deporte.' },
        { inf: 'vouloir', es: 'querer', formas: ['veux','veux','veut','voulons','voulez','veulent'], ejemplo: 'Je veux un café.', ejEs: 'Quiero un café.' },
        { inf: 'pouvoir', es: 'poder', formas: ['peux','peux','peut','pouvons','pouvez','peuvent'], ejemplo: "Je peux t'aider?", ejEs: '¿Puedo ayudarte?' },
        { inf: 'devoir', es: 'deber', formas: ['dois','dois','doit','devons','devez','doivent'], ejemplo: 'Je dois étudier.', ejEs: 'Debo estudiar.' },
        { inf: 'savoir', es: 'saber', formas: ['sais','sais','sait','savons','savez','savent'], ejemplo: 'Je ne sais pas nager.', ejEs: 'No sé nadar.' },
        { inf: 'voir', es: 'ver', formas: ['vois','vois','voit','voyons','voyez','voient'], ejemplo: 'Je vois la mer.', ejEs: 'Veo el mar.' },
        { inf: 'manger', es: 'comer', formas: ['mange','manges','mange','mangeons','mangez','mangent'], ejemplo: 'Je mange des pâtes.', ejEs: 'Como pasta.' }
      ]
    },
    construccion: [
      { es: 'Yo soy de Panamá', palabras: ['Je','suis','de','Panama'], distractores: ['es','est','à'], traduccion: 'Je suis de Panama.' },
      { es: 'Tú eres francés', palabras: ['Tu','es','français'], distractores: ['suis','est','Paris'], traduccion: 'Tu es français.' },
      { es: 'Él tiene un perro', palabras: ['Il','a','un','chien'], distractores: ['ai','as','chat'], traduccion: 'Il a un chien.' },
      { es: 'Nosotros vamos a París', palabras: ['Nous','allons','à','Paris'], distractores: ['vais','vas','Lyon'], traduccion: 'Nous allons à Paris.' },
      { es: 'Quiero un café', palabras: ['Je','veux','un','café'], distractores: ['veut','peux','thé'], traduccion: 'Je veux un café.' },
      { es: 'No sé nadar', palabras: ['Je','ne','sais','pas','nager'], distractores: ['sait','peux','chanter'], traduccion: 'Je ne sais pas nager.' },
      { es: 'Veo el mar', palabras: ['Je','vois','la','mer'], distractores: ['voit','voyons','montagne'], traduccion: 'Je vois la mer.' },
      { es: '¿Puedes ayudarme?', palabras: ['Tu','peux',"m'aider"], distractores: ['peut','peuvent','merci'], traduccion: "Tu peux m'aider?" }
    ],
    supervivencia: [
      { categoria: 'Saludos', icono: '👋', frases: [
        { es: 'Buenos días', target: 'Bonjour' },
        { es: 'Buenas tardes/noches', target: 'Bonsoir' },
        { es: 'Hola / Chau (informal)', target: 'Salut' },
        { es: 'Adiós', target: 'Au revoir' },
        { es: 'Por favor', target: "S'il vous plaît" },
        { es: 'Gracias', target: 'Merci' },
        { es: 'De nada', target: 'De rien' },
        { es: 'Disculpe', target: 'Excusez-moi' }
      ]},
      { categoria: 'Básicos', icono: '💬', frases: [
        { es: 'Sí / No', target: 'Oui / Non' },
        { es: 'No entiendo', target: 'Je ne comprends pas' },
        { es: '¿Habla español?', target: 'Parlez-vous espagnol?' },
        { es: '¿Cómo se dice...?', target: 'Comment dit-on...?' },
        { es: '¿Cuánto cuesta?', target: 'Combien ça coûte?' },
        { es: '¿Dónde están los baños?', target: 'Où sont les toilettes?' }
      ]},
      { categoria: 'Restaurante', icono: '🍽️', frases: [
        { es: 'Una mesa para dos', target: 'Une table pour deux' },
        { es: 'El menú, por favor', target: "Le menu, s'il vous plaît" },
        { es: 'Quisiera...', target: 'Je voudrais...' },
        { es: 'La cuenta, por favor', target: "L'addition, s'il vous plaît" },
        { es: 'Sin gluten', target: 'Sans gluten' },
        { es: '¡Está delicioso!', target: "C'est délicieux!" }
      ]},
      { categoria: 'Direcciones', icono: '🧭', frases: [
        { es: '¿Dónde está la estación?', target: 'Où est la gare?' },
        { es: 'A la derecha', target: 'À droite' },
        { es: 'A la izquierda', target: 'À gauche' },
        { es: 'Todo recto', target: 'Tout droit' },
        { es: '¿Está lejos?', target: "C'est loin?" },
        { es: 'Estoy perdido', target: 'Je suis perdu' }
      ]},
      { categoria: 'Emergencias', icono: '🚨', frases: [
        { es: '¡Socorro!', target: 'Au secours!' },
        { es: 'Llamen a la policía', target: 'Appelez la police' },
        { es: 'No me siento bien', target: 'Je ne me sens pas bien' },
        { es: 'Necesito un médico', target: "J'ai besoin d'un médecin" }
      ]}
    ]
  }
};
