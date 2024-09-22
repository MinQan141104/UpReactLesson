import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Cuong');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};
    
    setIsPending(true);
    fetch('http://localhost:8000/blogs', {
      method: 'Post',
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false);
      console.log('new blog added')
      // history.go(-1); 
      navigate(-1);
      //công dụng là nếu đang thao tác ở trang nào, khi xong sẽ quay về trang trước đó ở.
      //ví dụ: vào 1 bài viết và tạo 1 bài viết ở đó.Khi xong sẽ quay về bài viết đang truy cập
      //chứ ko phải ở yên chỗ tạo bài viết
    })
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title: </label>
        <input type="text"
         required 
         value={title}
         onChange={(e) => setTitle(e.target.value)}/>
        <label>Blog Body: </label>
        <textarea required
        value={body}
        onChange={(e) => setBody(e.target.value)}>
        </textarea>
        <label>Blog Author: </label>
        <select value={ author }
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Quan">Quan</option>
          <option value="Cuong">Cuong</option>
        </select>
        { isPending && <button disabled>Adding Blog...</button>}
        {!isPending && <button>Add Blog</button>}
      </form>
    </div>
  );
}

export default Create;