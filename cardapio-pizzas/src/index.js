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
 return (
  <main className="menu">
    <h2>Nosso menu</h2>

    <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />

          //podemos usar assim tbm
          // <li className="pizza">
          // <img src={pizza.photoName} alt={pizza.name} />
          // <div>
          //   <h3>{pizza.name}</h3>
          //   <p>{pizza.ingredients}</p>
          //   <span>{pizza.price}</span>
          // </div>
          // </li>
        ))}
    </ul>
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
  const openHour = 9;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
    
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
          Nos estamos abertos até {closeHour}:00
          </p>
          <button className="btn">Order</button>
        </div>
        
      )}
    </footer>
  )
}
 
function Pizza(props){
  console.log(props)
    return (
        <li className="pizza">
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
              <h3>{props.pizzaObj.name}</h3>
              <p>{props.pizzaObj.ingredients}</p>
              <span>{props.pizzaObj.price}</span>
            </div>
        </li>
    );
} 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>

)