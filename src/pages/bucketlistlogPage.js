import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LogTable from "../components/bucketlistlogTable";

function LogPage({ setBucketList }) {
  // Use the Navigate for redirection
  const navigate = useNavigate();

  // Use state to bring in the data
  const [bucketLists, setBucketLists] = useState([]);



  // Fetch all bucket lists
  const loadBucketLists = async () => {
    try {
      const response = await fetch('/.netlify/functions/retrieve-bucketlists');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const bucketLists = await response.json();
      setBucketLists(bucketLists);
    } catch (error) {
      console.error("Failed to load bucket lists:", error);
    }
  };

  // Update a single bucket list
  const onEditBucketList = async (bucketList) => {
    setBucketList(bucketList);
    navigate("/edit-bucketList");
  };

  // Delete a single bucket list
  const onDeleteBucketList = async (id) => {
    try {
      const response = await fetch(`/.netlify/functions/delete-bucketlist?id=${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      loadBucketLists(); // Reload bucket lists after deletion
    } catch (error) {
      console.error(`Failed to delete bucket list with ID = ${id}:`, error);
    }
  };

  // LOAD all the bucket lists
  useEffect(() => {
    loadBucketLists();
  }, []);

  // DISPLAY the bucket lists
  return (
    <>
      <h2>
        Log of Bucket Lists
      </h2>
      <article>
        <p>
          Click the plus, delete, or edit icons to update the Bucket Lists log.
        </p>

        <LogTable
          bucketLists={bucketLists}
          onDelete={onDeleteBucketList}
          onEdit={onEditBucketList}
        />
      </article>
    </>
  );
}

export default LogPage;
