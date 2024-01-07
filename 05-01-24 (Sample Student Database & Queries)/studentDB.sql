-- Create a new database named 'students'
CREATE DATABASE students;

-- Switch to the 'students' database
USE students;

-- Create a table 'exams' to store information about different exams
CREATE TABLE exams (
                       id INT PRIMARY KEY AUTO_INCREMENT,
                       type VARCHAR(50) NOT NULL
);

-- Create a table 'students' to store information about students
CREATE TABLE students (
                          id INT PRIMARY KEY AUTO_INCREMENT,
                          name VARCHAR(100) NOT NULL,
                          roll_no INT NOT NULL,
                          class INT NOT NULL
);

-- Create a table 'subjects' to store information about different subjects
CREATE TABLE subjects (
                          id INT PRIMARY KEY AUTO_INCREMENT,
                          subject VARCHAR(50) NOT NULL
);

-- Create a table 'student_marks' to store marks obtained by students in various exams and subjects
CREATE TABLE student_marks (
                               id INT PRIMARY KEY AUTO_INCREMENT,
                               marks INT NOT NULL,
                               student_id INT NOT NULL,
                               exam_id INT NOT NULL,
                               subject_id INT NOT NULL,
                               FOREIGN KEY (student_id) REFERENCES students (id),
                               FOREIGN KEY (exam_id) REFERENCES exams (id),
                               FOREIGN KEY (subject_id) REFERENCES subjects (id)
);

-- Insert sample student data
INSERT INTO students(name, roll_no, class) VALUES
                                               ('Barath', 100, 5),
                                               ('Dhilip', 101, 5),
                                               ('Linga', 107, 5),
                                               ('Dheena', 121, 5),
                                               ('Hemanath', 132, 5);

-- Insert sample exam data
INSERT INTO exams(type) VALUES ('Mid Term'), ('Half yearly'), ('Annual');

-- Insert sample subject data
INSERT INTO subjects(subject) VALUES ('Maths'), ('Science'), ('CS');

-- Insert sample marks data for Mid Term Exam
INSERT INTO student_marks(marks, student_id, exam_id, subject_id) VALUES
                                                                      (85, 1, 1, 1), (78, 1, 1, 2), (92, 1, 1, 3),
                                                                      (89, 2, 1, 1), (76, 2, 1, 2), (94, 2, 1, 3),
                                                                      (80, 3, 1, 1), (85, 3, 1, 2), (90, 3, 1, 3),
                                                                      (92, 4, 1, 1), (88, 4, 1, 2), (95, 4, 1, 3),
                                                                      (87, 5, 1, 1), (84, 5, 1, 2), (91, 5, 1, 3);

-- Insert sample marks data for Half Yearly Exam
INSERT INTO student_marks(marks, student_id, exam_id, subject_id) VALUES
                                                                      (78, 1, 2, 1), (82, 1, 2, 2), (88, 1, 2, 3),
                                                                      (85, 2, 2, 1), (77, 2, 2, 2), (90, 2, 2, 3),
                                                                      (81, 3, 2, 1), (86, 3, 2, 2), (89, 3, 2, 3),
                                                                      (90, 4, 2, 1), (85, 4, 2, 2), (92, 4, 2, 3),
                                                                      (86, 5, 2, 1), (83, 5, 2, 2), (88, 5, 2, 3);

-- Insert sample marks data for Annual Exam
INSERT INTO student_marks(marks, student_id, exam_id, subject_id) VALUES
                                                                      (85, 1, 3, 1), (80, 1, 3, 2), (93, 1, 3, 3),
                                                                      (88, 2, 3, 1), (75, 2, 3, 2), (96, 2, 3, 3),
                                                                      (82, 3, 3, 1), (88, 3, 3, 2), (91, 3, 3, 3),
                                                                      (91, 4, 3, 1), (87, 4, 3, 2), (94, 4, 3, 3),
                                                                      (89, 5, 3, 1), (85, 5, 3, 2), (90, 5, 3, 3);
