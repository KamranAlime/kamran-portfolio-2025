import imgDashboard1 from "figma:asset/8c767284ff40c472cec94cabd1f342faf478d23c.png";
import imgFrame74742 from "figma:asset/6e70542bc5f4b0d9ff9a48f3173055f642ede05f.png";
import imgFrame74745 from "figma:asset/d6a0c340da274650a426bee2682826ab3795ae9f.png";
import imgFrame74748 from "figma:asset/5777a1ea459d02ae514c8414ef4d8bd65c691599.png";

function Frame74696() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[34px] items-start justify-start p-0 relative shrink-0">
      <div className="flex flex-col h-[19px] justify-center relative shrink-0 text-[#b3b3b3] text-[14px] w-11">
        <p className="block leading-[24px]">2024</p>
      </div>
      <div className="flex flex-col h-[29px] justify-center relative shrink-0 text-[#1e1e1e] text-[21px] w-[145px]">
        <p className="block leading-[28.8px]">Tally100</p>
      </div>
    </div>
  );
}

function Frame74697() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[137px] items-start justify-start p-0 relative shrink-0 text-left">
      <Frame74696 />
      <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[16px] w-[380px]">
        <p className="block leading-[24px]">
          A practice management platform for health and wellness professionals.
        </p>
      </div>
    </div>
  );
}

function Frame74701() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Inter:Medium',_sans-serif] font-medium items-start justify-between leading-[0] not-italic p-0 relative shrink-0 w-full">
      <Frame74697 />
      <div className="flex flex-col justify-center relative shrink-0 text-[#b3b3b3] text-[14px] text-right w-[174.06px]">
        <p className="block leading-[24px]">{`Head of Design & Product`}</p>
      </div>
    </div>
  );
}

function Tally100() {
  return (
    <div
      className="bg-[#e5c98f] box-border content-stretch flex flex-col gap-2.5 h-[540px] items-start justify-start max-w-[1364px] min-w-[430px] overflow-clip pb-0 pt-[138px] px-[120px] relative rounded-[34px] shrink-0 w-[1364px]"
      data-name="Tally100"
    >
      <div
        className="[background-size:101.35%_102.85%] aspect-[1520/778.421] bg-[50%_9.12%] bg-no-repeat max-h-[860.36px] max-w-[1680px] min-h-[409.695px] min-w-[800px] relative rounded-[14px] shrink-0 w-full"
        data-name="🏠   Dashboard 1"
        style={{ backgroundImage: `url('${imgDashboard1}')` }}
      >
        <div className="absolute border-[#897a5c] border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[17px]" />
      </div>
    </div>
  );
}

function Frame74699() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start max-w-[1364px] p-0 relative shrink-0 w-full">
      <Frame74701 />
      <Tally100 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-0 pt-4 px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div className="absolute border-[#bbbbbb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame74699 />
    </div>
  );
}

function Frame74698() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[34px] items-start justify-start p-0 relative shrink-0">
      <div className="flex flex-col h-[19px] justify-center relative shrink-0 text-[#b3b3b3] text-[14px] w-11">
        <p className="block leading-[24px]">2023</p>
      </div>
      <div className="flex flex-col h-[29px] justify-center relative shrink-0 text-[#1e1e1e] text-[21px] w-[145px]">
        <p className="block leading-[28.8px]">Yuween</p>
      </div>
    </div>
  );
}

function Frame74700() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[137px] items-start justify-start p-0 relative shrink-0 text-left">
      <Frame74698 />
      <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[16px] w-[380px]">
        <p className="block leading-[24px]">
          A multivendor delivery management app for ordering everything from one
          platform.
        </p>
      </div>
    </div>
  );
}

function Frame74702() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Inter:Medium',_sans-serif] font-medium items-start justify-between leading-[0] not-italic p-0 relative shrink-0 w-full">
      <Frame74700 />
      <div className="flex flex-col justify-center relative shrink-0 text-[#b3b3b3] text-[14px] text-right w-[174.06px]">
        <p className="block leading-[24px]">Senior Product Designer</p>
      </div>
    </div>
  );
}

function Frame74742() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[540px] shrink-0 w-[1364px]"
      style={{ backgroundImage: `url('${imgFrame74742}')` }}
    />
  );
}

function Frame74703() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame74702 />
      <Frame74742 />
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-0 pt-4 px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div className="absolute border-[#bbbbbb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame74703 />
    </div>
  );
}

function Frame74704() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[34px] items-start justify-start p-0 relative shrink-0">
      <div className="flex flex-col h-[19px] justify-center relative shrink-0 text-[#b3b3b3] text-[14px] w-11">
        <p className="block leading-[24px]">2022</p>
      </div>
      <div className="flex flex-col h-[29px] justify-center relative shrink-0 text-[#1e1e1e] text-[21px] w-[145px]">
        <p className="block leading-[28.8px]">Renmo</p>
      </div>
    </div>
  );
}

function Frame74705() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[137px] items-start justify-start p-0 relative shrink-0 text-left">
      <Frame74704 />
      <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[16px] w-[380px]">
        <p className="block leading-[24px]">
          A home rental management platform for booking, hosting, and managing
          stays.
        </p>
      </div>
    </div>
  );
}

function Frame74706() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Inter:Medium',_sans-serif] font-medium items-start justify-between leading-[0] not-italic p-0 relative shrink-0 w-full">
      <Frame74705 />
      <div className="flex flex-col justify-center relative shrink-0 text-[#b3b3b3] text-[14px] text-right w-[174.06px]">
        <p className="block leading-[24px]">Senior Product Designer</p>
      </div>
    </div>
  );
}

function Frame74745() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[540px] shrink-0 w-[1364px]"
      style={{ backgroundImage: `url('${imgFrame74745}')` }}
    />
  );
}

function Frame74707() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame74706 />
      <Frame74745 />
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-0 pt-4 px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div className="absolute border-[#bbbbbb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame74707 />
    </div>
  );
}

function Frame74708() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[34px] items-start justify-start p-0 relative shrink-0">
      <div className="flex flex-col h-[19px] justify-center relative shrink-0 text-[#b3b3b3] text-[14px] w-11">
        <p className="block leading-[24px]">2021</p>
      </div>
      <div className="flex flex-col h-[29px] justify-center relative shrink-0 text-[#1e1e1e] text-[21px] w-[145px]">
        <p className="block leading-[28.8px]">Kidshub</p>
      </div>
    </div>
  );
}

function Frame74709() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[137px] items-start justify-start p-0 relative shrink-0 text-left">
      <Frame74708 />
      <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[16px] w-[380px]">
        <p className="block leading-[24px]">
          A childcare management platform for attendance, billing, and parent
          communication.
        </p>
      </div>
    </div>
  );
}

function Frame74710() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Inter:Medium',_sans-serif] font-medium items-start justify-between leading-[0] not-italic p-0 relative shrink-0 w-full">
      <Frame74709 />
      <div className="flex flex-col justify-center relative shrink-0 text-[#b3b3b3] text-[14px] text-right w-[174.06px]">
        <p className="block leading-[24px]">Senior Product Designer</p>
      </div>
    </div>
  );
}

function Frame74748() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[540px] shrink-0 w-[1364px]"
      style={{ backgroundImage: `url('${imgFrame74748}')` }}
    />
  );
}

function Frame74711() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame74710 />
      <Frame74748 />
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-0 pt-4 px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div className="absolute border-[#bbbbbb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame74711 />
    </div>
  );
}

function Frame74723() {
  return (
    <div className="box-border content-stretch flex flex-col gap-16 items-center justify-start p-0 relative shrink-0 w-full">
      <HorizontalBorder />
      <HorizontalBorder1 />
      <HorizontalBorder2 />
      <HorizontalBorder3 />
    </div>
  );
}

export default function Frame74724() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative size-full">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-[26px] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[18.281px] text-left w-full">
        <p className="block leading-[26px]">Recent work</p>
      </div>
      <Frame74723 />
    </div>
  );
}