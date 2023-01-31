export enum MAIN_ROUTES {
    default = '/',
    logout = '/logout',
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
    student = '/student',
    main = '/main',
    vacancies = '/vacancies',
    candidates = '/candidates',
    team = '/team',
}
