import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Home />
    </>
  );
}
// import React, { useState } from "react";
// import "./App.css";
// import ReactModal from "react-modal-resizable-draggable";

// const App = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div className="App">
//       <button onClick={openModal}>Open modal</button>
//       <ReactModal
//         initWidth={800}
//         initHeight={400}
//         onFocus={() => console.log("Modal is clicked")}
//         className={"my-modal-custom-class"}
//         onRequestClose={closeModal}
//         isOpen={modalIsOpen}
//       >
//         <h3>My Modal</h3>
//         <div className="body">
//           <p>This is the modal&apos;s body.</p>
//         </div>
//         <button onClick={closeModal}>Close modal</button>
//       </ReactModal>
//     </div>
//   );
// };

// export default App;
