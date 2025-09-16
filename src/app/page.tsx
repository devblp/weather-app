import Body from "@/components/Body";
import Header from "@/components/Header";
import HeaderText from "@/components/HeaderText";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 justify-center items-center px-28 max-lg:px-7 w-full">
      {/* Header */}
      <Header />
      {/* Header Text */}
      <HeaderText/>
      {/* Body */}
      <Body />
    </div>
  );
}
