import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
import styled from "styled-components";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div className="img-container">
          <img src={img} alt="not found" className="img" />
        </div>
        <h3>Oops!</h3>
        <p>we cant seem to find the page you're looking for</p>
        <Link to="/" className="btn">
          back home
        </Link>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h3>there was an error</h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .img {
    width: 90vw;
    max-width: 600px;
  }
  h3 {
    margin-top: 1.5rem;
    font-size: 2rem;
  }
  p {
    margin-top: 1rem;
    color: var(--grey-900);
    margin-bottom: 1rem;
    font-size: 1.2rem;
    text-transform: capitalize;
  }
`;

export default Error;
