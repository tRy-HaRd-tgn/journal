// components/Itog.js
import "./styles.css";
import React, { useState } from "react";

const Itog = () => {
  // Захардкоженные данные
  const discips = [
    {
      disciplina_name: "Математика",
      r1: 85,
      komment1: "",
      r2: 90,
      komment2: "",
      r: 88,
      ekzamen: 92,
      ap: "",
      itog: 90,
    },
  ];

  const [openRows, setOpenRows] = useState<{ [key: number]: boolean }>({});

  const toggleRow = (idx: number) => {
    setOpenRows((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div>
      <table id="StudentTable" className="journal-table">
        <thead>
          <tr>
            <th>Дисциплина</th>
            <th>R1</th>
            <th>R2</th>
            <th>Рейтинг</th>
            <th>Экзамен</th>
            <th>Апеляция</th>
            <th>Общий балл</th>
          </tr>
        </thead>
        <tbody>
          {discips.map((dis, idx) => (
            <React.Fragment key={idx}>
              <tr
                className="discipline-row"
                onClick={() => toggleRow(idx)}
                style={{ cursor: "pointer" }}
              >
                <td data-label="Дисциплина" style={{ position: "relative" }}>
                  {dis.disciplina_name}
                  <span
                    className="mobile-arrow"
                    style={{
                      position: "absolute",
                      right: 12,
                      top: "50%",
                      transform: `translateY(-50%) ${
                        openRows[idx] ? "rotate(90deg)" : "rotate(0deg)"
                      }`,
                      transition: "transform 0.2s",
                      verticalAlign: "middle",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ display: "block" }}
                    >
                      <path
                        d="M5 6L8 9L11 6"
                        stroke="#888"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </td>
                <td data-label="R1" className="mobile-hide">
                  {dis.r1}
                  {dis.komment1 && <br />}
                  {dis.komment1 && `Комментарий: ${dis.komment1}`}
                </td>
                <td data-label="R2" className="mobile-hide">
                  {dis.r2}
                  {dis.komment2 && <br />}
                  {dis.komment2 && `Комментарий: ${dis.komment2}`}
                </td>
                <td data-label="Рейтинг" className="mobile-hide">
                  {dis.r}
                </td>
                <td data-label="Экзамен" className="mobile-hide">
                  {dis.ekzamen || ""}
                </td>
                <td data-label="Апеляция" className="mobile-hide">
                  {dis.ap || ""}
                </td>
                <td data-label="Общий балл" className="mobile-hide">
                  {dis.itog}
                </td>
              </tr>
              <tr
                className={`mobile-row-details${openRows[idx] ? " open" : ""}`}
                style={{ display: openRows[idx] ? "table-row" : "none" }}
              >
                <td colSpan={7} style={{ padding: 0, background: "#f8f9fa" }}>
                  <div className="mobile-details-content">
                    <div>
                      <b>R1:</b> {dis.r1}{" "}
                      {dis.komment1 && <span>Комментарий: {dis.komment1}</span>}
                    </div>
                    <div>
                      <b>R2:</b> {dis.r2}{" "}
                      {dis.komment2 && <span>Комментарий: {dis.komment2}</span>}
                    </div>
                    <div>
                      <b>Рейтинг:</b> {dis.r}
                    </div>
                    <div>
                      <b>Экзамен:</b> {dis.ekzamen || "-"}
                    </div>
                    <div>
                      <b>Апеляция:</b> {dis.ap || "-"}
                    </div>
                    <div>
                      <b>Общий балл:</b> {dis.itog}
                    </div>
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Itog;
