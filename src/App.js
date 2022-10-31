import { useState } from 'react';
import {marked} from 'marked'
import './App.css';

// a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text

function App() {
  const [text, setText] = useState(`
  # h1
  ## h2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  - First item
  - Second item
  - Third item
  > blockquote
  ![alt text](image.jpg)
  **bold text**
  `)
  marked.setOptions({
    breaks: true
  })
  return (
    <div className="App">
      <h1 id="title">Markdown Previewer</h1>
      <a class="btn btn-info" id="link" href="https://github.com/fedeshirolamy/Markdown-Previewer">Code</a>
      <div>
        <textarea id="editor" onChange={(e) => {
          setText(e.target.value);
        }}
          value={text}
        ></textarea>
      </div>
      <div id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
      >
      </div>
    </div>
  );
}

export default App;
