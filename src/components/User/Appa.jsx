import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./stylee.css";

function Appa() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (isLogin) {
      if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
        setError("Неправильный email или пароль!");
        return;
      }
      navigate("/profile");
    } else {

      if (savedUser && savedUser.email === email) {
        setError("Этот email уже зарегистрирован!");
        return;
      }

      const newUser = { name, email, password };
      localStorage.setItem("user", JSON.stringify(newUser));
      navigate("/profile"); 
    }
  };

  return (
    <div className="containerer">
        <div className="profile">
            <h2 className="reg">Регистрация</h2>
            <div className="textiop">
            <p>Зарегистрируйтесь, чтобы
            получить доступ ко всем преимуществам нашей платформы. Уже есть аккаунт?</p>
            </div>
            <p className="toggle-text">
          <span onClick={() => setIsLogin(!isLogin)} className="hit1">
            {isLogin ? " Зарегистрироваться" : " Войти"}
          </span>
        </p>
        </div>
        <div className="jit">

      <form onSubmit={handleSubmit} className="form">
        <h2 >{isLogin ? "Вход" : "Создать аккаунт"}</h2>
        <div className="kop">
        {error && <p className="error">{error}</p>}
        {!isLogin && (
            <input
            type="text"
            placeholder="Логин"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
        )}
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
          </div>
        <button className="kush" type="submit">{isLogin ? "Войти" : "Зарегистрироваться"}</button>
      </form>
      <div>
        </div>
        
       
      </div>
    </div>
  );
}

export default Appa;
