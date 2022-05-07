import React from "react";
import Axios from "axios";

const Upload = () => {
  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
  };

  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          uploadImage(event.target.files);
        }}
      />
    </div>
  );
};

export default Upload;
