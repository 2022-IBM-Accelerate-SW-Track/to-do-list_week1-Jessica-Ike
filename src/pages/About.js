import React, { Component } from 'react';
  
export default class About extends Component {
  render() {
    return (
       <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
                src=""
              alt="Profile Pic"
             >
          </div>
      </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jessica Ike</div>
              <div className="brief_description">
              My name is Jessica Ike, I am a rising juinor at the University of Houston studying Computer Science.
            </div>
          </div>
        </div>
      </div>
    )
  }
}
