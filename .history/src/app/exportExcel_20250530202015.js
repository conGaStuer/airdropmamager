import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ExportExcel = ({ data, filename = "airdrop_list.xlxs" }) => {
  const exportFile = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Airdrops");
    const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([wbout], {
      type: "application/octet-stream",
    });
    saveAs(blob, filename);
  };
  return (
    <button
      onClick={exportFile}
      className="btn-export ml-2 border px-2 py-1 rounded hover:bg-violet-500 hover:text-white transition"
    >
      Export Excel
    </button>
  );
};
export default ExportExcel;
