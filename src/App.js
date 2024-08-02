import React, { Component } from 'react';
import Header from './components/Header';
import Student from './components/Student';
import Faculty from './components/Faculty';
import Courses from './components/Courses';
import Timetable from './components/Timetable';
import Footer from './components/Footer';
import User from './components/User';
class App extends Component {
 
    state = {
        visibleSection: null
    };

    setVisibleSection = (section) => {
        this.setState({ visibleSection: section });
    };

    render() {
        const { visibleSection } = this.state;

        const students = [
            { id: 2300033612, name: 'Nishant', branch: 'Computer Science and Engineering', year: '3rdssssssssssssssssssssssssss' },
            { id: 2200090593, name: 'Naveen', branch: 'Computer Science and Information Technology', year: '1st' },
            { id: 2100040365, name: 'Sugyan', branch: 'Electronics and Communication Engineering', year: '5th' }
        ];

        const faculties = [
            { id: 7425, name: 'Nishant', designation: 'Dean', department: 'Computer Science and Communication Technology' },
            { id: 6666, name: 'Rao', designation: 'Dean', department: 'Computer Science and Engineering' },
            { id: 3982, name: 'Ramesh', designation: 'Dean', department: 'Electronics and Communication Engineering' }
        ];

        const timetable = [
            { day: 'Monday', hours: '1-3', course: '23CS2205R', room: 'C318B' },
            { day: 'Tuesday', hours: '2-4', course: '23CS2205R', room: 'C318B' },
            { day: 'Wednesday', hours: '3-5', course: '23CS06EF', room: 'C017' },
            { day: 'Thursday', hours: '2-4', course: '23CS06EF', room: 'C017' },
            { day: 'Friday', hours: '3-5', course: '23SDCS11R', room: 'C410' },
            { day: 'Saturday', hours: '1-3', course: '23CS2205R', room: 'C318B' }
        ];

        const courses = [
            { code: '23CS06EF', name: 'Mern Stack Web Development', ltps: '0-0-6-4', credits: 4 },
            { code: '23SDCS11R', name: 'Linux Administration and Automation', ltps: '0-0-2-4', credits: 2 },
            { code: '23CS2205R', name: 'Design and Analysis of Algorithms', ltps: '3-0-2-4', credits: 5 }
        ];

        const tableStyle = { width: '100%', borderCollapse: 'collapse', margin: '20px 0' };
        const thStyle = { padding: '10px', border: '1px solid black', textAlign: 'center', backgroundColor: '#f2f2f2' };
        const tdStyle = { padding: '10px', border: '1px solid black', textAlign: 'center' };

        return (
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', color: '#000000' }}>
                <Header />
                <div style={{ textAlign: 'center', margin: '20px 0' }}>
                    <button onClick={() => this.setVisibleSection('students')} style={{ backgroundColor: 'black', color: 'white', border: 'none', padding: '10px 20px', margin: '5px', cursor: 'pointer', fontSize: '16px', transition: 'background-color 0.3s' }}>
                        Students
                    </button>
                    <button onClick={() => this.setVisibleSection('faculty')} style={{ backgroundColor: 'black', color: 'white', border: 'none', padding: '10px 20px', margin: '5px', cursor: 'pointer', fontSize: '16px', transition: 'background-color 0.3s' }}>
                        Faculty
                    </button>
                    <button onClick={() => this.setVisibleSection('timetable')} style={{ backgroundColor: 'black', color: 'white', border: 'none', padding: '10px 20px', margin: '5px', cursor: 'pointer', fontSize: '16px', transition: 'background-color 0.3s' }}>
                        Timetable
                    </button>
                    <button onClick={() => this.setVisibleSection('courses')} style={{ backgroundColor: 'black', color: 'white', border: 'none', padding: '10px 20px', margin: '5px', cursor: 'pointer', fontSize: '16px', transition: 'background-color 0.3s' }}>
                        Courses
                    </button>
                </div>

                {visibleSection === 'students' && (
                    <div style={{ margin: '20px 0' }}>
                        <h2>Students</h2>
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={thStyle}>ID</th>
                                    <th style={thStyle}>Name</th>
                                    <th style={thStyle}>Branch</th>
                                    <th style={thStyle}>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map(student => (
                                    <Student key={student.id} {...student} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {visibleSection === 'faculty' && (
                    <div style={{ margin: '20px 0' }}>
                        <h2>Faculty</h2>
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={thStyle}>ID</th>
                                    <th style={thStyle}>Name</th>
                                    <th style={thStyle}>Designation</th>
                                    <th style={thStyle}>Department</th>
                                </tr>
                            </thead>
                            <tbody>
                                {faculties.map(faculty => (
                                    <Faculty key={faculty.id} {...faculty} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {visibleSection === 'timetable' && (
                    <div style={{ margin: '20px 0' }}>
                        <h2>Timetable</h2>
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={thStyle}>Day</th>
                                    <th style={thStyle}>Hours</th>
                                    <th style={thStyle}>Course</th>
                                    <th style={thStyle}>Room</th>
                                </tr>
                            </thead>
                            <tbody>
                                {timetable.map((time, index) => (
                                    <Timetable key={index} {...time} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {visibleSection === 'courses' && (
                    <div style={{ margin: '20px 0' }}>
                        <h2>Courses</h2>
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={thStyle}>Code</th>
                                    <th style={thStyle}>Name</th>
                                    <th style={thStyle}>L-T-P-S</th>
                                    <th style={thStyle}>Credits</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map(course => (
                                    <Courses key={course.code} {...course} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                <Footer />
                <User name="Nishant" type="Student" branch="Computer Science and Engineering"/>
            </div>
            
        );
    }

}

export default App;

