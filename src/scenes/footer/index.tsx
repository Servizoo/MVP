import Logo from "@/assets/Logo.png";
import HText from "@/shared/HText";

const Footer = () => {
  return (
    <footer className="bg-gray-20 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <h4 className="font-bold">Logo</h4>
          <img alt="" src="" />
          <p className="my-5">Pata Service Kwako Home</p>
          <p>© PataPro All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
