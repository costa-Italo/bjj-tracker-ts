import './global.css';
import './@globalStyle.css'
import Header from './components/Header';
import InputName from './components/Input';
import TableStudents from './components/Table';



function App() {

  return (
    <main className='bg-var(--background)'>
      <Header />
      <InputName />
      <TableStudents />
  
    </main>
  )
}

export default App
