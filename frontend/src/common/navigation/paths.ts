export enum MAIN_ROUTES {
    default = '/',
    logout = '/',
    login = '/login',
    registration = '/select-registration',
    registrationStudent = '/student-registration',
    registrationEmployer = '/employer-registration',
}

export enum STUDENT_ROUTES {
    student = '/student',
    main = '/student/main',
    courses = '/student/courses',
    coursesWithMember = '/student/courses/:memberId',
    vacancies = '/student/vacancies',
}

export enum EMPLOYER_ROUTES {
    employer = '/employer',
    main = '/employer/main',
    vacancies = '/employer/vacancies',
    vacancy = '/employer/vacancies/:id',
    candidates = '/employer/candidates',
    member = '/employer/members/:id',
    team = '/employer/team',
}
