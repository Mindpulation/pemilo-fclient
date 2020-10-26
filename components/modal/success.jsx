import s from '../../styles/components/Success.module.css'
import { FaCheckCircle } from 'react-icons/fa'

const Success = () => {
  return(
    <div className={s.outer}>
      <div className={s.card}>
        <FaCheckCircle/>
      </div>
    </div>
  )
}
export default Success