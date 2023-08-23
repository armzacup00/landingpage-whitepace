import styled from "styled-components";
import correct from "../assets/correct-icon.svg";
import correctB from "../assets/correct-icon-black.svg"
// import pictsetc5 from '../assets/picture-sect2.jpg'

function Section5() {
  return (
    <InfoSect5>
      <TextSect5>
        <p className="mainText">
          Choose <span>Your Plan</span>
        </p>
        <p>
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </TextSect5>
      <PriceTableSect5>
        <Table1>
          <h3>Free</h3>
          <h2>$0</h2>
          <p>Capture ideas and find them quickly</p>
          <p>
            <img src={correctB} alt="correctB" />
            Sync unlimited devices
          </p>
          <p>
            <img src={correctB} alt="correctB" />
            10 GB monthly uploads
          </p>
          <p>
            <img src={correctB} alt="correctB" />
            200 MB max. note size
          </p>
          <p>
            <img src={correctB} alt="correctB" />
            Customize Home dashboard and access extra widgets
          </p>
          <p>
            <img src={correctB} alt="correctB" />
            Connect primary Google Calendar account
          </p>
          <p>
            <img src={correctB} alt="correctB" />
            Add due dates, reminders, and notifications to your tasks
          </p>
          <button>
            Get Started
          </button>
        </Table1>

        <Table2>
        <h3>Personal</h3>
          <h2>$11.99</h2>
          <p>Keep home and family on track</p>
          <p>
            <img src={correct} alt="correct" />
            Sync unlimited devices
          </p>
          <p>
            <img src={correct} alt="correct" />
            10 GB monthly uploads
          </p>
          <p>
            <img src={correct} alt="correct" />
            200 MB max. note size
          </p>
          <p>
            <img src={correct} alt="correct" />
            Customize Home dashboard and access extra widgets
          </p>
          <p>
            <img src={correct} alt="correct" />
            Connect primary Google Calendar account
          </p>
          <p>
            <img src={correct} alt="correct" />
            Add due dates, reminders, and notifications to your tasks
          </p>
          <button>
            Get Started
          </button>
        </Table2>

        <Table3>
        <h3>Organization</h3>
          <h2>$49.99</h2>
          <p>Capture ideas and find them quickly</p>
          <p>
            <img src={correctB} alt="correctB" />
            Sync unlimited devices
          </p>
          <p>
            <img src={correctB} alt="correctB" />
            10 GB monthly uploads
          </p>
          <p>
            <img src={correctB} alt="correctB" />
            200 MB max. note size
          </p>
          <p>
            <img src={correctB} alt="correctB" />
            Customize Home dashboard and access extra widgets
          </p>
          <p>
            <img src={correctB} alt="correctB" />
            Connect primary Google Calendar account
          </p>
          <p>
            <img src={correctB} alt="correctB" />
            Add due dates, reminders, and notifications to your tasks
          </p>
          <button>
            Get Started
          </button>
        </Table3>
      </PriceTableSect5>
    </InfoSect5>
  );
}

const InfoSect5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5rem 0;
  text-align: center;
  @media screen and (max-width: 1152px) {
    display: flex;
    flex-direction: column;
  }
`;
const TextSect5 = styled.div`
  text-align: center;
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
      justify-content: center;
      width: 30%;
    }
  }
`;
const PriceTableSect5 = styled.div`
text-align: start;
display: flex;
justify-content: space-between;
align-self: center;
    gap: 1rem;
max-width: 1440px;
@media screen and (max-width:1152px ){
    display: flex;
    flex-direction: column;
    
}
  @media screen and (max-width: 768px) {
  }
`;
const Table1 = styled.div`
display: flex;
flex-direction: column;
border: 1px solid #FFE492;
border-radius: 10px;
max-width: 450px;
height: 660px;
padding: 1rem;
h2{
    font-size: 36px;
}
p{
    margin: 1rem 0;
    img{
    margin-right: 1rem;
}
}
button{
    border-radius: 10px;
    border: 1px solid #FFE492;
    background-color: transparent;
    padding: 1rem;
    width: 150px;
    &:hover{
        background-color: #FFE492;
        color: #fff;
    }
}
`;
const Table2 = styled.div`
display: flex;
align-self: center;
justify-content: center;
flex-direction: column;
border: none;
border-radius: 10px;
max-width: 450px;
height: 700px;
padding: 1rem;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
h2{
    color: #043873;
    font-size: 36px;
}
p{
    color: #043873;
    margin: 1rem 0;
    img{
    /* color: #4F9CF9; */
    margin-right: 1rem;
}
}
button{
    color: #fff;
    border-radius: 10px;
    border: none;
    background-color: #4F9CF9;
    padding: 1rem;
    width: 150px;
    &:hover{
        background-color:  #043873;
    }
}
`;
const Table3 = styled.div`
display: flex;
flex-direction: column;
border: 1px solid #FFE492;
border-radius: 10px;
max-width: 450px;
height: 660px;
padding: 1rem;
h2{
    font-size: 36px;
}
p{
    margin: 1rem 0;
    img{
    margin-right: 1rem;
}
}
button{
    border-radius: 10px;
    border: 1px solid #FFE492;
    background-color: transparent;
    padding: 1rem;
    width: 150px;
    &:hover{
        background-color: #FFE492;
        color: #fff;
    }
}
`;

export default Section5;
