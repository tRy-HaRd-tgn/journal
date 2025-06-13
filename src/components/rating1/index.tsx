// components/Rating1.js
import "./styles.css";

const Rating1 = () => {
  // Захардкоженные данные для рейтинга допуска 1
  const ratingData = [
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

  return (
    <div>
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
          {ratingData.map((subject, index) => (
            <tr key={index}>
              <td data-label="Дисциплина">{subject.disciplina_name}</td>
              <td data-label="2 неделя">{subject.week2}</td>
              <td data-label="3 неделя">{subject.week3}</td>
              <td data-label="4 неделя (балл)">{subject.week4.ball}</td>
              <td data-label="4 неделя (СРС)">{subject.week4.srs}</td>
              <td data-label="5 неделя">{subject.week5}</td>
              <td data-label="6 неделя">{subject.week6}</td>
              <td data-label="7 неделя (балл)">{subject.week7.ball}</td>
              <td data-label="7 неделя (СРС)">{subject.week7.srs}</td>
              <td data-label="8 неделя">{subject.week8}</td>
              <td data-label="Общий балл">{subject.r1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rating1;
