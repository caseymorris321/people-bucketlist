import React from "react";
import LogRow from "./bucketlistlogRow";
import TableHead from "./TableHead";

function LogTable({ bucketLists, onDelete, onEdit }) {
  return (
    <table id="logTable">
      <caption>Log of bucket list ideas.</caption>
      <TableHead />
      <tbody>
        {bucketLists.map((bucketList, i) => (
          <LogRow
            bucketList={bucketList}
            key={i}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}

export default LogTable;
