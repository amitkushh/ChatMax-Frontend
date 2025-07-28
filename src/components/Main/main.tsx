import Compas from "../../assets/Compas.svg";
import DocumentAdd from "../../assets/Document-add.svg";
import Image from "../../assets/Image.svg";
import Lightning from "../../assets/Lightning.svg";
import Microphone from "../../assets/Microphone.svg";
import Send from "../../assets/Send.svg";

function Main() {
  const cardContent = [
    {
      para: "Suggest beautiful places to see on an upcoming road trip",
      icon: Compas,
    },
    {
      para: "Briefly summarize this concept: urban planning",
      icon: Lightning,
    },
    {
      para: "Brainstorm team bonding activities for our work retreat",
      icon: DocumentAdd,
    },
    {
      para: "Tell me about React js and React native",
      icon: DocumentAdd,
    },
  ];

  return (
    <div className="flex flex-col pt-36 px-36">
      {/* menu */}
      <div className=""></div>

      {/* Cards and Name */}
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-5xl font-semibold">Hello Amit</h1>
          <h1 className="text-5xl font-semibold text-[#303033]">
            How can I help you today?
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {cardContent.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-[#303033] p-5 rounded-md  h-48 w-48"
            >
              <p>{card.para}</p>
              <div className="flex justify-end">
                <img src={card.icon} className="h-10 w-10" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search  */}
      <div></div>
    </div>
  );
}

export default Main;
