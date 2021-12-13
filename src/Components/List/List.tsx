import React from "react";
import "./list.css";
import Card from "@mui/material/Card";
import {CardActionArea} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {IState as Props} from "./../../Pages/SimpleScreen/SimpleScreen";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

// telling ts that List is a react functional component with the types of IProps, so we can destructure people
const List: React.FC<IProps> = ({people, setPeople}) => {
  // delete item from array
  const deleteItem = (i: any) => {
    const a = people.filter(item => item !== i);
    setPeople(a);
  };

  return (
    <div style={{margin: 5}}>
      {people.map((i, index: number) => (
        <div key={index.toString()}>
          <Card style={{margin: 25}}>
            <CardActionArea onClick={() => deleteItem(i)}>
              {/* content */}
              <div style={{padding: 20}} className="item-container">
                <Avatar
                  alt={i.name}
                  src={i.url}
                  sx={{width: 150, height: 150}}
                />
                <div>
                  <p style={{fontWeight: "bold"}}>{i.name}</p>
                  <p style={{fontStyle: "italic"}}>Age: {i.age}</p>
                </div>
                <div>
                  <p style={{fontWeight: "bold"}}>Note</p>
                  <p style={{fontStyle: "italic"}}>{i.note}</p>
                </div>
              </div>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default List;
