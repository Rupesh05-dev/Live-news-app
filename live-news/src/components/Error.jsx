import errorImg from "../Assets/error.jpg"
export default function ErorrMassage() {
  return (
    <div className=" h-[60vh] text-center flex flex-col items-center justify-center ">
      <img className="w-[10rem]   mb-6 rounded-full" src={errorImg} alt="" />
      <h2 className="text-xl">Oops! 🤷‍♂️</h2>
      <p>Looks like we've hit a news snag!</p>
      <p>
        Our news-fetching robot is currently on strike demanding more coffee.
        ☕️⚡
      </p>
      
    </div>
  );
}
