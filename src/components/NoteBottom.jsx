import pattern from "../assets/bottompattern.png";
const NoteBottom = () => {
  return (
    <>
      <div className="w-full md:h-[100px] px-14  md:px-0 py-10 md:py-0">
        <div className="">
          <img src={pattern} className="bg-[#F2F3F8] md:w-full md:h-28 h-28" />
        </div>
        <div className="z-50 relative md:-mt-20 -mt-24  text-center">
          <p className="text-[#FF0000] md:text-2xl text-xl font-medium">
            Note:- We can't identify all the problems with your vehicle without
            a test drive.
          </p>
        </div>
      </div>
    </>
  );
};

export default NoteBottom;
