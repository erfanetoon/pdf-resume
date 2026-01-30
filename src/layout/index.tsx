import type { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => (
    <div className="h-[297mm] w-[210mm] overflow-x-hidden overflow-y-hidden bg-white">
        {children ? children : null}
    </div>
);

export default Layout;
