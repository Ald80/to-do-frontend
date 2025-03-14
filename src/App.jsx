import React, { useEffect, useState } from "react";
import RenderItems from './RenderItems';
import RenderTabList from './RenderTabList';
import CustomModal from "./CustomModal";
import axios from "axios";

export default function App() {
  const [viewCompleted, setViewCompleted] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [modal, setModal] = useState(false);
  const [activeItem, setActiveItem] = useState({});

  useEffect(() => {
    const getData = async () => {
      await refreshList();
    }

    getData();
  }, [])

  const refreshList = async () => {
    axios.get('/api/todos/')
    .then((res) => {
      setTodoList(res.data)
    })
    .catch((err) => console.log(err));
  }

  const toggle = () => {
    setModal(!modal);
  }

  const handleSubmit = (item) => {
    toggle();

    if (item.id) {
      axios
        .put(`api/todos/${item.id}/`, item)
        .then(() => refreshList());
      return;
    }
    axios
      .post("/api/todos/", item)
      .then(() => refreshList());
    alert("save" + JSON.stringify(item));
  }

  const handleDelete = (item) => {
    axios
      .delete(`/api/todos/${item.id}/`) 
      .then(() => refreshList());
  }

  const createItem = () => {
    const item = { title: "", description: "", completed: false };
    setActiveItem(item);
    setModal(!modal);
  }

  const editItem = (item) => {
    setActiveItem(item);
    setModal(!modal);
  }

  const renderItems = { 
    viewCompleted: viewCompleted, 
    todoList: todoList,   
    editItem: editItem,  
    handleDelete: handleDelete,
  }
  return (
      <main className='container'>
        <h1 className='text-white text-uppercase text-center my-4'>
          Todo app
        </h1>
        <div className='row'>
          <div className='col-md-6 col-sm-10 mx-auto p-0'>
            <div className='card p-3'>
              <div className='mb-4'>
                <button 
                  className='btn' 
                  style={{ backgroundColor: 'purple', color: 'white' }}
                  onClick={createItem}
                >
                  Add task
                </button>
              </div>
              <RenderTabList
                setViewCompleted={setViewCompleted}
                viewCompleted={viewCompleted}
              />  
              <ul className='list-group list-group-flush border-top-0'>
                <RenderItems 
                  renderItems={renderItems}
                />
              </ul>
            </div>
          </div>
        </div>
        {modal ? (
          <CustomModal 
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            toggle={toggle}
            onSave={handleSubmit}
          />
          ): null}
      </main>
  );
}