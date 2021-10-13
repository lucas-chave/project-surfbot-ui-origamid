import '../css/imageInfor.css'

function Paragraph(props) {
  const { textOne, textTwo, h4 } = props
  return(
    <div className="container-infor">
      <div className="title">{ h4 }</div>
      <div className="text">{ textOne }</div>
      <div className="text">{ textTwo }</div>
    </div>
  )
}

export default Paragraph
