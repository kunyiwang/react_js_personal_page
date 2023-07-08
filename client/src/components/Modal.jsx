import React from "react";
import { useState } from "react";
import "./Modal.css";
import img2 from "../resources/image2.svg";
import {modifyDescriptionAsync} from "../redux/items/thunks";
import {useDispatch} from "react-redux";

export const Modal = ({ openModal, setOpenModal, item }) => {
  const [input, setInput] = useState("");
  const [contentSend, setContentSend] = useState(false);
  const dispatch = useDispatch();

  const sendContent = () => {
    console.log(input);
    const updatedItem = {...item, description: input};
    dispatch(modifyDescriptionAsync(updatedItem));
    setContentSend(true);
    setTimeout(() => {
      setOpenModal(false);
    }, 2000);
  };
  return (
    <>
      {!contentSend && (
        <div className="main-container">
          <div className="modal-container">
            <h3 className="">DETAILS:</h3>
            <div>
              <div className="modal-text">
                {item && item.description}
              </div>
            </div>
            <h3 className="">CREATE TIME:</h3>
            <div>
              <div className="modal-text">
                {item && item.date}
              </div>
            </div>
            <div className="modal-input-label">
              <input
                placeholder="Contents"
                className="modal-input"
                label={"Input"}
                type="content"
                onChange={(event) => setInput(event.target.value)}
              />
            </div>
            <div>
              <button
                className="modal-footer-button modal-button-send"
                onClick={sendContent}
              >
                Submit
              </button>
              <button
                className="modal-footer-button modal-button-cancel"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {contentSend && (
        <div className="modal-container-sent">
          <img className="modal-image" src={img2} />
          <div className="modal-text">Text submit!</div>
        </div>
      )}
    </>
  );
};