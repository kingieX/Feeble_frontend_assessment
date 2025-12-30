interface Props {
  label: string;
}

const PrimaryButton = ({ label }: Props) => (
  <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
    {label}
  </button>
);

export default PrimaryButton;
