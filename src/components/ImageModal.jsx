function ImageModal({ image_url, toggleModal }) {
  return (
    <div
      className=" absolute top-0  z-[100] w-full h-[100vh] backdrop-blur-xl  flex items-center justify-center"
      onClick={toggleModal}
    >
      <img
        src={image_url}
        alt="Image from RAWG"
        className="max-w-[600px] w-full rounded-md"
      />
    </div>
  );
}

export default ImageModal;
