import './style.css'

export default function Card(props){
    return(
        <div className="card">
            <div className="fundo" style={{backgroundImage: `url(${props.fundo})`}}></div>
            <div className="cont">
                <div className='cont-center'>
                    <h3>{props.nome}</h3>
                    <p className='categoria'>{props.categoria}</p>
                    <p>{props.desc}</p>
                </div>
                <p className='preco'>{"R$" + props.preco}</p>
            </div>
        </div>
    );
}