import Image from "next/image";
import errorImage from "../assets/404-error.gif"

const NotFoundPage = () => {
    return (
        <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh"
        }}>
<Image src={errorImage} alt="error"></Image>           
        </div>
    );
};

export default NotFoundPage;