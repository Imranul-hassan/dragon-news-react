import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-10/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-10/12 mx-auto">
                <Navbar></Navbar>
            </nav>
            <main className="w-10/12 mx-auto pt-7 md:grid grid-cols-12 gap-3">
                <aside className="left col-span-3">Left nav</aside>
                <section className="col-span-6">main content</section>
                <aside className="col-span-3">right nav</aside>
            </main>
        </div>
    );
};

export default HomeLayout;