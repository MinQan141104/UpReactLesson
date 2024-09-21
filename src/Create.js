import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
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
        <button>Add Blog</button>
      </form>
    </div>
  );
}

export default Create;