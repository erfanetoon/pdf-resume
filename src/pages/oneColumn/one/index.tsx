import Intro from "./intro";
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

        <div className="mb-4">
            <Skills />
        </div>

        <div className="mb-4">
            <WorkExperiences />
        </div>

        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8 border-s border-gray-300 ps-4" />
        </div>
    </div>
);

export default PageOne;
