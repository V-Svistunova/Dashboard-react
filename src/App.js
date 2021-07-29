import s from './App.module.css';

// Components

import Headline from './components/headline/Headline';
import Title from './components/title/Title';
import Channel from './components/channel/Channel';
import News from './components/news/News';
import Item from './components/item/Item';

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

// News images

import image1 from './assets/images/news/image-1.png';
import image2 from './assets/images/news/image-2.png';
import image3 from './assets/images/news/image-3.png';

// App images

import logotype from './assets/images/logotype.png';
import icon1 from './assets/images/item/icon-1.svg'
import icon2 from './assets/images/item/icon-2.svg'
import icon3 from './assets/images/item/icon-3.svg'
import icon4 from './assets/images/item/icon-4.svg'
import icon5 from './assets/images/item/icon-5.svg'
import icon6 from './assets/images/item/icon-6.svg'
import icon7 from './assets/images/item/icon-7.svg'




function App() {
  return (
    <div className={s.app}>

      <header className={s.header}>
        <h1>hello</h1>
      </header>

      <aside className={s.sidebar}>
        <img className={s.logotype} src={logotype} alt="logotype" />
        <div className={s.items}>
          <div className={s.itemStart}>
            <Item style={{color: "#503E9D" , background: "rgba(80, 62, 157, 0.3)"}} name='1' color='#503E9D' sizeW='24' sizeH='23' className='icon1' icon={icon1} title="Home" />
            <Item name='2' color='#878787' sizeW='24' sizeH='24' className='icon2' icon={icon2} title="Explore" />
            <Item name='3' color='#878787' sizeW='18' sizeH='24' className='icon3' icon={icon3} title="Saved" />
            <Item name='4' color='#878787' sizeW='24' sizeH='24' className='icon4' icon={icon4} title="Subscriptions" />
            <Item name='5' color='#878787' sizeW='24' sizeH='19' className='icon5' icon={icon5} title="Messages" />
            <Item name='6' color='#878787' sizeW='24' sizeH='24' className='icon6' icon={icon6} title="Settings" />
          </div>
          <div className={s.itemEnd}>
            <Item name='7' color='#878787' sizeW='24' sizeH='24' className='7' icon={icon7} title="Logout" />
          </div>
        </div>
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
      <div className={s.news}>
        <News time="2:00 pm" labelText="FOX NEWS" title="Travellers to pay more than $2K, Trudeau says" image={image1} />
        <News time="6:15 pm" labelText="CNN NEWS" title="Myanmar’s military seizes control of country ov  er..." image={image2} />
        <News time="17:44 pm" labelText="BBC NEWS" title="Pressure builds for Biden to cancel other pipeline..." image={image3} />
      </div>
      </main>

    </div>
  );
}

export default App;
