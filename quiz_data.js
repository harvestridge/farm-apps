// All quiz data extracted from uploaded docx files
const QUIZZES = {
  comprehensive: {
    title: 'Comprehensive Quiz',
    questions: [
      {q:'What does GMP stand for?', type:'single', options:['Green Mountain Power','Grain Manufacturing Producer','Good Manufacturing Practices','Good Media Process'], answer:[2]},
      {q:'What type of bandages are acceptable in the facility?', type:'single', options:['Any bandage','Cloth bandages','OSHA approved bandages','Metal detectable bandages'], answer:[3]},
      {q:'When should hands be washed?', type:'multi', options:['After smoking','After eating','After using the restroom','After touching unsanitary surfaces'], answer:[0,1,2,3]},
      {q:'When should GMPs be followed?', type:'single', options:['Only during inspections','When someone is watching','Always','Never'], answer:[2]},
      {q:'GMPs are the minimum requirements to ensure food safety and quality.', type:'tf', answer:true},
      {q:'What are the three main types of food safety hazards?', type:'single', options:['Fire, Water, Wind','Biological, Physical, Chemical','Cleaners, Bacteria, Pesticides','Basic, Critical, Severe'], answer:[1]},
      {q:'Which of the following are common physical hazards in our product?', type:'multi', options:['Rocks','Wood','Metal','Bacteria'], answer:[0,1,2]},
      {q:'Metal detection is a common preventative control.', type:'tf', answer:true},
      {q:'What should you do if you find a hazard or contamination risk?', type:'single', options:['Ignore it','Fix it quietly','Report it to QC or a supervisor','Wait until the end of the shift'], answer:[2]},
      {q:'Food safety is only management\u2019s responsibility.', type:'tf', answer:false},
      {q:'What is an allergy?', type:'single', options:['A reaction of the immune system to a substance','A food preference','A digestive issue only','A learned behavior'], answer:[0]},
      {q:'Allergen-containing products must be separated from non-allergen products.', type:'tf', answer:true},
      {q:'Who is responsible for preventing cross-contact?', type:'single', options:['QC only','Management only','Plant Manager','Everyone'], answer:[3]},
      {q:'What should you do if allergen information is missing from a label?', type:'single', options:['Use it anyway','Write it in','Report it and reject the label','Throw it away'], answer:[2]},
      {q:'Which are examples of Food Fraud?', type:'multi', options:['Mislabeling','Substituting','Altering','Tampering'], answer:[0,1,2,3]},
      {q:'Who is responsible for reporting suspected food fraud or suspicious activity?', type:'single', options:['QC','Management','Owners','Everyone'], answer:[3]},
      {q:'Doors should only be open when in use.', type:'tf', answer:true},
      {q:'What is the best way to prevent pests?', type:'single', options:['Use traps only','Limit food, water, and shelter','Ignore them','Keep doors open'], answer:[1]},
      {q:'If you see signs of pests, what should you do?', type:'single', options:['Ignore it','Handle it yourself','Report it to QC or management','Wait to see if it continues'], answer:[2]},
      {q:'Chemicals must be approved and properly stored.', type:'tf', answer:true},
      {q:'What should you do if a chemical spill occurs?', type:'single', options:['Ignore it','Clean it later','Report and follow proper procedures','Only act if it\u2019s large'], answer:[2]},
      {q:'When inspecting a trailer, what must be verified?', type:'multi', options:['Cleanliness','No pest activity','Structural condition','No unusual odors'], answer:[0,1,2,3]},
      {q:'When should a trailer be inspected?', type:'single', options:['After loading','Before loading','While driving','Not necessary'], answer:[1]},
      {q:'What should you do if a trailer fails inspection?', type:'multi', options:['Ignore it','Contact logistics','Refuse to load','Document issue'], answer:[1,2,3]},
      {q:'Locks and seals are required for all shipped loads.', type:'tf', answer:true}
    ]
  },
  gmp: {
    title: 'GMP Quiz',
    questions: [
      {q:'What does the acronym GMP stand for?', type:'single', options:['Green Mountain Power','Grain Manufacturing Producer','Good Manufacturing Practices','Good Media Process'], answer:[2]},
      {q:'What type of Bandages are acceptable for use in our facility?', type:'single', options:['Bandages aren\u2019t necessary for covering wounds','Anything that covers the wound is acceptable','OSHA approved bandages','Metal detectable bandages'], answer:[3]},
      {q:'Which of the following require the washing of hands?', type:'multi', options:['After smoking','After eating','After using the restroom','After touching unsanitary surfaces'], answer:[0,1,2,3]},
      {q:'When should GMP\u2019s be followed?', type:'single', options:['Only during inspections','Never','Always','When someone is looking'], answer:[2]},
      {q:'GMP\u2019s are the minimum requirements that a food product manufacturer must meet to ensure that products are of high quality and do not pose any risk to the consumer or public.', type:'tf', answer:true},
      {q:'Allergen containing products must be separated from non-allergen products to prevent cross contact.', type:'tf', answer:true},
      {q:'It is ok to use HRP designated equipment for non-HRP related tasks when/if', type:'single', options:['You report it to your supervisor or QC','You return it when finished','It doesn\u2019t pose a risk to food products','None of the above'], answer:[3]},
      {q:'When are shipping/receiving doors and maintenance doors allowed to be opened?', type:'single', options:['When the weather is nice','Only when in use','Only when the plant is not running product','Only in the winter when there aren\u2019t as many pests'], answer:[1]},
      {q:'It is acceptable to bring in unapproved chemicals if you take them home after using them.', type:'tf', answer:false},
      {q:'Food safety is only management\u2019s responsibility.', type:'tf', answer:false}
    ]
  },
  allergen: {
    title: 'Allergen Quiz',
    questions: [
      {q:'Allergens can be stored with non-allergen commodities.', type:'tf', answer:false},
      {q:'What is an allergy?', type:'single', options:['A reaction of the immune system to a normally harmless substance','A product that consumers are picky about','A digestive response to a food due to lack of digestive enzymes','Allergies are learned behavior due to dislike of certain foods'], answer:[0]},
      {q:'Allergen containing product does not need special labels.', type:'tf', answer:false},
      {q:'Cross contact and Cross contamination are the same thing.', type:'tf', answer:false},
      {q:'Personal practices that can help prevent cross contact are:', type:'multi', options:['Wash hands after eating','Do not bring food into the production facility','Do a full clean down in between running commodities containing allergens','None of the above'], answer:[0,1,2]},
      {q:'Why should we be concerned about Allergens?', type:'single', options:['We don\u2019t need to be, it is only the responsibility of the person it affects','Someone could get sick or die from Allergen exposure','Because it looks good on packaging to say Allergen Free','Because Allergens taste bad'], answer:[1]},
      {q:'When does allergen testing/swabbing need to be conducted and by whom?', type:'single', options:['Every day by the plant manager','Once a week by the plant operators','After completion of running an allergen by the QC','Once a week by the QC'], answer:[2]},
      {q:'When is it ok to have food and drink in the facility?', type:'single', options:['When no one is looking','When product is not being run','Never, only water allowed and only in the plant office','If there isn\u2019t an inspection going on'], answer:[2]},
      {q:'Who is responsible for cross-contact prevention?', type:'single', options:['The QC','Senior Management','Plant Manager','Everyone'], answer:[3]},
      {q:'What do you do if allergen information is missing from labels before applying to product?', type:'single', options:['Apply the label anyway, no one will notice','Inform the plant manager so that labels can be rejected and reprinted','Write the information on the label, ensuring that it is copied correctly from another label','Throw them away and ask for new ones'], answer:[1]}
    ]
  },
  foodfraud: {
    title: 'Food Fraud & Defense Quiz',
    questions: [
      {q:'Which of the following are considered acts of Food Fraud?', type:'multi', options:['Mislabeling','Substituting','Altering','Tampering'], answer:[0,1,2,3]},
      {q:'Whose responsibility is it to report suspected Food Fraud?', type:'single', options:['The plant manager','The owners','The QC','Everyone'], answer:[3]},
      {q:'It is not necessary for contract workers to be supervised in the facility.', type:'tf', answer:false},
      {q:'Locks and seals are required for all shipped loads.', type:'tf', answer:true},
      {q:'Which of the following are preventative measures for reducing the risk of Food Fraud?', type:'multi', options:['Visitors and Contract workers are required to sign in at the office prior to being granted entry to the facility and must complete GMP training','All doors to the outside must always remain locked','All chemicals must be approved, logged, and locked up when not in use','Any unknown people found in the facility must be reported and escorted from the facility'], answer:[0,1,2,3]},
      {q:'Chemical storage cabinet must be labeled.', type:'tf', answer:true},
      {q:'Which of the following people are allowed to have access to the Pin entry code?', type:'single', options:['Contract workers','Visitors','Inspectors','Approved employees'], answer:[3]},
      {q:'What is the purpose of Food Defense?', type:'multi', options:['To prevent Food Fraud','To protect customers','To ensure the quality of our product','To protect our reputation'], answer:[0,1,2,3]},
      {q:'Food Defense and Food Safety are the same thing.', type:'tf', answer:false},
      {q:'When should you notify someone regarding suspected Food Fraud?', type:'multi', options:['You see someone you don\u2019t think belongs in the facility','You see anyone, even an employee, doing something that looks suspicious','You are threatened by someone','External doors are opened, unsupervised'], answer:[0,1,2,3]}
    ]
  },
  haccp: {
    title: 'Food Safety / HACCP Quiz',
    questions: [
      {q:'What does HACCP stand for?', type:'single', options:['Hazards Allergies Cleaning Cooking Processing','Hazard Analysis Critical Control Point','Hazards Allergens Chemicals Cleaning Procedure','Handling Allergens Cooking Chilling Prevention'], answer:[1]},
      {q:'What are 3 types of Hazards regarding food safety?', type:'single', options:['Cleaners, Bacteria, Pesticides','Basic, Critical, Severe','Fire, Wind, Water','Biological, Physical, Chemical'], answer:[3]},
      {q:'What are some of the common physical hazards found in our product prior to cleaning?', type:'multi', options:['Rocks','Wood','Metal','Bacteria'], answer:[0,1,2]},
      {q:'Metal detection is one of the most common preventative controls.', type:'tf', answer:true},
      {q:'HACCP only applies to the last step of the process.', type:'tf', answer:false},
      {q:'Which of the following are not considered a Chemical Hazard?', type:'multi', options:['Allergens','Pesticides','Wood','Bacteria'], answer:[2,3]},
      {q:'HACCP was created for what purpose?', type:'single', options:['To make restrictions on who sells food','To reduce the risk of foodborne illnesses and injuries','To add paperwork','To assist in grading commodities'], answer:[1]},
      {q:'Some examples of biological hazards are:', type:'multi', options:['Bacteria','Fungus','Parasites','Glass'], answer:[0,1,2]},
      {q:'If followed correctly HACCP can prevent product from being contaminated.', type:'tf', answer:true},
      {q:'Lack of a food safety program can be harmful to the customers.', type:'tf', answer:true}
    ]
  },
  pest: {
    title: 'Pest Control Quiz',
    questions: [
      {q:'The best way to prevent pests is to ________?', type:'single', options:['Limit light and air to suspected areas','Put out traps to catch them','Limit food, water, shelter for them','Put up no pests allowed signs'], answer:[2]},
      {q:'Which areas are pests most likely to live in?', type:'multi', options:['Dirty workstations','Cracks and creases','Clean work areas','Dry areas with no open food'], answer:[0,1]},
      {q:'Having a licensed pest control service can help reduce pests.', type:'tf', answer:true},
      {q:'The following devices are acceptable for our operation:', type:'multi', options:['Outside bait stations','Inside Traps','Light traps for Insects','Stomping with your shoe'], answer:[0,1,2]},
      {q:'If you must touch a bait station or trap, you must wash your hands immediately.', type:'tf', answer:true},
      {q:'Which of the following can reduce access to food for pests?', type:'multi', options:['Only eat food in the lunchroom','Do not leave open food in the lunchroom','Make sure if you eat in the plant, you clean it up well','Only bring food into the warehouse for special occasions'], answer:[0,1]},
      {q:'Who is responsible for Pest Control?', type:'single', options:['The Plant manager','Outside pest control service','Plant operators','All the above'], answer:[3]},
      {q:'Our outside pest control inspects our facility how often?', type:'single', options:['Once a week','Once a month','Twice a month','Quarterly'], answer:[2]},
      {q:'If you see signs of pests, you should:', type:'single', options:['Take care of the pest, no need to report it','Report it to the plant Manager or QC','Only report it if you suspect it has affected the product','No need to do anything, they will probably go away'], answer:[1]},
      {q:'There is no need for regular checks for pests since we have an outside service.', type:'tf', answer:false}
    ]
  },
  chemicals: {
    title: 'Chemicals & Cleaning Quiz',
    questions: [
      {q:'When cleaning it is acceptable to use the same equipment such as mops for restrooms/shower room as the Lunchroom.', type:'tf', answer:false},
      {q:'Why is it important to have clean restrooms and lunchrooms?', type:'single', options:['It is an SQF requirement','Clean facilities reduce the risk of illness of employees from the spread of pathogens','Clean facilities reflect how the company feels about their employees and customers','All the above'], answer:[3]},
      {q:'How often should waste containers be checked and emptied?', type:'single', options:['Daily','Weekly','Bi-Weekly','Whenever you think of it'], answer:[0]},
      {q:'Chemical cabinets are to be locked when ________?', type:'single', options:['At all times','Only when there is going to be an audit or inspection','They do not need to be locked unless there is a visitor','Never, it is not necessary to lock up chemicals'], answer:[0]},
      {q:'Chemicals need to be separated; food grade from non-food grade, with food grade being stored above non-food grade.', type:'tf', answer:true},
      {q:'When should a chemical spill report be filled out?', type:'single', options:['Spill reports are only necessary if an injury results','If someone else sees you spill a chemical','If there is a large amount of chemical spilled','Every time there is a chemical spill'], answer:[3]},
      {q:'What is the first step in addressing a chemical spill?', type:'single', options:['Cleanup','Rescue','Report','Confine'], answer:[1]},
      {q:'Who is responsible for conducting a chemical inventory?', type:'single', options:['Whomever is available','The QC or Plant Manager','It is not necessary to do an inventory','None of the above'], answer:[1]},
      {q:'Chemicals can be left out if you plan to use them again soon.', type:'tf', answer:false},
      {q:'If a label is missing from a chemical bottle, it is still ok to use if you think you can properly identify it.', type:'tf', answer:false}
    ]
  },
  shipping: {
    title: 'Shipping & Storage Quiz',
    questions: [
      {q:'When inspecting a Van trailer prior to shipping, which of the following are required for the trailer to pass inspection?', type:'multi', options:['No evidence of pest activity','No abnormal, phenolic, or objectionable odors','Trailer is structurally sound','Trailer is in sanitary condition'], answer:[0,1,2,3]},
      {q:'Dump and hopper-bottom trailers need to disclose what they hauled last and may need to provide a wash ticket prior to being loaded.', type:'tf', answer:true},
      {q:'What should you do if the truck or trailer does not pass inspection?', type:'multi', options:['Document it on the BOL','Contact the Logistics Coordinator','Refuse to load the shipment unless repairs can be made','None of the above'], answer:[0,1,2]},
      {q:'When receiving packaging products ________________.', type:'single', options:['They should be refused or returned if they do not meet specifications or if they appear to be damaged','They should be stored in the warehouse on the floor against the wall','They do not need to be inspected because they came from an approved supplier','They do not need to be rotated, as they are just packaging materials'], answer:[0]},
      {q:'When shipping finished product anything can be mixed in the same truck without buyer approval.', type:'tf', answer:false},
      {q:'When should you inspect the truck/trailer?', type:'single', options:['Before it scales out to leave','While loading','Before loading any product','Inspections don\u2019t need to be done'], answer:[2]},
      {q:'After scaling out a loaded truck what should you do with the seal?', type:'single', options:['Affix it to the truck gate','Document the number on the BOL','Take a picture of the seal after it is affixed','All the above'], answer:[3]},
      {q:'The truck driver\u2019s PO # and the PO # on the BOL must match before loading the truck.', type:'tf', answer:true},
      {q:'If there are questions or concerns regarding shipping, in which order should you contact: Owner, Plant Manager, Logistics Coordinator, Quality Coordinator?', type:'order', options:['Owner','Plant Manager','Logistics Coordinator','Quality Coordinator'], answer:[4,2,1,3]},
      {q:'Phenolic odors could indicate chemical residue.', type:'tf', answer:true}
    ]
  }
};
