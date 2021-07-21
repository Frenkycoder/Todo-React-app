// Підключаємо React та React DOM для роботи з віртуальним DOM Реакт
import React from 'react';
import ReactDOM from 'react-dom';
// Імпорт Арр
import App from './components/app';




// ReactDOM Перетворює React елементи в прості браузерні DOM елементи і рендерить їх на сторінці
ReactDOM.render(<App />, document.getElementById('root'));