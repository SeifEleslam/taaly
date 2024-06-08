import React from "react";
import CircularProgressBar from "./progressbar";

export default function CustomTable({
  cols,
  values,
}: {
  cols: { title: string; key: string; type?: string | null }[];
  values: { [key: string]: any }[];
}) {
  return (
    <div className="overflow-hidden">
      <table className="min-w-full text-left text-sm font-light text-surface ">
        <thead className="border-b border-neutral-200 font-medium ">
          <tr>
            {cols.map((col) => (
              <th scope="col" key={col.title} className="px-6 py-4">
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {values.map((value, i) => (
            <tr
              key={i}
              className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100"
            >
              {cols.map((col) => {
                if (col.type === "progress")
                  return (
                    <CircularProgressBar
                      key={col.key}
                      radius={20}
                      progress={value[col.key] / 100}
                      center={value[col.key]}
                      colors={{ primary: "#000" }}
                      sizes={{ stroke: 2, font: 15 }}
                    />
                  );
                return (
                  <td key={col.key} className="whitespace-nowrap px-6 py-4">
                    {value[col.key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
