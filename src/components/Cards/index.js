import './cards.css'

const Cards = ({image, alt, name, gender, age}) => {
    return (
        <div className="card">
            <div className="card-header">
                <div className='card-fit'>
                    <img src={`http://localhost:3001/${image}`} alt={alt} />
                </div>
            </div>
            <div className="card-footer">
                <h4>{name}</h4>
                <h5>Gender: {gender}</h5>
                <h5>Age: {age}</h5>
            </div>
        </div>)
}


export default Cards