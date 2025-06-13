// components/Rating1.js
import "./styles.css";

interface Discipline {
  id: string | number;
  disciplina_name: string;
  ssjurnal_nedelya: string;
}

interface Rating1Props {
  disciplines?: Discipline[];
}

const Rating1: React.FC<Rating1Props> = ({ disciplines = [] }) => {
  console.log("Полученные данные:", disciplines);

  // Парсинг данных недель
  const parseWeekData = (
    weekString: string
  ): Record<string, { ball: string; srs: string }> => {
    const weeks = weekString.split("$");
    const result: Record<string, { ball: string; srs: string }> = {};

    weeks.forEach((week) => {
      if (!week) return;
      const [weekNum, ball, srs] = week.split("@");
      result[weekNum] = { ball, srs };
    });

    return result;
  };

  if (!disciplines || disciplines.length === 0) {
    return <div>Нет данных для отображения</div>;
  }

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
          {disciplines.map((dis) => {
            const weekData = parseWeekData(dis.ssjurnal_nedelya);
            const r1Total = 90; // Пример итогового балла

            return (
              <tr key={dis.id}>
                <td data-label="Дисциплина">{dis.disciplina_name}</td>
                <td data-label="2 неделя">{weekData[2]?.ball || "-"}</td>
                <td data-label="3 неделя">{weekData[3]?.ball || "-"}</td>
                <td data-label="4 неделя (балл)">{weekData[4]?.ball || "-"}</td>
                <td data-label="4 неделя (СРС)">{weekData[4]?.srs || "-"}</td>
                <td data-label="5 неделя">{weekData[5]?.ball || "-"}</td>
                <td data-label="6 неделя">{weekData[6]?.ball || "-"}</td>
                <td data-label="7 неделя (балл)">{weekData[7]?.ball || "-"}</td>
                <td data-label="7 неделя (СРС)">{weekData[7]?.srs || "-"}</td>
                <td data-label="8 неделя">{weekData[8]?.ball || "-"}</td>
                <td data-label="Общий балл">{r1Total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Rating1;
