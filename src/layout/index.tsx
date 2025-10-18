import type { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => (
    <div>{children ? children : null}</div>
);

export default Layout;
