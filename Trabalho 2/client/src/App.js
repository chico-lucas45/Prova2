import './App.css';
import logo from './Assets/logoCinpar1.jpg';
import React, {useState, useEffect} from "react";
import Axios from "axios";

function App() {
const [nomeComp,setNomeComp] = useState('');
const [email,setEmail] = useState('');
const [telefone,setTelefone] = useState('');
const [listaReg,setLista] = useState([]);

const [emailNovo, setEmailNovo] = useState("");
const [TeleNovo, setTeleNovo] = useState("");

useEffect(() => {
  Axios.get('http://localhost:3001/api/get').then((response) => {
    setLista(response.data);
  })
}, [])

const enviar = () => {
  Axios.post("http://localhost:3001/api/insert", {nomeComp: nomeComp, email: email,
  telefone: telefone}).then(() => {
    alert("PROGRESSO!")
  });
}
const deletarReg = (nome) => {
  Axios.delete(`http://localhost:3001/api/deletar/${nome}`)
};

const tualizarReg = (nome) => {
  Axios.put("http://localhost:3001/api/atualizar", {nomeComp: nome ,email: emailNovo,telefone: TeleNovo});
  setEmailNovo("");
  setTeleNovo("");
}


  return (
    <div className="App">
      <section className="allmighty">
            <section class="topBar">
                <div class="sideimg">
                  <img src={logo} />
                </div>
                <div class="topMenu">
                </div>
            </section>

            <section class="content">
            <div class="contentTitle"> 
                    <a>Scope</a>
                </div>
                    
                <div class="mainText">
                    <a>For the specialist in pathology and rehabilitation of structures, is essential to have knowledge about: technology of the materials used (stone, adobe, wood, steel, concrete or other); geometric characteristics of the structures; possible tests of physical and mechanical characterization of the materials; behavior of structural elements and solutions for rehabilitation and reinforcement.<br/><br/>
                        Recently, the evolution of knowledge in the domains of pathology and rehabilitation of buildings, has shown a significant impulse, due to the growing awareness of the various players in the construction sector, as well as to the emergence of new materials, techniques, and solutions.<br/><br/>
                        Recent statistics show that investment in the rehabilitation sector continues to show an increasing trend. CINPAR 2022 represents an important opportunity for the acquisition of new knowledge, and for the exchange of experiences in the fields related to the rehabilitation and strengthening of structures.</a>
                </div>

                <div class="contentTitle"> 
                    <a>Objetivos</a>
                </div>
                    
                <div className="mainText">
                    <a>Disseminate and discuss methods of inspection of structures and characterization of materials;<br/><br/>
                        Present and discuss the most frequent pathologies in buildings;<br/><br/>
                        Know and analyze the main causes of pathologies;<br/><br/>
                        Disseminate the most used materials in the work of rehabilitation and reinforcement of existing structures; Promote the exchange of experiences in the fields of the study of pathologies and the rehabilitation and strengthening of structures.
                        </a>
                </div>

                <div className="contentTitle"> 
                    <a>Topics</a>
                </div>
                    
                <div className="mainTextt">
                    <a>T1 – Inspection and Defects<br/>
                        T2 – Materials and Techniques<br/>
                        T3 – Natural Hazards<br/>
                        T4 – Infrastructures<br/>
                        T5 – Design Projects and Rehabilitation Works<br/>
                        T6 – Built Heritage<br/>
                        T7 – Management and Standards<br/>
                        T8 – Research and Recent Developments<br/>
                        </a>
                </div>
                <div className='contentTitle'>
                  <a>FAÇA SUA INSCRIÇÃO AQUI:</a>
                </div>
                <div className='form'>
                  <label>Full Name</label>
                  <input type="text" name='nomeComp' onChange={(e) =>{
                    setNomeComp(e.target.value)
                  }} />
                  <label>E-mail</label>
                  <input type="text" name='email' onChange={(e) =>{
                    setEmail(e.target.value)
                  }} />
                  <label>Phone Number</label>
                  <input type="text" name='telefone' onChange={(e) =>{
                    setTelefone(e.target.value)
                  }} />
                  <button onClick={enviar}>Submit</button>
                </div>

                
            </section>
            <div className='adminArea'>
                  <h3>Modo de administrador ativado! gerencie as entradas abaixo:</h3><br/><br/>
                  {listaReg.map((val) => {
                    return( <a>Nome: {val.nomeComp} | email: {val.email} | telefone: {val.telefone}
                    <input type = "text" id="upEmail" onChange={(e) => {
                      setEmailNovo(e.target.value)
                    }}></input>
                    <input type = "text" id="upTele" onChange={(e) => {
                      setTeleNovo(e.target.value)
                    }}></input>
                    <button onClick={() => {tualizarReg(val.nomeComp)}}>Update</button>
                    <button onClick={() => {deletarReg(val.nomeComp)}}>Delete</button><br/><br/></a> )
                  })}
                </div>
        </section>
        
        <script>
        
        </script>
    </div>
  );
}

export default App;
