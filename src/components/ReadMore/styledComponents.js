import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 35px;
  margin-bottom: 35px;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 95%;
    margin-top: 65px;
    margin-bottom: 65px;
  }
`

export const Heading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 25px;
  line-height: 1.5;
  font-weight: 500;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const Paragraph = styled.p`
  color: #334155;
  font-family: 'Roboto';
  text-align: center;
  font-size: 15px;
  margin-top: 14px;
  margin-bottom: 14px;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const Image = styled.img`
  width: 100%;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`

export const Text = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 18px;
  margin-bottom: 10px;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`

export const Button = styled.button`
  color: #ffffff;
  background-color: #1f81ff;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 1.3;
  font-weight: 500;
  border-radius: 8px;
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
    align-self: center;
  }
`
