export default function NewsItem(props){
  return(
    <>
    <div className=" w-full max-w-[90%] sm:max-w-[35%] md:max-w-[24%] hover:scale-105 hover:shadow-cyan-500/50 ease-in duration-300 flex flex-col justify-between p-4 bg-slate-300 rounded-lg">
        <img className="h-[13rem] object-cover" src={props.urlToImage} alt="" />
        <h4 className="font-bold pt-2"> {props.title} </h4>
        <p className="py-5">{props.description}</p>
        <a  className=" p-3 bg-[#000] text-[#fff] rounded-lg text-center" target="_blank" href={props.url}> View News </a>
    </div>
    </>
  )
}