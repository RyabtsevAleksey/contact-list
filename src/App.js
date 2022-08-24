import './App.css';
import React from 'react';
import { Users } from './components/Users';
import { Success } from './components/Success';

// Задачи по проекту:
// 1.Задача получить данные с сервера и сделать верстку с данными из полученных объектов
// 2. Функция фильтрации из инпута
// 3.При нажатии на плюс контакт добавляется в отдельный массив/удаляется из него на минус
// 4.При нажатии отправить появляется блок успешной отправки
// 5. При отсутсвии нажатых контактов кнопка отправить не появляется
// 6. Кнопка назад перезагружает страницу



function App() {
// 1.Создаем хуки для получения и отрисовки данных о контактах
  const [users,setUsers] = React.useState([]);
  const [isLoading,setLoading] = React.useState(true);
  // 2.1 Создаем стейт для инпута поиска:
  const [searchValue,setSearchValue] = React.useState('');
  // 3.1 Создаем хук для приглашенных в отдельный список
  const [invites,setInvites] = React.useState([]);
  // 4.1 Хук для успешной отправки
  const [success,setSuccess] = React.useState(false);


  // 1.2.При первом рендере отправляем запрос на сервер
  React.useEffect(() =>{
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(json => setUsers(json.data))
    .catch(err => {
      console.warn(err);
      alert('ошибка при получении пользователей')
    })
    .finally(() => setLoading(false))
  },[])
    

  // 2.2 Создаем функцию
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  // 3.2 функция для включения в отдельный список добавленных
  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id ) => _id !== id))
    } else {
      setInvites((prev) => [...prev, id] )
    }
  }

  // 4.2 Создаем функцию для отправки контактов
  const onClickSendInvites = () => {
    setSuccess(true)
  }


// 1.3.Передаем в компонент полученный массив с объектами в качестве переменной из хука
// 2.3 передаем пропсом функцию полученных данных из инпут и Is из хука
// 4.3 Создаем условный рендеринг

  return (
    <>
      <div className="App">
        { success ? ( 
        <Success count={invites.length}  /> 
        ) : (
              <Users 
                items={users} 
                isLoading={isLoading} 
                searchValue={searchValue} 
                onChangeSearchValue={onChangeSearchValue} 
                invites={invites}
                onClickInvite={onClickInvite}
                onClickSendInvites={onClickSendInvites}
              />
            )
        }
      </div>
    </>
  );
}

export default App;





