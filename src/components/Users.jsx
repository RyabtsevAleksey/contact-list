import React from "react";
import { Skeleton } from "./Skeleton";
import { User } from "./User";

// 1.4.получили данные в качестве пропс
// 2.4 принимаем в качестве пропс

export const Users = ({
  items,
  isLoading,
  searchValue,
  onChangeSearchValue,
  invites,
  onClickInvite,
  onClickSendInvites,
}) => {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        {/* 2.5 передаем в инпут полученные пропсы (контролируемый компонент) */}
        <input
          type="text"
          value={searchValue}
          onChange={onChangeSearchValue}
          placeholder="Найти пользователя..."
        />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {/*1.5. полученный массив с объектами мапим и передаем в компонент user для отрисовки */}
          {/* 2.6 Добавляем фильтр в объекте по полученным данным из инпута */}
          {items
            .filter((obj) => {
              const fullName = (obj.first_name + obj.last_name).toLowerCase();
              return (
                fullName.includes(searchValue.toLowerCase()) ||
                obj.email.toLowerCase().includes(searchValue.toLowerCase())
              );
            })
            .map((obj) => (
              <User
                key={obj.id}
                // т.к компонент ожидает одноименные пропсы то можно использовать spread:
                {...obj}
                //тоже самое что:
                // email={obj.email}
                // first_name={obj.first_name}
                // last_name={obj.last_name}
                // avatar={obj.avatar}
                isInvited={invites.includes(obj.id)}
                onClickInvite={onClickInvite}
              />
            ))}
        </ul>
      )}

      {/* с помощью && реализуем появление кнопки Отправить */}
      {invites.length > 0 && (
        <button onClick={onClickSendInvites} className="send-invite-btn">
          Отправить приглашение
        </button>
      )}
    </>
  );
};
