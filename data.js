window.PONTE_DATA = {
  it: {
    label: 'italiano', voice: 'it-IT',
    tutor: {
      name: 'Marco', avatar: '👨‍🍳', status: 'Tutor nativo · Roma',
      greeting: "Ciao! Sono Marco. Di quale livello vuoi parlare oggi? (A1 o A2)",
      starters: ['Ciao Marco!', 'Parliamo del livello A1', 'Mi chiamo...', 'Non capisco'],
      systemPrompt: `Eres "Marco", tutor de italiano nativo. Adaptas tu nivel. Corrige con cariño: "Ah, capisco! Piccola correzione: si dice...". Haz siempre una pregunta final.`
    },
    levels: {
      a1: {
        titulo: 'A1 · Principiante', desc: 'Lo esencial para sobrevivir y presentarte.',
        categorias: [
          { id: 'zione', titulo: '-ción → -zione', cognados: [
            { es: 'información', target: 'informazione' }, { es: 'nación', target: 'nazione' },
            { es: 'educación', target: 'educazione' }, { es: 'atención', target: 'attenzione' },
            { es: 'estación', target: 'stazione' }, { es: 'función', target: 'funzione' },
            { es: 'acción', target: 'azione' }, { es: 'dirección', target: 'direzione' }
          ]},
          { id: 'ta', titulo: '-dad → -tà', cognados: [
            { es: 'ciudad', target: 'città' }, { es: 'universidad', target: 'università' },
            { es: 'libertad', target: 'libertà' }, { es: 'curiosidad', target: 'curiosità' },
            { es: 'realidad', target: 'realtà' }, { es: 'sociedad', target: 'società' }
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
          ]},
          { cat: 'Familia', icon: '👨‍👩‍👧', items: [
            { es: 'madre', target: 'madre' }, { es: 'padre', target: 'padre' },
            { es: 'hermano', target: 'fratello' }, { es: 'hermana', target: 'sorella' },
            { es: 'hijo', target: 'figlio' }, { es: 'hija', target: 'figlia' }
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
          { es: 'Tú eres italiano', palabras: ['Tu','sei','italiano'], distractores: ['sono','è','Roma'], traduccion: 'Tu sei italiano.' },
          { es: 'Él tiene un perro', palabras: ['Lui','ha','un','cane'], distractores: ['ho','hai','gatto'], traduccion: 'Lui ha un cane.' }
        ],
        supervivencia: [
          { categoria: 'Saludos', icono: '👋', frases: [
            { es: 'Hola / Chau', target: 'Ciao' }, { es: 'Buenos días', target: 'Buongiorno' },
            { es: 'Gracias', target: 'Grazie' }, { es: 'Por favor', target: 'Per favore' }
          ]},
          { categoria: 'Básicos', icono: '💬', frases: [
            { es: 'No entiendo', target: 'Non capisco' }, { es: '¿Cuánto cuesta?', target: 'Quanto costa?' },
            { es: '¿Dónde está el baño?', target: "Dov'è il bagno?" }
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
            { es: 'celebración', target: 'celebrazione' }, { es: 'aplicación', target: 'applicazione' },
            { es: 'comunicación', target: 'comunicazione' }, { es: 'revolución', target: 'rivoluzione' }
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
          { es: 'Quiero un café', palabras: ['Voglio','un','caffè'], distractores: ['vuoi','tè'], traduccion: 'Voglio un caffè.' },
          { es: '¿Puedes ayudarme?', palabras: ['Puoi','aiutarmi'], distractores: ['posso','grazie'], traduccion: 'Puoi aiutarmi?' }
        ],
        supervivencia: [
          { categoria: 'Restaurante', icono: '🍽️', frases: [
            { es: 'Una mesa para dos', target: 'Un tavolo per due' },
            { es: 'La cuenta, por favor', target: 'Il conto, per favore' }
          ]},
          { categoria: 'Direcciones', icono: '🧭', frases: [
            { es: 'A la derecha', target: 'A destra' }, { es: 'A la izquierda', target: 'A sinistra' }
          ]}
        ]
      }
    }
  },
  fr: {
    label: 'francés', voice: 'fr-FR',
    tutor: {
      name: 'Sophie', avatar: '👩‍🎨', status: 'Tutrice native · Paris',
      greeting: "Salut! Je m'appelle Sophie. Tu veux parler du niveau A1 ou A2?",
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
            { es: 'libertad', target: 'liberté' }, { es: 'realidad', target: 'réalité' },
            { es: 'sociedad', target: 'société' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Números', icon: '🔢', items: [
            { es: 'uno', target: 'un' }, { es: 'dos', target: 'deux' }, { es: 'tres', target: 'trois' },
            { es: 'cuatro', target: 'quatre' }, { es: 'cinco', target: 'cinq' }, { es: 'diez', target: 'dix' }
          ]},
          { cat: 'Días', icon: '📅', items: [
            { es: 'lunes', target: 'lundi' }, { es: 'martes', target: 'mardi' },
            { es: 'miércoles', target: 'mercredi' }, { es: 'jueves', target: 'jeudi' },
            { es: 'viernes', target: 'vendredi' }, { es: 'sábado', target: 'samedi' }, { es: 'domingo', target: 'dimanche' }
          ]}
        ],
        trampas: [
          { word: 'large', opts: [['Largo', false], ['Ancho', true], ['Grande', false]], note: '"Largo" es "long".', mnemonic: 'Una calle ancha.', phrase: 'Cette rue est large.' },
          { word: 'rester', opts: [['Restar', false], ['Quedarse', true], ['Descansar', false]], note: '"Restar" es "soustraire".', mnemonic: 'Quedarse en casa.', phrase: 'Je reste ici.' }
        ],
        verbos: {
          pronombres: [{it:'je', es:'yo'}, {it:'tu', es:'tú'}, {it:'il/elle', es:'él/ella'}, {it:'nous', es:'nosotros'}, {it:'vous', es:'vosotros/usted'}, {it:'ils/elles', es:'ellos/ellas'}],
          lista: [
            { inf: 'être', es: 'ser / estar', formas: ['suis','es','est','sommes','êtes','sont'], ejemplo: 'Je suis de Panama.', ejEs: 'Soy de Panamá.' },
            { inf: 'avoir', es: 'tener', formas: ['ai','as','a','avons','avez','ont'], ejemplo: "J'ai un chat.", ejEs: 'Tengo un gato.' },
            { inf: 'aller', es: 'ir', formas: ['vais','vas','va','allons','allez','vont'], ejemplo: 'Je vais à Paris.', ejEs: 'Voy a París.' }
          ]
        },
        construccion: [
          { es: 'Yo soy de Panamá', palabras: ['Je','suis','de','Panama'], distractores: ['es','est','à'], traduccion: 'Je suis de Panama.' },
          { es: 'Tú eres francés', palabras: ['Tu','es','français'], distractores: ['suis','est','Paris'], traduccion: 'Tu es français.' }
        ],
        supervivencia: [
          { categoria: 'Saludos', icono: '👋', frases: [
            { es: 'Buenos días', target: 'Bonjour' }, { es: 'Gracias', target: 'Merci' },
            { es: 'Por favor', target: "S'il vous plaît" }, { es: 'Adiós', target: 'Au revoir' }
          ]},
          { categoria: 'Básicos', icono: '💬', frases: [
            { es: 'No entiendo', target: 'Je ne comprends pas' },
            { es: '¿Cuánto cuesta?', target: 'Combien ça coûte?' }
          ]}
        ]
      },
      a2: {
        titulo: 'A2 · Básico', desc: 'Para conversar sobre el pasado y planes futuros.',
        categorias: [
          { id: 'eux', titulo: '-oso → -eux', cognados: [
            { es: 'famoso', target: 'fameux' }, { es: 'curioso', target: 'curieux' },
            { es: 'precioso', target: 'précieux' }, { es: 'peligroso', target: 'dangereux' }
          ]}
        ],
        vocabulario_esencial: [
          { cat: 'Comida', icon: '🥐', items: [
            { es: 'pan', target: 'pain' }, { es: 'queso', target: 'fromage' },
            { es: 'agua', target: 'eau' }, { es: 'vino', target: 'vin' }
          ]}
        ],
        trampas: [
          { word: 'constipé', opts: [['Resfriado', false], ['Estreñido', true], ['Cansado', false]], note: '"Resfriado" es "enrhumé".', mnemonic: 'Como en inglés.', phrase: 'Il est constipé.' }
        ],
        verbos: {
          pronombres: [{it:'je', es:'yo'}, {it:'tu', es:'tú'}, {it:'il/elle', es:'él/ella'}, {it:'nous', es:'nosotros'}, {it:'vous', es:'vosotros/usted'}, {it:'ils/elles', es:'ellos/ellas'}],
          lista: [
            { inf: 'vouloir', es: 'querer', formas: ['veux','veux','veut','voulons','voulez','veulent'], ejemplo: 'Je veux un café.', ejEs: 'Quiero un café.' },
            { inf: 'pouvoir', es: 'poder', formas: ['peux','peux','peut','pouvons','pouvez','peuvent'], ejemplo: "Je peux t'aider?", ejEs: '¿Puedo ayudarte?' }
          ]
        },
        construccion: [
          { es: 'Quiero un café', palabras: ['Je','veux','un','café'], distractores: ['veut','thé'], traduccion: 'Je veux un café.' }
        ],
        supervivencia: [
          { categoria: 'Restaurante', icono: '🍽️', frases: [
            { es: 'La cuenta, por favor', target: "L'addition, s'il vous plaît" },
            { es: 'Una mesa para dos', target: 'Une table pour deux' }
          ]}
        ]
      }
    }
  }
};
