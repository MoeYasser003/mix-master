import { Link } from "react-router-dom";
import styled from "styled-components";

const CocktailCard = ({ id, name, info, glass, image }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`cocktail/${id}`} className="btn">
          details
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--white);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  transition: var(--transition);

  &:hover {
    box-shadow: var(--shadow-4);
  }

  .img {
    height: 15rem;
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
  }
  .footer {
    padding: 1.5rem;
  }

  h4,
  h5 {
    margin-bottom: 0.5rem;
  }
  h4 {
    font-weight: 700;
  }
  h5 {
    font-weight: 500;
  }

  p {
    color: var(--grey-500);
    margin-bottom: 1rem;
  }
`;
export default CocktailCard;
