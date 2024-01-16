import userAvatar from "/my-profile.jpeg";

export default function UserProfile({ dimension }) {
  return (
    <img
      className={`rounded-full h-${dimension} w-${dimension} cursor-pointer object-cover`}
      src={userAvatar}
      alt="User Profile Picture"
    />
  );
}
