import React, { useRef, useState } from 'react'
import cls from './Home.module.css'
import frame1 from './assets/png/frame2.png'
import image2 from './assets/png/Изображение без фона.png'
import heart2 from './assets/png/heart2.png'
import image3 from './assets/png/leaf.png'
import image4 from './assets/png/leaf2.png'
import soundOn from './assets/png/sound-high.svg'
import soundOff from './assets/png/sound-off.svg'
import frame4 from './assets/png/frame4.png'
import frame5 from './assets/png/frame5.png'
import frame6 from './assets/png/frame6.png'
import rouse4 from './assets/png/rouse4.png'
import rouse8 from './assets/png/rouse8.png'
import rouse9 from './assets/png/rouse9.png'
import rouse10 from './assets/png/rouse10.png'
import footerImage from './assets/png/footer.png'
import envelope from './assets/png/envelope.png'
import leaf3 from './assets/png/leaf3.png'
import { ReactComponent as Farm } from './assets/png/farm.svg'
import { ReactComponent as Mark } from './assets/png/mark.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from './components/Slider/Slider'

AOS.init();;

const Home = () => {
  const [sound, setSound] = useState(false)
  const [done, setDone] = useState(false)
  const [presence, setPresence] = useState('')
  const [transfer, setTransfer] = useState('')
  const [form, setForm] = useState({
		name: '',
		presence: '',
		transfer: '',
	})


	const handleSubmit = () => {
			const formData = new FormData()
			formData.append('entry.2004231218', form.name)
			formData.append('entry.445484576', form.presence)
			formData.append('entry.1267503018', form.transfer)
      setForm({
        name: '',
        presence: '',
        transfer: '',
      })
      setDone(true)
      setTimeout(() => {
        setDone(false)
      }, 2500);
			fetch(
				`https://docs.google.com/forms/d/e/1FAIpQLSfgejS4hQbsT4bibghzd7EmtywPtv3G7wqLWLwD5qiom3KWkQ/formResponse`,
				{
					method: 'POST',
					body: formData,
					mode: 'no-cors',
				}
			)
				.then(response => {
					console.log('Form submitted successfully', response)
				})
				.catch(error => {
					console.error('Error submitting form', error)
				})
        
	}
	const handleChange = event => {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

  const playSound = () => {
    setSound(!sound)
    !sound && handlePlay()
    sound && handlePause()
  }
  const audioRef = useRef(null);

  const handlePlay = () => {
      audioRef.current.play();
  };

  const handlePause = () => {

      audioRef.current.pause();
  };

  return (
    <div className={cls.container}>
      <div className={cls.web}><h2 style={{textAlign: 'center', margin: '24px 0'}}>Откройте с телефона</h2></div>
      <div className={cls.mobile}>
        <div>
        {/* <lottie-player src="./assets/gif/Comp 1.json" background="transparent"  speed="1" loop autoplay></lottie-player> */}
          <img className={cls.imgOne} src={frame1} alt="frame1" />
          <div className={cls.info}>
            <p className={cls.month}>Июнь</p>
            <div className={cls.day}>
              <div><span>Суббота</span></div>
              <p>22</p>
              <div><span>17:00</span></div>
            </div>
            <p>2024</p>
          </div>
          <p className={cls.title}>Александр<br/>& <br/>Екатерина</p>
        </div>
        {/*  */}
          <div className={cls.blockTwo}>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="0"  data-aos-offset="0"><h2 className={cls.love}>Влюбись в меня, если осмелишься </h2></div>
              <div >
                <div data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="500"><img className={cls.leaf} src={image3} alt="icons"/></div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="0"  data-aos-offset="0"><img className={cls.heart} src={image2} alt="icons" /></div>
                <div data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="0"> <img className={cls.leaf2} src={image4} alt="icons" /></div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="0"  data-aos-offset="0"> <p>Включи музыку <br/> для атмосферы</p></div>
                <div className={cls.sound} onClick={playSound}  data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="0"  data-aos-offset="0">
                  {sound && <img className={cls.soundOn} src={soundOn} alt="sound on" /> }
                  {!sound && <img className={cls.soundOff} src={soundOff} alt="sound off" />}
                  <audio ref={audioRef} src="https://dl.dropboxusercontent.com/scl/fi/pbkr1e9ez5v8tuok1lvpw/Sumerki.mp3?rlkey=2xjnlc3v4zjcag2tfooluaq0u&st=045zz91e&dl=0"></audio>
                </div>
                <div className={cls.line} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="0"  data-aos-offset="0"></div>
                <div className={cls.infos} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-delay="0" data-aos-offset="0">
                  <p>Будем счастливы видеть вас <br/> на нашей свадьбе!</p>
                  <p>Один день в этом году будет <br/> для нас особенным! <br/> Мы хотим провести его <br/> в кругу близких и друзей! </p>
                </div>
              </div>
              <div className={cls.bottom}>
                <div className={cls.rouse} data-aos="fade-up-right" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-delay="0"  data-aos-offset="0">
                  <img src={frame5} alt="frame 5" />
                </div>
                <div className={cls.line} style={{marginTop: '40px'}} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-delay="0"  data-aos-offset="0"></div>
                <div className={cls.rouse2} data-aos="fade-left" data-aos-duration="2000" data-aos-delay="300" data-aos-offset="0">
                  <img src={frame4} alt="frame 4" />
                </div>
              </div>
          </div>
          <div className={cls.blockThree}>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="0"  data-aos-offset="0"><img className={cls.frame} src={frame6} alt="icons" /></div>
            <div className={cls.infos} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-delay="0"  data-aos-offset="0">
              <h2 className={cls.blockThree__title}>RANCHO CAMP</h2>
              <p className={cls.blockThree__subtitle}>Алмазбека Сулейманова, 68а, с. Арашан</p>
              <a href='https://2gis.kg/bishkek/geo/70000001061779533' target="_blank" rel="noreferrer"><button className={cls.btn}>Схема проезда</button></a>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-delay="0"  data-aos-offset="0" className={cls.farm}><Farm /></div>
             <div className={cls.text} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-delay="0"  data-aos-offset="0">
                <p className={cls.text1}>Сбор гостей</p>
                <p className={cls.text2}>17:00</p>
                <p className={cls.text3}>
                  Так как локация находится за <br/>
                  пределами города, мы предоставим <br/>
                  трансфер. Оставьте свой <br/>
                  автомобиль дома, чтобы отдых <br/>
                  на нашей свадьбе был максимально <br/>
                  комфортным для вас.
                </p>
             </div>
          </div>
          <div className={cls.blockFour}>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="0"  data-aos-offset="0" className={cls.rouse4}><img src={rouse4} alt="icons" /></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="0"  data-aos-offset="0" className={cls.mark}> <Mark /> </div>
          <div className={cls.text4} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-delay="0"  data-aos-offset="0">
            <p>Точка сбора</p>
            <p>16:00</p>
            <p>Г. Бишкек Т.ц. “Tommy Mall”</p>
          </div>
          <div className={cls.blockFour__bottom}>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="0"  data-aos-offset="0" className={cls.rouse8}><img src={rouse8} alt="icons" /></div>
            <div className={cls.line} style={{marginTop: '40px'}} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-delay="0"  data-aos-offset="0"></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="0"  data-aos-offset="0" className={cls.rouse9}><img src={rouse9} alt="icons" /></div>
          </div>
          </div>
          <div className={cls.blockFive}>
            <div className={cls.blockFive__top} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-delay="0"  data-aos-offset="0">
              <h2 className={cls.blockFive__title}>DRESS CODE</h2>
              <p className={cls.blockFive_subtitle}>Black tie</p>
              <p className={cls.blockFive_text}>Палитра</p>
              <div><img className={cls.heart2} src={heart2} alt="icons" /></div>
            </div>
            <div className={cls.sliders}>
              <div data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="0" className={cls.rouse10}><img src={rouse10} alt="icons" /></div>
              <Slider />
              <div data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="0" className={cls.rouse11}><img src={rouse10} alt="icons" /></div>
              <h3 className={cls.text5} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-delay="0"  data-aos-offset="0">
                Мы не хотим обременять вас <br/>
                поиском подарка, поэтому будем <br/>
                благодарны вкладу в бюджет <br/>
                нашей молодой семьи.<br/>
              </h3>
              <div className={cls.envelope} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-delay="0" data-aos-offset="0"><img src={envelope} alt="icons" /></div>
              <div className={cls.leaf3} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-delay="500" data-aos-offset="0"><img src={leaf3} alt="icons" /></div>
            </div>
          </div>
          {done && 
            <div className={cls.done}>
              <div>
                <h3>Сообщение отправлено</h3>
              </div>
            </div>
          }
          
          <div className={cls.forms}>
            <h2 className={cls.forms__title}>RSVP</h2>
            <h3 className={cls.forms__subtitle}>Вход 18+</h3>
            <div className={cls.form}>
              <div className={cls.name}>
                <p>Фамилия и Имя</p>
                <input type="text" name='name' autoComplete='off' onChange={(e) => handleChange(e)}/>
              </div>
              <div className={cls.presence}>
                <p>Планируете ли вы присутствовать?</p>
                <div><input onClick={() => setForm({ ...form, presence: 'Да' })} type="radio" name='presence' /><span>Да</span></div>
                <div><input onClick={() => setForm({ ...form, presence: 'Нет' })} type="radio" name='presence' /><span>Нет</span></div>
                <div><input onClick={() => setForm({ ...form, presence: 'Сообщу лично попозже' })} type="radio" name='presence' /><span>Сообщу лично попозже</span></div>
              </div>
              <div className={cls.transfer}>
                <p>Потребуется ли вам трансфер?</p>
                <div><input onClick={() => setForm({ ...form, transfer: 'Да' })} type="radio" name='transfer' /><span>Да</span></div>
                <div><input onClick={() => setForm({ ...form, transfer: 'Нет' })} type="radio" name='transfer' /><span>Нет</span></div>
              </div>
              <div className={cls.btn}>
                <button onClick={handleSubmit}>Отправить</button>
              </div>
              <div className={cls.line} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="0"  data-aos-offset="0"></div>
            </div>
          </div>
          <div className={cls.footer}>
             <div className={cls.text7}  data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-delay="0"  data-aos-offset="0">
              <p>По любым вопросам вы можете <br/> обращаться к нашему <br/> организатору:</p>
                <h3>Ислам</h3>
                <a href='https://t.me/qwerty_702' target="_blank" rel="noreferrer"><div><span>Телеграм</span></div></a>
                <a href='https://api.whatsapp.com/send/?phone=996702189214&text&type=phone_number&app_absent=0' target="_blank" rel="noreferrer"><div><span>WhatsApp</span></div></a>
             </div>
            <img src={footerImage} alt="footer" />
          </div>
        </div>
    </div>
  )
}

export default Home