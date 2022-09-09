import styles from './styles.module.scss'
import Link from 'next/link'

interface ParamButton {
  titulo: string
}



export function Button({ titulo }: ParamButton) {

  return (
    <Link  href="https://api.whatsapp.com/send?phone=556199492015&text=Ol%C3%A1%20Suely%2C%20eu%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20trabalho.">
      <button id="buttonZap" className={styles.button}>{titulo}</button>
    </Link>
  )
}