import React, { Component } from "react";
import Photos from "../Components/Photos";
import { connect } from "react-redux";
import { uploadPhotoRequest } from "../actions";

class PhotosContainer extends Component {
  onUploadPhoto = file => {
    this.props.uploadPhotoRequest({ file });
  };
  render() {
    return (
      <div>
        <Photos photo={this.props.photo} onUploadPhoto={this.onUploadPhoto} />
      </div>
    );
  }
}
const mapStateToProps = ({ photo }) => ({ photo });
export default connect(
  mapStateToProps,
  { uploadPhotoRequest }
)(PhotosContainer);
