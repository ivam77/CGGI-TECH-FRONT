import { Link as Anchor } from "react-router-dom";
export default function Footer() {
return (
      <footer className="bg-[#007BFF] w-full text-white">
        <div className="flex flex-col md:flex-row justify-around md:items-start pb-10">
          <div className="flex md:flex-col flex-row">
            <Anchor to={'/'}><img src="/logo2.png" className="h-[200px] object-cover" /></Anchor>
            <div className="flex flex-col md:flex-row md:mt-[-30px] justify-around">
              <img src="/face.png" className="h-[35px]" />
              <img src="/insta.png" className="h-[35px]" />
              <img src="/youtube.png" className="h-[35px]" />
              <img src="/linkedin.png" className="h-[35px]" />
            </div>
          </div>
          <div className="flex flex-col md:mt-10">
            <p className="font-semibold text-xl">Customer Support</p>
            <p>0800-222-1234</p>
            <p>0800-222-5678</p>
            <p>MON-FRI from 09:00 to 18:00</p>
            <p>SA from 09:00 to 13:00</p>
            <p>contact@ccgi.com</p>
          </div>
          <div className="flex flex-col md:mt-10">
            <p className="font-semibold text-xl">Telephone sales:</p>
            <p>0800-222-9012</p>
            <p>MON-FRI from 08:00 to 20:00</p>
            <p>SA-SUN-Holidays from 09:00 to 21:00</p>
          </div>
        </div>
      </footer>
    );
  }