import CalendarCompon from "../components/Calendar"
import Reminder from "../components/Reminder"
import RemindersEmpty from "../components/componentsEmpty/ReminderEmpty"
import NavBar from "../components/Navbar"
import ReminderPost from "../components/ReminderPost"

export default function CalendarPage() {
    return (
        <div className="flex min-h-screen lg:w-full flex-col items-center justify-between">
            <NavBar/>
            <div className="flex flex-shrink justify-center">
                <div className="flex flex-col justify-between md:w-2/3 mt-20 md:flex-row"> 
                    <div className="md:w-1/2 flex flex-col m-2 md:mr-4 ">
                        <div className="object-top px-4 pb-4 border border-primary border-l-0 border-t-0 border-r-0">
                            <h2 className="font-josefin-regular text-bold lg:text-xl">
                            Recordatorios
                            </h2>
                        </div>
                        <div className="mt-4">
                            {/* <section>
                            <RemindersEmpty/>
                            </section> */}
                            <ReminderPost/>
                            <ReminderPost/>
                            <ReminderPost/>
                        </div>
                    </div>
                    <div className="flex flex-col md:w-1/2 my-4 mx-2"> 
                        <div className="mb-4 flex flex-shrink">
                            <CalendarCompon/>
                        </div>
                        <div>
                            <Reminder/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}