import Navbar from "./Navbar"
import News from "./News"

export default function Root(props){
  return(
    <>
    <Navbar/>
    <News currentPath={props.currentPath}  />
    </>
  )    
}