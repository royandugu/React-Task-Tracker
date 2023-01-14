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


**MAJOR TO DO**
1. Context mah click add gara ra click anusar app.css mah meeting ya task display gara
**TO DO FOR NOW**
1. Thorough check to replace querySelectors with useRef and if possible useState
2. Make it responsive
3. Replace query selectors with UseRef hook
4. After the meeting has been clicked (in small menu) the taskLister doesn't have the position fixed property
5. Indv task desc laii position absolute hoina position fixed chain garam taki after going to meeting
section in mobile view it will stay the same
6. Scroll bar pani hataunu paryo tara specifically hamro div mah matra scroll bar aunu paryo 

**Issues**
1. The link button is not even being clicked
2. On click only the meetings are being fetched that too with a status of 404
3. useEffect for context??

<br>
**Initial test**
Putting up 2 filters for task and meetings, that will later be be done by the backend
<br>

**Current Visual** <br>

<img src="src/ForReadMe/1.JPG"/>

<br>
**NOTE**:- The filtering of task is currently done in the front end which will be later transferred to
the backend. 