import images from "constants/images";
import { SpoonSvg } from "components";

export default function SubHeading({ title }) {
  return (
    <div style={{marginBottom: "1rem"}}>
      <p className="p__cormorant">{title}</p>
      <SpoonSvg className="spoon__img" />
    </div>
  );
}