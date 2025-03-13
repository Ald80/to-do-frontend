import React, { Component, useState } from "react";
import RenderItems from './RenderItems';
import RenderTabList from './RenderTabList';
import CustomModal from "./CustomModal";

const todoItems = [
  {
    id: 1,
    title: "Go to Market",
    description: "Buy ingredients to prepare dinner",
    completed: true,
  },
  {
    id: 2,
    title: "Study",
    description: "Read Algebra and History textbook for the upcoming test",
    completed: false,
  },
  {
    id: 3,
    title: "Sammy's books",
    description: "Go to library to return Sammy's books",
    completed: true,
  },
  {
    id: 4,
    title: "Article",
    description: "Write article on how to use Django with React",
    completed: false,
  },
];

export default function App() {
  const [viewCompleted, setViewCompleted] = useState(false);
  const [todoList, setTodoList] = useState(todoItems);
  const [modal, setModal] = useState(false);
  const [activeItem, setActiveItem] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const toggle = () => {
    setModal(!modal);
  }

  const handleSubmit = (item) => {
    toggle();
    alert("save" + JSON.stringify(item));
  }

  const handleDelete = (item) => {
    alert("delete" + JSON.stringify(item));
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