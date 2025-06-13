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
              <td data-label="Дисциплина">{subject.disciplina_name}</td>
              <td data-label="9 неделя">{subject.week9}</td>
              <td data-label="10 неделя">{subject.week10}</td>
              <td data-label="11 неделя (балл)">{subject.week11.ball}</td>
              <td data-label="11 неделя (СРС)">{subject.week11.srs}</td>
              <td data-label="12 неделя">{subject.week12}</td>
              <td data-label="13 неделя">{subject.week13}</td>
              <td data-label="14 неделя (балл)">{subject.week14.ball}</td>
              <td data-label="14 неделя (СРС)">{subject.week14.srs}</td>
              <td data-label="15 неделя">{subject.week15}</td>
              <td data-label="Общий балл" style={{ textAlign: "center" }}>
                {subject.r2}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .journal-table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          background: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .journal-table th,
        .journal-table td {
          border: 1px solid #ddd;
          padding: 12px;
          text-align: center;
        }

        .journal-table th {
          background-color: #f8f9fa;
          font-weight: 600;
        }

        .journal-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }

        .journal-table tr:hover {
          background-color: #f5f5f5;
        }

        @media screen and (max-width: 1000px) {
          .journal-table,
          .journal-table tbody,
          .journal-table tr,
          .journal-table td {
            display: block;
          }

          .journal-table thead {
            display: none;
          }

          .journal-table tr {
            margin-bottom: 20px;
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            overflow: hidden;
            text-align: center;
          }

          .journal-table td {
            position: relative;
            padding: 20px 15px;
            text-align: center;
            border: none;
            border-bottom: 1px solid #eee;
            background: #fff;
            transition: all 0.3s ease;
            margin: 8px;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          }

          .journal-table td:hover {
            background-color: #f8f9fa;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          }

          .journal-table td:last-child {
            border-bottom: none;
          }

          .journal-table td:before {
            content: attr(data-label);
            display: block;
            margin-bottom: 12px;
            font-weight: 600;
            color: #666;
            font-size: 14px;
            text-align: center;
            padding-bottom: 8px;
            border-bottom: 2px solid #f0f0f0;
          }

          .journal-table td[data-label="Дисциплина"] {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            font-weight: 600;
            font-size: 18px;
            padding: 25px 15px;
            margin: 0;
            border-radius: 0;
            box-shadow: none;
            border-bottom: 2px solid #eee;
          }

          .journal-table td[data-label="Дисциплина"]:before {
            display: none;
          }

          .journal-table td[data-label="Общий балл"] {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            font-weight: 600;
            font-size: 20px;
            text-align: center;
            padding: 25px 15px;
            margin: 0;
            border-radius: 0;
            box-shadow: none;
            border-top: 2px solid #eee;
          }

          .journal-table td[data-label="Общий балл"]:before {
            display: none;
          }

          .journal-table td[data-label*="СРС"] {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          }

          .journal-table td[data-label*="СРС"]:before {
            color: #666;
          }

          .journal-table td[data-label*="балл"] {
            font-size: 18px;
            font-weight: 600;
            color: #2c3e50;
          }
        }
      `}</style>
    </div>
  );
};

export default Rating2;
