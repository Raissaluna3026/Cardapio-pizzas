import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';


const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "imgs/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "imgs/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "imgs/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "imgs/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "imgs/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "imgs/prosciutto.jpg",
      soldOut: false,
    },
  ];


function App(){
    return (
    <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
    </div>
    );
}

function Header(){
  const style={};

  return (
    <header className="header">
      <h1 style={style}>
        Fast React Pizza Co.
      </h1>;
    </header>
  )  
}

function Menu(){
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;

 return (
  <main className="menu">
    <h2>Nosso menu</h2>

    

    {numPizzas > 0 ? (
      < >
        <p>
          Autentica cozinha italiana. 6 pratos criativos para escolher. Tudo feito no forno de pedra, organic and delicious. 
        </p>
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      </>

      
    ): <p>Ainda estamos trabalhando no cardapio. Por favor, entre em contato posteriormente, obrigada!</p>}

    
    {/* <Pizza 
    name='Pizza Spicani' 
    ingredients='Tomato, mozarella, spinach, and ricotta cheese' 
    photoName='imgs/spinaci.jpg' 
    price={10}/>
    <Pizza name="Pizza Funghi" ingredients='Tomato, mushrooms'price={12} photoName='imgs/funghi.jpg'/>
    <Pizza /> */}
  </main>
 )

}

function Footer(){
  const hour = new Date().getHours()
  const openHour = 8;
  const closeHour = 2;
  const isOpen = (hour >= openHour && hour < 24) || (hour >= 0 && hour < closeHour);
  console.log(isOpen);
    
  if(!isOpen)
    return(
      <p>Nós estamos abertos entre {openHour}:00 e {closeHour}:00</p>
    )

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour}/>
      ) : (
        <p>Nós estamos abertos entre {openHour}:00 e {closeHour}:00</p>
      )}
    </footer>
  )
}
 
function Pizza({ pizzaObj }){
  console.log(pizzaObj)

  //if(pizzaObj.soldOut)return null;
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
              <h3>{pizzaObj.name}</h3>
              <p>{pizzaObj.ingredients}</p>

              {/* {pizzaObj.soldOut ?(
                <span>SOLD OUT</span>
              ) : (
              <span>{pizzaObj.price}</span>
            )} */}

              <span>{pizzaObj.soldOut ? "SOULD OUT" : pizzaObj.price}</span>
            </div>
        </li>
    );
} 

function Order({ closeHour, openHour }){
  return (
    <div className="order">
      <p>
        Nos estamos abertos de {openHour} até {closeHour}:00. Nos visite online
      </p>
      <button className="btn">Order</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>

)