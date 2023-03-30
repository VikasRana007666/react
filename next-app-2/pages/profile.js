import axios from "../lib/axiosInstance";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    axios
      .get("/user/profile")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h1>sdfafsdff</h1>
      </div>
    </>
  );
}
