import Icon from "../assets/apple.png";
interface Props {
  label: string;
}

const SecondaryButton = ({ label }: Props) => (
  <button className="group inline-flex items-center gap-2 rounded-full border border-border-secondary px-6 py-2 text-sm font-medium text-text transition hover:bg-white">
    <img src={Icon} alt="Apple" className="h-4 w-4" />
    <span className="bg-gray-300 w-px h-4"></span>
    <span>{label}</span>
  </button>
);

export default SecondaryButton;
