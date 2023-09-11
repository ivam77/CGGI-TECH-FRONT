import { useNavigate } from "react-router-dom";
import { Link as Anchor } from "react-router-dom";

export default function Drawer({ isOpen, setIsOpen }) {

    const navigate = useNavigate();

    let user = JSON.parse(localStorage.getItem("user"));

    const isLoggedIn = () => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        return token && user;
    };

    function backHome() {
        localStorage.clear();
        navigate("/");
    }

    let token = localStorage.getItem("token");

    return (
        <div className=" hidden 
        max-sx:z-50 max-sx:drawer 
        max-sx:flex 
        text-center 
        sx:text-start 
        min-w-[100%] 
        max-sx:min-w-[100%] 
        max-sx:h-[100%] 
        max-sx:flex-col 
        max-sx:items-start 
        max-sx:p-6
        max-sx:g-gradient-to-b  
        max-sx:bg-[#007BFF] 
        max-sx:fixed 
        max-sx:top-0 
        max-sx:left-0 
        max-sx:shadow-2xl ">

            <div className="flex h-[525px] flex-col items-center sm:items-start gap-8 self-stretch">
                <div className="flex w-full justify-end">
                    <img
                        src="/public/Menu/close.png"
                        onClick={() => setIsOpen(!isOpen)}
                        className="sm:hidden flex justify-end ms-[20%] h-[27px]"
                    />
                </div>
                <div className="flex flex-row items-center text-center lg:justify-between sm:w-[400px] w-[250px]">
                    <img src={user?.photo} className="w-[50px] mb-2 sm:m-0" />
                    <div className="flex flex-col ms-3">
                        <p className="text-[14px] text-[#fff]">{user?.email}</p>
                    </div>

                    <img
                        src="/src/assets/images/filled.svg"
                        onClick={() => setIsOpen(!isOpen)}
                        className="hidden sm:block ms-[20%] w-[24px] h-[24px] hoover:"
                    />
                </div>
                <div className="lg:text-lg flex flex-col">
                    <Anchor>
                        <p className="p-3 hover:bg-white text-[#fff] hover:text-[#5fb7ff]  rounded-md">
                            Home
                        </p>
                    </Anchor>
                    {isLoggedIn() ? (
                        <>
                            <Anchor
                                onClick={backHome}
                                className="p-3  hover:bg-white text-[#fff] hover:text-[#5fb7ff]  rounded-md"
                            >
                                Sign Out
                            </Anchor>
                        </>
                    ) : (
                        <>
                            <Anchor to="/register">
                                <p className="p-3  hover:bg-white text-[#fff] hover:text-[#5fb7ff]  rounded-md">
                                    Register
                                </p>
                            </Anchor>
                            <Anchor to="/login">
                                <p className="p-3  hover:bg-white text-[#fff] hover:text-[#5fb7ff]  rounded-md">
                                    Log in
                                </p>
                            </Anchor>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
