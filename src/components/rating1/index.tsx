// components/Rating1.js
import "./styles.css";
import React from "react";

interface WeekData {
  ball: number;
  srs: number;
}

interface RatingSubject {
  disciplina_name: string;
  // Для r1
  week2?: number;
  week3?: number;
  week4?: WeekData;
  week5?: number;
  week6?: number;
  week7?: WeekData;
  week8?: number;
  r1?: number;
  // Для r2
  week9?: number;
  week10?: number;
  week11?: WeekData;
  week12?: number;
  week13?: number;
  week14?: WeekData;
  week15?: number;
  r2?: number;
}

type RatingType = "r1" | "r2";

interface RatingTableProps {
  type: RatingType;
}

const ratingDataR1: RatingSubject[] = [
  {
    disciplina_name: "Физика",
    week2: 85,
    week3: 90,
    week4: { ball: 78, srs: 10 },
    week5: 92,
    week6: 88,
    week7: { ball: 95, srs: 0 },
    week8: 85,
    r1: 90,
  },
  {
    disciplina_name: "Программирование",
    week2: 90,
    week3: 85,
    week4: { ball: 92, srs: 5 },
    week5: 88,
    week6: 94,
    week7: { ball: 90, srs: 10 },
    week8: 87,
    r1: 89,
  },
  {
    disciplina_name: "Высшая математика",
    week2: 78,
    week3: 82,
    week4: { ball: 85, srs: 8 },
    week5: 90,
    week6: 87,
    week7: { ball: 92, srs: 5 },
    week8: 88,
    r1: 86,
  },
];

const ratingDataR2: RatingSubject[] = [
  {
    disciplina_name: "Физика",
    week9: 85,
    week10: 90,
    week11: { ball: 78, srs: 10 },
    week12: 92,
    week13: 88,
    week14: { ball: 95, srs: 0 },
    week15: 85,
    r2: 92,
  },
  {
    disciplina_name: "Программирование",
    week9: 90,
    week10: 85,
    week11: { ball: 92, srs: 5 },
    week12: 88,
    week13: 94,
    week14: { ball: 90, srs: 10 },
    week15: 87,
    r2: 89,
  },
  {
    disciplina_name: "Высшая математика",
    week9: 78,
    week10: 82,
    week11: { ball: 85, srs: 8 },
    week12: 90,
    week13: 87,
    week14: { ball: 92, srs: 5 },
    week15: 88,
    r2: 86,
  },
];

const tableConfig = {
  r1: {
    data: ratingDataR1,
    header1: [
      { label: "Дисциплина", rowSpan: 2 },
      { label: "2" },
      { label: "3" },
      { label: "4", colSpan: 2 },
      { label: "5" },
      { label: "6" },
      { label: "7", colSpan: 2 },
      { label: "8" },
      { label: "R1" },
    ],
    header2: [
      { label: "балл" },
      { label: "балл" },
      { label: "балл" },
      { label: "СРС" },
      { label: "балл" },
      { label: "балл" },
      { label: "балл" },
      { label: "СРС" },
      { label: "балл" },
      { label: "общий балл" },
    ],
    renderRow: (subject: RatingSubject) => (
      <>
        <td data-label="Дисциплина">{subject.disciplina_name}</td>
        <td data-label="2 неделя">{subject.week2}</td>
        <td data-label="3 неделя">{subject.week3}</td>
        <td data-label="4 неделя (балл)">{subject.week4?.ball}</td>
        <td data-label="4 неделя (СРС)">{subject.week4?.srs}</td>
        <td data-label="5 неделя">{subject.week5}</td>
        <td data-label="6 неделя">{subject.week6}</td>
        <td data-label="7 неделя (балл)">{subject.week7?.ball}</td>
        <td data-label="7 неделя (СРС)">{subject.week7?.srs}</td>
        <td data-label="8 неделя">{subject.week8}</td>
        <td data-label="Общий балл">{subject.r1}</td>
      </>
    ),
  },
  r2: {
    data: ratingDataR2,
    header1: [
      { label: "Дисциплина", rowSpan: 2 },
      { label: "9" },
      { label: "10" },
      { label: "11", colSpan: 2 },
      { label: "12" },
      { label: "13" },
      { label: "14", colSpan: 2 },
      { label: "15" },
      { label: "R2" },
    ],
    header2: [
      { label: "балл" },
      { label: "балл" },
      { label: "балл" },
      { label: "СРС" },
      { label: "балл" },
      { label: "балл" },
      { label: "балл" },
      { label: "СРС" },
      { label: "балл" },
      { label: "общий балл" },
    ],
    renderRow: (subject: RatingSubject) => (
      <>
        <td data-label="Дисциплина">{subject.disciplina_name}</td>
        <td data-label="9 неделя">{subject.week9}</td>
        <td data-label="10 неделя">{subject.week10}</td>
        <td data-label="11 неделя (балл)">{subject.week11?.ball}</td>
        <td data-label="11 неделя (СРС)">{subject.week11?.srs}</td>
        <td data-label="12 неделя">{subject.week12}</td>
        <td data-label="13 неделя">{subject.week13}</td>
        <td data-label="14 неделя (балл)">{subject.week14?.ball}</td>
        <td data-label="14 неделя (СРС)">{subject.week14?.srs}</td>
        <td data-label="15 неделя">{subject.week15}</td>
        <td data-label="Общий балл">{subject.r2}</td>
      </>
    ),
  },
};

const RatingTable: React.FC<RatingTableProps> = ({ type }) => {
  const config = tableConfig[type];
  return (
    <div>
      <table className="journal-table">
        <thead>
          <tr>
            {config.header1.map((h, i) => (
              <th key={i} rowSpan={h.rowSpan} colSpan={h.colSpan}>
                {h.label}
              </th>
            ))}
          </tr>
          <tr>
            {config.header2.map((h, i) => (
              <th key={i}>{h.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {config.data.map((subject, index) => (
            <tr key={index}>{config.renderRow(subject)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableR1 = () => (
  <div style={{ marginBottom: 32 }}>
    <h3 style={{ fontWeight: 600, fontSize: 20, margin: "16px 0 8px 0" }}>
      Рейтинг допуска 1
    </h3>
    <table className="journal-table">
      <thead>
        <tr>
          <th rowSpan={2}>Дисциплина</th>
          <th>2</th>
          <th>3</th>
          <th colSpan={2}>4</th>
          <th>5</th>
          <th>6</th>
          <th colSpan={2}>7</th>
          <th>8</th>
          <th colSpan={1}>R1</th>
        </tr>
        <tr>
          <th>балл</th>
          <th>балл</th>
          <th>балл</th>
          <th>СРС</th>
          <th>балл</th>
          <th>балл</th>
          <th>балл</th>
          <th>СРС</th>
          <th>балл</th>
          <th>общий балл</th>
        </tr>
      </thead>
      <tbody>
        {ratingDataR1.map((subject, index) => (
          <tr key={index}>
            <td data-label="Дисциплина">{subject.disciplina_name}</td>
            <td data-label="2 неделя">{subject.week2}</td>
            <td data-label="3 неделя">{subject.week3}</td>
            <td data-label="4 неделя (балл)">{subject.week4?.ball}</td>
            <td data-label="4 неделя (СРС)">{subject.week4?.srs}</td>
            <td data-label="5 неделя">{subject.week5}</td>
            <td data-label="6 неделя">{subject.week6}</td>
            <td data-label="7 неделя (балл)">{subject.week7?.ball}</td>
            <td data-label="7 неделя (СРС)">{subject.week7?.srs}</td>
            <td data-label="8 неделя">{subject.week8}</td>
            <td data-label="Общий балл">{subject.r1}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const TableR2 = () => (
  <div>
    <h3 style={{ fontWeight: 600, fontSize: 20, margin: "16px 0 8px 0" }}>
      Рейтинг допуска 2
    </h3>
    <table className="journal-table">
      <thead>
        <tr>
          <th rowSpan={2}>Дисциплина</th>
          <th>9</th>
          <th>10</th>
          <th colSpan={2}>11</th>
          <th>12</th>
          <th>13</th>
          <th colSpan={2}>14</th>
          <th>15</th>
          <th colSpan={1}>R2</th>
        </tr>
        <tr>
          <th>балл</th>
          <th>балл</th>
          <th>балл</th>
          <th>СРС</th>
          <th>балл</th>
          <th>балл</th>
          <th>балл</th>
          <th>СРС</th>
          <th>балл</th>
          <th>общий балл</th>
        </tr>
      </thead>
      <tbody>
        {ratingDataR2.map((subject, index) => (
          <tr key={index}>
            <td data-label="Дисциплина">{subject.disciplina_name}</td>
            <td data-label="9 неделя">{subject.week9}</td>
            <td data-label="10 неделя">{subject.week10}</td>
            <td data-label="11 неделя (балл)">{subject.week11?.ball}</td>
            <td data-label="11 неделя (СРС)">{subject.week11?.srs}</td>
            <td data-label="12 неделя">{subject.week12}</td>
            <td data-label="13 неделя">{subject.week13}</td>
            <td data-label="14 неделя (балл)">{subject.week14?.ball}</td>
            <td data-label="14 неделя (СРС)">{subject.week14?.srs}</td>
            <td data-label="15 неделя">{subject.week15}</td>
            <td data-label="Общий балл">{subject.r2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const RatingDopusk: React.FC = () => (
  <div>
    <h2 style={{ fontWeight: 700, fontSize: 24, margin: "24px 0 16px 0" }}>
      Рейтинг допуска
    </h2>
    <TableR1 />
    <TableR2 />
  </div>
);

export default RatingDopusk;
