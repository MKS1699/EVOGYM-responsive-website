import Logo from "@/assets/Logo.png";

const index = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className=" justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            autem, accusamus eligendi sapiente soluta exercitationem minima,
            unde magnam dolor alias quam hic voluptatum aperiam animi harum?
            Magni nam doloribus dolores.
          </p>
          <p>&copy; Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5"> Massa orci senectus</p>
          <p className="my-5"> Massa orci senectus</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>

          <p className="my-5"> Lorem ipsum dolor sit amet.</p>
          <p>(333)425-6825</p>
        </div>{" "}
      </div>
    </footer>
  );
};
export default index;
