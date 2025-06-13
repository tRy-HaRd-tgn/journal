// components/RaspEkzamen.js
import "./styles.module.css";

interface Exam {
  id: number;
  date: string;
  time: string;
  disciplina: string;
  prepod: string;
  auditoria: string;
  forma: string;
}

interface Header {
  key: keyof Exam;
  label: string;
}

const RaspEkzamen = () => {
  // Захардкоженные данные расписания экзаменов
  const exams: Exam[] = [
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

  const headers: Header[] = [
    { key: "date", label: "Дата" },
    { key: "time", label: "Время" },
    { key: "disciplina", label: "Дисциплина" },
    { key: "prepod", label: "Преподаватель" },
    { key: "auditoria", label: "Аудитория" },
    { key: "forma", label: "Форма сдачи" },
  ];

  return (
    <div className="rasp-container">
      <h3 className="rasp-title">Расписание экзаменов</h3>

      <div className="table-container">
        <table className="rasp-table">
          <thead className="desktop-only">
            <tr>
              <th>№</th>
              {headers.map((header) => (
                <th key={header.key}>{header.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, index) => (
              <tr key={exam.id}>
                <td className="desktop-only">{index + 1}</td>
                {headers.map((header) => (
                  <td key={header.key} data-label={header.label}>
                    {exam[header.key]}
                  </td>
                ))}
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
