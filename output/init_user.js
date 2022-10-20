firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      //var photoURL = user.photoURL;
      var uid = user.uid;
      //var phoneNumber = user.phoneNumber;
      //var providerData = user.providerData;
      window.user={email,displayName,uid,
        emailVerified};
      if(window.setUser)store.dispatch(setUser({user:{email,displayName,uid,
      emailVerified},state:'fulfilled',action:'ff'}));
      /*
      user.getIdTokenResult().then(({claims})=>{ 
        if(startFunc)startFunc({email,displayName,uid,
          pos:claims.pos,status:claims.status,emailVerified});
      }).catch((e)=>{
        console.log(e);
        if(startFunc)startFunc(null,e);
      })
     */
   
    } else {
      // User is signed out.
      console.log('Signed out')
      console.log('account-details null')
      if(window.setUser)store.dispatch(setUser({
       user:null,state:'query',action:'ff'}));
     
    }
  }, function(error) {
    console.log(error);
  });
