import '../css/imageInfor.css'

function Paragraph(props) {
  const { textOne, textTwo, h4 } = props
  return(
    <div className="container-infor">
      <h4>{ h4 }</h4>
      <p>{ textOne }</p>
      <p>{ textTwo }</p>
    </div>
  )
}

export default Paragraph
