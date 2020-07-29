import { Controller, viewResult, Worker, HTTP_METHOD, Route, jsonResult, htmlResult, textResult, DefaultWorker, redirectResult, Singleton } from "fortjs";
import { UserService } from "../services/user_service";
import { MySingleton } from "../extra/singleton";
import { StudentService } from "../services/student_service";
import { EmployeeService } from "../services/employee_service";

export class HomeController extends Controller {

    userService: UserService;
    studentService: StudentService;
    employeeService: EmployeeService;

    constructor(@Singleton(UserService) userService,
        @Singleton(StudentService) studentService,
        @Singleton(EmployeeService) employeeService) {

        super();
        this.userService = userService;
        this.studentService = studentService;
        this.employeeService = employeeService;
    }

    @Worker(HTTP_METHOD.Post)
    async login() {
        const emailId = this.body.emailId;
        const pwd = this.body.password;
        if (emailId != null && pwd != null) {
            const userService = new UserService();
            const user = userService.getUserByEmail(emailId);
            if (user != null && this.option.timingSafeEqual(user.password, pwd)) {
                this.session.set('userId', user.id);
                this.session.set('emailId', emailId);
                return textResult(`Authenticated`);
            }
            else {
                const result = textResult("Invalid credential");
                return result;
            }
        }
        else {
            const result = textResult("Invalid credential");
            return result;
        }
    }

    @Worker(HTTP_METHOD.Get)
    @Route("/login")
    async getloginForm() {
        const result = viewResult("default/login_form.html");
        return result;
    }

    @Worker(HTTP_METHOD.Get)
    text() {
        return new Promise((resolve, reject) => {
            resolve(textResult("text"));
        });
    }

    @Worker()
    json() {
        return new Promise((resolve, reject) => {
            resolve(jsonResult({ key: 'hello', value: 'world' }));
        });
    }

    @Worker()
    html() {
        return new Promise((resolve, reject) => {
            resolve(htmlResult(`<h1>hey there i am html</h1>`));
        });
    }

    @Worker(HTTP_METHOD.Post)
    post() {
        return new Promise((resolve, reject) => {
            resolve(jsonResult(this.body));
        });
    }


    @Worker()
    async redirect() {
        return await redirectResult("html");
    }

    @Worker()
    async getData() {
        return jsonResult(this.data);
    }

    @Worker()
    async logOut() {
        await this.session.clear();
        return textResult("Logged out");
    }

    @Worker()
    async getEnv() {
        return jsonResult(process.env);
    }

    @Worker()
    async getUsers() {
        return jsonResult(this.userService.getUsers());
    }

    @Worker()
    async getStudents() {
        return jsonResult(this.studentService.getAll());
    }

    @Worker()
    async getEmployees() {
        return jsonResult(this.employeeService.getAll());
    }

    @Worker()
    async getAllFromServices(@Singleton(UserService) userService,
        @Singleton(StudentService) studentService,
        @Singleton(EmployeeService) employeeService) {
        return jsonResult([...studentService.getAll(), ...employeeService.getAll(),
        ...userService.getUsers()]);
    }
}