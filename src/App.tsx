import './global.css';
import './@globalStyle.css'
import Header from './components/Header';
import InputName from './components/Input';

function App() {

  return (
    <main className='bg-var(--background)'>
      <Header />
      <InputName />
    </main>
  )
}

export default App
