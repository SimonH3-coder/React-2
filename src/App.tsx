import { HeaderComponent } from "./components/header/Headercomponent.tsx";

import "./App.css";
import { MainComponent } from "./components/main/Maincomponent.tsx";
import { FooterComponent } from "./components/footer/Footercomponent.tsx";

function App() {
  return (
    <>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </>
  );
}
export default App;
