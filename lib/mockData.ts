export interface Question {
  id: string
  text: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  level: 'basic' | 'intermediate' | 'paramedic'
}

export interface Quiz {
  id: string
  name: string
  level: 'basic' | 'intermediate' | 'paramedic'
  type: 'practice' | 'exam' | 'drill'
  categoryFilter?: string
  timeLimit?: number
  questionCount: number
  passingScore: number
}

export interface QuizSession {
  id: string
  userId: string
  quizId: string
  startTime: number
  endTime?: number
  answers: Record<string, number>
  score?: number
  passed?: boolean
  category?: string
}

export interface User {
  id: string
  email: string
  name: string
  role: 'student' | 'admin'
  createdAt: number
  certificationLevel?: 'basic' | 'intermediate' | 'paramedic'
}

// Mock questions for EMT-Basic
export const emtBasicQuestions: Question[] = [
  {
    id: 'q1',
    text: 'What does ABCs stand for in emergency care?',
    options: [
      'Airway, Breathing, Circulation',
      'Alert, Basic, Cardiac',
      'Artery, Breath, Chest',
      'Awareness, Breathing, Consciousness'
    ],
    correctAnswer: 0,
    explanation: 'ABCs are the foundation of emergency assessment and treatment. Airway maintenance, Breathing support, and Circulation maintenance are the three critical priorities in emergency care.',
    category: 'Basic Life Support',
    difficulty: 'easy',
    level: 'basic'
  },
  {
    id: 'q2',
    text: 'You respond to a 45-year-old male with chest pain and shortness of breath. After ensuring scene safety and performing your initial assessment, what is your next action?',
    options: [
      'Place the patient in a comfortable position and monitor vitals',
      'Administer oxygen if SpO2 is below 94%',
      'Arrange for rapid transport to an appropriate facility',
      'All of the above in order of priority'
    ],
    correctAnswer: 3,
    explanation: 'All of these actions are important. First, position the patient comfortably. Second, administer oxygen if indicated by SpO2 readings. Third, arrange rapid transport as chest pain may indicate acute coronary syndrome.',
    category: 'Cardiac Emergencies',
    difficulty: 'medium',
    level: 'basic'
  },
  {
    id: 'q3',
    text: 'What is the proper compression-to-ventilation ratio for single-rescuer CPR in an adult?',
    options: [
      '15:2',
      '30:2',
      '100:2',
      '60:3'
    ],
    correctAnswer: 1,
    explanation: 'The current recommended ratio is 30 chest compressions to 2 ventilations. This ratio optimizes perfusion and oxygenation during cardiac arrest.',
    category: 'CPR & Resuscitation',
    difficulty: 'easy',
    level: 'basic'
  },
  {
    id: 'q4',
    text: 'You are treating a patient with a femur fracture with severe bleeding. Which action should be taken FIRST?',
    options: [
      'Apply a tourniquet above the wound',
      'Direct pressure with a sterile gauze',
      'Check for distal pulse',
      'Splint the extremity'
    ],
    correctAnswer: 1,
    explanation: 'Direct pressure is the first step in hemorrhage control. Tourniquets are reserved for uncontrolled bleeding that does not respond to direct pressure. Always check distal pulses before and after tourniquet application.',
    category: 'Trauma & Hemorrhage Control',
    difficulty: 'medium',
    level: 'basic'
  },
  {
    id: 'q5',
    text: 'What is the first sign of shock in a patient?',
    options: [
      'Hypotension',
      'Altered mental status',
      'Tachycardia',
      'Loss of consciousness'
    ],
    correctAnswer: 2,
    explanation: 'Tachycardia is often the first compensatory response to shock. The body increases heart rate to maintain perfusion. Hypotension is a late sign of shock.',
    category: 'Shock & Perfusion',
    difficulty: 'medium',
    level: 'basic'
  },
  {
    id: 'q6',
    text: 'A 3-year-old child is not breathing. What is the appropriate compression rate for pediatric CPR?',
    options: [
      '80-100 compressions per minute',
      '100-120 compressions per minute',
      '120-140 compressions per minute',
      '140-160 compressions per minute'
    ],
    correctAnswer: 1,
    explanation: 'Pediatric CPR requires 100-120 compressions per minute. This is slightly faster than adult CPR to account for the higher metabolic rate in children.',
    category: 'Pediatric Emergencies',
    difficulty: 'medium',
    level: 'basic'
  },
  {
    id: 'q7',
    text: 'When performing the primary assessment, in what order should you assess the patient?',
    options: [
      'Breathing, Airway, Circulation',
      'Airway, Breathing, Circulation',
      'Circulation, Airway, Breathing',
      'Responsive, Airway, Breathing'
    ],
    correctAnswer: 1,
    explanation: 'The primary assessment follows the ABCs: Airway first (ensure patent airway), Breathing second (ensure adequate ventilation), Circulation third (ensure adequate perfusion).',
    category: 'Patient Assessment',
    difficulty: 'easy',
    level: 'basic'
  },
  {
    id: 'q8',
    text: 'You encounter a patient with signs of heat stroke. What is the most appropriate field treatment?',
    options: [
      'Apply ice to the entire body',
      'Move to cool environment and cool the skin with water',
      'Give cold water to drink',
      'Apply a cold compress to the forehead only'
    ],
    correctAnswer: 1,
    explanation: 'Heat stroke patients should be moved to a cool environment immediately and cooled using water on the skin. Do not give ice directly or allow drinking if altered mental status is present.',
    category: 'Environmental Emergencies',
    difficulty: 'medium',
    level: 'basic'
  },
  {
    id: 'q9',
    text: 'What is the recommended recovery position for an unconscious, breathing patient?',
    options: [
      'Supine with airway open',
      'Prone with head to the side',
      'Lateral recumbent with airway open',
      'Sitting upright'
    ],
    correctAnswer: 2,
    explanation: 'The recovery position is lateral recumbent. This position keeps the airway open and allows fluids to drain from the mouth, reducing aspiration risk.',
    category: 'Basic Life Support',
    difficulty: 'easy',
    level: 'basic'
  },
  {
    id: 'q10',
    text: 'A patient presents with sudden severe headache, stiff neck, and fever. What condition should you suspect?',
    options: [
      'Migraine headache',
      'Meningitis',
      'Tension headache',
      'Dehydration'
    ],
    correctAnswer: 1,
    explanation: 'This is the classic triad for meningitis: fever, severe headache, and nuchal rigidity (stiff neck). This is a medical emergency requiring rapid transport and isolation precautions.',
    category: 'Medical Emergencies',
    difficulty: 'medium',
    level: 'basic'
  }
]

// Mock questions for Paramedic
export const paramedicQuestions: Question[] = [
  {
    id: 'p1',
    text: 'A patient presents with acute anterior wall MI. Which coronary artery is most likely occluded?',
    options: [
      'Right coronary artery',
      'Left anterior descending artery',
      'Left circumflex artery',
      'Left main coronary artery'
    ],
    correctAnswer: 1,
    explanation: 'The left anterior descending (LAD) artery supplies the anterior wall and anterior septum. LAD occlusion produces anterior wall MI with characteristic ST elevation in leads V1-V4.',
    category: 'Cardiology',
    difficulty: 'hard',
    level: 'paramedic'
  },
  {
    id: 'p2',
    text: 'What is the appropriate dose of epinephrine for an adult in cardiac arrest?',
    options: [
      '0.1 mg IV push',
      '0.3 mg IV push',
      '1 mg IV push',
      '10 mg IV push'
    ],
    correctAnswer: 2,
    explanation: 'The standard dose of epinephrine for adult cardiac arrest is 1 mg (1:10,000 solution) IV push every 3-5 minutes during resuscitation.',
    category: 'Pharmacology',
    difficulty: 'easy',
    level: 'paramedic'
  },
  {
    id: 'p3',
    text: 'A patient is experiencing acute pulmonary edema. You administer oxygen, but the patient remains hypoxic. What is the next appropriate intervention?',
    options: [
      'Administer IV nitroglycerin and diuretics',
      'Prepare for intubation',
      'Administer beta-blockers',
      'Apply positive end-expiratory pressure (PEEP)'
    ],
    correctAnswer: 3,
    explanation: 'PEEP helps recruit alveoli and improve oxygenation in acute pulmonary edema. This can be delivered via CPAP or BVM with PEEP valve prior to intubation.',
    category: 'Respiratory Emergencies',
    difficulty: 'hard',
    level: 'paramedic'
  },
  {
    id: 'p4',
    text: 'What is the correct initial dose of amiodarone for pulseless ventricular fibrillation?',
    options: [
      '100 mg IV',
      '150 mg IV',
      '200 mg IV',
      '300 mg IV'
    ],
    correctAnswer: 3,
    explanation: 'The initial dose of amiodarone for pulseless VF or pulseless VT is 300 mg IV. If VF persists after 5 minutes, a second dose of 150 mg may be given.',
    category: 'Pharmacology',
    difficulty: 'medium',
    level: 'paramedic'
  },
  {
    id: 'p5',
    text: 'A patient presents with acute ischemic stroke symptoms. What is the maximum window for thrombolytic therapy (tPA)?',
    options: [
      '1 hour from symptom onset',
      '2.5 hours from symptom onset',
      '4.5 hours from symptom onset',
      '6 hours from symptom onset'
    ],
    correctAnswer: 2,
    explanation: 'The FDA-approved window for IV thrombolytic therapy is within 4.5 hours of last known well time for acute ischemic stroke. Early notification of the receiving facility is critical.',
    category: 'Neurological Emergencies',
    difficulty: 'medium',
    level: 'paramedic'
  }
]

// Mock questions for Advanced Practice
export const advancedPracticeQuestions: Question[] = [
  {
    id: 'adv1',
    text: 'In a pediatric patient with severe dehydration, what is the appropriate fluid for initial resuscitation?',
    options: [
      'Dextrose 5% in water (D5W)',
      'Normal saline 0.9% bolus',
      'Hypotonic saline',
      'Lactated Ringer solution'
    ],
    correctAnswer: 3,
    explanation: 'Lactated Ringer solution is the preferred crystalloid for fluid resuscitation in pediatric patients due to its electrolyte composition closer to plasma.',
    category: 'Pediatrics',
    difficulty: 'hard',
    level: 'paramedic'
  },
  {
    id: 'adv2',
    text: 'A 67-year-old female with COPD presents with acute dyspnea. Her SpO2 is 85%. What is your initial management?',
    options: [
      'High-flow oxygen immediately',
      'Titrate oxygen to maintain SpO2 88-92%',
      'Do not give oxygen, use only CPAP',
      'Give oxygen only if SpO2 drops below 80%'
    ],
    correctAnswer: 1,
    explanation: 'COPD patients can develop CO2 retention with supplemental oxygen. Titrate to SpO2 88-92% to avoid depressing respiratory drive while treating hypoxemia.',
    category: 'Respiratory',
    difficulty: 'hard',
    level: 'paramedic'
  },
  {
    id: 'adv3',
    text: 'What is the primary action of nitroglycerin in acute MI management?',
    options: [
      'Increases heart rate',
      'Decreases preload and afterload',
      'Increases contractility',
      'Increases coronary perfusion pressure'
    ],
    correctAnswer: 1,
    explanation: 'Nitroglycerin acts as a vasodilator, decreasing preload (venous return) and afterload (arterial resistance), which reduces myocardial oxygen demand.',
    category: 'Cardiology',
    difficulty: 'medium',
    level: 'paramedic'
  }
]
