// components/Iup.js
const Iup = () => {
  // Захардкоженные данные ИТП
  const iupData = {
    shapka: {
      shapka1: "Индивидуальный учебный план",
      shapka2: "Утверждаю",
      shapka3: "Ректор университета",
      shapka4: "Иванов П.С.",
      shapka5: "Декан факультета",
    },
    tb: [
      {
        nomer: "1",
        disciplina_id: "MATH101",
        disciplina_name: "Высшая математика",
        kredit: "5",
      },
      {
        nomer: "2",
        disciplina_id: "PHYS201",
        disciplina_name: "Физика",
        kredit: "4",
      },
      {
        nomer: "3",
        disciplina_id: "PROG301",
        disciplina_name: "Программирование",
        kredit: "6",
      },
      {
        nomer: "4",
        disciplina_id: "ENG401",
        disciplina_name: "Английский язык",
        kredit: "3",
      },
    ],
    tb_gr: [
      { period_nomer: "1 семестр", period_data: "01.09.2023 - 31.12.2023" },
      { period_nomer: "2 семестр", period_data: "01.02.2024 - 30.06.2024" },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <h3 className="text-right text-xl font-semibold text-gray-800">
              {iupData.shapka.shapka1}
            </h3>
          </div>
          <div className="ml-4">
            <div className="w-32 h-32 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500">
              QR-код
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            {iupData.shapka.shapka2}
          </h3>
          <h3 className="text-lg text-gray-700">{iupData.shapka.shapka3}</h3>
          <h3 className="text-lg text-gray-700 mt-2">
            {iupData.shapka.shapka4}
          </h3>
        </div>
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="journal-table">
          <thead>
            <tr>
              <th>№</th>
              <th>Код дисциплины</th>
              <th>Наименование дисциплины</th>
              <th>Кредиты</th>
            </tr>
          </thead>
          <tbody>
            {iupData.tb.map((item, index) => (
              <tr key={index}>
                <td>{item.nomer}</td>
                <td>{item.disciplina_id}</td>
                <td>{item.disciplina_name}</td>
                <td>{item.kredit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mb-8">
        <h3 className="text-lg font-semibold text-gray-800">
          {iupData.shapka.shapka5}
        </h3>
        <div className="w-32 h-32 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500">
          QR-код
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-800 text-center mb-4">
          График учебного процесса
        </h4>
        <div className="overflow-x-auto">
          <table className="journal-table">
            <thead>
              <tr>
                <th>Период</th>
                <th>Даты</th>
              </tr>
            </thead>
            <tbody>
              {iupData.tb_gr.map((item, index) => (
                <tr key={index}>
                  <td>{item.period_nomer}</td>
                  <td>{item.period_data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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

export default Iup;
