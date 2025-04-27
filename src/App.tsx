import { useState } from 'react';
import { Plus, AlertTriangle } from 'lucide-react';
import { Incident, mockIncidents, Severity } from './types';
import { IncidentCard } from './components/IncidentCard';
import { IncidentForm } from './components/IncidentForm';
import { IncidentDetails } from './components/IncidentDetails';

function App() {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [selectedSeverity, setSelectedSeverity] = useState<Severity | 'All'>('All');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [showForm, setShowForm] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null);

  const filteredIncidents = incidents
    .filter(incident => selectedSeverity === 'All' || incident.severity === selectedSeverity)
    .sort((a, b) => {
      const dateA = new Date(a.reported_at).getTime();
      const dateB = new Date(b.reported_at).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

  const handleNewIncident = (newIncident: Omit<Incident, 'id'>) => {
    const maxId = Math.max(...incidents.map(i => i.id), 0);
    setIncidents([...incidents, { ...newIncident, id: maxId + 1 }]);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-white">AI Safety Incident Dashboard</h1>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="group relative flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg overflow-hidden transition-all duration-300 hover:px-8 hover:bg-blue-500"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 group-hover:translate-x-[200%] transition-transform duration-700"></span>
            <Plus className="w-5 h-5 transition-transform group-hover:rotate-90 duration-300" />
            <span className="font-medium">Report Incident</span>
          </button>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-6">
          <div className="flex flex-wrap gap-4">
            <div>
              <label htmlFor="severity" className="block text-sm font-medium text-gray-300 mb-1">
                Filter by Severity
              </label>
              <select
                id="severity"
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value as Severity | 'All')}
                className="bg-gray-900 rounded-lg border border-gray-700 px-3 py-1.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="All">All Severities</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-300 mb-1">
                Sort by Date
              </label>
              <select
                id="sort"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
                className="bg-gray-900 rounded-lg border border-gray-700 px-3 py-1.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredIncidents.map(incident => (
            <IncidentCard 
              key={incident.id} 
              incident={incident}
              onViewDetails={() => setSelectedIncident(incident)}
            />
          ))}
          {filteredIncidents.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              No incidents found matching the selected criteria.
            </div>
          )}
        </div>
      </div>

      {showForm && (
        <IncidentForm
          onSubmit={handleNewIncident}
          onClose={() => setShowForm(false)}
        />
      )}

      {selectedIncident && (
        <IncidentDetails
          incident={selectedIncident}
          onClose={() => setSelectedIncident(null)}
        />
      )}
    </div>
  );
}

export default App;