import React, {useState} from "react";
import "./addtolist.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {IState as Props} from "../../Pages/SimpleScreen/SimpleScreen";

// grab people and its setstate function
interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [img, setImg] = useState("");
  const [note, setNote] = useState("");

  // add people
  const addItem = (): void => {
    if (name === "") {
      alert("Please enter a name");
    } else {
      // append to array
      setPeople([
        ...people,
        {name: name, age: Number(age), url: img, note: note},
      ]);
    }
  };

  return (
    <Box sx={{maxWidth: "100%", margin: 5}}>
      <TextField
        margin="dense"
        fullWidth
        label="Name"
        id="Name"
        value={name}
        onChange={t => setName(t.target.value)}
      />
      <TextField
        margin="dense"
        fullWidth
        label="Age"
        id="Age"
        value={age}
        onChange={t => setAge(t.target.value)}
        type="number"
      />
      <TextField
        margin="dense"
        fullWidth
        label="Image URL"
        id="image"
        value={img}
        onChange={t => setImg(t.target.value)}
      />
      <TextField
        margin="dense"
        multiline
        rows={4}
        fullWidth
        label="Notes"
        id="Notes"
        value={note}
        onChange={t => setNote(t.target.value)}
      />
      <Button variant="contained" style={{margin: 15}} onClick={addItem}>
        Add {name}
      </Button>
    </Box>
  );
};

export default AddToList;
