import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

// Core pages
import Home from './pages/Home'
import PortableToilets from './pages/services/PortableToilets'
import RestroomTrailers from './pages/services/RestroomTrailers'
import TemporaryFencing from './pages/services/TemporaryFencing'
import StorageContainers from './pages/services/StorageContainers'
import ShowerTrailers from './pages/services/ShowerTrailers'
import RollOffDumpsters from './pages/services/RollOffDumpsters'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import FAQ from './pages/FAQ'

// Location pages — Bend, OR
import PortaPottyBend from './pages/locations/bend/PortaPottyBend'
import RestroomTrailerBend from './pages/locations/bend/RestroomTrailerBend'
import TemporaryFencingBend from './pages/locations/bend/TemporaryFencingBend'

// Location pages — Portland, OR
import PortaPottyPortland from './pages/locations/portland/PortaPottyPortland'
import RestroomTrailerPortland from './pages/locations/portland/RestroomTrailerPortland'
import TemporaryFencingPortland from './pages/locations/portland/TemporaryFencingPortland'

// Location pages — Seattle, WA
import RestroomTrailerSeattle from './pages/locations/seattle/RestroomTrailerSeattle'
import TemporaryFencingSeattle from './pages/locations/seattle/TemporaryFencingSeattle'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portable-toilets" element={<PortableToilets />} />
          <Route path="restroom-trailers" element={<RestroomTrailers />} />
          <Route path="temporary-fencing" element={<TemporaryFencing />} />
          <Route path="storage-containers" element={<StorageContainers />} />
          <Route path="shower-trailers" element={<ShowerTrailers />} />
          <Route path="roll-off-dumpsters" element={<RollOffDumpsters />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="porta-potty-rental-bend-or" element={<PortaPottyBend />} />
          <Route path="restroom-trailer-rental-bend-or" element={<RestroomTrailerBend />} />
          <Route path="temporary-fencing-rental-bend-or" element={<TemporaryFencingBend />} />
          <Route path="porta-potty-rental-portland-or" element={<PortaPottyPortland />} />
          <Route path="restroom-trailer-rental-portland-or" element={<RestroomTrailerPortland />} />
          <Route path="temporary-fencing-rental-portland-or" element={<TemporaryFencingPortland />} />
          <Route path="restroom-trailer-rental-seattle-wa" element={<RestroomTrailerSeattle />} />
          <Route path="temporary-fencing-rental-seattle-wa" element={<TemporaryFencingSeattle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
