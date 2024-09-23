import {Title} from './Title.jsx'
import {ProductsTab} from './ProductsTab.jsx'
import './App.css'

let data = [
  {title : "Logitech MX Mater", features : ["8000 DPI", "5 Programmable Buttons"], price : [12495, 8999]},
  {title : "Apple Pencil (2nd Gen)", features : ["Intutive Touch Surface", "Designed For iPad Pro"], price : [11900, 9199]},
  {title : "Zebronics", features : ["Designed For iPad Pro", "Intutive Touch Surface"], price : [1599, 899]},
  {title : "Petronics Toad", features : ["Wireless Mouse 2.4GHz", "Optical Orientation"], price : [599, 278]}
]

function App() {
  return (
    <div className='App'>
      <Title />
      <ProductsTab data={data} />
    </div>
  )
}

export default App;