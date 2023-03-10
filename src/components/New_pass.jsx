import React from 'react';
import './New_pass.css'
import exit from '../assets/exit.png'

function New_pass(props) {
    return (
        <div>
            <div className='container'>
            <h2>Восстановить пароль</h2>
            <div className='exit'>
                <img src={exit} alt="" />
            </div>
            <div className='new_password'>
                <h4>Ввести новый пароль</h4>
                <input type="text" placeholder='Введите пароль'/>
            </div>
            <div className='password'>
                <h4>Подтвердить новый пароль</h4>
                <input type="text" placeholder='Введите пароль'/>
            </div>
            <button className='Sign_in'>Войти</button>
        </div>
        </div>
    );
}

export default New_pass;