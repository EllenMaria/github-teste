import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Search = () => {
    const navigate = useNavigate();
    const navigation = () => {
      navigate(`perfil/${query}`);
    };

    const [query, setQuery] = useState([]);

    const handleSubmit = (e) => {
      e.preventDefault();
      navigation();
    };
  
    const handleSearch = (e) => {
      setQuery(e.target.value);
    };

  return (
    <form className="form" onSubmit={handleSubmit}>
        <input className="input" type="text" onChange={handleSearch} />
        <button type="submit">Buscar</button>
    </form>
  )
}