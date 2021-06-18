import image from '../images/elipse.png'
import '../css/cardList.css'

function CardList() {
  const data = [
    { image: image, distance: '16Km' },
    { image: image, distance: '22Km' },
    { image: image, distance: '14Km' },
  ]
  
  return (
    <div className="container-card">
      {data.map((obj) => (
        <div className="container-card-list" >
          <img src={ obj.image } alt="exaple" />
          <p>{obj.distance} de costa</p>
        </div>
      ))}
    </div>
  )
}

export default CardList
