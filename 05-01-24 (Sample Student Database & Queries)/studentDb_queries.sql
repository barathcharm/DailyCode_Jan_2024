-- Use the 'students' database
USE students;

-- Retrieve student names, exam types, subjects, and marks, ordered by subject and exam type in descending order
SELECT
    students.name,
    exams.type,
    subjects.subject,
    st_marks.marks
FROM
    students
        JOIN
    student_marks AS st_marks ON students.id = st_marks.student_id
        JOIN
    exams ON st_marks.exam_id = exams.id
        JOIN
    subjects ON st_marks.subject_id = subjects.id
ORDER BY subjects.subject, exams.type DESC;

-- Retrieve student names, exam types, total marks, number of exams, and average marks per exam, ordered by student name and exam id
SELECT
    students.name,
    exams.type,
    SUM(st_marks.marks) AS total_marks,
    COUNT(*) AS num_exams,
    AVG(st_marks.marks) AS avg_marks_per_exam
FROM
    students
        JOIN
    student_marks AS st_marks ON students.id = st_marks.student_id
        JOIN
    exams ON exams.id = st_marks.exam_id
GROUP BY st_marks.exam_id, st_marks.student_id
ORDER BY students.name, exams.id;

-- Retrieve student names, exam types, subjects, and the maximum marks scored in each subject and exam combination
SELECT
    students.name,
    st_marks.student_id,
    subjects.subject,
    exams.type,
    MAX(st_marks.marks) AS Max_marks_scored
FROM
    students
        JOIN
    student_marks AS st_marks ON students.id = st_marks.student_id
        JOIN
    subjects ON subjects.id = st_marks.subject_id
        JOIN
    exams ON exams.id = st_marks.exam_id
GROUP BY st_marks.exam_id, st_marks.subject_id;

-- Retrieve student names, exam types, subjects, and the maximum marks scored in each subject and exam combination,
-- with the additional condition that the marks match the maximum marks in the subquery
SELECT
    students.name AS student_name,
    st_marks.student_id,
    subjects.subject,
    exams.type,
    MAX(st_marks.marks) AS Max_marks_scored
FROM
    students
        JOIN
    student_marks AS st_marks ON students.id = st_marks.student_id
        JOIN
    subjects ON subjects.id = st_marks.subject_id
        JOIN
    exams ON exams.id = st_marks.exam_id
WHERE
    (st_marks.exam_id, st_marks.subject_id, st_marks.marks) IN
    (SELECT
         exam_id,
         subject_id,
         MAX(marks) AS max_marks
     FROM
         student_marks
     GROUP BY exam_id, subject_id)
GROUP BY
    st_marks.exam_id, st_marks.subject_id;
