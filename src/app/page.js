
import Image from "next/image";
import Navbar from "./components/Navbar"
import Footer from "./components/landing-components/Footer";
import HomeRemind from "./components/componentsEmpty/HomeRemind";
import HomeDates from "./components/componentsEmpty/HomeDates";
import Reminder from "./components/Reminder"
import ProfileEmpty from "./components/componentsEmpty/ProfileEmpty";
import CalendarCompon from "./components/Calendar";

export default function Home() {
  return (
    <main className="flex min-h-screen lg:w-full flex-col items-center justify-between">
      <Navbar/>
      <h1 className="flex flex-col items-center justify-center font-josefin-regular text-xl">
        HELLO WORLD
      </h1>
      <Footer/>
    </main>
  );
}