interface AvatarProps {
  githubUser: String;
  size: any;
  hasOutline?: Boolean;
}

export function Avatar(props: AvatarProps) {
  return (
    <img
      src={`https://github.com/${props.githubUser}.png`}
      className={`w-20 h-20 rounded-lg border-4 border-gray-800 ${
        props.hasOutline ? `outline outline-2 outline-green-500` : ``
      }`}
    />
  );
}
