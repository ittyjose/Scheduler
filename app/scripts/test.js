 
 

      $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    
    $('.modal').modal();
     $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
      $('.timepicker').pickatime({
    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker
  });
         
  });

      
  
  var database = firebase.database();
  var m_names = new Array("January", "February", "March",
      "April", "May", "June", "July", "August", "September",
      "October", "November", "December");

    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();
    var n = (curr_date + " " + m_names[curr_month]
      + "," + " " + curr_year);
    var data = firebase.database().ref('users/General');
    data.on('value', function (snapshot) {
      var flag=0;
      var txt = '<table   class="striped"><thead><tr><th>Added By</th><th>Time</th><th>Description</th></tr></thead><tbody>';
      snapshot.forEach(function (childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();

        if (childData.date == n) {
          flag=1;
           txt += "<tr><td>" +childData.Added_By+ "</td><td>" +childData.Time+ "</td><td>"+childData.Description+"</td></tr>";
         }
          });
  txt += "</tbody></table>" ;
   if(flag==1)
  { 
    document.getElementById("today").innerHTML = txt;
  }
  else
  {
    var no_content="No contents to load";
        document.getElementById("today").innerHTML = no_content;
 }
        
 });

    var data = firebase.database().ref('users/Fr Deljo');
    data.on('value', function (snapshot) {
      var flag=0;
      var txt = '<table   class="striped"><thead><tr><th>Time</th><th>Date</th><th>Description</th></tr></thead><tbody>';
      snapshot.forEach(function (childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();

        if (childData.date == n) {
          flag=1;

           txt += "<tr><td>" +childData.Time+ "</td><td>"+childData.date+"</td><td>"+childData.Description+"</td></tr>";
         }
          });
  txt += "</tbody></table>" 
  if(flag==1)
  { 
    document.getElementById("today3").innerHTML = txt;
  }
  else
  {
    var no_content="No contents to load";
        document.getElementById("today3").innerHTML = no_content;
 }
 });
    var data1 = firebase.database().ref('users/Fr Francis Kurissery');
    data1.on('value', function (snapshot) {
      var flag=0;
      var txt1 = '<table   class="striped"><thead><tr><th>Time</th><th>Date</th><th>Description</th></tr></thead><tbody>';
      snapshot.forEach(function (childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();

        if (childData.date == n) {
          flag=1;
           txt1 += "<tr><td>" +childData.Time+ "</td><td>"+childData.date+"</td><td>"+childData.Description+"</td></tr>";
         }
          });
  txt1 += "</tbody></table>" 
  if(flag==1)
  { 
    document.getElementById("today1").innerHTML = txt1;
  }
  else
  {
    var no_content="No contents to load";
        document.getElementById("today1").innerHTML = no_content;
 }
        
 });

     var data = firebase.database().ref('users/Fr Julies');
    data.on('value', function (snapshot) {
      var flag=0;
      var txt = '<table   class="striped"><thead><tr><th>Time</th><th>Date</th><th>Description</th></tr></thead><tbody>';
      snapshot.forEach(function (childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();

        if (childData.date == n) {
          flag=1;
           txt += "<tr><td>" +childData.Time+ "</td><td>"+childData.date+"</td><td>"+childData.Description+"</td></tr>";
         }
          });
  txt += "</tbody></table>" 
   if(flag==1)
  { 
    document.getElementById("today2").innerHTML = txt;
  }
  else
  {
    var no_content="No contents to load";
        document.getElementById("today2").innerHTML = no_content;
 }
        
 });
  function Read() {
     
    var time = document.getElementById("Time").value;
    var date  = document.getElementById("Date").value; 
    var ts = new Date(date).getTime();
    var Description=document.getElementById("Des").value;
    var me=database.ref('users/'+username).push({
    Time:time,
    date:date,
    Description:Description,
    ts:ts,
    
  });
  }
  
  function Read_Ge() {
    var time = document.getElementById("Time1").value;
    var date  = document.getElementById("Date1").value; 
    var ts = new Date(date).getTime();
    var Description=document.getElementById("Des1").value;
    var me=database.ref('users/General').push({
    Added_By:username,  
    Time:time,
    date:date,
    Description:Description,
    ts:ts,
    
  });
  }
   function General() {   
  // Initialize Firebase
 
  
 var data=firebase.database().ref('/users/General').orderByChild('ts');
 data.on('value', function(snapshot) {
  var txt = '<table id="tbl"  class="striped"><thead><tr><th>Added By</th><th>Time</th><th>Date</th><th>Description</th></tr></thead><tbody>';
  snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData=childSnapshot.val();
       txt += "<tr><td>" +childData.Added_By+ "</td><td>" +childData.Time+ "</td><td>"+childData.date+"</td><td>"+childData.Description+"</td></tr>";
   });
  txt += "</tbody></table>" 
        document.getElementById("tb").innerHTML = txt;
 });
       
 }
  

   function Deljo() {   
  // Initialize Firebase
 
  
 var data=firebase.database().ref('/users/Fr Deljo').orderByChild('ts');
 data.on('value', function(snapshot) {
  var txt = '<table id="tbl"  class="striped"><thead><tr><th>Time</th><th>Date</th><th>Description</th></tr></thead><tbody>';
  snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData=childSnapshot.val();
       txt += "<tr><td>" +childData.Time+ "</td><td>"+childData.date+"</td><td>"+childData.Description+"</td></tr>";
   });
  txt += "</tbody></table>" 
        document.getElementById("tb3").innerHTML = txt;
 });
       
 }
  function Kurissery() {   
  // Initialize Firebase
 
  
 var data=firebase.database().ref('/users/Fr Francis Kurissery').orderByChild('ts');
 data.on('value', function(snapshot) {
  var txt = '<table id="tbl1"  class="striped"><thead><tr><th>Time</th><th>Date</th><th>Description</th></tr></thead><tbody>';
  snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData=childSnapshot.val();
       txt += "<tr><td>" +childData.Time+ "</td><td>"+childData.date+"</td><td>"+childData.Description+"</td></tr>";
   });
  txt += "</tbody></table>" 
        document.getElementById("tb1").innerHTML = txt;
 });
       
 }
function Julies() {   
  // Initialize Firebase
 
  
 var data=firebase.database().ref('/users/Fr Julies').orderByChild('ts');
 data.on('value', function(snapshot) {
  var txt = '<table id="tbl1"  class="striped"><thead><tr><th>Time</th><th>Date</th><th>Description</th></tr></thead><tbody>';
  snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData=childSnapshot.val();
       txt += "<tr><td>" +childData.Time+ "</td><td>"+childData.date+"</td><td>"+childData.Description+"</td></tr>";
   });
  txt += "</tbody></table>" 
        document.getElementById("tb2").innerHTML = txt;
 });
       
 }
 function signout(){
  firebase.auth().signOut().then(function() {
  window.location = 'login.html';
}, function(error) {
  console.error('Sign Out Error', error);
});
 }
