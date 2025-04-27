export type Severity = 'Low' | 'Medium' | 'High';

export interface Incident {
  id: number;
  title: string;
  description: string;
  severity: Severity;
  reported_at: string;
}

export const mockIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in job recommendations, leading to potential discrimination issues. Initial investigation suggests training data imbalance.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information during emergency response simulation, highlighting potential risks in critical applications.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata during conversation. Impact was minimal but highlights need for improved data handling.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  },
  {
    id: 4,
    title: "AI Model Denial of Service",
    description: "Automated system experienced unexpected shutdown due to adversarial inputs, causing temporary service disruption for critical infrastructure monitoring.",
    severity: "High",
    reported_at: "2025-04-02T08:45:00Z"
  },
  {
    id: 5,
    title: "Privacy Boundary Violation",
    description: "AI assistant accidentally referenced private conversation data while responding to a different user. No sensitive information was exposed but protocol review needed.",
    severity: "Medium",
    reported_at: "2025-03-28T16:20:00Z"
  },
  {
    id: 6,
    title: "Model Performance Degradation",
    description: "Gradual decline in AI model accuracy detected over past week, potentially due to data drift or system configuration changes.",
    severity: "Low",
    reported_at: "2025-03-25T11:10:00Z"
  },
  {
    id: 7,
    title: "Unauthorized Access Attempt",
    description: "Multiple sophisticated attempts to extract training data through prompt injection detected. Security measures prevented data exposure but highlighted vulnerability.",
    severity: "High",
    reported_at: "2025-04-03T09:30:00Z"
  }
];