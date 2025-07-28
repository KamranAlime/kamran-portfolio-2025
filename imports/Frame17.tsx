import imgLogo from "figma:asset/f379a171146e9438bd16975e8e8c170b4f1ca1d7.png";
import imgGroup from "figma:asset/e571fdcbf8621302be9017f1748fc196a9577a1a.png";
import imgGroup74740 from "figma:asset/e4666f4757e3d576c1f3a544957a022bf2777a6b.png";
import imgYuweenLogo from "figma:asset/7016125efec31e4795ece28399badb4478b65bc6.png";
import imgGroup74741 from "figma:asset/a31d3f30d726f2429b9206a3c84bba2da1cc3e5a.png";

function Logo() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-9 shrink-0 w-[93px]"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo}')` }}
    />
  );
}

function Group() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-9 shrink-0 w-[135px]"
      data-name="Group"
      style={{ backgroundImage: `url('${imgGroup}')` }}
    />
  );
}

function Group74740() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-9 shrink-0 w-[127px]"
      style={{ backgroundImage: `url('${imgGroup74740}')` }}
    />
  );
}

function YuweenLogo() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-9 shrink-0 w-[153px]"
      data-name="Yuween Logo"
      style={{ backgroundImage: `url('${imgYuweenLogo}')` }}
    />
  );
}

function Group74741() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[35px] shrink-0 w-[132px]"
      style={{ backgroundImage: `url('${imgGroup74741}')` }}
    />
  );
}

export default function Frame17() {
  return (
    <div className="box-border content-stretch flex flex-row gap-20 items-center justify-start p-0 relative size-full">
      <Logo />
      <Group />
      <Group74740 />
      <YuweenLogo />
      <Group74741 />
    </div>
  );
}