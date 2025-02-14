import { FaHome } from "react-icons/fa";

export default function Slidebar(){
    const menu=[
        {
            name:"Home",
            icon:<FaHome />,
            link:'/'
        },

    ]
    return(
        <div className="w-[10vh] bg-gray min-h-screen ">
            <ul>
                {
                    menu.map((value,index)=>{
                        return(
                            <li key={index} className="flex justify-center items-center h-[10vh]">
                                {value.icon}<span className="ml-2">{value.name}</span>
                                <link to={value.link} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}