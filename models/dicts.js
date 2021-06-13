//Справочник для курсов
let course = [
    {
        text:'1 курс',
        value: 'first_course'
    },
    {
        text:'2 курс',
        value:'second_course'
    },
    {
        text: '3 курс',
        value:'third_course'
    },
    {
        text: '4 курс',
        value:'forth_course'
    }];
//Справочник для типов заданий
let type_of_answer = [
    {
        text:'Контрольные работы',
        value: 'exams'
    },
    {
        text:'Лабораторные работы',
        value:'labs'
    },
    {
        text: 'Идз',
        value:'problems'
    },
]
//Справочники для предметов заданий
let subjects_1_course = ['','','',''];
let subjects_2_course = ['','','',''];
let subjects_3_course = ['','','',''];
let subjects_4_course = ['','','',''];

module.exports = {
    course,
    type_of_answer,
    subjects_1_course,
    subjects_2_course,
    subjects_3_course,
    subjects_4_course
};
