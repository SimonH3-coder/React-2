<h1>Footer</h1>;

// Der kan ikke returneres mere end et element uden at det pakkes ind i et top level element
// Her kan man bruge et React Fragment - <></>
export const FooterComponent = () => {
  return (
    <>
      <p>Lorem ipsum...</p>
      <p>Lorem ipsum...</p>
    </>
  );
};
