import { useState } from "react";

function App() {
  // todo
  const [toDo, setToDo] = useState("");
  // todo를 담을 리스트 todos
  const [toDos, setToDos] = useState([]);
  // input의 입력을 감지
  const onChange = (event) => setToDo(event.target.value);
  // submit 시 event발생 막고 새로운 todo를 todos 리스트에 추가
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  console.log(toDos);
  return (
    <div>
      <h1>My Todos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write your to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
