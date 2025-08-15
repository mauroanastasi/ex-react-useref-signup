import { useState } from 'react'

function App() {
  const [nome, setNome] = useState("")
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [spec, setSpec] = useState("")
  const [num, setNum] = useState("")
  const [des, setDes] = useState("")

  function submitxxx(e) {
    e.preventDefault();
    console.log(`
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
      <form action="" onSubmit={submitxxx}>

        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome completo' />

        <input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder='Username' />

        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Password' />

        <select value={spec} onChange={(e) => setSpec(e.target.value)} name="Specializzazione" id="sp">
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </select>

        <label htmlFor="quantity">Anni di esperienza:</label>
        <input value={num} onChange={(e) => setNum(e.target.value)} type="number" id="quantity" name="quantity" min="1" max="60" />

        <label htmlFor="descr">Descrizione sullo sviluppatore</label>
        <textarea value={des} onChange={(e) => setDes(e.target.value)} id="descr" name="descr" rows="5" cols="100">

        </textarea>

        <button type='submitxxx' > Invia </button>
      </form>
    </>
  )
}

export default App
