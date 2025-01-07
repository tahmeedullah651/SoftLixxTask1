import React from "react";
import Draggable from "react-draggable";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { VscChromeMinimize } from "react-icons/vsc";
import { IoIosClose } from "react-icons/io";
// import ReactModal from "react-modal-resizable-draggable";
import { useDispatch } from "react-redux";
import {
  minimizeModal,
  restoreModal,
  closeModal,
  expandModal,
  updatePosition,
} from "../../redux/slices/modalSlice";
import AddBtn from "../Button/AddBtn";
import IconBtn from "../Button/IconBtn";

const Modal = ({ modal }) => {
  const dispatch = useDispatch();

  const handleDragStop = (e, data) => {
    dispatch(
      updatePosition({ id: modal.id, position: { x: data.x, y: data.y } })
    );
  };

  if (modal.isMinimized) {
    return (
      <AddBtn
        title={modal.content}
        onClick={() => dispatch(restoreModal(modal.id))}
      />
      // {modal.content}
    );
  }

  return (
    <Draggable
      defaultPosition={modal.position || { x: 0, y: 0 }}
      onStop={handleDragStop}
    >
      <div
        className={`fixed z-50 bg-white shadow-lg rounded-lg p-4 ${
          modal.isFullscreen ? "w-screen h-screen top-0 left-0" : "w-1/3"
        }`}
      >
        <div className="flex justify-between items-center mb-4 w-full">
          <h2 className="text-lg font-semibold">{modal.content}</h2>
          <div className="flex gap-x-3 items-center">
            <IconBtn
              onClick={() => dispatch(expandModal(modal.id))}
              Icons={
                modal.isFullscreen ? <MdFullscreenExit /> : <MdFullscreen />
              }
            />

            <IconBtn
              onClick={() => dispatch(minimizeModal(modal.id))}
              Icons={<VscChromeMinimize />}
            />

            <IconBtn
              onClick={() => dispatch(closeModal(modal.id))}
              Icons={<IoIosClose />}
            />
          </div>
        </div>
        <div>{modal.para}</div>
      </div>
    </Draggable>
  );
};

export default Modal;
