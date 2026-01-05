export function checkEligibility(marks, category, course) {
  const courseMinMarks = {
    "B.Tech Computer Science": 60,
    "B.Tech Information Technology": 55,
    "BCA": 50,
    "MCA": 55,
    "MBA": 50,
    "B.Sc Computer Science": 50,
    "M.Sc Data Science": 55,
    "B.Com Honours": 50
  };

  const categoryRelaxation = {
    "General": 0,
    "OBC": 5,
    "SC": 10,
    "ST": 10,
    "EWS": 5
  };

  const minMarks =
    courseMinMarks[course] - (categoryRelaxation[category] || 0);

  const eligible = marks >= minMarks;

  return {
    eligible,
    minMarks,
    message: eligible
      ? `You are eligible for ${course}`
      : `You are not eligible for ${course}`
  };
}
