import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class Newsitem extends Component {
    
  render() {
    let {title,description,imageUrl,newsUrl,author,date}=this.props;
    return (
      <div className='my-3'>
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {date}</small></p>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
