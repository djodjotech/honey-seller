// document.addEventListener('DOMContentLoaded', () => {
//     const content = document.querySelector('.content');
//     const initialContent = document.querySelector('.initial-content');
//     const showMoreBtn = document.querySelector('.show-more');
//     const menuItems = document.querySelectorAll('.menu h1');
//     menuItems.forEach(item => {
//         item.addEventListener('click', selectMenuItem);
//     })

//     showMoreBtn.addEventListener('click', showContent);

//     function selectMenuItem(e) {
//         menuItems.forEach(item => {
//             item.addEventListener('click', selectMenuItem);
//             item.classList.remove('selected-menu-item');
//             if (e.target.id === item.id) {
//                 item.classList.add('selected-menu-item');
//             }
//         });
//     }

//     function showContent() {
//         initialContent.style.display = 'none';
//         content.style.display = 'flex';
//         const homeItem = document.querySelector('.menu #home');
//         homeItem.classList.add('selected-menu-item');
//     }

    
// })
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

window.addEventListener('DOMContentLoaded', () => {
    ReactDOM.hydrate(
        <App />,
        document.getElementById('ssr-app')
    ); 
}); 