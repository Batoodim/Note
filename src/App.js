import React from 'react';


import List from './components/List/List'

function App() {
  return (

      <div className='todo'>
        <div className="todo__sidebar">

            <List
                items = {[
                    {
                        icon: null,
                        name: 'Все задачи',
                        active: true

                    }
                ]}
            />

            <List
                items = {[

                    {
                        color: 'green',
                        name: 'Покупки'
                    },
                    {
                        color: 'blue',
                        name: 'Фронтенд'
                    },
                    {
                        color: 'pink',
                        name: 'Фильмы и сериалы'
                    },

                ]}
            />

        </div>
      </div>
  );
}

export default App;
