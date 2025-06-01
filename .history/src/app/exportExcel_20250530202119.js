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
      className="pl-2 pr-2 pt-1 pb-1 text-green-500 bg-green-100 border ml-4 border-green-300 rounded-lg mb-2 text-sm"
    >
      Export Excel
    </button>
  );
};
export default ExportExcel;
