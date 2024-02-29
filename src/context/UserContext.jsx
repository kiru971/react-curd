import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      dp: "../../download.jpeg",
      user: "Raja",
      role: "Super-admin",
      status: "Active",
      pass: "123",
      pass1: "123",
    },
  ]);

  const addUser = (dp, user, role, status, pass, pass1) => {
    const fakeId = Date.now();
    setUsers([...users, { id: fakeId, dp, user, role, status, pass, pass1 }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((val) => val.id !== id));
  };

  const detailUser = (user) => {
    const updateUser = users.map((item) => {
      if (item.id === user.id) return user;
      return item;
    });
    setUsers(updateUser);
  };

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, detailUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
