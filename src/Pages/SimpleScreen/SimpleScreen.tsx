import React, {useState} from "react";
import "./simplescreen.css";

// components
import List from "../../Components/List/List";
import AddToList from "../../Components/AddToList/AddToList";

// data type
export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string; //string is optional
  }[];
}

const SimpleScreen = () => {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Angelina Tholie",
      age: 55,
      url: "https://i.pravatar.cc/150?img=29",
      note: "Lactose intolerant",
    },
  ]);

  return (
    <div className="simple-container">
      <h2>People Invited to My Party</h2>
      {/* list component to render item */}
      <List people={people} setPeople={setPeople} />
      {/* adding items */}
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
};

export default SimpleScreen;
