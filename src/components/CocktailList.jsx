import styled from "styled-components";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h3 style={{ textAlign: "center" }}>no matching cocktails found...</h3>
    );
  }
  const formattedDrinks = drinks.map((item) => {
    const { strDrink, strAlcoholic, strDrinkThumb, strGlass, idDrink } = item;
    return {
      name: strDrink,
      info: strAlcoholic,
      image: strDrinkThumb,
      glass: strGlass,
      id: idDrink,
    };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

export default CocktailList;
