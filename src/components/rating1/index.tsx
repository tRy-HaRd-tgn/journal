// components/Rating1.js
const Rating1 = () => {
  // Захардкоженные данные
  const data = [
    {
      disciplina_name: "Физика",
      ssjurnal_nedelya: "2@85@0$3@90@5$4@78@10$5@92@0$6@88@5$7@95@0$8@85@10",
    },
  ];

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

  return (
    <div>
      <table id="StudentTable" className="journal-table">
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
          {data.map((dis, idx) => {
            const weekData = parseWeekData(dis.ssjurnal_nedelya);
            const r1Total = 90; // Пример итогового балла

            return (
              <tr key={idx}>
                <td>{dis.disciplina_name}</td>
                <td>{weekData[2]?.ball || ""}</td>
                <td>{weekData[3]?.ball || ""}</td>
                <td>{weekData[4]?.ball || ""}</td>
                <td>{weekData[4]?.srs || ""}</td>
                <td>{weekData[5]?.ball || ""}</td>
                <td>{weekData[6]?.ball || ""}</td>
                <td>{weekData[7]?.ball || ""}</td>
                <td>{weekData[7]?.srs || ""}</td>
                <td>{weekData[8]?.ball || ""}</td>
                <td style={{ textAlign: "center" }}>{r1Total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Rating1;
