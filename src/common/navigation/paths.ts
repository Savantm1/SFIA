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
    main = '/main',
    courses = '/courses',
    vacancies = '/vacancies',
}

export enum EMPLOYER_ROUTES {
    employer = '/employer',
    main = '/employer/main',
    vacancies = '/employer/vacancies',
    candidates = '/employer/candidates',
    team = '/employer/team',
}
