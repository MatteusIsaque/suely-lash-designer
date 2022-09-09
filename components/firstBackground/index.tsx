import Modelo from './../../img/Suely.png'
import Image from 'next/image'
import styles from "./styles.module.scss"


import { useEffect, useState } from 'react'


import PrimeiraImage from './../../img/logos.png'
import { Button } from '../button'



export default function FormAndWomen() {

  const [width, setWidth] = useState<number>(0)


  useEffect(() => {

    const largura = window.innerWidth;

    setWidth(largura)
  }, [])


  return (
    <div className={styles.backgroundFundoImage}>
      <div className={styles.divFormAndWomen}>
        <div className={styles.Modelo}>
          <Image src={Modelo} />
        </div>

        <div>
          {
            width <= 768 && <div className={styles.PrimeiroCilios}>
              <Image src={PrimeiraImage} layout="responsive" />
            </div>
          }
          <h1>

          ESPECIALISTA EM DESIGNER<br/> 
          DE CÍLIOS EM BRASILIA
          </h1>
          <h3>
            EXTENÇÃO DE CÍLIOS - FIO A FIO<br />
            LIFTING E COLORAÇÃO DECÍLIOS
          </h3>
          <p>
            Trabalho há mais de 3 anos como lash<br />
            designer, atendendo diariamente 4 clientes.<br />
            Quase 4 mil atendimentos já feitos.
          </p>


          <Button titulo="WHATSAPP" />

        </div>

      </div>
    </div>
  )
}