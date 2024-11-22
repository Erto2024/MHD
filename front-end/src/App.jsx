import './App.css'
import "./Header/Header"
import Header from './Header/Header'
import Loader from './Loader/Loader'

function App() {

  return (
    <>
      <Header />
      <div className='main'>
        <div className='half first'>
        <Loader />
        </div>
        <div className='half second'>
          <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=580&amp;height=400&amp;hl=en&amp;q=Bratislava&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div>
      </div>
      </div>
    </>
  )
}

export default App
