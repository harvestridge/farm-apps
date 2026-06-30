// Visual Evaluation form data extracted from uploaded docx files
const EVALUATIONS = {
  sanitation: {
    title: 'Sanitation',
    description: 'Chemical Spill Report, Handwashing Demo/Observation, Chemical use/storage',
    sections: [
      {name: 'Sanitation (SSOPs)', items: [
        {label: 'Daily cleaning', criteria: ['Consistently follows procedures as trained','Demonstrates process','Can explain purpose']},
        {label: 'Restroom/Breakroom Cleaning', criteria: ['Consistently follows procedures as trained','Demonstrates process','Can explain purpose']},
        {label: 'Waste Management', criteria: ['Consistently follows procedures as trained','Demonstrates process','Can explain purpose']},
        {label: 'Handwashing', criteria: ['Consistently follows procedures as trained','Demonstrates process','Can explain purpose']},
        {label: 'Personal hygiene', criteria: ['Consistently follows procedures as trained','Demonstrates process','Can explain purpose']}
      ]},
      {name: 'Sanitation (chemical usage)', items: [
        {label: 'Chemical use', criteria: ['Consistently follows procedures as trained','Demonstrates process','Can explain purpose','Follows all safety procedures','Can locate, use, and explain purpose of SDS book','Can locate first aid and eye wash materials']},
        {label: 'Storage', criteria: ['Consistently follows procedures as trained','Demonstrates process','Can explain purpose','Follows all safety procedures']},
        {label: 'Spills', criteria: ['Able to state and explain 5 steps','Can locate and explain how to use safety equipment','Can accurately fill out a spill report']}
      ]}
    ]
  },
  shipping: {
    title: 'Shipping & Receiving',
    description: 'Shipping and receiving SOP 16.2, Scale Instructions 16.3, 16.5, Lot code explanation',
    sections: [
      {name: 'Shipping/Receiving', items: [
        {label: 'Shipping/Receiving Procedures', criteria: ['Consistently follows procedures as trained','Can demonstrate process','Can explain purpose','Keeps work area clean and organized','Safety and security procedures followed','Demonstrates proper receiving procedures']},
        {label: 'Trailer inspections', criteria: ['Consistently follows procedures as trained','Can demonstrate process','Can explain purpose','Safety and security procedures followed','Able to document inspection section on BOL correctly']},
        {label: 'Scale use', criteria: ['Consistently follows procedures as trained','Can demonstrate process','Can explain purpose','Able to accurately fill out scale ticket']}
      ]}
    ]
  },
  processing: {
    title: 'Processing & Equipment',
    description: 'PM Tasks/log, Work orders, daily processing log, pre/post op checklist',
    sections: [
      {name: 'Equipment — able to demonstrate proper use, safety, and explain purpose', items: [
        {label: 'Camera use', criteria: ['Demonstrated competency']},
        {label: 'Air compressor', criteria: ['Demonstrated competency']},
        {label: 'Outside conveyor', criteria: ['Demonstrated competency']},
        {label: 'Plant bin', criteria: ['Demonstrated competency']},
        {label: 'Mill', criteria: ['Demonstrated competency']},
        {label: 'Destoner', criteria: ['Demonstrated competency']},
        {label: 'Aspirator', criteria: ['Demonstrated competency']},
        {label: 'Gravity Table', criteria: ['Demonstrated competency']},
        {label: 'Scale', criteria: ['Demonstrated competency']},
        {label: 'Bagging/toting', criteria: ['Demonstrated competency']},
        {label: 'Fork truck', criteria: ['Demonstrated competency']},
        {label: 'Pallet jack', criteria: ['Demonstrated competency']},
        {label: 'Misc. hand tools use and storage', criteria: ['Demonstrated competency']}
      ]},
      {name: 'Changeover — able to demonstrate proper use, safety, and explain purpose', items: [
        {label: 'Dry cleaning', criteria: ['Demonstrated competency']},
        {label: 'Emptying Line', criteria: ['Demonstrated competency']}
      ]},
      {name: 'Line Operation — able to demonstrate proper use, safety, and explain purpose', items: [
        {label: 'Pre-operational Checklist', criteria: ['Demonstrated competency']},
        {label: 'Daily Checklist', criteria: ['Demonstrated competency']},
        {label: 'Startup/Shut down of line', criteria: ['Demonstrated competency']},
        {label: 'Emergency shut down', criteria: ['Demonstrated competency']},
        {label: 'Downtime report', criteria: ['Demonstrated competency']}
      ]},
      {name: 'Sampling/Grading', items: [
        {label: 'Sampling/Grading', criteria: ['Consistently follows procedures as trained','Can demonstrate process','Can explain purpose','Use of the Moisture tester (Dickie John)','Can accurately complete a grading sheet']}
      ]},
      {name: 'Preventative Maintenance', items: [
        {label: 'Preventative Maintenance', criteria: ['Completes assigned PMs as directed and in a timely manner','Able to fill out corresponding documentation']}
      ]}
    ]
  },
  environmental: {
    title: 'Environmental Monitoring',
    description: 'Swabbing and testing supplies, Instructions from Microbiological Associates, 15.0 SOP for Environmental Monitoring, 15.1 Swabbing Sites',
    sections: [
      {name: 'Environmental Monitoring (SOP)', items: [
        {label: 'Swabbing', criteria: ['Consistently follows procedures as trained','Demonstrates process','Can explain purpose']},
        {label: 'Site selection', criteria: ['Consistently follows procedures as trained','Demonstrates process','Can explain purpose']},
        {label: 'Water testing', criteria: ['Consistently follows procedures as trained','Demonstrates process','Can explain purpose']},
        {label: 'Air testing', criteria: ['Consistently follows procedures as trained','Demonstrates process','Can explain purpose']},
        {label: 'Handwashing and hygiene', criteria: ['Consistently follows procedures as trained','Demonstrates process','Can explain purpose']}
      ]},
      {name: 'Paperwork and Sample Storage', items: [
        {label: 'Paperwork', criteria: ['Consistently follows procedures as trained','Demonstrates process','Can explain purpose','Follows directions and completes accurately']},
        {label: 'Storage', criteria: ['Consistently follows procedures as trained','Demonstrates process','Can explain purpose','Follows all storage procedures']}
      ]}
    ]
  },
  ccp: {
    title: 'CCP / Preventative Control Monitoring',
    description: '18.0 SOP for Metal Control, Preventative Control Chart, Daily Processing Sheets (Magnet Section)',
    sections: [
      {name: 'Metal Control / Magnet Inspection SOP', items: [
        {label: 'Magnet Inspection', criteria: ['Consistently follows procedures as trained','Demonstrates process','Can explain purpose']},
        {label: 'Form Completion', criteria: ['Consistently follows procedures as trained','Demonstrates process','Can explain purpose']},
        {label: 'Corrective Actions', criteria: ['Consistently follows procedures as trained','Demonstrates process','Can explain purpose','Understands the process if findings are unacceptable']}
      ]}
    ]
  }
};
