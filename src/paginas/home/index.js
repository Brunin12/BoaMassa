import { useState } from 'react';
import './style.css'
import { buscarCardapio, filtrarCardapio, mostrarCardapio } from '../../servico';
import Card from '../../componentes/card';
export default function PaginaHome(){

    const [cardapio, setCardapio] = useState(filtrarCardapio("Entradas"));
    const [texto, setTexto] = useState("");
   


    const buscarCategoria = (categoria) => {
        setCardapio(filtrarCardapio(categoria));
        setTexto("");
    }

    const limparBusca = () => {
        setCardapio(mostrarCardapio());
        setTexto("");
    }

    const buscarItem = (texto) => {
        if(texto.length>=3){
            setTexto(texto);
            setCardapio(buscarCardapio(texto))
        } else if(texto.length<1){
            setTexto(mostrarCardapio);
        }
    }

    return(
        <body className='limita-secao'>
            <section className="banner ">
                <h1>RESTAURANT</h1>
                <p className='dancing'>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados.</p>
            </section>
            <section className="secao-botoes">
                <div className='botoes' >
                    <button autoFocus style={{border: 0}} className='btn-c' onClick={() => buscarCategoria("Entradas")}>
                        <img src="./Assets\entrada.png" alt="Entradas"/>
                        <p>Entradas</p>
                    </button>

                    <button className='btn-c' onClick={() => buscarCategoria("Massas")}>
                        <img src="./Assets\massa.png" alt="Massas"/>
                        <p>Massas</p>
                    </button>

                    <button className='btn-c' onClick={() => buscarCategoria("Carnes")}>
                        <img src="./Assets\carne.png" alt="carnes"/>
                        <p>Carnes</p>
                    </button>

                    <button className='btn-c' onClick={() => buscarCategoria("Bebidas")}>
                        <img src="./Assets\bebidas.png" alt="bebidas"/>
                        <p>Bebidas</p>
                    </button>

                    <button className='btn-c' onClick={() => buscarCategoria("Saladas")}>
                        <img src="./Assets\salada.png" alt="saladas"/>
                        <p>Saladas</p>
                    </button>

                    <button className='btn-c' onClick={() => buscarCategoria("Sobremesas")}>
                        <img src="./Assets\sobremesa.png" alt="sobremesas"/>
                        <p>Sobremesas</p>
                    </button>
                </div>
                <input className='pesquisa' type="text" placeholder="Pesquise aqui um dos pratos do nosso cardápio" onChange={(event) => buscarItem(event.target.value)}></input>
            </section>

            <section className="cardapio">
                <h2 className='dancing'>Cardápio</h2>

                <div className="carregar">
                    {
                        cardapio.map((item, index) => {
                            return(<Card key={index} nome={item.nome} categoria={item.categoria} preco={item.preco} desc={item.descricao} fundo={item.imagem}/>);
                                
                            
                        })
                    }
                </div>
            </section>

            
        </body>
    );
}