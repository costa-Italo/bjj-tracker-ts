import './global.css';
import './@globalStyle.css'
import Header from './components/Header';
import TableStudents from './components/Table';



function App() {

  return (
    <main className='bg-var(--background)'>
      <Header />
      <TableStudents />
  
    </main>
  )
}

export default App
