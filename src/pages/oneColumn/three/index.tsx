import Educations from "./educations";
import Languages from "./languages";
import Projects from "./projects";
import Socials from "./socials";

const PageThree = () => (
    <div className="p-4">
        <div className="mb-6">
            <Projects />
        </div>

        <div className="mb-6 grid grid-cols-2 gap-4 border-b border-gray-300 pb-6">
            <Educations />

            <Languages />
        </div>

        <div>
            <Socials />
        </div>
    </div>
);

export default PageThree;
