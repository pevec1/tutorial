import React from "react";
import ReactDOM from "react-dom";

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
  user = {
    firstName: "Andrei",
    lastName: "Harenkov",
  };
  //   constructor(props) {
  //     super(props);
  //   }
  formatName(user) {
    return user.firstName + " " + user.lastName;
  }

    render() {
    return (
      <div>
        <button onClick={this.handleClick}>{"Структура сайта "}</button>
        {this.state.isToggleOn
          ? "<p>раскрыть</p>":"<p>Главная</p><p>Портфолио</p><p>Мое творчество</p><p>Фотогалерея</p><p>Контакты</p><p></p>" }
        <div class="clocks">
          <h1>Привет, {this.formatName(this.user)}!</h1>
          <h2>Сейчас {new Date().toLocaleString()}</h2>
        </div>
      </div>
    );
  
  
}
}

//ReactDOM.render(<Toggle />, document.getElementById("root"));

//const element = <h1>Привет, мир!</h1>;

//setInterval(handleClick(), 1000)
//ReactDOM.render(element, document.getElementById("root"));

ReactDOM.render(<Toggle />, document.getElementById("root"));
