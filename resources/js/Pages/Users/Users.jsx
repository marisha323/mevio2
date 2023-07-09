import React, { useState } from 'react';
import {router} from "@inertiajs/react";
import DashBoardLayout from '@/Layouts/DashBoardLayout.jsx';
import '../../../css/users/users.css';

export default function Users({ users }) {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  };
  const handleRemoveUser = async (userId) => {
    try {
      await router.delete(`/users/${userId}`);
  
      const updatedUsers = filteredUsers.filter((user) => user.id !== userId);
      setFilteredUsers(updatedUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  return (
    <DashBoardLayout>
      <div className="middle_desks_container">
        <div className="middle_middle_body">
          <div className="users_container">
            <h3>Учасники робочого простору(?)</h3>
            <p>
              Учасники робочого простору можуть переглядати дошки для робочого
              простору та приєднуватися до них і створювати дошки в цьому
              просторі
            </p>
            <input
              type="text"
              placeholder="Фільтр за іменами"
              value={searchTerm}
              onChange={handleSearch}
            />
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
                    <button className="admin_user_btn">Адміністратор</button>
                    <button className="remove_user_btn"  onClick={() => handleRemoveUser(user.id)}>
                      <img src="images/x_icon.png" alt="" /> Виключити
                    </button>
                  </div>
                </div>
              ))}
              <hr />
            </div>
          </div>
        </div>
      </div>
    </DashBoardLayout>
  );
}