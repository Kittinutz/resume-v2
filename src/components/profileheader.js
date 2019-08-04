import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby';
import headerCover from '../images/cover-header.jpg'
import profile from '../images/profile.jpg'
import Typed from 'react-typed';

const Wrapper = styled.div`
 
`
const WrapperBackgroundPresent = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${headerCover});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-clip: content-box;
  background-color:#007AC2;
  display: flex;
  div {
    &.wrapper-bg {
      position: relative;
      color: #000000;
      height:100%;
      top:  100vh;
      /* @media screen and (min-width:700px){
        top: 100vh;
        
      } */
    }
  }
`
const ContainerPicture = styled.div`
  display:flex;
  position: absolute;
  margin: 0 auto;
  margin: 0px auto;
  z-index: 1;
  top: 85vh;
  width: 100%;
  div {
    width:100%;
    margin: 0 auto;
    display:flex;
    &.image-container{
      img {
        width:200px;
        height:200px;
        margin: 0 auto;
        margin-bottom: 0;
        background-color: #fff;
        border-radius: 50%;
        border: 3px solid #fff;
        box-shadow:0px 0px 15px 3px rgba(0,0,0,0.9);
      }
    }
  }
  
`
const ContainerBio = styled.div`
  padding: 140px 0;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only screen and (min-width:760px ){
    flex-direction: row;
  }
 
  div{
    &.bio-header{
      display: flex;
      flex-basis: 50%;
      flex-wrap:wrap;
      justify-content: center;
      align-content: flex-start;
      ul{
        padding: 0 50px;
      }
      h1 {
        &.title {
          &.contect{
            margin:0;
          }
          &.skill{
            margin: 20px 0;
          }
          @media screen and (min-width:300px){
            font-size: 1.5em;
          }
        }
      }
    }
    &.line{
      height:0;
      @media only screen and (min-width:1024px ){
        flex-direction: row;
        flex-basis: 30%;
        margin: 20px 15px 0 15px;
        &.skill{
          flex-basis: 30%;
        }
      }
      border-top:1px solid #e0e0e0;
      width: 82px;
      margin-top: 20px;
      margin: 20px 15px 0 15px;
    }
  }
`
const WrapperBackground = styled.div`
  background-color: rgba(1,1,1,0.3);
  display: flex;
  width:100%;
  justify-content: center;
  align-items: center;
`
const TypeComponent = styled(Typed)`
  input {
    opacity: 1;
    width: 100%;
    box-sizing: border-box;
    font-family: 'Dancing Script', cursive;
    background-color: transparent;
    border: 0;
    color:#ffffff;
    line-height:13;
    /* text-align: center; */
    padding: 0 30px;
    @media screen and (min-width:360px){
      padding: 0 50px;
    }
    @media screen and (min-width:400px){
      text-align: center;
      padding:0;
    }
  
    &:focus{
      cursor:none;
      outline:none;
    }
  }
  font-size: 3em;
`
const ContainerProfile = styled.div`
  display:flex;
  width:100%;
  flex-direction: column;
  a { color: inherit; } 
  &.skill {
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  &.contect {
    height:100%;
    i{
      font-size: 45px;
    }
   
  }
    i {
      flex-basis: 25%;
      font-size: 75px;
      margin: 20px 0;
      text-align: center;
    }
    .icon-img{
      margin: 0;
      height: 75px;
      width: 75px;
    }
  }
  p{
    padding:0 40px;
    word-wrap: break-word;
    text-indent: 40px; 
    &.center{
      text-indent: 0; 
      text-align: center;
    }
  }
  h1{
    &.name {
      text-align: center;
      font-size: 1em;
      width: 100%;
    }
  }
`
const WrapperProfile = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding:0 5%;
  width: 100%;
`
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cover-header.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <WrapperBackgroundPresent >
        <WrapperBackground>
          <TypeComponent
            strings={[
              'I am Developer',
            ]}
            typeSpeed={40}
            attr="placeholder"
            loop={false} >
            <input type="text" disabled />
          </TypeComponent>
        </WrapperBackground>
      </WrapperBackgroundPresent>

      <div className="wrapper-bg">
        <ContainerPicture>
          <div className="image-container">
            <img src={profile} alt="profile" />
          </div>
        </ContainerPicture>
        <ContainerBio>
          <div className="bio-header">
            <div className="line"></div>
            <h1 className="title">Bio</h1>
            <div className="line"></div>
            <ContainerProfile>
              <h1 className="name">Name: Kittinut Pramhan</h1>
              <p>Graduated with a Bachelor Degree in Department of Computer Engineering at the Prince of Songkla University, Phuket Campus.</p>
              <p>My hobbies is playing guitar, watching youtube, running and read medium about teachnology and exconomist</p>
              <p className="center">I love Cat</p>
              <div className="bio-header">
                <div className="line"></div>
                <h1 className="title">Work</h1>
                <div className="line"></div>
              </div>
              <p className="center">Software Engineering - Front-end developer At AppMan Co.,Ltd 2018 - present</p>
              <div className="bio-header">
                <h1 className="title">Experice</h1>
                <ul>
                  <li>Developed hybrid applications with React and Cordova for top insurance companies in Thailand.</li>
                  <li>Created highly customization and reusable React components.</li>
                  <li>Created highly customization and reusable React components.</li>
                  <li>Translated design to code in React.</li>
                  <li>Participated in projects in all stages of the product life cycle .</li>
                  <li>Mentored internship students.</li>
                  <li>Write Testable code.</li>
                  <li>Translated test case from QA team to code for automation test.</li>
                  <li>Write script for automation for Circle Ci.</li>
                  <li>Using Docker to serve web application and run automation test.</li>
                  <li>Create reusable function for automation test.</li>
                </ul>

              </div>
              <div className="bio-header">
                <div className="line"></div>
                <h1 className="title contect">Contect</h1>
                <div className="line"></div>
              </div>
              <ContainerProfile className="skill contect">
                <a href="https://www.facebook.com/Prostars37?ref=bookmarks" target="blank"><i className="fab fa-facebook"></i></a>
                <a href="tel:+66994605162" target="blank"><i className="fas fa-mobile"></i></a>
                <a href="mailto:knightza94@gmail.com" target="blank"><i className="fas fa-inbox"></i></a>
                <a href="https://www.instagram.com/kittinut.t/?hl=en" target="blank"><i className="fab fa-instagram"></i></a>
                <a href="https://medium.com/@kittinutpramhan" target="blank"><i className="fab fa-medium"></i></a>
              </ContainerProfile>
            </ContainerProfile>
          </div>

          <div className="bio-header">
            <div className="line"></div>
            <h1 className="title">Skills</h1>
            <div className="line"></div>
            <div className="bio-header">
              <h1 className="title skill">Expert</h1>
            </div>
            <ContainerProfile className="skill">
              <i className="fab fa-react"></i>
              <i className="fab fa-node-js"></i>
              <i className="fab fa-docker"></i>
              <i className="fab fa-css3-alt"></i>
              <i className="fab fa-html5"></i>
              <i className="fab fa-java"></i>
              <i className="fab fa-git-alt"></i>
              <i className="fab fa-laravel"></i>
              <img className="icon-img" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/217/thumb/cypress.png" alt="cypress" />
            </ContainerProfile>
            <div className="bio-header">
              <h1 className="title skill">Intermediate</h1>
            </div>
            <ContainerProfile className="skill">
              <div>
                <img className="icon-img" src="https://brandfolder.com/circleci/logo/circleci-primary-logo.png" alt="circle-ci" />
              </div>
            </ContainerProfile>
            <div className="bio-header">
              <h1 className="title skill">Interesting</h1>
            </div>
            <ContainerProfile className="skill">
              <div>
                <img className="icon-img" src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/Python_logo-512.png" alt="circle-ci" />
              </div>
            </ContainerProfile>
          </div>
        </ContainerBio>
      </div>
    </Wrapper>
  )
}
export default Header