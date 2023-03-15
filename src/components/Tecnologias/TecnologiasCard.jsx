
import "./TecnologiasCard.css";
const TecnologiasCard = ({ image, name, text, linkDocumentation }) => {
  return (
    <div>
      <div className="card-technologie">
       <div className="image-container">
          <img className="Image large" src={image} />
       </div>
      <div>
        <div className="Text bold">{name}</div>
          <a href={linkDocumentation} target="_blank" className="Text faded">Ver a documentação</a>
          </div>
          <div className="Text">
              {text}
          </div>
      </div>
      </div>

  )
}

export default TecnologiasCard;
