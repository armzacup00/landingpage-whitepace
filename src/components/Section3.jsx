import styled from "styled-components";
import arrow from "../assets/arrowTWS.svg";
import pictsetc3 from "../assets/picture-sect3.png";

function Section3() {
  return (
    <InfoSect3>
      <TextSect3>
        <p className="mainText">
          Work <span>together</span>
        </p>
        <p>
          With whitepace, share your notes with your colleagues and collaborate
          on them. You can also publish a note to the internet and share the URL
          with others.
        </p>
        <button>
        Try it now
          <span>
            <img src={arrow} alt="arrow" />
          </span>
        </button>
      </TextSect3>
      <ImgSect3>
        <img src={pictsetc3} alt="pict2" />
      </ImgSect3>
    </InfoSect3>
  );
}

const InfoSect3 = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 5rem 0;
  text-align: center;
  @media screen and (max-width: 1152px) {
    display: flex;
    flex-direction: column;
  }
`;
const TextSect3 = styled.div`
  text-align: start;
  width: 50%;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin: 5rem;
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
    width: 10rem;
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
      width: 50%;
    }
  }
`;
const ImgSect3 = styled.div`
  img {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    img {
      width: 80%;
    }
  }
`;

export default Section3;
