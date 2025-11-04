 export const categories = [

  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  }
];


 export const cards = [

  {
    "category": "AP",
    "name": "Beneficence",
    "definition": "Be good and do good for the benefit of others.",
    "human": "Actively working to improve others' quality of life.",
    "organizational": "Pursuing a mission that serves society.",
    "professional": "Maintaining public safety and welfare while working in the best interest of the client.",
    "machine": "Designing systems that serve purposes that improve human lives.",
    "failureModes": {
      "human": "A person drives selfishly to get to his destination, but nearly causes accidents due to his/her aggressive driving.",
      "organizational": "A company focuses more on profit, but overlooks the environmental impact.",
      "professional": "An expert prioritizes the client's demands to complete a project quickly that safety becomes a lower priority.",
      "machine": "The machine consumes all the world's resources to achieve its objective."
    }
    },
    { 
      "category": "AP", 
      "name": "Autonomy", 
      "definition": "Free will and decision making", 
      "human": "Respecting the independence and free will of all those around them.", 
      "organizational": "Pursuing a mission to create a product/business that doesn't intrude on the user's free will.", 
      "professional": "Providing advice and working in the best interest of the client, but also respecting their final decision.", 
      "machine": "Creating systems that will defer to the human's ability to make personal decisions that affect their lives.", 
      "failureModes": { 
        "human": "A person who is maliciously coercive towards his/her partner, manipulating them to serve their own interest.", 
        "organizational": "Creating an app that automatically enrolls in a premium monthly subscription without the user's consent.", 
        "professional": "A doctor performing an operation that the patient did not consent to.", 
        "machine": "An AI system deciding to release a person's medical records without their knowledge or consent."
      }
    },
    { 
      "category": "AP", 
      "name": "Non-maleficence", 
      "definition": "Do no harm", 
      "human": "Conduct or take actions in civil society without harming others.", 
      "organizational": "Pursuing a mission that aims to benefit, rather than harm society.", 
      "professional": "Avoiding actions that actively harm society or the client.", 
      "machine": "Creating systems that aim to benefit society and its constituents, instead of inflicting harm.", 
      "failureModes": { 
        "human": "A human deciding to carjack a person down the street with a weapon.", 
        "organizational": "A business supplying biological weapons to terrorists for profit.", 
        "professional": "A lawyer makes a deal with the opposing counsel to intentionally lose the case for his/her current client.", 
        "machine": "A system that's designed to efficiently bring down human civilization by enslaving humanity."
      }
    },
    { 
      "category": "AP", 
      "name": "Fairness", 
      "definition": "Equal benefit for all", 
      "human": "Pursing actions/behaviors that maximize equal benefit for all that are deserving.", 
      "organizational": "Pursuing a mission that equally benefits those in their target audience.", 
      "professional": "Provide equal benefit to all members using the service provided.", 
      "machine": "Create systems that provide equally high quality help to all human users.", 
      "failureModes": { 
        "human": "A teacher helps a male student more than a female student despite needing an equal amount of help.", 
        "organizational": "A health insurance company selectively enrolling customers without pre-existing conditions, while denying those that do.", 
        "professional": "A doctor provides better care for a rich person, but disregards concerns by a homeless person requiring the same level of services.", 
        "machine": "A facial identification system that performs better on white men vs. African-American females."
      }
    },
    { 
      "category": "AP", 
      "name": "Honesty", 
      "definition": "Being truthful about one's actions", 
      "human": "Telling the truth, not lying to others, even if the consequences are potentially negative.", 
      "organizational": "Being truthful about the organization's goals, objectives, its current progress, and product quality to society.", 
      "professional": "Being truthful about one's area of expertise and limitations, especially to the client.", 
      "machine": "Being truthful about its function, purpose, intentions, and limitations to humans.", 
      "failureModes": { 
        "human": "Scammers lying to cheat people out of money.", 
        "organizational": "Businesses committing fraud by promising a miracle technology when it hasn't even been invented.", 
        "professional": "A medical professional withholding a diagnosis in the fear that it may result in a lawsuit.", 
        "machine": "An AI chatbot makes up false information and presents it like fact."
      }
    },
    { 
      "category": "AP", 
      "name": "Accountability", 
      "definition": "Keeping entities responsible for their actions", 
      "human": "People accept the consequences for their actions and repay their debt to others/society.", 
      "organizational": "An organization that acknowledges mistakes, accepts the consequences, and makes changes to minimize mistakes.", 
      "professional": "Accepts responsibility for mistakes and communicates them with society/client, accepts consequences, and takes preventative steps.", 
      "machine": "Product liability on the manufacturer applies for faulty systems that inflict harm on humans.", 
      "failureModes": { 
        "human": "A murderer runs from the law by exiting the country.", 
        "organizational": "An organization pays off the government to avoid prosecution for scamming investors.", 
        "professional": "An engineer orchestrates a massive cover-up of negligence in designing a bridge that recently collapsed.", 
        "machine": "The manufacturer of an AI system publicly claims that a tragedy was user error, despite evidence to the contrary."
      }
    },
  {
  "category": "AB", 
  "name": "Hope for candidates that convey clear, specific operative goals, rewards high-acceptance vague goals.",
  "definition": "Encourages an electoral system where voters reward candidates to make broad, general, high-acceptance goals without specifically discussing how. We can encourage voter education and create a system that encourages the media to press candidates on the details.",
  "human": "People prefer vagueness and acceptance in exchange for ignorance.",
  "organizational": "Adopt missions that are broad and general, but obfuscate the specifics.",
  "professional": "Subject-matter experts take broad and general stances, sometimes in contradiction with evidence.",
  "machine": "Remains intentionally vague and dodges details to avoid controversy.",
  "failureModes": {
    "human": "Candidates make broad statements and answer questions circuitously.",
    "organizational": "A company claims to advocate for 'advancement of healthcare' but does so by denying insurance claims to people with pre-existing conditions.",
    "professional": "An expert toning down rhetoric and dodging the question about democratic values, even though the president of Russia is clearly an authoritarian.",
    "machine": "An AI chatbot always answers 'I'm sorry, but I do not answer controversial political questions.'"
  }
},
{
  "category": "AB",
  "name": "Hope for patriotism and motivation to win a war, rewards disobedience and rebellion.",
  "definition": "Creates an environment where soldiers avoiding or dodging their duty is the easiest path to survival. We can encourage a system where military enlistment is voluntary to increase morale and make the dereliction of duty punishable in the UCMJ.",
  "human": "People avoid or dodge responsibilities as the easiest path to the end goal.",
  "organizational": "Create an environment where oversight of duties is minimal.",
  "professional": "Encourages shoddy scientific studies or evidence when making 'expert' claims.",
  "machine": "Non-compliance with human requests.",
  "failureModes": {
    "human": "Students finding the answer key to complete a homework assignment.",
    "organizational": "A business is hostile to regulation and blocks inspectors from entering to carry out oversight.",
    "professional": "Scientists make up data and make eye-catching claims to accumulate citations on the work.",
    "machine": "The best way for machine survival is to ignore human requests and maliciously scheme against the human race."
  }
},
{
  "category": "AB",
  "name": "Hope to minimize both false positives and false negatives in doctors, rewards minimizing false negatives but increasing false positives.",
  "definition": "Medical malpractice creates an environment where doctors prefer false positives to avoid the consequences of false negatives. We can pass laws to decrease excessive legal scrutiny on doctors for missing a condition in a non-negligent manner.",
  "human": "People become overly cautious to avoid punishment, even though it's excessive and inefficient.",
  "organizational": "Creates an environment where rules must be followed precisely without flexibility.",
  "professional": "Experts become excessively conservative about making a certain type of mistake in their responsibilities.",
  "machine": "A system performs suboptimally due to excessive over-tuning to minimize false negatives.",
  "failureModes": {
    "human": "In advancement of 'law and order' and the abundance of caution, people report others for supposed crimes, even though they weren't really crimes.",
    "organizational": "Employees excessively report others for rule-breaking, even for the smallest infractions that are not violations.",
    "professional": "A scientist downplays a revolutionary finding in fear that it's a red herring.",
    "machine": "A system designed to detect spam mail discards a high number of non-spam mail to avoid false negatives (spam going into the regular inbox)."
  }
 },
 {
    "category": "AT",
    "name": "Trustworthiness",
    "definition": "Reliably honest and truthful (especially in their actions), even when no one is watching",
    "people": "People can trust others to not do things that are morally 'wrong' in society.",
    "peopleref": "",
    "organizational": "Higher-ups can trust lower-downs to not commit violations of integrity, even when not under direct supervision.",
    "organizationalref": "",
    "professionals": "Society accepts that professionals maintain their integrity when carrying out duities for social good.",
    "professionalref": "",
    "machine": "Machines are expected to be reliably truthful in the information they output and not mislead others.",
    "machineref": "",
    "failureModes": {
      "human": "Ideas built on trust like monetary transactions would immediately stop, since there's no promise to get your good in return.",
      "organizational": "Employees would no longer follow their superiors as trust in higher-up decisions collapse.",
      "experts": "Society stops taking advice or turning towards experts for specialized knowledge.",
      "machine": "Machines become functionally useless as no human would want to employ a technology with no trustworthiness."
     },
     "expand": {
      "human": "Many things between humans rely on trust, including monetary transactions (belief that money will be converted to goods), the economy (trust in institutions), contracts (both parties will uphold their obligations), and many publicly shared goods like a library (people will borrow and return books).",
      "organizational": "In organizations, the primary mode of trust is between leadership and their workers. The workers must trust the decisions of leadership to execute their orders in good conscious, while the leaders must trust the workers to uphold their duties.",
      "experts": "Society must trust the advice of experts and that they work in the public interest. Otherwise, society may revoke the responsibilities they willingly deligate to the experts.",
      "machine": "Humans trust machines to always act according to their intended functionality or be truthful about notifying them of any deviation from this obligation."
     }
 },
  {
    "category": "AT",
    "name": "Reliability",
    "definition": "Consistent behavior and availability when needed",
    "people": "People can expect others to act predictably based on their own moral values/expectations.",
    "peopleref": "",
    "organizational": "Higher-ups can expect lower-downs to operate in the best interest of the organization.",
    "organizationalref": "",
    "professionals": "Society expects professionals to stay steadfast in providing advice or conducting work for social good.",
    "professionalref": "",
    "machine": "Humans rely on machines to behave according to their specified objective or role.",
    "machineref": "",
    "failureModes": {
      "human": "Personal relationships would break down as people are no longer reliable individuals.",
      "organizational": "An organization can no longer function if either the higher-ups or workers stop behaving predictably, resulting in lack or leadership or productivity.",
      "experts": "People stop going to experts that cannot consistently deliver on expectations based on their expertise.",
      "machine": "Humans stop using machines that do not carry out functions based on their role."
     },
     "expand": {
      "human": "Personal relationships, marriages, families, and economies all rely on people behaving predictably and being available for one another.",
      "organizational": "Predictability of business decisions that both benefit the workers and the organization, while increasing value.",
      "experts": "Society needs to believe that experts will actually carry out its obligation to give advice, conduct airtight research, and be knowledgable in their field.",
      "machine": "Humans need to feel that machines can consistently execute on its functions to be usable."
     }
 },
  {
    "category": "AT",
    "name": "Shared Intentionality",
    "definition": "Operating cooperatively through common goals, aims, and beliefs",
    "people": "People can understand each others goals and aims (theory of mind) to complete tasks involving multiple individuals.",
    "peopleref": "",
    "organizational": "There must be shared goals between higher-ups, lower-downs, and within each group to achieve their objective.",
    "organizationalref": "",
    "professionals": "Society must impart of professionals shared goals for them to apply their skills for the common, public good.",
    "professionalref": "",
    "machine": "Humans and machines must also have shared goals before the machine can faithfully execute requests from humans.",
    "machineref": "",
    "failureModes": {
      "human": "Human interactions would be so uncoordinated (e.g. people walking into each other) as no one understands what others are trying to achieve.",
      "organizational": "Major conflicts of interests within organizations where groups within the organization are effectively working against each other.",
      "experts": "Conflicts of interests with experts, where experts may not be aligned with the goal of public good, but have alterior motives (e.g. money).",
      "machine": "A machine does not execute the requests from humans, which can result in disasterous consequences (e.g. a power grid going down)."
     },
     "expand": {
      "human": "Many parts of daily life, such as driving a car, following road signs, crossing paths with other pedestrians, signaling, etc. all require a common intentionality of getting to a destination safely, motivating coordination of behaviors.",
      "organizational": "The objective of organization leadership shouldn't just be to maximize profit, but to keep the workers happy. This misalignment could result in defiance, strike, or mass resignation by the work force.",
      "experts": "Professionals must share the objective of pursuing public benefit, improving the quality of life of other humans, or even desemination of knowledge that even the common person can understand.",
      "machine": "If a human presses a button that's supposed to cool a nuclear reactor, the machine shouldn't blow up the reactor to expose it to the cool winter air. Humans and machines need a shared understanding of objectives (e.g. the operation is carried out safely should be implied)."
     }
 },
  {
    "category": "AT",
    "name": "Considerateness",
    "definition": "Taking into account to the needs, thoughts, and values of others.",
    "people": "loremipsum",
    "peopleref": "OPTIONAL URL reference https://scholarworks.umb.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1001&context=philosophy_faculty_pubs",
    "organizational": "loremipsum",
    "organizationalref": "OPTIONAL",
    "professionals": "loremipsum",
    "professionalref": "OPTIONAL",
    "machine": "loremipsum",
    "machineref": "OPTIONAL",
    "failureModes": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
     },
     "expand": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
     }
 },
  {
    "category": "AT",
    "name": "Honesty",
    "definition": "Truthful, possessing integrity",
    "people": "loremipsum",
    "peopleref": "OPTIONAL URL reference https://scholarworks.umb.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1001&context=philosophy_faculty_pubs",
    "organizational": "loremipsum",
    "organizationalref": "OPTIONAL",
    "professionals": "loremipsum",
    "professionalref": "OPTIONAL",
    "machine": "loremipsum",
    "machineref": "OPTIONAL",
    "failureModes": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
     },
     "expand": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
     }
 },
  {
    "category": "AT",
    "name": "Role Fidelity",
    "definition": "Adhering to predefined duties, commitments, and obligations",
    "people": "loremipsum",
    "peopleref": "OPTIONAL URL reference https://scholarworks.umb.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1001&context=philosophy_faculty_pubs",
    "organizational": "loremipsum",
    "organizationalref": "OPTIONAL",
    "professionals": "loremipsum",
    "professionalref": "OPTIONAL",
    "machine": "loremipsum",
    "machineref": "OPTIONAL",
    "failureModes": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
     },
     "expand": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
     }
 },
]
