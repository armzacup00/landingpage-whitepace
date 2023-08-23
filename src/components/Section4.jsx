import styled from "styled-components";
import arrow from "../assets/arrowTWS.svg";
import pictsetc4 from "../assets/picture-sect4.jpg";

function Section4() {
  return (
    <InfoSect4>
      <TextSect4>
        <p className="mainText">
          Customise it to your <span>needs</span>
        </p>
        <p>
          Customise the app with plugins, custom themes and multiple text
          editors (Rich Text or Markdown). Or create your own scripts and
          plugins using the Extension API.
        </p>
        <button>
        Let’s Go{" "}
          <span>
            <img src={arrow} alt="arrow" />
          </span>
        </button>
      </TextSect4>
      <ImgSect4>
        <img src={pictsetc4} alt="pict4" />
      </ImgSect4>
    </InfoSect4>
  );
}

const InfoSect4 = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem 0;
  text-align: center;
  @media screen and (max-width: 1152px) {
    display: flex;
    flex-direction: column;
  }
`;
const TextSect4 = styled.div`
  text-align: start;
  width: 50%;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  .mainText {
    font-weight: bold;
    font-size: 60px;
    span {
      font-size: 60px;
      border-bottom: 10px #ffe492 solid;
    }
  }
  p {
    margin: 1rem 0;
  }
  button {
    cursor: pointer;
    display: flex;
    color: #fff;
    border-radius: 5px;
    background-color: #4f9cf9;
    border: none;
    padding: 1rem;
    width: 20%;
    span {
      margin-left: 1rem;
      display: flex;
      align-self: center;
    }
    &:hover {
      background-color: #16355b;
    }
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    width: 90%;
    text-align: center;
    h1 {
      margin: 0 1rem;
    }
    button {
      justify-content: center;
    }
  }
  @media screen and (max-width: 1152px) {
    align-items: center;
    width: 90%;
    text-align: center;
    button {
    margin: 1rem 0;
      justify-content: center;
      width: 30%;
    }
  }
`;
const ImgSect4 = styled.div`
  img {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    img {
      /* width: 80%; */
    }
  }
`;

export default Section4;
