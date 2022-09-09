import styles from './styles.module.scss'

import cíliosUm from './../../img/híbrido-210.jpg'
import cíliosDois from './../../img/mega-volume-280.jpg'
import cíliosTres from './../../img/volume-russo-230.jpg'
import cíliosQuatro from './../../img/volume-brasileiro-210.jpg'

import DepoimentoPrimeiro from './../../img/insta_pc.png'

import DepoimentoCel from './../../img/int_cel.jpg'



import Image from 'next/image'
import { Button } from '../button'
import { useEffect, useState } from 'react'
import { Tecnica } from '../técnica/tecnica'
import Link from 'next/link'


export default function ExemploLashDesigner() {

  const [width, setWidth] = useState<number>(0)



  useEffect(() => {

    const largura = window.innerWidth;

    setWidth(largura)
  }, [])


  return (
    <div className={styles.Info}>

      <h2 style={{ "textAlign": "center" }}>SUELY LASH DESIGNER</h2>

      <h4 style={{ "textAlign": "center", color: "red" }}>LEIA COM ATENÇÃO</h4>

      <p style={{ "textAlign": "center", "marginLeft": "20px", "marginRight": "20px" }}>Não se preocupe com o peso dos seus cílios e nem com a cola que é usada, pois, todo o material usado(cola e cílios) são de ótima qualidade e não causam irritação ou incomodo nos cílios.</p>

      <div className={styles.ImagensCílios}>
        <div className={styles.divCílios}>
          <Image src={cíliosUm} width={170} height={170} />
          {/* <h2>Hibrido <br />210 R$</h2>
          <Link href="https://api.whatsapp.com/send?phone=55556199492015&text=Ol%C3%A1!%20Estou%20interessada%20no%20Hibrido.%20Voc%C3%AA%20pode%20me%20ajudar%3F">
            <button>WHATSAPP</button>
          </Link> */}
        </div>
        <div className={styles.divCílios}>
          <Image src={cíliosDois} width={170} height={170} />
          {/* <h2>Mega volume <br />280 R$</h2>
          <Link href="https://api.whatsapp.com/send?phone=55556199492015&text=Ol%C3%A1!%20Estou%20interessada%20no%20Mega%20Volume.%20Voc%C3%AA%20pode%20me%20ajudar%3F">
            <button>WHATSAPP</button>
          </Link> */}
        </div>
        <div className={styles.divCílios}>
          <Image src={cíliosTres} width={170} height={170} />
          {/* <h2>Volume russo <br />230 R$</h2>
          <Link href="https://api.whatsapp.com/send?phone=55556199492015&text=Ol%C3%A1!%20Estou%20interessada%20no%20Volume%20Russo.%20Voc%C3%AA%20pode%20me%20ajudar%3F">
            <button>WHATSAPP</button>
          </Link> */}
        </div>
        <div className={styles.divCílios}>
          <Image src={cíliosQuatro} width={170} height={170} />
          {/* <h2>Volume Brasileiro <br />210 R$</h2>
          <Link href="https://api.whatsapp.com/send?phone=55556199492015&text=Ol%C3%A1!%20Estou%20interessada%20no%20Volume%20Brasileiro.%20Voc%C3%AA%20pode%20me%20ajudar%3F">
            <button>WHATSAPP</button>
          </Link> */}
        </div>
      </div>



      <Tecnica />

      <h2 style={{ "textAlign": "center" }}>LOCALIZAÇÃO</h2>

      <div className={styles.localização}>
        <div className={styles.h2DivLocalização}>
          <h2>Centro empresarial parque Brasília</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d704.3027908291701!2d-47.91173929841206!3d-15.795009187634223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a8f94a13fe5%3A0x1c1ae579cce49c2b!2sCentro%20Empresarial%20Parque%20Bras%C3%ADlia!5e1!3m2!1spt-BR!2sbr!4v1626711319204!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
        </div>
      </div>

      <h2 style={{ "textAlign": "center" }}>DEPOIMENTOS</h2>
      <h3 style={{ "textAlign": "center" }}>NOSSOS CLIENTES NO INSTAGRAM</h3>

      <div className={styles.depoimentos}>
        {
          width >= 750 ? <Image src={DepoimentoPrimeiro} /> : <Image src={DepoimentoCel} />
        }
      </div>

      <div className={styles.Agendamentos}>
        <h2>AGENDAMENTOS</h2>
        <h3>CONFIRME EM NOSSO WHATSAPP A DISPONIBILIDADE</h3>

        <Button titulo="WHATSAPP" />
      </div>

    </div>
  )
}