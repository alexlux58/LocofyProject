import SellYourHomeContainer from "./sell-your-home-container";

const PropertiesByAreaFeatureCardsCo = () => {
  return (
    <section className="self-stretch bg-primary-50 flex flex-col items-center justify-start py-[70px] px-0 text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start pt-[75px] px-0 pb-0 box-border gap-[54px] max-w-[95%px]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] box-border gap-[24px] max-w-[95%px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit">
            Properties by Area
          </h1>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-left text-base text-gray-700">
          <SellYourHomeContainer
            propertyId="/icon.svg"
            homeActionText="Sell your home"
          />
          <SellYourHomeContainer
            propertyId="/icon1.svg"
            homeActionText="Rent your home"
            propWidth="312px"
          />
          <SellYourHomeContainer
            propertyId="/icon2.svg"
            homeActionText="Buy a home"
            propWidth="unset"
          />
          <SellYourHomeContainer
            propertyId="/icon3.svg"
            homeActionText="Free marketing"
            propWidth="312px"
          />
        </div>
      </div>
    </section>
  );
};

export default PropertiesByAreaFeatureCardsCo;
