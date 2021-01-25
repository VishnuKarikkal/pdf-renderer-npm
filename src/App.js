import React from 'react';
//importing essentials from the npm -react-pdf/renderer
import { Document,Image,Text,StyleSheet,Font,Page,PDFViewer } from '@react-pdf/renderer';

//registering the font used on Document
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});
//styles on Document
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

// Create Document Component : <Document >


class App extends React.Component 
{
  constructor(props)
  {
    super(props)
    this.state = 
    {
      url:null
    }
    this.onRender= this.onRender.bind(this);
  }
  //sets the document blob data to the state url
  onRender=({blob})=>
  {
    console.log("download");
    this.setState({url : URL.createObjectURL(blob)})
  }
  render()
  {
    return(
    <div>
      <h1>PDF Viewer :</h1>
      {/* download button */}
      <a href={this.state.url} 
         download={`download.pdf`}
      >
        Download
      </a>
       <br></br>
       {/* the pdf viewer */}
      <PDFViewer style={{"width":"95vw","height":"90vh"}}>
        {/* the Document */}
        <Document onRender={this.onRender}>
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              ~ Created with react-pdf ~
            </Text>
            <Text style={styles.title}>Don Quijote de la Mancha</Text>
            <Text style={styles.author}>Miguel de Cervantes</Text>
            <Image
              style={styles.image}
              src="data:image/jpeg;base64,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"
            />
            <Text style={styles.subtitle}>
              Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D.
              Quijote de la Mancha
            </Text>
            <Text style={styles.text}>
              En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
              mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga
              antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que
              carnero, salpicón las más noches, duelos y quebrantos los sábados,
              lentejas los viernes, algún palomino de añadidura los domingos,
              consumían las tres partes de su hacienda. El resto della concluían sayo
              de velarte, calzas de velludo para las fiestas con sus pantuflos de lo
              mismo, los días de entre semana se honraba con su vellori de lo más
              fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina
              que no llegaba a los veinte, y un mozo de campo y plaza, que así
              ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro
              hidalgo con los cincuenta años, era de complexión recia, seco de carnes,
              enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que
              tenía el sobrenombre de Quijada o Quesada (que en esto hay alguna
              diferencia en los autores que deste caso escriben), aunque por
              conjeturas verosímiles se deja entender que se llama Quijana; pero esto
              importa poco a nuestro cuento; basta que en la narración dél no se salga
              un punto de la verdad
            </Text>
            <Text style={styles.text}>
              Es, pues, de saber, que este sobredicho hidalgo, los ratos que estaba
              ocioso (que eran los más del año) se daba a leer libros de caballerías
              con tanta afición y gusto, que olvidó casi de todo punto el ejercicio de
              la caza, y aun la administración de su hacienda; y llegó a tanto su
              curiosidad y desatino en esto, que vendió muchas hanegas de tierra de
              sembradura, para comprar libros de caballerías en que leer; y así llevó
              a su casa todos cuantos pudo haber dellos; y de todos ningunos le
              parecían tan bien como los que compuso el famoso Feliciano de Silva:
              porque la claridad de su prosa, y aquellas intrincadas razones suyas, le
              parecían de perlas; y más cuando llegaba a leer aquellos requiebros y
              cartas de desafío, donde en muchas partes hallaba escrito: la razón de
              la sinrazón que a mi razón se hace, de tal manera mi razón enflaquece,
              que con razón me quejo de la vuestra fermosura, y también cuando leía:
              los altos cielos que de vuestra divinidad divinamente con las estrellas
              se fortifican, y os hacen merecedora del merecimiento que merece la
              vuestra grandeza.
            </Text>
            <Text style={styles.text}>
              Con estas y semejantes razones perdía el pobre caballero el juicio, y
              desvelábase por entenderlas, y desentrañarles el sentido, que no se lo
              sacara, ni las entendiera el mismo Aristóteles, si resucitara para sólo
              ello. No estaba muy bien con las heridas que don Belianis daba y
              recibía, porque se imaginaba que por grandes maestros que le hubiesen
              curado, no dejaría de tener el rostro y todo el cuerpo lleno de
              cicatrices y señales; pero con todo alababa en su autor aquel acabar su
              libro con la promesa de aquella inacabable aventura, y muchas veces le
              vino deseo de tomar la pluma, y darle fin al pie de la letra como allí
              se promete; y sin duda alguna lo hiciera, y aun saliera con ello, si
              otros mayores y continuos pensamientos no se lo estorbaran. Tuvo muchas
              veces competencia con el cura de su lugar (que era hombre docto graduado
              en Sigüenza), sobre cuál había sido mejor caballero, Palmerín de
              Inglaterra o Amadís de Gaula; mas maese Nicolás, barbero del mismo
              pueblo, decía que ninguno llegaba al caballero del Febo, y que si alguno
              se le podía comparar, era don Galaor, hermano de Amadís de Gaula, porque
              tenía muy acomodada condición para todo; que no era caballero
              melindroso, ni tan llorón como su hermano, y que en lo de la valentía no
              le iba en zaga.
            </Text>
            <Text style={styles.text}>
              En resolución, él se enfrascó tanto en su lectura, que se le pasaban las
              noches leyendo de claro en claro, y los días de turbio en turbio, y así,
              del poco dormir y del mucho leer, se le secó el cerebro, de manera que
              vino a perder el juicio. Llenósele la fantasía de todo aquello que leía
              en los libros, así de encantamientos, como de pendencias, batallas,
              desafíos, heridas, requiebros, amores, tormentas y disparates
              imposibles, y asentósele de tal modo en la imaginación que era verdad
              toda aquella máquina de aquellas soñadas invenciones que leía, que para
              él no había otra historia más cierta en el mundo.
            </Text>
            <Text style={styles.subtitle} break>
              Capítulo II: Que trata de la primera salida que de su tierra hizo el
              ingenioso Don Quijote
            </Text>
            <Image
              style={styles.image}
              src="/images/quijote2.png"
            />
            <Text style={styles.text}>
              Hechas, pues, estas prevenciones, no quiso aguardar más tiempo a poner
              en efeto su pensamiento, apretándole a ello la falta que él pensaba que
              hacía en el mundo su tardanza, según eran los agravios que pensaba
              deshacer, tuertos que enderezar, sinrazones que emendar y abusos que
              mejorar y deudas que satisfacer. Y así, sin dar parte a persona alguna
              de su intención y sin que nadie le viese, una mañana, antes del día, que
              era uno de los calurosos del mes de Julio, se armó de todas sus armas,
              subió sobre Rocinante, puesta su mal compuesta celada, embrazó su
              adarga, tomó su lanza y por la puerta falsa de un corral salió al campo
              con grandísimo contento y alborozo de ver con cuánta facilidad había
              dado principio a su buen deseo. Mas apenas se vio en el campo cuando le
              asaltó un pensamiento terrible, y tal, que por poco le hiciera dejar la
              comenzada empresa; y fue que le vino a la memoria que no era armado
              caballero, y que, conforme a ley de caballería, ni podía ni debía tomar
              armas con ningún caballero; y puesto que lo fuera, había de llevar armas
              blancas, como novel caballero, sin empresa en el escudo, hasta que por
              su esfuerzo la ganase. Estos pensamientos le hicieron titubear en su
              propósito; mas pudiendo más su locura que otra razón alguna, propuso de
              hacerse armar caballero del primero que topase, a imitación de otros
              muchos que así lo hicieron, según él había leído en los libros que tal
              le tenían. En lo de las armas blancas, pensaba limpiarlas de manera, en
              teniendo lugar, que lo fuesen más que un arminio; y con esto se quietó18
              y prosiguió su camino, sin llevar otro que aquel que su caballo quería,
              creyendo que en aquello consistía la fuerza de las aventuras
            </Text>
            <Text style={styles.text}>
              Yendo, pues, caminando nuestro flamante aventurero, iba hablando consigo
              mesmo, y diciendo: —¿Quién duda, sino que en los venideros tiempos,
              cuando salga a luz la verdadera historia de mis famosos hechos, que el
              sabio que los escribiere no ponga, cuando llegue a contar esta mi
              primera salida tan de mañana, desta manera?: Apenas había el rubicundo
              Apolo tendido por la faz de la ancha y espaciosa tierra las doradas
              hebras de sus hermosos cabellos, y apenas los pequeños y pintados
              pajarillos con sus arpadas lenguas habían saludado con dulce y meliflua
              armonía la venida de la rosada Aurora, que, dejando la blanda cama del
              celoso marido, por las puertas y balcones del manchego horizonte a los
              mortales se mostraba, cuando el famoso caballero don Quijote de la
              Mancha, dejando las ociosas plumas, subió sobre su famoso caballo
              Rocinante y comenzó a caminar por el antiguo y conocido Campo de
              Montiel.
            </Text>
            <Text style={styles.text}>
              Y era la verdad que por él caminaba; y añadió diciendo: —Dichosa edad y
              siglo dichoso aquel adonde saldrán a luz las famosas hazañas mías,
              dignas de entallarse en bronces, esculpirse en mármoles y pintarse en
              tablas, para memoria en lo futuro. ¡Oh tú, sabio encantador, quienquiera
              que seas, a quien ha de tocar el ser coronista desta peregrina historia!
              Ruégote que no te olvides de mi buen Rocinante, compañero eterno mío en
              todos mis caminos y carreras.
            </Text>
            <Text style={styles.text}>
              Luego volvía diciendo, como si verdaderamente fuera enamorado: —¡Oh
              princesa Dulcinea, señora deste cautivo corazón! Mucho agravio me
              habedes fecho en despedirme y reprocharme con el riguroso afincamiento
              de mandarme no parecer ante la vuestra fermosura. Plégaos, señora, de
              membraros deste vuestro sujeto corazón, que tantas cuitas por vuestro
              amor padece. Con estos iba ensartando otros disparates, todos al modo de
              los que sus libros le habían enseñado, imitando en cuanto podía su
              lenguaje. Con esto caminaba tan despacio, y el sol entraba tan apriesa y
              con tanto ardor, que fuera bastante a derretirle los sesos, si algunos
              tuviera
            </Text>
            <Text style={styles.text}>
              Casi todo aquel día caminó sin acontecerle cosa que de contar fuese, de
              lo cual se desesperaba, porque quisiera topar luego luego con quien
              hacer experiencia del valor de su fuerte brazo. Autores hay que dicen
              que la primera aventura que le avino fue la del Puerto Lápice, otros
              dicen que la de los molinos de viento; pero lo que yo he podido
              averiguar en este caso, y lo que he hallado escrito en los anales de la
              Mancha, es que él anduvo todo aquel día, y, al anochecer, su rocín y él
              se hallaron cansados y muertos de hambre, y que, mirando a todas partes
              por ver si descubriría algún castillo o alguna majada de pastores donde
              recogerse y adonde pudiese remediar su mucha hambre y necesidad, vio, no
              lejos del camino por donde iba, una venta,que fue como si viera una
              estrella que, no a los portales, sino a los alcázares de su redención le
              encaminaba. Diose priesa a caminar, y llegó a ella a tiempo que
              anochecía.
            </Text>
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
              `${pageNumber} / ${totalPages}`
            )} fixed />
          </Page>
      </Document>

      </PDFViewer>

     
    </div>
    );
  }
}

export default App;
