import { CotizadorProvider } from './context/CotizadorProvider'
import AppSeguro from './components/AppSeguro'

const App = () => {

  return (
    <CotizadorProvider>
        <AppSeguro />
    </CotizadorProvider>
  )
}

export default App