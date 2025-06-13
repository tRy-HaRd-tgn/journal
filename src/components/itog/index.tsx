// components/Itog.js
import "./styles.css";

const Itog = () => {
  // Захардкоженные данные
  const discips = [
    {
      disciplina_name: "Математика",
      r1: 85,
      komment1: "Хорошая работа",
      r2: 90,
      komment2: "Отлично",
      r: 88,
      ekzamen: 92,
      ap: "",
      itog: 90,
    },
  ];

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
            <tr key={idx}>
              <td data-label="Дисциплина">{dis.disciplina_name}</td>
              <td data-label="R1">
                {dis.r1}
                {dis.komment1 && <br />}
                {dis.komment1 && `Комментарий: ${dis.komment1}`}
              </td>
              <td data-label="R2">
                {dis.r2}
                {dis.komment2 && <br />}
                {dis.komment2 && `Комментарий: ${dis.komment2}`}
              </td>
              <td data-label="Рейтинг">{dis.r}</td>
              <td data-label="Экзамен">{dis.ekzamen || ""}</td>
              <td data-label="Апеляция">{dis.ap || ""}</td>
              <td data-label="Общий балл">{dis.itog}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Itog;
