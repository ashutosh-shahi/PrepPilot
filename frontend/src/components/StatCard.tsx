interface StatCardProps {
  title: string;
  value: string;
}

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <h3 className="text-slate-400 text-sm mb-2">
        {title}
      </h3>

      <p className="text-3xl font-bold text-white">
        {value}
      </p>
    </div>
  );
};

export default StatCard;