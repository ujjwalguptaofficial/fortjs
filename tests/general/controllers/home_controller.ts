import { Controller, viewResult, worker, HTTP_METHOD, route, jsonResult, htmlResult, textResult, defaultWorker, redirectResult, singleton } from "fortjs";
import { UserService } from "../services/user_service";
import { MySingleton } from "../extra/singleton";
import { StudentService } from "../services/student_service";
import { EmployeeService } from "../services/employee_service";
import { MyComponentOption } from "../extra/my_component_option";

export class HomeController extends Controller {

    userService: UserService;
    studentService: StudentService;
    employeeService: EmployeeService;

    constructor(@singleton(UserService) userService,
        @singleton(StudentService) studentService,
        @singleton(EmployeeService) employeeService) {

        super();
        this.userService = userService;
        this.studentService = studentService;
        this.employeeService = employeeService;
    }

    @worker(HTTP_METHOD.Post)
    async login() {
        const emailId = this.body.emailId;
        const pwd = this.body.password;
        if (emailId != null && pwd != null) {
            const userService = new UserService();
            const user = userService.getUserByEmail(emailId);
            if (user != null && (this.option as MyComponentOption).timingSafeEqual(user.password, pwd)) {
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

    @worker(HTTP_METHOD.Get)
    @route("/login")
    async getloginForm() {
        const result = viewResult("default/login_form.html");
        return result;
    }

    @worker(HTTP_METHOD.Get)
    text() {
        return new Promise((resolve, reject) => {
            resolve(textResult("text"));
        });
    }

    @worker()
    json() {
        return new Promise((resolve, reject) => {
            resolve(jsonResult({ key: 'hello', value: 'world' }));
        });
    }

    @worker()
    html() {
        return new Promise((resolve, reject) => {
            resolve(htmlResult(`<h1>hey there i am html</h1>`));
        });
    }

    @worker(HTTP_METHOD.Post)
    post() {
        return new Promise((resolve, reject) => {
            resolve(jsonResult(this.body));
        });
    }


    @worker()
    async redirect() {
        return await redirectResult("html");
    }

    @worker()
    async getData() {
        return jsonResult(this.data);
    }

    @worker()
    async logOut() {
        await this.session.clear();
        return textResult("Logged out");
    }

    @worker()
    async getEnv() {
        return jsonResult(process.env);
    }

    @worker()
    async getUsers() {
        return jsonResult(this.userService.getUsers());
    }

    @worker
    async getStudents() {
        return jsonResult(this.studentService.getAll());
    }

    @worker()
    async getEmployees() {
        return jsonResult(this.employeeService.getAll());
    }

    @worker()
    async getAllFromServices(@singleton(UserService) userService,
        @singleton(StudentService) studentService,
        @singleton(EmployeeService) employeeService) {
        return jsonResult([...studentService.getAll(), ...employeeService.getAll(),
        ...userService.getUsers()]);
    }

    @worker()
    @route("/param/{value}")
    async getParam() {
        return jsonResult({
            param: this.param,
            query: this.query
        });
    }
}