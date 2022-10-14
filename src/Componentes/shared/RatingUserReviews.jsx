import StarRating from 'react-bootstrap-star-rating';
import { CDBRating, CDBContainer } from 'cdbreact';

import React, { useState, Component } from 'react';
import { MDBContainer, MDBRating } from 'mdbreact';


const RatingUserReviews = () => {

  return (
    <CDBContainer>
      <CDBRating iconRegular style={{color: 'yellow'}}/>
    </CDBContainer>
  );
};


export default RatingUserReviews;
