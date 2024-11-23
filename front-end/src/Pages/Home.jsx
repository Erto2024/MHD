import './Home.css'
import "../Components/Header/Header"
import Header from '../Components/Header/Header'
import Loader from '../Components/Loader/Loader'

function Home() {

  return (
    <>
      <Header />
      <div className='main'>
        <div className='half first'>
          <Loader />
        </div>
        <div className='half second'>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe className="gmap_iframe" width="100%" frameBorder="0" scrolling="no" marginHeight="0" 
                marginWidth="0" src="https://maps.google.com/maps?width=580&amp;height=400&amp;hl=en&amp;q=Bratislava&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              </iframe>
            </div>
          </div>
      </div>
      </div>
    </>
  )
}

export default Home
