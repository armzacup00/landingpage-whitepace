import styled from "styled-components";
import picSect8 from "../assets/picture-sect8.jpg";
import arrow from "../assets/arrowTWS.svg";

function Section8wEX() {
  return (
    <InfoSect8>
      <Container8>
        <PicSect8>
          <img src={picSect8} alt="picture8" />
        </PicSect8>
        <TextSect8>
          <h3>Work with Your Favorite Apps Using whitepace</h3>
          <p>
            Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success.
          </p>
          <button>
            Read more{" "}
            <span>
              <img src={arrow} alt="arrow" />
            </span>
          </button>
        </TextSect8>
      </Container8>
    </InfoSect8>
  );
}

const InfoSect8 = styled.div`
  background-color: #043873;
`;
const Container8 = styled.div`
display: flex;
justify-content: space-between;
@media screen and (max-width:320px){
  max-width: 300px;
  margin: 0 auto;
}
@media screen and (min-width:768px ){
  max-width: 700px;
  margin: 0 auto;
}
@media screen and (min-width:1152px ){
  max-width: 1100px;
  margin: 0 auto;
}
@media screen and (min-width:1440px ){
  max-width: 1400px;
  margin: 0 auto;
}
@media screen and (min-width:1920px ){
  max-width: 1800px;
  margin: 0 auto;
}
`;
const PicSect8 = styled.div`
width: 800px;
padding: 5rem;
`;
const TextSect8 = styled.div`
width: 800px;
padding: 5rem;
h3{
  color: #fff;
  margin: 1rem 0;
  font-size: 60px;
  font-weight: bold;
}
p{
  color: #fff;
  margin: 1rem 0;
}
button{
  cursor: pointer;
  background-color: #4F9CF9;
  border-radius: 5px;
  border: none;
  padding: 1rem;
  &:hover{
    background-color: #16355b;
  }
}
`;

export default Section8wEX;
