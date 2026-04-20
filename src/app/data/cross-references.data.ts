import { CrossReference } from '../models/cross-reference.model';

export const CROSS_REFERENCES: CrossReference[] = [

  // ── TIPOLOGÍAS ────────────────────────────────────────────────────

  {
    id: 1,
    title: 'Adán, figura del segundo Adán',
    type: 'tipología',
    theme: 'creación y redención',
    importance: 5,
    verseA: {
      reference: 'Romanos 5:14',
      text: 'Sin embargo, la muerte reinó desde Adán hasta Moisés, aun en los que no pecaron con una transgresión semejante a la de Adán, el cual es figura del que había de venir.',
    },
    verseB: {
      reference: '1 Corintios 15:45-47',
      text: 'Fue hecho el primer hombre Adán alma viviente; el postrer Adán, espíritu vivificante. Mas lo espiritual no es primero, sino lo animal; luego lo espiritual. El primer hombre es de la tierra, terrenal; el segundo hombre, que es el Señor, es del cielo.',
    },
    description: 'Pablo establece el paralelismo fundamental entre Adán y Cristo: así como por un hombre entró el pecado y la muerte, por un hombre viene la gracia y la vida. Cristo es el nuevo Adán que recapitula y redime lo que el primero perdió.',
  },
  {
    id: 2,
    title: 'El arca de Noé, tipo del bautismo',
    type: 'tipología',
    theme: 'bautismo y salvación',
    importance: 4,
    verseA: {
      reference: '1 Pedro 3:20-21',
      text: 'Que en otro tiempo fueron desobedientes, cuando una vez esperaba la paciencia de Dios en los días de Noé, mientras se preparaba el arca, en la cual pocas personas, es decir, ocho, fueron salvas por agua. El bautismo que corresponde a esto ahora nos salva.',
    },
    verseB: {
      reference: 'Génesis 7:1',
      text: 'Dijo luego el Señor a Noé: Entra tú y toda tu casa en el arca; porque a ti he visto justo delante de mí en esta generación.',
    },
    description: 'Pedro ve en el diluvio y el arca una prefiguración del bautismo: las aguas que destruyeron al mundo pecador son las mismas que salvaron a los justos dentro del arca. El bautismo cristiano salva de manera análoga, a través del agua y la resurrección de Cristo.',
  },
  {
    id: 3,
    title: 'Abraham e Isaac: tipo de la Pasión',
    type: 'tipología',
    theme: 'sacrificio y redención',
    importance: 5,
    verseA: {
      reference: 'Hebreos 11:17-19',
      text: 'Por la fe Abraham, cuando fue probado, ofreció a Isaac; y el que había recibido las promesas ofrecía su unigénito, habiéndosele dicho: En Isaac te será llamada descendencia; pensando que Dios es poderoso para levantar aun de entre los muertos, de donde, en sentido figurado, también le volvió a recibir.',
    },
    verseB: {
      reference: 'Génesis 22:9-13',
      text: 'Cuando llegaron al lugar que Dios le había dicho, edificó allí Abraham un altar, y compuso la leña, y ató a Isaac su hijo, y lo puso en el altar sobre la leña. Y extendió Abraham su mano y tomó el cuchillo para degollar a su hijo. Entonces el ángel del Señor le dio voces desde el cielo... y vio detrás de sí un carnero trabado en un zarzal por sus cuernos.',
    },
    description: 'El sacrificio de Isaac en el monte Moriah prefigura el sacrificio de Jesús en el Calvario, también en Jerusalén. Abraham, que sube con su hijo llevando la leña, anticipa a Dios Padre que entrega a su Hijo único. El carnero sustituto anuncia al Cordero que quita el pecado del mundo.',
  },
  {
    id: 4,
    title: 'Melquisedec, tipo de Cristo sacerdote eterno',
    type: 'tipología',
    theme: 'sacerdocio',
    importance: 5,
    verseA: {
      reference: 'Hebreos 7:1-3',
      text: 'Porque este Melquisedec, rey de Salem, sacerdote del Dios altísimo, que salió a recibir a Abraham que volvía de la derrota de los reyes, y le bendijo, a quien asimismo dio Abraham los diezmos de todo... sin padre, sin madre, sin genealogía; que ni tiene principio de días, ni fin de vida, sino hecho semejante al Hijo de Dios, permanece sacerdote para siempre.',
    },
    verseB: {
      reference: 'Génesis 14:18-20',
      text: 'Entonces Melquisedec, rey de Salem y sacerdote del Dios Altísimo, sacó pan y vino; y le bendijo, diciendo: Bendito sea Abram del Dios Altísimo, creador de los cielos y de la tierra; y bendito sea el Dios Altísimo, que entregó tus enemigos en tu mano. Y le dio Abram los diezmos de todo.',
    },
    description: 'Melquisedec es la figura tipológica más enigmática del AT: rey de paz, sacerdote sin genealogía, que ofrece pan y vino. La carta a los Hebreos lo desarrolla extensamente como tipo de Cristo, cuyo sacerdocio eterno trasciende el levítico.',
  },
  {
    id: 5,
    title: 'El cordero pascual, tipo de Cristo',
    type: 'tipología',
    theme: 'pascua y redención',
    importance: 5,
    verseA: {
      reference: '1 Corintios 5:7',
      text: 'Limpiaos, pues, de la vieja levadura, para que seáis nueva masa, sin levadura como sois; porque nuestra pascua, que es Cristo, ya fue sacrificada por nosotros.',
    },
    verseB: {
      reference: 'Éxodo 12:3-7',
      text: 'Hablad a toda la congregación de Israel, diciendo: En el diez de este mes tómese cada uno un cordero... sin defecto, macho de un año... Y lo guardaréis hasta el día catorce de este mes, y lo inmolará toda la congregación del pueblo de Israel al anochecer. Y tomarán de la sangre, y la pondrán en los dos postes y en el dintel de las casas.',
    },
    description: 'El cordero sin defecto de la Pascua judía, cuya sangre libró a Israel de la muerte y cuya carne fortaleció para el éxodo, es el tipo por excelencia de Cristo. Pablo lo declara explícitamente: Cristo es nuestra Pascua inmolada. La Eucaristía perpetúa este misterio.',
  },
  {
    id: 6,
    title: 'El maná en el desierto, tipo de la Eucaristía',
    type: 'tipología',
    theme: 'eucaristía',
    importance: 5,
    verseA: {
      reference: 'Juan 6:31-35',
      text: 'Nuestros padres comieron el maná en el desierto, como está escrito: Pan del cielo les dio a comer. Y Jesús les dijo: De cierto, de cierto os digo: No os dio Moisés el pan del cielo, mas mi Padre os da el verdadero pan del cielo. Porque el pan de Dios es aquel que descendió del cielo y da vida al mundo... Yo soy el pan de vida; el que a mí viene, nunca tendrá hambre.',
    },
    verseB: {
      reference: 'Éxodo 16:14-15',
      text: 'Y cuando el rocío cesó de descender, he aquí sobre la faz del desierto una cosa menuda, redonda, menuda como una escarcha sobre la tierra. Y viéndolo los hijos de Israel, se dijeron unos a otros: ¿Qué es esto? porque no sabían qué era. Entonces Moisés les dijo: Es el pan que el Señor os da para comer.',
    },
    description: 'Jesús mismo establece la tipología: el maná que alimentó a Israel en el desierto durante cuarenta años prefigura la Eucaristía, el Pan verdadero bajado del cielo. Como el maná era alimento para el camino, el Cuerpo de Cristo es viático para la vida eterna.',
  },
  {
    id: 7,
    title: 'La serpiente de bronce, tipo de la Cruz',
    type: 'tipología',
    theme: 'crucifixión y salvación',
    importance: 5,
    verseA: {
      reference: 'Juan 3:14-15',
      text: 'Y como Moisés levantó la serpiente en el desierto, así es necesario que el Hijo del Hombre sea levantado, para que todo aquel que en él cree no se pierda, mas tenga vida eterna.',
    },
    verseB: {
      reference: 'Números 21:8-9',
      text: 'Y el Señor dijo a Moisés: Hazte una serpiente ardiente, y ponla sobre una asta; y cualquiera que fuere mordido y mirare a ella, vivirá. Y Moisés hizo una serpiente de bronce, y la puso sobre una asta; y cuando alguna serpiente mordía a alguno, miraba a la serpiente de bronce, y vivía.',
    },
    description: 'Jesús mismo establece esta tipología con Nicodemo: así como mirar a la serpiente de bronce levantada curaba la mordedura mortal, mirar con fe al Hijo del Hombre elevado en la cruz trae la vida eterna. La paradoja es la misma: lo que representa el mal se convierte en instrumento de salvación.',
  },
  {
    id: 8,
    title: 'El tabernáculo, tipo de la Encarnación',
    type: 'tipología',
    theme: 'encarnación',
    importance: 4,
    verseA: {
      reference: 'Juan 1:14',
      text: 'Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad.',
    },
    verseB: {
      reference: 'Éxodo 25:8-9',
      text: 'Y harán un santuario para mí, y habitaré en medio de ellos. Conforme a todo lo que yo te mostraré, el diseño del tabernáculo, y el diseño de todos sus utensilios, así lo haréis.',
    },
    description: 'El verbo griego "habitó" (eskénosen) en Juan 1:14 significa literalmente "puso su tienda/tabernáculo". Juan evoca conscientemente el tabernáculo del desierto donde habitaba la gloria de Dios (la Shekináh). En la Encarnación, el Hijo eterno pone su tabernáculo en la carne humana.',
  },
  {
    id: 9,
    title: 'El sumo sacerdote en el Santo de los Santos, tipo de Cristo',
    type: 'tipología',
    theme: 'sacerdocio y mediación',
    importance: 4,
    verseA: {
      reference: 'Hebreos 4:14-15',
      text: 'Por tanto, teniendo un gran sumo sacerdote que traspasó los cielos, Jesús el Hijo de Dios, retengamos nuestra profesión. Porque no tenemos un sumo sacerdote que no pueda compadecerse de nuestras debilidades, sino uno que fue tentado en todo según nuestra semejanza, pero sin pecado.',
    },
    verseB: {
      reference: 'Levítico 16:2-3',
      text: 'Y el Señor dijo a Moisés: Di a Aarón tu hermano, que no en todo tiempo entre al santuario detrás del velo, delante del propiciatorio que está sobre el arca, para que no muera; porque yo apareceré en la nube sobre el propiciatorio. Con esto entrará Aarón al santuario: con un becerro para expiación.',
    },
    description: 'El sumo sacerdote entraba una sola vez al año al Sancta Sanctorum para ofrecer la sangre expiatoria. Hebreos ve en este ritual el tipo del sacerdocio de Cristo, que entró una sola vez —con su propia sangre— al santuario celestial, obteniendo una redención eterna.',
  },
  {
    id: 10,
    title: 'Jonás, tipo de la muerte y resurrección de Cristo',
    type: 'tipología',
    theme: 'resurrección',
    importance: 5,
    verseA: {
      reference: 'Mateo 12:40',
      text: 'Porque como estuvo Jonás en el vientre del gran pez tres días y tres noches, así estará el Hijo del Hombre en el corazón de la tierra tres días y tres noches.',
    },
    verseB: {
      reference: 'Jonás 2:1-2',
      text: 'Entonces oró Jonás al Señor su Dios desde el vientre del pez, y dijo: Invoqué en mi angustia al Señor, y él me oyó; desde el seno del Seol clamé, y mi voz oíste.',
    },
    description: 'Jesús mismo señala a Jonás como la única señal que se dará a su generación. Los tres días y tres noches en el vientre del pez prefiguran los tres días de la sepultura de Cristo y su resurrección gloriosa. Es la tipología pascual por excelencia.',
  },
  {
    id: 11,
    title: 'El templo de Salomón, tipo del cuerpo de Cristo',
    type: 'tipología',
    theme: 'templo e iglesia',
    importance: 4,
    verseA: {
      reference: 'Juan 2:19-21',
      text: 'Respondió Jesús y les dijo: Destruid este templo, y en tres días lo levantaré. Dijeron luego los judíos: En cuarenta y seis años fue edificado este templo, ¿y tú en tres días lo levantarás? Mas él hablaba del templo de su cuerpo.',
    },
    verseB: {
      reference: '1 Reyes 6:1',
      text: 'En el año cuatrocientos ochenta después que los hijos de Israel salieron de Egipto, en el cuarto año del reino de Salomón sobre Israel, en el mes de Zif, que es el mes segundo, él comenzó a edificar la casa del Señor.',
    },
    description: 'El templo de Jerusalén, lugar de la presencia de Dios en medio de su pueblo, es el tipo del cuerpo de Cristo, verdadero templo donde habita la plenitud de la divinidad. Al destruir este "templo" (la Pasión) y levantarlo en tres días (Resurrección), Jesús inaugura el culto en espíritu y verdad.',
  },
  {
    id: 12,
    title: 'José, tipo de Cristo vendido y exaltado',
    type: 'tipología',
    theme: 'pasión y gloria',
    importance: 4,
    verseA: {
      reference: 'Hechos 7:9-10',
      text: 'Los patriarcas, movidos por envidia, vendieron a José para Egipto; pero Dios estaba con él, y le libró de todas sus tribulaciones, y le dio gracia y sabiduría delante de Faraón rey de Egipto, el cual lo puso por gobernador sobre Egipto y sobre toda su casa.',
    },
    verseB: {
      reference: 'Génesis 37:28',
      text: 'Y cuando pasaron los madianitas mercaderes, sacaron ellos a José de la cisterna, y le llevaron arriba, y le vendieron a los ismaelitas por veinte piezas de plata. Y llevaron a José a Egipto.',
    },
    description: 'José es uno de los tipos más ricos del AT: vendido por sus hermanos, sufrió la prisión injusta pero fue exaltado al segundo lugar del reino para salvar a todos. Cristo fue vendido por los suyos, sufrió la muerte injusta y fue exaltado a la diestra del Padre para ser Salvador de todos.',
  },
  {
    id: 13,
    title: 'Josué, tipo de Jesús que introduce al verdadero descanso',
    type: 'tipología',
    theme: 'salvación y descanso',
    importance: 4,
    verseA: {
      reference: 'Hebreos 4:8-9',
      text: 'Porque si Josué les hubiera dado el reposo, no hablaría después de otro día. Por tanto, queda un reposo para el pueblo de Dios.',
    },
    verseB: {
      reference: 'Josué 1:6',
      text: 'Esfuérzate y sé valiente; porque tú repartirás a este pueblo por heredad la tierra de la cual juré a sus padres que la daría a ellos.',
    },
    description: 'El nombre Josué (Yeshúa en hebreo) es el mismo que Jesús en griego. Josué introdujo a Israel en la tierra prometida, tipo del reposo terreno; pero Hebreos enseña que ese descanso era solo figura del verdadero reposo escatológico que introduce Jesús, el nuevo Josué.',
  },
  {
    id: 14,
    title: 'Elías, tipo de Juan el Bautista',
    type: 'tipología',
    theme: 'precursor',
    importance: 4,
    verseA: {
      reference: 'Mateo 17:12-13',
      text: 'Os digo que Elías ya vino, y no le conocieron, sino que hicieron con él todo lo que quisieron; así también el Hijo del Hombre padecerá de ellos. Entonces los discípulos comprendieron que les había hablado de Juan el Bautista.',
    },
    verseB: {
      reference: '1 Reyes 18:17-18',
      text: 'Cuando Acab vio a Elías, le dijo: ¿Eres tú el que turbas a Israel? Y él respondió: Yo no he turbado a Israel, sino tú y la casa de tu padre, dejando los mandamientos del Señor y siguiendo a los baales.',
    },
    description: 'Elías confrontó a los reyes idólatras y preparó el camino del Señor con celo profético. Juan el Bautista actuó "en el espíritu y el poder de Elías" (Lucas 1:17), enfrentando a Herodes y preparando la venida del Mesías. Jesús identifica explícitamente a Juan con Elías.',
  },
  {
    id: 15,
    title: 'La roca en el desierto, tipo de Cristo',
    type: 'tipología',
    theme: 'eucaristía y bautismo',
    importance: 4,
    verseA: {
      reference: '1 Corintios 10:4',
      text: 'Y todos bebieron la misma bebida espiritual; porque bebían de la roca espiritual que los seguía, y la roca era Cristo.',
    },
    verseB: {
      reference: 'Éxodo 17:6',
      text: 'He aquí que yo estaré delante de ti allí sobre la peña en Horeb; y golpearás la peña, y saldrán de ella aguas, y beberá el pueblo. Y Moisés lo hizo así en presencia de los ancianos de Israel.',
    },
    description: 'Pablo ve en la roca herida de Horeb un tipo de Cristo: así como de la roca golpeada brotó agua para salvar al pueblo en el desierto, del costado traspasado de Cristo en la cruz brotaron sangre y agua, signos de los sacramentos que nutren a la Iglesia.',
  },
  {
    id: 16,
    title: 'David, tipo de Cristo rey',
    type: 'tipología',
    theme: 'realeza mesiánica',
    importance: 4,
    verseA: {
      reference: 'Lucas 1:32',
      text: 'Este será grande, y será llamado Hijo del Altísimo; y el Señor Dios le dará el trono de David su padre.',
    },
    verseB: {
      reference: '1 Samuel 16:13',
      text: 'Y Samuel tomó el cuerno del aceite, y lo ungió en medio de sus hermanos; y desde aquel día en adelante el Espíritu del Señor vino sobre David.',
    },
    description: 'David, el pastor ungido que se convierte en rey de Israel, es el tipo del Mesías por excelencia. Como David venció a Goliat liberando al pueblo, Cristo venció al pecado y a la muerte. El trono de David que Dios prometió eterno se cumple definitivamente en Cristo.',
  },
  {
    id: 17,
    title: 'La circuncisión, tipo del bautismo',
    type: 'tipología',
    theme: 'bautismo y alianza',
    importance: 4,
    verseA: {
      reference: 'Colosenses 2:11-12',
      text: 'En él también fuisteis circuncidados con circuncisión no hecha a mano, al echar de vosotros el cuerpo pecaminoso carnal, en la circuncisión de Cristo; sepultados con él en el bautismo, en el cual fuisteis también resucitados con él, mediante la fe en el poder de Dios que le levantó de los muertos.',
    },
    verseB: {
      reference: 'Génesis 17:10-11',
      text: 'Este es mi pacto, que guardaréis entre mí y vosotros y tu descendencia después de ti: Será circuncidado todo varón de entre vosotros. Circuncidaréis, pues, la carne de vuestro prepucio, y será por señal del pacto entre mí y vosotros.',
    },
    description: 'Pablo enseña que el bautismo es la "circuncisión de Cristo": así como la circuncisión introducía en la alianza del AT y marcaba al miembro del pueblo de Dios, el bautismo incorpora a la nueva alianza y sella al cristiano como hijo de Dios.',
  },
  {
    id: 18,
    title: 'Eliseo resucita al hijo de la sunamita, tipo de Jesús',
    type: 'tipología',
    theme: 'resurrección y misericordia',
    importance: 3,
    verseA: {
      reference: 'Lucas 7:14-15',
      text: 'Y acercándose, tocó el féretro; y los que lo llevaban se detuvieron. Y dijo: Joven, a ti te digo, levántate. Entonces se incorporó el que había muerto, y comenzó a hablar. Y lo dio a su madre.',
    },
    verseB: {
      reference: '2 Reyes 4:34-35',
      text: 'Luego subió y se tendió sobre el niño, poniendo su boca sobre la boca de él, y sus ojos sobre sus ojos, y sus manos sobre las manos suyas; así se tendió sobre él, y el cuerpo del niño entró en calor. Volviéndose luego, se paseó por la casa a una y otra parte, y después subió, y se tendió sobre él nuevamente; y el niño estornudó siete veces, y abrió sus ojos.',
    },
    description: 'Lucas subraya el paralelo entre Jesús y Eliseo: ambos resucitan al hijo único de una viuda. La resurrección del hijo de Naín por Jesús supera la tipología: Eliseo actuó por intercesión física y prolongada, mientras Jesús resucita con sola su palabra y de camino, por misericordia gratuita.',
  },
  {
    id: 19,
    title: 'El arca de la alianza, tipo de María',
    type: 'tipología',
    theme: 'María y la alianza',
    importance: 4,
    verseA: {
      reference: 'Lucas 1:39-44',
      text: 'En aquellos días, levantándose María, fue de prisa a la montaña, a una ciudad de Judá... Y aconteció que cuando oyó Elisabet la salutación de María, la criatura saltó en su vientre; y Elisabet fue llena del Espíritu Santo... ¿Por qué se me concede esto a mí, que la madre de mi Señor venga a mí?',
    },
    verseB: {
      reference: '2 Samuel 6:9-11',
      text: '¿Cómo ha de venir a mí el arca del Señor? Y no quiso David llevar el arca del Señor a la ciudad de David, sino que la llevó a casa de Obed-edom... y el Señor bendijo a Obed-edom y a toda su casa.',
    },
    description: 'Los paralelos son notables: el arca trasladada a Judá – María viaja a Judá; David exclama "¿Cómo vendrá a mí el arca?" – Elisabet pregunta "¿Por qué la madre de mi Señor viene a mí?"; el arca permanece tres meses – María permanece tres meses. María es el nuevo arca que lleva al Señor.',
  },
  {
    id: 20,
    title: 'Salomón y su sabiduría, tipo de Cristo',
    type: 'tipología',
    theme: 'sabiduría divina',
    importance: 3,
    verseA: {
      reference: 'Mateo 12:42',
      text: 'La reina del Sur se levantará en el juicio con esta generación, y la condenará; porque ella vino de los fines de la tierra para oír la sabiduría de Salomón, y he aquí más que Salomón en este lugar.',
    },
    verseB: {
      reference: '1 Reyes 4:29-30',
      text: 'Y Dios dio a Salomón sabiduría y prudencia muy grandes, y anchura de corazón como la arena que está a la orilla del mar. Era mayor la sabiduría de Salomón que la de todos los orientales, y que toda la sabiduría de los egipcios.',
    },
    description: 'Salomón, el rey sabio por antonomasia cuya fama llegó a los confines de la tierra, prefigura a Cristo, la Sabiduría encarnada. Jesús declara que "algo mayor que Salomón" está aquí. Pablo llamará a Cristo "poder de Dios y sabiduría de Dios" (1 Cor 1:24).',
  },

  // ── CITAS DIRECTAS ────────────────────────────────────────────────

  {
    id: 21,
    title: 'El primer mandamiento: amarás al Señor',
    type: 'cita directa',
    theme: 'amor a Dios',
    importance: 5,
    verseA: {
      reference: 'Mateo 22:37',
      text: 'Jesús le dijo: Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente.',
    },
    verseB: {
      reference: 'Deuteronomio 6:5',
      text: 'Y amarás al Señor tu Dios de todo tu corazón, y de toda tu alma, y con todas tus fuerzas.',
    },
    description: 'Jesús cita el Shemá Israel, la profesión de fe central del judaísmo, como el primer y mayor mandamiento. Este texto era recitado dos veces al día por cada israelita. Jesús no abroga sino que confirma y eleva esta exigencia, añadiendo el amor al prójimo como su complemento inseparable.',
  },
  {
    id: 22,
    title: 'El segundo mandamiento: amarás a tu prójimo',
    type: 'cita directa',
    theme: 'amor al prójimo',
    importance: 5,
    verseA: {
      reference: 'Mateo 22:39',
      text: 'Y el segundo es semejante: Amarás a tu prójimo como a ti mismo.',
    },
    verseB: {
      reference: 'Levítico 19:18',
      text: 'No te vengarás, ni guardarás rencor a los hijos de tu pueblo, sino amarás a tu prójimo como a ti mismo. Yo el Señor.',
    },
    description: 'Jesús eleva este precepto levítico al nivel del amor a Dios, declarando que "de estos dos mandamientos depende toda la ley y los profetas". Pablo lo sintetizará: "El amor es el cumplimiento de la ley" (Rom 13:10).',
  },
  {
    id: 23,
    title: 'No solo de pan vive el hombre',
    type: 'cita directa',
    theme: 'tentación y palabra de Dios',
    importance: 4,
    verseA: {
      reference: 'Mateo 4:4',
      text: 'Él respondió y dijo: Escrito está: No solo de pan vivirá el hombre, sino de toda palabra que sale de la boca de Dios.',
    },
    verseB: {
      reference: 'Deuteronomio 8:3',
      text: 'Y te afligió, y te hizo tener hambre, y te sustentó con maná, comida que no conocías tú, ni tus padres la habían conocido, para hacerte saber que no solo de pan vivirá el hombre, mas de todo lo que sale de la boca del Señor vivirá el hombre.',
    },
    description: 'En la primera tentación, Jesús responde al diablo con Deuteronomio. Donde Israel murmuró por el pan en el desierto, Jesús confía en el Padre. Como nuevo Israel, Jesús recapitula y supera la prueba del desierto, apoyándose en la Palabra de Dios.',
  },
  {
    id: 24,
    title: 'No tentarás al Señor tu Dios',
    type: 'cita directa',
    theme: 'tentación y confianza',
    importance: 4,
    verseA: {
      reference: 'Mateo 4:7',
      text: 'Jesús le dijo: Escrito está también: No tentarás al Señor tu Dios.',
    },
    verseB: {
      reference: 'Deuteronomio 6:16',
      text: 'No tentaréis al Señor vuestro Dios, como lo tentasteis en Masah.',
    },
    description: 'Ante la segunda tentación —arrojarse del pináculo del templo para que los ángeles lo sostengan— Jesús cita el mandato de no tentar a Dios. Israel tentó a Dios en Masah exigiendo pruebas de su presencia; Jesús no exige señales sino confía incondicionalmente.',
  },
  {
    id: 25,
    title: 'Al Señor tu Dios adorarás y a él solo servirás',
    type: 'cita directa',
    theme: 'adoración exclusiva',
    importance: 4,
    verseA: {
      reference: 'Mateo 4:10',
      text: 'Entonces Jesús le dijo: Vete, Satanás, porque escrito está: Al Señor tu Dios adorarás, y a él solo servirás.',
    },
    verseB: {
      reference: 'Deuteronomio 6:13-14',
      text: 'Al Señor tu Dios temerás, y a él solo servirás, y por su nombre jurarás. No andaréis en pos de dioses ajenos, de los dioses de los pueblos que están en vuestros alrededores.',
    },
    description: 'La tercera y más radical tentación —adorar a Satanás a cambio de todos los reinos— recibe la respuesta del primer mandamiento en su expresión más directa. Jesús defiende la soberanía absoluta de Dios frente a cualquier pretensión idolátrica.',
  },
  {
    id: 26,
    title: 'El Dios de Abraham, Isaac y Jacob es Dios de vivos',
    type: 'cita directa',
    theme: 'resurrección y vida eterna',
    importance: 4,
    verseA: {
      reference: 'Mateo 22:32',
      text: 'Yo soy el Dios de Abraham, el Dios de Isaac y el Dios de Jacob. Dios no es Dios de muertos, sino de vivos.',
    },
    verseB: {
      reference: 'Éxodo 3:6',
      text: 'Y dijo: Yo soy el Dios de tu padre, Dios de Abraham, Dios de Isaac, y Dios de Jacob. Entonces Moisés cubrió su rostro, porque tuvo miedo de mirar a Dios.',
    },
    description: 'Jesús usa la revelación de la zarza ardiente para probar la resurrección ante los saduceos: si Dios se llama "Dios de Abraham" en tiempo presente siglos después de su muerte, es porque Abraham vive. La identidad de Dios garantiza la resurrección de los muertos.',
  },
  {
    id: 27,
    title: 'Los dos serán una sola carne',
    type: 'cita directa',
    theme: 'matrimonio',
    importance: 4,
    verseA: {
      reference: 'Mateo 19:4-5',
      text: 'Él, respondiendo, les dijo: ¿No habéis leído que el que los hizo al principio, varón y hembra los hizo, y dijo: Por esto el hombre dejará padre y madre, y se unirá a su mujer, y los dos serán una sola carne?',
    },
    verseB: {
      reference: 'Génesis 2:24',
      text: 'Por tanto, dejará el hombre a su padre y a su madre, y se unirá a su mujer, y serán una sola carne.',
    },
    description: 'Para defender la indisolubilidad del matrimonio, Jesús remonta a la voluntad del Creador en el Génesis, antes del Sinaí. El matrimonio como unión indisoluble es anterior a la ley de Moisés y expresión del designio original de Dios. Pablo desarrollará esta tipología aplicándola a Cristo y la Iglesia (Ef 5:31-32).',
  },
  {
    id: 28,
    title: 'La fe de Abraham le fue contada como justicia',
    type: 'cita directa',
    theme: 'justificación por la fe',
    importance: 5,
    verseA: {
      reference: 'Romanos 4:3',
      text: 'Porque ¿qué dice la Escritura? Creyó Abraham a Dios, y le fue contado por justicia.',
    },
    verseB: {
      reference: 'Génesis 15:6',
      text: 'Y creyó a Jehová, y le fue contado por justicia.',
    },
    description: 'Este versículo del Génesis es el argumento central de Pablo en Romanos y Gálatas para demostrar que la justificación es por la fe y no por las obras de la ley: Abraham fue justificado antes de la circuncisión y antes de la ley de Moisés, solo por su fe en la promesa de Dios.',
  },
  {
    id: 29,
    title: 'El justo por la fe vivirá',
    type: 'cita directa',
    theme: 'justificación por la fe',
    importance: 5,
    verseA: {
      reference: 'Gálatas 3:11',
      text: 'Y que por la ley ninguno se justifica para con Dios, es evidente, porque: El justo por la fe vivirá.',
    },
    verseB: {
      reference: 'Habacuc 2:4',
      text: 'He aquí que aquel cuya alma no es recta, se enorgullece; mas el justo por su fe vivirá.',
    },
    description: 'Pablo cita a Habacuc en tres cartas (Rom, Gal, Heb) como prueba escriturística de la justificación por la fe. La frase ha sido llamada "el texto más influyente del AT" por su papel en la teología paulina y su centralidad en la Reforma del siglo XVI.',
  },
  {
    id: 30,
    title: 'Cristo se hizo maldición por nosotros',
    type: 'cita directa',
    theme: 'pasión y redención',
    importance: 5,
    verseA: {
      reference: 'Gálatas 3:13',
      text: 'Cristo nos redimió de la maldición de la ley, hecho por nosotros maldición (porque está escrito: Maldito todo el que es colgado en un madero).',
    },
    verseB: {
      reference: 'Deuteronomio 21:23',
      text: 'No dejaréis que su cuerpo pase la noche sobre el madero; sin falta lo enterraréis el mismo día, porque maldito por Dios es el colgado; y no contaminaréis vuestra tierra que el Señor tu Dios te da por heredad.',
    },
    description: 'Pablo ve en la ley deuteronómica sobre el colgado una profundísima paradoja: Cristo, al morir colgado en la cruz, asumió sobre sí la maldición de la ley que pesaba sobre la humanidad pecadora, transformándola en bendición. La maldición de la ley es absorbida por el Inocente para libertar a los culpables.',
  },
  {
    id: 31,
    title: 'Honra a tu padre y a tu madre',
    type: 'cita directa',
    theme: 'familia y mandamiento',
    importance: 3,
    verseA: {
      reference: 'Efesios 6:2-3',
      text: 'Honra a tu padre y a tu madre, que es el primer mandamiento con promesa; para que te vaya bien, y seas de larga vida sobre la tierra.',
    },
    verseB: {
      reference: 'Éxodo 20:12',
      text: 'Honra a tu padre y a tu madre, para que tus días se alarguen en la tierra que el Señor tu Dios te da.',
    },
    description: 'Pablo cita el cuarto mandamiento en su exhortación a los hijos dentro del Haustafel (código doméstico), destacando que es el único mandamiento con promesa adjunta. En el NT la obediencia filial no es abolida sino integrada en la nueva ética de la familia cristiana.',
  },
  {
    id: 32,
    title: 'Mía es la venganza, dice el Señor',
    type: 'cita directa',
    theme: 'misericordia y justicia',
    importance: 3,
    verseA: {
      reference: 'Romanos 12:19',
      text: 'No os venguéis vosotros mismos, amados míos, sino dejad lugar a la ira de Dios; porque escrito está: Mía es la venganza, yo pagaré, dice el Señor.',
    },
    verseB: {
      reference: 'Deuteronomio 32:35',
      text: 'Mía es la venganza y la retribución; a su tiempo su pie resbalará, porque el día de su aflicción está cercano, y lo que les está preparado se apresura.',
    },
    description: 'Pablo cita el Cántico de Moisés para fundamentar la prohibición de la venganza personal. Si la justicia pertenece a Dios, el creyente puede renunciar a hacerse justicia por su cuenta y abrazar la lógica del amor al enemigo que Jesús enseñó en el Sermón del Monte.',
  },
  {
    id: 33,
    title: 'Sed santos porque yo soy santo',
    type: 'cita directa',
    theme: 'santidad',
    importance: 4,
    verseA: {
      reference: '1 Pedro 1:15-16',
      text: 'Sino, como aquel que os llamó es santo, sed también vosotros santos en toda vuestra manera de vivir; porque escrito está: Sed santos, porque yo soy santo.',
    },
    verseB: {
      reference: 'Levítico 11:44',
      text: 'Porque yo soy el Señor vuestro Dios; vosotros por tanto os santificaréis, y seréis santos, porque yo soy santo.',
    },
    description: 'Pedro aplica a los cristianos la llamada a la santidad del Código de Santidad levítico. El fundamento de la ética cristiana no es el cumplimiento de normas sino la participación en la santidad misma de Dios, que nos comunicó su propio Espíritu Santo.',
  },
  {
    id: 34,
    title: 'El amor es el cumplimiento de la ley',
    type: 'cita directa',
    theme: 'amor y ley',
    importance: 5,
    verseA: {
      reference: 'Romanos 13:9',
      text: 'Porque: No adulterarás, no matarás, no hurtarás, no dirás falso testimonio, no codiciarás, y cualquier otro mandamiento, en esta sentencia se resume: Amarás a tu prójimo como a ti mismo.',
    },
    verseB: {
      reference: 'Levítico 19:18',
      text: 'No te vengarás, ni guardarás rencor a los hijos de tu pueblo, sino amarás a tu prójimo como a ti mismo. Yo el Señor.',
    },
    description: 'Pablo sintetiza toda la ética del Decálogo en el mandamiento del amor al prójimo de Levítico. Esta hermenéutica de la ley por el amor es la aportación más radical del NT: no abolición de la ley sino su cumplimiento por un principio superior que la resume y supera.',
  },

  // ── PARALELOS TEMÁTICOS ───────────────────────────────────────────

  {
    id: 35,
    title: 'El Verbo creador y el Verbo encarnado',
    type: 'paralelo temático',
    theme: 'creación e incarnación',
    importance: 5,
    verseA: {
      reference: 'Juan 1:1-3',
      text: 'En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios. Este era en el principio con Dios. Todas las cosas por él fueron hechas, y sin él nada de lo que ha sido hecho, fue hecho.',
    },
    verseB: {
      reference: 'Génesis 1:1-3',
      text: 'En el principio creó Dios los cielos y la tierra. Y la tierra estaba desordenada y vacía, y las tinieblas estaban sobre la faz del abismo, y el Espíritu de Dios se movía sobre la faz de las aguas. Y dijo Dios: Sea la luz; y fue la luz.',
    },
    description: 'Juan abre su evangelio con las mismas palabras del Génesis: "En el principio". El paralelo es deliberado: el mismo Verbo que creó el universo mediante la palabra divina es el que se encarna en Jesús. La creación y la nueva creación (redención) son obra del mismo Logos eterno.',
  },
  {
    id: 36,
    title: 'El Espíritu sobre las aguas y sobre Jesús en el bautismo',
    type: 'paralelo temático',
    theme: 'creación y bautismo',
    importance: 4,
    verseA: {
      reference: 'Mateo 3:16',
      text: 'Y Jesús, después que fue bautizado, subió luego del agua; y he aquí los cielos le fueron abiertos, y vio al Espíritu de Dios que descendía como paloma, y venía sobre él.',
    },
    verseB: {
      reference: 'Génesis 1:2',
      text: 'Y la tierra estaba desordenada y vacía, y las tinieblas estaban sobre la faz del abismo, y el Espíritu de Dios se movía sobre la faz de las aguas.',
    },
    description: 'El Espíritu que en la creación se movía sobre las aguas primordiales desciende ahora sobre Jesús en las aguas del Jordán. El bautismo de Jesús inaugura la nueva creación: el Espíritu que animó la primera creación consagra ahora al nuevo Adán para su misión redentora.',
  },
  {
    id: 37,
    title: 'El buen pastor',
    type: 'paralelo temático',
    theme: 'pastoreo y redención',
    importance: 5,
    verseA: {
      reference: 'Juan 10:11',
      text: 'Yo soy el buen pastor; el buen pastor su vida da por las ovejas.',
    },
    verseB: {
      reference: 'Ezequiel 34:11-16',
      text: 'Porque así ha dicho el Señor: He aquí yo, yo mismo buscaré mis ovejas... Yo apacentaré mis ovejas, y yo les daré aprisco, dice el Señor... Buscaré la perdida, y haré volver al redil la descarriada; vendaré la perniquebrada, y fortaleceré la débil.',
    },
    description: 'Ezequiel profetizó que Dios mismo vendría a ser el pastor de Israel después de la traición de los pastores infieles. Jesús reclama para sí ese papel divino con el "Yo soy" (Ego eimi), revelación del nombre divino. El Buen Pastor que da la vida por las ovejas identifica a Jesús con el Dios de Ezequiel.',
  },
  {
    id: 38,
    title: 'La vid de Israel y la vid verdadera',
    type: 'paralelo temático',
    theme: 'fecundidad espiritual',
    importance: 4,
    verseA: {
      reference: 'Juan 15:1-5',
      text: 'Yo soy la vid verdadera, y mi Padre es el labrador... Yo soy la vid, vosotros los sarmientos; el que permanece en mí, y yo en él, éste lleva mucho fruto; porque separados de mí nada podéis hacer.',
    },
    verseB: {
      reference: 'Isaías 5:1-4',
      text: 'Ahora cantaré por mi amado el cántico de mi amado a su viña. Tenía mi amado una viña en una ladera fértil. La había cercado y despedregado y plantado de vides escogidas... Esperaba que diese uvas, y dio uvas silvestres.',
    },
    description: 'Isaías presenta a Israel como la viña de Dios que dio frutos amargos. Jesús se declara la "vid verdadera": él es el Israel fiel, el remanente perfecto que da el fruto que la vid de Israel no pudo dar. Los discípulos, unidos a él como sarmientos, participan de su fecundidad.',
  },
  {
    id: 39,
    title: 'El agua viva en el desierto y el agua de vida eterna',
    type: 'paralelo temático',
    theme: 'agua y vida espiritual',
    importance: 4,
    verseA: {
      reference: 'Juan 4:13-14',
      text: 'Respondió Jesús y le dijo: Cualquiera que bebiere de esta agua, volverá a tener sed; mas el que bebiere del agua que yo le daré, no tendrá sed jamás; sino que el agua que yo le daré será en él una fuente de agua que salte para vida eterna.',
    },
    verseB: {
      reference: 'Isaías 55:1',
      text: 'A todos los sedientos: Venid a las aguas; y los que no tienen dinero, venid, comprad y comed. Venid, comprad sin dinero y sin precio, vino y leche.',
    },
    description: 'Isaías invita a los sedientos a las aguas de la salvación gratuita. Jesús en el diálogo con la samaritana se presenta como fuente de esa agua viva que los profetas anunciaron. El agua del pozo de Jacob quita la sed temporalmente; el Espíritu que Cristo da es manantial de vida eterna.',
  },
  {
    id: 40,
    title: 'Luz de los pueblos',
    type: 'paralelo temático',
    theme: 'luz y revelación',
    importance: 4,
    verseA: {
      reference: 'Juan 8:12',
      text: 'Otra vez Jesús les habló, diciendo: Yo soy la luz del mundo; el que me sigue, no andará en tinieblas, sino que tendrá la luz de la vida.',
    },
    verseB: {
      reference: 'Isaías 9:2',
      text: 'El pueblo que andaba en oscuridad vio una gran luz; los que moraban en tierra de sombra de muerte, una luz resplandeció sobre ellos.',
    },
    description: 'Isaías anuncia la gran luz que brillará sobre Galilea en tinieblas. Mateo aplica este texto al comienzo del ministerio galileo de Jesús (Mt 4:16). Juan muestra a Jesús reclamando para sí este título divino con el "Yo soy" en la fiesta de los Tabernáculos, celebrada con grandes candelabros.',
  },
  {
    id: 41,
    title: 'Los huesos secos y la resurrección espiritual',
    type: 'paralelo temático',
    theme: 'resurrección y nueva vida',
    importance: 4,
    verseA: {
      reference: 'Efesios 2:1-5',
      text: 'Y él os dio vida a vosotros, cuando estabais muertos en vuestros delitos y pecados... Pero Dios, que es rico en misericordia, por su gran amor con que nos amó, aun estando nosotros muertos en pecados, nos dio vida juntamente con Cristo.',
    },
    verseB: {
      reference: 'Ezequiel 37:3-5',
      text: 'Y me dijo: Hijo de hombre, ¿vivirán estos huesos? Y dije: Señor Dios, tú lo sabes. Me dijo entonces: Profetiza sobre estos huesos, y diles: Huesos secos, oíd palabra del Señor. Así ha dicho el Señor a estos huesos: He aquí, yo hago entrar espíritu en vosotros, y viviréis.',
    },
    description: 'La visión de los huesos secos de Ezequiel, que reciben el soplo de Dios y se levantan como ejército, es la gran imagen de la resurrección y restauración de Israel. Pablo la aplica al paso de la muerte espiritual por el pecado a la vida nueva en Cristo: el Espíritu hace lo mismo que hizo con los huesos en la visión.',
  },
  {
    id: 42,
    title: 'El río de vida que fluye del templo',
    type: 'paralelo temático',
    theme: 'nueva creación',
    importance: 4,
    verseA: {
      reference: 'Apocalipsis 22:1-2',
      text: 'Después me mostró un río limpio de agua de vida, resplandeciente como cristal, que salía del trono de Dios y del Cordero. En medio de la calle de la ciudad, y a uno y otro lado del río, estaba el árbol de la vida, que produce doce frutos... y las hojas del árbol eran para la sanidad de las naciones.',
    },
    verseB: {
      reference: 'Ezequiel 47:1-9',
      text: 'Me hizo volver a la entrada de la casa; y he aquí aguas que salían de debajo del umbral de la casa hacia el oriente... y todo ser viviente que nadare en cualesquiera lugar por donde entraren estos dos ríos, vivirá.',
    },
    description: 'Ezequiel ve un río de vida que brota del templo escatológico y fecundiza todo lo que toca. El Apocalipsis retoma la imagen y la cumple: el río brota del trono de Dios y del Cordero en la nueva Jerusalén, regando el árbol de la vida. Es la plenitud de lo que el templo y sus ritos prefiguraban.',
  },
  {
    id: 43,
    title: 'El árbol de la vida: de Edén a la nueva Jerusalén',
    type: 'paralelo temático',
    theme: 'nueva creación',
    importance: 4,
    verseA: {
      reference: 'Apocalipsis 22:2',
      text: 'En medio de la calle de la ciudad, y a uno y otro lado del río, estaba el árbol de la vida, que produce doce frutos, dando cada mes su fruto; y las hojas del árbol eran para la sanidad de las naciones.',
    },
    verseB: {
      reference: 'Génesis 2:9',
      text: 'Y el Señor Dios hizo nacer de la tierra todo árbol delicioso a la vista, y bueno para comer; también el árbol de vida en medio del huerto, y el árbol de la ciencia del bien y del mal.',
    },
    description: 'La Biblia comienza y termina con el árbol de la vida. Expulsado del Edén para que el hombre no tomara del árbol de la vida en estado de pecado (Gn 3:22-24), el acceso al árbol queda cerrado. El Apocalipsis promete que al vencedor "le daré a comer del árbol de la vida, el cual está en medio del paraíso de Dios" (Ap 2:7).',
  },
  {
    id: 44,
    title: 'El libro de la vida: registro de los redimidos',
    type: 'paralelo temático',
    theme: 'salvación y juicio final',
    importance: 4,
    verseA: {
      reference: 'Apocalipsis 20:12-15',
      text: 'Y vi a los muertos, grandes y pequeños, de pie ante Dios; y los libros fueron abiertos, y otro libro fue abierto, el cual es el libro de la vida; y fueron juzgados los muertos por las cosas que estaban escritas en los libros, según sus obras.',
    },
    verseB: {
      reference: 'Éxodo 32:32-33',
      text: 'Que perdones ahora su pecado, y si no, ráeme ahora de tu libro que has escrito. El Señor respondió a Moisés: Al que pecare contra mí, a éste raeré yo de mi libro.',
    },
    description: 'Ya en el Sinaí, Moisés conocía la imagen del libro divino en el que están escritos los nombres de los redimidos. El Apocalipsis elabora esta imagen en el juicio final: el libro de la vida es el registro de quienes pertenecen a Dios y cuyo nombre no será borrado.',
  },
  {
    id: 45,
    title: 'El banquete mesiánico',
    type: 'paralelo temático',
    theme: 'escatología y eucaristía',
    importance: 4,
    verseA: {
      reference: 'Mateo 22:2-4',
      text: 'El reino de los cielos es semejante a un rey que hizo fiesta de bodas a su hijo; y envió sus siervos a llamar a los convidados a las bodas; mas éstos no quisieron venir. Volvió a enviar otros siervos, diciendo: Decid a los convidados: He aquí, he preparado mi comida.',
    },
    verseB: {
      reference: 'Isaías 25:6-8',
      text: 'Y el Señor de los ejércitos hará en este monte a todos los pueblos banquete de manjares suculentos, banquete de vinos refinados, de gruesos tuétanos y de vinos purificados. Y destruirá en este monte la cubierta con que están cubiertos todos los pueblos, y el velo que envuelve a todas las naciones. Destruirá a la muerte para siempre.',
    },
    description: 'Isaías profetiza el gran banquete escatológico que Dios preparará para todos los pueblos en el monte Sión, banquete que incluye la victoria sobre la muerte. Jesús convierte esta imagen en la parábola del banquete de bodas del rey: el banquete es el reino de Dios, y los que rechazan la invitación se excluyen a sí mismos.',
  },

  // ── ALUSIONES ─────────────────────────────────────────────────────

  {
    id: 46,
    title: 'La cena pascual y la institución de la Eucaristía',
    type: 'alusión',
    theme: 'eucaristía y pascua',
    importance: 5,
    verseA: {
      reference: '1 Corintios 11:23-26',
      text: 'Porque yo recibí del Señor lo que también os he enseñado: Que el Señor Jesús, la noche que fue entregado, tomó pan; y habiendo dado gracias, lo partió, y dijo: Tomad, comed; esto es mi cuerpo que por vosotros es partido; haced esto en memoria de mí.',
    },
    verseB: {
      reference: 'Éxodo 12:14',
      text: 'Y este día os será en memoria, y lo celebraréis como fiesta solemne para el Señor durante vuestras generaciones; por estatuto perpetuo lo celebraréis.',
    },
    description: 'La Eucaristía nació en el contexto de la cena pascual judía, que celebraba el éxodo como "memorial" (zikkaron) de la liberación de Egipto. Jesús transforma el memorial del éxodo en memorial de su propio éxodo —su Pasión, Muerte y Resurrección— que libera definitivamente a la humanidad.',
  },
  {
    id: 47,
    title: 'La transfiguración y la teofanía del Sinaí',
    type: 'alusión',
    theme: 'teofanía y gloria divina',
    importance: 4,
    verseA: {
      reference: 'Mateo 17:1-5',
      text: 'Seis días después, Jesús tomó a Pedro, a Jacobo y a Juan su hermano, y los llevó aparte a un monte alto; y se transfiguró delante de ellos, y resplandeció su rostro como el sol, y sus vestidos se hicieron blancos como la luz... Y he aquí una voz desde la nube, que decía: Este es mi Hijo amado, en quien tengo complacencia; a él oíd.',
    },
    verseB: {
      reference: 'Éxodo 24:15-18',
      text: 'Y Moisés subió al monte, y una nube cubrió el monte. Y la gloria del Señor reposó sobre el monte Sinaí, y la nube lo cubrió por seis días; y al séptimo día llamó al Señor a Moisés desde en medio de la nube. Y el aspecto de la gloria del Señor era como un fuego abrasador en la cumbre del monte.',
    },
    description: 'Seis días, un monte alto, la nube que envuelve, la voz divina: los paralelos entre la transfiguración y la teofanía del Sinaí son precisos. Jesús aparece junto a Moisés y Elías —representantes de la Ley y los Profetas— revelando que él es la clave que los cumple y supera.',
  },
  {
    id: 48,
    title: 'Los cuarenta días de Jesús y los cuarenta años de Israel',
    type: 'alusión',
    theme: 'prueba y fidelidad',
    importance: 4,
    verseA: {
      reference: 'Mateo 4:2',
      text: 'Y después de haber ayunado cuarenta días y cuarenta noches, tuvo hambre.',
    },
    verseB: {
      reference: 'Deuteronomio 8:2',
      text: 'Y te acordarás de todo el camino por donde te ha traído el Señor tu Dios estos cuarenta años en el desierto, para afligirte, para probarte, para saber lo que había en tu corazón, si habías de guardar o no sus mandamientos.',
    },
    description: 'Jesús recapitula en cuarenta días la prueba de cuarenta años de Israel en el desierto. Donde Israel fracasó en las tres tentaciones (pan, tentación a Dios, idolatría), Jesús permanece fiel. Como nuevo Israel, supera las pruebas con la Palabra de Dios y puede iniciar el verdadero éxodo hacia la Tierra Prometida del Reino.',
  },
  {
    id: 49,
    title: 'La paloma del bautismo y la paloma de Noé',
    type: 'alusión',
    theme: 'bautismo y nueva creación',
    importance: 3,
    verseA: {
      reference: 'Marcos 1:10',
      text: 'Y luego, cuando subía del agua, vio abrirse los cielos, y al Espíritu como paloma que descendía sobre él.',
    },
    verseB: {
      reference: 'Génesis 8:10-11',
      text: 'Esperó aún otros siete días, y volvió a enviar la paloma fuera del arca. Y la paloma volvió a él a la hora de la tarde; y he aquí que traía una hoja de olivo en el pico, y entendió Noé que las aguas se habían retirado de sobre la tierra.',
    },
    description: 'La paloma que anuncia el fin del diluvio y el comienzo de la nueva creación es figura del Espíritu que desciende sobre Jesús en el Jordán. Así como la paloma de Noé anunció que las aguas de la destrucción habían cedido, el Espíritu-paloma del bautismo anuncia el inicio de la nueva creación en Cristo.',
  },
  {
    id: 50,
    title: 'La nueva Jerusalén y la promesa a Sión',
    type: 'alusión',
    theme: 'nueva creación',
    importance: 4,
    verseA: {
      reference: 'Apocalipsis 21:2',
      text: 'Y yo Juan vi la santa ciudad, la nueva Jerusalén, descender del cielo de Dios, dispuesta como una esposa ataviada para su marido.',
    },
    verseB: {
      reference: 'Isaías 54:11-12',
      text: 'Oh tú, afligida, tempestuosa y no consolada; he aquí que yo cimentaré tus piedras sobre carbunclo, y sobre zafiros te fundaré. Tus ventanas pondré de piedras preciosas, tus puertas de piedras de carbunclo, y toda tu muralla de piedras preciosas.',
    },
    description: 'Isaías promete la restauración y embellecimiento de Sión con piedras preciosas. El Apocalipsis retoma esta imagen para describir la nueva Jerusalén celestial, esposa del Cordero, adornada de doce tipos de piedras preciosas. Lo que Isaías veía como restauración histórica de Judá se cumple escatológicamente en la ciudad de Dios.',
  },
  {
    id: 51,
    title: 'La multiplicación de los panes y el maná',
    type: 'alusión',
    theme: 'eucaristía y providencia',
    importance: 4,
    verseA: {
      reference: 'Juan 6:1-14',
      text: 'Tomó entonces Jesús los panes, y habiendo dado gracias, los repartió entre los discípulos, y los discípulos entre los que estaban recostados; asimismo de los peces, cuanto querían. Y cuando se hubieron saciado, dijo a sus discípulos: Recoged los pedazos que sobraron, para que no se pierda nada.',
    },
    verseB: {
      reference: 'Números 11:21-23',
      text: 'Y Moisés dijo: Seiscientos mil de a pie es el pueblo en medio del cual yo estoy; ¿y tú dices: Les daré carne, y comerán un mes entero? ¿Se degollarán para ellos ovejas y bueyes que les basten? Y el Señor respondió a Moisés: ¿Acaso se ha acortado la mano del Señor?',
    },
    description: 'La multiplicación de los panes en el desierto evoca conscientemente el maná: mismo escenario (desierto), mismo problema (multitud hambrienta), misma pregunta (¿de dónde tanta comida?). Juan coloca inmediatamente después el discurso del Pan de Vida, donde Jesús revela que él es la verdad de lo que el maná prefiguraba.',
  },
  {
    id: 52,
    title: 'La higuera estéril y la viña improductiva',
    type: 'alusión',
    theme: 'juicio y conversión',
    importance: 3,
    verseA: {
      reference: 'Marcos 11:13-14',
      text: 'Y viendo de lejos una higuera que tenía hojas, fue a ver si tal vez hallaba en ella algo; pero cuando llegó a ella, nada halló sino hojas, pues no era tiempo de higos. Entonces Jesús dijo a la higuera: Nunca jamás coma nadie fruto de ti.',
    },
    verseB: {
      reference: 'Oseas 9:10',
      text: 'Como uvas en el desierto hallé a Israel; como la fruta temprana de la higuera en su principio vi a vuestros padres. Ellos acudieron a Baal-peor, y se apartaron para vergüenza, y se hicieron abominables como lo que amaron.',
    },
    description: 'Los profetas usaron frecuentemente la imagen de la higuera para representar a Israel (Os 9:10; Jr 8:13; Mi 7:1). La maldición de la higuera estéril no es un gesto caprichoso sino una acción profética: Israel, que tiene hojas de religiosidad pero no da el fruto de la justicia, recibirá el juicio.',
  },
  {
    id: 53,
    title: 'El Sábado y el descanso escatológico',
    type: 'alusión',
    theme: 'descanso y escatología',
    importance: 3,
    verseA: {
      reference: 'Hebreos 4:9-11',
      text: 'Por tanto, queda un reposo para el pueblo de Dios. Porque el que ha entrado en su reposo, también ha reposado de sus obras, como Dios de las suyas. Procuremos, pues, entrar en aquel reposo, para que ninguno caiga en semejante ejemplo de desobediencia.',
    },
    verseB: {
      reference: 'Génesis 2:2-3',
      text: 'Y reposó el día séptimo de toda la obra que hizo. Y bendijo Dios al día séptimo, y lo santificó, porque en él reposó de toda la obra que había creado y hecho.',
    },
    description: 'El descanso del séptimo día de la creación prefigura el descanso escatológico en Dios que Hebreos llama el verdadero "Sabbat del pueblo de Dios". El sábado semanal no era la meta sino la sombra: el reposo definitivo es la comunión plena con Dios que inauguró la resurrección de Cristo.',
  },
  {
    id: 54,
    title: 'Las doce tribus y los doce apóstoles',
    type: 'alusión',
    theme: 'Israel y la Iglesia',
    importance: 4,
    verseA: {
      reference: 'Mateo 19:28',
      text: 'Y Jesús les dijo: De cierto os digo que en la regeneración, cuando el Hijo del Hombre se siente en el trono de su gloria, vosotros que me habéis seguido también os sentaréis sobre doce tronos, para juzgar a las doce tribus de Israel.',
    },
    verseB: {
      reference: 'Génesis 49:28',
      text: 'Todas estas son las doce tribus de Israel, y esto fue lo que su padre les dijo, al bendecirlos; a cada uno por su bendición los bendijo.',
    },
    description: 'Jesús escoge deliberadamente doce apóstoles —el número de las tribus de Israel— para señalar que funda el Israel escatológico, el verdadero pueblo de Dios. Como las doce tribus constituían el Israel antiguo, los doce apóstoles son el fundamento del nuevo Israel que es la Iglesia.',
  },
  {
    id: 55,
    title: 'La curación del ciego y la luz profetizada',
    type: 'alusión',
    theme: 'milagros y cumplimiento',
    importance: 3,
    verseA: {
      reference: 'Juan 9:6-7',
      text: 'Dicho esto, escupió en tierra, e hizo lodo con la saliva, y untó con el lodo los ojos del ciego, y le dijo: Ve a lavarte en el estanque de Siloé... Fue entonces, y se lavó, y regresó viendo.',
    },
    verseB: {
      reference: 'Isaías 29:18',
      text: 'En aquel tiempo los sordos oirán las palabras del libro, y los ojos de los ciegos verán en medio de la oscuridad y de las tinieblas.',
    },
    description: 'La curación del ciego de nacimiento en Juan 9 es la señal más elaborada del evangelio y el cumplimiento más visible de las promesas mesiánicas de Isaías sobre la apertura de ojos ciegos. Juan subraya el contraste entre el ciego que llega a ver (física y espiritualmente) y los fariseos que ven pero son ciegos.',
  },
  {
    id: 56,
    title: 'El vino nuevo de la alianza',
    type: 'alusión',
    theme: 'nueva alianza y alegría',
    importance: 3,
    verseA: {
      reference: 'Mateo 9:17',
      text: 'Ni echan vino nuevo en odres viejos; de otra manera los odres se rompen, y el vino se derrama, y los odres se pierden; pero echan el vino nuevo en odres nuevos, y lo uno y lo otro se conservan juntamente.',
    },
    verseB: {
      reference: 'Isaías 43:19',
      text: 'He aquí que yo hago cosa nueva; pronto saldrá a luz; ¿no la conoceréis? Otra vez abriré camino en el desierto, y ríos en la soledad.',
    },
    description: 'Jesús enseña que sus enseñanzas —el vino nuevo— no pueden contenerse en las estructuras del judaísmo farisaico —los odres viejos—. Isaías anunció que Dios haría "cosa nueva" que superaría incluso el éxodo. El "vino nuevo" del evangelio es esa novedad radical que exige estructuras nuevas: la Iglesia.',
  },
  {
    id: 57,
    title: 'Las bienaventuranzas y las bendiciones del Sinaí',
    type: 'alusión',
    theme: 'ley nueva y bienaventuranza',
    importance: 4,
    verseA: {
      reference: 'Mateo 5:3-6',
      text: 'Bienaventurados los pobres en espíritu, porque de ellos es el reino de los cielos. Bienaventurados los que lloran, porque ellos recibirán consolación. Bienaventurados los mansos, porque ellos recibirán la tierra por heredad. Bienaventurados los que tienen hambre y sed de justicia, porque ellos serán saciados.',
    },
    verseB: {
      reference: 'Deuteronomio 28:1-3',
      text: 'Acontecerá que si oyeres atentamente la voz del Señor tu Dios, para guardar y poner por obra todos sus mandamientos que yo te prescribo hoy, también el Señor tu Dios te exaltará sobre todas las naciones de la tierra. Y vendrán sobre ti todas estas bendiciones... Bendito serás tú en la ciudad, y bendito tú en el campo.',
    },
    description: 'El Sermón del Monte comienza con ocho bienaventuranzas, como Moisés proclamó las bendiciones y maldiciones desde el Sinaí/Horeb. Jesús actúa como el nuevo Moisés que desde el monte proclama la ley nueva: pero donde Moisés prometía bienes materiales a la obediencia, Jesús beatifica la pobreza, el llanto y la mansedumbre.',
  },
  {
    id: 58,
    title: 'El Padrenuestro y la oración del Israel',
    type: 'alusión',
    theme: 'oración',
    importance: 4,
    verseA: {
      reference: 'Mateo 6:9-13',
      text: 'Vosotros, pues, oraréis así: Padre nuestro que estás en los cielos, santificado sea tu nombre. Venga tu reino. Hágase tu voluntad, como en el cielo, así también en la tierra. El pan nuestro de cada día, dánoslo hoy.',
    },
    verseB: {
      reference: 'Salmo 103:13',
      text: 'Como el padre se compadece de los hijos, se compadece el Señor de los que le temen.',
    },
    description: 'El Padrenuestro está tejido de resonancias bíblicas: "Padre" (Is 63:16), "santificado sea tu nombre" (Ez 36:23), "venga tu reino" (Is 52:7), "pan de cada día" (Ex 16:4 — el maná), "no nos metas en tentación" (Dt 8:2). Jesús condensa toda la tradición orante de Israel en siete peticiones que orientan a su cumplimiento.',
  },
  {
    id: 59,
    title: 'El número siete: plenitud y alianza',
    type: 'paralelo temático',
    theme: 'alianza y plenitud',
    importance: 3,
    verseA: {
      reference: 'Apocalipsis 1:4',
      text: 'Juan, a las siete iglesias que están en Asia: Gracia y paz a vosotros, del que es y que era y que ha de venir, y de los siete espíritus que están delante de su trono.',
    },
    verseB: {
      reference: 'Génesis 2:2',
      text: 'Y reposó el día séptimo de toda la obra que hizo.',
    },
    description: 'El número siete —símbolo de plenitud en el AT desde la creación— impregna toda la Escritura. El Apocalipsis lo usa sistemáticamente (7 iglesias, 7 sellos, 7 trompetas, 7 copas) como símbolo de la totalidad de la historia salvífica. Lo que comenzó en siete días de creación se cumple en la semana escatológica de la historia.',
  },
  {
    id: 60,
    title: 'La ciudad sobre el monte y el monte de Sión',
    type: 'alusión',
    theme: 'misión universal',
    importance: 3,
    verseA: {
      reference: 'Mateo 5:14',
      text: 'Vosotros sois la luz del mundo; una ciudad asentada sobre un monte no se puede esconder.',
    },
    verseB: {
      reference: 'Isaías 2:2-3',
      text: 'Acontecerá en lo postrero de los tiempos, que será confirmado el monte de la casa del Señor como cabeza de los montes, y será exaltado sobre los collados, y correrán a él todas las naciones. Y vendrán muchos pueblos, y dirán: Venid, y subamos al monte del Señor.',
    },
    description: 'Isaías profetizó que el monte de Sión atraería a todas las naciones como faro de la Palabra de Dios. Jesús aplica esta imagen a sus discípulos: la comunidad de los seguidores del Mesías es la ciudad luminosa sobre el monte que cumple la vocación de Israel de ser luz de los pueblos.',
  },

  // ── TIPOLOGÍAS (complemento) ──────────────────────────────────────

  {
    id: 61,
    title: 'Moisés, tipo del profeta-mediador Cristo',
    type: 'tipología',
    theme: 'profecía y mediación',
    importance: 5,
    verseA: {
      reference: 'Hechos 3:22-23',
      text: 'Porque Moisés dijo a los padres: El Señor vuestro Dios os levantará profeta de entre vuestros hermanos, como a mí; a él oiréis en todas las cosas que os hable; y toda alma que no oyere a aquel profeta, será desarraigada del pueblo.',
    },
    verseB: {
      reference: 'Deuteronomio 18:15',
      text: 'Profeta de en medio de ti, de tus hermanos, como yo, te levantará el Señor tu Dios; a él oiréis.',
    },
    description: 'Moisés anunció su propio sucesor definitivo: un profeta semejante a él que hablaría la palabra de Dios y a quien el pueblo debería obedecer. Pedro en el pórtico de Salomón identifica a Jesús resucitado con ese profeta: los paralelos son numerosos (liberador, mediador de una alianza, realizador de milagros, intercesor), pero Cristo supera a Moisés como Hijo sobre la Casa de Dios (Heb 3:5-6).',
  },
  {
    id: 62,
    title: 'El cruce del Mar Rojo, tipo del bautismo',
    type: 'tipología',
    theme: 'bautismo y salvación',
    importance: 5,
    verseA: {
      reference: '1 Corintios 10:1-2',
      text: 'Porque no quiero, hermanos, que ignoréis que nuestros padres todos estuvieron bajo la nube, y todos pasaron el mar; y todos en Moisés fueron bautizados en la nube y en el mar.',
    },
    verseB: {
      reference: 'Éxodo 14:21-22',
      text: 'Y extendió Moisés su mano sobre el mar, e hizo el Señor que el mar se retirase por recio viento oriental toda aquella noche; y volvió el mar en seco, y las aguas quedaron divididas. Entonces los hijos de Israel entraron por en medio del mar, en seco, teniendo las aguas como muro a su derecha y a su izquierda.',
    },
    description: 'Pablo ve en el paso del Mar Rojo un "bautismo" colectivo de Israel: el pueblo entró en el mar como esclavo y salió libre, como el cristiano que entra en el bautismo en el pecado y sale a la nueva vida. La columna de nube y el mar son los elementos del bautismo tipológico. Egipto, el Faraón y sus ejércitos sumergidos prefiguran el poder del pecado vencido por la muerte y resurrección de Cristo.',
  },
  {
    id: 63,
    title: 'El chivo expiatorio, tipo de Cristo que lleva los pecados',
    type: 'tipología',
    theme: 'expiación',
    importance: 5,
    verseA: {
      reference: 'Hebreos 9:11-12',
      text: 'Pero estando ya presente Cristo, sumo sacerdote de los bienes venideros, por el más amplio y más perfecto tabernáculo, no hecho de manos... y no por sangre de machos cabríos ni de becerros, sino por su propia sangre, entró una vez para siempre en el Lugar Santísimo, habiendo obtenido eterna redención.',
    },
    verseB: {
      reference: 'Levítico 16:21-22',
      text: 'Y pondrá Aarón sus dos manos sobre la cabeza del macho cabrío vivo, y confesará sobre él todas las iniquidades de los hijos de Israel, todas sus rebeliones y todos sus pecados, poniéndolos así sobre la cabeza del macho cabrío, y lo enviará al desierto por mano de un hombre destinado para esto. Y aquel macho cabrío llevará sobre sí todas las iniquidades de ellos a tierra inhabitada.',
    },
    description: 'En el Yom Kippur (Día de la Expiación), Aarón cargaba simbólicamente los pecados del pueblo sobre el chivo expiatorio, que los llevaba al desierto. Hebreos enseña que Cristo cumple y supera este rito: entró una sola vez al santuario celestial con su propia sangre, eliminando el pecado definitivamente. Jesús murió "fuera del campamento" (Heb 13:12), como el chivo que era enviado fuera.',
  },
  {
    id: 64,
    title: 'Las primicias de la siega, tipo de la resurrección',
    type: 'tipología',
    theme: 'resurrección',
    importance: 4,
    verseA: {
      reference: '1 Corintios 15:20',
      text: 'Mas ahora Cristo ha resucitado de los muertos; primicias de los que durmieron es hecho.',
    },
    verseB: {
      reference: 'Levítico 23:10-11',
      text: 'Habla a los hijos de Israel y diles: Cuando hayáis entrado en la tierra que yo os doy, y segareis su mies, traeréis al sacerdote una gavilla por primicia de los primeros frutos de vuestra siega. Y el sacerdote mecerá la gavilla delante del Señor para que seáis aceptados; el día siguiente del sábado la mecerá.',
    },
    description: 'La ofrenda de las primicias se presentaba el día después del sábado de Pascua: el primer fruto de la cosecha consagrado a Dios garantizaba la santificación de toda la cosecha. Pablo aplica esta imagen a la Resurrección: Cristo resucitó "el día después del sábado" y es la primicia que garantiza la resurrección de todos los creyentes. La liturgia cristiana celebra la Resurrección el domingo, el "día después del sábado".',
  },
  {
    id: 65,
    title: 'Rahab y la soga roja, tipo de la salvación por la sangre',
    type: 'tipología',
    theme: 'salvación por la sangre',
    importance: 3,
    verseA: {
      reference: 'Hebreos 11:31',
      text: 'Por la fe Rahab la ramera no pereció juntamente con los desobedientes, habiendo recibido a los espías en paz.',
    },
    verseB: {
      reference: 'Josué 2:18-19',
      text: 'He aquí, cuando nosotros entremos en la tierra, tú atarás este cordón de hilo rojo a la ventana por la cual nos descolgaste... y sucederá que cualquiera que saliere de las puertas de tu casa hacia fuera, su sangre será sobre su cabeza, y nosotros sin culpa.',
    },
    description: 'Rahab, una pagana y prostituta, se salvó con toda su familia gracias a la señal del cordón rojo colgado en su ventana, igual que los hebreos se salvaron por la sangre del cordero en los dinteles. Los Padres de la Iglesia vieron en ese hilo escarlata una figura de la sangre de Cristo: quien permanece bajo su signo es preservado del juicio. La fe de Rahab, no su condición, la justificó (Heb 11:31; St 2:25).',
  },
  {
    id: 66,
    title: 'Booz el pariente redentor, tipo de Cristo',
    type: 'tipología',
    theme: 'redención',
    importance: 4,
    verseA: {
      reference: 'Efesios 1:7',
      text: 'En quien tenemos redención por su sangre, el perdón de pecados según las riquezas de su gracia.',
    },
    verseB: {
      reference: 'Rut 4:9-10',
      text: 'Y dijo Booz a los ancianos y a todo el pueblo: Vosotros sois testigos hoy, de que he adquirido de mano de Noemí todo lo que fue de Elimelec... Y que también tomo por mi mujer a Rut la moabita, mujer de Mahlón, para restaurar el nombre del difunto sobre su heredad, para que el nombre del difunto no se borre de entre sus hermanos.',
    },
    description: 'Booz es el goel (pariente redentor) que rescata la herencia perdida de Elimelec, redime a Rut la moabita y restaura el nombre del difunto. Es tipo de Cristo, el Redentor que "adquiere" a la humanidad empobrecida pagando el precio de su propia sangre, que rescata a la Iglesia (Rut = los gentiles) y la incorpora al pueblo de Dios. De esta unión nace Obed, abuelo de David, antepasado del Mesías.',
  },
  {
    id: 67,
    title: 'La alianza de sangre del Sinaí y la Eucaristía',
    type: 'paralelo temático',
    theme: 'alianza y eucaristía',
    importance: 5,
    verseA: {
      reference: 'Hebreos 9:18-20',
      text: 'De donde tampoco el primer pacto fue instituido sin sangre. Porque habiendo anunciado Moisés todos los mandamientos de la ley a todo el pueblo, tomó la sangre de los becerros y de los machos cabríos... y roció el mismo libro y también a todo el pueblo, diciendo: Esta es la sangre del pacto que Dios os ha mandado.',
    },
    verseB: {
      reference: 'Éxodo 24:7-8',
      text: 'Y tomó el libro del pacto y lo leyó a oídos del pueblo, el cual dijo: Haremos todas las cosas que el Señor ha dicho, y obedeceremos. Entonces Moisés tomó la sangre y roció sobre el pueblo, y dijo: He aquí la sangre del pacto que el Señor ha hecho con vosotros sobre todas estas cosas.',
    },
    description: 'La primera alianza fue sellada con sangre asperjada sobre el pueblo. En la Última Cena, Jesús retoma exactamente estas palabras de Moisés: "Esta es la sangre del pacto" (Mt 26:28). Hebreos elabora el paralelo: como la alianza sinaítica requirió sangre, la nueva alianza fue inaugurada con la sangre de Cristo, el único mediador que purifica la conciencia y no solo la carne.',
  },
  {
    id: 68,
    title: 'El «Yo soy» divino: de la zarza ardiente al Evangelio',
    type: 'paralelo temático',
    theme: 'divinidad de Cristo',
    importance: 5,
    verseA: {
      reference: 'Juan 8:58',
      text: 'Jesús les dijo: De cierto, de cierto os digo: Antes que Abraham fuese, yo soy.',
    },
    verseB: {
      reference: 'Éxodo 3:14',
      text: 'Y respondió Dios a Moisés: YO SOY EL QUE SOY. Y dijo: Así dirás a los hijos de Israel: YO SOY me envió a vosotros.',
    },
    description: 'En la zarza ardiente, Dios revela su nombre como el Ser absoluto: «YO SOY» (YHWH, del hebreo «ser»). Jesús usa siete veces en Juan la fórmula absoluta «Yo soy» (Egó eimi), y en Juan 8:58 la usa en referencia a su preexistencia antes de Abraham. Sus interlocutores tomaron piedras para apedrearlo, reconociendo la afirmación de divinidad. Es la identificación más directa de Jesús con el Dios del Éxodo.',
  },
  {
    id: 69,
    title: 'El soplo de vida en Edén y el soplo del Resucitado',
    type: 'paralelo temático',
    theme: 'nueva creación',
    importance: 4,
    verseA: {
      reference: 'Juan 20:22',
      text: 'Y habiendo dicho esto, sopló, y les dijo: Recibid el Espíritu Santo.',
    },
    verseB: {
      reference: 'Génesis 2:7',
      text: 'Entonces el Señor Dios formó al hombre del polvo de la tierra, y sopló en su nariz aliento de vida, y fue el hombre un ser viviente.',
    },
    description: 'El gesto del Resucitado —soplar sobre los discípulos para comunicarles el Espíritu— es un eco deliberado del soplo creador de Génesis 2. Así como Dios sopló vida en Adán para crear al primer hombre, Cristo sopla sobre los apóstoles para crear el hombre nuevo de la Iglesia. El Espíritu Santo es el aliento de la nueva creación, más radical que la primera.',
  },
  {
    id: 70,
    title: 'El año jubilar y el año de gracia del Mesías',
    type: 'paralelo temático',
    theme: 'redención y libertad',
    importance: 4,
    verseA: {
      reference: 'Lucas 4:18-19',
      text: 'El Espíritu del Señor está sobre mí, por cuanto me ha ungido para dar buenas nuevas a los pobres; me ha enviado a sanar a los quebrantados de corazón; a pregonar libertad a los cautivos... a predicar el año agradable del Señor.',
    },
    verseB: {
      reference: 'Levítico 25:10-13',
      text: 'Y santificaréis el año cincuenta, y pregonaréis libertad en la tierra a todos sus moradores; ese año os será de jubileo, y volveréis cada uno a vuestra posesión, y cada cual volverá a su familia... En el año del jubileo volveréis cada uno a vuestra posesión.',
    },
    description: 'El jubileo bíblico era la liberación total cada cincuenta años: esclavos liberados, deudas perdonadas, tierras devueltas. Isaías 61 retoma esta imagen y la aplica al futuro ministerio del Mesías. Jesús la lee en la sinagoga de Nazaret y declara: "Hoy se ha cumplido esta Escritura." El ministerio de Jesús es el jubileo definitivo y permanente, no una liberación temporal sino eterna.',
  },

  // ── CITAS DIRECTAS (complemento) ─────────────────────────────────

  {
    id: 71,
    title: 'La circuncisión del corazón prometida en la ley',
    type: 'cita directa',
    theme: 'conversión interior',
    importance: 4,
    verseA: {
      reference: 'Romanos 2:29',
      text: 'Sino que es judío el que lo es en lo interior, y la circuncisión es la del corazón, en espíritu, no en letra; la alabanza del cual no viene de los hombres, sino de Dios.',
    },
    verseB: {
      reference: 'Deuteronomio 30:6',
      text: 'Y circuncidará el Señor tu Dios tu corazón, y el corazón de tu descendencia, para que ames al Señor tu Dios con todo tu corazón y con toda tu alma, a fin de que vivas.',
    },
    description: 'Moisés prometió que Dios mismo circuncidaría el corazón de Israel en la restauración escatológica. Pablo ve este programa cumplido en la obra del Espíritu Santo: la "circuncisión interior" no es la marca externa de la carne sino la transformación del corazón obrada por el Espíritu. El ritual externo era sombra; la realidad es la renovación interior que produce el amor a Dios.',
  },

  // ── PARALELOS TEMÁTICOS (complemento) ────────────────────────────

  {
    id: 72,
    title: 'La fiesta de los Tabernáculos y el agua viva de Cristo',
    type: 'paralelo temático',
    theme: 'presencia divina y salvación',
    importance: 4,
    verseA: {
      reference: 'Juan 7:37-38',
      text: 'En el último y gran día de la fiesta, Jesús se puso en pie y alzó la voz, diciendo: Si alguno tiene sed, venga a mí y beba. El que cree en mí, como dice la Escritura, de su interior correrán ríos de agua viva.',
    },
    verseB: {
      reference: 'Levítico 23:34-36',
      text: 'Di a los hijos de Israel: A los quince días de este mes séptimo será la fiesta solemne de los tabernáculos al Señor por siete días... El octavo día tendréis santa convocación, y ofreceréis ofrenda encendida al Señor.',
    },
    description: 'La fiesta de los Tabernáculos celebraba la peregrinación en el desierto, con ritos de agua (libaciones del estanque de Siloé) y de luz (grandes candelabros en el atrio). En el octavo día —el último y más solemne— Jesús se levanta y proclama ser la fuente de agua viva que sacia la sed definitivamente. El rito de las libaciones apuntaba a este momento.',
  },
  {
    id: 73,
    title: 'La menorá del tabernáculo y Cristo luz del mundo',
    type: 'tipología',
    theme: 'luz y revelación',
    importance: 3,
    verseA: {
      reference: 'Juan 8:12',
      text: 'Otra vez Jesús les habló, diciendo: Yo soy la luz del mundo; el que me sigue, no andará en tinieblas, sino que tendrá la luz de la vida.',
    },
    verseB: {
      reference: 'Éxodo 25:31-32',
      text: 'Harás además un candelero de oro puro; labrado a martillo se hará el candelero; su pie, su caña, sus copas, sus manzanas y sus flores serán de lo mismo. Y saldrán seis brazos de sus lados; tres brazos del candelero a un lado, y tres brazos al otro lado.',
    },
    description: 'La menorá de siete brazos era la única fuente de luz en el Lugar Santo del tabernáculo: su llama nunca debía apagarse. Era la presencia de Dios que ilumina en medio de su pueblo. Jesús se proclama "luz del mundo" en el contexto de la fiesta de los Tabernáculos, cuando los grandes candelabros iluminaban el Templo. La luz perpetua de la menorá prefiguraba al Verbo encarnado, luz que las tinieblas no pueden apagar.',
  },
  {
    id: 74,
    title: 'Eva del costado de Adán y la Iglesia del costado de Cristo',
    type: 'tipología',
    theme: 'Iglesia y redención',
    importance: 4,
    verseA: {
      reference: 'Juan 19:34',
      text: 'Pero uno de los soldados le abrió el costado con una lanza, y al instante salió sangre y agua.',
    },
    verseB: {
      reference: 'Génesis 2:21-22',
      text: 'Entonces el Señor Dios hizo caer sueño profundo sobre Adán, y mientras éste dormía, tomó una de sus costillas, y cerró la carne en su lugar. Y de la costilla que el Señor Dios tomó del hombre, hizo una mujer, y la trajo al hombre.',
    },
    description: 'Los Padres de la Iglesia (Tertuliano, San Agustín) vieron en la costilla de Adán el tipo más hondo de la Iglesia: así como Eva brotó del costado del primer Adán dormido, la Iglesia nació del costado abierto de Cristo en la cruz. La sangre y el agua que brotaron del costado de Jesús simbolizan los sacramentos del bautismo y la Eucaristía, de los que la Iglesia vive.',
  },
  // ── SABIDURÍA DIVINA Y EL LOGOS ──────────────────────────────────
  {
    id: 76,
    title: 'La Sabiduría preexistente y el Logos de Juan',
    type: 'paralelo temático',
    theme: 'sabiduría y encarnación',
    importance: 5,
    verseA: {
      reference: 'Juan 1:1-3',
      text: 'En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios. Este era en el principio con Dios. Todas las cosas por él fueron hechas, y sin él nada de lo que ha sido hecho, fue hecho.',
    },
    verseB: {
      reference: 'Proverbios 8:22-31',
      text: 'El Señor me poseía en el principio de su camino, ya de antiguo, antes de sus obras. Eternamente tuve el principado, desde el principio, antes de la tierra... Con él estaba yo ordenándolo todo, y era su delicia de día en día, teniendo solaz delante de él en todo tiempo.',
    },
    description: 'La personificación de la Sabiduría en Proverbios 8 —presente con Dios antes de la creación y participante en ella— es el precedente veterotestamentario más directo del Prólogo de Juan. Ambos textos presentan una figura preexistente, mediadora de la creación, en íntima comunión con Dios. La Sabiduría que "jugaba" ante el Señor se identifica con el Logos que "era con Dios".',
  },
  {
    id: 77,
    title: 'La Sabiduría como resplandor de la gloria y el Hijo eterno',
    type: 'paralelo temático',
    theme: 'sabiduría y encarnación',
    importance: 4,
    verseA: {
      reference: 'Hebreos 1:3',
      text: 'El cual, siendo el resplandor de su gloria, y la imagen misma de su sustancia, y quien sustenta todas las cosas con la palabra de su poder, habiendo efectuado la purificación de nuestros pecados por medio de sí mismo, se sentó a la diestra de la Majestad en las alturas.',
    },
    verseB: {
      reference: 'Sabiduría 7:25-27',
      text: 'Es un vapor del poder de Dios, y una pura emanación de la gloria del Omnipotente... Es el resplandor de la luz eterna, el espejo sin mancha de la actividad de Dios, y la imagen de su bondad... En cada generación pasa a las almas santas y las hace amigas de Dios y profetas.',
    },
    description: 'El libro de la Sabiduría (deuterocanónico) describe a la Sabiduría con términos —resplandor, imagen, emanación— que el autor de Hebreos aplica casi literalmente al Hijo eterno de Dios. Este paralelismo es fundamental para la teología del Logos en el NT: la especulación sapiencial del judaísmo tardío preparó el lenguaje para expresar la divinidad de Cristo.',
  },
  {
    id: 78,
    title: 'La Sabiduría que habita en Israel y el Verbo encarnado',
    type: 'paralelo temático',
    theme: 'sabiduría y encarnación',
    importance: 4,
    verseA: {
      reference: 'Juan 1:14',
      text: 'Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad.',
    },
    verseB: {
      reference: 'Eclesiástico 24:3-8',
      text: 'Yo salí de la boca del Altísimo y como niebla cubrí la tierra. Yo habité en los cielos y mi trono está en columna de nube... El Creador del universo me mandó, mi Creador fijó donde debía habitar mi tienda; y me dijo: Planta tu tienda en Jacob e instálate en Israel.',
    },
    description: 'Ben Sirá describe a la Sabiduría divina que baja de los cielos para "plantar su tienda" (la misma palabra griega que usa Juan: ἐσκήνωσεν) en Israel. Juan lo lleva al extremo: el Verbo no pone su tienda en una nación sino en una persona concreta, con carne y hueso, habitando entre nosotros. La Encarnación es la realización plena de lo que la tradición sapiencial había intuido.',
  },

  // ── CITAS DIRECTAS (complemento) ─────────────────────────────────
  {
    id: 79,
    title: 'El celo de tu casa me consume',
    type: 'cita directa',
    theme: 'pasión y purificación',
    importance: 4,
    verseA: {
      reference: 'Juan 2:17',
      text: 'Entonces se acordaron sus discípulos que está escrito: El celo de tu casa me ha consumido.',
    },
    verseB: {
      reference: 'Salmo 69:9',
      text: 'Porque me consumió el celo de tu casa; y los denuestos de los que te vituperaban cayeron sobre mí.',
    },
    description: 'El Salmo 69, uno de los salmos de la Pasión más citados en el NT, contiene este versículo que los discípulos recordaron al ver a Jesús expulsar a los mercaderes del Templo. La purificación no es un acto de ira sino de amor apasionado: el mismo celo que consumirá a Jesús en la Pasión ardía ya en la defensa de la santidad del Templo.',
  },
  {
    id: 80,
    title: 'La piedra angular en Sión',
    type: 'cita directa',
    theme: 'cristología',
    importance: 4,
    verseA: {
      reference: '1 Pedro 2:6',
      text: 'Por lo cual también contiene la Escritura: He aquí, pongo en Sión la principal piedra del ángulo, escogida, preciosa; y el que creyere en él, no será avergonzado.',
    },
    verseB: {
      reference: 'Isaías 28:16',
      text: 'Por tanto, el Señor Jehová dice así: He aquí que yo he puesto en Sión por fundamento una piedra, piedra probada, angular, preciosa, de cimiento estable; el que creyere, no se apresure.',
    },
    description: 'Isaías 28:16 promete que Dios mismo pondría en Sión una piedra de cimiento firme, a diferencia de los apoyos falsos que Israel buscaba en alianzas humanas. Pedro combina esta imagen con la del Salmo 118 (piedra rechazada) y aplica ambas a Cristo: la misma piedra que los constructores desecharon es la que Dios había prometido como fundamento eterno.',
  },
  {
    id: 81,
    title: 'La Palabra cerca de ti: en tu boca y en tu corazón',
    type: 'cita directa',
    theme: 'fe y palabra',
    importance: 3,
    verseA: {
      reference: 'Romanos 10:8',
      text: 'Mas ¿qué dice? Cerca de ti está la palabra, en tu boca y en tu corazón. Esta es la palabra de fe que predicamos.',
    },
    verseB: {
      reference: 'Deuteronomio 30:12-14',
      text: 'No está en el cielo, para que digas: ¿Quién subirá por nosotros al cielo, y nos la traerá y nos la hará oír para que la cumplamos? Ni está al otro lado del mar... sino que muy cerca de ti está la palabra, en tu boca y en tu corazón, para que la cumplas.',
    },
    description: 'Moisés exhortaba a Israel a no buscar la Torah en lugares inaccesibles: la Palabra estaba cerca. Pablo cita este pasaje para describir el evangelio de la fe en Cristo: la Palabra encarnada no hay que subirla al cielo ni bajarla del abismo, pues ya descendió y resucitó. La accesibilidad de la Torah mosaica prefigura la accesibilidad de Cristo en el kerygma.',
  },
  {
    id: 82,
    title: 'Los que no eran pueblo serán pueblo de Dios',
    type: 'cita directa',
    theme: 'misión a los gentiles',
    importance: 4,
    verseA: {
      reference: 'Romanos 9:25',
      text: 'Como también en Oseas dice: Llamaré pueblo mío al que no era mi pueblo, y a la no amada, amada.',
    },
    verseB: {
      reference: 'Oseas 2:23',
      text: 'Y la sembraré para mí en la tierra, y tendré misericordia de Lo-ruhama; y diré a Lo-ammi: Tú eres pueblo mío, y él dirá: Dios mío.',
    },
    description: 'Los nombres simbólicos de los hijos de Oseas —Lo-ammi ("no mi pueblo") y Lo-ruhama ("no compadecida")— representaban el rechazo de Israel. Pero Dios promete revertir esos nombres. Pablo lo aplica radicalmente a los gentiles: el "no pueblo" que se convierte en pueblo de Dios son las naciones que entran en la Iglesia. Pedro retoma la misma cita para las comunidades pagano-cristianas (1Pe 2:10).',
  },
  {
    id: 83,
    title: 'Anunciaré tu nombre a mis hermanos',
    type: 'cita directa',
    theme: 'cristología',
    importance: 3,
    verseA: {
      reference: 'Hebreos 2:11-12',
      text: 'Porque el que santifica y los que son santificados, de uno son todos; por lo cual no se avergüenza de llamarlos hermanos, diciendo: Anunciaré a mis hermanos tu nombre, en medio de la congregación te alabaré.',
    },
    verseB: {
      reference: 'Salmo 22:22',
      text: 'Anunciaré tu nombre a mis hermanos; en medio de la congregación te alabaré.',
    },
    description: 'El Salmo 22, que comienza con el grito del abandono en la cruz, concluye con la alabanza comunitaria. Hebreos cita este versículo final para presentar a Cristo Resucitado como el primogénito que anuncia el nombre del Padre a sus hermanos —todos los redimidos— en medio de la asamblea litúrgica. La Misa es la continuación de esa alabanza pascual del Resucitado.',
  },

  // ── PARALELOS TEMÁTICOS (complemento) ────────────────────────────
  {
    id: 84,
    title: 'La escalera de Jacob y Cristo, mediador entre cielo y tierra',
    type: 'tipología',
    theme: 'mediación',
    importance: 4,
    verseA: {
      reference: 'Juan 1:51',
      text: 'Y le dijo: De cierto, de cierto os digo: De aquí adelante veréis el cielo abierto, y a los ángeles de Dios que suben y descienden sobre el Hijo del Hombre.',
    },
    verseB: {
      reference: 'Génesis 28:12',
      text: 'Y soñó: y he aquí una escalera que estaba apoyada en tierra, y su extremo tocaba en el cielo; y he aquí ángeles de Dios que subían y descendían por ella.',
    },
    description: 'La escalera de Betel, por la que los ángeles suben y bajan entre Dios y Jacob dormido, es una de las imágenes de mediación más poderosas del AT. Jesús la aplica a sí mismo: él es la escalera, la conexión definitiva entre el cielo y la tierra. El punto de contacto ya no es un lugar geográfico (Betel) sino una persona. Cristo es el único mediador.',
  },
  {
    id: 85,
    title: 'Yahvé esposo de Israel y el Cordero esposo de la Iglesia',
    type: 'paralelo temático',
    theme: 'alianza esponsal',
    importance: 4,
    verseA: {
      reference: 'Apocalipsis 21:2',
      text: 'Y yo Juan vi la santa ciudad, la nueva Jerusalén, descender del cielo, de Dios, dispuesta como una esposa ataviada para su marido.',
    },
    verseB: {
      reference: 'Oseas 2:16-20',
      text: 'Y en aquel tiempo, dice el Señor, me llamarás Ishi (mi marido) y nunca más me llamarás Baali (mi señor)... Y te desposaré conmigo para siempre; te desposaré conmigo en justicia, juicio, benignidad y misericordia.',
    },
    description: 'La metáfora esponsal de Oseas —Yahvé como esposo fiel de una Israel infiel— atraviesa todo el AT (Isaías, Jeremías, Ezequiel). El Apocalipsis la lleva a su plenitud escatológica: la Iglesia es la esposa del Cordero, la nueva Jerusalén que baja adornada para las bodas eternas. Lo que Oseas prometía como restauración del matrimonio divino-humano se cumple en la boda del Cordero.',
  },
  {
    id: 86,
    title: 'Los cuarenta días de Elías y los cuarenta días de Jesús',
    type: 'paralelo temático',
    theme: 'desierto y tentación',
    importance: 3,
    verseA: {
      reference: 'Mateo 4:2',
      text: 'Y después de haber ayunado cuarenta días y cuarenta noches, tuvo hambre.',
    },
    verseB: {
      reference: '1 Reyes 19:8',
      text: 'Se levantó, y comió y bebió; y fortalecido con aquella comida caminó cuarenta días y cuarenta noches hasta Horeb, el monte de Dios.',
    },
    description: 'Elías, alimentado por el ángel, camina cuarenta días hasta el Horeb (el Sinaí) para encontrarse con Dios. Jesús ayuna cuarenta días en el desierto antes de iniciar su ministerio. Ambos cuarenta evocan los cuarenta años de Israel en el desierto. Jesús es el nuevo Israel y el nuevo Elías que repite el camino sagrado —pero sin queja ni fracaso.',
  },
  {
    id: 87,
    title: 'Yo sé que mi Redentor vive',
    type: 'alusión',
    theme: 'resurrección y esperanza',
    importance: 4,
    verseA: {
      reference: '1 Corintios 15:20',
      text: 'Mas ahora Cristo ha resucitado de los muertos; primicias de los que durmieron es hecho.',
    },
    verseB: {
      reference: 'Job 19:25-27',
      text: 'Yo sé que mi Redentor vive, y al fin se levantará sobre el polvo; y después de deshecha esta mi piel, en mi carne he de ver a Dios; al cual veré por mí mismo, y mis ojos lo verán, y no otro, aunque mis riñones se consumen dentro de mí.',
    },
    description: 'Job, en lo más hondo de su sufrimiento, afirma con asombrosa convicción que su Redentor vive y que él mismo lo verá con sus propios ojos tras la muerte. Pablo en 1 Corintios 15 anuncia que esa esperanza se ha cumplido en Cristo, primicia de la resurrección. La fe de Job —sin más apoyo que la desnuda convicción— anticipa el fundamento de la fe cristiana.',
  },
  {
    id: 88,
    title: 'Dios no quiere la muerte del pecador',
    type: 'paralelo temático',
    theme: 'misericordia divina',
    importance: 4,
    verseA: {
      reference: '1 Timoteo 2:4',
      text: 'El cual quiere que todos los hombres sean salvos y vengan al conocimiento de la verdad.',
    },
    verseB: {
      reference: 'Ezequiel 18:23',
      text: '¿Quiero yo la muerte del impío? dice el Señor Jehová. ¿No viviré yo si él se convirtiere de sus caminos, y viviere?',
    },
    description: 'Ezequiel proclama la voluntad salvífica universal de Dios: no desea la muerte de nadie sino su conversión y vida. Pablo en su primera carta a Timoteo enuncia el mismo principio teológico con su formulación más directa: Dios quiere que todos se salven. Este paralelo es fundamento bíblico del universal salvífico que la teología católica desarrolla.',
  },
  {
    id: 89,
    title: 'Llamado desde el vientre: el Siervo e Israel y Pablo',
    type: 'paralelo temático',
    theme: 'vocación profética',
    importance: 3,
    verseA: {
      reference: 'Gálatas 1:15-16',
      text: 'Pero cuando agradó a Dios, que me apartó desde el vientre de mi madre, y me llamó por su gracia, revelar a su Hijo en mí, para que yo le predicase entre los gentiles, no consulté en seguida con carne y sangre.',
    },
    verseB: {
      reference: 'Isaías 49:1-3',
      text: 'Oídme, costas, y escuchad, pueblos lejanos. El Señor me llamó desde el vientre, desde las entrañas de mi madre tuvo mi nombre en memoria. Y puso mi boca como espada aguda, me cubrió con la sombra de su mano; y me puso por saeta bruñida, me guardó en su aljaba. Y me dijo: Mi siervo eres, oh Israel.',
    },
    description: 'El segundo Cántico del Siervo describe a alguien llamado por Dios desde el vientre materno para una misión a las naciones. Pablo describe su propia vocación al apostolado en términos casi idénticos, identificándose implícitamente con el Siervo. En Pablo se cumple el Siervo en su dimensión misionera: llevar la luz de Cristo a los gentiles.',
  },

  // ── CITAS DIRECTAS (complemento 2) ───────────────────────────────
  {
    id: 90,
    title: 'Nación santa, sacerdocio real: el nuevo pueblo de Dios',
    type: 'cita directa',
    theme: 'eclesiología',
    importance: 5,
    verseA: {
      reference: '1 Pedro 2:9',
      text: 'Mas vosotros sois linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios, para que anunciéis las virtudes de aquel que os llamó de las tinieblas a su luz admirable.',
    },
    verseB: {
      reference: 'Éxodo 19:6',
      text: 'Y vosotros me seréis un reino de sacerdotes, y gente santa. Estas son las palabras que dirás a los hijos de Israel.',
    },
    description: 'En el Sinaí Dios definió la identidad de Israel con tres títulos: reino de sacerdotes, nación santa, pueblo elegido. Pedro aplica los tres exactamente a las comunidades cristanas. La Iglesia no reemplaza a Israel sino que es su realización plena: todos los bautizados comparten el sacerdocio real que el AT prometía al conjunto del pueblo de Dios.',
  },
  {
    id: 91,
    title: '¿Quién conoció la mente del Señor? Insondabilidad divina',
    type: 'cita directa',
    theme: 'teología',
    importance: 3,
    verseA: {
      reference: 'Romanos 11:34',
      text: 'Porque ¿quién conoció la mente del Señor? ¿O quién fue su consejero?',
    },
    verseB: {
      reference: 'Isaías 40:13',
      text: '¿Quién enseñó al Espíritu del Señor, o le aconsejó enseñándole? ¿A quién pidió consejo para ser avisado? ¿Quién le enseñó el camino del juicio, o le enseñó ciencia, o le mostró la senda de la prudencia?',
    },
    description: 'Isaías 40, el gran capítulo de consolación, afirma la absoluta incomprensibilidad de los designios divinos. Pablo lo cita al final de su argumento sobre la elección de Israel y la misión a los gentiles (Rm 9-11): la providencia de Dios que rechaza por un tiempo a Israel para salvar a los gentiles y luego salvar a todo Israel supera cualquier razonamiento humano.',
  },
  {
    id: 92,
    title: 'Las misericordias fieles prometidas a David',
    type: 'cita directa',
    theme: 'alianza',
    importance: 3,
    verseA: {
      reference: 'Hechos 13:34',
      text: 'Y en cuanto a que le levantó de los muertos para nunca más volver a corrupción, lo dijo así: Os daré las misericordias fieles de David.',
    },
    verseB: {
      reference: 'Isaías 55:3',
      text: 'Inclinad vuestro oído, y venid a mí; oíd, y vivirá vuestra alma; y haré con vosotros pacto eterno, las misericordias fieles a David.',
    },
    description: 'Isaías 55 ofrece a todos la alianza que Dios había sellado con David, abriéndola a cualquiera que tenga sed y quiera escuchar. Pablo en Antioquía de Pisidia interpreta que la Resurrección de Jesús es el cumplimiento definitivo de esas "misericordias fieles": Dios cumplió con la casa de David en Cristo lo que prometió, y ahora lo ofrece a todos.',
  },
  {
    id: 93,
    title: 'Regocíjate, estéril: la Iglesia, madre de muchos más hijos',
    type: 'cita directa',
    theme: 'eclesiología',
    importance: 3,
    verseA: {
      reference: 'Gálatas 4:27',
      text: 'Porque está escrito: Regocíjate, oh estéril, tú que no das a luz; prorrumpe en júbilo y clama, tú que no tienes dolores de parto; porque más son los hijos de la desolada, que de la que tiene marido.',
    },
    verseB: {
      reference: 'Isaías 54:1',
      text: 'Regocíjate, oh estéril, la que no daba a luz; levanta canción y da voces de júbilo, la que nunca estuvo de parto; porque más son los hijos de la desamparada que los de la casada, ha dicho el Señor.',
    },
    description: 'Isaías 54 habla de la Sión restaurada que tras el exilio tendrá más hijos que antes. Pablo aplica la alegoría a las dos alianzas: Agar (Sinaí/esclava) representa la Torah que engendra esclavos; Sara (promesa/libre) representa la alianza de fe que engendra hijos libres. La Iglesia, aparentemente menor que la sinagoga, tiene más hijos entre los gentiles.',
  },
  {
    id: 94,
    title: 'Por tu causa somos muertos todo el día',
    type: 'cita directa',
    theme: 'martirio y persecución',
    importance: 3,
    verseA: {
      reference: 'Romanos 8:36',
      text: 'Como está escrito: Por causa de ti somos muertos todo el tiempo; somos contados como ovejas de matadero.',
    },
    verseB: {
      reference: 'Salmo 44:22',
      text: 'Antes, por causa de ti nos matan cada día; somos contados como ovejas para el matadero.',
    },
    description: 'El Salmo 44 es lamento de Israel que sufre a pesar de su fidelidad. Pablo lo cita en el himno de la victoria cristiana (Rm 8:31-39) para mostrar que la persecución y la muerte no separan del amor de Cristo, sino que son el terreno mismo en que ese amor triunfa. El martirio de los justos del AT prefigura el martirio cristiano, pero ahora en ninguna de estas cosas somos vencidos.',
  },
  {
    id: 95,
    title: '¿No está escrito que sois dioses?',
    type: 'cita directa',
    theme: 'cristología',
    importance: 4,
    verseA: {
      reference: 'Juan 10:34-36',
      text: 'Jesús les respondió: ¿No está escrito en vuestra ley: Yo dije, dioses sois? Si llamó dioses a aquellos a quienes vino la palabra de Dios (y la Escritura no puede ser quebrantada), ¿al que el Padre santificó y envió al mundo, vosotros decís: Blasfemas, porque dije: Hijo de Dios soy?',
    },
    verseB: {
      reference: 'Salmo 82:6',
      text: 'Yo dije: Vosotros sois dioses, y todos vosotros hijos del Altísimo.',
    },
    description: 'Jesús usa el Salmo 82 para responder a la acusación de blasfemia: si la Escritura llama "dioses" a los jueces de Israel —simples hombres a quienes llegó la palabra de Dios—, con cuánta más razón puede llamarse Hijo de Dios aquel a quien el Padre santificó y envió. El argumento es a fortiori: la dignidad del Mesías supera la de cualquier representante humano de Dios.',
  },
  {
    id: 96,
    title: 'En ti serán benditas todas las naciones',
    type: 'cita directa',
    theme: 'misión a los gentiles',
    importance: 4,
    verseA: {
      reference: 'Gálatas 3:8',
      text: 'Y la Escritura, previendo que Dios había de justificar por la fe a los gentiles, dio de antemano la buena nueva a Abraham, diciendo: En ti serán benditas todas las naciones.',
    },
    verseB: {
      reference: 'Génesis 12:3',
      text: 'Bendeciré a los que te bendijeren, y a los que te maldijeren maldeciré; y serán benditas en ti todas las familias de la tierra.',
    },
    description: 'Pablo descubre en Génesis 12:3 nada menos que la primera predicación del Evangelio: Dios anunció "de antemano la buena nueva" a Abraham al prometer la bendición universal. El argumento es radical: la justificación por la fe a los gentiles no es una innovación cristiana, sino la realización de lo que Dios había prometido al patriarca 2000 años antes de Cristo.',
  },

  // ── PARALELOS TEMÁTICOS (complemento 2) ──────────────────────────
  {
    id: 97,
    title: 'La Sabiduría invita al banquete y la Eucaristía',
    type: 'paralelo temático',
    theme: 'eucaristía',
    importance: 4,
    verseA: {
      reference: 'Juan 6:53-55',
      text: 'Jesús les dijo: De cierto, de cierto os digo: Si no coméis la carne del Hijo del Hombre, y bebéis su sangre, no tenéis vida en vosotros. El que come mi carne y bebe mi sangre, tiene vida eterna; y yo le resucitaré en el día postrero. Porque mi carne es verdadera comida, y mi sangre es verdadera bebida.',
    },
    verseB: {
      reference: 'Proverbios 9:1-5',
      text: 'La sabiduría edificó su casa, labró sus siete columnas. Mató sus victimas, mezcló su vino, y puso su mesa. Envió sus criadas; sobre lo más alto de la ciudad clamó... Venid, comed mi pan, y bebed el vino que yo he mezclado.',
    },
    description: 'La Sabiduría personificada de Proverbios 9 edifica una casa de siete columnas y prepara un banquete al que invita a todos. Jesús en Juan 6 se presenta como la Sabiduría encarnada que ofrece su propia carne y sangre como verdadero alimento. La Eucaristía es el banquete de la Sabiduría hecho carne: ya no pan y vino simbólicos, sino el Cuerpo y la Sangre de Cristo.',
  },
  {
    id: 98,
    title: 'Sea la luz: creación y nueva creación en Cristo',
    type: 'paralelo temático',
    theme: 'creación y redención',
    importance: 4,
    verseA: {
      reference: '2 Corintios 4:6',
      text: 'Porque Dios, que mandó que de las tinieblas resplandeciese la luz, es el que resplandeció en nuestros corazones, para iluminación del conocimiento de la gloria de Dios en la faz de Jesucristo.',
    },
    verseB: {
      reference: 'Génesis 1:3',
      text: 'Y dijo Dios: Sea la luz; y fue la luz.',
    },
    description: 'Pablo traza el paralelismo entre los dos actos creativos de Dios: la orden "sea la luz" del primer día y la irrupción de la gloria de Cristo en el corazón del creyente. La nueva creación comienza de la misma manera que la primera: con la palabra luminosa de Dios. El conocimiento de Cristo es el "primer día" de la nueva humanidad.',
  },
  {
    id: 99,
    title: 'La sangre de Abel y la sangre de Cristo',
    type: 'paralelo temático',
    theme: 'mediación y sacrificio',
    importance: 4,
    verseA: {
      reference: 'Hebreos 12:24',
      text: 'A Jesús el Mediador del nuevo pacto, y a la sangre rociada que habla mejor que la de Abel.',
    },
    verseB: {
      reference: 'Génesis 4:8-10',
      text: 'Y aconteció que estando ellos en el campo, Caín se levantó contra su hermano Abel, y lo mató. Y el Señor dijo a Caín: ¿Dónde está Abel tu hermano? Y él respondió: No sé. ¿Soy yo acaso guarda de mi hermano? Y él le dijo: ¿Qué has hecho? La voz de la sangre de tu hermano clama a mí desde la tierra.',
    },
    description: 'La sangre de Abel "clama" a Dios desde la tierra pidiendo justicia contra el asesino. Hebreos presenta la sangre de Cristo como la que "habla mejor": no pide venganza sino misericordia. El primer fratricidio de la historia prefigura la muerte del inocente por excelencia; pero donde Abel solo podía gemir, Cristo intercede. La historia de Caín y Abel es el marco tipológico de la Pasión.',
  },
  {
    id: 100,
    title: 'La abominación desoladora: profecía e historia',
    type: 'paralelo temático',
    theme: 'juicio e historia',
    importance: 4,
    verseA: {
      reference: 'Mateo 24:15',
      text: 'Por tanto, cuando veáis en el lugar santo la abominación desoladora de que habló el profeta Daniel (el que lee, entienda).',
    },
    verseB: {
      reference: 'Daniel 9:27',
      text: 'Y por otra semana confirmará el pacto con muchos; a la mitad de la semana hará cesar el sacrificio y la ofrenda. Después con la muchedumbre de las abominaciones vendrá el desolador, hasta que venga la consumación, y lo que está determinado se derrame sobre el desolador.',
    },
    description: 'Daniel profetizó la "abominación desoladora" que se cumpliría primero con la profanación del templo por Antíoco IV Epífanes (167 a.C.). Jesús relanza la profecía dándole una segunda aplicación: la destrucción del templo en el año 70 d.C. y, más allá, los signos del fin de los tiempos. Daniel es el prototipo de la profecía de múltiple cumplimiento.',
  },
  {
    id: 101,
    title: 'Las naciones conjuradas contra el Ungido',
    type: 'cita directa',
    theme: 'pasión y providencia',
    importance: 4,
    verseA: {
      reference: 'Hechos 4:25-26',
      text: 'Que por boca de David tu siervo dijiste: ¿Por qué se amotinan las gentes, y los pueblos piensan cosas vanas? Se reunieron los reyes de la tierra, y los príncipes se juntaron en uno contra el Señor, y contra su Cristo.',
    },
    verseB: {
      reference: 'Salmo 2:1-2',
      text: '¿Por qué se amotinan las gentes, y los pueblos piensan cosas vanas? Se levantarán los reyes de la tierra, y príncipes consultarán unidos contra el Señor y contra su ungido.',
    },
    description: 'La comunidad primitiva, tras la liberación de Pedro y Juan, ora utilizando el Salmo 2 para interpretar la Pasión: Herodes, Pilato, los gentiles y el pueblo de Israel se "reunieron" contra Jesús —el Ungido— cumpliendo exactamente lo que el Salmo describía. La persecución no es un fracaso providencial sino su realización: "tu mano y tu consejo predestinaron que sucediese".',
  },
  {
    id: 102,
    title: 'La visión del trono: de Ezequiel al Apocalipsis',
    type: 'paralelo temático',
    theme: 'liturgia celestial',
    importance: 5,
    verseA: {
      reference: 'Apocalipsis 4:2-8',
      text: 'Y he aquí, un trono estaba puesto en el cielo, y en el trono, uno sentado. Y el aspecto del que estaba sentado era semejante a piedra de jaspe y de cornalina... En derredor del trono había cuatro seres vivientes llenos de ojos delante y detrás. El primero era semejante a un león; el segundo era semejante a un becerro; el tercero tenía rostro como de hombre; el cuarto era semejante a un águila volando.',
    },
    verseB: {
      reference: 'Ezequiel 1:5-10',
      text: 'Y en medio de ella la figura de cuatro seres vivientes... cada uno tenía cuatro caras y cuatro alas... En cuanto a la semejanza de sus rostros, tenían rostro de hombre, y rostro de león al lado derecho de los cuatro, y rostro de buey a su lado izquierdo; también había en los cuatro rostro de águila.',
    },
    description: 'Juan en el Apocalipsis retoma con deliberada fidelidad la visión del trono de Ezequiel: los cuatro vivientes con sus cuatro rostros (hombre, toro, león, águila), el mar de cristal, el trono luminoso. Pero hay una diferencia crucial: en el centro del trono de Ezequiel está la gloria del Señor; en el Apocalipsis está también el Cordero. La liturgia celestial revela que Cristo comparte el trono de Dios.',
  },
  {
    id: 103,
    title: 'Isaías vio la gloria de Cristo',
    type: 'alusión',
    theme: 'cristología',
    importance: 4,
    verseA: {
      reference: 'Juan 12:41',
      text: 'Isaías dijo esto cuando vio su gloria, y habló acerca de él.',
    },
    verseB: {
      reference: 'Isaías 6:1-3',
      text: 'En el año que murió el rey Uzías vi yo al Señor sentado sobre un trono alto y sublime, y sus faldas llenaban el templo. Por encima de él había serafines... Y el uno al otro daba voces, diciendo: Santo, santo, santo, el Señor de los ejércitos; toda la tierra está llena de su gloria.',
    },
    description: 'Juan cita dos pasajes de Isaías (53 y 6) para explicar la incredulidad de los judíos ante Jesús, y luego hace una afirmación sorprendente: cuando Isaías vio la gloria de Yahvé en el templo (Is 6), lo que vio fue "su gloria" —la gloria de Cristo—. Juan identifica la gloria de Yahvé en el AT con la gloria del Hijo encarnado: la cristología joanica no nace en Belén sino en la eternidad.',
  },
  {
    id: 104,
    title: 'El misterio grande: Cristo y la Iglesia en el matrimonio',
    type: 'tipología',
    theme: 'eclesiología y matrimonio',
    importance: 5,
    verseA: {
      reference: 'Efesios 5:31-32',
      text: 'Por esto dejará el hombre a su padre y a su madre, y se unirá a su mujer, y los dos serán una sola carne. Grande es este misterio; mas yo digo esto respecto de Cristo y de la iglesia.',
    },
    verseB: {
      reference: 'Génesis 2:24',
      text: 'Por tanto, dejará el hombre a su padre y a su madre, y se unirá a su mujer, y serán una sola carne.',
    },
    description: 'Pablo cita Génesis 2:24 —la institución del matrimonio— y revela que ese texto tenía desde el principio un significado más profundo: prefiguraba la unión de Cristo con la Iglesia. El matrimonio humano no es solo institución natural sino sacramento: signo visible de la alianza invisible entre Cristo y su Iglesia. Esta lectura es la base de la teología sacramental católica del matrimonio.',
  },

  // ── CITAS DIRECTAS (complemento 3) ───────────────────────────────
  {
    id: 105,
    title: 'La Palabra de Dios no vuelve vacía',
    type: 'paralelo temático',
    theme: 'teología de la Palabra',
    importance: 4,
    verseA: {
      reference: 'Hebreos 4:12',
      text: 'Porque la palabra de Dios es viva y eficaz, y más cortante que toda espada de dos filos; y penetra hasta partir el alma y el espíritu, las coyunturas y los tuétanos, y discierne los pensamientos y las intenciones del corazón.',
    },
    verseB: {
      reference: 'Isaías 55:10-11',
      text: 'Porque como desciende de los cielos la lluvia y la nieve, y no vuelve allá, sino que riega la tierra, y la hace germinar y producir... así será mi palabra que sale de mi boca; no volverá a mí vacía, sino que hará lo que yo quiero, y será prosperada en aquello para que la envié.',
    },
    description: 'Isaías 55 describe la Palabra de Dios con la imagen de la lluvia: baja del cielo, fecunda la tierra y cumple su misión. Hebreos 4 profundiza en la naturaleza de esa Palabra: viva, eficaz, cortante, capaz de discernir el interior del corazón. Ambos textos presentan la Palabra divina como fuerza activa y transformadora, no mero texto inerte.',
  },
  {
    id: 106,
    title: 'Por toda la tierra salió su voz',
    type: 'cita directa',
    theme: 'misión universal',
    importance: 3,
    verseA: {
      reference: 'Romanos 10:18',
      text: '¿No han oído? Antes bien, por toda la tierra ha salido la voz de ellos, y hasta los fines de la tierra sus palabras.',
    },
    verseB: {
      reference: 'Salmo 19:4',
      text: 'Por toda la tierra salió su voz, y hasta el extremo del mundo sus palabras.',
    },
    description: 'El Salmo 19 describe el silencioso testimonio de la creación: los cielos proclaman la gloria de Dios sin palabra audible, pero su voz llega hasta los confines de la tierra. Pablo lo aplica a la proclamación misionera del evangelio: el anuncio de Cristo en el mundo cumple lo que el himno cósmico prefiguraba. La "voz" de la creación se convierte en la voz de los misioneros.',
  },
  {
    id: 107,
    title: 'Hallado por los que no me buscaban',
    type: 'cita directa',
    theme: 'misión a los gentiles',
    importance: 4,
    verseA: {
      reference: 'Romanos 10:20-21',
      text: 'E Isaías se atreve y dice: Fui hallado de los que no me buscaban; me manifesté a los que no preguntaban por mí. Pero acerca de Israel dice: Todo el día extendí mis manos a un pueblo desobediente y contradictor.',
    },
    verseB: {
      reference: 'Isaías 65:1-2',
      text: 'Fui buscado por los que no preguntaban por mí; fui hallado por los que no me buscaban. Dije a gente que no invocaba mi nombre: Heme aquí, heme aquí. Extendí mis manos todo el día a pueblo rebelde, que anda por camino no bueno, en pos de sus pensamientos.',
    },
    description: 'Isaías 65 anticipa la paradoja de la misión: Dios se deja encontrar precisamente por quienes no le buscaban —los gentiles— mientras que su propio pueblo le rechaza con las manos extendidas de Dios. Pablo aplica la cita a su propia experiencia apostólica: los gentiles acogen el evangelio que Israel en su conjunto rechaza. La "ironía misionera" de Isaías se convierte en el principio estructural de Romanos 9-11.',
  },
  {
    id: 108,
    title: 'Seré su Dios y ellos serán mi pueblo',
    type: 'cita directa',
    theme: 'eclesiología',
    importance: 4,
    verseA: {
      reference: '2 Corintios 6:16',
      text: '¿Y qué acuerdo hay entre el templo de Dios y los ídolos? Porque vosotros sois el templo del Dios viviente, como Dios dijo: Habitaré y andaré entre ellos, y seré su Dios, y ellos serán mi pueblo.',
    },
    verseB: {
      reference: 'Levítico 26:12',
      text: 'Y andaré entre vosotros, y seré vuestro Dios, y vosotros seréis mi pueblo.',
    },
    description: 'La promesa del Sinaí —"seré vuestro Dios y vosotros seréis mi pueblo"— es la fórmula de la Alianza que recorre toda la Escritura. Pablo la aplica a los creyentes en Cristo: el templo ya no es de piedra sino la comunidad de los bautizados, el cuerpo de quienes acogen a Dios. La fórmula de la Alianza encuentra en la Iglesia su habitación definitiva.',
  },
  {
    id: 109,
    title: 'La bendición aarónica y la bendición trinitaria',
    type: 'paralelo temático',
    theme: 'liturgia y Trinidad',
    importance: 3,
    verseA: {
      reference: '2 Corintios 13:13',
      text: 'La gracia del Señor Jesucristo, el amor de Dios, y la comunión del Espíritu Santo sean con todos vosotros.',
    },
    verseB: {
      reference: 'Números 6:24-26',
      text: 'El Señor te bendiga, y te guarde; el Señor haga resplandecer su rostro sobre ti, y tenga de ti misericordia; el Señor alce sobre ti su rostro, y ponga en ti paz.',
    },
    description: 'La bendición aarónica del libro de Números es la fórmula litúrgica más antigua del pueblo de Dios: una triple invocación del nombre del Señor sobre el pueblo. La bendición trinitaria con que Pablo cierra su segunda carta a los Corintios tiene la misma estructura triple, aplicada a las tres Personas. La Trinidad cristiana es el despliegue pleno del "nombre" único de la bendición aarónica.',
  },
  {
    id: 110,
    title: 'En lenguas extrañas hablaré a este pueblo',
    type: 'cita directa',
    theme: 'dones del Espíritu',
    importance: 3,
    verseA: {
      reference: '1 Corintios 14:21',
      text: 'En la ley está escrito: En otras lenguas y con otros labios hablaré a este pueblo; y ni aun así me oirán, dice el Señor.',
    },
    verseB: {
      reference: 'Isaías 28:11-12',
      text: 'Porque en lengua de tartamudos, y en extraña lengua hablará a este pueblo, a los cuales dijo: Este es el reposo; dad reposo al cansado; y este es el refrigerio. Mas no quisieron oír.',
    },
    description: 'Isaías 28 describe irónicamente el juicio sobre Israel: Dios hablará a un pueblo que no quiso escuchar su palabra sencilla, ahora en lenguas extrañas —las de los asirios invasores—. Pablo aplica este texto al don de lenguas en Corinto: las lenguas son señal para los incrédulos, pero si la comunidad solo habla en lenguas sin interpretación, repite el escándalo que Isaías denunciaba.',
  },
  {
    id: 111,
    title: 'En tiempo aceptable te oí: el tiempo de la salvación',
    type: 'cita directa',
    theme: 'salvación y kairos',
    importance: 4,
    verseA: {
      reference: '2 Corintios 6:2',
      text: 'Porque dice: En tiempo aceptable te he oído, y en día de salvación te he socorrido. He aquí ahora el tiempo aceptable; he aquí ahora el día de salvación.',
    },
    verseB: {
      reference: 'Isaías 49:8',
      text: 'Así dijo el Señor: En tiempo aceptable te oí, y en el día de salvación te ayudé; y te guardaré, y te daré por pacto del pueblo, para que restaures la tierra, para que heredes asoladas heredades.',
    },
    description: 'El segundo Cántico del Siervo contiene la promesa divina al Siervo: un "tiempo aceptable" en que Dios escuchará y salvará. Pablo cita este texto para urgir a los corintios: ese "tiempo aceptable" ha llegado en Cristo, y es el presente de la predicación apostólica. El kairos de la salvación no es un momento histórico pasado sino el eterno "ahora" de la gracia.',
  },
  {
    id: 112,
    title: 'El Rey de gloria entra: tipología de la Ascensión',
    type: 'tipología',
    theme: 'ascensión y gloria',
    importance: 3,
    verseA: {
      reference: 'Hechos 1:9-11',
      text: 'Y habiendo dicho estas cosas, viéndolo ellos, fue alzado, y le recibió una nube que le ocultó de sus ojos... Este mismo Jesús, que ha sido tomado de vosotros al cielo, así vendrá como le habéis visto ir al cielo.',
    },
    verseB: {
      reference: 'Salmo 24:7-10',
      text: 'Alzad, oh puertas, vuestras cabezas, y alzaos vosotras, puertas eternas, y entrará el Rey de gloria... ¿Quién es este Rey de gloria? El Señor fuerte y valiente, el Señor poderoso en batalla.',
    },
    description: 'El Salmo 24 es un himno procesional que convoca a las puertas del cielo a abrirse para el "Rey de gloria". Los Padres de la Iglesia lo interpretaron como el diálogo litúrgico entre los ángeles ante la Ascensión de Cristo: el cielo pregunta quién es este ser humano que sube, y la respuesta es que es el Señor fuerte y valiente. La Ascensión es el ingreso triunfal del Hijo de Dios encarnado en la gloria del Padre.',
  },
  {
    id: 113,
    title: 'Echa a la esclava y su hijo: las dos alianzas',
    type: 'cita directa',
    theme: 'alianza y libertad',
    importance: 3,
    verseA: {
      reference: 'Gálatas 4:30',
      text: 'Mas ¿qué dice la Escritura? Echa a la esclava y a su hijo, porque no heredará el hijo de la esclava con el hijo de la libre.',
    },
    verseB: {
      reference: 'Génesis 21:10',
      text: 'Y dijo a Abraham: Echa a esta sierva y a su hijo, porque el hijo de esta sierva no ha de heredar con Isaac mi hijo.',
    },
    description: 'Sara exige la expulsión de Agar e Ismael para que Isaac herede solo. Pablo convierte este episodio doméstico en alegoría teológica: Agar es el Sinaí (alianza de esclavitud), Sara es Jerusalén celestial (alianza de libertad). La expulsión de Ismael prefigura la superación de la ley mosaica por la gracia evangélica. El heredero es el hijo de la promesa libre, no el de la servidumbre.',
  },
  {
    id: 114,
    title: 'El que quiere amar la vida: sabiduría de vida justa',
    type: 'cita directa',
    theme: 'ética cristiana',
    importance: 3,
    verseA: {
      reference: '1 Pedro 3:10-12',
      text: 'Porque: El que quiere amar la vida y ver días buenos, refrene su lengua de mal, y sus labios no hablen engaño; apártese del mal, y haga el bien; busque la paz, y sígala. Porque los ojos del Señor están sobre los justos, y sus oídos atentos a sus oraciones.',
    },
    verseB: {
      reference: 'Salmo 34:12-16',
      text: '¿Quién es el hombre que desea vida, que desea muchos días para ver el bien? Guarda tu lengua del mal, y tus labios de hablar engaño. Apártate del mal, y haz el bien; busca la paz, y síguela. Los ojos del Señor están sobre los justos, y atentos sus oídos al clamor de ellos.',
    },
    description: 'Pedro cita el Salmo 34 casi literalmente para guiar la conducta de los creyentes bajo persecución. La sabiduría ética del salmista —lengua guardada, paz buscada, mal evitado— no es reemplazada por el evangelio sino confirmada e interiorizada. La Torah sapiencial del AT es la gramática moral del Nuevo.',
  },

  {
    id: 75,
    title: 'El incienso y la oración de los santos',
    type: 'paralelo temático',
    theme: 'liturgia y oración',
    importance: 3,
    verseA: {
      reference: 'Apocalipsis 5:8',
      text: 'Y cuando hubo tomado el libro, los cuatro seres vivientes y los veinticuatro ancianos se postraron delante del Cordero; cada uno tenía un arpa, y copas de oro llenas de incienso, que son las oraciones de los santos.',
    },
    verseB: {
      reference: 'Salmo 141:2',
      text: 'Suba mi oración delante de ti como el incienso, el don de mis manos como la ofrenda de la tarde.',
    },
    description: 'El salmista pedía que su oración subiera ante Dios como el humo del incienso del altar. El Apocalipsis revela que eso es exactamente lo que ocurre en la liturgia celestial: las oraciones de los santos son el incienso que sube ante el trono del Cordero. La oración litúrgica terrena y la liturgia celestial no son dos realidades separadas sino dos dimensiones de la misma adoración.',
  },
];
