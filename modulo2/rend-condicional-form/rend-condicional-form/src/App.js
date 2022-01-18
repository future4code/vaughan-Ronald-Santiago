import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
  const [form, setForm ]= useState({"nome":"", "idade":"", "email":""})
  const handlFormChange=(e)=>{

  }
  

  return (
    <>
    <h1>FORMULÁRIO- DADOS GERAIS</h1>
    <label>Digite seu nome </label>
    <input type ="text" name = "fnome" value={form.nome} onChange={(e)=>handlFormChange(e)}/> <br/>
    <label>Digite sua idade </label>  
    <input type = "text" name ="fidade" value ={form.idade} onChange={(e)=>handlFormChange(e)}/><br/>
    <label>Digite seu email</label>
    <input type = "text" name ="femail" value= {form.email} onChange={(e)=>handlFormChange(e)}/><br/>

    
    
    
    </>
  );
}

export default App;
