const FooterImage = () => {
  const imgUrl =
    "https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1920/v1708396260/rolexcom/footer/rolex-com-footer-rolex-org-push-cc69-1587746-portrait";

  return (
    <div className="flex flex-row justify-center">
      <img
        src={imgUrl}
        alt="footer-image"
        className="object-cover flex flex-row w-full max-h-96 justify-center"
      ></img>
    </div>
  );
};

export default FooterImage;
