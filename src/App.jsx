import { useState } from 'react'


const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";


function App() {
  const [nome, setNome] = useState("")
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [spec, setSpec] = useState("")
  const [num, setNum] = useState("")
  const [des, setDes] = useState("")

  const nomeNonValido = [...nome].some(n => symbols.includes(n))

  function submit(e) {
    e.preventDefault();
    if (nome.length < 1 || user.length < 1 || pass.length < 1 || num.length < 1 || des.length < 1) {
      console.log(`tutti i campi devono essere compilati`)
      return

    } else if (num <= 0 || isNaN(num)) {
      console.log(`non è stato inserito un numero valido o positivo`)
      return

    } else if (spec === "") {
      console.log(`specializzazione non selezionata`)
      return

    } console.log(`
      nome:${nome};
      utente:${user};
      password:${pass};
      specializzazione:${spec};
      esperienza:${num};
      descrizione:${des}
      `)

  }

  return (
    <>
      <form action="" onSubmit={submit}>

        <strong style={{ color: nome.length < 6 || nomeNonValido ? "red" : "green" }}>
          {nome.length < 6 ? "Immetti 6 caratteri alfanumerici, no simboli" : "Nome valido"}
        </strong>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome completo' />

        <input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder='Username' />

        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Password' />

        <select value={spec} onChange={(e) => setSpec(e.target.value)} name="Specializzazione" id="sp">
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </select>

        <label htmlFor="quantity">Anni di esperienza:</label>
        <input value={num} onChange={(e) => setNum(e.target.value)} type="number" id="quantity" name="quantity" />

        <label htmlFor="descr">Descrizione sullo sviluppatore</label>
        <textarea value={des} onChange={(e) => setDes(e.target.value)} id="descr" name="descr" rows="5" cols="100">

        </textarea>

        <button type='submit' > Invia </button>
      </form>
    </>
  )
}

export default App
