import React, { useState } from "react";
import { ArrowRight, AddButton } from "../assets/images/index";

const StepTwoBoxes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [addNew, setAddNew] = useState(false);
  const resetValues = () => {
    setAddNew(!addNew);
    setTitle("");
    setDescription("");
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleConfirmButton = () => {
    setWorkFlowBoxes([
      ...workFlowBoxes,
      { title: title, description: description },
    ]);
    resetValues();
  };
  const handleFormBox = () => {
    resetValues();
  };
  const [workFlowBoxes, setWorkFlowBoxes] = useState([
    {
      title: "Attendee Registration",
      description: "Start by creating a general registration workflow",
    },
    {
      title: "Attendee Registration",
      description: "Start by creating a general registration workflow",
    },
    {
      title: "Attendee Registration",
      description: "Start by creating a general registration workflow",
    },
  ]);
  return (
    <>
      {workFlowBoxes.map((box, index) => (
        <div key={index} className="stepBoxes">
          <div>
            <ArrowRight className="listIcon" />
            <span className="stepsSubTitle">{box.title}</span>
          </div>
          <span className="stepsSubTitleSub">{box.description}</span>
        </div>
      ))}
      {addNew ? (
        <div className="addBoxes">
          <input
            className="inputBox"
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChangeTitle}
          />
          <input
            className="inputBox"
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleChangeDescription}
          />
          <div className="btnContainer">
            <button className="formBoxes" onClick={handleFormBox}>
              Cancel
            </button>
            <button className="formBoxes" onClick={handleConfirmButton}>
              Confirm
            </button>
          </div>
        </div>
      ) : (
        <div className="addBoxes" onClick={handleFormBox}>
          <AddButton className="listIcon" />
          <span className="stepsSubTitleSub center">
            Add Registration Workflow
          </span>
        </div>
      )}
    </>
  );
};

export default StepTwoBoxes;
