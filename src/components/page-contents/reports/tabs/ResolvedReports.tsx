
import ReportCard from '../component/ReportCard';

const ResolvedReports = () => {
  return (
    <section className="flex flex-col gap-6">
      {Array(4)
        .fill("")
        .map((_, i) => (
          <ReportCard status="Resolved" key={`card-${i}`} />
        ))}
    </section>
  );
}

export default ResolvedReports