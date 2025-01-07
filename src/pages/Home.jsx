import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addModal } from "../redux/slices/modalSlice";
import Modal from "../components/Modal/Modal";
import AddBtn from "../components/Button/AddBtn";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const modals = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const data =
    "Lorem Ipsum5 is a placeholder text commonly used in the graphic and printing industry to demonstrate visual form without relying on meaningful content.";
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleAddModal = (id, content, para) => {
    dispatch(
      addModal({
        id,
        content,
        para: data,
        isMinimized: false,
        isFullscreen: false,
        position: { x: 0, y: 0 },
      })
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-center space-x-4 mb-6">
        <AddBtn
          onClick={() => handleAddModal(1, "Modal 1 Content")}
          title="Modal 1"
        />

        <AddBtn
          onClick={() => handleAddModal(2, "Modal 2 Content")}
          title="Modal 2"
        />

        <AddBtn
          onClick={() => handleAddModal(3, "Modal 3 Content")}
          title="Modal 3"
        />
      </div>
      {/* modal buttons */}
      <div className="fixed bottom-4 left-4 flex space-x-2">
        {modals
          .filter((modal) => modal.isMinimized)
          .map((modal) => (
            <div key={modal.id}>
              <Modal modal={modal} />
            </div>
          ))}
      </div>
      {/* modal */}
      <div className="w-full flex justify-center items-center mt-36">
        {modals
          .filter((modal) => !modal.isMinimized)
          .map((modal) => (
            <Modal key={modal.id} modal={modal} />
          ))}
      </div>
    </div>
  );
};

export default Home;
