interface ProgressBarProps {
  topic: string;
  value: number;
}

const ProgressBar = ({
  topic,
  value,
}: ProgressBarProps) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-white">
            {topic}
        </span>

        <span className="text-slate-300">
            {value}%
        </span>
      </div>

      <div className="w-full h-3 bg-slate-800 rounded-full">
        <div
          className="h-3 bg-blue-500 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;