import { Incident } from '../types';

interface IncidentCardProps {
  incident: Incident;
  onViewDetails: () => void;
}

export function IncidentCard({ incident, onViewDetails }: IncidentCardProps) {
  const date = new Date(incident.reported_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const severityStyles = {
    Low: 'bg-blue-500/20 border-blue-500/50 text-blue-400 after:bg-blue-500/10',
    Medium: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400 after:bg-yellow-500/10',
    High: 'bg-red-500/20 border-red-500/50 text-red-400 after:bg-red-500/10',
  }[incident.severity];

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-gray-600 transition-colors">
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className={`relative px-3 py-1 rounded-full text-xs font-medium border ${severityStyles} after:absolute after:inset-0 after:rounded-full after:animate-pulse`}>
                {incident.severity}
              </div>
              <span className="text-sm text-gray-400">{date}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-100">{incident.title}</h3>
          </div>
          <button
            onClick={onViewDetails}
            className="group relative px-3 py-1.5 text-sm text-gray-300 hover:text-white bg-gray-700 rounded-lg overflow-hidden transition-colors hover:bg-gray-600"
          >
            <span className="relative z-10">View Details</span>
            <span className="absolute inset-0 bg-gradient-to-r from-gray-600/0 via-gray-600/30 to-gray-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
          </button>
        </div>
      </div>
    </div>
  );
}