import pattern from "../assets/bottompattern.png";
const NoteBottom = () => {
  return (
    <>
      <div className="w-full h-[100px]">
        <div className="">
          <img src={pattern} className="bg-[#F2F3F8] w-full h-28" />
        </div>
        <div className="z-50 relative -mt-20 flex justify-center">
          <p className="text-[#FF0000] text-2xl font-medium">
            Note:- We can't identify all the problems with your vehicle without
            a test drive.
          </p>
        </div>
      </div>
    </>
  );
};

export default NoteBottom;
