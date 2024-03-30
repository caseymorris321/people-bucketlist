import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [category, setCategory] = useState("Other");
  const [achieved, setAchieved] = useState(false);
  const [priority, setPriority] = useState(1);

  const navigate = useNavigate();

  const addBucketList = async () => {
    const newBucketList = {
      title,
      description,
      targetDate,
      category,
      achieved,
      priority,
    };

    try {
      const response = await fetch("/.netlify/functions/create-bucketlist", {
        method: "POST",
        body: JSON.stringify(newBucketList),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        alert(`Bucket list item added successfully.`);
        navigate("/bucketlistlog"); // Redirect to bucketlistlog page
      } else {
        alert(
          `Failed to add bucket list item. Check to make sure all fields have been filled. Status Code = ${response.status}`
        );
      }
    } catch (error) {
      console.error("Failed to add bucket list item:", error);
      alert("Failed to add bucket list item. Please try again later.");
    }
  };

  return (
    <>
      <h2>Log a Bucket List</h2>
      <article>
        <p>Add any bucket list ideas you can think of.</p>

        <form>
          <label htmlFor="title">Title of the bucket list item:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            required
          />

          <label htmlFor="targetDate">Target date:</label>
          <input
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            id="targetDate"
            required
          />

          <label htmlFor="category">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="category"
          >
            <option value="Personal Growth">Personal Growth</option>
            <option value="Health">Health</option>
            <option value="Career">Career</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="achieved">Achieved:</label>
          <input
            type="checkbox"
            checked={achieved}
            onChange={(e) => setAchieved(e.target.checked)}
            id="achieved"
          />

          <label htmlFor="priority">Priority:</label>
          <input
            type="number"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            id="priority"
            min={1}
            max={3}
          />

          <button type="button" onClick={addBucketList}>
            Save
          </button>
        </form>
      </article>
    </>
  );
};

export default CreatePage;
