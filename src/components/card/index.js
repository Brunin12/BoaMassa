import './style.css'

export default function Card(props){
    return(
        <div className="card">
            <div className="background-image" style={{backgroundImage: `url(${(props.image)})`}}></div>
            <div className="cont">
                <div className='cont-center'>
                    <h3>{props.name}</h3>
                    <p className='category'>{props.category}</p>
                    <p>{props.description}</p>
                </div>
                <p className='price'>{`R$ ${props.price}`}</p>
            </div>
        </div>
    );
}