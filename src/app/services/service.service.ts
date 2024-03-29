import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject } from '../models/subject';
import { Student } from '../models/student';
import { Quizs } from '../models/quizs';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';


@Injectable({
	providedIn: 'root'
})
export class ServiceService {
	private studentsUrl = 'assets/Students.json';
	private subjectsUrl = 'assets/Subjects.json';

	private static readonly StudentsStorageKey = 'students';
	private students: Student[];
	private displayData: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);
	public listStudents: Observable<Student[]> = this.displayData.asObservable();
	public setlogin = [];
	private ID = 3;

	getListSubjects(): Observable<Subject[]> {
		return this.http.get<Subject[]>(this.subjectsUrl)
	};
	getListUsers(): Observable<Student[]> {
		return this.http.get<Student[]>(this.studentsUrl)
	};

	getListQuizs(id: string): Observable<Quizs[]> {
		const url = `assets/Quizs/` + `${id}` + `.js`
		return this.http.get<Quizs[]>(url);
	};

	constructor(
		private http: HttpClient,
		private storageService: LocalStorageService
	) { }

	loadLocalStorage() {
		this.students = this.storageService.getValue<Student[]>(ServiceService.StudentsStorageKey) || [];
		this.displayData.next(this.students);
	}
	updateLocalStorage() {
		this.storageService.setStudent(ServiceService.StudentsStorageKey, this.students);
		this.displayData.next(this.students);

	}

	addStudent(
		username: string, password: string, fullname: string, email: string,
		gender: string, birthday: string, marks: number
	) {
		const id = (this.students.length + this.ID) + 1;
		const newStudent = new Student(id, username, password, fullname, email, gender, birthday, marks);
		this.students.push(newStudent);
		this.updateLocalStorage();
	}

	onEditStudent(
		id: number, username: string, password: string,
		fullname: string, email: string, gender: string,
		birthday: string,  marks: number
	) {
		const index = this.students.findIndex(s => s.id === id);
		const student = this.students[index];
		student.username = username;
		student.password = password;
		student.fullname = fullname;
		student.email = email;
		student.gender = gender;
		student.birthday = birthday;
		
		student.marks = marks;
		this.students.splice(index, 1, student);
		this.setlogin.splice(0, 1, student);
		localStorage.setItem("Login", JSON.stringify(this.setlogin));
		this.updateLocalStorage();
	}
}