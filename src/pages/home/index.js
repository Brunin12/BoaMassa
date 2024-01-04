import { useState } from "react";
import "./style.css";
import { getMenu, filterMenu } from "../../services";
import Card from "../../components/card";

export default function HomePage() {
  const [Menu, setMenu] = useState(filterMenu("Entradas"));

  const searchByCategory = (category) => {
    setMenu(filterMenu(category));
  };

  const getItem = (label) => {
    if (label.length >= 3) {
      setMenu(getMenu(label));
    } else if (label.length < 1) {
    }
  };

  return (
    <body className="limita-secao">
      <section className="banner ">
        <h1>Boa Massa</h1>
        <p className="dancing">
          De pratos clássicos a criações surpreendentes, nosso cardápio é um
          requinte de sabores refinados.
        </p>
      </section>
      <section className="secao-botoes">
        <div className="buttons">
          <button
            autoFocus
            style={{ border: 0 }}
            className="btn-c"
            onClick={() => searchByCategory("Entradas")}
          >
            <img
              src="./Assets/entrada.png"
              alt="Entradas"
            />

            <p>Entradas</p>
          </button>

          <button className="btn-c" onClick={() => searchByCategory("Massas")}>
            <img src="./Assets/massa.png" alt="Massas" />
            <p>Massas</p>
          </button>

          <button className="btn-c" onClick={() => searchByCategory("Carnes")}>
            <img src="./Assets\carne.png" alt="carnes" />
            <p>Carnes</p>
          </button>

          <button className="btn-c" onClick={() => searchByCategory("Bebidas")}>
            <img src="./Assets/bebidas.png" alt="bebidas" />
            <p>Bebidas</p>
          </button>

          <button className="btn-c" onClick={() => searchByCategory("Saladas")}>
            <img src="./Assets/salada.png" alt="saladas" />
            <p>Saladas</p>
          </button>

          <button
            className="btn-c"
            onClick={() => searchByCategory("Sobremesas")}
          >
            <img src="./Assets\sobremesa.png" alt="sobremesas" />
            <p>Sobremesas</p>
          </button>
        </div>
        <input
          className="search"
          type="label"
          padding={10}
          placeholder="Pesquise aqui...."
          onChange={(event) => getItem(event.target.value)}
        ></input>
      </section>

      <section className="Menu">
        <h2 className="dancing">Cardápio</h2>

        <div className="load">
          {Menu.map((item, index) => {
            console.log(item);
            return (
              <Card
                key={index}
                name={item.name}
                category={item.category}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          })}
        </div>
      </section>
    </body>
  );
}
