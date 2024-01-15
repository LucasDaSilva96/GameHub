function ImageModal({ image_url, toggleModal }) {
  if (image_url) {
    return (
      <div
        className=" fixed top-0 left-0 z-[550] w-[100vw] h-[100vh] backdrop-blur-xl  flex items-center justify-center  py-1 px-1 cursor-pointer"
        onClick={toggleModal}
      >
        <img
          src={image_url}
          alt="Image from RAWG"
          className="max-w-[600px] w-full  rounded-md "
        />
      </div>
    );
  }
}

export default ImageModal;
