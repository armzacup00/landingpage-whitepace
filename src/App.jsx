import styled from "styled-components";
import NavBar from "./components/NavBar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8wEX from "./components/Section8wEX";
import Section9 from "./components/Section9";
import arrow from "./assets/arrowTWS.svg"
import logo from "./assets/logo-W.png";
import littleArrow from './assets/Arrow.png'
import facebook from './assets/Facebook.png'
import twitter from './assets/Twitter.png'
import linkedin from './assets/Linkedin.png'
import language from './assets/language-icon.png'
import { useState } from "react";

function App() {
  const [footerlang , setFooterlang] = useState(false)
  const FooterlangHandle =()=> setFooterlang(!footerlang)
  const [ lang , setLang] = useState('English')

  return (
    <div>
      <Main>
        <NavBar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section9 />
      </Main>
      <Footer>
        <Fr1>
          <LogoDesC>
            <img src={logo} alt="logo" />
            <p>
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </LogoDesC>
          <UlFr>
            <LiFr><a href="#">Product</a></LiFr>
            <LiFr><a href="#">Overview</a></LiFr>
            <LiFr><a href="#">Pricing</a></LiFr>
            <LiFr><a href="#">Customer stories</a></LiFr>
          </UlFr>

          <UlFr>
            <LiFr><a href="#">Resources</a></LiFr>
            <LiFr><a href="#">Blog</a></LiFr>
            <LiFr><a href="#">Guides & tutorials</a></LiFr>
            <LiFr><a href="#">Help center</a></LiFr>
          </UlFr>

          <UlFr>
            <LiFr><a href="#">Company</a></LiFr>
            <LiFr><a href="#">About us</a></LiFr>
            <LiFr><a href="#">Careers</a></LiFr>
            <LiFr><a href="#">Media kit</a></LiFr>
          </UlFr>

          <FooterButton>
            <p>Try It Today</p>
            <p>
              Get started for free.
              Add your whole team as your needs grow.</p>
            <button>
              Start today <span><img src={arrow} alt="arrow" /></span></button>  
          </FooterButton>
        </Fr1>          
        <hr style={{
          border:"1px solid #2E4E73",
          margin:"1rem 0"
      }}/>
        <Fr2>

          <button onClick={FooterlangHandle}>
            <span>
              <img src={language} alt="lang" />
              </span> {lang} <span>
                <img src={littleArrow} alt="littleArrow" />
            </span>
          </button>
          <a href="#">Terms & privacy</a>
          <a href="#">Security</a>
          <a href="#">Status</a>
          <p>©2021 Whitepace LLC.</p>
          <FooterIcon>
            <a href="#"><img src={facebook} alt="facebook" /></a>
            <a href="#"><img src={twitter} alt="twitter" /></a>
            <a href="#"><img src={linkedin} alt="linkedin" /></a>
          </FooterIcon>
        </Fr2>
      </Footer>
    </div>
  );
}

const Main = styled.div`
  @media screen and (max-width: 320px) {
    max-width: 300px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    max-width: 700px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1152px) {
    max-width: 1100px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1400px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1920px) {
    max-width: 1800px;
    margin: 0 auto;
  }
`;
const Footer = styled.footer`
background-color: #043873;
`;
const Fr1 = styled.div`
padding: 5rem 0;
color: #fff;
justify-content: space-between;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
gap: 6rem;

@media screen and (min-width: 1920px) {
    max-width: 1800px;
    margin: 0 auto;
  }
  @media screen and (max-width: 1152px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;
const LogoDesC = styled.div`
`;
const UlFr = styled.ul`
  
`
const LiFr = styled.li`
  list-style: none;
  margin: 1rem 0;
  a{
    color: #fff;
    text-decoration: none;
  }
  &:hover{
    text-decoration: underline;
  }
`
const FooterButton = styled.div `

p{
  margin: 1rem 0;
  &:first-child{
    font-weight: bold;
    font-size: 28px;
  }
}
button{
  color: #fff;
  background-color: #4F9CF9;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  &:hover{
    border: 2px solid #4F9CF9;
    background-color: #043873;
  }
}
`
const Fr2 = styled.div `
  display: flex;
  justify-content: space-between;
  button{
    color: #fff;
    gap: 10px;
    justify-content: space-around;
    display: flex;
    background-color: transparent;
    border: none;
  }
  a{
    text-decoration: none;
    color: #fff;
  }
  @media screen and (max-width: 1152px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  @media screen and (max-width: 320px) {
    max-width: 300px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    max-width: 700px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1152px) {
    max-width: 1100px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1400px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1920px) {
    max-width: 1800px;
    margin: 0 auto;
  }
`
const LangColumn = styled.div `
background-color: #4F9CF9;
padding: 1rem;
display: flex;
flex-direction: column;
position: relative;
top: -170px; 
right: 1400px;
border-radius: 10px;
gap: 1rem;
opacity: 1;
`

const FooterIcon = styled.div `
display: flex;
justify-content: space-between;
gap: 2rem;
`

export default App;
