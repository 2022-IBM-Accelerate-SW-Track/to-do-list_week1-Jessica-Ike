import React, { Component } from 'react';
import { Button, TextField } from "@mui/material";
  
export default class About extends Component {
  render() {
    return (
      <TextField
        label="Add New Item"
        variant="outlined"
        //onChange={call handleChange here}
        //value={set the content state here}
      />
    <Button
      style={{ marginLeft: "10px" }}
      //onClick={call handleSubmit here}
      variant="contained"
      color="primary"
    >
    Add
    </Button>

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
