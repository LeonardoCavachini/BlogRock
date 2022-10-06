import React, { useState } from 'react';
import Modal from 'react-modal';

import close from '../assets/Vector.svg';
import send from '../assets/Send.svg';

const customStyles = {
  content: {
    width: '50%',
    height: '95%',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '5%',
  },
};

Modal.setAppElement('#root');

function ContactModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    window.history.back()
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    window.history.back()
  }

  return (
    <div>
      <button onClick={openModal}></button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Contact Modal"
      >
        <button onClick={closeModal} className='w-7 h-7 insert-[20.83%] ml-[92%] mb-[3%]'>
          <img src={close} alt="" />
        </button>
        <h1 className='text-[#F1A10A] text-center font-[Rubik] text-4xl font-bold leading-9 not-italic mb-[5%]'>Contact</h1>
        <form onSubmit={onSubmit} className='flex-col'>
          
          <label htmlFor="" className='text-[#000000] font-[Rubik] text-2xl font-normal leading-9 not-italic flex flex-col ml-[5%]'>
            Name
            <input type="text" name='name' placeholder='  Fill your full name' className='border mb-[5%] rounded w-[95%] h-[60px] text-[#000000] font-[Rubik] text-2xl font-normal leading-9 not-italic'></input>
          </label>
          <label htmlFor="" className='text-[#000000] font-[Rubik] text-2xl font-normal leading-9 not-italic flex flex-col ml-[5%]'>
            E-Mail
            <input type="text" name='email' placeholder='  Fill your full email'className='border mb-[5%] rounded w-[95%] h-[60px] text-[#000000] font-[Rubik] text-2xl font-normal leading-9 not-italic'></input>
          </label>
          <label htmlFor="" className='text-[#000000] font-[Rubik] text-2xl font-normal leading-9 not-italic flex flex-col ml-[5%]'>
            Phone
            <input type="text" name='phone' placeholder='  Fill your full phone' className='border mb-[5%] rounded w-[95%] h-[60px] text-[#000000] font-[Rubik] text-2xl font-normal leading-9 not-italic'></input>
          </label>
          <label htmlFor="" className='text-[#000000] font-[Rubik] text-2xl font-normal leading-9 not-italic flex flex-col ml-[5%]'>
            Post
            <textarea type="text" name='post' placeholder='  Fill your full post' className='border mb-[5%]  rounded w-[95%] h-[60px] text-[#000000] font-[Rubik] text-2xl font-normal leading-9 not-italic'></textarea>
          </label>
          <button type='submit' className='m-auto w-[230px] max-h-16 bg-[#2D2D2D] rounded text-[#FFFFFF] font-[Rubik] text-2xl font-medium leading-9 not-italic  flex p-5'>
            <div className='flex'>
              <img src={send} alt="" />
              <h1 className='ml-9 mt-[-3%]'>Submit</h1>
            </div>
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default ContactModal