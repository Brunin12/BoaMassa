import { products } from "../data/data-products"


export const showMenu =() => {
    return products;
}

export const getMenu = (label) => {
    return products.filter((item) => 
        item.name.toLowerCase().includes(label.toLowerCase()) ||
        item.category.toLowerCase().includes(label.toLowerCase())
    )
}

export const filterMenu = (category) => {
    return products.filter((item) => item.category === category)
}