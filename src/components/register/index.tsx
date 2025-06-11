// components/Reg.js
const Reg = () => {
  return (
    <div className="reg-container">
      <h2>Регистрация на новый учебный год</h2>

      <div className="reg-form">
        <div className="form-group">
          <label>ФИО:</label>
          <input type="text" placeholder="Введите ваше полное имя" />
        </div>

        <div className="form-group">
          <label>Группа:</label>
          <select>
            <option value="">Выберите группу</option>
            <option value="CS-101">CS-101</option>
            <option value="CS-102">CS-102</option>
            <option value="ME-201">ME-201</option>
          </select>
        </div>

        <div className="form-group">
          <label>Курс:</label>
          <select>
            <option value="1">1 курс</option>
            <option value="2">2 курс</option>
            <option value="3">3 курс</option>
            <option value="4">4 курс</option>
          </select>
        </div>

        <div className="form-group">
          <label>Форма обучения:</label>
          <select>
            <option value="full">Очная</option>
            <option value="part">Заочная</option>
            <option value="remote">Дистанционная</option>
          </select>
        </div>

        <div className="form-group">
          <label>Электронная почта:</label>
          <input type="email" placeholder="email@example.com" />
        </div>

        <div className="form-group">
          <label>Телефон:</label>
          <input type="tel" placeholder="+7 (999) 999-99-99" />
        </div>

        <div className="form-actions">
          <button className="btn-submit">Зарегистрироваться</button>
          <button className="btn-cancel">Отмена</button>
        </div>
      </div>

      <style jsx>{`
        .reg-container {
          max-width: 800px;
          margin: 20px auto;
          padding: 20px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 30px;
        }

        .reg-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
          color: #34495e;
        }

        input,
        select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }

        .form-actions {
          grid-column: span 2;
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }

        .btn-submit,
        .btn-cancel {
          padding: 12px 30px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.3s;
        }

        .btn-submit {
          background: #3498db;
          color: white;
        }

        .btn-submit:hover {
          background: #2980b9;
        }

        .btn-cancel {
          background: #e74c3c;
          color: white;
        }

        .btn-cancel:hover {
          background: #c0392b;
        }

        @media (max-width: 600px) {
          .reg-form {
            grid-template-columns: 1fr;
          }

          .form-actions {
            grid-column: span 1;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Reg;
