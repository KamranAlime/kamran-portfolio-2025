import imgDashboard1 from "figma:asset/8c767284ff40c472cec94cabd1f342faf478d23c.png";

export default function Tally100() {
  return (
    <div
      className="bg-[#e5c98f] relative rounded-[34px] size-full"
      data-name="Tally100"
    >
      <div className="max-w-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start max-w-inherit min-w-inherit overflow-clip pb-0 pt-[138px] px-[120px] relative size-full">
          <div
            className="[background-size:101.35%_102.85%] aspect-[1520/778.421] basis-0 bg-[50%_9.12%] bg-no-repeat grow max-h-[860.36px] max-w-[1680px] min-h-[409.695px] min-w-[800px] relative rounded-[14px] shrink-0"
            data-name="🏠   Dashboard 1"
            style={{ backgroundImage: `url('${imgDashboard1}')` }}
          >
            <div className="absolute border-[#897a5c] border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[17px]" />
          </div>
        </div>
      </div>
    </div>
  );
}