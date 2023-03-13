import React from "react";
import { Summit, AccountIcon, PortalIcon } from "../assets/images/index";

import "../assets/css/Content.css";
import StepTwoBoxes from "../helpers/StepTwoBoxes";

const Content = () => {
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
                <button className="editButton">Edit Event</button>
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
              <StepTwoBoxes />
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
