import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <div className="text-md font-mono">
      <time dateTime={dateString}>
        {format(date, "LLLL	d, yyyy").toLowerCase()}
      </time>
    </div>
  );
}