"use client";

import {useState} from "react";
import Input_box from "../../../components/input_text.js";

export default function details() {
    const [Name, setName] = useState("");
  return (
      <>
      <Input_box
        Label = "Name"
        Placeholder= "Name"
        Type= "text"
        Name= "Name"
        Value= {Name}
        setValue={setName}
      />
      </>
    );
  }
  