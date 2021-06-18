import '../css/imageInfor.css'

function ImageS2(props) {
  const { image, alt } = props
  return(
    <div>
      <img src={ image } alt={ alt } />
    </div>
  )
}

export default ImageS2
