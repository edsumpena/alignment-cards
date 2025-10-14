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
}
]
