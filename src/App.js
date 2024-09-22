import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path='*' element={<NotFound/>}/>
            //Nếu để path='*' ở cuối tức là ngoài các path dc nêu trên thì ngoại lệ sẽ
            // rơi vào đây. nếu để ở đầu nó sẽ nhận tất cả đường dẫn bất kì.
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
