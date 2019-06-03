import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const CardDiv = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`
const Headline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`

const Author = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`

const ImgCon = styled.div`
  display:flex;
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 100px;
  width: 100%;

`

const imgStyle = {
  width: '100px',
  alignSelf: 'center',
  alignContent: 'center'
}

const AuthorSpan = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`


const Card = props => {
  return (
    <CardDiv>
      <Headline>{props.card.headline}</Headline>
      <Author>
        <ImgCon>
          <img style={imgStyle} src={props.card.img} />
        </ImgCon>
        <AuthorSpan>By {props.card.author}</AuthorSpan>
      </Author>
    </CardDiv>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
};

export default Card;
