import React from "react";
import { TiDelete, TiEdit } from "react-icons/ti";
import { IoMdCheckmark } from "react-icons/io";
import { CiNoWaitingSign } from "react-icons/ci";

function LogRow({ bucketList, onDelete, onEdit }) {
  return (
    <tr>
      <td>
        <i>
          <TiDelete
            onClick={() => onDelete(bucketList._id)}
            title="Clicking this will delete the row. Are you sure?"
          />
        </i>
      </td>
      <td>
        <i>
          <TiEdit
            onClick={() => onEdit(bucketList)}
            title="Editing will change the contents permanently. Are you sure?"
          />
        </i>
      </td>
      <td title="What is the title of your bucket list idea?">
        {bucketList.title}
      </td>
      <td title="What is the description of your bucket list idea?">
        {bucketList.description}
      </td>
      <td title="When is the target date of your bucket list idea?">
        {bucketList.targetDate.slice(0, 10)}
      </td>
      <td title="What is the category of your bucket list idea?" style={{ textAlign: "center", verticalAlign: "middle" }}>
        {bucketList.category}
      </td>
      <td title="Have you achieved your bucket list idea?" style={{ textAlign: "center", verticalAlign: "middle" }}>
        {bucketList.achieved ? (
          <IoMdCheckmark /> // Display a checkmark icon or any symbol for true
        ) : (
          <CiNoWaitingSign />
        )}
      </td>
      <td title="What is the priority of this bucket list idea? 3 is high, 2 is medium, 1 is high" style={{ textAlign: "center", verticalAlign: "middle" }}>
        {bucketList.priority}
      </td>
    </tr>
  );
}
export default LogRow;
