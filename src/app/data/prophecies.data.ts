import { Prophecy } from '../models/prophecy.model';

export const PROPHECIES: Prophecy[] = [
  // ── MESIÁNICAS ────────────────────────────────────────────────
  {
    id: 1,
    title: 'Nacimiento virginal del Mesías',
    category: 'mesiánica',
    theme: 'nacimiento',
    oldTestament: {
      reference: 'Isaías 7:14',
      text: 'Por eso el Señor mismo les dará una señal: He aquí que la virgen concebirá y dará a luz un hijo, y le pondrá por nombre Emanuel.'
    },
    newTestament: {
      reference: 'Mateo 1:22-23',
      text: 'Todo esto aconteció para que se cumpliese lo dicho por el Señor por medio del profeta: He aquí, una virgen concebirá y dará a luz un hijo, y llamarás su nombre Emanuel, que traducido es: Dios con nosotros.'
    },
    description: 'Isaías anuncia que una virgen daría a luz al Mesías llamado Emanuel ("Dios con nosotros"). Mateo vincula explícitamente este oráculo al nacimiento de Jesús, subrayando la presencia divina encarnada en él.'
  },
  {
    id: 2,
    title: 'Nacimiento en Belén',
    category: 'mesiánica',
    theme: 'nacimiento',
    oldTestament: {
      reference: 'Miqueas 5:2',
      text: 'Pero tú, Belén Efratá, aunque eres pequeña entre las familias de Judá, de ti me saldrá el que ha de ser Señor en Israel; y sus salidas son desde el principio, desde los días de la eternidad.'
    },
    newTestament: {
      reference: 'Mateo 2:5-6',
      text: 'En Belén de Judea; porque así está escrito por el profeta: Y tú, Belén, de la tierra de Judá, no eres la más pequeña entre los príncipes de Judá; porque de ti saldrá un guiador, que apacentará a mi pueblo Israel.'
    },
    description: 'Miqueas especifica la localidad del nacimiento del rey mesiánico con siglos de anticipación. Los sumos sacerdotes citan este pasaje a Herodes cuando los magos buscan al recién nacido.'
  },
  {
    id: 3,
    title: 'Entrada triunfal en Jerusalén',
    category: 'mesiánica',
    theme: 'ministerio',
    oldTestament: {
      reference: 'Zacarías 9:9',
      text: 'Alégrate mucho, hija de Sión; da voces de júbilo, hija de Jerusalén; he aquí tu rey vendrá a ti, justo y salvador, humilde, y cabalgando sobre un asno, sobre un pollino hijo de asna.'
    },
    newTestament: {
      reference: 'Juan 12:14-15',
      text: 'Y Jesús, hallando un asnillo, cabalgó sobre él, como está escrito: No temas, hija de Sión; he aquí tu Rey viene, montado sobre un pollino de asna.'
    },
    description: 'Zacarías describe al rey mesiánico como humilde, montado en un asno y no en un caballo de guerra. Juan identifica la entrada de Jesús a Jerusalén el Domingo de Ramos como el cumplimiento literal de esta profecía.'
  },
  {
    id: 4,
    title: 'Traición por treinta monedas de plata',
    category: 'mesiánica',
    theme: 'pasión',
    oldTestament: {
      reference: 'Zacarías 11:12-13',
      text: 'Y les dije: Si os parece bien, dadme mi salario; y si no, dejadlo. Y pesaron por mi salario treinta piezas de plata. Y me dijo el Señor: Échalo al tesoro; ¡hermoso precio con que me han apreciado! Y tomé las treinta piezas de plata y las eché en la casa del Señor al tesoro.'
    },
    newTestament: {
      reference: 'Mateo 27:3-10',
      text: 'Entonces Judas, el que le había entregado, viendo que era condenado, devolvió arrepentido las treinta piezas de plata a los principales sacerdotes y a los ancianos... Y tomando las treinta piezas de plata... las dieron para el campo del alfarero.'
    },
    description: 'Con asombrosa precisión, Zacarías indica el precio exacto de la traición y el destino final del dinero. Mateo narra cómo se cumple cada detalle: los treinta siclos, la devolución al templo y la compra del campo del alfarero.'
  },
  {
    id: 5,
    title: 'El Siervo Sufriente',
    category: 'mesiánica',
    theme: 'pasión',
    oldTestament: {
      reference: 'Isaías 53:3-5',
      text: 'Despreciado y desechado entre los hombres, varón de dolores, experimentado en quebranto... herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados.'
    },
    newTestament: {
      reference: '1 Pedro 2:24',
      text: 'Quien llevó él mismo nuestros pecados en su cuerpo sobre el madero, para que nosotros, estando muertos a los pecados, vivamos a la justicia; y por cuya herida fuisteis sanados.'
    },
    description: 'El cuarto cántico del Siervo de Yahvé en Isaías 53 es el pasaje mesiánico más desarrollado del Antiguo Testamento. Describe la pasión, muerte vicaria y glorificación del Mesías con una precisión que la Iglesia primitiva reconoció de inmediato en Jesús de Nazaret.'
  },
  {
    id: 6,
    title: 'Resurrección: no verá corrupción',
    category: 'mesiánica',
    theme: 'resurrección',
    oldTestament: {
      reference: 'Salmo 16:10',
      text: 'Porque no dejarás mi alma en el Seol, ni permitirás que tu Santo vea corrupción.'
    },
    newTestament: {
      reference: 'Hechos 2:31',
      text: 'Viéndolo antes, habló de la resurrección de Cristo, que su alma no fue dejada en el Hades, ni su carne vio corrupción.'
    },
    description: 'Pedro en Pentecostés aplica el Salmo 16 a Jesús, argumentando que David, que sí vio corrupción, no podía referirse a sí mismo, sino al Mesías que resucitaría sin corrupción. Es el primer sermón cristológico registrado.'
  },
  {
    id: 7,
    title: 'El Mesías, sacerdote eterno',
    category: 'mesiánica',
    theme: 'sacerdocio',
    oldTestament: {
      reference: 'Salmo 110:4',
      text: 'Juró el Señor y no se arrepentirá: Tú eres sacerdote para siempre, según el orden de Melquisedec.'
    },
    newTestament: {
      reference: 'Hebreos 7:17',
      text: 'Pues se le da este testimonio: Tú eres sacerdote para siempre, según el orden de Melquisedec.'
    },
    description: 'El Salmo 110 establece un sacerdocio real eterno que trasciende el sacerdocio levítico. La carta a los Hebreos desarrolla extensamente cómo Jesús cumple este sacerdocio superior, siendo a la vez rey, sacerdote y víctima del sacrificio perfecto.'
  },
  {
    id: 8,
    title: 'La nueva alianza',
    category: 'mesiánica',
    theme: 'alianza',
    oldTestament: {
      reference: 'Jeremías 31:31-33',
      text: 'He aquí que vienen días, dice el Señor, en que haré una nueva alianza con la casa de Israel y con la casa de Judá... Pondré mi ley en su interior y la escribiré en sus corazones; y seré su Dios y ellos serán mi pueblo.'
    },
    newTestament: {
      reference: 'Lucas 22:20',
      text: 'Esta copa es la nueva alianza en mi sangre, que es derramada por vosotros.'
    },
    description: 'Jeremías anuncia una nueva alianza interior que superará la mosaica grabada en piedra. En la Última Cena, Jesús proclama que su sangre inaugura esta nueva alianza, vinculando la Eucaristía con la promesa profética.'
  },

  // ── APOCALÍPTICAS ─────────────────────────────────────────────
  {
    id: 9,
    title: 'El Hijo del Hombre en las nubes',
    category: 'apocalíptica',
    theme: 'parusía',
    oldTestament: {
      reference: 'Daniel 7:13-14',
      text: 'Miraba yo en la visión de la noche, y he aquí con las nubes del cielo venía uno como un hijo de hombre, que vino hasta el Anciano de días, y le hicieron acercarse delante de él. Y le fue dado dominio, gloria y reino, para que todos los pueblos, naciones y lenguas le sirvieran.'
    },
    newTestament: {
      reference: 'Apocalipsis 1:7',
      text: 'He aquí que viene con las nubes, y todo ojo le verá, y los que le traspasaron; y todos los linajes de la tierra harán lamentación por él. Sí, amén.'
    },
    description: 'Daniel ve al Hijo del Hombre recibir un reino eterno y universal del Anciano de Días. El Apocalipsis retoma esta imagen para describir la venida gloriosa de Cristo al final de los tiempos, combinándola con la visión de Zacarías 12:10.'
  },
  {
    id: 10,
    title: 'Los cuatro jinetes del juicio',
    category: 'apocalíptica',
    theme: 'juicio',
    oldTestament: {
      reference: 'Ezequiel 14:21',
      text: 'Porque así ha dicho el Señor: Cuando yo enviare mis cuatro graves juicios sobre Jerusalén, la espada, el hambre, las fieras y la pestilencia, para cortar de ella hombres y bestias...'
    },
    newTestament: {
      reference: 'Apocalipsis 6:8',
      text: 'Miré, y he aquí un caballo amarillo, y el que lo montaba tenía por nombre Muerte, y el Hades le seguía; y le fue dada potestad sobre la cuarta parte de la tierra, para matar con espada, con hambre, con mortandad, y con las fieras de la tierra.'
    },
    description: 'Ezequiel anuncia los cuatro instrumentos del juicio divino. El Apocalipsis los dramatiza en los cuatro jinetes, preservando la cuádruple estructura: espada, hambre, pestilencia y fieras. Es el lenguaje profético del juicio reconfigurado en visión apocalíptica.'
  },
  {
    id: 11,
    title: 'La mujer vestida de sol',
    category: 'apocalíptica',
    theme: 'escatología',
    oldTestament: {
      reference: 'Génesis 37:9',
      text: 'Soñé aún otro sueño, y he aquí que el sol y la luna y once estrellas se inclinaban a mí.'
    },
    newTestament: {
      reference: 'Apocalipsis 12:1',
      text: 'Apareció en el cielo una gran señal: una mujer vestida del sol, con la luna debajo de sus pies, y sobre su cabeza una corona de doce estrellas.'
    },
    description: 'La simbología cósmica del sueño de José (sol, luna, doce estrellas = Israel) es retomada por el Apocalipsis para describir a la Mujer que representa a Israel-Iglesia. La tradición católica ve también en esta figura a María, Madre del Mesías.'
  },
  {
    id: 12,
    title: 'Armagedón: la batalla final',
    category: 'apocalíptica',
    theme: 'batalla final',
    oldTestament: {
      reference: 'Joel 3:2',
      text: 'Reuniré a todas las naciones y las haré descender al valle de Josafat, y allí entraré en juicio con ellas a causa de mi pueblo y de mi heredad Israel, al que ellas esparcieron por las naciones.'
    },
    newTestament: {
      reference: 'Apocalipsis 16:16',
      text: 'Y los reunió en el lugar que en hebreo se llama Armagedón.'
    },
    description: 'Joel profetiza la congregación de naciones para el juicio final en el valle de Josafat. El Apocalipsis sitúa la batalla escatológica en el monte de Meguido (Armagedón). Ambos textos apuntan al mismo evento: el juicio definitivo de Dios sobre las naciones.'
  },

  // ── HISTÓRICAS ────────────────────────────────────────────────
  {
    id: 13,
    title: 'Destrucción del templo de Jerusalén',
    category: 'histórica',
    theme: 'juicio sobre Israel',
    oldTestament: {
      reference: 'Miqueas 3:12',
      text: 'Por tanto, a causa de vosotros Sión será arada como campo, y Jerusalén vendrá a ser montones de ruinas, y el monte de la casa como cumbres de bosque.'
    },
    newTestament: {
      reference: 'Marcos 13:2',
      text: 'Jesús le dijo: ¿Ves estos grandes edificios? No quedará piedra sobre piedra, que no sea derribada.'
    },
    description: 'Miqueas anuncia la destrucción de Jerusalén bajo el juicio divino. Jesús actualiza la profecía sobre el Templo de Herodes, que fue destruido por las legiones romanas en el año 70 d.C. bajo Tito, cumpliendo literalmente la predicción.'
  },
  {
    id: 14,
    title: 'Caída definitiva de Babilonia',
    category: 'histórica',
    theme: 'caída de imperios',
    oldTestament: {
      reference: 'Isaías 13:19-20',
      text: 'Y Babilonia, hermosura de reinos y ornamento de la grandeza de los caldeos, será como Sodoma y Gomorra, a las que trastornó Dios. Nunca más será habitada, ni se morará en ella de generación en generación.'
    },
    newTestament: {
      reference: 'Apocalipsis 18:2',
      text: 'Ha caído, ha caído la gran Babilonia, y se ha hecho habitación de demonios y guarida de todo espíritu inmundo, y albergue de toda ave inmunda y aborrecible.'
    },
    description: 'Isaías profetiza la ruina definitiva de Babilonia, potencia que destruyó Jerusalén en 586 a.C. La ciudad fue decayendo hasta quedar despoblada. El Apocalipsis reutiliza "Babilonia" como símbolo de Roma y de todo poder anticristiano.'
  },
  {
    id: 15,
    title: 'El retorno del exilio babilónico',
    category: 'histórica',
    theme: 'restauración',
    oldTestament: {
      reference: 'Jeremías 29:10',
      text: 'Porque así dijo el Señor: Cuando en Babilonia se cumplan los setenta años, yo os visitaré y despertaré sobre vosotros mi buena palabra, para haceros volver a este lugar.'
    },
    newTestament: null,
    description: 'Jeremías anuncia con precisión que el exilio babilónico durará setenta años, tras los cuales Dios restaurará a Israel en su tierra. Esto se cumplió con el edicto de Ciro en 538 a.C. que permitió el retorno de los exiliados. Esta profecía histórica no tiene referencia en el Nuevo Testamento porque se cumplió antes de la venida de Cristo.'
  }
];
