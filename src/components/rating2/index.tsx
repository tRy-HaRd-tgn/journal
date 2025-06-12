// components/Rating2.js
const Rating2 = () => {
  // Захардкоженные данные для рейтинга допуска 2
  const ratingData = [
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

  return (
    <div>
      <table id="StudentTable" className="journal-table">
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
          {ratingData.map((subject, index) => (
            <tr key={index}>
              <td>{subject.disciplina_name}</td>
              <td>{subject.week9}</td>
              <td>{subject.week10}</td>
              <td>{subject.week11.ball}</td>
              <td>{subject.week11.srs}</td>
              <td>{subject.week12}</td>
              <td>{subject.week13}</td>
              <td>{subject.week14.ball}</td>
              <td>{subject.week14.srs}</td>
              <td>{subject.week15}</td>
              <td style={{ textAlign: "center" }}>{subject.r2}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .journal-table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }

        .journal-table th,
        .journal-table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: center;
        }

        .journal-table th {
          background-color: #f5f5f5;
        }

        .journal-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }

        .journal-table tr:hover {
          background-color: #f5f5f5;
        }
      `}</style>
    </div>
  );
};

export default Rating2;
