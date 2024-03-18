import React from 'react'


const NewsItem = (props) => {


  let { title, description, imageUrl, newsUrl, author, Date } = props;

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={!imageUrl ? "https://cdn3.f-cdn.com//files/download/209436748/s%20Logo.png?fit=crop" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">by {author}</small></p>
          <p className="card-text"><small className="text-muted"> {Date}</small></p>
          <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    </>
  )
}


export default NewsItem