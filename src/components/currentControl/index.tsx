// components/CurControl.js
import "./styles.css";
import { useEffect, useState } from "react";

export const CurrentControl = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Захардкоженные данные
  const data = {
    vzans: [
      { haracter_rup_id: 1, haracter_rup_ru: "Лекция" },
      { haracter_rup_id: 2, haracter_rup_ru: "Практика" },
    ],
    discips: [
      {
        disciplina_name: "Математика",
        rup_id1: 101,
        ssharacter_rup_student_id: 201,
        ssjurnal_poseshaemost_nedeleya_sum: 2,
        ssjurnal_poseshaemost_all_sum: 5,
        disciplina_kod: "MATH101",
      },
    ],
    saves: [
      {
        haracter_rup_id: 1,
        rup_id2: 101,
        sotrudnik_id: 301,
        sotrudnik_fio: "Иванов И.И.",
        ssjurnal_poseshaemost_status: "1",
        ssjurnal_ball: 85,
      },
    ],
  };

  const renderMobileView = () => (
    <div className="vertical-table-container">
      {data.discips.map((dis, idx) => {
        const rowSaves = data.saves.filter((s) => s.rup_id2 === dis.rup_id1);

        return (
          <div key={dis.rup_id1} className="discipline-card">
            <div className="discipline-header">
              <h3>{dis.disciplina_name}</h3>
              <span className="eumo-link">ЭУМО</span>
            </div>

            <div className="discipline-content">
              {data.vzans.map((vz) => {
                const save = rowSaves.find(
                  (s) => s.haracter_rup_id === vz.haracter_rup_id
                );
                const isMissed =
                  save && save.ssjurnal_poseshaemost_status !== "0";

                return (
                  <div
                    key={`${vz.haracter_rup_id}-${dis.rup_id1}`}
                    className={`type-block ${isMissed ? "alert-cell" : ""} ${
                      !save ? "empty-cell" : ""
                    }`}
                  >
                    <h4>{vz.haracter_rup_ru}</h4>
                    {save ? (
                      <>
                        <p className="teacher-name">{save.sotrudnik_fio}</p>
                        <p className="score">
                          Балл:{" "}
                          <span className="score-value">
                            {save.ssjurnal_ball}
                          </span>
                        </p>
                      </>
                    ) : (
                      <p className="no-data">Нет данных</p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="discipline-footer">
              <div className="missed-info">
                <p>
                  Пропуски за неделю: {dis.ssjurnal_poseshaemost_nedeleya_sum}
                </p>
                <p>Всего пропусков: {dis.ssjurnal_poseshaemost_all_sum}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderDesktopView = () => (
    <div>
      <table id="StudentTable" className="journal-table">
        <thead>
          <tr>
            <th rowSpan={2}>#</th>
            <th rowSpan={2}>Дисциплина</th>
            <th rowSpan={2}>ЭУМО</th>
            {data.vzans.map((vz) => (
              <th key={vz.haracter_rup_id} rowSpan={2}>
                {vz.haracter_rup_ru}
              </th>
            ))}
            <th colSpan={2}>Количество пропусков</th>
          </tr>
          <tr>
            <th>за неделю</th>
            <th>всего</th>
          </tr>
        </thead>
        <tbody>
          {data.discips.map((dis, idx) => {
            const rowSaves = data.saves.filter(
              (s) => s.rup_id2 === dis.rup_id1
            );

            return (
              <>
                <tr
                  key={`${dis.rup_id1}-1`}
                  style={{
                    backgroundColor: dis.disciplina_kod === "777" ? "#F99" : "",
                  }}
                >
                  <td rowSpan={2}>{idx + 1}</td>
                  <td rowSpan={2}>{dis.disciplina_name}</td>
                  <td rowSpan={2}>
                    <span className="eumo-link">ЭУМО</span>
                  </td>

                  {data.vzans.map((vz) => {
                    const save = rowSaves.find(
                      (s) => s.haracter_rup_id === vz.haracter_rup_id
                    );
                    const isMissed =
                      save && save.ssjurnal_poseshaemost_status !== "0";

                    return (
                      <td
                        key={`${vz.haracter_rup_id}-${dis.rup_id1}`}
                        className={`${isMissed ? "alert-cell" : ""} ${
                          !save ? "empty-cell" : ""
                        }`}
                      >
                        {save ? save.sotrudnik_fio : ""}
                      </td>
                    );
                  })}

                  <td rowSpan={2}>{dis.ssjurnal_poseshaemost_nedeleya_sum}</td>
                  <td rowSpan={2}>{dis.ssjurnal_poseshaemost_all_sum}</td>
                </tr>
                <tr key={`${dis.rup_id1}-2`}>
                  {data.vzans.map((vz) => {
                    const save = rowSaves.find(
                      (s) => s.haracter_rup_id === vz.haracter_rup_id
                    );
                    const isMissed =
                      save && save.ssjurnal_poseshaemost_status !== "0";

                    return (
                      <td
                        key={`d${vz.haracter_rup_id}-${dis.rup_id1}`}
                        className={`${isMissed ? "alert-cell" : ""} ${
                          !save ? "empty-cell" : ""
                        }`}
                      >
                        {save && (
                          <>
                            Балл:{" "}
                            <span style={{ color: "green" }}>
                              {save.ssjurnal_ball}
                            </span>
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  return isMobile ? renderMobileView() : renderDesktopView();
};
