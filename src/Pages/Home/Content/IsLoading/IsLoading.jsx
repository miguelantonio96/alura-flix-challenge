import './IsLoading.css'
import IsLoading from './IsLoading.gif'


export const Loading = () => {
  return (
    <div className='loading-container'>
        <img src={IsLoading} alt="loading" />
    </div>
  )
}
