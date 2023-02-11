<h1> (Development Phase) React-Task-Tracker </h1> <br>
<h5> A task tracker (to-do) list application using React JS and React Query</h5> <br>
<br>
<p> React-Task-Tracker is an application that will be intended for office use, where
the admin can assign the tasks and the meetings to the respective employees. <p>
<br>

**FEATURES ADDED SO FAR** 
1. Task fetching from the API
2. Individual task viewing
3. Query state display (Loading or Error)   
<br>

**TO BE ADDED**
1. Login system
2. Admin panel
<br>


**TO DO FOR NOW**
1. Thorough check to replace querySelectors with useRef and if possible useState
2. Make meeting schedules and task lister in the same line (I think the icon shrinking is the issue<< stop icon shrinking>>). For this firstly fix the whole basic layout like the user icon and all that is being displayed should not be in meeting schedules header. It should be a different component fixed at the top.
3. Beautify mobile view for meeting schedules (2 scrollbars?)
4. Small button and texts in task lister
5. Fix menu container's height
6. In the smaller menu between the navigation of task and meetings put a small red circle with a cross and once the cross is clicked, with a certain transition, the navigation bar collapses and then icon changes
7. Make a custom click bar


<br>
**Initial test**
Putting up 2 filters for task and meetings, that will later be be done by the backend
<br>

**Current Visual** <br>

<img src="src/ForReadMe/1.JPG"/>

<br>
**NOTE**:- The filtering of task is currently done in the front end which will be later transferred to
the backend. 