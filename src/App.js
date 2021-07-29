import s from './App.module.css';
import Headline from './components/headline/Headline';
import Title from './components/title/Title';
import Channel from './components/channel/Channel';

// Headlines images

import img1 from './assets/images/headline/img-1.png';
import img2 from './assets/images/headline/img-2.png';
import img3 from './assets/images/headline/img-3.png';
import img4 from './assets/images/headline/img-4.png';
import img5 from './assets/images/headline/img-5.png';
import img6 from './assets/images/headline/img-6.png';

// Channels images

import logo1 from './assets/images/channel/logo-1.png';
import logo2 from './assets/images/channel/logo-2.png';
import logo3 from './assets/images/channel/logo-3.png';
import logo4 from './assets/images/channel/logo-4.png';
import logo5 from './assets/images/channel/logo-5.png';
import logo6 from './assets/images/channel/logo-6.png';


function App() {
  return (
    <div className={s.app}>
      <header className={s.header}>
        <h1>hello</h1>
      </header>
      <aside className={s.sidebar}>
        <h1>hi!</h1>
      </aside>
      <main className={s.main}>
      <Title title="Explore Channels" />
      <div className={s.channels}>
        <Channel logo={logo1} title="FOX NEWS" />
        <Channel logo={logo2} title="CW6 NEWS" />
        <Channel logo={logo3} title="CW6 NEWS" />
        <Channel logo={logo4} title="AL JAZEERA" />
        <Channel logo={logo5} title="BBC NEWS" />
        <Channel logo={logo6} title="CNN NEWS" />
      </div>
      <Title title="Today’s Headlines" />
      <div className={s.headlines}>
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
