export const CountryInfoField = ({
  title,
  content,
}: {
  title: string;
  content: string | number;
}) => (
  <li>
    <span className="inline-block w-32 font-bold p-1">{title}:</span>
    <span className="text-sm">{content}</span>
  </li>
);
