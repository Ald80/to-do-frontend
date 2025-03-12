import React from 'react';

export default function RenderItems ({viewCompleted, todoList}) {
    const newItems = todoList.filter(
        (item) => item.completed == viewCompleted
    );

    return newItems.map((item) => (
        <li
            key={item.id}
            className='list-group-item d-flex justify-content-between align-items-center'
        >
            <span
                className={`todo-title mr-2 ${
                    viewCompleted ? 'completed-todo' : ''    
                }`}
                title={item.description}
            >
                {item.title}
            </span>
            <span>
                <button
                  className='btn btn-secondary me-2'
                >
                  Edit
                </button>
                <button
                  className='btn btn-danger'
                >
                  Delete
                </button>
            </span>
        </li>
    ));
}