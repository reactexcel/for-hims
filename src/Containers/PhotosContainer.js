import React, { Component } from "react";
import Photos from "../Components/Photos";
import { connect } from "react-redux";
import { uploadPhotoRequest } from "../actions";

class PhotosContainer extends Component {
  onUploadPhoto = file => {
    this.props.uploadPhotoRequest({ file :file[0]});
  };
  render() {
    return (
      <div>
        <Photos onUploadPhoto={this.onUploadPhoto} />
      </div>
    );
  }
}

export default connect(
  null,
  { uploadPhotoRequest }
)(PhotosContainer);
