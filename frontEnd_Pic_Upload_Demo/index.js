
  var firebaseConfig = {
    //Firebase configuration
  };
  
  firebase.initializeApp(firebaseConfig);
      var selectedFile; 
      function getfile() 
      { 
          var pic = document.getElementById("photo"); 
        
          selectedFile = pic.files[0]; 
  
           
           document.getElementById('submit_link').setAttribute('disabled', 'true'); 
          myfunction(); 
      } 
      function myfunction() 
      {  
          var Name="123"+Date.now(); 
          var storageRef = firebase.storage().ref('/Images/'+ Name); 
          var uploadTask = storageRef.put(selectedFile);  
          uploadTask.on('state_changed', function(snapshot){ 
            var progress =  
             (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
              var uploader = document.getElementById('uploader'); 
              uploader.value=progress; 
              switch (snapshot.state) { 
                case firebase.storage.TaskState.PAUSED: 
                  console.log('Upload is paused'); 
                  break; 
                case firebase.storage.TaskState.RUNNING: 
                  console.log('Upload is running'); 
                  break; 
              } 
          }, function(error) {console.log(error); 
          }, function() {    
               uploadTask.snapshot.ref.getDownloadURL().then( 
                function(downloadURL) { 
              console.log('File available at', downloadURL); 
               document.getElementById('submit_link').removeAttribute('disabled'); 
               document.getElementById('link').value=downloadURL;
               console.log(downloadURL); 
            }); 
          }); 
      }; 