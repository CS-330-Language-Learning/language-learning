## CS 330 Final Report

### Section 66 (Language Learning) – Quinn Shim, Kevin Lee, Katherine Liu, Ah Hyun (Hannah) Kim

---

### Problem & Related Work

Non-native English speakers may be confident in reading and writing; however, they may still struggle with engaging in casual conversations and keeping up with slang/ever-evolving cultural references. This issue can be attributed to a lack of resources, lack of exposure to native speakers, and lack of motivation given their daily busy schedules. 

Current efforts can be divided into technical and non-technical solutions. Some use apps such as Duolingo or Rosetta Stone; however, real-life conversations cover much broader topics, are more complex in structure, and include colloquial/slang terms that these applications do not cover in a comprehensive manner. Outside of digital platforms, meeting with a speaking coach is an effective and immersive experience; however, speaking coaches are expensive and not universally accessible. Another approach is to practice the language with their close friends and family; however, given the shared culture and native language amongst non-native English speakers, many tend to befriend others who share their nationality, which tends to not provide practice speaking with native speakers. 

Universities such as Northwestern University provide English Learning programs that include group language learning classes, office hours, tutoring, online training, classes, and language tables. These language tables are designed to create spaces to meet new people for informal and casual conversations – ideally to support and facilitate conversation amongst non-native English speakers with varying proficiency levels. There are several problems with these resources. The language tables and other programs have limited marketing material, making them unknown to the majority of students. Additionally, these events are infrequent – as they are only offered twice a quarter. In order to become more comfortable speaking a language, frequent practice is essential. 

### User Research

For research, we wanted to learn what makes a language learning/practicing app engaging and effective for an extended period of time.  While our proposed design can be used by all non-native English speakers, we interviewed and user tested college students. We learned that students who want to practice the conversational aspects of languages they are not native-speakers of need a comfortable and judgement-free space in order to do so. One participant expressed that not being able to understand the other person in conversation is a major factor in unwillingness to participate in a conversation , as it can be embarrassing to display a lack of comprehension. Another participant showed discontent with existing solutions because they were too complicated and didn’t allow for customized content. The design must be simple, not too time-consuming, and accessible. As seen in the interview with Abhinav, the simplest app was the one he consistently used.  We also saw that, at a baseline, users need more exposure to the language they want to practice in addition to subtle reminders along the way. 

User needs & goals:
- Accessible and flexible, can practice whenever they want
- Anonymous, judgement free, does not turn into Tinder
- Simple, friendly, and approachable UI, not very feature heavy
  
The various users we envisioned using our app:
- non-native speakers of English interested in practicing their conversational English
- native English speakers interested in practicing their conversational skills in another language. 

Both groups are in their 20s or early 30s (relatively young, in college or working). The non-native speakers already have a basic foundation of English. Both classes need some way to record their voice (the assumption is that the great majority of users will own smartphones). 

### Paper Prototyping

[Video of our paper prototype in action](https://vimeo.com/391038108)

Most of our usability issues were around our chatting interface. The major pain point was the amount of information presented - users were confused about who they were talking to, what they were supposed to be talking about, and what language they were supposed to be speaking in. Some were unsure about whether they had to hold the voice button down while talking or just hit it once to begin recording. 

The rest of the application seemed to be relatively straightforward for users: the registration process, user search process, and the feedback screens (both giving and receiving) seemed clear and did not require further instructions. One user seemed unsure as to how many topics they needed to have selected before searching. 

From here, we decided to include more information and figure out how to present the additional details in an efficient way that doesn't overwhelm the user. We also need to consider how to make the chatting interface clearer (e.g holding the voice button). 

### High Fidelity Prototyping

Tasks: log in, look for a conversation, talk with somebody

Need screenshots

We decided to support **user profiles**, **social interactions**, and **branding.**

### Reflections

In the time we had, we designed a high level overview of how we want users to navigate our application and built a visual interface to match it. We iterated through many different user workflows and were forced to question many of our prior assumptions regarding the problem domain of language learning.

If we had more time, our next steps would be to improve our interface for separating the learning and coaching aspects of our app. As of right now, we just have the message inbox split into two sections, but we are not satsified with this design, as it does not scale well with inbox size. We would also like to implement other necessary aspects of the application (signup, voice recording) that we chose not to build in interest of the limited scope and time of this class.

### Links

[Our GitHub repository](https://github.com/CS-330-Language-Learning/language-learning/tree/project_8)

[A working version of our prototype](https://cs-330-language-learning.github.io/language-learning/login.html)

Our app is best viewed in Google Chrome using the iPhone X view (which can be changed in Developer Tools). You will log in as our sample user Billy Johnson with the following credentials

**Username:** billyjohnson

**Password:** password2

You will then start a new conversation (none of the existing conversations will take you to a chatroom). 
