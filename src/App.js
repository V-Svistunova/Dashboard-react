import './App.css';
import Headline from './components/headline/Headline';
import Title from './components/title/Title'

import img1 from './assets/images/headline/img-1.png';
import img2 from './assets/images/headline/img-2.png';
import img3 from './assets/images/headline/img-3.png';
import img4 from './assets/images/headline/img-4.png';
import img5 from './assets/images/headline/img-5.png';
import img6 from './assets/images/headline/img-6.png';



function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>hello</h1>
      </header>
      <aside className="sidebar">
        <h1>hi!</h1>
      </aside>
      <main className="main">
      <Title title="Explore Channels" />

      <Title title="Today’s Headlines" />
      <div className="headlines">
        <Headline likes="10.8k" dislikes="1.4k" labelText="BBC NEWS" time="11:25 pm" thumbnail={img1} title="Ontario Liberal leadership" />
        <Headline likes="10.4k" dislikes="3.4k" labelText="FOX NEWS" time="2:00 pm" thumbnail={img2} title="Hate speech vs free speech" />
        <Headline likes="20.8k" dislikes="1.1k" labelText="AL JAZEERA" time="1:59 pm" thumbnail={img3} title="Victim of Scarborough" />
        <Headline likes="0k" dislikes="20k" labelText="ABC NEWS" time="36:14 pm" thumbnail={img4} title="Mother who left her baby" />
        <Headline likes="9.5k" dislikes="1.4k" labelText="CW6 NEWS" time="9:20 pm" thumbnail={img5} title="Mother of Stefanie Rengel" />
        <Headline likes="100.2k" dislikes="1.4k" labelText="CNN NEWS" time="10:05 pm" thumbnail={img6} title="World Cup: Popular items" />
      </div>
      <Title title="Featured News" />
      </main>
    </div>
  );
}

export default App;
