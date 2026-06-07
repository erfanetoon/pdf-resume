import Layout from "../../layout";
import PageTwo from "../../pages/twoColumn/two";
import PageOne from "../../pages/twoColumn/one";

const TwoColumnMode = () => (
    <>
        <Layout>
            <PageOne />
        </Layout>

        <Layout>
            <PageTwo />
        </Layout>
    </>
);

export default TwoColumnMode;
