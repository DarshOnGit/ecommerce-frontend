import {Header} from '../Components/Header.jsx';
import './NotFoundPage.css'


export function NotFound(){
  return(
    <>
      <title>Page Not Found</title>
      <Header />
      <h2 className='not-found-message'>Error 404 Page not found </h2>
    </>
    
  )
}