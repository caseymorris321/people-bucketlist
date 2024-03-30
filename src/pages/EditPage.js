import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TableHead from "../components/TableHead";
import { FaBitbucket } from "react-icons/fa";

export const EditPage = ({ bucketList }) => {
  const [title, setTitle] = useState(bucketList.title);
  const [description, setDescription] = useState(bucketList.description);
  const [targetDate, setTargetDate] = useState(bucketList.targetDate);
  const [category, setCategory] = useState(bucketList.category);
  const [achieved, setAchieved] = useState(bucketList.achieved);
  const [priority, setPriority] = useState(bucketList.priority);

  const navigate = useNavigate();

  const editBucketList = async () => {
    const response = await fetch(`/.netlify/functions/update-bucketlist?id=${bucketList._id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        description: description,
        targetDate: targetDate,
        category: category,
        achieved: achieved,
        priority: priority,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert(`Bucket list item edited successfully.`);
    } else {
      const errMessage = await response.json();
      alert(
        `Failed to edit bucket list item. Status Code = ${response.status}. Error: ${errMessage.Error}`
      );
    }
    navigate("/bucketlistlog");
  };

  return (
    <>
      <article>
        <h2>
          <i>
            <FaBitbucket />
          </i>
          Edit a Bucket List
        </h2>
        <p>Paragraph about this page.</p>
        <table id="logTable">
          <caption>Edit a bucket list.</caption>
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
                    pattern="\d{2}-\d{2}-\d{2}"
                    id="date"
                    required
                  />
                </label>
              </td>

              <td>
                <label htmlFor="category">
                  <select
                    name="category"
                    // value={category}
                    onChange={(e) => setCategory(e.target.value)}
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
                    placeholder="If the bucket list idea has been achieved"
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
                <button type="wait" onClick={editBucketList}>
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
export default EditPage;
