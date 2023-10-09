import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

function UsersList(props) {
  console.log(props.users);
  return (
    <>
      {props.users.length > 0 && (
        <Card className={classes.users}>
          <ul>
            {props.users.map((user) => (
              <li key={props.id}>
                {user.name} ({user.age} years old)
              </li>
            ))}
          </ul>
        </Card>
      )}
    </>
  );
}

export default UsersList;
