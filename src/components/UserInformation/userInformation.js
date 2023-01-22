import { FaCheckSquare, FaUser } from "react-icons/fa"

const UserInformation=()=>{
    const iContainerProps={
        paddingTop:10,
        fontSize:25,
        display:"flex",
        flexFlow:"row-reverse",
        marginRight:20,
        alignItems: "center",
        marginBottom:30
    }
    //Fetch all info from database
    return(
        <div className="iContainer" style={iContainerProps}>
            <FaCheckSquare className="text-primary"/><FaUser/> 
        </div>    
    )
}

export default UserInformation;