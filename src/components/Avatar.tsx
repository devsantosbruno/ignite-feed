interface AvatarProps {
  githubUser: String;
  size: number;
  hasOutline?: Boolean;
}

export function Avatar(props: AvatarProps) {
  return (
    <img
      src={`https://github.com/${props.githubUser}.png`}
      className={`w-${props.size} h-${
        props.size
      } rounded-lg border-4 border-gray-800 ${
        props.hasOutline ? `outline outline-2 outline-green-500` : ``
      }`}
    />
  );
}
