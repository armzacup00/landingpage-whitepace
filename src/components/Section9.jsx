import styled from "styled-components";
import star from "../assets/star-2.svg"
import avatar01 from '../assets/Avater01.png'
import avatar02 from '../assets/Avater02.png'
import avatar03 from '../assets/Avater03.png'

function Section9() {
  return (
    <InfoSect9>
      <p className="sect9Header">
        See what our <span>trusted</span> users Say
      </p>
      <TableUserComment>
        <Table>
          <img src={avatar01} alt="avatar01" />
          <p>
            “If you haven’t tried whitepace yet, you need to give it a shot for
            your next event. It’s so easy and intuitive to get a new event setup
            and if you need any help their customer service is seriously
            amazing.”
          </p>
          <div className="name-star">
            <div className="name">
              <p>Jessie Owner</p>
              <p>Founder, XYZ Company</p>
            </div>
            <div className="star">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
            </div>
          </div>
        </Table>
        <Table>
        <img src={avatar02} alt="avatar02" />
          <p>
            “If you haven’t tried whitepace yet, you need to give it a shot for
            your next event. It’s so easy and intuitive to get a new event setup
            and if you need any help their customer service is seriously
            amazing.”
          </p>
          <div className="name-star">
            <div className="name">
              <p>Jessie Owner</p>
              <p>Founder, XYZ Company</p>
            </div>
            <div className="star">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
            </div>
          </div>
        </Table>
        <Table>
        <img src={avatar03} alt="avatar03" />
          <p>
            “If you haven’t tried whitepace yet, you need to give it a shot for
            your next event. It’s so easy and intuitive to get a new event setup
            and if you need any help their customer service is seriously
            amazing.”
          </p>
          <div className="name-star">
            <div className="name">
              <p>Jessie Owner</p>
              <p>Founder, XYZ Company</p>
            </div>
            <div className="star">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
            </div>
          </div>
        </Table>
      </TableUserComment>
    </InfoSect9>
  );
}

const InfoSect9 = styled.div`
margin: 5rem 0;
  .sect9Header {
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    span {
      border-bottom: 10px solid #ffe492;
      font-size: 60px;
      font-weight: bold;
    }
  }
`;
const TableUserComment = styled.div`
display: flex;
justify-content: space-around;
gap: 1rem;
margin:5rem 0;
@media screen and (max-width:1152px ){
display: flex;
flex-direction: column;
align-items: center;
}
`;

const Table = styled.div`
background-color: #4F9CF9;
transition: 0.5s ease;
&:hover{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.5s ease;
    background-color: #fff;
}
padding: 2rem;
img{
    margin-bottom: 1rem;
    aspect-ratio: 1;
    width: 70px;
}
p{
    margin-bottom: 1rem;
}
.name-star{
    margin-top: 2rem;
    justify-content: space-between;
    display: flex;
}
.name :first-child{
        font-weight: bold;
    }
.name{
    p{
        margin: 0;
    }
}
.star{
    img{
    height: 15px;
    width: 15px;
    }
}
display: flex;
flex-direction: column;
border-radius: 10px;
width: 480px;
height: 480px;
`;

export default Section9;
