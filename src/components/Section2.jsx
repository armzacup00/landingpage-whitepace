import styled from "styled-components"
import arrow from '../assets/arrowTWS.svg'
import pictsetc2 from '../assets/picture-sect2.jpg'

function Section2() {
  return (
        <InfoSect2>
            <TextSect2>
                <p className="mainText">Project Manag<span>ement</span></p>
                <p>
                Images, videos, PDFs and audio files are supported. 
                Create math expressions and diagrams directly from the app. 
                Take photos with the mobile app and save them to a note.
                </p>
                <button>
                Get Started <span><img src={arrow} alt="arrow" /></span>
                </button>
            </TextSect2>
            <ImgSect2>
            <img src={pictsetc2} alt="pict2" />
            </ImgSect2>
        </InfoSect2>
  )
}


const InfoSect2 = styled.div `
display: flex;
justify-content: space-between;
margin: 5rem 0;
text-align: center;
@media screen and (max-width: 1152px  ) {
    display: flex;
    flex-direction: column;
  }
`
const TextSect2 = styled.div `
text-align: start;
width: 50%;
    align-self: center;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    .mainText{
        font-weight: bold;
       font-size: 60px;
       span{
        font-size: 60px;
        border-bottom: 10px #FFE492 solid;
       }
    }
    p{
        margin: 1rem 0;
    }
    button{
        cursor: pointer;
        display: flex;
        color: #fff;
        border-radius: 5px;
        background-color: #4f9cf9;
        border: none;
        padding: 1rem;
        width: 20%;
        span{
            margin-left: 1rem;
            display: flex;
            align-self: center;
        }
        &:hover{
            background-color: #16355b;
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
    }
  }
  @media screen and (max-width:1152px ){
    align-items: center;
    width: 90%;
    text-align: center;
    button{
        justify-content: center;
        width: 30%;
    }
}
`
const ImgSect2 = styled.div`
  img {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    img {
        width: 80%;
    }
  }
`

export default Section2