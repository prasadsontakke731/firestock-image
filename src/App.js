
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { photos } from './utils/data';
import UploadForm from './components/UploadForm';

function App() {
  const [count, setCount] = useState()
  const [input, setInput] = useState({ title: null, file: null, path: null })
  const [items, setItems] = useState(photos)
  const [isCollapse, collapse] = useState(false)
  const togggle = () => collapse(!isCollapse)

  const handleOnChange = (e) => {
    if (e.target.name === "file") {

      setInput({ ...input, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0]) })
    } else {
      setInput({ ...input, title: e.target.value })
    }
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setItems([input.path, ...items])
    setInput({ title: null, file: null, path: null })
    collapse(false)
  }
  useEffect(() => {
    setCount(`You Have ${items.length} Image${items.length > 1 ? "s" : ""}`)
  }, [items])
  return (

    <>
      <Navbar />
      <div className="container text-center mt-5">
        <button className='btn btn-success float-end' onClick={togggle}>{isCollapse ? "Close" : "+ add"}</button>
        <div className="clearfix mb-4"></div>
        <UploadForm
          isVisible={isCollapse}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
          input={input}
        />
        {count}
        <h1>Gallery</h1>
        <div className="row">
          {
            items.map((photo) => <Card src={photo} />)
          }
        </div>
      </div>
    </>
  );
}

export default App;
