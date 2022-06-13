import fs from "fs";
import chalk from "chalk";
import uniqid from "uniqid";
// console.log(uniqid());

const saveUsers = (users) => {
  const usersJson = JSON.stringify(users);
  fs.writeFileSync("users.json", usersJson);
};

const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    return data;
  } catch (e) {
    return [];
  }
};

const createUser = (name, email) => {
  const users = loadUsers();
  // const userById = users.find((user) => user.id === id);
  // if (!userById) {
  users.push({
    name: name,
    email: email,
    id: uniqid(),
  });
  saveUsers(users);

  console.log(chalk.green.inverse("Added new user!"));
};

const deleteUser = (id) => {
  const users = loadUsers();
  const usersToKeep = users.filter((user) => user.id !== id);
  if (users.length > usersToKeep.length) {
    saveUsers(usersToKeep);
    console.log(chalk.green.inverse("User removed!"));
  } else {
    console.log(chalk.red.inverse("There's no such a user!"));
  }
};

const readUser = (id) => {
  const users = loadUsers();
  const user = users.find((user) => user.id === id);
  if (user) {
    console.log(chalk.green.inverse("User found:"));
    console.log(user.name);
    console.log(user.email);
    console.log(user.id);
  }
};

const updateUser = (id, name, email) => {
  const users = loadUsers();
  // with spread and findIndex:
  const userIndex = users.findIndex((user) => user.id === id);
  const updatedUser = { ...users[userIndex], name, email };
  users[userIndex] = updatedUser;
  saveUsers(users);

  //another way:
  // const updatedUser = {
  //   id: id,
  //   name: name,
  //   email: email,
  // };
  // const updatedUsersArr = users.map((user) => {
  //   return user.id === id ? updatedUser : user;
  // });
  // saveUsers(updatedUsersArr);
  // console.log("updated user", updatedUser.name);
};

// updateUser("2ky03eh190sl4cnhwbv", "hatul", "afunTheCat@gmail.com");
// createUser("liat", "pardo.liat@gmail.com");
// deleteUser("2ky03eh37ol4cnlaij");
// createUser("Chen", "chen@gmail.com");
// updateUser("2ky03eh17p0l4cnr8ep",)
createUser("liat", "pardo.liat@gmail.com");
updateUser("2ky03eh1akcl4cobvh2", "Liat", "Liat@mail.com");
