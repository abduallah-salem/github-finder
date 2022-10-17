import { useContext } from 'react'
import AlertContext from '../context/alert/AlertContext'
import { BiError } from 'react-icons/bi'
import { motion, AnimatePresence } from 'framer-motion'

function Alert() {
  const { alert } = useContext(AlertContext)
  if (alert !== null) {
    console.log(alert.type)
  }

  return (
    <AnimatePresence>
      {alert !== null && (
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{
            duration: 1,
            type: 'spring',
            default: { ease: 'easeOut' }
          }}
          className={`alert ${
            alert.type === `error` ? `alert-error` : `alert-warning`
          } shadow-lg absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2 w-fit z-50`}
        >
          {alert.type === `error` && <BiError />}
          <span>
            <strong>{alert.msg}</strong>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default Alert
