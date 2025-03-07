import React, { Component } from "react"; 
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class CreateRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RoomNo:"",
      Guest: "",
      Hstatus: "",
      RStatus: "",
      RType: "",
      RClass: "",
      Price: "",
      redirect: false,
      errorMessage: "",
    };
  }
    handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:8000/api/posts/save", this.state);
        if (response.data.success) {
          alert("Room Added Successfully!");
          this.setState({ redirect: true });
        }
      } catch (error) {
        this.setState({ errorMessage: error.response?.data?.message || "Error saving room." });
      }
    };
    
  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }

    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Add a New Room</h1>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label>Room-No</label>
            <input
              type="number"
              className="form-control"
              name="RoomNo"
              value={this.state.RoomNo}
              onChange={this.handleInputChange}
              required
            />
          </div><br/>
          
          <div className="form-group">
            <label>Guest</label>
            <input
              type="text"
              className="form-control"
              name="Guest"
              value={this.state.Guest}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <br />

          <div className="form-group">
            <label>Housekeeping Status</label>
            <select
              name="Hstatus"
              className="form-control"
              value={this.state.Hstatus}
              onChange={this.handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Select Housekeeping Status
              </option>
              <option value="Clean">Clean</option>
              <option value="Dirty">Dirty</option>
            </select>
          </div>
          <br />

          <div className="form-group">
            <label>Room Status</label>
            <select
              name="RStatus"
              className="form-control"
              value={this.state.RStatus}
              onChange={this.handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Select Room Status
              </option>
              <option value="Booked">Booked</option>
              <option value="Vacant">Vacant</option>
              <option value="Occupied">Occupied</option>
              <option value="Out of Service">Out Of Service</option>
            </select>
          </div>
          <br />

          <div className="form-group">
            <label>Room Type</label>
            <select
              name="RType"
              className="form-control"
              value={this.state.RType}
              onChange={this.handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Select Room Type
              </option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
            </select>
          </div>
          <br />

          <div className="form-group">
            <label>Room Class</label>
            <select
              name="RClass"
              className="form-control"
              value={this.state.RClass}
              onChange={this.handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Select Room Class
              </option>
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
            </select>
          </div>
          <br />

          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              name="Price"
              value={this.state.Price}
              onChange={this.handleInputChange}
              required
 /> </div> <br /> 

          {this.state.errorMessage && <p className="text-danger">{this.state.errorMessage}</p>}
          <button className="btn btn-success" type="submit">
Save</button></form></div> 
        
    );}}