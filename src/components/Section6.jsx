import styled from "styled-components";
import arrow from "../assets/arrowTWS.svg";
import pictsetc6 from "../assets/picture-sect6.jpg";

function Section6() {
  return (
    <InfoSect6>
      <TextSect6>
        <p className="mainText">
          100%<span>your data</span>
        </p>
        <p>
          The app is open source and your notes are saved to an open format, so
          you ll always have access to them. Uses End-To-End Encryption (E2EE)
          to secure your notes and ensure no-one but yourself can access them.
        </p>
        <button>
        Read more{" "}
          <span>
            <img src={arrow} alt="arrow" />
          </span>
        </button>
      </TextSect6>
      <ImgSect6>
        <img src={pictsetc6} alt="pict6" />
      </ImgSect6>
    </InfoSect6>
  );
}

const InfoSect6 = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem 0;
  text-align: center;
  @media screen and (max-width: 1152px) {
    display: flex;
    flex-direction: column;
  }
`;
const TextSect6 = styled.div`
  text-align: start;
  width: 50%;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin: 2rem;
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
      justify-content: center;
      width: 30%;
    }
  }
`;
const ImgSect6 = styled.div`
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

export default Section6;
