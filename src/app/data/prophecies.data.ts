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

  // ── MESIÁNICAS · LINAJE (complemento) ────────────────────────────
  {
    id: 62,
    title: 'La simiente de Isaac: la promesa renovada',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 3,
    oldTestament: {
      reference: 'Génesis 26:2-4',
      text: 'Y se le apareció el Señor, y le dijo: No desciendas a Egipto... Multiplicaré tu descendencia como las estrellas del cielo, y daré a tu descendencia todas estas tierras; y todas las naciones de la tierra serán benditas en tu simiente.',
    },
    newTestament: {
      reference: 'Hebreos 11:18',
      text: 'Habiéndosele dicho: En Isaac te será llamada descendencia.',
    },
    description: 'La promesa hecha a Isaac confirma que la línea mesiánica continuaría específicamente a través de él, descartando a Ismael. Hebreos la cita en el contexto de la fe de Abraham, que esperó contra toda esperanza la descendencia prometida. Lucas traza la genealogía de Jesús pasando por Isaac.',
  },
  {
    id: 63,
    title: 'La simiente de Jacob y la bendición universal',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 3,
    oldTestament: {
      reference: 'Génesis 28:13-14',
      text: 'Y he aquí, el Señor estaba en lo alto de ella, y dijo: Yo soy el Señor, el Dios de Abraham tu padre, y el Dios de Isaac; la tierra en que estás acostado te la daré a ti y a tu descendencia... y todas las familias de la tierra serán benditas en ti y en tu simiente.',
    },
    newTestament: {
      reference: 'Lucas 3:34',
      text: 'Hijo de Jacob, hijo de Isaac, hijo de Abraham, hijo de Taré, hijo de Nacor.',
    },
    description: 'En Betel, Dios renueva con Jacob la promesa hecha a Abraham e Isaac: de su simiente vendrá la bendición para todas las familias de la tierra. Lucas teje a Jacob en la genealogía de Jesús, el descendiente en quien se cumple la triple promesa patriarcal.',
  },

  // ── MESIÁNICAS · MINISTERIO (complemento) ────────────────────────
  {
    id: 64,
    title: 'El profeta semejante a Moisés',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 4,
    oldTestament: {
      reference: 'Deuteronomio 18:15-19',
      text: 'Profeta de en medio de ti, de tus hermanos, como yo, te levantará el Señor tu Dios; a él oiréis... El Señor me dijo: Les levantaré un profeta de en medio de sus hermanos, como tú; y pondré mis palabras en su boca, y él les hablará todo lo que yo le mandare.',
    },
    newTestament: {
      reference: 'Juan 6:14',
      text: 'Entonces los hombres, viendo la señal que Jesús había hecho, dijeron: Este verdaderamente es el profeta que había de venir al mundo.',
    },
    description: 'Moisés profetizó un sucesor profético definitivo que recibiría las palabras de Dios y hablaría en su nombre. La multitud que presenció la multiplicación de los panes reconoció en Jesús al profeta prometido. Pedro citará este texto en Pentecostés identificándolo con Jesús resucitado (Hch 3:22).',
  },
  {
    id: 65,
    title: 'Verán sin ver: el endurecimiento de Israel',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 3,
    oldTestament: {
      reference: 'Isaías 6:9-10',
      text: 'Y él dijo: Anda, y di a este pueblo: Oíd bien, y no entendáis; ved por cierto, mas no comprendáis. Engruesa el corazón de este pueblo, y agrava sus oídos, y ciega sus ojos, para que no vea con sus ojos, ni oiga con sus oídos, ni su corazón entienda.',
    },
    newTestament: {
      reference: 'Mateo 13:14-15',
      text: 'Y se cumple en ellos la profecía de Isaías, que dice: De oído oiréis, y no entenderéis; y viendo veréis, y no percibiréis. Porque el corazón de este pueblo se ha engrosado, y con los oídos oyeron pesadamente, y sus ojos han cerrado.',
    },
    description: 'Isaías recibió la misión de predicar a un pueblo con el corazón endurecido. Jesús ve en el rechazo de sus contemporáneos el cumplimiento de este oráculo y lo cita para explicar por qué enseña en parábolas. Juan lo aplicará también al rechazo de Jesús a pesar de sus señales (Jn 12:40).',
  },
  {
    id: 66,
    title: 'Luz para Galilea de los gentiles',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 4,
    oldTestament: {
      reference: 'Isaías 9:1-2',
      text: 'Mas no habrá siempre oscuridad para la que está en angustia... El pueblo que andaba en oscuridad vio una gran luz; los que moraban en tierra de sombra de muerte, una luz resplandeció sobre ellos.',
    },
    newTestament: {
      reference: 'Mateo 4:14-16',
      text: 'Para que se cumpliese lo dicho por el profeta Isaías, cuando dijo: Tierra de Zabulón y tierra de Neftalí, camino del mar, al otro lado del Jordán, Galilea de los gentiles; el pueblo asentado en tinieblas vio una gran luz; y a los que estaban sentados en región de sombra de muerte, una luz les resplandeció.',
    },
    description: 'Isaías anuncia que la región de Galilea, zona fronteriza con los gentiles y considerada menos pura, sería la primera en ver la gran luz mesiánica. Mateo cumple con precisión esta geografía profética: el ministerio de Jesús comienza en Galilea, en Cafarnaúm junto al lago, en la región de Zabulón y Neftalí.',
  },
  {
    id: 67,
    title: 'El Espíritu septiforme sobre el renuevo de Jesé',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 4,
    oldTestament: {
      reference: 'Isaías 11:1-2',
      text: 'Saldrá una vara del tronco de Isaí, y un vástago retoñará de sus raíces. Y reposará sobre él el Espíritu del Señor; Espíritu de sabiduría y de inteligencia, Espíritu de consejo y de poder, Espíritu de conocimiento y de temor del Señor.',
    },
    newTestament: {
      reference: 'Mateo 3:16-17',
      text: 'Y Jesús, después que fue bautizado, subió luego del agua; y he aquí los cielos le fueron abiertos, y vio al Espíritu de Dios que descendía como paloma, y venía sobre él. Y hubo una voz de los cielos, que decía: Este es mi Hijo amado, en quien tengo complacencia.',
    },
    description: 'Isaías profetiza el descenso del Espíritu con su plenitud septiforme sobre el vástago davídico. En el bautismo de Jesús esta profecía se cumple visiblemente: el Espíritu desciende sobre él en forma de paloma y la voz del Padre lo confirma como Hijo amado. Es la manifestación trinitaria del comienzo del ministerio mesiánico.',
  },
  {
    id: 68,
    title: 'El rey ungido en el monte santo de Sión',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 4,
    oldTestament: {
      reference: 'Salmo 2:6',
      text: 'Pero yo he puesto mi rey sobre Sión, mi santo monte.',
    },
    newTestament: {
      reference: 'Juan 18:37',
      text: 'Le dijo entonces Pilato: ¿Luego, eres tú rey? Respondió Jesús: Tú dices que yo soy rey. Yo para esto he nacido, y para esto he venido al mundo, para dar testimonio a la verdad; todo aquel que es de la verdad, oye mi voz.',
    },
    description: 'El Salmo 2 proclama la entronización del rey mesiánico en Sión ante la oposición de las naciones. Jesús confirma su realeza ante Pilato, pero lo hace redefiniendo la naturaleza de ese reinado: un reino de verdad, no de violencia. El Salmo 2 late detrás de la escena del juicio ante el representante del poder romano.',
  },

  // ── MESIÁNICAS · PASIÓN (complemento) ────────────────────────────
  {
    id: 69,
    title: 'Odiado sin causa',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 3,
    oldTestament: {
      reference: 'Salmo 69:4',
      text: 'Se han aumentado más que los cabellos de mi cabeza los que me aborrecen sin causa; se han hecho poderosos mis enemigos, los que me destruyen sin tener por qué; y lo que no robé he de restituir.',
    },
    newTestament: {
      reference: 'Juan 15:25',
      text: 'Pero esto es para que se cumpla la palabra que está escrita en su ley: Sin causa me aborrecieron.',
    },
    description: 'El salmista llora el odio gratuito de sus enemigos. Jesús cita este versículo para interpretar el rechazo que sufre: su persecución no tiene base racional ni moral, lo que paradójicamente revela la culpa de quienes lo persiguen. El odio sin causa al inocente es el colmo de la iniquidad que la Pasión desenmascara.',
  },
  {
    id: 70,
    title: 'El sol se oscurece al mediodía',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 3,
    oldTestament: {
      reference: 'Amós 8:9',
      text: 'Acontecerá en aquel día, dice el Señor Dios, que haré que se ponga el sol a mediodía, y cubriré de tinieblas la tierra en el día claro.',
    },
    newTestament: {
      reference: 'Mateo 27:45',
      text: 'Y desde la hora sexta hubo tinieblas sobre toda la tierra hasta la hora novena.',
    },
    description: 'Amós anuncia el signo cósmico del día del Señor: el sol que se pone al mediodía en pleno día claro. Durante la crucifixión, desde la hora sexta hasta la novena (de 12 a 3 de la tarde), una oscuridad cubrió toda la tierra. El cielo mismo acompaña el sufrimiento del Mesías con el signo profetizado.',
  },

  // ── MESIÁNICAS · RESURRECCIÓN (complemento) ──────────────────────
  {
    id: 71,
    title: 'Subió a lo alto llevando cautiva la cautividad',
    category: 'mesiánica',
    theme: 'resurrección',
    importance: 4,
    oldTestament: {
      reference: 'Salmo 68:18',
      text: 'Subiste a lo alto, llevaste cautiva la cautividad, tomaste dones para los hombres, y también para los rebeldes, para que habite entre ellos el Señor Dios.',
    },
    newTestament: {
      reference: 'Efesios 4:8',
      text: 'Por lo cual dice: Subiendo a lo alto, llevó cautiva la cautividad, y dio dones a los hombres.',
    },
    description: 'El Salmo 68 canta la procesión triunfal de Yahvé al monte Sión. Pablo lo aplica a la Ascensión de Cristo: al subir a los cielos, Cristo liberó a los cautivos del poder del pecado y la muerte, y distribuyó los dones del Espíritu (Pentecostés). La victoria pascual se convierte en gracia derramada sobre la Iglesia.',
  },

  // ── MESIÁNICAS · SACERDOCIO Y ALIANZA (complemento) ──────────────
  {
    id: 72,
    title: 'Tu trono, oh Dios, es eterno',
    category: 'mesiánica',
    theme: 'alianza',
    importance: 4,
    oldTestament: {
      reference: 'Salmo 45:6-7',
      text: 'Tu trono, oh Dios, es eterno y para siempre; cetro de justicia es el cetro de tu reino. Has amado la justicia y aborrecido la maldad; por tanto, te ungió Dios, el Dios tuyo, con óleo de alegría más que a tus compañeros.',
    },
    newTestament: {
      reference: 'Hebreos 1:8-9',
      text: 'Mas del Hijo dice: Tu trono, oh Dios, por el siglo del siglo; cetro de equidad es el cetro de tu reino. Has amado la justicia, y aborrecido la maldad, por lo cual te ungió Dios, el Dios tuyo, con óleo de alegría más que a tus compañeros.',
    },
    description: 'El Salmo 45, cántico nupcial del rey de Israel, contiene la afirmación más directa de la divinidad del Mesías en el AT: el rey es llamado "Dios" y su trono es eterno. Hebreos lo aplica explícitamente al Hijo de Dios, convirtiéndolo en uno de los argumentos más fuertes de la carta para la divinidad de Cristo.',
  },
  {
    id: 73,
    title: 'Luz para las naciones: salvación hasta los confines',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 4,
    oldTestament: {
      reference: 'Isaías 49:6',
      text: 'Poco es para mí que tú seas mi siervo para levantar las tribus de Jacob, y para que restaures el remanente de Israel; también te di por luz de las naciones, para que seas mi salvación hasta lo postrero de la tierra.',
    },
    newTestament: {
      reference: 'Hechos 13:47',
      text: 'Porque así nos ha mandado el Señor, diciendo: Te he puesto para luz de los gentiles, a fin de que seas para salvación hasta lo último de la tierra.',
    },
    description: 'El segundo Cántico del Siervo amplía la misión mesiánica más allá de Israel hasta los confines de la tierra. Pablo y Bernabé citan este texto en Antioquía de Pisidia para justificar la misión a los gentiles. Simeón lo había cantado ya en el templo al presentar al niño Jesús (Lc 2:32): la universalidad misionera ya está en el Siervo.',
  },

  // ── HISTÓRICAS (complemento) ─────────────────────────────────────
  {
    id: 74,
    title: 'Alejandro Magno y los cuatro reinos helenísticos',
    category: 'histórica',
    theme: 'caída de imperios',
    importance: 4,
    oldTestament: {
      reference: 'Daniel 11:3-4',
      text: 'Y se levantará un rey valiente, el cual dominará con gran poder y hará su voluntad. Pero cuando se haya levantado, su reino será quebrantado y repartido hacia los cuatro vientos del cielo, no a sus descendientes, ni según el dominio con que él dominó; porque su reino será arrancado, y será para otros fuera de ellos.',
    },
    newTestament: null,
    description: 'Daniel, escribiendo en el siglo VI a.C., describe a un rey valioso cuyo imperio se quebrantará al morir y se repartirá en cuatro partes para otras personas, no para sus herederos directos. Alejandro Magno murió en 323 a.C. sin sucesor designado; sus generales (los Diádocos) repartieron el imperio en cuatro reinos, exactamente según la profecía.',
  },
  {
    id: 75,
    title: 'Destrucción de Nínive, capital de Asiria',
    category: 'histórica',
    theme: 'caída de imperios',
    importance: 3,
    oldTestament: {
      reference: 'Nahúm 1:8; 3:7',
      text: 'Mas con inundación impetuosa consumirá a sus adversarios, y tinieblas perseguirán a sus enemigos... Y acontecerá que todos los que te vieren se apartarán de ti, y dirán: Nínive es destruida; ¿quién se compadecerá de ella?',
    },
    newTestament: null,
    description: 'El profeta Nahúm anunció la caída total de Nínive, la poderosa capital asiria que había destruido Samaria en 722 a.C. En 612 a.C., una coalición medo-babilónica tomó la ciudad; las crónicas babilónicas confirman que una inundación del río Khoser debilitó las murallas, cumpliendo el detalle profético. Nínive jamás fue reconstruida.',
  },

  // ── MESIÁNICAS · NACIMIENTO (complemento 2) ──────────────────────
  {
    id: 77,
    title: 'Los reyes traerán presentes al Hijo del rey',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 3,
    oldTestament: {
      reference: 'Salmo 72:10-11',
      text: 'Los reyes de Tarsis y de las costas traerán presentes; los reyes de Sabá y de Seba ofrecerán dones. Todos los reyes se postrarán ante él; todas las naciones le servirán.',
    },
    newTestament: {
      reference: 'Mateo 2:11',
      text: 'Y al entrar en la casa, vieron al niño con su madre María, y postrándose, lo adoraron; y abriendo sus tesoros, le ofrecieron presentes: oro, incienso y mirra.',
    },
    description: 'El Salmo 72, oración por el rey de Israel, describe a reyes lejanos postrados ante él con presentes. Los magos de Oriente, representantes de los sabios del mundo, actualizan esta imagen al postrarse ante el niño de Belén y ofrecer sus dones simbólicos.',
  },
  {
    id: 78,
    title: 'Vendrán con oro e incienso',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 3,
    oldTestament: {
      reference: 'Isaías 60:6',
      text: 'La multitud de camellos te cubrirá, dromedarios de Madián y de Efa; vendrán todos los de Sabá, trayendo oro e incienso, y publicando alabanzas de Jehová.',
    },
    newTestament: {
      reference: 'Mateo 2:11',
      text: 'Y abriendo sus tesoros, le ofrecieron presentes: oro, incienso y mirra.',
    },
    description: 'Isaías profetiza que caravanas del oriente llegarán con oro e incienso para la Sión restaurada, cantando las alabanzas del Señor. Mateo ve en los magos y sus dones el primer destello de ese cumplimiento universal: el Mesías nacido atrae a los sabios de las naciones con los mismos elementos que Isaías había profetizado.',
  },
  {
    id: 79,
    title: 'Alégrate, hija de Sión: el Señor está en medio de ti',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 4,
    oldTestament: {
      reference: 'Sofonías 3:14-17',
      text: 'Canta, oh hija de Sión; da voces de júbilo, oh Israel; gózate y regocíjate de todo corazón, hija de Jerusalén. El Señor ha apartado tus juicios, ha echado fuera tus enemigos; el Rey de Israel, el Señor, está en medio de ti.',
    },
    newTestament: {
      reference: 'Lucas 1:28-32',
      text: 'Y entrando el ángel en donde ella estaba, dijo: ¡Salve, muy favorecida! El Señor es contigo. Y el ángel le dijo: No temas, María, porque has hallado gracia delante de Dios. Y ahora, concebirás en tu vientre y darás a luz un hijo, y llamarás su nombre Jesús. Este será grande, y será llamado Hijo del Altísimo.',
    },
    description: 'El saludo del ángel a María reproduce con precisión llamativa el lenguaje de Sofonías a la hija de Sión: alegría, presencia del Señor, miedo apaciguado. Los Padres de la Iglesia identificaron en María a la "hija de Sión" que personifica a Israel. La Encarnación es la llegada definitiva del Rey al corazón de su pueblo.',
  },
  {
    id: 80,
    title: 'Dios se manifestó en la tierra',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 4,
    oldTestament: {
      reference: 'Baruc 3:37-4:1',
      text: 'Después de esto apareció en la tierra y convivió con los hombres. Este es nuestro Dios; no hay otro que se le pueda comparar. Halló todos los caminos de la sabiduría y la dio a Jacob su siervo, a Israel su amado.',
    },
    newTestament: {
      reference: 'Juan 1:14',
      text: 'Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad.',
    },
    description: 'Baruc, libro deuterocanonical del canon católico, afirma que la Sabiduría de Dios "apareció en la tierra y convivió con los hombres". Juan declara que el Logos eterno se hizo carne y habitó entre nosotros. La Iglesia ve en Baruc una de las preparaciones más directas del misterio de la Encarnación en el Antiguo Testamento.',
  },

  // ── MESIÁNICAS · MINISTERIO (complemento 2) ──────────────────────
  {
    id: 81,
    title: 'Mi casa será llamada casa de oración para todas las naciones',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 3,
    oldTestament: {
      reference: 'Isaías 56:7',
      text: 'Yo los llevaré a mi santo monte, y los recrearé en mi casa de oración; sus holocaustos y sus sacrificios serán aceptos sobre mi altar; porque mi casa será llamada casa de oración para todos los pueblos.',
    },
    newTestament: {
      reference: 'Mateo 21:13',
      text: 'Y les dijo: Escrito está: Mi casa, casa de oración será llamada; mas vosotros la habéis hecho cueva de ladrones.',
    },
    description: 'Isaías profetiza que el Templo sería casa de oración no solo para Israel sino para todos los pueblos. Jesús al expulsar a los mercaderes cita esta profecía: la purificación del Templo no es un gesto de ira espontáneo sino el cumplimiento de la destinación universal del santuario. Miqueas ("cueva de ladrones") completa la cita.',
  },
  {
    id: 82,
    title: 'De la boca de los niños perfeccionaste la alabanza',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 3,
    oldTestament: {
      reference: 'Salmo 8:2',
      text: 'De la boca de los niños y de los que maman, fundaste la fortaleza, a causa de tus enemigos, para hacer callar al enemigo y al vengativo.',
    },
    newTestament: {
      reference: 'Mateo 21:16',
      text: 'Y le dijeron: ¿Oyes lo que éstos dicen? Y Jesús les dijo: Sí; ¿nunca leísteis: De la boca de los niños y de los que maman perfeccionaste la alabanza?',
    },
    description: 'El Salmo 8 atribuye a la alabanza de los niños una fuerza que silencia a los enemigos de Dios. Cuando los sumos sacerdotes se escandalizan de los niños que aclamaban a Jesús en el Templo, Jesús les responde con este salmo: la aclamación espontánea de los pequeños cumple la profecía y revela lo que los sabios rechazan.',
  },
  {
    id: 83,
    title: 'Yo mismo buscaré a mis ovejas dispersas',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 4,
    oldTestament: {
      reference: 'Ezequiel 34:11-16',
      text: 'Porque así ha dicho el Señor: He aquí, yo mismo iré a buscar mis ovejas, y las reconoceré. Como reconoce su rebaño el pastor el día que está en medio de sus ovejas esparcidas, así reconoceré mis ovejas, y las libraré de todos los lugares en que fueron esparcidas. Yo apacentaré mis ovejas.',
    },
    newTestament: {
      reference: 'Juan 10:11',
      text: 'Yo soy el buen pastor; el buen pastor su vida da por las ovejas.',
    },
    description: 'Ezequiel 34 es uno de los oráculos más vigorosos del AT: Yahvé mismo pastoreará a su pueblo en lugar de los pastores corruptos. Jesús al proclamarse el Buen Pastor no está usando una metáfora genérica: está afirmando ser el cumplimiento de la promesa divina que Ezequiel había profetizado. Dios venía personalmente a buscar sus ovejas.',
  },

  // ── MESIÁNICAS · PASIÓN (complemento 2) ──────────────────────────
  {
    id: 84,
    title: 'En tus manos encomiendo mi espíritu',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 4,
    oldTestament: {
      reference: 'Salmo 31:5',
      text: 'En tus manos encomiendo mi espíritu; tú me has redimido, oh Señor, Dios de verdad.',
    },
    newTestament: {
      reference: 'Lucas 23:46',
      text: 'Entonces Jesús, clamando a gran voz, dijo: Padre, en tus manos encomiendo mi espíritu. Y habiendo dicho esto, expiró.',
    },
    description: 'Esta oración del salmista era la plegaria vespertina judía, rezada al acostarse como acto de confianza en Dios. Jesús la convirtió en sus palabras finales en la cruz, pero añadiendo "Padre" —un elemento nuevo— transformando la oración de confianza en una entrega filial plena. Lucas es el único evangelista que recoge estas palabras.',
  },
  {
    id: 85,
    title: 'Tome otro su oficio',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 3,
    oldTestament: {
      reference: 'Salmo 109:8',
      text: 'Sean pocos sus días; tome otro su oficio.',
    },
    newTestament: {
      reference: 'Hechos 1:20',
      text: 'Porque está escrito en el libro de los Salmos: Sea hecha desierta su habitación, y no haya quien more en ella; y: Tome otro su oficio.',
    },
    description: 'El Salmo 109, imprecatorio, incluye el deseo de que el traidor sea reemplazado. Pedro lo aplica a Judas tras la traición y el suicidio del apóstol, argumentando que las Escrituras mismas exigían que su lugar en el colegio apostólico fuera cubierto por otro. Este versículo motivó la elección de Matías como duodécimo apóstol.',
  },
  {
    id: 86,
    title: 'Como oveja fue llevado al degolladero',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 4,
    oldTestament: {
      reference: 'Isaías 53:7-8',
      text: 'Angustiado él, y afligido, no abrió su boca; como cordero fue llevado al matadero; y como oveja delante de sus trasquiladores, enmudeció, y no abrió su boca. Por cárcel y por juicio fue quitado; y su generación, ¿quién la contará?',
    },
    newTestament: {
      reference: 'Hechos 8:32-35',
      text: 'El pasaje de la Escritura que leía era este: Como oveja a la muerte fue llevado; y como cordero mudo delante del que lo trasquila, así no abrió su boca... Y Felipe, abriendo su boca, y comenzando desde esta Escritura, le anunció el evangelio de Jesús.',
    },
    description: 'El eunuco etíope iba leyendo Isaías 53 cuando Felipe se encontró con su carro. Este episodio de Hechos 8 es el primer ejemplo canónico de evangelización cristológica a partir del Siervo sufriente: Felipe lee el texto y anuncia a Jesús. Isaías 53:7-8 se convirtió en el punto de partida hermenéutico para entender la Pasión silenciosa de Cristo.',
  },
  {
    id: 87,
    title: 'El siervo será exaltado y ensalzado',
    category: 'mesiánica',
    theme: 'resurrección',
    importance: 4,
    oldTestament: {
      reference: 'Isaías 52:13-15',
      text: 'He aquí que mi siervo será prosperado, será engrandecido y exaltado, y será puesto muy en alto. Como se asombraron de ti muchos, de tal manera fue desfigurado de los hombres su parecer, y su hermosura más que la de los hijos de los hombres, así asombrará él a muchas naciones; los reyes cerrarán ante él la boca.',
    },
    newTestament: {
      reference: 'Juan 12:32',
      text: 'Y yo, si fuere levantado de la tierra, a todos atraeré a mí mismo.',
    },
    description: 'Isaías 52:13 abre el gran Cántico del Siervo con su paradoja central: el mismo que será desfigurado más allá de lo humano, será también exaltado más allá de toda nación y todo rey. Jesús en Juan 12 recoge este doble movimiento: "ser levantado" abraza a la vez la crucifixión y la glorificación. La cruz y la gloria son un único misterio.',
  },

  // ── MESIÁNICAS · ALIANZA (complemento) ───────────────────────────
  {
    id: 88,
    title: 'He aquí vengo a hacer tu voluntad',
    category: 'mesiánica',
    theme: 'alianza',
    importance: 4,
    oldTestament: {
      reference: 'Salmo 40:6-8',
      text: 'Sacrificio y ofrenda no te agrada; has abierto mis oídos; holocausto y expiación no has demandado. Entonces dije: He aquí, vengo; en el rollo del libro está escrito de mí. El hacer tu voluntad, Dios mío, me ha agradado, y tu ley está en medio de mi corazón.',
    },
    newTestament: {
      reference: 'Hebreos 10:5-7',
      text: 'Por lo cual, entrando en el mundo dice: Sacrificio y ofrenda no quisiste; mas me preparaste cuerpo. Holocaustos y expiaciones por el pecado no te agradaron. Entonces dije: He aquí que vengo, oh Dios, para hacer tu voluntad, como en el rollo del libro está escrito de mí.',
    },
    description: 'El autor de Hebreos pone en boca de Cristo al entrar en el mundo estas palabras del Salmo 40. La clave teológica es radical: los sacrificios del AT no eran el centro de la voluntad de Dios; el Mesías viene a reemplazarlos con la ofrenda perfecta de sí mismo. El "rollo del libro" que habla de él es toda la Escritura que apunta a su misión.',
  },

  // ── APOCALÍPTICAS (complemento 2) ────────────────────────────────
  {
    id: 89,
    title: 'Irán todas las naciones al monte del Señor',
    category: 'apocalíptica',
    theme: 'nueva creación',
    importance: 4,
    oldTestament: {
      reference: 'Isaías 2:2-4',
      text: 'Acontecerá en lo postrero de los tiempos, que será confirmado el monte de la casa del Señor como cabeza de los montes... y correrán a él todas las naciones. Y vendrán muchos pueblos, y dirán: Venid, y subamos al monte del Señor, a la casa del Dios de Jacob; y nos enseñará sus caminos, y caminaremos por sus sendas.',
    },
    newTestament: {
      reference: 'Mateo 28:19',
      text: 'Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo.',
    },
    description: 'Isaías anticipa la escatología universal: todas las naciones subirán al monte del Señor para aprender sus caminos. El mandato misionero de Jesús es el mecanismo histórico de ese cumplimiento: ya no son las naciones las que peregrinan espontáneamente, sino los discípulos enviados los que llevan la enseñanza del monte a todas las naciones.',
  },
  {
    id: 90,
    title: 'El lobo habitará con el cordero',
    category: 'apocalíptica',
    theme: 'nueva creación',
    importance: 3,
    oldTestament: {
      reference: 'Isaías 11:6-9',
      text: 'Morará el lobo con el cordero, y el leopardo con el cabrito se acostará; el becerro y el león y la bestia doméstica andarán juntos... No harán mal ni dañarán en todo mi santo monte; porque la tierra será llena del conocimiento del Señor, como las aguas cubren el mar.',
    },
    newTestament: {
      reference: 'Romanos 8:21',
      text: 'La creación misma también será libertada de la esclavitud de corrupción, a la libertad gloriosa de los hijos de Dios.',
    },
    description: 'La visión de Isaías describe la reconciliación cósmica de la nueva creación: la violencia entre los seres vivos desaparecerá porque la tierra estará llena del conocimiento de Dios. Pablo en Romanos 8 habla de la liberación de toda la creación, gemiendo como en dolores de parto hacia esa gloria. Ambos textos contemplan la renovación total del cosmos.',
  },
  {
    id: 91,
    title: 'Levántate, resplandece: la gloria del Señor ha nacido sobre ti',
    category: 'apocalíptica',
    theme: 'nueva creación',
    importance: 4,
    oldTestament: {
      reference: 'Isaías 60:1-3',
      text: 'Levántate, resplandece; porque ha venido tu luz, y la gloria del Señor ha nacido sobre ti. Porque he aquí que tinieblas cubrirán la tierra, y oscuridad las naciones; mas sobre ti amanecerá el Señor, y sobre ti será vista su gloria. Y andarán las naciones a tu luz, y los reyes al resplandor de tu nacimiento.',
    },
    newTestament: {
      reference: 'Apocalipsis 21:23-24',
      text: 'La ciudad no tiene necesidad de sol ni de luna que brillen en ella; porque la gloria de Dios la ilumina, y el Cordero es su lumbrera. Y las naciones que hubieren sido salvas andarán a la luz de ella; y los reyes de la tierra traerán su gloria y honor a ella.',
    },
    description: 'Isaías 60 es la profecía de la Sión restaurada que brilla con la gloria de Dios, atrayendo a naciones y reyes a su luz. El Apocalipsis cita este oráculo para describir la Jerusalén celeste, donde el Cordero reemplaza al sol y las naciones peregrinan a su luz. El cumplimiento escatológico supera la imagen: no hay templo ni astros, solo la presencia directa de Dios.',
  },
  {
    id: 92,
    title: 'El día del Señor llegará como ladrón en la noche',
    category: 'apocalíptica',
    theme: 'juicio',
    importance: 3,
    oldTestament: {
      reference: 'Sofonías 1:14-15',
      text: 'Cercano está el gran día del Señor, cercano y muy presuroso; es amarga la voz del día del Señor; el valiente gritará allí amargamente. Día de ira aquel día, día de angustia y de aprieto, día de alboroto y de asolamiento, día de tiniebla y de oscuridad.',
    },
    newTestament: {
      reference: '1 Tesalonicenses 5:2',
      text: 'Porque vosotros sabéis perfectamente que el día del Señor vendrá así como ladrón en la noche.',
    },
    description: 'Sofonías describe el Día de Yahvé con el lenguaje más intenso del AT: ira, angustia, tiniebla. Pablo en 1 Tesalonicenses retoma la urgencia de esa venida con la imagen del ladrón nocturno. El Día del Señor del AT se transforma en la Parusía de Cristo, igualmente sorpresivo e irreversible.',
  },

  // ── MESIÁNICAS · NACIMIENTO (complemento 3) ──────────────────────
  {
    id: 93,
    title: 'El vástago justo: el Señor justicia nuestra',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 4,
    oldTestament: {
      reference: 'Jeremías 23:5-6',
      text: 'He aquí que vienen días, dice el Señor, en que levantaré a David renuevo justo, y reinará como rey, el cual será dichoso, y hará juicio y justicia en la tierra. En sus días será salvo Judá, e Israel habitará confiado; y este será su nombre con el cual le llamarán: El Señor, justicia nuestra.',
    },
    newTestament: {
      reference: '1 Corintios 1:30',
      text: 'Mas por él estáis vosotros en Cristo Jesús, el cual nos ha sido hecho por Dios sabiduría, justificación, santificación y redención.',
    },
    description: 'Jeremías profetiza un vástago davídico cuyo nombre propio será "El Señor justicia nuestra" —atributo inequívocamente divino—. Pablo declara que Cristo ha sido hecho para nosotros justificación. El nombre profético se convierte en la entraña de la soteriología paulina: la justicia que el Mesías aporta no es propia del hombre sino que viene de Dios mismo.',
  },
  {
    id: 94,
    title: 'El sol de justicia nacerá con sanidad en sus alas',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 3,
    oldTestament: {
      reference: 'Malaquías 4:2',
      text: 'Mas a vosotros los que teméis mi nombre, nacerá el Sol de justicia, y en sus alas traerá salvación; y saldréis, y saltaréis como becerros de la manada.',
    },
    newTestament: {
      reference: 'Lucas 1:78-79',
      text: 'Por la entrañable misericordia de nuestro Dios, con que nos visitó desde lo alto la aurora, para dar luz a los que habitan en tinieblas y en sombra de muerte; para encaminar nuestros pies por camino de paz.',
    },
    description: 'El último libro del canon hebreo cierra con la imagen del "Sol de justicia" que trae sanidad. El cántico de Zacarías (Benedictus) recoge ese lenguaje solar para anunciar la llegada de Cristo: la aurora desde lo alto que ilumina a los que viven en sombra de muerte. La última profecía del AT y el primer himno del NT comparten la misma metáfora luminosa.',
  },
  {
    id: 95,
    title: 'Del fruto de tus lomos pondré sobre tu trono',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 4,
    oldTestament: {
      reference: 'Salmo 132:11',
      text: 'En verdad juró el Señor a David, y no se retractará de ello: De el fruto de tu vientre pondré sobre tu trono.',
    },
    newTestament: {
      reference: 'Hechos 2:30',
      text: 'Pero siendo profeta, y sabiendo que con juramento Dios le había jurado que de el fruto de sus lomos, en cuanto a la carne, levantaría al Cristo para que se sentase en su trono.',
    },
    description: 'El Salmo 132 recuerda el juramento de Dios a David sobre un sucesor eterno. Pedro en Pentecostés cita exactamente este pasaje para argumentar que David, siendo profeta, habló de la Resurrección de Cristo: sabía que Dios cumpliría ese juramento en un descendiente cuyo trono no tendría fin.',
  },

  // ── MESIÁNICAS · MINISTERIO (complemento 3) ──────────────────────
  {
    id: 96,
    title: 'El Renuevo: sacerdote y rey sobre su trono',
    category: 'mesiánica',
    theme: 'sacerdocio',
    importance: 4,
    oldTestament: {
      reference: 'Zacarías 6:12-13',
      text: 'Y le hablarás, diciendo: Así habla el Señor de los ejércitos, diciendo: He aquí el varón cuyo nombre es el Renuevo, el cual brotará de sus raíces, y edificará el templo del Señor. Él edificará el templo del Señor, y él llevará gloria, y se sentará y dominará en su trono, y habrá sacerdote a su lado; y consejo de paz habrá entre ambos.',
    },
    newTestament: {
      reference: 'Hebreos 7:1-3',
      text: 'Porque este Melquisedec... sin padre, sin madre, sin genealogía; que ni tiene principio de días, ni fin de vida, sino hecho semejante al Hijo de Dios, permanece sacerdote para siempre.',
    },
    description: 'Zacarías nombra al Mesías con el título "Renuevo" y lo presenta como figura única que reunirá en una sola persona el trono real y el sacerdocio: "consejo de paz habrá entre ambos". La Carta a los Hebreos desarrolla este misterio: Cristo es rey según David y sacerdote según Melquisedec, uniendo los dos oficios que en Israel estaban separados por ley.',
  },
  {
    id: 97,
    title: 'Un solo pastor para todas las ovejas',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 4,
    oldTestament: {
      reference: 'Ezequiel 34:23-24',
      text: 'Y levantaré sobre ellas a un pastor, y él las apacentará; a mi siervo David, él las apacentará, y él les será por pastor. Yo el Señor les seré por Dios, y mi siervo David príncipe en medio de ellas.',
    },
    newTestament: {
      reference: 'Juan 10:16',
      text: 'También tengo otras ovejas que no son de este redil; aquéllas también debo traer, y oirán mi voz; y habrá un rebaño, y un pastor.',
    },
    description: 'Ezequiel profetiza que Dios nombrará a un nuevo David como único pastor de Israel. Jesús en el discurso del Buen Pastor lo cumple en dos dimensiones: primero, él mismo es ese único pastor davídico; segundo, amplía el rebaño más allá de Israel —"otras ovejas que no son de este redil"— para incluir a los gentiles en un solo rebaño universal.',
  },
  {
    id: 98,
    title: 'La lengua del enseñado: la enseñanza con autoridad',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 3,
    oldTestament: {
      reference: 'Isaías 50:4-5',
      text: 'El Señor Dios me dio lengua de sabios, para saber hablar palabras al cansado; despertará mañana tras mañana, despertará mi oído para que oiga como los sabios. El Señor Dios me abrió el oído, y yo no fui rebelde, ni me volví atrás.',
    },
    newTestament: {
      reference: 'Marcos 1:22',
      text: 'Y se admiraban de su doctrina; porque les enseñaba como quien tiene autoridad, y no como los escribas.',
    },
    description: 'El tercer Cántico del Siervo describe a alguien que recibe del Señor una lengua y un oído de discípulo, capacitado para nutrir al cansado con la palabra recibida de Dios. La multitud reconoció en la enseñanza de Jesús una autoridad que venía directamente de Dios, a diferencia de los escribas que citaban tradiciones humanas.',
  },
  {
    id: 99,
    title: 'Sus ángeles te guardarán en todos tus caminos',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 3,
    oldTestament: {
      reference: 'Salmo 91:11-12',
      text: 'Pues a sus ángeles mandará acerca de ti, que te guarden en todos tus caminos. En las manos te llevarán, para que tu pie no tropiece en piedra.',
    },
    newTestament: {
      reference: 'Mateo 4:6',
      text: 'Y le dijo: Si eres Hijo de Dios, échate abajo; porque escrito está: A sus ángeles mandará acerca de ti, y en sus manos te sostendrán, para que no tropieces con tu pie en piedra.',
    },
    description: 'El Salmo 91, canto de confianza en la protección divina, es el pasaje que el diablo cita en el segundo relato de la tentación de Jesús. La ironía es triple: el tentador usa la Escritura para tentar al propio Hijo de Dios; Jesús rechaza la tentación precisamente por no querer poner a prueba a su Padre; y los ángeles sí vendrán a servirle, pero al final de las tentaciones.',
  },
  {
    id: 100,
    title: 'El hijo enemistado con el padre',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 3,
    oldTestament: {
      reference: 'Miqueas 7:6',
      text: 'Porque el hijo deshonra al padre, la hija se levanta contra su madre, la nuera contra su suegra; y los enemigos del hombre son los de su casa.',
    },
    newTestament: {
      reference: 'Mateo 10:35-36',
      text: 'Porque he venido para poner en disensión al hombre contra su padre, a la hija contra su madre, y a la nuera contra su suegra; y los enemigos del hombre serán los de su casa.',
    },
    description: 'Miqueas describe el colapso moral de su época: la falta de fidelidad llega hasta el núcleo de la familia. Jesús cita este pasaje casi literalmente para advertir que su venida no traerá paz a toda costa: allí donde la fidelidad al evangelio divida una familia, esa división es preferible a la paz falsa. La espada del discernimiento cumple la palabra profética.',
  },
  {
    id: 101,
    title: 'Piedra de tropiezo y roca de escándalo',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 3,
    oldTestament: {
      reference: 'Isaías 8:14',
      text: 'Entonces él será por santuario; pero a las dos casas de Israel, por piedra para tropezar, y por tropezadero para caer, y por lazo y por red al morador de Jerusalén.',
    },
    newTestament: {
      reference: '1 Pedro 2:8',
      text: 'Y: Piedra de tropiezo, y roca que hace caer; porque tropiezan en la palabra, siendo desobedientes; a lo cual fueron también destinados.',
    },
    description: 'Isaías en su visión del "Señor como santuario" profetiza que esa misma presencia salvadora será piedra de tropiezo para quien la rechace. Pedro combina Isaías 8:14 con Isaías 28:16 y el Salmo 118:22 para construir una cristología de la piedra: Cristo es a la vez cimiento elegido para los creyentes y roca de escándalo para los desobedientes.',
  },
  {
    id: 102,
    title: 'Me honran con los labios pero su corazón está lejos',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 3,
    oldTestament: {
      reference: 'Isaías 29:13',
      text: 'Dice pues el Señor: Porque este pueblo se acerca a mí con su boca, y con sus labios me honra, pero su corazón está lejos de mí, y su temor de mí no es más que un mandamiento de hombres que les ha sido enseñado.',
    },
    newTestament: {
      reference: 'Mateo 15:8-9',
      text: 'Este pueblo de labios me honra; mas su corazón está lejos de mí. Pues en vano me honran, enseñando como doctrinas mandamientos de hombres.',
    },
    description: 'Isaías denuncia la religiosidad externa desconectada del corazón. Jesús lo cita directamente en su enfrentamiento con los fariseos sobre las tradiciones de purificación: la distinción entre lo puro e impuro que ellos aplican externamente no llega al corazón. El profeta había diagnosticado siglos antes la misma enfermedad que Jesús trataba de curar.',
  },

  // ── MESIÁNICAS · PASIÓN (complemento 3) ──────────────────────────
  {
    id: 103,
    title: 'Mis huesos se dislocan: agonía en la pasión',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 4,
    oldTestament: {
      reference: 'Salmo 22:14-15',
      text: 'Me he derramado como aguas, y todos mis huesos se descoyuntaron; mi corazón fue como cera, derritiéndose en medio de mis entrañas. Como un tiesto se secó mi vigor, y mi lengua se pegó a mi paladar, y me has puesto en el polvo de la muerte.',
    },
    newTestament: {
      reference: 'Lucas 22:44',
      text: 'Y estando en agonía, oraba más intensamente; y era su sudor como grandes gotas de sangre que caían hasta la tierra.',
    },
    description: 'Los versículos centrales del Salmo 22 describen con detalle fisiológico el sufrimiento extremo: deshidratación, tensión muscular total, corazón como cera. Lucas en Getsemaní describe el sudor de sangre (hematidrosis), signo del mismo agotamiento extremo. El cuerpo de Jesús en agonía cumple en carne propia los síntomas que el salmista había descrito proféticamente.',
  },
  {
    id: 104,
    title: 'Si pusiere su vida en expiación por el pecado',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 5,
    oldTestament: {
      reference: 'Isaías 53:10-11',
      text: 'Con todo eso, el Señor quiso quebrantarlo, sujetándole a padecimiento. Cuando haya puesto su vida en expiación por el pecado, verá linaje, vivirá por largos días, y la voluntad del Señor será en su mano prosperada. Verá el fruto de la aflicción de su alma, y quedará satisfecho.',
    },
    newTestament: {
      reference: 'Hebreos 9:14',
      text: 'Cuánto más la sangre de Cristo, el cual mediante el Espíritu eterno se ofreció a sí mismo sin mancha a Dios, limpiará vuestras conciencias de obras muertas para que sirváis al Dios vivo.',
    },
    description: 'Isaías 53:10 es uno de los versículos más densos de toda la Escritura: el siervo pone su vida como ofrenda por el pecado (āšām, sacrificio expiatorio) y, paradójicamente, "verá linaje" tras la muerte. Hebreos desarrolla que esta ofrenda fue única y perfecta: la sangre del Mesías, ofrecida mediante el Espíritu eterno, consuma lo que todas las expiaciones levíticas solo prefiguraban.',
  },
  {
    id: 105,
    title: 'El campo del alfarero comprado con el precio de sangre',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 3,
    oldTestament: {
      reference: 'Jeremías 32:6-9',
      text: 'Dijo Jeremías: Vino a mí la palabra del Señor, diciendo: He aquí que Hanameel hijo de Salum tu tío viene a ti, diciendo: Cómprate mi heredad que está en Anatot, porque tú tienes derecho de rescatar para comprarla. Y vino a mí, conforme a la palabra del Señor, Hanameel hijo de mi tío a la cámara de la guardia, y me dijo: Compra ahora mi heredad que está en Anatot.',
    },
    newTestament: {
      reference: 'Mateo 27:9-10',
      text: 'Entonces se cumplió lo dicho por el profeta Jeremías, cuando dijo: Y tomaron las treinta piezas de plata, precio del apreciado, según precio puesto por los hijos de Israel; y las dieron para el campo del alfarero, como me ordenó el Señor.',
    },
    description: 'Mateo atribuye a Jeremías la compra del campo del alfarero con las treinta monedas, fusionando la acción simbólica de Jeremías comprando tierras en el momento de la destrucción (señal de futura restauración) con la imagery de Zacarías 11. La compra de la tierra en el momento de la Pasión reproduce el gesto profético: donde hay muerte se planta la semilla de la restauración.',
  },

  // ── MESIÁNICAS · RESURRECCIÓN (complemento 2) ────────────────────
  {
    id: 106,
    title: 'Al tercer día nos resucitará',
    category: 'mesiánica',
    theme: 'resurrección',
    importance: 5,
    oldTestament: {
      reference: 'Oseas 6:2',
      text: 'Nos dará vida después de dos días; en el tercer día nos resucitará, y viviremos delante de él.',
    },
    newTestament: {
      reference: '1 Corintios 15:4',
      text: 'Y que fue sepultado, y que resucitó al tercer día, conforme a las Escrituras.',
    },
    description: 'Pablo en el que es considerado el credo más antiguo del NT (1Cor 15:3-5) afirma que la Resurrección "al tercer día" ocurrió "conforme a las Escrituras". Oseas 6:2 es el pasaje veterotestamentario que apunta con más claridad a ese "tercer día" como momento de la acción resucitadora de Dios. Israel que se "levantará al tercer día" anticipa al Mesías que resucita en ese mismo plazo.',
  },

  // ── APOCALÍPTICAS (complemento 3) ────────────────────────────────
  {
    id: 107,
    title: 'Tus muertos vivirán: resurrección de la carne',
    category: 'apocalíptica',
    theme: 'escatología',
    importance: 4,
    oldTestament: {
      reference: 'Isaías 26:19',
      text: 'Tus muertos vivirán; sus cadáveres resucitarán. ¡Despertad y cantad, moradores del polvo! porque tu rocío es cual rocío de la aurora, y la tierra dará sus muertos.',
    },
    newTestament: {
      reference: 'Juan 11:43-44',
      text: 'Y habiendo dicho esto, clamó a gran voz: ¡Lázaro, ven fuera! Y el que había muerto salió, atadas las manos y los pies con vendas, y el rostro envuelto en un sudario.',
    },
    description: 'El "pequeño apocalipsis" de Isaías anuncia que los muertos vivirán y que el rocío de Dios hará germinar la tierra de sus difuntos. La resurrección de Lázaro es el signo más directo de Jesús antes de su Pasión: anticipa y garantiza la resurrección universal. Jesús actúa sobre Lázaro como Dios actúa sobre sus muertos en Isaías: con una voz poderosa que ordena la vida.',
  },
  {
    id: 108,
    title: 'El Anciano de Días y el Cristo glorioso',
    category: 'apocalíptica',
    theme: 'parusía',
    importance: 4,
    oldTestament: {
      reference: 'Daniel 7:9-10',
      text: 'Estuve mirando hasta que fueron puestos tronos, y se sentó un Anciano de días, cuyo vestido era blanco como la nieve, y el pelo de su cabeza como lana limpia... millares de millares le servían, y millones de millones asistían delante de él.',
    },
    newTestament: {
      reference: 'Apocalipsis 1:13-15',
      text: 'Y en medio de los siete candeleros, a uno semejante al Hijo del Hombre, vestido de una ropa que llegaba hasta los pies... Su cabeza y sus cabellos eran blancos como blanca lana, como nieve; sus ojos como llama de fuego; y sus pies semejantes al bronce bruñido.',
    },
    description: 'La descripción del Cristo glorioso en Apocalipsis 1 está construida con las imágenes del Anciano de Días de Daniel: cabello blanco, resplandor celestial, multitudes ante el trono. Juan aplica al Hijo del Hombre los atributos del Anciano de Días, una forma audaz de expresar la divinidad de Cristo: el Resucitado comparte la gloria del Padre mismo.',
  },

  // ── HISTÓRICAS (complemento 2) ───────────────────────────────────
  {
    id: 109,
    title: 'Llenaré de gloria esta casa: el segundo templo',
    category: 'histórica',
    theme: 'restauración',
    importance: 3,
    oldTestament: {
      reference: 'Ageo 2:7-9',
      text: 'Y haré temblar a todas las naciones, y vendrá el Deseado de todas las naciones; y llenaré de gloria esta casa, ha dicho el Señor de los ejércitos. Mía es la plata, y mío el oro, dice el Señor de los ejércitos. La gloria postrera de esta casa será mayor que la primera, ha dicho el Señor de los ejércitos.',
    },
    newTestament: {
      reference: 'Hebreos 12:26-27',
      text: 'La voz del cual conmovió entonces la tierra, pero ahora ha prometido, diciendo: Aún una vez, y conmoveré no solamente la tierra, sino también el cielo. Y esta frase: Aún una vez, indica la remoción de las cosas movibles, como cosas hechas, para que queden las inconmovibles.',
    },
    description: 'Ageo alentó la reconstrucción del segundo templo prometiendo que su gloria sería mayor que la del de Salomón, porque el "Deseado de las naciones" lo llenaría. La Carta a los Hebreos cita la promesa del "conmover los cielos y la tierra" como prefiguración del sacudimiento escatológico que suprimirá las instituciones antiguas para que permanezca lo eterno. El Mesías es la gloria que supera al templo.',
  },
  {
    id: 110,
    title: 'Una obra admirable que no creeréis',
    category: 'histórica',
    theme: 'juicio sobre Israel',
    importance: 3,
    oldTestament: {
      reference: 'Habacuc 1:5',
      text: 'Mirad entre las naciones, y ved, y asombraos; porque haré una obra en vuestros días que aun cuando se os contare, no la creeréis.',
    },
    newTestament: {
      reference: 'Hechos 13:41',
      text: 'Mirad, oh menospreciadores, y asombraos, y pereced; porque yo hago una obra en vuestros días, obra que no creeréis, si alguien os la contare.',
    },
    description: 'Habacuc anunció a sus contemporáneos la llegada de los caldeos como instrumento de juicio: una obra tan prodigiosa que quien la escuchara no podría creerla. Pablo cita este versículo en la sinagoga de Antioquía para advertir a los judíos que rechazan el evangelio: la obra de Dios en Cristo —resurrección, misión a los gentiles— es igualmente increíble para el que se cierra a recibirla.',
  },

  // ── MESIÁNICAS · MINISTERIO (complemento 4) ──────────────────────
  {
    id: 111,
    title: 'Gracia derramada en sus labios',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 3,
    oldTestament: {
      reference: 'Salmo 45:2',
      text: 'Has sido agraciado con mayor gracia que los hijos de los hombres; la gracia se derramó en tus labios; por tanto Dios te ha bendecido para siempre.',
    },
    newTestament: {
      reference: 'Lucas 4:22',
      text: 'Y todos daban buen testimonio de él, y estaban maravillados de las palabras de gracia que salían de su boca.',
    },
    description: 'El Salmo 45, cántico nupcial del rey mesiánico, describe la gracia que fluye de sus labios como cualidad única entre los hombres. Los contemporáneos de Jesús en Nazaret "se maravillaban de las palabras de gracia que salían de su boca", reconociendo en su predicación algo cualitativamente distinto a todo lo que habían escuchado.',
  },
  {
    id: 112,
    title: 'Solo Dios puede perdonar pecados',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 4,
    oldTestament: {
      reference: 'Isaías 43:25',
      text: 'Yo, yo soy el que borro tus rebeliones por amor de mí mismo, y no me acordaré de tus pecados.',
    },
    newTestament: {
      reference: 'Marcos 2:7-10',
      text: '¿Por qué habla este así? Blasfemias dice. ¿Quién puede perdonar pecados, sino solo Dios?... Pero para que sepáis que el Hijo del Hombre tiene potestad en la tierra para perdonar pecados, dijo al paralítico: A ti te digo: Levántate, toma tu lecho, y vete a tu casa.',
    },
    description: 'En Isaías 43, Yahvé se presenta como el único que puede borrar los pecados por gracia pura, sin mérito del perdonado. Cuando Jesús dice al paralítico "tus pecados te son perdonados", los escribas acusan blasfemia con razón desde su premisa: solo Dios perdona así. Jesús no niega la premisa; la confirma implícitamente al actuar con la autoridad exclusiva de Yahvé.',
  },
  {
    id: 113,
    title: 'El justo perseguido: profecía de la Pasión en Sabiduría',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 5,
    oldTestament: {
      reference: 'Sabiduría 2:12-20',
      text: 'Acechemos al justo, porque nos es molesto... Se gloria de tener el conocimiento de Dios, y se llama hijo del Señor... Si el justo es hijo de Dios, él le asistirá, y le librará de las manos de sus adversarios. Probémosle con vejaciones e injurias... condenémosle a muerte ignominiosa, pues habrá respecto de sus palabras.',
    },
    newTestament: {
      reference: 'Mateo 27:40-43',
      text: 'Si eres Hijo de Dios, desciende de la cruz... Confió en Dios; líbrele ahora si le quiere; porque ha dicho: Soy Hijo de Dios.',
    },
    description: 'Sabiduría 2 es la profecía más asombrosa de la Pasión fuera de Isaías 53: el libro deuterocanónico describe con precisión quirúrgica el razonamiento de los persecutores del Justo —"probémosle para ver si Dios le rescata", "si es hijo de Dios que lo libre"— y las burlas bajo la cruz en Mateo 27 son una reproducción casi literal de ese texto. Los impíos que burlaban a Jesús cumplían sin saberlo la Escritura.',
  },
  {
    id: 114,
    title: 'Extraño a mis propios hermanos',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 3,
    oldTestament: {
      reference: 'Salmo 69:8',
      text: 'Extraño he sido para mis hermanos, y desconocido para los hijos de mi madre.',
    },
    newTestament: {
      reference: 'Juan 7:5',
      text: 'Porque ni aun sus hermanos creían en él.',
    },
    description: 'El Salmo 69, uno de los más usados en el NT para la Pasión, contiene este versículo que describe el rechazo por parte de la propia familia. Juan señala explícitamente que los hermanos de Jesús no creían en él, cumpliendo la imagen del salmista: el justo es extraño incluso en su propio círculo. El dolor del rechazo familiar precedió al rechazo de Israel.',
  },
  {
    id: 115,
    title: 'El Salvador viene a la hija de Sión',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 3,
    oldTestament: {
      reference: 'Isaías 62:11',
      text: 'He aquí que el Señor hizo oír hasta lo último de la tierra: Decid a la hija de Sión: He aquí viene tu Salvador; he aquí su recompensa con él, y delante de él su obra.',
    },
    newTestament: {
      reference: 'Mateo 21:5',
      text: 'Decid a la hija de Sión: He aquí, tu Rey viene a ti, manso, y sentado sobre una asna, sobre un pollino, hijo de la que acostumbra al yugo.',
    },
    description: 'Mateo combina en su cita de la entrada triunfal dos profecías: Isaías 62:11 ("decid a la hija de Sión: viene tu Salvador") y Zacarías 9:9 (el rey humilde sobre un asno). El evangelista ve la entrada en Jerusalén como el doble cumplimiento de esas voces proféticas que habían convocado a Sión a prepararse para la llegada de su Rey.',
  },
  {
    id: 116,
    title: 'Daré justicia con equidad y corregirá a los pobres',
    category: 'mesiánica',
    theme: 'ministerio',
    importance: 3,
    oldTestament: {
      reference: 'Isaías 11:3-5',
      text: 'Y le hará entender diligente en el temor del Señor. No juzgará según la vista de sus ojos, ni argüirá por lo que oigan sus oídos; sino que juzgará con justicia a los pobres, y argüirá con equidad por los mansos de la tierra.',
    },
    newTestament: {
      reference: 'Juan 7:24',
      text: 'No juzguéis según las apariencias, sino juzgad con justo juicio.',
    },
    description: 'Isaías 11 describe al Mesías con el Espíritu de discernimiento que juzgará no por apariencias sino con justicia profunda. Jesús en el Templo enseña exactamente este principio: el juicio recto supera el juicio superficial. Su ministerio fue un continuo cuestionamiento del juicio basado en apariencias —sabbat, pureza ritual, pecadores— en favor de la justicia interior.',
  },

  // ── MESIÁNICAS · PASIÓN (complemento 4) ──────────────────────────
  {
    id: 117,
    title: 'Mis amigos y cercanos se mantienen lejos',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 3,
    oldTestament: {
      reference: 'Salmo 38:11',
      text: 'Mis amigos y mis compañeros se mantienen lejos de mi plaga, y mis cercanos se han alejado.',
    },
    newTestament: {
      reference: 'Lucas 23:49',
      text: 'Pero todos sus conocidos, y las mujeres que le habían seguido desde Galilea, estaban lejos mirando estas cosas.',
    },
    description: 'El Salmo 38 describe el abandono del justo sufriente por sus seres queridos. Lucas registra con precisión que "sus conocidos" observaban la crucifixión "desde lejos" —la misma distancia profética del salmo—. Solo unas pocas mujeres y el discípulo amado se acercaron a la cruz; la mayoría contempló desde la distancia el cumplimiento de la profecía.',
  },
  {
    id: 118,
    title: 'Dio la mejilla al que le hería',
    category: 'mesiánica',
    theme: 'pasión',
    importance: 3,
    oldTestament: {
      reference: 'Lamentaciones 3:30',
      text: 'Dé la mejilla al que le hiere, y sea colmado de afrentas.',
    },
    newTestament: {
      reference: 'Mateo 26:67',
      text: 'Entonces le escupieron en el rostro, y le dieron de puñetazos; y otros le abofetearon.',
    },
    description: 'Lamentaciones 3, meditación de Jeremías sobre el sufrimiento, incluye la imagen del siervo que ofrece la mejilla. Jesús no resistió los golpes ni los escupitajos durante el proceso ante el Sanedrín, cumpliendo este texto en su actitud de abandono manso a los que lo golpeaban. El propio Jesús había enseñado "pon la otra mejilla" (Mt 5:39), predicando lo que él mismo encarnaría.',
  },

  // ── MESIÁNICAS · RESURRECCIÓN (complemento 3) ────────────────────
  {
    id: 119,
    title: 'Este es el día que hizo el Señor',
    category: 'mesiánica',
    theme: 'resurrección',
    importance: 3,
    oldTestament: {
      reference: 'Salmo 118:24',
      text: 'Este es el día que hizo el Señor; nos gozaremos y alegraremos en él.',
    },
    newTestament: {
      reference: 'Juan 20:19',
      text: 'Cuando llegó la noche de aquel mismo día, el primero de la semana, estando las puertas cerradas en el lugar donde los discípulos estaban reunidos por miedo de los judíos, vino Jesús, y se puso en medio, y les dijo: Paz a vosotros.',
    },
    description: 'El Salmo 118, himno pascual que rodea la entrada triunfal (v. 26 citado en Mt 21:9), culmina con este grito de júbilo ante "el día que hizo el Señor". La Iglesia primitiva reconoció en el Domingo de Resurrección ese "día" por excelencia: el primer día de la semana nueva cuando el Señor se presentó resucitado. El "día del Señor" veterotestamentario se convierte en el Domingo pascual.',
  },

  // ── MESIÁNICAS · NACIMIENTO (complemento 4) ──────────────────────
  {
    id: 120,
    title: 'Moraré en medio de ti: el Dios que viene a habitar',
    category: 'mesiánica',
    theme: 'nacimiento',
    importance: 4,
    oldTestament: {
      reference: 'Zacarías 2:10-11',
      text: 'Canta de júbilo y alégrate, hija de Sión; porque he aquí vengo, y moraré en medio de ti, ha dicho el Señor. Y se unirán muchas naciones al Señor en aquel día, y me serán por pueblo, y moraré en medio de ti.',
    },
    newTestament: {
      reference: 'Juan 1:14',
      text: 'Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad.',
    },
    description: 'Zacarías promete que el Señor mismo vendrá y "morará en medio" de su pueblo, atrayendo incluso a las naciones. El verbo hebreo usado es šākan (morar en tienda), la misma raíz del sustantivo Šekiná (la presencia de Dios). Juan usa el equivalente griego: el Logos "levantó su tienda" (ἐσκήνωσεν) entre nosotros. La promesa de Zacarías se cumplió en la Encarnación.',
  },

  // ── APOCALÍPTICAS (complemento 4) ────────────────────────────────
  {
    id: 121,
    title: 'El Espíritu derramado desde lo alto',
    category: 'apocalíptica',
    theme: 'espíritu',
    importance: 4,
    oldTestament: {
      reference: 'Isaías 32:15',
      text: 'Hasta que sobre nosotros sea derramado el Espíritu de lo alto, y el desierto se convierta en campo fértil, y el campo fértil sea estimado por bosque.',
    },
    newTestament: {
      reference: 'Hechos 2:1-4',
      text: 'Y de repente vino del cielo un estruendo como de un viento recio que soplaba, el cual llenó toda la casa donde estaban sentados... Y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen.',
    },
    description: 'Isaías 32 anuncia el fin del desierto espiritual cuando el Espíritu sea derramado "desde lo alto" transformando la tierra yerma en jardín fértil. Pentecostés es ese derramamiento: el Espíritu cae sobre los discípulos transformando la comunidad dispersa en la Iglesia misionera. Donde Joel 2 (id 44) habla de profecías y visiones, Isaías 32 describe la transformación del paisaje completo.',
  },
  {
    id: 122,
    title: 'El reino y el dominio entregado al pueblo de los santos',
    category: 'apocalíptica',
    theme: 'reino',
    importance: 3,
    oldTestament: {
      reference: 'Daniel 7:27',
      text: 'Y que el reino, y el dominio y la majestad de los reinos debajo de todo el cielo, sea dado al pueblo de los santos del Altísimo, cuyo reino es reino eterno, y todos los dominios le servirán y obedecerán.',
    },
    newTestament: {
      reference: 'Apocalipsis 20:4-6',
      text: 'Y vi tronos, y se sentaron sobre ellos los que recibieron facultad de juzgar; y vi las almas de los decapitados por causa del testimonio de Jesús... y reinaron con Cristo mil años.',
    },
    description: 'Daniel 7 culmina con la visión del dominio universal entregado no solo al Hijo del Hombre sino "al pueblo de los santos del Altísimo". El Apocalipsis muestra cómo los mártires —los que han participado del sufrimiento de Cristo— participan también de su reinado. El reino de Daniel era prometido a una nación; el Apocalipsis lo abre a todo el que haya dado testimonio fiel.',
  },

  // ── APOCALÍPTICAS (complemento) ──────────────────────────────────
  {
    id: 76,
    title: 'El culto universal de todas las naciones',
    category: 'apocalíptica',
    theme: 'nueva creación',
    importance: 3,
    oldTestament: {
      reference: 'Zacarías 14:16',
      text: 'Y todos los que sobrevivieren de las naciones que vinieron contra Jerusalén, subirán de año en año para adorar al Rey, al Señor de los ejércitos, y para celebrar la fiesta de los tabernáculos.',
    },
    newTestament: {
      reference: 'Apocalipsis 15:4',
      text: '¿Quién no te temerá, oh Señor, y glorificará tu nombre? Pues sólo tú eres santo; por lo cual todas las naciones vendrán y te adorarán, porque tus juicios se han manifestado.',
    },
    description: 'Zacarías concluye su libro con la visión escatológica de todas las naciones peregrinando a Jerusalén para adorar al Señor. El Apocalipsis retoma esta universalidad en el canto de los vencedores: todas las naciones adorarán a Dios. Lo que era peregrinación anual al templo terreno se convierte en liturgia eterna ante el trono del Cordero.',
  },
];
