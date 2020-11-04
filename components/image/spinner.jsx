import S from '../../styles/components/Spinner.module.scss'

const Spinner = () => {
  return(
    <div className={S.body}>  
      <svg className={S.loader} viewBox="0 0 24 24">
        <circle className={S.loader__value} cx="12" cy="12" r="10" />
        <circle className={S.loader__value} cx="12" cy="12" r="10" />
        <circle className={S.loader__value} cx="12" cy="12" r="10" />
        <circle className={S.loader__value} cx="12" cy="12" r="10" />
        <circle className={S.loader__value} cx="12" cy="12" r="10" />
        <circle className={S.loader__value} cx="12" cy="12" r="10" />
      </svg>
    </div>
  )
}

export default Spinner