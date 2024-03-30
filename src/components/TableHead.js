import React from "react";
import { Link } from "react-router-dom";
import { TiDocumentAdd } from "react-icons/ti";

function TableHead() {
  return (
    <thead>
      <tr>
        <th title="Clicking the delete icon will quickly remove the row">
          Delete
        </th>
        <th title="Editing will occur on a new screen, which redirects">
          Edit
        </th>
        <th title="What is the title of your bucket list?">Title</th>
        <th title="What is the description of your bucket list?">
          Description
        </th>
        <th title="When do you want to complete your bucket list idea by?">
          Target Date
        </th>
        <th title="What is the category of your bucket list?">Category</th>
        <th title="Have you achieved your bucket list idea?">Achieved</th>
        <th title="What is the priority level of your list idea? 3 is high, 2 is medium, 1 is low">
          Priority
        </th>
        <th>
          <Link to="../add-bucketlist">
            <i>
              <TiDocumentAdd title="Add a bucket list idea" />
            </i>
          </Link>
        </th>
      </tr>
    </thead>
  );
}
export default TableHead;
