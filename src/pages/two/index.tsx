import Languages from "./languages";
import Projects from "./projects";
import Socials from "./socials";

const PageTwo = () => (
    <div className="p-4">
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4 py-1">
                <Languages />

                <Socials />
            </div>

            <div className="col-span-8 border-s border-gray-300 ps-4">
                <Projects />
            </div>
        </div>
    </div>
);

export default PageTwo;
