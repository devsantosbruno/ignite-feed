interface AvatarProps {
  githubUser: string;
  hasOutline?: boolean;
}

export function Avatar(props: AvatarProps) {
  return (
    <img
      src={`https://github.com/${props.githubUser}.png`}
      className={`rounded-lg border-4 border-gray-800 ${
        props.hasOutline
          ? `outline outline-2 outline-green-500 w-20 h-20`
          : `w-16 h-16`
      }`}
    />
  );
}
