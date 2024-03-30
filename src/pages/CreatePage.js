import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBitbucket } from "react-icons/fa";
import TableHead from "../components/TableHead.js";

export const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState(""); 
  const [category, setCategory] = useState("Other");
  const [achieved, setAchieved] = useState(false);
  const [priority, setPriority] = useState(1);

  const navigate = useNavigate();

  const addBucketList = async () => {
    if (!title) {
      alert('Please fill in the title of the bucket list item.');
      return; 
    }
    if (!description) {
      alert('Please fill in the description of the bucket list item.');
      return; 
    }
    if (!targetDate) {
      alert('Please fill in the target date.');
      return; 
    }
    
    const newBucketList = {
      title,
      description,
      targetDate: new Date(targetDate), // Convert to Date object
      category,
      achieved,
      priority,
    };

    const response = await fetch("/.netlify/functions/create-bucketlist", {
      method: "POST",
      body: JSON.stringify(newBucketList),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 201) {
      alert(`Bucket list item added successfully.`);
    } else {
      alert(
        `Failed to add bucket list item. Check to make sure all fields have been filled. Status Code = ${response.status}`
      );
    }
    navigate("/bucketlistlog");
  };

  return (
    <>
      <h2>
        <i>
          <FaBitbucket />
        </i>
        Log a Bucket List.
      </h2>
      <article>
        <p>Add any bucket list ideas you can think of.</p>

        <table id="logTable">
          <caption>Add a bucket list item to the log.</caption>
          <TableHead />
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>
                <label htmlFor="title" className="required">
                  <input
                    type="text"
                    placeholder="Title of the bucket list item"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    id="title"
                    required
                  />
                </label>
              </td>

              <td>
                <label htmlFor="description" className="required">
                  <textarea
                    value={description}
                    placeholder="Description of the bucket list item"
                    onChange={(e) => setDescription(e.target.value)}
                    id="description"
                    required
                  />
                </label>
              </td>

              <td>
                <label htmlFor="targetDate" className="required">
                  <input
                    type="date"
                    placeholder="Target date of the bucket list"
                    value={targetDate}
                    onChange={(e) => setTargetDate(e.target.value)}
                    id="targetDate"
                    required
                  />
                </label>
              </td>

              <td>
                <label htmlFor="category">
                  <select
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    id="category"
                  >
                    <option value="Personal Growth">Personal Growth</option>
                    <option value="Health">Health</option>
                    <option value="Career">Career</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </td>

              <td>
                <label htmlFor="achieved">
                  <input
                    type="checkbox"
                    checked={achieved}
                    onChange={(e) => setAchieved(e.target.checked)}
                    id="achieved"
                  />
                </label>
              </td>

              <td>
                <label htmlFor="priority">
                  <input
                    type="number"
                    value={priority}
                    placeholder="Priority of the bucket list item"
                    onChange={(e) => setPriority(e.target.value)}
                    id="priority"
                    min={1}
                    max={3}
                  />
                </label>
              </td>

              <td>
                <button type="button" onClick={addBucketList}>
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
};

export default CreatePage;
