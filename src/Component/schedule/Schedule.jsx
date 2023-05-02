import "./schedule.css"
import Sidebar from "../../Component/sidebar/Sidebar"
import Navbar from "../../Component/navbar/Navbar"
import Scheduletable from "../../Component/scheduletable/Scheduletable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Scheduletable/>
      </div>
    </div>
  )
}

export default List