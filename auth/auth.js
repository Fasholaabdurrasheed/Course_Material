async function login(username, password) {
     try {
         const response = await fetch(`http://rashfash-001-site1.qtempurl.com/api/v1/User/login?userName=${username}&password=${password}`, {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
          //    body: JSON.stringify({ username, password })
         });
 
         if (!response.ok) {
             throw new Error('Login failed. Please check your credentials.');
         }
 
         const data = await response.json();
         
         console.log('Login successful:', data);
         return data;
     } catch (error) {
         console.error('Error:', error);
         alert('Login failed. Please try again.');
     }
 }
 
 document.getElementById('signInForm').addEventListener('submit', async function(event) {
     event.preventDefault();
 
     const username = document.getElementById('username').value;
     const password = document.getElementById('password').value;
 
     const result = await login(username, password);
     if (result) {
          console.log(result);
          localStorage.setItem('crs_user', JSON.stringify(result.data.user)); 
          localStorage.setItem('crs_token', result.data.token);
          var home = "../home/home.html";
          window.location.href = home;
         
      }
      
 });
 