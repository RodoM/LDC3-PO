import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState('');

  const handleUsername = (e) => {
    const { value } = e.target;
    const letterOValidate = value.charAt(value.length - 1).toLowerCase().includes("o");

    if (letterOValidate) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!")
    }

    setUsername(value);
  };

  const handleRegister = () => {
    if (username.toLowerCase().includes("o") || username === '') {
      alert("Usuario inválido para registrarse");
    } else {
      alert("¡Usuario registrado correctamente!");
    }
  };

  return(
    <div className="grid gap-4 border p-6 rounded-md">
      <div className="grid gap-2">
        <Label>Usuario</Label>
        <Input
          value={username}
          placeholder="Ingrese su nombre de usuario"
          onChange={handleUsername}
        />
      </div>
      <Button onClick={handleRegister}>Registrarse</Button>
      <p className="text-sm"> {username}</p>
    </div>
  )
}

export default Login;