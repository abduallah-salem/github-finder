import DotLoader from 'react-spinners/DotLoader'

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red'
}

const Loader = ({ isLoading, inColor }) => {
  return (
    <div className="sweet-loading">
      <DotLoader
        color={inColor}
        loading={isLoading}
        cssOverride={override}
        size={150}
      />
    </div>
  )
}

export default Loader
