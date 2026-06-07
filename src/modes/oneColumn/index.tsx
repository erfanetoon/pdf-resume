import Layout from "../../layout";
import PageOne from "../../pages/oneColumn/one";
import PageTwo from "../../pages/oneColumn/two";
import PageThree from "../../pages/oneColumn/three";

const OneColumnMode = () => (
    <>
        <Layout>
            <PageOne />
        </Layout>

        <Layout>
            <PageTwo />
        </Layout>

        <Layout>
            <PageThree />
        </Layout>
    </>
);

export default OneColumnMode;
