
import React from "react";

import Card from 'react-bootstrap/Card';


const ReviewCard = (props) => {
  const { id, title, srcvid, youtube, description } = props;
  return(
<div class="card" style = {{backgroundColor : '#5a6978'}}>
<iframe width="560" height="315" src = {srcvid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description}</p>
    <a href={youtube} class="btn btn-primary">Youtube Channel</a>
  </div>
</div>
  );

}

export default ReviewCard

