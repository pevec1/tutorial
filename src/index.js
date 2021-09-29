import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // Эта привязка обязательна для работы `this` в колбэке.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ isToggleOn: !prevState.isToggleOn }));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{"Структура сайта "}</button>
        {this.state.isToggleOn
          ? "<p>раскрыть</p>"
          : "<p>Главная</p><p>Портфолио</p><p>Мое творчество</p><p>Фотогалерея</p><p>Контакты</p><p></p>"}
      </div>
    );
  }
}

class Hello extends React.Component {
  render() {
    return (
      <div className="nav">
        <Container />
      </div>
    );
  }
}

class Container extends React.Component {
 state = {
   open: false
  }
  handleClick = () => {
   this.setState({ open: !this.state.open });
  }
  render () {
   const { open } = this.state;
   return (
     <div className="link">
       <div class="container">
         <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
           <div class="navbar-nav">
             <a class="nav-item nav-link" href="/">
               Главная
             </a>
             <a class="nav-item nav-link" href="/my-work">
               Портфолио
             </a>
             <a class="nav-item nav-link" href="/my-creative">
               Мое творчество
             </a>
             <span class="nav-item nav-link" onClick={this.handleClick}>
               Фотогалерея
             </span>
             <div className={`menu ${open ? "open" : ""}`}>
               <ul>
                 <li>
                   <a class="dropdown-item" href="photoalbum-10">
                     2017 год
                   </a>
                 </li>
                 <li>
                   <a class="dropdown-item" href="photoalbum-8">
                     2016 год
                   </a>
                 </li>
                 <li>
                   <a class="dropdown-item" href="photoalbum-1">
                     2014 год
                   </a>
                 </li>
                 <li>
                   <a class="dropdown-item" href="photoalbum-4">
                     2013 год
                   </a>
                 </li>
               </ul>
             </div>
             <a class="nav-item nav-link" href="/contacts">
               Контакты
             </a>
           </div>
         </nav>
       </div>
     </div>
   );
  }
}

class Clocks2 extends React.Component {
  //  let sert =
  user = {
    firstName: "Andrei",
    lastName: "Harenkov",
  };

  constructor() {
    super();
    this.state = { time: new Date() }; // initialise the state
    var _this = React.Component.call(this) || this;
    return _this;
  }

  formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  componentDidMount() {
    // create the interval once component is mounted
    this.update = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1 * 1000); // every 1 seconds
  }

  componentWillUnmount() {
    // delete the interval just before component is removed
    clearInterval(this.update);
  }

  render() {
  const { time } = this.state; // retrieve the time from state
    return (
      <div class="greetings">
        <h1>Привет, {this.formatName(this.user)}!</h1>
        <h2>Сейчас {time.toLocaleTimeString()}</h2>
        {/* print the string prettily */}
        
      </div>
    );
  }
}

class Modal2 extends React.Component {
  //  let sert =
  user = {
    firstName: "Andrei",
    lastName: "Harenkov",
  };

  constructor() {
    super();
    this.state = { time: new Date() }; // initialise the state
    var _this = React.Component.call(this) || this;
    return _this;
  }

  render() {
  const { time } = this.state; // retrieve the time from state
    return (
      <div>
      <button type="button">открыть окно</button>
      
      <div class="modal">
        <p>Это модальное окно</p>
        {/* print the string prettily */}
        <button class="btn-close" type="button">закрыть окно</button>
      </div></div>
    );
  }
}


//ReactDOM.render(<Toggle />, document.getElementById("root"));

//const element = <h1>Привет, мир!</h1>;

//setInterval(handleClick(), 1000)
//ReactDOM.render(element, document.getElementById("root"));

ReactDOM.render(
  <div>
    <Hello name="World" />
    <Toggle />
    <Clocks2 />
    <Modal2 />
  </div>,
  document.getElementById("root")
);

// Вызываем функцию tick() через секунду
