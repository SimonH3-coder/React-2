import style from "./footercomponent.module.scss";

// Der kan ikke returneres mere end et element uden at det pakkes ind i et top level element
// Her kan man bruge et React Fragment - <></>
export const FooterComponent = () => {
  return <footer className={style.foot}>Valgmuligheder i bunden</footer>;
};
