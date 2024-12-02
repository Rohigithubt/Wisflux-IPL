function checkGrade(totalMarks, examinationType) {
    if (examinationType === "Final-exam") {
      if (totalMarks >= 90) {
        return true; 
      } else {
        return false; 
      }
    }
  
    if (totalMarks >= 89 && totalMarks <= 100) {
      return true; 
    }
  
    return false; 
  }
  
  console.log(checkGrade(92, "Final-exam")); 
  console.log(checkGrade(85, "Mid-exam"));  
  console.log(checkGrade(90, "Final-exam"));
  console.log(checkGrade(95, "Final-exam")); 
  console.log(checkGrade(88, "Mid-exam"));  
  