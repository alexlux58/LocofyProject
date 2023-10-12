import CardContainer from "./card-container";
import WashingtonContainer from "./washington-container";

const RentCardContainer = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit">
            Latest Properties of Rent
          </h1>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
            <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
              <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit">
                Latest Properties of Rent
              </h1>
              <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Proin sodales ultrices nulla blandit
                volutpat.
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-2.5 gap-[32px]">
              <CardContainer
                propertyImage="/property-image7@2x.png"
                car="/car7.svg"
                bathtub="/bathtub5.svg"
                arrowsOut="/arrowsout2.svg"
                ellipse1="/ellipse-1@2x.png"
                shareNetwork="/sharenetwork7.svg"
                heart="/heart4.svg"
                plus="/plus4.svg"
                propWidth="unset"
                propFlex="1"
                propMinWidth="355px"
                propMaxWidth="400px"
              />
              <CardContainer
                propertyImage="/property-image8@2x.png"
                car="/car7.svg"
                bathtub="/bathtub5.svg"
                arrowsOut="/arrowsout2.svg"
                ellipse1="/ellipse-1@2x.png"
                shareNetwork="/sharenetwork7.svg"
                heart="/heart4.svg"
                plus="/plus4.svg"
                propWidth="unset"
                propFlex="1"
                propMinWidth="355px"
                propMaxWidth="400px"
              />
              <CardContainer
                propertyImage="/property-image9@2x.png"
                car="/car7.svg"
                bathtub="/bathtub6.svg"
                arrowsOut="/arrowsout3.svg"
                ellipse1="/ellipse-1@2x.png"
                shareNetwork="/sharenetwork8.svg"
                heart="/heart4.svg"
                plus="/plus5.svg"
                propWidth="unset"
                propFlex="1"
                propMinWidth="355px"
                propMaxWidth="400px"
              />
              <CardContainer
                propertyImage="/property-image10@2x.png"
                car="/car8.svg"
                bathtub="/bathtub7.svg"
                arrowsOut="/arrowsout3.svg"
                ellipse1="/ellipse-1@2x.png"
                shareNetwork="/sharenetwork8.svg"
                heart="/heart4.svg"
                plus="/plus5.svg"
                propWidth="unset"
                propFlex="1"
                propMinWidth="355px"
                propMaxWidth="400px"
              />
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-royalblue sm:max-w-full">
            <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
              Load more listing
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] text-left text-base text-gray-white">
          <WashingtonContainer />
          <WashingtonContainer propBackgroundImage="url('/card-21@3x.png')" />
          <WashingtonContainer propBackgroundImage="url('/card-31@3x.png')" />
          <WashingtonContainer propBackgroundImage="url('/card-41@3x.png')" />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-royalblue sm:max-w-full">
        <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </section>
  );
};

export default RentCardContainer;
