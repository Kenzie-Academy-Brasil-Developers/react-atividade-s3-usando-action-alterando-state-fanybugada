import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";
import "./style.css";

const UserCard = () => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const userName = useSelector((store) => store.user.name);

  const handleClick = () => {
    dispatch(changeName(newName));
  };

  return (
    <div className="divContainer">
      <h1>User Name: {userName} </h1>
      <input
        type="text"
        value={newName}
        onChange={(evt) => setNewName(evt.target.value)}
      />
      <button onClick={() => handleClick()}>Change</button>
    </div>
  );
};

export default UserCard;
