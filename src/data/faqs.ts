// Answers are arrays of paragraphs; a paragraph may be a string or { list: string[] }.
export type FaqPart = string | { list: string[] };
export interface Faq { id: string; question: string; answer: FaqPart[] }

export const faqs: Faq[] = [
  {
    id: 'what-therapy-looks-like',
    question: 'What does therapy with you look like?',
    answer: [
      'Sessions are conversational and focused.',
      'The first session is more structured and intake-based, where I ask questions to understand your background and what you want to work on.',
      'After that, sessions are more open and guided by what feels most relevant each week. At times, we may focus more directly on a specific pattern, decision, or situation.',
      'I tend to be engaged and direct when helpful. Humor can show up, but the work remains intentional.',
    ],
  },
  {
    id: 'structure',
    question: 'Are sessions structured?',
    answer: ['The first session is structured.', 'After that, sessions are mostly open, with structure added when it is useful.'],
  },
  {
    id: 'homework',
    question: 'Do you give homework or exercises?',
    answer: [
      'I do not typically use worksheets or structured exercises.',
      'At times, I may suggest things to notice or reflect on between sessions, but these are optional.',
    ],
  },
  {
    id: 'session-length',
    question: 'How long are sessions and how are they held?',
    answer: ['Sessions are 50 minutes long and conducted via telehealth (online).'],
  },
  {
    id: 'who',
    question: 'Do you only work with immigrants or first-generation clients?',
    answer: [
      'No.',
      'While I specialize in working with immigrants and first-generation individuals, I also work with adults navigating identity, relationships, and life transitions more broadly.',
    ],
  },
  {
    id: 'fee',
    question: 'What is your fee?',
    answer: ['My standard rate is $200 per 50-minute session.', 'I offer a limited number of sliding scale spots based on availability.'],
  },
  {
    id: 'insurance',
    question: 'Do you take insurance?',
    answer: [
      'I am in-network with:',
      { list: ['Aetna', 'United Healthcare (Optum)', 'Oxford (Optum)', 'United Healthcare Medicare Advantage'] },
      'For out-of-network clients, I can provide a superbill for potential reimbursement.',
    ],
  },
  {
    id: 'cancellation',
    question: 'What is your cancellation policy?',
    answer: [
      "I require 24 hours' notice for cancellations or rescheduling.",
      'Sessions canceled within 24 hours may be subject to the full session fee.',
    ],
  },
  {
    id: 'fit',
    question: 'Who may not be the best fit for this approach?',
    answer: [
      'This approach may not be the best fit if you are looking for highly structured, worksheet-based therapy or a strictly directive style.',
    ],
  },
  {
    id: 'getting-started',
    question: 'How do I get started?',
    answer: ['You can schedule a 15-minute consultation to ask questions and see if this feels like a good fit.'],
  },
];

export const faqText = (f: Faq) =>
  f.answer.map((p) => (typeof p === 'string' ? p : p.list.join(', ') + '.')).join(' ');
