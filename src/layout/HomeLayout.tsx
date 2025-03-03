
import { Outlet } from "react-router";
import { Header } from "../components/Header";

export default function HomeLayout() {
    return (
        <main className="bg-gray-00 min-h-screen">
            <Header />
            <section className="max-w-screen-lg px-5 min-mobile:px-8 mx-auto pb-20">
                <Outlet />
            </section>
        </main>
    );
}