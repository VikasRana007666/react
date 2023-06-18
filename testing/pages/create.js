import axios from "axios";

import React, { useRef, useState } from "react";

export default function Create() {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", titleRef.current.value);
    formData.append("image", imageRef.current.files[0]);

    const res = await axios.post(
      "http://localhost:8000/api/next/post/add",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const data = await res.data;
    console.log(data);
  }

  //   skfjlkajfl

  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div className="container">
        <form encType="multipart/form-data" method="post">
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              ref={titleRef}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              type="file"
              name="image"
              className="form-control"
              ref={imageRef}
              accept="image/*"
            />
          </div>
          <button onClick={handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}
