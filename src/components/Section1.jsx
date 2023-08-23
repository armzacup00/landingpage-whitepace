import styled from "styled-components";
import arrow from "../assets/arrowTWS.svg";
import pictsetc1 from "../assets/picture-sect1.jpg";

function Section1() {
  return (
    <InfoSect1>
      <TextSect1>
        <h1>Get More Done with whitepace</h1>
        <p>
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks
        </p>
        <button>
          Try Whitepace free{" "}
          <span>
            <img src={arrow} alt="arrow" />
          </span>
        </button>
      </TextSect1>
      <ImgSect1>
        <img src={pictsetc1} alt="pict1" />
      </ImgSect1>
    </InfoSect1>
  );
}

const InfoSect1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem 0;
  color: #4f9cf9;
  @media screen and (max-width: 1152px  ) {
    display: flex;
    flex-direction: column;
  }
`;
const TextSect1 = styled.div`
  width: 60%;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  h1 {
    font-size: 60px;
  }
  p {
    margin: 2rem 0;
  }
  button {
    cursor: pointer;
    display: flex;
    color: #fff;
    border-radius: 5px;
    background-color: #4f9cf9;
    border: none;
    padding: 1rem;
    width: 30%;
    span {
      margin-left: 1rem;
      display: flex;
      align-self: center;
    }
    &:hover {
      background-color: #16355b;
    }
  }
  @media screen and (max-width: 1440px) {
    button {
      width: 40%;
    }
  }
  @media screen and (max-width:1152px ){
    align-items: center;
    width: 90%;
    text-align: center;
    button{
        justify-content: center;
        width: 50%;
    }
}
  @media screen and (max-width: 768px) {
    align-items: center;
    width: 90%;
    text-align: center;
    h1{
        margin: 0 1rem;
    }
    button {
        justify-content: center;
      width: 70%;
    }
  }
`;
const ImgSect1 = styled.div`
  img {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    img {
        width: 80%;
    }
  }
`;

export default Section1;
