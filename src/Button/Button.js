import React from 'react'
import style from './Button.module.css';

export default function Button({btn,clickEvent}) {
  return (
    <button type='button' className={style.calulatorBtn} onClick={clickEvent} >{btn}</button>
  )
}
