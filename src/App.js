import logo from './logo.svg';
import './App.css';
import Header from  './Components/Header.js';
import Present from './Components/Present.js';
import SideBar from './Components/SideBar.js';
import Content from './Components/Content.js';
import React from 'react'

function App() {
  const [language , setLanguage] = React.useState(0);

  const setLang = (index) => {
    console.log(index);
    setLanguage(index);
  }

  const languages = [
   {
      greetings : "Прошло 4 года с момента я начал свой путь програмирования, за это время я попробовал все сферы програмирования,решил не мало ошибок на своем пути. Програмирование всегда будет моей страстью",
      invite_button : "Пригласить",
      database : "Базы данных",
      payment : "Платежные системы",
      auto : "Автоматизация",
      lang : "язык",
      works : "работы",
      contact : "контакт",
      technologies : "Технологии и языки",
      send_gmail : "отправить приглашение",
      gmail_from : "от кого",
      gmail_message : "gmail сообщение"

   },
   {
      greetings : "Passed 4 years since i first time tried programming, i have tried myself in every fields of programming, solve a lot of errors on my path, programming will be my passion forever",

      invite_button : "Invite",
      database : "Data bases",
      payment : "Payment systems",
      auto : "automation",
      lang : "language",
      works : "works",
      contact : "contact",
      technologies : "Technologies and languages",
      send_gmail : "send invitation",
      gmail_from : "from",
      gmail_message : "gmail message"
   },
   {
      greetings : "Passé 4 ans depuis que j'ai essayé la programmation pour la première fois, je me suis essayé dans tous les domaines de la programmation,la programmation sera ma une passion pour toujours",

      invite_button : "Inviter",
      database : "bases de données",
      payment : "systèmes de paiement",
      auto : "automatisation",
      lang : "langue",
      works : "travail",
      contact : "contacter",
      technologies : "Technologies et langues",
      send_gmail : "envoyer une invitation",
      gmail_from : "auteur",
      gmail_message : "gmail message"
   }
  ]
  return (
    <div className="App">
    <div className="shadow">
      <Header lang={languages[language]} setLang={setLang} />
      <Present lang={languages[language]} />
      <Content lang={languages[language]} />
     </div> 
     
    </div>
  );
}

export default App;
