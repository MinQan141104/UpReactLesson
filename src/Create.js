import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Cuong');
  const [isPending, setIsPending] = useState(false);

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