import React, { useState } from "react";
import {
  Summit,
  AccountIcon,
  ArrowRight,
  AddButton,
  PortalIcon,
} from "../assets/images/index";

import "../assets/css/Content.css";

const Content = () => {
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
      <div className="content">
        <div className="contentHeader">
          <div className="contentContainer contentStructure">
            <div className="contentInfo">
              <div className="contentLogo">
                <Summit />
              </div>
              <div className="contentInfoText">
                <div className="contentTitle">RainFocus Summit</div>
                <div className="contentSubTitle">
                  <div className="contentDate">December 15th</div>
                  <div className="contentPlace">Lehi, Utah</div>
                </div>
              </div>
              <div>
                <button className="editButton">
                  Edit Event
                </button>
              </div>
            </div>
          </div>
          <div className="contentContainer guideContent">
            <div className="contentInfo">
              <div className="guideTitle">Event Setup Guide</div>
              <div className="guideText">
                See the available list of modules below. We suggest that you
                start with the attendee module.
              </div>
            </div>
          </div>
        </div>
        <div className="contentContainer line">
          <hr />
        </div>
        <div>
          <div className="stepsContainer attendeeTitle">
            <AccountIcon />
            Attendee
          </div>
          <div className="stepsContainer stepHeader">
            <div className="stepsTitle">
              <span className="stepsSubTitle">Step 1:</span> Base settings.
            </div>
            <div className="stepOneBlock">
              <div>
                <span className="stepsSubTitle">General</span>
                <div className="stepsSubTitleSub">
                  Define Attendee types & attributes
                </div>
              </div>
              <div>
                <span className="stepsSubTitle">Title</span>
                <div className="stepsSubTitleSub">
                  Description that explains the value goes here. Description
                  that explains the value goes here.
                </div>
              </div>
              <div>
                <span className="stepsSubTitle">Title</span>
                <div className="stepsSubTitleSub">
                  Description that explains the value goes here. Description
                  that explains the value goes here.
                </div>
              </div>
            </div>
          </div>
          <div className="stepsContainer stepHeader">
            <div className="stepsTitle">
              <span className="stepsSubTitle">Step 2:</span> Build registration
              workflows.
            </div>
            <div className="boxStructure">
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
            </div>
          </div>
          <div className="stepThreeContainer stepHeader">
            <div className="stepsTitle">
              <span className="stepsSubTitle">Step 3:</span> Build registration
              workflows.
            </div>
            <div className="boxStructure">
              <div className="stepBoxes">
                <div>
                  <PortalIcon className="listIcon" />
                  <span className="stepsSubTitle">Attendee Portal</span>
                </div>
                <span className="stepsSubTitleSub">
                  Manage the portal that attendees will see after they’ve
                  register for your event.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
