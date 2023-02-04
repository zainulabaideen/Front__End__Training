import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Cards from './2 Cards/1/Cards'
import PricingPlans from './2 Cards/2/PricingPlans'
import Cardtwo from './2 Cards/3/Cardtwo'
import Main from './1 NavBar/1/tailwindcss Components/Main'
import Tailwindtwomain from './1 NavBar/2/tailwind2/Tailwindtwomain'
import TailwindthreeMain from './1 NavBar/3/tailwind3/TailwindthreeMain'
import TailwindFourmain from './1 NavBar/4/tailwind4/TailwindFourmain'
import Tailwindfivemain from './1 NavBar/5/tailwind5/Tailwindfivemain'
import MainPage from './MainPage'




const MainPageRouting = () => {
  return (
    <div>
        <BrowserRouter >
        <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/card1" element={<Cards />}/>
        <Route path="/card2" element={< PricingPlans />}/>
        <Route path="/card3" element={<Cardtwo />}/>
        <Route path="/navbar1" element={<Main />}/>
        <Route path="/navbar2" element={<Tailwindtwomain/>}/>
        <Route path="/navbar3" element={<TailwindthreeMain />}/>
        <Route path="/navbar4" element={<TailwindFourmain />}/>
        <Route path="/navbar5" element={<Tailwindfivemain />}/>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default MainPageRouting
