import ImageS2 from './ImageS2'
import image from '../images/Rectangle.png'
import map from '../images/Group.png'
import '../css/imageInfor.css'
import Heading from './Heading'
import CardList from './CardList'
import Paragraph from './Paragraph'
import TextInfor from './TextInfor'

function SectionInfor() {
  const text = (`Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled
                it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled
                it to make a type specimen book.
                it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled
                it to make a type specimen book.
                `)
  return(
    <div className="container-section">
      <div className="container-left">
        <div className="image">
          <ImageS2 image={ image } alt="exaple" />
        </div>
        <div className="image-map">
          <ImageS2 image={ map } alt="example"/>
        </div>
        <TextInfor
          h4="COMO CHEGAR"
          textOne="Carro pela via  Washington Soares Sentido  Aldeota"
          textTwo="Ônibus linhas: 51, 52."
        />
      </div>
      <div className="container-rigth">
        <Heading text="Aulas em uma das melhores praias de Fortaleza."/>
        <CardList />
        <div>
          <Paragraph text={ text } />
        </div>
        <Paragraph text={ text } />
      </div>
    </div>
  ) 
}

export default SectionInfor
