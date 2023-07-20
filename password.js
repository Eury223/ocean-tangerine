
    function checkPassword() {
      const passwordInput = prompt("Enter the code:");
     
      const correctPassword = "HBDMAMSHIE!";

      if (passwordInput === correctPassword) {
        redirectToTxtFile();
      } else {
        alert("Incorrect code. Please try again.");
      }
    }

    function redirectToTxtFile() {
      var githubUsername = "eury223";
      var repositoryName = "Bdy";
      var txtFilePath = "MUWAH.txt";
      var url = "https://raw.githubusercontent.com/" + githubUsername + "/" + repositoryName + "/main/" + txtFilePath;
      window.location.href = url;
    }
