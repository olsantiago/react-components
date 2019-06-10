import React, { Component } from 'react'
import PostData from '../data/posts.json'
import './EventsList.css'
import { Link } from "react-router-dom";


class EventsList extends Component {
  render () {
    return (
      <div >
        

        {PostData.map((postDetail, index) => {
         
            return<div>
                <div className="card">
                  <div className="card-header" >
                    <Link>
                      <img src={postDetail.img} alt={postDetail.title} />
                    </Link>
              </div>
              <div className="main">
                <h1>{postDetail.title}</h1>
                <p>{postDetail.date}, {postDetail.time} </p>
                <p>{postDetail.content}</p>
                <p>Starts at {postDetail.fee}</p>
              </div>
          </div>
                </div>
        })}
      </div>
    )
  }
}

export default EventsList