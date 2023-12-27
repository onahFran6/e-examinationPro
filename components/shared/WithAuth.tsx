"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/store/store";

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const user = useSelector((state: RootState) => state.user);
    const { isAuthenticated, error } = useSelector(
      (state: RootState) => state.user
    );
    const router = useRouter();

    // Redirect to the login page if not authenticated
    if (!isAuthenticated) {
      router.push("/login");
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
