import Educations from "./educations";
import Intro from "./intro";
import Languages from "./languages";
import Skills from "./skills";
import Summary from "./summary";
import WorkExperiences from "./workExperiences";

const PageOne = () => (
    <div className="p-4">
        <div className="mb-4">
            <Intro />
        </div>

        <div className="mb-4">
            <Summary />
        </div>

        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4 py-1">
                <Skills />

                <Educations />

                <Languages />
            </div>

            <div className="col-span-8 border-s border-gray-300 ps-4">
                <WorkExperiences />
            </div>
        </div>
    </div>
);

export default PageOne;
