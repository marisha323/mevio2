import React, { useState } from 'react';
import { InertiaLink } from "@inertiajs/inertia-react";
import { DashBoardLayout } from '@/Layouts/DashBoardLayout.jsx';
import '../../../css/users/users.css';

export default function Users({ users, desks, desksusers, loggedInUserId, themes }) {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [filteredDesks, setFilteredDesks] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    setFilteredUsers(() => {
      return users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  const handleSelectBoard = (board) => {
    setSelectedBoard(board);

    setFilteredUsers(() => {
      return users.filter((user) =>
        desksusers.some((deskuser) => deskuser.deskId === board.id && deskuser.userId === user.id)
      );
    });
    console.log(filteredUsers);
  };

  const handleRemoveUser = (userId) => {
    try {
      const updatedUsers = filteredUsers.filter((user) => user.id !== userId);
      setFilteredUsers(updatedUsers);

      const deskIndex = filteredDesks.findIndex(
        (deskuser) => deskuser.userId === userId && deskuser.deskId === selectedBoard.id
      );

      if (deskIndex !== -1) {
        const updatedDesksUsers = [...filteredDesks];
        updatedDesksUsers.splice(deskIndex, 1);
        setFilteredDesks(updatedDesksUsers);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <DashBoardLayout>
      <div className="middle_desks_container">
        <div className="middle_middle_body">
          <div className="users_container">
            <div className='Boards_Container'>
              {desks.map((desk) => {
                const theme = themes.find((theme) => theme.id === desk.themeId);
                return (
                  <div key={desk.id} className='BoardListed' onClick={() => handleSelectBoard(desk)}>
                    <img className='BoardListed_img' src={theme.backGroundImage} alt="" />
                    <h1 className='BoardListed_name'>{desk.deskName}</h1>
                  </div>
                );
              })}
            </div>
            <input
              type="text"
              placeholder="Фільтр за іменами"
              value={searchTerm}
              onChange={handleSearch}
            />
            {selectedBoard && (
              <div className="users_list">
                <hr />
                {filteredUsers.map((user) => (
                  <div key={user.id} className="list_user">
                    <img src="images/profile1.png" alt="" />
                    <div className="user_name">
                      <h4>{user.name}</h4>
                      <p>{user.email}</p>
                    </div>
                    <div className="user_list_control">
                      <h4>На доске(?)</h4>
                      {loggedInUserId === user.id ? (
                        <button className="admin_user_btn">Адміністратор</button>
                      ) : (
                        <button className="admin_user_btn">Користувач</button>
                      )}
                      {loggedInUserId === selectedBoard.userId ? (
                        <InertiaLink
                          className="remove_user_btn"
                          onClick={() => handleRemoveUser(user.id)}
                          href={`/users/${user.id}/desk/${selectedBoard.id}`}
                          method="delete"
                          as="button"
                          type="button"
                        >
                          <img src="images/x_icon.png" alt="" /> Виключити
                        </InertiaLink>
                      ) : null}
                    </div>
                  </div>
                ))}
                <hr />
              </div>
            )}
          </div>
        </div>
      </div>
    </DashBoardLayout>
  );
}