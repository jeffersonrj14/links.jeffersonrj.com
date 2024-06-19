import { ReactNode } from "react";
// import AppHeader from "@/components/shared/AppHeader";
import AppFooter from "@/components/shared/AppFooter";
import PagesMetaHead from "@/components/PagesMetaHead";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <PagesMetaHead />
      <div>{children}</div>
      <AppFooter />
    </>
  );
};

export default DefaultLayout;
