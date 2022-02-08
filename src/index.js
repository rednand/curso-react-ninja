import App from "./app";
import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      {/* é um componente do react hot loader 
      que vai fazer com que tido q esta
  dentro dele possa ser feita 
  atualizacao utilizando hot loader */}
      <App />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  );
};

renderApp(App);

if (module.hot) {
  //serve somente para desenvolvimento
  module.hot.accept("./app", () => {
    //accept é um método e ele recebe o arquivo principal que vai ser atualizado
    const NextApp = require("./app").default;
    renderApp(NextApp);
  });
}
