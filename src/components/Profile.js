import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex items-center">
        <a href="/"><img src={user.picture} alt={user.name} title={user.name} className="rounded-full overflow-hidden h-10 w-10 cursor-pointer"/></a>
      </div>
    )
  );
};

export default Profile;