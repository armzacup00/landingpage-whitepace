import styled from 'styled-components'
import apple from '../assets/Apple.png'
import microsoft from '../assets/Microsoft.png'
import slack from '../assets/Slack.png'
import google from '../assets/Google.png'

function Section7() {
  return (
    <InfoSect7>
        <h1>Our <span>sponsors</span></h1>
        <PicSect7>
        <img src={apple} alt="icon" />
        <img src={microsoft} alt="icon" />
        <img src={slack} alt="icon" />
        <img src={google} alt="icon" />
        </PicSect7>
    </InfoSect7>
  )
}
const InfoSect7 = styled.div `
text-align: center;
h1{
    font-size: 60px;
}
span{
    border-bottom:10px solid #FFE492;
    font-size: 60px;
}
`
const PicSect7 = styled.div `
margin: 10rem 0;
    display: flex;
    justify-content: space-around;
    img{
        object-fit: contain;
    }

    @media screen and (max-width: 1152px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    gap: 5rem;
        img{
            width: fit-content;
        }
  }
`
export default Section7