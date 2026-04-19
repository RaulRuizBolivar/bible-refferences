import { Prophecy } from '../models/prophecy.model';

export const PROPHECIES: Prophecy[] = [

  // ── MESIÁNICAS · NACIMIENTO Y LINAJE ─────────────────────────────
  {
    id: 1,
    title: 'El Proto-Evangelio: la simiente de la mujer',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 5,
    oldTestament: {
      reference: 'Génesis 3:15',
      text: 'Y pondré enemistad entre ti y la mujer, y entre tu simiente y la simiente suya; ésta te herirá en la cabeza, y tú le herirás en el calcañar.',
    },
    newTestament: {
      reference: 'Gálatas 4:4',
      text: 'Pero cuando vino el cumplimiento del tiempo, Dios envió a su Hijo, nacido de mujer y nacido bajo la ley.',
    },
    description: 'Primera profecía mesiánica de la Biblia, pronunciada tras la caída original. Dios anuncia que la descendencia de la mujer vencerá a la serpiente. La Iglesia la llama Proto-Evangelio: el primer anuncio del Salvador que aplastará el mal.',
  },
  {
    id: 2,
    title: 'Simiente de Abraham: bendición para todas las naciones',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 5,
    oldTestament: {
      reference: 'Génesis 22:18',
      text: 'En tu simiente serán benditas todas las naciones de la tierra, por cuanto obedeciste a mi voz.',
    },
    newTestament: {
      reference: 'Gálatas 3:16',
      text: 'Ahora bien, a Abraham fueron hechas las promesas, y a su simiente. No dice: Y a las simientes, como si hablase de muchos, sino como de uno: Y a tu simiente, la cual es Cristo.',
    },
    description: 'La promesa hecha a Abraham en el monte Moriah —tras la ofrenda de Isaac— contiene el horizonte universal del mesianismo: en su descendiente (Cristo) serán bendecidas todas las naciones de la tierra.',
  },
  {
    id: 3,
    title: 'El trono eterno de David',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 5,
    oldTestament: {
      reference: '2 Samuel 7:12-16',
      text: 'Cuando tus días sean cumplidos, y descanses con tus padres, yo levantaré después de ti a uno de tu linaje, el cual procederá de tus entrañas, y afirmaré su reino. Yo le seré padre, y él me será hijo. Y será afirmada tu casa y tu reino para siempre delante de tu rostro, y tu trono será estable eternamente.',
    },
    newTestament: {
      reference: 'Lucas 1:32-33',
      text: 'Este será grande, y será llamado Hijo del Altísimo; y el Señor Dios le dará el trono de David su padre; y reinará sobre la casa de Jacob por los siglos, y su reino no tendrá fin.',
    },
    description: 'El oráculo de Natán a David es el pilar dinástico del mesianismo bíblico. Dios promete un descendiente cuyo reino no tendrá fin. Lucas muestra en el anuncio del ángel a María el cumplimiento pleno de esta promesa en Jesús.',
  },
  {
    id: 4,
    title: 'Nacimiento virginal del Mesías',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 5,
    oldTestament: {
      reference: 'Isaías 7:14',
      text: 'Por eso el Señor mismo les dará una señal: He aquí que la virgen concebirá y dará a luz un hijo, y le pondrá por nombre Emanuel.',
    },
    newTestament: {
      reference: 'Mateo 1:22-23',
      text: 'Todo esto aconteció para que se cumpliese lo dicho por el Señor por medio del profeta: He aquí, una virgen concebirá y dará a luz un hijo, y llamarás su nombre Emanuel, que traducido es: Dios con nosotros.',
    },
    description: 'Isaías anuncia que una virgen daría a luz al Mesías llamado Emanuel ("Dios con nosotros"). Mateo vincula explícitamente este oráculo al nacimiento de Jesús, subrayando la presencia divina encarnada en él.',
  },
  {
    id: 5,
    title: 'El niño Admirable: Príncipe de Paz',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 5,
    oldTestament: {
      reference: 'Isaías 9:6-7',
      text: 'Porque un niño nos es nacido, hijo nos es dado, y el principado sobre su hombro; y se llamará su nombre Admirable, Consejero, Dios fuerte, Padre eterno, Príncipe de paz. Lo dilatado de su imperio y la paz no tendrán límite, sobre el trono de David y sobre su reino.',
    },
    newTestament: {
      reference: 'Lucas 2:11',
      text: 'Que os ha nacido hoy, en la ciudad de David, un Salvador, que es Cristo el Señor.',
    },
    description: 'Isaías profetiza el nacimiento de un niño que acumula títulos divinos: Dios fuerte, Padre eterno, Príncipe de paz. La acumulación de estos títulos trasciende cualquier rey humano y apunta al misterio de la Encarnación.',
  },
  {
    id: 6,
    title: 'Nacimiento en Belén',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 5,
    oldTestament: {
      reference: 'Miqueas 5:2',
      text: 'Pero tú, Belén Efratá, aunque eres pequeña entre las familias de Judá, de ti me saldrá el que ha de ser Señor en Israel; y sus salidas son desde el principio, desde los días de la eternidad.',
    },
    newTestament: {
      reference: 'Mateo 2:5-6',
      text: 'En Belén de Judea; porque así está escrito por el profeta: Y tú, Belén, de la tierra de Judá, no eres la más pequeña entre los príncipes de Judá; porque de ti saldrá un guiador, que apacentará a mi pueblo Israel.',
    },
    description: 'Miqueas especifica la localidad del nacimiento del rey mesiánico con siglos de anticipación. Los sumos sacerdotes citan este pasaje a Herodes cuando los magos buscan al recién nacido.',
  },
  {
    id: 7,
    title: 'El Mesías de la tribu de Judá',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 4,
    oldTestament: {
      reference: 'Génesis 49:10',
      text: 'No se apartará el cetro de Judá, ni el legislador de entre sus pies, hasta que venga Siloh; y a él se congregarán los pueblos.',
    },
    newTestament: {
      reference: 'Hebreos 7:14',
      text: 'Porque manifiesto es que nuestro Señor nació de la tribu de Judá, de la cual nada habló Moisés tocante al sacerdocio.',
    },
    description: 'La bendición de Jacob a Judá anuncia que de esa tribu vendría el gobernante definitivo. Mateo traza la genealogía de Jesús a través de Judá y David; Hebreos lo confirma al hablar del sacerdocio según Melquisedec.',
  },
  {
    id: 8,
    title: 'La estrella de Jacob',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 4,
    oldTestament: {
      reference: 'Números 24:17',
      text: 'Lo veré, mas no ahora; lo miraré, mas no de cerca; saldrá ESTRELLA de Jacob, y se levantará cetro de Israel, y herirá las sienes de Moab.',
    },
    newTestament: {
      reference: 'Mateo 2:2',
      text: '¿Dónde está el rey de los judíos, que ha nacido? Porque su estrella hemos visto en el oriente, y venimos a adorarle.',
    },
    description: 'El oráculo del profeta pagano Balaam anticipa la estrella que anunciaría el nacimiento del rey de Israel. Los magos de Oriente reconocieron esa señal celeste y emprendieron el viaje para adorar al recién nacido.',
  },
  {
    id: 9,
    title: 'De Egipto llamé a mi hijo',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 3,
    oldTestament: {
      reference: 'Oseas 11:1',
      text: 'Cuando Israel era muchacho, yo lo amé, y de Egipto llamé a mi hijo.',
    },
    newTestament: {
      reference: 'Mateo 2:15',
      text: 'Y estuvo allá hasta la muerte de Herodes, para que se cumpliese lo que dijo el Señor por medio del profeta, cuando dijo: De Egipto llamé a mi hijo.',
    },
    description: 'Oseas habla del éxodo de Israel como experiencia filial con Dios. Mateo ve en la huida de Jesús a Egipto y su posterior regreso una recapitulación de la historia de Israel: Jesús es el nuevo y definitivo hijo de Dios.',
  },
  {
    id: 10,
    title: 'El llanto de Raquel en Ramá',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 3,
    oldTestament: {
      reference: 'Jeremías 31:15',
      text: 'Así ha dicho el Señor: Voz fue oída en Ramá, llanto y lloro amargo; Raquel que llora por sus hijos, y no quiso ser consolada, porque perecieron.',
    },
    newTestament: {
      reference: 'Mateo 2:17-18',
      text: 'Entonces se cumplió lo que fue dicho por el profeta Jeremías, cuando dijo: Voz fue oída en Ramá, grande lamentación, lloro y gemido; Raquel que llora a sus hijos, y no quiso ser consolada, porque perecieron.',
    },
    description: 'Jeremías describe el llanto de las madres israelitas durante la deportación babilónica. Mateo lo aplica a la masacre de los inocentes de Belén ordenada por Herodes, viendo en ese llanto el cumplimiento de la profecía.',
  },

  // ── MESIÁNICAS · PRECURSOR ────────────────────────────────────────
  {
    id: 11,
    title: 'La voz que clama en el desierto',
    category: 'mesiánica',
    theme: 'precursor',
    importance: 5,
    oldTestament: {
      reference: 'Isaías 40:3',
      text: 'Voz del que clama en el desierto: Preparad camino al Señor; enderezad calzada en la soledad a nuestro Dios.',
    },
    newTestament: {
      reference: 'Juan 1:23',
      text: 'Él dijo: Yo soy la voz de uno que clama en el desierto: Enderezad el camino del Señor, como dijo el profeta Isaías.',
    },
    description: 'Isaías abre su libro de consolación anunciando una voz que prepararía el camino del Señor. Juan el Bautista se identifica expresamente con esa voz, reconociendo su misión de precursor del Mesías.',
  },
  {
    id: 12,
    title: 'Mi mensajero que preparará el camino',
    category: 'mesiánica',
    theme: 'precursor',
    importance: 4,
    oldTestament: {
      reference: 'Malaquías 3:1',
      text: 'He aquí, yo envío mi mensajero, el cual preparará el camino delante de mí; y vendrá súbitamente a su templo el Señor a quien vosotros buscáis, y el ángel del pacto, a quien deseáis vosotros.',
    },
    newTestament: {
      reference: 'Marcos 1:2',
      text: 'Como está escrito en Isaías el profeta: He aquí yo envío mi mensajero delante de tu faz, el cual preparará tu camino delante de ti.',
    },
    description: 'Malaquías cierra el canon hebreo prometiendo un mensajero que prepararía la llegada del Señor al templo. Marcos identifica a Juan el Bautista como ese mensajero, que inaugura su evangelio con esta cita.',
  },
  {
    id: 13,
    title: 'Vendrá el profeta Elías',
    category: 'mesiánica',
    theme: 'precursor',
    importance: 3,
    oldTestament: {
      reference: 'Malaquías 4:5',
      text: 'He aquí, yo os envío el profeta Elías, antes que venga el día de Jehová, grande y terrible.',
    },
    newTestament: {
      reference: 'Mateo 11:14',
      text: 'Y si queréis recibirlo, él es aquel Elías que había de venir.',
    },
    description: 'Malaquías profetiza que Elías volvería antes del día del Señor. Jesús mismo declara que Juan el Bautista actuó en el espíritu y poder de Elías, cumpliendo esta expectativa en el plano espiritual.',
  },

  // ── MESIÁNICAS · MINISTERIO ───────────────────────────────────────
  {
    id: 14,
    title: 'El Espíritu del Señor sobre el Mesías',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 5,
    oldTestament: {
      reference: 'Isaías 61:1-2',
      text: 'El Espíritu de Jehová el Señor está sobre mí, por cuanto me ungió Jehová para predicar buenas nuevas a los abatidos; me envió a vendar a los quebrantados de corazón, a publicar libertad a los cautivos, y a los presos apertura de cárcel; a proclamar el año de gracia de Jehová.',
    },
    newTestament: {
      reference: 'Lucas 4:18-19',
      text: 'El Espíritu del Señor está sobre mí, por cuanto me ha ungido para dar buenas nuevas a los pobres; me ha enviado a sanar a los quebrantados de corazón; a pregonar libertad a los cautivos, y vista a los ciegos; a poner en libertad a los oprimidos; a predicar el año agradable del Señor.',
    },
    description: 'En la sinagoga de Nazaret, Jesús lee este pasaje de Isaías y declara: "Hoy se ha cumplido esta Escritura delante de vosotros." Es la presentación programática de su misión mesiánica.',
  },
  {
    id: 15,
    title: 'Ciegos ven y sordos oyen',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 4,
    oldTestament: {
      reference: 'Isaías 35:5-6',
      text: 'Entonces los ojos de los ciegos serán abiertos, y los oídos de los sordos se abrirán. Entonces el cojo saltará como un ciervo, y cantará la lengua del mudo; porque aguas serán cavadas en el desierto.',
    },
    newTestament: {
      reference: 'Mateo 11:5',
      text: 'Los ciegos ven, los cojos andan, los leprosos son limpiados, los sordos oyen, los muertos son resucitados, y a los pobres es anunciado el evangelio.',
    },
    description: 'Isaías describe la era mesiánica como tiempo de sanaciones prodigiosas. Cuando Juan el Bautista pregunta desde prisión si Jesús es el que había de venir, Jesús responde citando estas señales como garantía de su identidad.',
  },
  {
    id: 16,
    title: 'Mi siervo elegido traerá justicia',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 4,
    oldTestament: {
      reference: 'Isaías 42:1-4',
      text: 'He aquí mi siervo, yo le sostendré; mi escogido, en quien mi alma tiene contentamiento; he puesto sobre él mi Espíritu; él traerá justicia a las naciones. No gritará, ni alzará su voz, ni la hará oír en las calles. No quebrará la caña cascada, ni apagará el pábilo que humeare.',
    },
    newTestament: {
      reference: 'Mateo 12:18-21',
      text: 'He aquí mi siervo, a quien he escogido; mi Amado, en quien se agrada mi alma; pondré mi Espíritu sobre él, y a los gentiles anunciará justicia. No contenderá, ni voceará, ni nadie oirá en las calles su voz. La caña cascada no quebrará, y el pábilo que humea no apagará.',
    },
    description: 'El primero de los Cánticos del Siervo presenta al Mesías como elegido de Dios para traer justicia universal. Su método es la mansedumbre, no la violencia: no quebrará lo frágil sino que lo sanará.',
  },
  {
    id: 17,
    title: 'Llevó nuestras enfermedades',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 4,
    oldTestament: {
      reference: 'Isaías 53:4',
      text: 'Ciertamente llevó él nuestras enfermedades, y sufrió nuestros dolores; y nosotros le tuvimos por azotado, por herido de Dios y abatido.',
    },
    newTestament: {
      reference: 'Mateo 8:17',
      text: 'Para que se cumpliese lo dicho por el profeta Isaías, cuando dijo: El mismo tomó nuestras enfermedades, y llevó nuestras dolencias.',
    },
    description: 'Mateo aplica este versículo de Isaías 53 ya a las curaciones de Jesús durante su ministerio público, antes de la Pasión. El siervo sufriente lleva sobre sí no solo los pecados sino también las enfermedades del pueblo.',
  },
  {
    id: 18,
    title: 'Hablaré en parábolas',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 3,
    oldTestament: {
      reference: 'Salmo 78:2',
      text: 'Abriré mi boca en parábolas; hablaré cosas escondidas desde tiempos antiguos.',
    },
    newTestament: {
      reference: 'Mateo 13:35',
      text: 'Para que se cumpliese lo dicho por el profeta, cuando dijo: Abriré en parábolas mi boca; declararé cosas escondidas desde la fundación del mundo.',
    },
    description: 'El salmista describe un modo de enseñanza por parábolas que Mateo ve cumplido en el estilo didáctico de Jesús. Las parábolas del reino revelan misterios escondidos desde la fundación del mundo.',
  },
  {
    id: 19,
    title: 'Entrada triunfal en Jerusalén',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 5,
    oldTestament: {
      reference: 'Zacarías 9:9',
      text: 'Alégrate mucho, hija de Sión; da voces de júbilo, hija de Jerusalén; he aquí tu rey vendrá a ti, justo y salvador, humilde, y cabalgando sobre un asno, sobre un pollino hijo de asna.',
    },
    newTestament: {
      reference: 'Juan 12:14-15',
      text: 'Y Jesús, hallando un asnillo, cabalgó sobre él, como está escrito: No temas, hija de Sión; he aquí tu Rey viene, montado sobre un pollino de asna.',
    },
    description: 'Zacarías describe al rey mesiánico como humilde, montado en un asno y no en un caballo de guerra. Juan identifica la entrada de Jesús a Jerusalén el Domingo de Ramos como el cumplimiento literal de esta profecía.',
  },
  {
    id: 20,
    title: 'Bendito el que viene en nombre del Señor',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 4,
    oldTestament: {
      reference: 'Salmo 118:26',
      text: 'Bendito el que viene en el nombre de Jehová; os bendecimos desde la casa de Jehová.',
    },
    newTestament: {
      reference: 'Mateo 21:9',
      text: 'Y la multitud que iba delante y la que iba detrás aclamaba, diciendo: ¡Hosanna al Hijo de David! ¡Bendito el que viene en el nombre del Señor! ¡Hosanna en las alturas!',
    },
    description: 'El Salmo 118, himno de procesión pascual, contiene el grito mesiánico que la multitud dirigió a Jesús en el Domingo de Ramos. La palabra "Hosanna" (¡Sálvanos!) y la bendición se combinan en la aclamación.',
  },
  {
    id: 21,
    title: 'La piedra rechazada, cabeza del ángulo',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 5,
    oldTestament: {
      reference: 'Salmo 118:22',
      text: 'La piedra que desecharon los edificadores ha venido a ser cabeza del ángulo.',
    },
    newTestament: {
      reference: 'Mateo 21:42',
      text: '¿Nunca leísteis en las Escrituras: La piedra que desecharon los edificadores, esta fue hecha cabeza del ángulo? El Señor ha hecho esto, y es cosa maravillosa a nuestros ojos.',
    },
    description: 'Jesús aplica esta imagen del Salmo 118 a su propio rechazo por parte de los líderes religiosos y a su glorificación posterior. Pedro lo retomará en Hechos 4 y en su primera carta, donde Jesús es la piedra viva.',
  },
  {
    id: 22,
    title: 'Culto universal en espíritu y verdad',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 3,
    oldTestament: {
      reference: 'Malaquías 1:11',
      text: 'Porque desde donde el sol nace hasta donde se pone, es grande mi nombre entre las naciones; y en todo lugar se ofrece a mi nombre incienso y ofrenda limpia, porque grande es mi nombre entre las naciones, dice el Señor de los ejércitos.',
    },
    newTestament: {
      reference: 'Juan 4:21-23',
      text: 'Jesús le dijo: Mujer, créeme, que la hora viene cuando ni en este monte ni en Jerusalén adoraréis al Padre. Mas la hora viene, y ahora es, cuando los verdaderos adoradores adorarán al Padre en espíritu y en verdad.',
    },
    description: 'Malaquías anticipa una adoración universal y pura que trasciende el culto del templo. Jesús, en su diálogo con la samaritana, revela que esa hora ha llegado: el culto ya no estará ligado a un lugar sino al Espíritu.',
  },
  {
    id: 23,
    title: 'La raíz de Jesé reunirá a los pueblos',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 3,
    oldTestament: {
      reference: 'Isaías 11:10-12',
      text: 'Acontecerá en aquel tiempo que la raíz de Isaí, la cual estará puesta por pendón a los pueblos, será buscada por las gentes; y su habitación será gloriosa. Y el Señor alzará otra vez su mano para recobrar el remanente de su pueblo.',
    },
    newTestament: {
      reference: 'Romanos 15:12',
      text: 'Y otra vez Isaías dice: Estará la raíz de Isaí, y el que se levantará a regir los gentiles; los gentiles esperarán en él.',
    },
    description: 'Isaías profetiza que un vástago del padre de David (Jesé) se convertiría en señal para los pueblos gentiles. Pablo lo cita en Romanos para justificar la misión a los gentiles: Cristo es la raíz en quien esperan las naciones.',
  },

  // ── MESIÁNICAS · PASIÓN ───────────────────────────────────────────
  {
    id: 24,
    title: 'Traición por un amigo íntimo',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 5,
    oldTestament: {
      reference: 'Salmo 41:9',
      text: 'Aun el hombre de mi paz, en quien yo confiaba, el que de mi pan comía, alzó contra mí el calcañar.',
    },
    newTestament: {
      reference: 'Juan 13:18',
      text: 'No hablo de todos vosotros; yo sé a quienes he elegido; mas para que se cumpla la Escritura: El que come pan conmigo, levantó contra mí su calcañar.',
    },
    description: 'El salmista lamenta la traición de un compañero de mesa. Jesús cita este versículo en la Última Cena señalando a Judas, quien compartió el pan con él y lo entregaría esa noche.',
  },
  {
    id: 25,
    title: 'Traición por treinta monedas de plata',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 5,
    oldTestament: {
      reference: 'Zacarías 11:12-13',
      text: 'Y les dije: Si os parece bien, dadme mi salario; y si no, dejadlo. Y pesaron por mi salario treinta piezas de plata. Y me dijo el Señor: Échalo al tesoro; ¡hermoso precio con que me han apreciado! Y tomé las treinta piezas de plata y las eché en la casa del Señor al tesoro.',
    },
    newTestament: {
      reference: 'Mateo 27:3-10',
      text: 'Entonces Judas, el que le había entregado, viendo que era condenado, devolvió arrepentido las treinta piezas de plata a los principales sacerdotes y a los ancianos... y tomaron las treinta piezas de plata... y las dieron para el campo del alfarero.',
    },
    description: 'Con asombrosa precisión, Zacarías indica el precio exacto de la traición y el destino final del dinero. Mateo narra cómo se cumple cada detalle: los treinta siclos, la devolución al templo y la compra del campo del alfarero.',
  },
  {
    id: 26,
    title: 'El pastor herido y las ovejas dispersadas',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 4,
    oldTestament: {
      reference: 'Zacarías 13:7',
      text: 'Levántate, oh espada, contra el pastor, y contra el hombre compañero mío, dice el Señor de los ejércitos; hiere al pastor, y serán dispersadas las ovejas; y volveré mi mano contra los pequeñitos.',
    },
    newTestament: {
      reference: 'Marcos 14:27',
      text: 'Entonces Jesús les dijo: Todos os escandalizaréis de mí esta noche; porque escrito está: Heriré al pastor, y las ovejas serán dispersadas.',
    },
    description: 'En el huerto de Getsemaní, Jesús cita esta profecía anunciando que sus discípulos le abandonarán. Al ser arrestado, todos huyeron, cumpliéndose literalmente la dispersión de las ovejas.',
  },
  {
    id: 27,
    title: 'Entregó su cuerpo a los golpes',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 3,
    oldTestament: {
      reference: 'Isaías 50:6',
      text: 'Di mi cuerpo a los heridores, y mis mejillas a los que me mesaban la barba; no escondí mi rostro de injurias y de esputos.',
    },
    newTestament: {
      reference: 'Marcos 14:65',
      text: 'Y algunos comenzaron a escupirle, y a cubrirle el rostro y a darle de puñetazos, y a decirle: Profetiza. Y los alguaciles le daban de bofetadas.',
    },
    description: 'El tercer Cántico del Siervo describe su disposición a recibir ultrajes sin resistencia. Jesús durante su prendimiento y proceso ante el Sanedrín cumplió exactamente esta actitud de entrega voluntaria al sufrimiento.',
  },
  {
    id: 28,
    title: 'El Siervo Sufriente',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 5,
    oldTestament: {
      reference: 'Isaías 53:3-5',
      text: 'Despreciado y desechado entre los hombres, varón de dolores, experimentado en quebranto... herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados.',
    },
    newTestament: {
      reference: '1 Pedro 2:24',
      text: 'Quien llevó él mismo nuestros pecados en su cuerpo sobre el madero, para que nosotros, estando muertos a los pecados, vivamos a la justicia; y por cuya herida fuisteis sanados.',
    },
    description: 'El cuarto Cántico del Siervo en Isaías 53 es el pasaje mesiánico más desarrollado del Antiguo Testamento. Describe la pasión, muerte vicaria y glorificación del Mesías con una precisión que la Iglesia primitiva reconoció de inmediato en Jesús de Nazaret.',
  },
  {
    id: 29,
    title: 'Dios mío, ¿por qué me has desamparado?',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 5,
    oldTestament: {
      reference: 'Salmo 22:1',
      text: 'Dios mío, Dios mío, ¿por qué me has desamparado? Lejos estás de mi salvación, y de las palabras de mi clamor.',
    },
    newTestament: {
      reference: 'Mateo 27:46',
      text: 'Y cerca de la hora novena, Jesús clamó a gran voz, diciendo: Elí, Elí, ¿lama sabactani? Esto es: Dios mío, Dios mío, ¿por qué me has desamparado?',
    },
    description: 'El Salmo 22 comienza con el grito de abandono que Jesús pronunció desde la cruz. Al citar las palabras iniciales, convoca toda la oración del salmista, que pasa del abandono a la confianza y la alabanza.',
  },
  {
    id: 30,
    title: 'Escarnio y burlas en la cruz',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 4,
    oldTestament: {
      reference: 'Salmo 22:7-8',
      text: 'Todos los que me ven me escarnecen; estiran la boca, menean la cabeza, diciendo: Se encomendó al Señor; líbrele él; sálvele, puesto que en él se complacía.',
    },
    newTestament: {
      reference: 'Mateo 27:39-43',
      text: 'Y los que pasaban le injuriaban, meneando la cabeza... y diciendo: Si eres Hijo de Dios, desciende de la cruz. De esta manera también los principales sacerdotes... decían: A otros salvó, a sí mismo no se puede salvar.',
    },
    description: 'El Salmo 22 describe con precisión las burlas que recibiría el justo sufriente: la mofa con la cabeza, el desafío a confiar en Dios. Mateo copia literalmente estas expresiones al narrar la crucifixión.',
  },
  {
    id: 31,
    title: 'Horadaron mis manos y mis pies',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 5,
    oldTestament: {
      reference: 'Salmo 22:16',
      text: 'Porque perros me han rodeado; me ha cercado cuadrilla de malignos; horadaron mis manos y mis pies.',
    },
    newTestament: {
      reference: 'Juan 20:25',
      text: 'Le dijeron los otros discípulos: Al Señor hemos visto. Él les dijo: Si no viere en sus manos la señal de los clavos, y metiere mi dedo en el lugar de los clavos, y metiere mi mano en su costado, no creeré.',
    },
    description: 'Este versículo del Salmo 22 describe las marcas de los clavos en la crucifixión antes de que esa forma de ejecución existiera en Israel. Tomás exige ver exactamente esas marcas, que el Resucitado le muestra como prueba de su identidad.',
  },
  {
    id: 32,
    title: 'Repartieron mis vestiduras y echaron suertes',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 4,
    oldTestament: {
      reference: 'Salmo 22:18',
      text: 'Repartieron entre sí mis vestidos, y sobre mi ropa echaron suertes.',
    },
    newTestament: {
      reference: 'Juan 19:24',
      text: 'Dijeron pues entre sí: No la partamos, sino echemos suertes sobre ella, a ver de quién será. Esto fue para que se cumpliese la Escritura, que dice: Repartieron entre sí mis vestidos, y sobre mi ropa echaron suertes.',
    },
    description: 'Juan es el único evangelista que cita expresamente este versículo y narra cómo los soldados echaron suertes sobre la túnica inconsútil de Jesús, cumpliendo con exactitud lo profetizado mil años antes.',
  },
  {
    id: 33,
    title: 'Hiel y vinagre por bebida',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 3,
    oldTestament: {
      reference: 'Salmo 69:21',
      text: 'Me pusieron además hiel por comida, y en mi sed me dieron a beber vinagre.',
    },
    newTestament: {
      reference: 'Juan 19:28-29',
      text: 'Después de esto, sabiendo Jesús que ya todo estaba consumado, dijo, para que la Escritura se cumpliese: Tengo sed. Y estaba allí una vasija llena de vinagre; entonces empaparon en vinagre una esponja, y poniéndola en un hisopo, se la acercaron a la boca.',
    },
    description: 'El Salmo 69 describe el sufrimiento del justo perseguido. Juan ve en el gesto de ofrecer vinagre a Jesús agonizante el cumplimiento de esta palabra del salmo, destacando que Jesús mismo "sabía que la Escritura se cumpliría".',
  },
  {
    id: 34,
    title: 'Mirarán al que traspasaron',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 5,
    oldTestament: {
      reference: 'Zacarías 12:10',
      text: 'Y derramaré sobre la casa de David, y sobre los moradores de Jerusalén, espíritu de gracia y de oración; y mirarán a mí, a quien traspasaron, y llorarán como se llora por hijo unigénito, afligiéndose por él con dolor como quien se duele por primogénito.',
    },
    newTestament: {
      reference: 'Juan 19:37',
      text: 'Y también otra Escritura dice: Mirarán al que traspasaron.',
    },
    description: 'Zacarías profetiza que los habitantes de Jerusalén mirarán al que traspasaron y llorarán por él. Juan lo aplica al momento en que el soldado atraviesa el costado de Jesús con la lanza, y el Apocalipsis (1:7) lo extiende a la parusía.',
  },
  {
    id: 35,
    title: 'Ninguno de sus huesos será quebrado',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 4,
    oldTestament: {
      reference: 'Éxodo 12:46',
      text: 'En una casa se comerá, y no llevarás de aquella carne fuera de ella, ni quebraréis hueso suyo.',
    },
    newTestament: {
      reference: 'Juan 19:36',
      text: 'Porque estas cosas sucedieron para que se cumpliese la Escritura: No será quebrado hueso suyo.',
    },
    description: 'La prescripción del cordero pascual (sin quebrar ningún hueso) prefigura al verdadero Cordero de Dios. Cuando los soldados no quebraron las piernas de Jesús ya muerto, Juan ve el cumplimiento tipológico de la ley pascal.',
  },
  {
    id: 36,
    title: 'Sepultado con los ricos en su muerte',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 3,
    oldTestament: {
      reference: 'Isaías 53:9',
      text: 'Y se dispuso con los impíos su sepultura, mas con los ricos fue en su muerte; aunque nunca hizo maldad, ni hubo engaño en su boca.',
    },
    newTestament: {
      reference: 'Mateo 27:57-60',
      text: 'Cuando llegó la noche, vino un hombre rico de Arimatea, llamado José, que también había sido discípulo de Jesús. Este fue a Pilato y pidió el cuerpo de Jesús... y lo puso en su sepulcro nuevo, que había labrado en la peña.',
    },
    description: 'Isaías 53 anticipa que el siervo, aunque ejecutado como malhecho, sería sepultado con los ricos. José de Arimatea, hombre acaudalado, ofrece su propio sepulcro nuevo para dar sepultura digna a Jesús.',
  },
  {
    id: 37,
    title: 'Contado entre los transgresores',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 3,
    oldTestament: {
      reference: 'Isaías 53:12',
      text: 'Por cuanto derramó su vida hasta la muerte, y fue contado con los pecadores, habiendo él llevado el pecado de muchos, y orado por los transgresores.',
    },
    newTestament: {
      reference: 'Lucas 23:34',
      text: 'Y Jesús decía: Padre, perdónalos, porque no saben lo que hacen. Y repartieron entre sí sus vestiduras, echando suertes.',
    },
    description: 'Isaías profetiza que el siervo sería crucificado entre malhechores y que intercedería por ellos. Jesús fue crucificado entre dos ladrones y oró por sus verdugos, cumpliendo ambas notas de la profecía.',
  },

  // ── MESIÁNICAS · RESURRECCIÓN ─────────────────────────────────────
  {
    id: 38,
    title: 'Resurrección: no verá corrupción',
    category: 'mesiánica',
    theme: 'resurrección',
    importance: 5,
    oldTestament: {
      reference: 'Salmo 16:10',
      text: 'Porque no dejarás mi alma en el Seol, ni permitirás que tu Santo vea corrupción.',
    },
    newTestament: {
      reference: 'Hechos 2:31',
      text: 'Viéndolo antes, habló de la resurrección de Cristo, que su alma no fue dejada en el Hades, ni su carne vio corrupción.',
    },
    description: 'Pedro en Pentecostés aplica el Salmo 16 a Jesús, argumentando que David, que sí vio corrupción, no podía referirse a sí mismo, sino al Mesías que resucitaría sin corrupción. Es el primer sermón cristológico registrado.',
  },
  {
    id: 39,
    title: 'Siéntate a mi diestra',
    category: 'mesiánica',
    theme: 'resurrección',
    importance: 5,
    oldTestament: {
      reference: 'Salmo 110:1',
      text: 'Jehová dijo a mi Señor: Siéntate a mi diestra, hasta que ponga a tus enemigos por estrado de tus pies.',
    },
    newTestament: {
      reference: 'Mateo 22:44',
      text: 'Dijo el Señor a mi Señor: Siéntate a mi diestra, hasta que ponga a tus enemigos por estrado de tus pies.',
    },
    description: 'El Salmo 110 es el más citado del Antiguo Testamento en el Nuevo. Jesús lo usa en su polémica con los fariseos para mostrar que el Mesías trasciende a David. Todos los autores del NT lo aplican a la exaltación de Cristo.',
  },
  {
    id: 40,
    title: 'Mi Hijo eres tú, yo te engendré hoy',
    category: 'mesiánica',
    theme: 'resurrección',
    importance: 5,
    oldTestament: {
      reference: 'Salmo 2:7',
      text: 'Yo publicaré el decreto; el Señor me ha dicho: Mi hijo eres tú; yo te engendré hoy.',
    },
    newTestament: {
      reference: 'Hechos 13:33',
      text: 'Dios ha cumplido esto a los hijos de ellos, a nosotros, resucitando a Jesús; como también está escrito en el salmo segundo: Mi hijo eres tú, yo te he engendrado hoy.',
    },
    description: 'Pablo en Antioquía de Pisidia presenta la Resurrección como el momento en que Dios proclama públicamente la filiación divina de Jesús, cumpliendo el decreto real del Salmo 2. La Resurrección es la entronización del Hijo.',
  },

  // ── MESIÁNICAS · SACERDOCIO Y ALIANZA ────────────────────────────
  {
    id: 41,
    title: 'El Mesías, sacerdote eterno',
    category: 'mesiánica',
    theme: 'sacerdocio',
    importance: 5,
    oldTestament: {
      reference: 'Salmo 110:4',
      text: 'Juró el Señor y no se arrepentirá: Tú eres sacerdote para siempre, según el orden de Melquisedec.',
    },
    newTestament: {
      reference: 'Hebreos 7:17',
      text: 'Pues se le da este testimonio: Tú eres sacerdote para siempre, según el orden de Melquisedec.',
    },
    description: 'El Salmo 110 establece un sacerdocio real eterno que trasciende el sacerdocio levítico. La carta a los Hebreos desarrolla extensamente cómo Jesús cumple este sacerdocio superior, siendo a la vez rey, sacerdote y víctima del sacrificio perfecto.',
  },
  {
    id: 42,
    title: 'La nueva alianza',
    category: 'mesiánica',
    theme: 'alianza',
    importance: 5,
    oldTestament: {
      reference: 'Jeremías 31:31-33',
      text: 'He aquí que vienen días, dice el Señor, en que haré una nueva alianza con la casa de Israel y con la casa de Judá... Pondré mi ley en su interior y la escribiré en sus corazones; y seré su Dios y ellos serán mi pueblo.',
    },
    newTestament: {
      reference: 'Lucas 22:20',
      text: 'Esta copa es la nueva alianza en mi sangre, que es derramada por vosotros.',
    },
    description: 'Jeremías anuncia una nueva alianza interior que superará la mosaica grabada en piedra. En la Última Cena, Jesús proclama que su sangre inaugura esta nueva alianza, vinculando la Eucaristía con la promesa profética.',
  },
  {
    id: 43,
    title: 'Las setenta semanas de Daniel',
    category: 'mesiánica',
    theme: 'alianza',
    importance: 5,
    oldTestament: {
      reference: 'Daniel 9:24-27',
      text: 'Setenta semanas están determinadas sobre tu pueblo y sobre tu santa ciudad, para terminar la prevaricación, y poner fin al pecado, y expiar la iniquidad, para traer la justicia perdurable, y sellar la visión y la profecía, y ungir al Santo de los santos.',
    },
    newTestament: {
      reference: 'Marcos 1:15',
      text: 'El tiempo se ha cumplido, y el reino de Dios se ha acercado; arrepentíos, y creed en el evangelio.',
    },
    description: 'Daniel recibe una visión de setenta semanas de años que apuntan a la llegada del Mesías y a la abolición del pecado. El anuncio de Jesús —"el tiempo se ha cumplido"— señala la conclusión de ese período profético calculado desde el edicto de Artajerjes.',
  },

  // ── APOCALÍPTICAS ─────────────────────────────────────────────────
  {
    id: 44,
    title: 'Derramaré mi Espíritu sobre toda carne',
    category: 'apocalíptica',
    theme: 'espíritu',
    importance: 5,
    oldTestament: {
      reference: 'Joel 2:28-32',
      text: 'Y después de esto derramaré mi Espíritu sobre toda carne, y profetizarán vuestros hijos y vuestras hijas; vuestros ancianos soñarán sueños, y vuestros jóvenes verán visiones. Y también sobre los siervos y sobre las siervas derramaré mi Espíritu en aquellos días.',
    },
    newTestament: {
      reference: 'Hechos 2:17-21',
      text: 'Y en los postreros días, dice Dios, derramaré de mi Espíritu sobre toda carne; y vuestros hijos y vuestras hijas profetizarán; vuestros jóvenes verán visiones, y vuestros ancianos soñarán sueños. Y de cierto sobre mis siervos y sobre mis siervas derramaré de mi Espíritu en aquellos días.',
    },
    description: 'Pedro en Pentecostés interpreta el prodigio de las lenguas citando a Joel: la efusión del Espíritu no es locura sino cumplimiento de la profecía. El Espíritu Santo ya no es privilegio de profetas aislados sino don para toda carne.',
  },
  {
    id: 45,
    title: 'El Hijo del Hombre en las nubes',
    category: 'apocalíptica',
    theme: 'parusía',
    importance: 5,
    oldTestament: {
      reference: 'Daniel 7:13-14',
      text: 'Miraba yo en la visión de la noche, y he aquí con las nubes del cielo venía uno como un hijo de hombre, que vino hasta el Anciano de días, y le hicieron acercarse delante de él. Y le fue dado dominio, gloria y reino, para que todos los pueblos, naciones y lenguas le sirvieran.',
    },
    newTestament: {
      reference: 'Apocalipsis 1:7',
      text: 'He aquí que viene con las nubes, y todo ojo le verá, y los que le traspasaron; y todos los linajes de la tierra harán lamentación por él. Sí, amén.',
    },
    description: 'Daniel ve al Hijo del Hombre recibir un reino eterno y universal del Anciano de Días. El Apocalipsis retoma esta imagen para describir la venida gloriosa de Cristo al final de los tiempos, combinándola con la visión de Zacarías 12:10.',
  },
  {
    id: 46,
    title: 'Resurrección general de los muertos',
    category: 'apocalíptica',
    theme: 'escatología',
    importance: 5,
    oldTestament: {
      reference: 'Daniel 12:2',
      text: 'Y muchos de los que duermen en el polvo de la tierra serán despertados, unos para vida eterna, y otros para vergüenza y confusión perpetua.',
    },
    newTestament: {
      reference: 'Juan 5:28-29',
      text: 'No os maravilléis de esto; porque vendrá hora cuando todos los que están en los sepulcros oirán su voz; y los que hicieron lo bueno, saldrán a resurrección de vida; mas los que hicieron lo malo, a resurrección de condenación.',
    },
    description: 'Daniel es el primer texto del Antiguo Testamento que anuncia claramente la resurrección de los muertos con doble destino. Jesús en Juan 5 retoma esta enseñanza y la vincula a su propia voz como Hijo del Hombre.',
  },
  {
    id: 47,
    title: 'El reino eterno de Dios que no será destruido',
    category: 'apocalíptica',
    theme: 'reino',
    importance: 5,
    oldTestament: {
      reference: 'Daniel 2:44',
      text: 'Y en los días de estos reyes el Dios del cielo levantará un reino que no será jamás destruido, ni será el reino dejado a otro pueblo; desmenuzará y consumirá a todos estos reinos, pero él permanecerá para siempre.',
    },
    newTestament: {
      reference: 'Apocalipsis 11:15',
      text: 'El séptimo ángel tocó la trompeta, y hubo grandes voces en el cielo, que decían: Los reinos del mundo han venido a ser de nuestro Señor y de su Cristo; y él reinará por los siglos de los siglos.',
    },
    description: 'La visión de la estatua de Daniel culmina con una piedra que destruye todos los imperios humanos y se convierte en un gran monte que llena la tierra. El Apocalipsis celebra el cumplimiento escatológico: el reino de Cristo remplaza todos los reinos.',
  },
  {
    id: 48,
    title: 'Nuevos cielos y nueva tierra',
    category: 'apocalíptica',
    theme: 'nueva creación',
    importance: 5,
    oldTestament: {
      reference: 'Isaías 65:17',
      text: 'Porque he aquí que yo crearé nuevos cielos y nueva tierra; y de lo primero no habrá memoria, ni más vendrá al pensamiento.',
    },
    newTestament: {
      reference: 'Apocalipsis 21:1',
      text: 'Vi un cielo nuevo y una tierra nueva; porque el primer cielo y la primera tierra pasaron, y el mar ya no existía más.',
    },
    description: 'Isaías anuncia la renovación radical de la creación como horizonte último de la esperanza bíblica. El Apocalipsis de Juan presenta la visión de la Jerusalén celeste sobre la nueva creación como su cumplimiento definitivo.',
  },
  {
    id: 49,
    title: 'Dios enjugará toda lágrima',
    category: 'apocalíptica',
    theme: 'nueva creación',
    importance: 4,
    oldTestament: {
      reference: 'Isaías 25:8',
      text: 'Destruirá a la muerte para siempre; y enjugará el Señor Dios toda lágrima de todos los rostros; y quitará la afrenta de su pueblo de toda la tierra; porque el Señor lo ha dicho.',
    },
    newTestament: {
      reference: 'Apocalipsis 21:4',
      text: 'Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor; porque las primeras cosas pasaron.',
    },
    description: 'Isaías 25 forma parte del "Pequeño Apocalipsis" y describe el banquete mesiánico donde Dios elimina la muerte y el llanto. El Apocalipsis cita textualmente este pasaje para describir el estado final de la nueva creación.',
  },
  {
    id: 50,
    title: 'Corazón nuevo y espíritu nuevo',
    category: 'apocalíptica',
    theme: 'espíritu',
    importance: 4,
    oldTestament: {
      reference: 'Ezequiel 36:26-27',
      text: 'Os daré corazón nuevo, y pondré espíritu nuevo dentro de vosotros; y quitaré de vuestra carne el corazón de piedra, y os daré un corazón de carne. Y pondré dentro de vosotros mi Espíritu, y haré que andéis en mis estatutos.',
    },
    newTestament: {
      reference: 'Juan 3:5',
      text: 'De cierto, de cierto te digo, que el que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios.',
    },
    description: 'Ezequiel profetiza la transformación interior del corazón humano mediante el Espíritu divino. Jesús, en su diálogo nocturno con Nicodemo, anuncia que ese nacimiento del Espíritu es necesario para entrar en el reino de Dios.',
  },
  {
    id: 51,
    title: 'El Monte de los Olivos y la segunda venida',
    category: 'apocalíptica',
    theme: 'parusía',
    importance: 4,
    oldTestament: {
      reference: 'Zacarías 14:4-5',
      text: 'Y se afirmarán sus pies en aquel día sobre el monte de los Olivos, que está en frente de Jerusalén al oriente; y el monte de los Olivos se partirá por en medio, hacia el oriente y hacia el occidente.',
    },
    newTestament: {
      reference: 'Hechos 1:11-12',
      text: 'Varones galileos, ¿por qué estáis mirando al cielo? Este mismo Jesús, que ha sido tomado de vosotros al cielo, así vendrá como le habéis visto ir al cielo. Entonces volvieron a Jerusalén desde el monte que se llama del Olivar.',
    },
    description: 'Zacarías describe el día del Señor con sus pies posados en el Monte de los Olivos. El ángel en la Ascensión promete que Jesús volverá de la misma manera que fue, desde el mismo monte, apuntando al cumplimiento escatológico.',
  },
  {
    id: 52,
    title: 'El tabernáculo de David será restaurado',
    category: 'apocalíptica',
    theme: 'reino',
    importance: 3,
    oldTestament: {
      reference: 'Amós 9:11-12',
      text: 'En aquel día yo levantaré el tabernáculo caído de David, y cerraré sus portillos y levantaré sus ruinas, y lo edificaré como en el tiempo pasado; para que aquellos sobre los cuales es invocado mi nombre posean el resto de Edom.',
    },
    newTestament: {
      reference: 'Hechos 15:16-17',
      text: 'Después de esto volveré y reedificaré el tabernáculo de David, que está caído; y repararé sus ruinas, y lo volveré a levantar, para que el resto de los hombres busque al Señor.',
    },
    description: 'Santiago cita esta profecía de Amós en el Concilio de Jerusalén para justificar la admisión de los gentiles sin la circuncisión. La restauración del tabernáculo de David se interpreta como la Iglesia que incluye a los pueblos.',
  },
  {
    id: 53,
    title: 'Los cuatro jinetes del juicio',
    category: 'apocalíptica',
    theme: 'juicio',
    importance: 4,
    oldTestament: {
      reference: 'Ezequiel 14:21',
      text: 'Porque así ha dicho el Señor: Cuando yo enviare mis cuatro graves juicios sobre Jerusalén, la espada, el hambre, las fieras y la pestilencia, para cortar de ella hombres y bestias...',
    },
    newTestament: {
      reference: 'Apocalipsis 6:8',
      text: 'Miré, y he aquí un caballo amarillo, y el que lo montaba tenía por nombre Muerte, y el Hades le seguía; y le fue dada potestad sobre la cuarta parte de la tierra, para matar con espada, con hambre, con mortandad, y con las fieras de la tierra.',
    },
    description: 'Ezequiel anuncia los cuatro instrumentos del juicio divino. El Apocalipsis los dramatiza en los cuatro jinetes, preservando la cuádruple estructura: espada, hambre, pestilencia y fieras. Es el lenguaje profético del juicio reconfigurado en visión apocalíptica.',
  },
  {
    id: 54,
    title: 'La mujer vestida de sol',
    category: 'apocalíptica',
    theme: 'escatología',
    importance: 4,
    oldTestament: {
      reference: 'Génesis 37:9',
      text: 'Soñé aún otro sueño, y he aquí que el sol y la luna y once estrellas se inclinaban a mí.',
    },
    newTestament: {
      reference: 'Apocalipsis 12:1',
      text: 'Apareció en el cielo una gran señal: una mujer vestida del sol, con la luna debajo de sus pies, y sobre su cabeza una corona de doce estrellas.',
    },
    description: 'La simbología cósmica del sueño de José (sol, luna, doce estrellas = Israel) es retomada por el Apocalipsis para describir a la Mujer que representa a Israel-Iglesia. La tradición católica ve también en esta figura a María, Madre del Mesías.',
  },
  {
    id: 55,
    title: 'Armagedón: la batalla final',
    category: 'apocalíptica',
    theme: 'batalla final',
    importance: 4,
    oldTestament: {
      reference: 'Joel 3:2',
      text: 'Reuniré a todas las naciones y las haré descender al valle de Josafat, y allí entraré en juicio con ellas a causa de mi pueblo y de mi heredad Israel, al que ellas esparcieron por las naciones.',
    },
    newTestament: {
      reference: 'Apocalipsis 16:16',
      text: 'Y los reunió en el lugar que en hebreo se llama Armagedón.',
    },
    description: 'Joel profetiza la congregación de naciones para el juicio final en el valle de Josafat. El Apocalipsis sitúa la batalla escatológica en el monte de Meguido (Armagedón). Ambos textos apuntan al mismo evento: el juicio definitivo de Dios sobre las naciones.',
  },
  {
    id: 56,
    title: 'Habitaré con ellos: el tabernáculo de Dios',
    category: 'apocalíptica',
    theme: 'nueva creación',
    importance: 4,
    oldTestament: {
      reference: 'Ezequiel 37:27',
      text: 'Estará en ellos mi tabernáculo, y seré a ellos por Dios, y ellos me serán por pueblo.',
    },
    newTestament: {
      reference: 'Apocalipsis 21:3',
      text: 'Y oí una gran voz del cielo que decía: He aquí el tabernáculo de Dios con los hombres, y él morará con ellos; y ellos serán su pueblo, y Dios mismo estará con ellos como su Dios.',
    },
    description: 'La promesa de Ezequiel sobre el tabernáculo de Dios entre su pueblo es citada casi literalmente en el Apocalipsis para describir el estado final de la nueva creación: la plena comunión de Dios con la humanidad redimida.',
  },

  // ── HISTÓRICAS ────────────────────────────────────────────────────
  {
    id: 57,
    title: 'Destrucción del templo de Jerusalén',
    category: 'histórica',
    theme: 'juicio sobre Israel',
    importance: 5,
    oldTestament: {
      reference: 'Miqueas 3:12',
      text: 'Por tanto, a causa de vosotros Sión será arada como campo, y Jerusalén vendrá a ser montones de ruinas, y el monte de la casa como cumbres de bosque.',
    },
    newTestament: {
      reference: 'Marcos 13:2',
      text: 'Jesús le dijo: ¿Ves estos grandes edificios? No quedará piedra sobre piedra, que no sea derribada.',
    },
    description: 'Miqueas anuncia la destrucción de Jerusalén bajo el juicio divino. Jesús actualiza la profecía sobre el Templo de Herodes, que fue destruido por las legiones romanas en el año 70 d.C. bajo Tito, cumpliendo literalmente la predicción.',
  },
  {
    id: 58,
    title: 'Caída definitiva de Babilonia',
    category: 'histórica',
    theme: 'caída de imperios',
    importance: 4,
    oldTestament: {
      reference: 'Isaías 13:19-20',
      text: 'Y Babilonia, hermosura de reinos y ornamento de la grandeza de los caldeos, será como Sodoma y Gomorra, a las que trastornó Dios. Nunca más será habitada, ni se morará en ella de generación en generación.',
    },
    newTestament: {
      reference: 'Apocalipsis 18:2',
      text: 'Ha caído, ha caído la gran Babilonia, y se ha hecho habitación de demonios y guarida de todo espíritu inmundo, y albergue de toda ave inmunda y aborrecible.',
    },
    description: 'Isaías profetiza la ruina definitiva de Babilonia, potencia que destruyó Jerusalén en 586 a.C. La ciudad fue decayendo hasta quedar despoblada. El Apocalipsis reutiliza "Babilonia" como símbolo de Roma y de todo poder anticristiano.',
  },
  {
    id: 59,
    title: 'El retorno del exilio babilónico',
    category: 'histórica',
    theme: 'restauración',
    importance: 4,
    oldTestament: {
      reference: 'Jeremías 29:10',
      text: 'Porque así dijo el Señor: Cuando en Babilonia se cumplan los setenta años, yo os visitaré y despertaré sobre vosotros mi buena palabra, para haceros volver a este lugar.',
    },
    newTestament: null,
    description: 'Jeremías anuncia con precisión que el exilio babilónico durará setenta años, tras los cuales Dios restaurará a Israel en su tierra. Esto se cumplió con el edicto de Ciro en 538 a.C. que permitió el retorno de los exiliados. Esta profecía histórica no tiene referencia en el Nuevo Testamento porque se cumplió antes de la venida de Cristo.',
  },
  {
    id: 60,
    title: 'Ciro el persa: el ungido de Dios',
    category: 'histórica',
    theme: 'caída de imperios',
    importance: 4,
    oldTestament: {
      reference: 'Isaías 44:28-45:1',
      text: 'Que dice de Ciro: Es mi pastor, y cumplirá todo lo que yo quiero, al decir a Jerusalén: Serás edificada; y al templo: Serás fundado. Así dice el Señor a su ungido, a Ciro, al que tomé yo por su mano derecha, para sujetar naciones delante de él.',
    },
    newTestament: null,
    description: 'Isaías nombra a Ciro de Persia —¡150 años antes de su nacimiento!— como el instrumento elegido por Dios para liberar a Israel. Ciro conquistó Babilonia en 539 a.C. y promulgó el edicto de 538 a.C. que permitió el retorno a la Tierra Prometida.',
  },
  {
    id: 61,
    title: 'Destrucción de Tiro',
    category: 'histórica',
    theme: 'caída de imperios',
    importance: 3,
    oldTestament: {
      reference: 'Ezequiel 26:3-14',
      text: 'Por tanto, así ha dicho el Señor Jehová: He aquí yo estoy contra ti, oh Tiro, y haré subir contra ti muchas naciones, como el mar hace subir sus olas. Y destruirán los muros de Tiro, y derribarán sus torres... y la dejaré en piedra pelada; tendedero de redes será, y nunca más será edificada.',
    },
    newTestament: null,
    description: 'Ezequiel profetizó en detalle la destrucción de Tiro por sucesivos conquistadores: Nabucodonosor arrasó la ciudad continental y Alejandro Magno, arrojando los escombros al mar, construyó una calzada para atacar la isla. La ciudad nunca recobró su antiguo esplendor.',
  },
];
