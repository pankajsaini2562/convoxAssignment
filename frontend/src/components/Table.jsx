import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
export default function Table() {
  const [contacts, setcontacts] = useState([]);
  const [contact, setcontact] = useState("");
  const getcontacts = async () => {
    try {
      const response = axios.get("http://localhost:5173/api/contact");
      setcontacts(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getcontacts();
  }, []);

  return (
    <div
      className=" flex
    
    "
    >
      table
      <div className="flex-col "></div>
    </div>
  );
}
