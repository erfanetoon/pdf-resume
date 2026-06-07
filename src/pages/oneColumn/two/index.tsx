import Projects from "./projects";
import WorkExperiences from "./workExperiences";

const PageTwo = () => (
    <div className="p-4">
        <div className="mb-4">
            <WorkExperiences />
        </div>

        <div>
            <Projects />
        </div>
    </div>
);

export default PageTwo;
