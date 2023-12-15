import { produtos } from "../data/data-produtos"


export const mostrarCardapio =() => {
    return produtos;
}

export const buscarCardapio = (texto) => {
    return produtos.filter((item) => 
        item.nome.toLowerCase().includes(texto.toLowerCase()) ||
        item.categoria.toLowerCase().includes(texto.toLowerCase())
    )
}

export const filtrarCardapio = (categoria) => {
    return produtos.filter((item) => item.categoria === categoria)
}