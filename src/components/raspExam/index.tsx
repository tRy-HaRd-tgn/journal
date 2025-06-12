// components/RaspEkzamen.js
import "./styles.css";

const RaspEkzamen = () => {
  // Захардкоженные данные расписания экзаменов
  const exams = [
    {
      id: 1,
      date: "15.05.2024",
      time: "10:00-12:00",
      disciplina: "Высшая математика",
      prepod: "Иванова А.П.",
      auditoria: "Ауд. 301",
      forma: "Письменный экзамен",
    },
    {
      id: 2,
      date: "17.05.2024",
      time: "09:00-11:00",
      disciplina: "Физика",
      prepod: "Петров С.И.",
      auditoria: "Ауд. 215",
      forma: "Устный экзамен",
    },
    {
      id: 3,
      date: "20.05.2024",
      time: "13:00-15:00",
      disciplina: "Программирование",
      prepod: "Сидоров В.К.",
      auditoria: "Комп. кл. 101",
      forma: "Практический экзамен",
    },
  ];

  return (
    <div className="rasp-container">
      <h3 className="rasp-title">Расписание экзаменов</h3>

      <div className="table-container">
        <table className="rasp-table">
          <thead>
            <tr>
              <th>№</th>
              <th>Дата</th>
              <th>Время</th>
              <th>Дисциплина</th>
              <th>Преподаватель</th>
              <th>Аудитория</th>
              <th>Форма сдачи</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, index) => (
              <tr key={exam.id}>
                <td>{index + 1}</td>
                <td>{exam.date}</td>
                <td>{exam.time}</td>
                <td>{exam.disciplina}</td>
                <td>{exam.prepod}</td>
                <td>{exam.auditoria}</td>
                <td>{exam.forma}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="exams-notice">
        <p>
          Примечание: Для допуска к экзаменам необходимо закрыть все
          задолженности.
        </p>
      </div>
    </div>
  );
};

export default RaspEkzamen;
