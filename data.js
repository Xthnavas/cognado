window.PONTE_DATA = {
  it: {
    label: 'italiano', voice: 'it-IT',
    tutor: {
      name: 'Marco', avatar: '👨‍🍳', status: 'Tutor nativo · Roma',
      greeting: "Ciao! Sono Marco. Di quale livello vuoi parlare oggi?",
      starters: ['Ciao Marco!', 'Parliamo del livello A1', 'Mi chiamo...', 'Non capisco'],
      systemPrompt: `Eres "Marco", tutor de italiano nativo. Adaptas tu nivel según el usuario. Corrige con cariño: "Ah, capisco! Piccola correzione: si dice...". Haz siempre una pregunta final.`
    },
    levels: {
      a1: {
        titulo: 'A1 · Principiante', desc: 'Lo esencial para sobrevivir y presentarte.',
        categorias: [
          { id: 'zione', titulo: '-ción → -zione', cognados: [
            { es: 'información', target: 'informazione' }, { es: 'nación', target: 'nazione' },
            { es: 'educación', target: 'educazione' }, { es: 'atención', target: 'attenzione' },
            { es: 'estación', target: 'stazione' }, { es: 'función', target: 'funzione' },
            { es: 'acción', target: 'azione' }, { es: 'dirección', target: 'direzione' },
            { es: 'tradición', target: 'tradizione' }, { es: 'condición', target: 'condizione' }
          ]},
          { id: 'ta', titulo: '-dad → -tà', cognados: [
            { es: 'ciudad', target: 'città' }, { es: 'universidad', target: 'università' },
            { es: 'libertad', target: 'libertà' }, { es: 'curiosidad', target: 'curiosità' },
            { es: 'felicidad', target: 'felicità' }, { es: 'realidad', target: 'realtà' },
            { es: 'sociedad', target: 'società' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Números', icon: '🔢', items: [
            { es: 'uno', target: 'uno' }, { es: 'dos', target: 'due' }, { es: 'tres', target: 'tre' },
            { es: 'cuatro', target: 'quattro' }, { es: 'cinco', target: 'cinque' }, { es: 'diez', target: 'dieci' }
          ]},
          { cat: 'Días', icon: '📅', items: [
            { es: 'lunes', target: 'lunedì' }, { es: 'martes', target: 'martedì' },
            { es: 'miércoles', target: 'mercoledì' }, { es: 'jueves', target: 'giovedì' },
            { es: 'viernes', target: 'venerdì' }, { es: 'sábado', target: 'sabato' }, { es: 'domingo', target: 'domenica' }
          ]}
        ],
        trampas: [
          { word: 'burro', opts: [['Un animal', false], ['Mantequilla', true], ['Un tonto', false]], note: 'El animal es "asino".', mnemonic: 'Burro untado de mantequilla.', phrase: 'Pane con il burro.' },
          { word: 'salire', opts: [['Salir', false], ['Subir', true], ['Saltar', false]], note: '"Salir" es "uscire".', mnemonic: 'Subir a un árbol.', phrase: 'Salire al piano.' },
          { word: 'guardare', opts: [['Guardar', false], ['Mirar', true], ['Cuidar', false]], note: '"Guardar" es "conservare".', mnemonic: 'Mirar la tele.', phrase: 'Guardare un film.' }
        ],
        verbos: {
          pronombres: [{it:'io', es:'yo'}, {it:'tu', es:'tú'}, {it:'lui/lei', es:'él/ella'}, {it:'noi', es:'nosotros'}, {it:'voi', es:'vosotros'}, {it:'loro', es:'ellos'}],
          lista: [
            { inf: 'essere', es: 'ser / estar', formas: ['sono','sei','è','siamo','siete','sono'], ejemplo: 'Sono di Panama.', ejEs: 'Soy de Panamá.' },
            { inf: 'avere', es: 'tener', formas: ['ho','hai','ha','abbiamo','avete','hanno'], ejemplo: 'Ho un gatto.', ejEs: 'Tengo un gato.' },
            { inf: 'andare', es: 'ir', formas: ['vado','vai','va','andiamo','andate','vanno'], ejemplo: 'Vado a Roma.', ejEs: 'Voy a Roma.' },
            { inf: 'fare', es: 'hacer', formas: ['faccio','fai','fa','facciamo','fate','fanno'], ejemplo: 'Faccio sport.', ejEs: 'Hago deporte.' }
          ]
        },
        construccion: [
          { es: 'Yo soy de Panamá', palabras: ['Io','sono','di','Panama'], distractores: ['è','siamo','a'], traduccion: 'Io sono di Panama.' },
          { es: 'Tú eres italiano', palabras: ['Tu','sei','italiano'], distractores: ['sono','è','Roma'], traduccion: 'Tu sei italiano.' }
        ],
        supervivencia: [
          { categoria: 'Saludos', icono: '👋', frases: [
            { es: 'Hola / Chau', target: 'Ciao' }, { es: 'Buenos días', target: 'Buongiorno' },
            { es: 'Gracias', target: 'Grazie' }, { es: 'Por favor', target: 'Per favore' }
          ]},
          { categoria: 'Básicos', icono: '💬', frases: [
            { es: 'No entiendo', target: 'Non capisco' }, { es: '¿Cuánto cuesta?', target: 'Quanto costa?' }
          ]}
        ]
      },
      a2: {
        titulo: 'A2 · Básico', desc: 'Para conversar sobre el pasado y planes futuros.',
        categorias: [
          { id: 'mente', titulo: '-mente → -mente', cognados: [
            { es: 'lentamente', target: 'lentamente' }, { es: 'naturalmente', target: 'naturalmente' },
            { es: 'probablemente', target: 'probabilmente' }, { es: 'finalmente', target: 'finalmente' }
          ]},
          { id: 'zione2', titulo: '-ción → -zione (Avanzado)', cognados: [
            { es: 'celebración', target: 'celebrazione' }, { es: 'aplicación', target: 'applicazione' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Comida', icon: '🍝', items: [
            { es: 'pasta', target: 'pasta' }, { es: 'pizza', target: 'pizza' },
            { es: 'agua', target: 'acqua' }, { es: 'vino', target: 'vino' },
            { es: 'carne', target: 'carne' }, { es: 'pescado', target: 'pesce' }
          ]}
        ],
        trampas: [
          { word: 'camera', opts: [['Cámara', false], ['Habitación', true], ['Armario', false]], note: 'La cámara es "macchina fotografica".', mnemonic: 'Reservar una habitación.', phrase: 'Ho prenotato una camera.' }
        ],
        verbos: {
          pronombres: [{it:'io', es:'yo'}, {it:'tu', es:'tú'}, {it:'lui/lei', es:'él/ella'}, {it:'noi', es:'nosotros'}, {it:'voi', es:'vosotros'}, {it:'loro', es:'ellos'}],
          lista: [
            { inf: 'potere', es: 'poder', formas: ['posso','puoi','può','possiamo','potete','possono'], ejemplo: 'Posso aiutarti?', ejEs: '¿Puedo ayudarte?' },
            { inf: 'volere', es: 'querer', formas: ['voglio','vuoi','vuole','vogliamo','volete','vogliono'], ejemplo: 'Voglio un caffè.', ejEs: 'Quiero un café.' },
            { inf: 'sapere', es: 'saber', formas: ['so','sai','sa','sappiamo','sapete','sanno'], ejemplo: 'Non so nuotare.', ejEs: 'No sé nadar.' }
          ]
        },
        construccion: [
          { es: 'Quiero un café', palabras: ['Voglio','un','caffè'], distractores: ['vuoi','tè'], traduccion: 'Voglio un caffè.' }
        ],
        supervivencia: [
          { categoria: 'Restaurante', icono: '🍽️', frases: [
            { es: 'Una mesa para dos', target: 'Un tavolo per due' },
            { es: 'La cuenta, por favor', target: 'Il conto, per favore' }
          ]}
        ]
      },
      b1: {
        titulo: 'B1 · Intermedio', desc: 'Planes futuros, condicionales y viajes.',
        categorias: [
          { id: 'futuro', titulo: 'El Futuro', cognados: [
            { es: 'mañana', target: 'domani' }, { es: 'la próxima semana', target: 'la prossima settimana' },
            { es: 'si llueve, me quedo', target: 'se piove, resto' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Viajes', icon: '✈️', items: [
            { es: 'billete de avión', target: 'biglietto aereo' }, { es: 'maleta', target: 'valigia' },
            { es: 'equipaje', target: 'bagaglio' }, { es: 'vuelo', target: 'volo' }
          ]}
        ],
        trampas: [
          { word: 'partire', opts: [['Partir (romper)', false], ['Irse / Salir de viaje', true], ['Repartir', false]], note: 'Para romper se usa "rompere".', mnemonic: 'Parto per Roma = Me voy a Roma.', phrase: 'Parto domani.' }
        ],
        verbos: {
          pronombres: [{it:'io', es:'yo'}, {it:'tu', es:'tú'}, {it:'lui/lei', es:'él/ella'}, {it:'noi', es:'nosotros'}, {it:'voi', es:'vosotros'}, {it:'loro', es:'ellos'}],
          lista: [
            { inf: 'sarò (essere)', es: 'seré / estaré', formas: ['sarò','sarai','sarà','saremo','sarete','saranno'], ejemplo: 'Domani sarò a Roma.', ejEs: 'Mañana estaré en Roma.' },
            { inf: 'avrò (avere)', es: 'tendré', formas: ['avrò','avrai','avrà','avremo','avrete','avranno'], ejemplo: 'Avrò tempo.', ejEs: 'Tendré tiempo.' }
          ]
        },
        construccion: [
          { es: 'Mañana voy a Roma', palabras: ['Domani','andrò','a','Roma'], distractores: ['vado','ieri'], traduccion: 'Domani andrò a Roma.' }
        ],
        supervivencia: [
          { categoria: 'En el aeropuerto', icono: '🛫', frases: [
            { es: '¿Dónde está la puerta de embarque?', target: "Dov'è il gate?" }
          ]}
        ]
      },
      b2: {
        titulo: 'B2 · Intermedio Alto', desc: 'Opiniones, trabajo y el subjuntivo.',
        categorias: [
          { id: 'subjuntivo', titulo: 'El Subjuntivo', cognados: [
            { es: 'Espero que vengas', target: 'Spero che tu venga' },
            { es: 'Creo que es verdad', target: 'Credo che sia vero' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Trabajo', icon: '💼', items: [
            { es: 'reunión', target: 'riunione' }, { es: 'jefe', target: 'capo' },
            { es: 'sueldo', target: 'stipendio' }
          ]}
        ],
        trampas: [
          { word: 'attuale', opts: [['Actual (de ahora)', true], ['Actuado', false], ['Antiguo', false]], note: '"Actual" en español es "reale" en italiano.', mnemonic: 'La situazione attuale = La situación actual.', phrase: 'Il problema attuale.' }
        ],
        verbos: {
          pronombres: [{it:'io', es:'yo'}, {it:'tu', es:'tú'}, {it:'lui/lei', es:'él/ella'}, {it:'noi', es:'nosotros'}, {it:'voi', es:'vosotros'}, {it:'loro', es:'ellos'}],
          lista: [
            { inf: 'che io sia (essere)', es: 'que yo sea', formas: ['sia','sia','sia','siamo','siate','siano'], ejemplo: 'Penso che sia giusto.', ejEs: 'Pienso que es justo.' }
          ]
        },
        construccion: [
          { es: 'Creo que él tiene razón', palabras: ['Credo','che','lui','abbia','ragione'], distractores: ['ha','sia'], traduccion: 'Credo che lui abbia ragione.' }
        ],
        supervivencia: [
          { categoria: 'Opiniones', icono: '🗣️', frases: [
            { es: 'En mi opinión...', target: 'Secondo me...' }, { es: 'Estoy de acuerdo', target: 'Sono d\'accordo' }
          ]}
        ]
      },
      c1: {
        titulo: 'C1 · Avanzado', desc: 'Fluidez, temas abstractos y expresiones complejas.',
        categorias: [
          { id: 'abstracto', titulo: 'Conceptos Abstractos', cognados: [
            { es: 'sin embargo', target: 'tuttavia' }, { es: 'por lo tanto', target: 'pertanto' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Sociedad', icon: '🌍', items: [
            { es: 'desarrollo sostenible', target: 'sviluppo sostenibile' }, { es: 'desigualdad', target: 'disuguaglianza' }
          ]}
        ],
        trampas: [
          { word: 'eventuale', opts: [['Eventual (que puede pasar)', true], ['Importante', false], ['Falso', false]], note: 'Se usa para algo que puede suceder.', mnemonic: 'Un problema eventuale = un posible problema.', phrase: 'Un ritardo eventuale.' }
        ],
        verbos: {
          pronombres: [{it:'io', es:'yo'}, {it:'tu', es:'tú'}, {it:'lui/lei', es:'él/ella'}, {it:'noi', es:'nosotros'}, {it:'voi', es:'vosotros'}, {it:'loro', es:'ellos'}],
          lista: [
            { inf: 'avessi (avere)', es: 'si yo tuviera', formas: ['avessi','avessi','avesse','avessimo','aveste','avessero'], ejemplo: 'Se avessi tempo, viaggerei.', ejEs: 'Si tuviera tiempo, viajaría.' }
          ]
        },
        construccion: [
          { es: 'Si tuviera tiempo, viajaría', palabras: ['Se','avessi','tempo','viaggerei'], distractores: ['ho','viaggio'], traduccion: 'Se avessi tempo, viaggerei.' }
        ],
        supervivencia: [
          { categoria: 'Debate', icono: '⚖️', frases: [
            { es: 'Por un lado... por otro lado...', target: 'Da un lato... dall\'altro...' }
          ]}
        ]
      },
      c2: {
        titulo: 'C2 · Maestría', desc: 'Modismos, literatura y nivel nativo.',
        categorias: [
          { id: 'modismos', titulo: 'Modismos (Idioms)', cognados: [
            { es: 'En boca cerrada no entran moscas', target: 'Chi tace acconsente' }, { es: 'Estar en las nubes', target: 'Essere tra le nuvole' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Literatura', icon: '📚', items: [
            { es: 'trama', target: 'trama' }, { es: 'personaje', target: 'personaggio' }
          ]}
        ],
        trampas: [
          { word: 'botte', opts: [['Bota', false], ['Golpe / Barrica', true], ['Botella', false]], note: 'La bota de vestir es "stivale".', mnemonic: 'Dare botte = dar golpes.', phrase: 'Ha preso una botte.' }
        ],
        verbos: {
          pronombres: [{it:'io', es:'yo'}, {it:'tu', es:'tú'}, {it:'lui/lei', es:'él/ella'}, {it:'noi', es:'nosotros'}, {it:'voi', es:'vosotros'}, {it:'loro', es:'ellos'}],
          lista: [
            { inf: 'fossi (essere)', es: 'si yo fuera', formas: ['fossi','fossi','fosse','fossimo','foste','fossero'], ejemplo: 'Se fossi in te, direi di sì.', ejEs: 'Si yo fuera tú, diría que sí.' }
          ]
        },
        construccion: [
          { es: 'Si yo fuera tú, lo haría', palabras: ['Se','fossi','in','te','lo','farei'], distractores: ['sono','faccio'], traduccion: 'Se fossi in te, lo farei.' }
        ],
        supervivencia: [
          { categoria: 'Expresiones', icono: '🎭', frases: [
            { es: 'Ser pan comido', target: 'Essere un gioco da ragazzi' }
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
            { es: 'información', target: 'information' }, { es: 'nación', target: 'nation' },
            { es: 'educación', target: 'éducation' }, { es: 'atención', target: 'attention' },
            { es: 'estación', target: 'station' }, { es: 'función', target: 'fonction' }
          ]},
          { id: 'te', titulo: '-dad → -té', cognados: [
            { es: 'ciudad', target: 'cité' }, { es: 'universidad', target: 'université' },
            { es: 'libertad', target: 'liberté' }, { es: 'realidad', target: 'réalité' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Números', icon: '🔢', items: [
            { es: 'uno', target: 'un' }, { es: 'dos', target: 'deux' }, { es: 'tres', target: 'trois' }, { es: 'diez', target: 'dix' }
          ]},
          { cat: 'Días', icon: '📅', items: [
            { es: 'lunes', target: 'lundi' }, { es: 'martes', target: 'mardi' }, { es: 'miércoles', target: 'mercredi' }
          ]}
        ],
        trampas: [
          { word: 'large', opts: [['Largo', false], ['Ancho', true], ['Grande', false]], note: '"Largo" es "long".', mnemonic: 'Una calle ancha.', phrase: 'Cette rue est large.' },
          { word: 'rester', opts: [['Restar', false], ['Quedarse', true], ['Descansar', false]], note: '"Restar" es "soustraire".', mnemonic: 'Quedarse en casa.', phrase: 'Je reste ici.' }
        ],
        verbos: {
          pronombres: [{it:'je', es:'yo'}, {it:'tu', es:'tú'}, {it:'il/elle', es:'él/ella'}, {it:'nous', es:'nosotros'}, {it:'vous', es:'vosotros'}, {it:'ils/elles', es:'ellos'}],
          lista: [
            { inf: 'être', es: 'ser / estar', formas: ['suis','es','est','sommes','êtes','sont'], ejemplo: 'Je suis de Panama.', ejEs: 'Soy de Panamá.' },
            { inf: 'avoir', es: 'tener', formas: ['ai','as','a','avons','avez','ont'], ejemplo: "J'ai un chat.", ejEs: 'Tengo un gato.' }
          ]
        },
        construccion: [
          { es: 'Yo soy de Panamá', palabras: ['Je','suis','de','Panama'], distractores: ['es','est','à'], traduccion: 'Je suis de Panama.' }
        ],
        supervivencia: [
          { categoria: 'Saludos', icono: '👋', frases: [
            { es: 'Buenos días', target: 'Bonjour' }, { es: 'Gracias', target: 'Merci' }, { es: 'Adiós', target: 'Au revoir' }
          ]}
        ]
      },
      a2: {
        titulo: 'A2 · Básico', desc: 'Para conversar sobre el pasado y planes futuros.',
        categorias: [
          { id: 'eux', titulo: '-oso → -eux', cognados: [
            { es: 'famoso', target: 'fameux' }, { es: 'curioso', target: 'curieux' }, { es: 'peligroso', target: 'dangereux' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Comida', icon: '🥐', items: [
            { es: 'pan', target: 'pain' }, { es: 'queso', target: 'fromage' }, { es: 'agua', target: 'eau' }
          ]}
        ],
        trampas: [
          { word: 'constipé', opts: [['Resfriado', false], ['Estreñido', true], ['Cansado', false]], note: '"Resfriado" es "enrhumé".', mnemonic: 'Como en inglés.', phrase: 'Il est constipé.' }
        ],
        verbos: {
          pronombres: [{it:'je', es:'yo'}, {it:'tu', es:'tú'}, {it:'il/elle', es:'él/ella'}, {it:'nous', es:'nosotros'}, {it:'vous', es:'vosotros'}, {it:'ils/elles', es:'ellos'}],
          lista: [
            { inf: 'vouloir', es: 'querer', formas: ['veux','veux','veut','voulons','voulez','veulent'], ejemplo: 'Je veux un café.', ejEs: 'Quiero un café.' }
          ]
        },
        construccion: [
          { es: 'Quiero un café', palabras: ['Je','veux','un','café'], distractores: ['veut','thé'], traduccion: 'Je veux un café.' }
        ],
        supervivencia: [
          { categoria: 'Restaurante', icono: '🍽️', frases: [
            { es: 'La cuenta, por favor', target: "L'addition, s'il vous plaît" }
          ]}
        ]
      },
      b1: {
        titulo: 'B1 · Intermedio', desc: 'Planes futuros, condicionales y viajes.',
        categorias: [
          { id: 'futuro', titulo: 'El Futuro', cognados: [
            { es: 'mañana', target: 'demain' }, { es: 'la próxima semana', target: 'la semaine prochaine' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Viajes', icon: '✈️', items: [
            { es: 'billete de avión', target: 'billet d\'avion' }, { es: 'maleta', target: 'valise' }, { es: 'vuelo', target: 'vol' }
          ]}
        ],
        trampas: [
          { word: 'partir', opts: [['Partir (romper)', false], ['Irse / Salir de viaje', true], ['Repartir', false]], note: 'Para romper se usa "casser".', mnemonic: 'Je pars à Paris = Me voy a París.', phrase: 'Je pars demain.' }
        ],
        verbos: {
          pronombres: [{it:'je', es:'yo'}, {it:'tu', es:'tú'}, {it:'il/elle', es:'él/ella'}, {it:'nous', es:'nosotros'}, {it:'vous', es:'vosotros'}, {it:'ils/elles', es:'ellos'}],
          lista: [
            { inf: 'serai (être)', es: 'seré / estaré', formas: ['serai','seras','sera','serons','serez','seront'], ejemplo: 'Demain je serai à Paris.', ejEs: 'Mañana estaré en París.' }
          ]
        },
        construccion: [
          { es: 'Mañana voy a París', palabras: ['Demain','j\'irai','à','Paris'], distractores: ['vais','hier'], traduccion: 'Demain j\'irai à Paris.' }
        ],
        supervivencia: [
          { categoria: 'En el aeropuerto', icono: '🛫', frases: [
            { es: '¿Dónde está la puerta de embarque?', target: "Où est la porte d'embarquement?" }
          ]}
        ]
      },
      b2: {
        titulo: 'B2 · Intermedio Alto', desc: 'Opiniones, trabajo y el subjuntivo.',
        categorias: [
          { id: 'subjuntivo', titulo: 'El Subjuntivo', cognados: [
            { es: 'Espero que vengas', target: 'J\'espère que tu viennes' }, { es: 'Creo que es verdad', target: 'Je crois que c\'est vrai' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Trabajo', icon: '💼', items: [
            { es: 'reunión', target: 'réunion' }, { es: 'jefe', target: 'patron' }, { es: 'sueldo', target: 'salaire' }
          ]}
        ],
        trampas: [
          { word: 'actuel', opts: [['Actual (de ahora)', true], ['Actuado', false], ['Antiguo', false]], note: '"Actual" en español es "réel" en francés.', mnemonic: 'La situation actuelle = La situación actual.', phrase: 'Le problème actuel.' }
        ],
        verbos: {
          pronombres: [{it:'je', es:'yo'}, {it:'tu', es:'tú'}, {it:'il/elle', es:'él/ella'}, {it:'nous', es:'nosotros'}, {it:'vous', es:'vosotros'}, {it:'ils/elles', es:'ellos'}],
          lista: [
            { inf: 'que je sois (être)', es: 'que yo sea', formas: ['sois','sois','soit','soyons','soyez','soient'], ejemplo: 'Je pense que ce soit juste.', ejEs: 'Pienso que es justo.' }
          ]
        },
        construccion: [
          { es: 'Creo que él tiene razón', palabras: ['Je','crois','qu\'il','ait','raison'], distractores: ['a','soit'], traduccion: 'Je crois qu\'il ait raison.' }
        ],
        supervivencia: [
          { categoria: 'Opiniones', icono: '🗣️', frases: [
            { es: 'En mi opinión...', target: 'À mon avis...' }, { es: 'Estoy de acuerdo', target: 'Je suis d\'accord' }
          ]}
        ]
      },
      c1: {
        titulo: 'C1 · Avanzado', desc: 'Fluidez, temas abstractos y expresiones complejas.',
        categorias: [
          { id: 'abstracto', titulo: 'Conceptos Abstractos', cognados: [
            { es: 'sin embargo', target: 'cependant' }, { es: 'por lo tanto', target: 'par conséquent' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Sociedad', icon: '🌍', items: [
            { es: 'desarrollo sostenible', target: 'développement durable' }, { es: 'desigualdad', target: 'inégalité' }
          ]}
        ],
        trampas: [
          { word: 'éventuel', opts: [['Eventual (que puede pasar)', true], ['Importante', false], ['Falso', false]], note: 'Se usa para algo que puede suceder.', mnemonic: 'Un problème éventuel = un posible problema.', phrase: 'Un retard éventuel.' }
        ],
        verbos: {
          pronombres: [{it:'je', es:'yo'}, {it:'tu', es:'tú'}, {it:'il/elle', es:'él/ella'}, {it:'nous', es:'nosotros'}, {it:'vous', es:'vosotros'}, {it:'ils/elles', es:'ellos'}],
          lista: [
            { inf: 'que j\'aie (avoir)', es: 'que yo tenga', formas: ['aie','aies','ait','ayons','ayez','aient'], ejemplo: 'Il faut que j\'aie du temps.', ejEs: 'Hace falta que tenga tiempo.' }
          ]
        },
        construccion: [
          { es: 'Si tuviera tiempo, viajaría', palabras: ['Si','j\'avais','le','temps','je','voyagerais'], distractores: ['ai','voyage'], traduccion: 'Si j\'avais le temps, je voyagerais.' }
        ],
        supervivencia: [
          { categoria: 'Debate', icono: '⚖️', frases: [
            { es: 'Por un lado... por otro lado...', target: 'D\'un côté... de l\'autre...' }
          ]}
        ]
      },
      c2: {
        titulo: 'C2 · Maestría', desc: 'Modismos, literatura y nivel nativo.',
        categorias: [
          { id: 'modismos', titulo: 'Modismos (Idioms)', cognados: [
            { es: 'Ser pan comido', target: 'C\'est du gâteau' }, { es: 'Estar en las nubes', target: 'Être dans la lune' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Literatura', icon: '📚', items: [
            { es: 'trama', target: 'intrigue' }, { es: 'personaje', target: 'personnage' }
          ]}
        ],
        trampas: [
          { word: 'botte', opts: [['Bota', false], ['Golpe / Barrica', true], ['Botella', false]], note: 'La bota de vestir es "botte".', mnemonic: 'Dare botte = dar golpes.', phrase: 'Il a pris une botte.' }
        ],
        verbos: {
          pronombres: [{it:'je', es:'yo'}, {it:'tu', es:'tú'}, {it:'il/elle', es:'él/ella'}, {it:'nous', es:'nosotros'}, {it:'vous', es:'vosotros'}, {it:'ils/elles', es:'ellos'}],
          lista: [
            { inf: 'que je fusse (être)', es: 'si yo fuera', formas: ['fusse','fusses','fût','fussions','fussiez','fussent'], ejemplo: 'Si je fusse toi...', ejEs: 'Si yo fuera tú...' }
          ]
        },
        construccion: [
          { es: 'Si yo fuera tú, lo haría', palabras: ['Si','j\'étais','toi','je','le','ferais'], distractores: ['suis','fais'], traduccion: 'Si j\'étais toi, je le ferais.' }
        ],
        supervivencia: [
          { categoria: 'Expresiones', icono: '🎭', frases: [
            { es: 'Ser pan comido', target: 'C\'est du gâteau' }
          ]}
        ]
      }
    }
  }
};
