import { X } from 'lucide-react';
import { Incident } from '../types';

interface IncidentDetailsProps {
  incident: Incident;
  onClose: () => void;
}

export function IncidentDetails({ incident, onClose }: IncidentDetailsProps) {
  const date = new Date(incident.reported_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const severityStyles = {
    Low: 'bg-blue-500/20 border-blue-500/50 text-blue-400',
    Medium: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400',
    High: 'bg-red-500/20 border-red-500/50 text-red-400',
  }[incident.severity];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl border border-gray-700 w-full max-w-2xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Incident Details</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <div className="p-4 space-y-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className={`px-3 py-1 rounded-full text-xs font-medium border ${severityStyles}`}>
                {incident.severity}
              </div>
              <span className="text-sm text-gray-400">{date}</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-4">{incident.title}</h3>
            <p className="text-gray-300 leading-relaxed">{incident.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}