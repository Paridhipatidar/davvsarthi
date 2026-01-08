def check_eligibility(marks, category, course):
    course_min_marks = {
        "B.Tech Computer Science": 60,
        "B.Tech Information Technology": 55,
        "BCA": 50,
        "MCA": 55,
        "MBA": 50,
        "B.Sc Computer Science": 50,
        "M.Sc Data Science": 55,
        "B.Com Honours": 50
    }

    category_relaxation = {
        "General": 0,
        "OBC": 5,
        "SC": 10,
        "ST": 10,
        "EWS": 5
    }

    min_marks = course_min_marks.get(course, 0) - category_relaxation.get(category, 0)

    eligible = marks >= min_marks

    return {
        "eligible": eligible,
        "minMarks": min_marks,
        "message": (
            f"You are eligible for {course}"
            if eligible
            else f"You are not eligible for {course}"
        )
    }
