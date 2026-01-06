import style from "./headercomponent.module.scss";

// Der kan ikke returneres mere end et element uden at det pakkes ind i et top level element
// Her kan man bruge et React Fragment - <></>
export const HeaderComponent = () => {
  return <header className={style.head}>Hej</header>;
};
