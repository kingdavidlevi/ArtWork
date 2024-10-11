const handSubmit = async(e)=>{
  e.preventDefault();
  if (!selectedFile ) return;
  setRan(true)
  const formData = new FormData();
  formData.append('image', selectedFile);
  formData.append('username', username);

  try {
        const response = await fetch(https://middlemanbackend.onrender.com/getPfp,
        { method: 'POST',
        body: formData,
        credentials: 'include'
        });
        const data = await response.json();
        if (!response.ok) {
          setRan(false);
          setErrorMsg({message:data.errorMessage})
        }else{
          data&&navigate('/') 
        }
  }
  catch (err) {
    setRan(false)
    setErrorMsg({message:{
      username:'',
      password:'',
      otherErr:err.message 
    }})
  }
}