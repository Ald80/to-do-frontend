import React from 'react';

export default function RenderItems ({ renderItems }) {
    const newItems = renderItems.todoList.filter(
        (item) => item.completed == renderItems.viewCompleted
    );

    return newItems.map((item) => (
        <li
            key={item.id}
            className='list-group-item d-flex justify-content-between align-items-center'
        >
            <span
                className={`todo-title mr-2 ${
                    renderItems.viewCompleted ? 'completed-todo' : ''    
                }`}
                title={item.description}
            >
                {item.title}
            </span>
            <span>
                <button
                  className='btn btn-secondary me-2'
                  onClick={() => renderItems.editItem(item)}
                >
                  Edit
                </button>
                <button
                  className='btn btn-danger'
                  onClick={() => renderItems.handleDelete(item)}
                >
                  Delete
                </button>
            </span>
        </li>
    ));
}