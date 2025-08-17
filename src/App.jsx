import { useState, useRef } from 'react'


const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";


function App() {
  const [nome, setNome] = useState("")
  const userRef = useRef()
  const [pass, setPass] = useState("")
  const specRef = useRef()
  const numRef = useRef()
  const [des, setDes] = useState("")

  let nomeNonValido = [...nome].some(n => symbols.includes(n))

  const hasSymbol = [...pass].some(p => symbols.includes(p));
  const hasNumber = [...pass].some(p => numbers.includes(p));
  const hasLetter = [...pass].some(p => letters.includes(p));

  function submit(e) {
    e.preventDefault();
    if (nome.length < 1 || userRef.current.value.length < 1 || pass.length < 1 || numRef.current.value.length < 1 || des.length < 1) {
      console.log(`tutti i campi devono essere compilati`)
      return

    } else if (numRef.current.value <= 0 || isNaN(numRef.current.value)) {
      console.log(`non è stato inserito un numero valido o positivo`)
      return

    } else if (specRef.current.value === "") {
      console.log(`specializzazione non selezionata`)
      return

    } console.log(`
      nome:${nome};
      utente:${userRef.current.value};
      password:${pass};
      specializzazione:${specRef.current.value};
      esperienza:${numRef.current.value};
      descrizione:${des}
      `)

  }

  return (
    <>
      <form action="" onSubmit={submit}>

        <strong style={{ color: nome.length < 6 || nomeNonValido ? "red" : "green" }}>
          {nome.length < 6 || nomeNonValido ? "Immetti 6 caratteri alfanumerici, no simboli" : "Nome valido"}
        </strong>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome completo' />

        <input type="text" ref={userRef} placeholder='Username' />

        <strong style={{ color: pass.length < 8 || !hasSymbol || !hasNumber || !hasLetter ? "red" : "green" }}>
          {pass.length < 8 || !hasSymbol || !hasNumber || !hasLetter ? "Immetti almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo" : "Password valida"}
        </strong>
        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Password' />

        <select ref={specRef} name="Specializzazione" id="sp">
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </select>

        <label htmlFor="quantity">Anni di esperienza:</label>
        <input ref={numRef} type="number" id="quantity" name="quantity" />

        <label htmlFor="descr">Descrizione sullo sviluppatore</label>
        <textarea value={des} onChange={(e) => setDes(e.target.value)} id="descr" name="descr" rows="5" cols="100">

        </textarea>

        <button type='submit' > Invia </button>
      </form>
    </>
  )
}

export default App
