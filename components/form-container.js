import FormContainer1 from "./form-container1";

const FormContainer = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-row items-start justify-start p-[50px] md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col">
      <FormContainer1
        houseLine="/houseline1.svg"
        socialMediaLogo="/social-media-logo.svg"
        socialMediaLogo1="/social-media-logo1.svg"
        socialMediaLogo2="/social-media-logo2.svg"
        socialMediaLogo3="/social-media-logo3.svg"
        socialMediaLogo4="/social-media-logo4.svg"
      />
    </div>
  );
};

export default FormContainer;
